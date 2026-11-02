import FlowField from "@/components/kokonutui/flow-field";
import { vars } from "@/lib/vars";

export function Hero() {
  return (
    <section className="onda" aria-labelledby="titulo-principal">
      {/* Fundo do Hero: Flow Field original do KokonutUI, atrás de todo o conteúdo */}
      <div className="onda_fundo" aria-hidden="true">
        <FlowField density={0.55} />
      </div>

      <div className="onda_palco">
        <div className="onda_cena">
          <div className="onda_grade" aria-hidden="true"></div>
          <img
            className="onda_personagem"
            src="./img/personagem1-recorte.png"
            alt="Ilustração 3D de Samuel Souza"
            width="1657"
            height="949"
            fetchPriority="high"
          />

          <svg className="onda_sinal" viewBox="0 0 1440 820" preserveAspectRatio="none" aria-hidden="true" focusable="false">
            <path
              className="onda_traco"
              d="M0 430 H200 C240 430 250 350 285 350 C320 350 330 445 365 445 C405 445 440 280 470 280 C500 280 525 405 570 405 C630 405 660 420 720 420 C780 420 815 405 870 405 C920 405 950 200 1000 200 C1050 200 1075 470 1105 470 C1130 470 1145 330 1170 330 C1195 330 1210 480 1235 480 C1260 480 1270 680 1290 680 H1300"
            />
            <path className="onda_guias" d="M470 280 L330 214 M1000 200 L1040 140 M1170 330 L1196 296" />
          </svg>

          <ol className="onda_harmonicos" aria-label="Ofícios">
            <li className="harmonico" style={vars({ "--px": "32.64%", "--py": "34.15%", "--nx": "13.9%", "--ny": "21.9%" })}>
              <span className="harmonico_ponto" aria-hidden="true"></span>
              <span className="harmonico_nota"><strong>Front-end</strong></span>
            </li>
            <li className="harmonico" style={vars({ "--px": "69.44%", "--py": "24.39%", "--nx": "72.2%", "--ny": "11%" })}>
              <span className="harmonico_ponto" aria-hidden="true"></span>
              <span className="harmonico_nota"><strong>UX/UI</strong></span>
            </li>
            <li className="harmonico" style={vars({ "--px": "81.25%", "--py": "40.24%", "--nx": "83.2%", "--ny": "27.6%" })}>
              <span className="harmonico_ponto" aria-hidden="true"></span>
              <span className="harmonico_nota">
                <strong>Design Gráfico</strong>{" "}
                <a className="harmonico_link" href="https://www.behance.net/samuelysz" target="_blank" rel="noopener">Ver no Behance</a>
              </span>
            </li>
          </ol>

          <div className="onda_texto">
            <h1 id="titulo-principal">Desenvolvedor<br />Front-end &amp;<br />UX/UI Designer</h1>
            <p>Localizado no Distrito Federal 👨‍💻</p>
          </div>

          <a className="onda_cta botao-sinal" href="#contato">
            <span className="botao-sinal_ponto" aria-hidden="true"></span>Entre em contato
          </a>

          <div className="onda_eixo" aria-hidden="true">
            <span>Entrada</span>
            <span>Sinal: Samuel Souza<span data-relogio=""></span></span>
            <span>Saída</span>
          </div>

          {/* Quadro final da passagem para a Experiência (repete dados da linha do tempo) */}
          <div className="onda_passagem" aria-hidden="true">
            <p className="passagem_cabeca">
              <span className="passagem_rotulo">Trajetória · 3 projetos</span>
              <span className="passagem_anos">2024 — 2026</span>
            </p>
            <ol className="passagem_marcos">
              <li><span className="passagem_ano">2024</span>Change &amp; Change</li>
              <li><span className="passagem_ano">2025</span>S Design</li>
              <li><span className="passagem_ano">2026</span>Bikcraft</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
