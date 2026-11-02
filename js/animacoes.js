// Revela blocos de conteúdo uma única vez quando entram na tela.
// O estado escondido só vale com a classe .js-anima (adicionada no <head>);
// sem JS ou sem IntersectionObserver, o conteúdo fica visível normalmente.
(function () {
  const raiz = document.documentElement;
  if (!("IntersectionObserver" in window)) {
    raiz.classList.remove("js-anima");
    return;
  }

  const grupos = [
    // [seletor, atraso entre itens irmãos em segundos]
    [".secao_cabeca", 0],
    [".desenha", 0],
    [".projeto", 0.12],
    [".anotacao", 0.08],
    [".cursos", 0],
    [".contato_cabeca", 0],
    [".contato_lista li", 0.08],
  ];

  const elementos = [];
  grupos.forEach(([seletor, passo]) => {
    const lista = document.querySelectorAll(seletor);
    lista.forEach((el, i) => {
      // Os projetos aparecem na ordem visual da linha do tempo (2024 → 2026)
      const ordem = seletor === ".projeto" ? lista.length - 1 - i : i;
      if (passo) el.style.setProperty("--atraso", Math.min(ordem * passo, 0.3) + "s");
      elementos.push(el);
    });
  });

  const observador = new IntersectionObserver(
    (entradas) => {
      entradas.forEach((entrada) => {
        if (!entrada.isIntersecting) return;
        const el = entrada.target;
        el.classList.add("revelado");
        // Depois de revelado, o atraso não deve atrasar o hover.
        el.addEventListener("transitionend", () => el.style.removeProperty("--atraso"), { once: true });
        observador.unobserve(el);
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0 }
  );

  elementos.forEach((el) => observador.observe(el));
})();

// Destaca no cabeçalho o link da seção que está no meio da tela.
(function () {
  if (!("IntersectionObserver" in window)) return;
  const links = document.querySelectorAll('.header a[href^="#"]');
  const porId = {};
  links.forEach((a) => (porId[a.getAttribute("href").slice(1)] = a));

  const espiao = new IntersectionObserver(
    (entradas) => {
      entradas.forEach((entrada) => {
        const link = porId[entrada.target.id];
        if (!link) return;
        if (entrada.isIntersecting) {
          links.forEach((a) => a.removeAttribute("aria-current"));
          link.setAttribute("aria-current", "true");
        } else if (link.hasAttribute("aria-current")) {
          link.removeAttribute("aria-current");
        }
      });
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );

  Object.keys(porId).forEach((id) => {
    const secao = document.getElementById(id);
    if (secao) espiao.observe(secao);
  });
})();

// Copiar o e-mail: o botão só aparece onde a área de transferência existe
(function () {
  const botao = document.querySelector("[data-copiar]");
  const status = document.querySelector("[data-copiar-status]");
  if (!botao || !navigator.clipboard) return;
  botao.hidden = false;
  const rotulo = botao.textContent;
  let espera;
  botao.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(botao.dataset.copiar);
      botao.textContent = "Copiado";
      botao.dataset.estado = "copiado";
      if (status) status.textContent = "E-mail copiado para a área de transferência";
    } catch (e) {
      botao.textContent = "Não foi possível copiar";
    }
    clearTimeout(espera);
    espera = setTimeout(() => {
      botao.textContent = rotulo;
      delete botao.dataset.estado;
      if (status) status.textContent = "";
    }, 2200);
  });
})();

// Relógio do Distrito Federal (horário de Brasília) no eixo da introdução
(function () {
  const alvo = document.querySelector("[data-relogio]");
  if (!alvo || !window.Intl) return;
  const formato = new Intl.DateTimeFormat("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "America/Sao_Paulo",
  });
  const atualizar = () => {
    alvo.textContent = " · DF " + formato.format(new Date());
  };
  atualizar();
  // Atualiza na virada de cada minuto
  setTimeout(() => {
    atualizar();
    setInterval(atualizar, 60000);
  }, 60000 - (Date.now() % 60000));
})();

// Painel em profundidade: o hero inclina alguns graus seguindo o mouse.
// Amortecido, só em telas com mouse, desligado com movimento reduzido.
(function () {
  const palco = document.querySelector(".onda_palco");
  const cena = document.querySelector(".onda_cena");
  if (!palco || !cena) return;
  const comMouse = window.matchMedia("(hover: hover) and (pointer: fine) and (min-width: 901px)");
  const reduzir = window.matchMedia("(prefers-reduced-motion: reduce)");
  const MAX_Y = 5; // graus, eixo vertical (esquerda/direita)
  const MAX_X = 3.5; // graus, eixo horizontal (cima/baixo)
  let alvoX = 0, alvoY = 0, atualX = 0, atualY = 0, quadro = 0;

  function passo() {
    atualX += (alvoX - atualX) * 0.08;
    atualY += (alvoY - atualY) * 0.08;
    cena.style.setProperty("--rx", atualX.toFixed(3) + "deg");
    cena.style.setProperty("--ry", atualY.toFixed(3) + "deg");
    if (Math.abs(alvoX - atualX) > 0.005 || Math.abs(alvoY - atualY) > 0.005) {
      quadro = requestAnimationFrame(passo);
    } else {
      quadro = 0;
    }
  }

  const iniciar = () => {
    if (!quadro) quadro = requestAnimationFrame(passo);
  };

  // Escuta a janela inteira: o mouse nos cantos da tela ou sobre o
  // cabeçalho continua inclinando o painel, sem voltar ao centro.
  function voltarAoCentro() {
    alvoX = 0;
    alvoY = 0;
    iniciar();
  }

  let heroVisivel = true;
  new IntersectionObserver(([entrada]) => {
    heroVisivel = entrada.isIntersecting;
    if (!heroVisivel) voltarAoCentro();
  }).observe(palco);

  const limitar = (v) => Math.max(-0.5, Math.min(0.5, v));

  window.addEventListener("pointermove", (e) => {
    if (!comMouse.matches || reduzir.matches || !heroVisivel || e.pointerType !== "mouse") return;
    const r = palco.getBoundingClientRect();
    // horizontal: relativo à largura da janela (os cantos da tela são o máximo)
    const px = limitar(e.clientX / window.innerWidth - 0.5);
    // vertical: relativo ao palco, limitado nas bordas
    const py = limitar((e.clientY - r.top) / r.height - 0.5);
    alvoY = px * 2 * MAX_Y;
    alvoX = -py * 2 * MAX_X;
    iniciar();
  }, { passive: true });

  // Só volta ao centro quando o mouse sai da janela
  document.documentElement.addEventListener("mouseleave", voltarAoCentro);
  window.addEventListener("blur", voltarAoCentro);
})();

// Passagem no celular: o CSS precisa da altura real do hero empilhado
// e do cabeçalho para prender o palco na medida certa.
(function () {
  const onda = document.querySelector(".onda");
  const palco = document.querySelector(".onda_palco");
  const header = document.querySelector(".header");
  if (!onda || !palco || !("ResizeObserver" in window)) return;
  const medir = () => {
    onda.style.setProperty("--altura-palco-movel", palco.offsetHeight + "px");
    if (header) onda.style.setProperty("--altura-cabecalho", header.offsetHeight + "px");
  };
  new ResizeObserver(medir).observe(palco);
  if (header) new ResizeObserver(medir).observe(header);
})();
