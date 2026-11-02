import { vars } from "@/lib/vars";

// Cursos intensivos concluídos (horas reais)
const cursos = [
  { horas: 23, nome: "HTML e CSS para Iniciantes" },
  { horas: 17, nome: "UX & UI Design" },
  { horas: 40, nome: "Algoritmos e Lógica de Programação" },
  { horas: 37, nome: "JavaScript Completo ES6" },
  { horas: 80, nome: "Python 3" },
];

const maxHoras = Math.max(...cursos.map((c) => c.horas));
const totalHoras = cursos.reduce((soma, c) => soma + c.horas, 0);

// Graduação: 4 anos, de 2024 ao início de 2028
const INICIO = new Date(2024, 1, 1);
const FIM = new Date(2028, 1, 1);
const ANOS = [2024, 2025, 2026, 2027, 2028];
const progresso = Math.min(1, Math.max(0, (Date.now() - INICIO.getTime()) / (FIM.getTime() - INICIO.getTime())));

// Inglês: escala de nível, aceso até Intermediário
const NIVEIS = ["Básico", "Intermediário", "Avançado", "Fluente"];
const NIVEL_ATUAL = 1;

// A onda dos cursos: um pico por curso, altura proporcional às horas.
// viewBox 1000 × 200; base em y 190; o pico mais alto chega a y 14.
const W = 1000;
const BASE = 190;
const TOPO = 14;
function picoY(horas: number) {
  return BASE - ((BASE - TOPO) * horas) / maxHoras;
}
function ondaCursos() {
  const col = W / cursos.length;
  const meia = col * 0.2; // meia-largura do pico
  let d = `M0 ${BASE}`;
  cursos.forEach((c, i) => {
    const cx = col * (i + 0.5);
    const y = picoY(c.horas);
    d += ` H${(cx - meia * 1.6).toFixed(1)}`;
    d += ` C${(cx - meia * 0.9).toFixed(1)} ${BASE} ${(cx - meia * 0.6).toFixed(1)} ${y.toFixed(1)} ${cx.toFixed(1)} ${y.toFixed(1)}`;
    d += ` C${(cx + meia * 0.6).toFixed(1)} ${y.toFixed(1)} ${(cx + meia * 0.9).toFixed(1)} ${BASE} ${(cx + meia * 1.6).toFixed(1)} ${BASE}`;
  });
  return d + ` H${W}`;
}

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

      {/* Duas leituras de instrumento: a graduação e o inglês */}
      <div className="formacao_leituras">
        <div className="anotacao leitura leitura--graduacao">
          <h3 className="anotacao_valor">Engenharia de Software</h3>
          <span className="anotacao_extra">Bacharelado · IESB · em andamento</span>

          <div
            className="medidor"
            role="img"
            aria-label={`Graduação de 2024 a 2028: cerca de ${Math.round(progresso * 100)}% concluída, conclusão prevista no início de 2028`}
            style={vars({ "--progresso": progresso })}
          >
            <span className="medidor_trilho" aria-hidden="true"></span>
            <span className="medidor_cheio" aria-hidden="true"></span>
            <span className="medidor_ponto" aria-hidden="true"></span>
            <ol className="medidor_marcas" aria-hidden="true">
              {ANOS.map((ano, i) => (
                <li key={ano} style={vars({ "--pos": i / (ANOS.length - 1) })}>
                  {ano}
                </li>
              ))}
            </ol>
          </div>
          <span className="leitura_nota">Conclusão prevista no início de 2028</span>
        </div>

        <div className="anotacao leitura leitura--idioma">
          <h3 className="anotacao_valor">Inglês</h3>
          <span className="anotacao_extra">Idioma · Intermediário</span>

          <div
            className="medidor medidor--escala"
            role="img"
            aria-label="Nível de inglês: intermediário, numa escala de básico a fluente"
            style={vars({ "--progresso": NIVEL_ATUAL / (NIVEIS.length - 1) })}
          >
            <span className="medidor_trilho" aria-hidden="true"></span>
            <span className="medidor_cheio" aria-hidden="true"></span>
            <span className="medidor_ponto" aria-hidden="true"></span>
            <ol className="medidor_marcas" aria-hidden="true">
              {NIVEIS.map((nivel, i) => (
                <li key={nivel} className={i === NIVEL_ATUAL ? "atual" : undefined} style={vars({ "--pos": i / (NIVEIS.length - 1) })}>
                  {nivel}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>

      {/* Os cursos como espectro: um pico por curso */}
      <figure className="cursos">
        <div className="cursos_cabeca">
          <h3 className="cursos_titulo">Cursos intensivos concluídos</h3>
          <p className="cursos_total">
            <span className="cursos_total_numero">{totalHoras}h</span>
            <span className="cursos_total_rotulo">em {cursos.length} cursos</span>
          </p>
        </div>

        <div className="cursos_onda" aria-hidden="true">
          <svg className="desenha" viewBox={`0 0 ${W} 200`} preserveAspectRatio="none" focusable="false">
            <path d={ondaCursos()} />
          </svg>
          {cursos.map((c, i) => (
            <span
              key={c.nome}
              className="cursos_ponto"
              style={vars({ "--x": `${((i + 0.5) / cursos.length) * 100}%`, "--y": `${(picoY(c.horas) / 200) * 100}%` })}
            ></span>
          ))}
        </div>

        <ol className="cursos_lista" style={vars({ "--max": maxHoras })}>
          {cursos.map((curso) => (
            <li key={curso.nome} className="curso" style={vars({ "--h": curso.horas })}>
              <span className="curso_haste" aria-hidden="true"></span>
              <span className="curso_horas">{curso.horas}h</span>
              <span className="curso_nome">{curso.nome}</span>
            </li>
          ))}
        </ol>
      </figure>
    </section>
  );
}
