// Comportamentos da landing (antes em js/animacoes.js), com a mesma lógica.
// São ligados uma única vez, depois que o React monta a página.

let iniciado = false;

export function iniciarAnimacoes() {
  // Evita ligar tudo duas vezes (o StrictMode do React roda efeitos em dobro em dev)
  if (iniciado) return;
  iniciado = true;

  revelarAoRolar();
  destacarSecaoNoMenu();
  copiarEmail();
  relogioDF();
  medirHeroNoCelular();
}

// Revela blocos de conteúdo uma única vez quando entram na tela.
// O estado escondido só vale com a classe .js-anima (adicionada no <head>);
// sem JS ou sem IntersectionObserver, o conteúdo fica visível normalmente.
function revelarAoRolar() {
  const raiz = document.documentElement;
  if (!("IntersectionObserver" in window)) {
    raiz.classList.remove("js-anima");
    return;
  }

  const grupos: [string, number][] = [
    // [seletor, atraso entre itens irmãos em segundos]
    [".secao_cabeca", 0],
    [".desenha", 0],
    [".projeto", 0.12],
    [".anotacao", 0.08],
    [".cursos", 0],
    [".contato_cabeca", 0],
    [".contato_lista li", 0.08],
  ];

  const elementos: Element[] = [];
  grupos.forEach(([seletor, passo]) => {
    const lista = document.querySelectorAll<HTMLElement | SVGElement>(seletor);
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
        const el = entrada.target as HTMLElement | SVGElement;
        el.classList.add("revelado");
        // Depois de revelado, o atraso não deve atrasar o hover.
        el.addEventListener("transitionend", () => el.style.removeProperty("--atraso"), { once: true });
        observador.unobserve(el);
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0 }
  );

  elementos.forEach((el) => observador.observe(el));
}

// Destaca no cabeçalho o link da seção que está no meio da tela.
function destacarSecaoNoMenu() {
  if (!("IntersectionObserver" in window)) return;
  const links = document.querySelectorAll<HTMLAnchorElement>('.header a[href^="#"]');
  const porId: Record<string, HTMLAnchorElement> = {};
  links.forEach((a) => (porId[(a.getAttribute("href") ?? "").slice(1)] = a));

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
}

// Copiar o e-mail: o botão só aparece onde a área de transferência existe
function copiarEmail() {
  const botao = document.querySelector<HTMLButtonElement>("[data-copiar]");
  const status = document.querySelector<HTMLElement>("[data-copiar-status]");
  if (!botao || !navigator.clipboard) return;
  botao.hidden = false;
  const rotulo = botao.textContent;
  let espera: ReturnType<typeof setTimeout> | undefined;
  botao.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(botao.dataset.copiar ?? "");
      botao.textContent = "Copiado";
      botao.dataset.estado = "copiado";
      if (status) status.textContent = "E-mail copiado para a área de transferência";
    } catch {
      botao.textContent = "Não foi possível copiar";
    }
    clearTimeout(espera);
    espera = setTimeout(() => {
      botao.textContent = rotulo;
      delete botao.dataset.estado;
      if (status) status.textContent = "";
    }, 2200);
  });
}

// Relógio do Distrito Federal (horário de Brasília) no eixo da introdução
function relogioDF() {
  const alvo = document.querySelector<HTMLElement>("[data-relogio]");
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
}

// Passagem no celular: o CSS precisa da altura real do hero empilhado
// e do cabeçalho para prender o palco na medida certa.
function medirHeroNoCelular() {
  const onda = document.querySelector<HTMLElement>(".onda");
  const palco = document.querySelector<HTMLElement>(".onda_palco");
  const header = document.querySelector<HTMLElement>(".header");
  if (!onda || !palco || !("ResizeObserver" in window)) return;
  const medir = () => {
    onda.style.setProperty("--altura-palco-movel", palco.offsetHeight + "px");
    if (header) onda.style.setProperty("--altura-cabecalho", header.offsetHeight + "px");
  };
  new ResizeObserver(medir).observe(palco);
  if (header) new ResizeObserver(medir).observe(header);
}
