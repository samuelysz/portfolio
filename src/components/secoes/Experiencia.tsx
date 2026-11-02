const BEHANCE = "https://www.behance.net/samuelysz";

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

      <div className="linha-tempo">
        <svg className="linha-tempo_sinal desenha" viewBox="0 0 600 140" preserveAspectRatio="none" aria-hidden="true" focusable="false">
          <path d="M0 120 H72 C86 120 92 26 100 26 C108 26 114 120 128 120 H272 C286 120 292 26 300 26 C308 26 314 120 328 120 H472 C486 120 492 26 500 26 C508 26 514 120 528 120 H600" />
        </svg>

        <ol className="projetos">
          <li className="projeto">
            <span className="projeto_ano">2026</span>
            <span className="projeto_ponto" aria-hidden="true"></span>
            <h3 className="projeto_titulo">Bikcraft</h3>
            <span className="projeto_papel">Desenvolvedor</span>
            <p className="projeto_texto">Projeto desenvolvido para colocar em prática o desenvolvimento web utilizando habilidades de front-end e UX e UI Design.</p>
            <ul className="etiquetas">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>UX Design</li>
              <li>UI Design</li>
            </ul>
          </li>

          <li className="projeto">
            <span className="projeto_ano">2025</span>
            <span className="projeto_ponto" aria-hidden="true"></span>
            <h3 className="projeto_titulo">S Design</h3>
            <span className="projeto_papel">Freelancer</span>
            <p className="projeto_texto">Pratiquei habilidades de ilustrações e design de capas para álbuns e singles de artistas, e demais ilustrações por demanda.</p>
            <ul className="etiquetas">
              <li>Photoshop</li>
              <li>Illustrator</li>
              <li>UX Design</li>
              <li>UI Design</li>
            </ul>
            <ul className="trabalhos" aria-label="Trabalhos de design gráfico">
              <li>
                <a className="trabalho" href={BEHANCE} target="_blank" rel="noopener">
                  <span className="trabalho_quadro"><span className="trabalho_giro">
                    <img className="trabalho_frente" src="./img/holy-co.png" alt="Identidade visual Holy co.: logotipo em serifa branca sobre foto em preto e branco de mãos" width="1049" height="830" loading="lazy" />
                    <img className="trabalho_verso" src="./img/holy-co-2.png" alt="Aplicação da marca Holy co.: camiseta preta com a palavra HOLY em branco" width="930" height="721" loading="lazy" />
                  </span></span>
                  <span className="trabalho_nome">Holy co.</span>
                </a>
              </li>
              <li>
                <a className="trabalho" href={BEHANCE} target="_blank" rel="noopener">
                  <span className="trabalho_quadro"><span className="trabalho_giro">
                    <img className="trabalho_frente" src="./img/over-fire.png" alt="Key visual Over Fire: lettering creme em fundo laranja" width="1047" height="819" loading="lazy" />
                    <img className="trabalho_verso" src="./img/over-fire-2.png" alt="Pôsteres do Culto Over Fire: sábado 16h00 na 70X7 Church" width="931" height="715" loading="lazy" />
                  </span></span>
                  <span className="trabalho_nome">Over Fire · Key visual</span>
                </a>
              </li>
            </ul>
            <a className="projeto_link" href={BEHANCE} target="_blank" rel="noopener">Ver trabalhos no Behance</a>
          </li>

          <li className="projeto">
            <span className="projeto_ano">2024</span>
            <span className="projeto_ponto" aria-hidden="true"></span>
            <h3 className="projeto_titulo">Change &amp; Change</h3>
            <span className="projeto_papel">Voluntário</span>
            <p className="projeto_texto">Projeto desenvolvido durante meu curso de front-end na faculdade, utilizando habilidades de HTML, CSS e JavaScript.</p>
            <ul className="etiquetas">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>UX Design</li>
              <li>UI Design</li>
            </ul>
          </li>
        </ol>
      </div>
    </section>
  );
}
