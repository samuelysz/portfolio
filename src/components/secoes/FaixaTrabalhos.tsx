import type { ComponentType } from "react";
import { LogoLoop as LogoLoopJS } from "@/components/LogoLoop";
import { experiencias, type Experiencia } from "@/lib/experiencias";

// o LogoLoop vem em JavaScript; aqui ganha um tipo simples
const LogoLoop = LogoLoopJS as unknown as ComponentType<Record<string, unknown>>;

/**
 * Cartas das experiências: cartas em pé, no visual do site, passando bem
 * devagar da direita para a esquerda (LogoLoop, React Bits). A faixa para
 * quando o mouse entra e a carta apontada cresce por cima das vizinhas.
 * No celular dá para arrastar. Com movimento reduzido, a faixa fica parada.
 */

// na faixa, da mais antiga para a mais nova (a mesma leitura da linha do tempo)
const cartas = [...experiencias].reverse();

function Carta({ exp }: { exp: Experiencia }) {
  return (
    <article className="carta">
      <span className="carta_canto" aria-hidden="true">{exp.ano}</span>
      <header className="carta_cabeca">
        <span className="carta_ponto" aria-hidden="true"></span>
        <h3 className="carta_titulo">{exp.titulo}</h3>
        <span className="carta_papel">{exp.papel}</span>
      </header>

      <p className="carta_texto">{exp.texto}</p>

      {exp.trabalhos && (
        <ul className="carta_trabalhos" aria-label="Trabalhos de design gráfico">
          {exp.trabalhos.map((t) => (
            <li key={t.nome}>
              <a className="carta_miniatura" href={exp.link?.href} target="_blank" rel="noopener" draggable={false}>
                <img src={t.frente.src} alt={t.frente.alt} width={t.frente.w} height={t.frente.h} draggable={false} />
              </a>
            </li>
          ))}
        </ul>
      )}

      <ul className="etiquetas carta_etiquetas">
        {exp.etiquetas.map((e) => (
          <li key={e}>{e}</li>
        ))}
      </ul>

      {exp.link && (
        <a className="projeto_link carta_link" href={exp.link.href} target="_blank" rel="noopener" draggable={false}>
          {exp.link.rotulo}
        </a>
      )}

      <span className="carta_canto carta_canto--baixo" aria-hidden="true">{exp.ano}</span>
    </article>
  );
}

export function FaixaTrabalhos() {
  return (
    <div className="faixa-trabalhos">
      <LogoLoop
        logos={cartas}
        speed={20}
        direction="left"
        gap={28}
        logoHeight={480}
        pauseOnHover
        fadeOut
        fadeOutWidth={0.06}
        intro={false}
        draggable
        ariaLabel="Experiências"
        renderItem={(exp: Experiencia) => <Carta exp={exp} />}
      />
    </div>
  );
}
