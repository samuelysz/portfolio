import { Carta } from "@/components/secoes/Carta";
import { FaixaTrabalhos } from "@/components/secoes/FaixaTrabalhos";
import { experiencias } from "@/lib/experiencias";

export function Experiencia() {
  return (
    <section className="secao experiencia" id="experiencia" aria-labelledby="titulo-experiencia">
      <div className="secao_cabeca">
        <h2 className="secao_titulo" id="titulo-experiencia">Experiência</h2>
        <p className="secao_texto">
          Desenvolvo alguns projetos como o Bikcraft utilizando apenas <strong>HTML</strong>, <strong>CSS</strong> e{" "}
          <strong>JavaScript</strong>. Também trabalhei utilizando conhecimentos de <strong>UX</strong> e{" "}
          <strong>UI Design</strong> em outros projetos.
        </p>
      </div>

      {/* Linha do tempo: cada experiência é uma carta embaixo do seu ano */}
      <div className="linha-tempo">
        <svg className="linha-tempo_sinal desenha" viewBox="0 0 600 140" preserveAspectRatio="none" aria-hidden="true" focusable="false">
          <path d="M0 120 H47 C61 120 67 26 75 26 C83 26 89 120 103 120 H197 C211 120 217 26 225 26 C233 26 239 120 253 120 H347 C361 120 367 26 375 26 C383 26 389 120 403 120 H497 C511 120 517 26 525 26 C533 26 539 120 553 120 H600" />
        </svg>

        {/* Do mais novo para o mais antigo; no desktop a linha lê da esquerda (2022) para a direita (2026) */}
        <ol className="projetos">
          {experiencias.map((exp) => (
            <li className="projeto" key={exp.titulo}>
              <span className="projeto_ano">{exp.ano}</span>
              <span className="projeto_ponto" aria-hidden="true"></span>
              <Carta exp={exp} />
            </li>
          ))}
        </ol>
      </div>

      <FaixaTrabalhos />
    </section>
  );
}
