import { useEffect, useRef } from "react";

/**
 * A linha de sinal do Contato, viva: o mesmo desenho (linha reta com uma
 * ondulação), mas a ondulação respira e as cristas correm dentro dela,
 * como áudio num osciloscópio. Um segundo pulso, bem menor, aparece à
 * direita. Só anima com o rodapé na tela; com movimento reduzido, fica
 * parada no desenho original.
 */

const LARGURA = 1440;
const BASE = 30;
const PASSO = 8; // px do viewBox entre pontos da linha
const ORIGINAL =
  "M0 30 H420 C450 30 460 6 490 6 C520 6 530 54 560 54 C590 54 600 30 630 30 H1440";

// um pacote de onda: senoide dentro de um envelope gaussiano
function pacote(x: number, centro: number, largura: number, amplitude: number, comprimento: number, fase: number) {
  const d = x - centro;
  const envelope = Math.exp(-(d * d) / (2 * largura * largura));
  return amplitude * envelope * -Math.sin((2 * Math.PI * d) / comprimento + fase);
}

function desenhar(t: number) {
  // pacote principal: respira entre ~14 e ~25 de amplitude e passeia devagar
  const amplitude = 19.5 + 5.5 * Math.sin(t * 0.9) + 2 * Math.sin(t * 2.3);
  const centro = 525 + 90 * Math.sin(t * 0.22);
  // pulso secundário, discreto
  const amplitude2 = 3 + 2.5 * Math.max(0, Math.sin(t * 0.6 + 1.3));
  const centro2 = 1040 + 60 * Math.sin(t * 0.17 + 2);

  let d = "";
  for (let x = 0; x <= LARGURA; x += PASSO) {
    const y =
      BASE +
      pacote(x, centro, 62, amplitude, 140, t * 2.4) +
      pacote(x, centro2, 40, amplitude2, 70, t * 3.1);
    d += (x === 0 ? "M" : "L") + x + " " + y.toFixed(2);
  }
  return d;
}

export function SinalContato() {
  const caminho = useRef<SVGPathElement>(null);

  useEffect(() => {
    const path = caminho.current;
    if (!path) return;
    const reduzir = window.matchMedia("(prefers-reduced-motion: reduce)");
    let quadro = 0;
    let visivel = false;
    let inicio = performance.now();

    const animar = (agora: number) => {
      path.setAttribute("d", desenhar((agora - inicio) / 1000));
      quadro = requestAnimationFrame(animar);
    };
    const parar = () => {
      cancelAnimationFrame(quadro);
      quadro = 0;
    };
    const atualizar = () => {
      if (visivel && !reduzir.matches && document.visibilityState === "visible") {
        if (!quadro) {
          inicio = performance.now();
          quadro = requestAnimationFrame(animar);
        }
      } else {
        parar();
        if (reduzir.matches) path.setAttribute("d", ORIGINAL);
      }
    };

    const observador = new IntersectionObserver(([entrada]) => {
      visivel = entrada.isIntersecting;
      atualizar();
    });
    observador.observe(path);
    document.addEventListener("visibilitychange", atualizar);
    reduzir.addEventListener("change", atualizar);

    return () => {
      parar();
      observador.disconnect();
      document.removeEventListener("visibilitychange", atualizar);
      reduzir.removeEventListener("change", atualizar);
    };
  }, []);

  return (
    <svg className="contato_sinal desenha" viewBox="0 0 1440 60" preserveAspectRatio="none" aria-hidden="true" focusable="false">
      <path ref={caminho} d={ORIGINAL} />
    </svg>
  );
}
