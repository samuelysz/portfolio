import { SinalContato } from "@/components/secoes/SinalContato";
import { CopiarEmail } from "@/components/secoes/CopiarEmail";

const canais = [
  { canal: "CH 01", acao: "Escrever", href: "mailto:samueel.dev@gmail.com", texto: "samueel.dev@gmail.com" },
  { canal: "CH 02", acao: "Ligar", href: "tel:+5561986668594", texto: "+55 61 98666-8594" },
  { canal: "CH 03", acao: "Abrir ↗", href: "https://www.instagram.com/samuelycz/", texto: "@samuelycz", externo: true },
  { canal: "CH 04", acao: "Abrir ↗", href: "https://www.behance.net/samuelysz", texto: "behance.net/samuelysz", externo: true },
];

export function Contato() {
  return (
    <footer className="contato" id="contato" aria-labelledby="titulo-contato">
      <SinalContato />
      <div className="contato_conteudo">
        <div className="contato_cabeca">
          <h2 className="secao_titulo" id="titulo-contato">Contato</h2>
          <p className="contato_texto">Estou disponível para novos projetos no momento. Entre em contato comigo e marcamos uma conversa 👋</p>
        </div>
        <ul className="contato_lista">
          {canais.map((c, i) => (
            <li key={c.href} className={i === 0 ? "contato_email" : undefined}>
              <a href={c.href} {...(c.externo ? { target: "_blank", rel: "noopener" } : {})}>
                <span className="contato_canal" aria-hidden="true">{c.canal}</span>
                <span className="contato_valor">{c.texto}</span>
                <span className="contato_acao" aria-hidden="true">{c.acao}</span>
              </a>
              {i === 0 && <CopiarEmail email="samueel.dev@gmail.com" />}
            </li>
          ))}
        </ul>
        <p className="contato_copy">Samuel Souza. Alguns direitos reservados.</p>
      </div>
    </footer>
  );
}
