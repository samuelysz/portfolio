// Modo da página: "claro" (papel) ou "escuro" (tela).
// Sem escolha salva, segue o sistema; a luminária fixa a escolha.

export type Tema = "claro" | "escuro";

const CHAVE = "tema";
const consultaEscuro = () => window.matchMedia("(prefers-color-scheme: dark)");

export function temaSalvo(): Tema | null {
  try {
    const t = localStorage.getItem(CHAVE);
    return t === "claro" || t === "escuro" ? t : null;
  } catch {
    return null;
  }
}

export function temaAtual(): Tema {
  return temaSalvo() ?? (consultaEscuro().matches ? "escuro" : "claro");
}

export function aplicarTema(tema: Tema) {
  const raiz = document.documentElement;
  const trocar = () => {
    raiz.dataset.tema = tema;
    // classe usada pelos componentes shadcn (variante dark:)
    raiz.classList.toggle("dark", tema === "escuro");
  };

  // Troca com um esmaecer curto quando o navegador permite;
  // com movimento reduzido, troca na hora.
  const reduzir = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!reduzir && "startViewTransition" in document) {
    document.startViewTransition(trocar);
  } else {
    trocar();
  }

  try {
    localStorage.setItem(CHAVE, tema);
  } catch {
    // sem armazenamento (aba privada): vale só nesta visita
  }
}

/** Avisa quando o sistema troca de modo e não há escolha salva. */
export function aoMudarSistema(callback: (tema: Tema) => void) {
  const consulta = consultaEscuro();
  const ouvir = () => {
    if (!temaSalvo()) callback(consulta.matches ? "escuro" : "claro");
  };
  consulta.addEventListener("change", ouvir);
  return () => consulta.removeEventListener("change", ouvir);
}
