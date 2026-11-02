import { AlternarTema } from "@/components/secoes/AlternarTema";

export function Cabecalho() {
  return (
    <header className="header">
      <a className="header_marca" href="./">
        <img src="./img/marca.svg" alt="" width="32" height="41" />
        <span className="header_nome">Samuel Souza</span>
      </a>
      <nav aria-label="Principal">
        <ul className="header_menu">
          <li><a href="#experiencia">Experiência</a></li>
          <li><a href="#formacao">Formação</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </nav>
      <AlternarTema />
    </header>
  );
}
