import { vars } from "@/lib/vars";

const cursos = [
  { horas: 23, nome: "HTML e CSS para Iniciantes" },
  { horas: 17, nome: "UX & UI Design" },
  { horas: 40, nome: "Algoritmos e Lógica de Programação" },
  { horas: 37, nome: "JavaScript Completo ES6" },
];

export function Formacao() {
  return (
    <section className="secao formacao" id="formacao" aria-labelledby="titulo-formacao">
      <div className="secao_cabeca">
        <h2 className="secao_titulo" id="titulo-formacao">Formação</h2>
        <p className="secao_texto">
          No momento estou cursando o bacharelado 🎓 em <strong>Engenharia de Software</strong>. Além disso me mantenho sempre
          atualizado com cursos intensivos online.
        </p>
      </div>

      <div className="formacao_grade">
        <div className="formacao_fixos">
          <div className="anotacao">
            <h3 className="anotacao_valor">Engenharia de Software</h3>
            <span className="anotacao_extra">Bacharel · IESB</span>
          </div>
          <div className="anotacao">
            <h3 className="anotacao_valor">Inglês</h3>
            <span className="anotacao_extra">Idioma · Intermediário</span>
          </div>
        </div>

        <figure className="cursos">
          <h3 className="cursos_titulo">Cursos Intensivos</h3>
          <ol className="cursos_lista">
            {cursos.map((curso) => (
              <li key={curso.nome} className="curso" style={vars({ "--h": curso.horas })}>
                <span className="curso_haste" aria-hidden="true"></span>
                <span className="curso_horas">{curso.horas}h</span>
                <span className="curso_nome">{curso.nome}</span>
              </li>
            ))}
          </ol>
          <figcaption className="cursos_legenda">Altura proporcional às horas de cada curso</figcaption>
        </figure>
      </div>
    </section>
  );
}
