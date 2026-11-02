export function Contato() {
  return (
    <footer className="contato" id="contato" aria-labelledby="titulo-contato">
      <svg className="contato_sinal desenha" viewBox="0 0 1440 60" preserveAspectRatio="none" aria-hidden="true" focusable="false">
        <path d="M0 30 H420 C450 30 460 6 490 6 C520 6 530 54 560 54 C590 54 600 30 630 30 H1440" />
      </svg>
      <div className="contato_conteudo">
        <div className="contato_cabeca">
          <h2 className="secao_titulo" id="titulo-contato">Contato</h2>
          <p className="contato_texto">Estou disponível para novos projetos no momento. Entre em contato comigo e marcamos uma conversa 👋</p>
        </div>
        <ul className="contato_lista">
          <li className="contato_email">
            <a href="mailto:samueel.dev@gmail.com">samueel.dev@gmail.com</a>
            <button className="copiar" type="button" data-copiar="samueel.dev@gmail.com" hidden>Copiar e-mail</button>
            <span className="visualmente-oculto" role="status" data-copiar-status=""></span>
          </li>
          <li><a href="tel:+5561986668594">+55 61 98666-8594</a></li>
          <li><a href="https://www.instagram.com/samuelycz/" target="_blank" rel="noopener">@samuelycz</a></li>
          <li><a href="https://www.behance.net/samuelysz" target="_blank" rel="noopener">behance.net/samuelysz</a></li>
        </ul>
        <p className="contato_copy">Samuel Souza. Alguns direitos reservados.</p>
      </div>
    </footer>
  );
}
