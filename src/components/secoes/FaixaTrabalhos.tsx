import type { ComponentType } from "react";
import { LogoLoop as LogoLoopJS } from "@/components/LogoLoop";
import { BEHANCE, experiencias } from "@/lib/experiencias";

// o LogoLoop vem em JavaScript; aqui ganha um tipo simples
const LogoLoop = LogoLoopJS as unknown as ComponentType<Record<string, unknown>>;

/**
 * Faixa de trabalhos de design gráfico (S Design): as peças passam bem
 * devagar e a faixa para quando o mouse entra. Com movimento reduzido,
 * fica parada (o próprio componente cuida).
 */

type Peca = { src: string; alt: string; w: number; h: number; nome: string; tipo: string };

const pecas: Peca[] = (experiencias.find((e) => e.trabalhos)?.trabalhos ?? []).flatMap((t) => [
  { ...t.frente, nome: t.nome, tipo: "Peça principal" },
  { ...t.verso, nome: t.nome, tipo: "Aplicação" },
]);

export function FaixaTrabalhos() {
  return (
    <div className="faixa-trabalhos">
      <LogoLoop
        logos={pecas}
        speed={24}
        direction="left"
        gap={24}
        pauseOnHover
        fadeOut
        fadeOutWidth={0.06}
        intro={false}
        draggable
        ariaLabel="Trabalhos de design gráfico da S Design"
        renderItem={(p: Peca) => (
          <a className="faixa-cartao" href={BEHANCE} target="_blank" rel="noopener" draggable={false}>
            <img src={p.src} alt={p.alt} width={p.w} height={p.h} draggable={false} />
            <span className="faixa-cartao_legenda">
              <strong>{p.nome}</strong>
              <span>{p.tipo}</span>
            </span>
          </a>
        )}
      />
    </div>
  );
}
