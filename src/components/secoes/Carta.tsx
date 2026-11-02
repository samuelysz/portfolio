import type { Experiencia } from "@/lib/experiencias";

/** Uma experiência como carta: ano no canto, nome, cargo, texto, etiquetas e link. */
export function Carta({ exp }: { exp: Experiencia }) {
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

    </article>
  );
}
