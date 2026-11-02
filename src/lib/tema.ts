// Modo da página: "claro" (papel) ou "escuro" (tela). Só no desktop.
// Sem escolha salva, segue o sistema; o botão de tema fixa a escolha.

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

/** Aplica o modo na hora (a animação de troca fica com o botão). */
export function definirTema(tema: Tema) {
  const raiz = document.documentElement;
  raiz.dataset.tema = tema;
  // classe usada pelos componentes shadcn/KokonutUI (variante dark:)
  raiz.classList.toggle("dark", tema === "escuro");
  // o color-scheme vem do CSS (data-tema), que mantém o celular sempre claro
  raiz.style.removeProperty("color-scheme");
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
    if (!temaSalvo()) {
      const tema = consulta.matches ? "escuro" : "claro";
      document.documentElement.classList.toggle("dark", tema === "escuro");
      callback(tema);
    }
  };
  consulta.addEventListener("change", ouvir);
  return () => consulta.removeEventListener("change", ouvir);
}
