import { useEffect, useId, useRef, useState } from "react";
import type { Experiencia } from "@/lib/experiencias";

/**
 * Uma experiência como carta: ano no canto, nome, cargo, texto, etiquetas e link.
 * Quando as cartas estão empilhadas (abaixo de 1400px), o texto mostra três
 * linhas e um "Ler mais" — só se ele de fato passar de três linhas.
 */
export function Carta({ exp }: { exp: Experiencia }) {
  const textoId = useId();
  const textoRef = useRef<HTMLParagraphElement>(null);
  const [aberto, setAberto] = useState(false);
  const [cortado, setCortado] = useState(false);

  // Mede se o texto, recortado em três linhas pelo CSS, esconde alguma coisa
  useEffect(() => {
    const p = textoRef.current;
    if (!p) return;
    const medir = () => {
      if (aberto) return;
      setCortado(p.scrollHeight > p.clientHeight + 1);
    };
    medir();
    const observador = new ResizeObserver(medir);
    observador.observe(p);
    return () => observador.disconnect();
  }, [aberto]);

  return (
    <article className="carta">
      <span className="carta_canto" aria-hidden="true">{exp.ano}</span>
      <header className="carta_cabeca">
        <span className="carta_ponto" aria-hidden="true"></span>
        <h3 className="carta_titulo">{exp.titulo}</h3>
        <span className="carta_papel">{exp.papel}</span>
      </header>

      <p ref={textoRef} id={textoId} className="carta_texto" data-aberto={aberto || undefined}>
        {exp.texto}
      </p>
      {(cortado || aberto) && (
        <button
          type="button"
          className="carta_mais"
          aria-expanded={aberto}
          aria-controls={textoId}
          onClick={() => setAberto((a) => !a)}
        >
          {aberto ? "Ler menos" : "Ler mais"}
        </button>
      )}

      {exp.trabalhos && (
        <ul className="carta_trabalhos" aria-label="Trabalhos de design gráfico">
          {exp.trabalhos.map((t) => (
            <li key={t.nome}>
              <a className="carta_miniatura" href={exp.link?.href} target="_blank" rel="noopener">
                <img src={t.frente.src} alt={t.frente.alt} width={t.frente.w} height={t.frente.h} />
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
        <a className="projeto_link carta_link" href={exp.link.href} target="_blank" rel="noopener">
          {exp.link.rotulo}
        </a>
      )}
    </article>
  );
}
