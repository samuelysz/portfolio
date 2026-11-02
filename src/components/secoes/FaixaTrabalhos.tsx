import type { ComponentType } from "react";
import { LogoLoop as LogoLoopJS } from "@/components/LogoLoop";

// o LogoLoop vem em JavaScript; aqui ganha um tipo simples
const LogoLoop = LogoLoopJS as unknown as ComponentType<Record<string, unknown>>;

/**
 * Faixa de trabalhos de design gráfico: cartões no visual do site passando
 * bem devagar da direita para a esquerda (LogoLoop, React Bits). A faixa
 * para quando o mouse entra e o cartão apontado cresce por cima dos vizinhos.
 * Com movimento reduzido, a faixa fica parada (o próprio componente cuida).
 */

const BEHANCE = "https://www.behance.net/samuelysz";

const trabalhos = [
  { src: "./img/holy-co.png", nome: "Holy co.", tipo: "Identidade visual", alt: "Identidade visual Holy co.: logotipo em serifa branca sobre foto em preto e branco de mãos" },
  { src: "./img/over-fire.png", nome: "Over Fire", tipo: "Key visual", alt: "Key visual Over Fire: lettering creme em fundo laranja" },
  { src: "./img/holy-co-2.png", nome: "Holy co.", tipo: "Aplicação", alt: "Aplicação da marca Holy co.: camiseta preta com a palavra HOLY em branco" },
  { src: "./img/over-fire-2.png", nome: "Over Fire", tipo: "Pôsteres", alt: "Pôsteres do Culto Over Fire: sábado 16h00 na 70X7 Church" },
];

type Trabalho = (typeof trabalhos)[number];

export function FaixaTrabalhos() {
  return (
    <div className="faixa-trabalhos">
      <LogoLoop
        logos={trabalhos}
        speed={22}
        direction="left"
        gap={20}
        logoHeight={260}
        pauseOnHover
        fadeOut
        fadeOutWidth={0.08}
        intro={false}
        draggable={false}
        ariaLabel="Trabalhos de design gráfico"
        renderItem={(item: Trabalho) => (
          <a className="faixa-cartao" href={BEHANCE} target="_blank" rel="noopener">
            <img src={item.src} alt={item.alt} width="1049" height="830" loading="lazy" draggable={false} />
            <span className="faixa-cartao_legenda">
              <strong>{item.nome}</strong>
              <span>{item.tipo}</span>
            </span>
          </a>
        )}
      />
    </div>
  );
}
