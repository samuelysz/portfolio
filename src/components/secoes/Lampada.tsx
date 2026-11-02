import { useEffect, useState } from "react";
import PullCord from "@/components/kokonutui/pull-cord";
import { aoMudarSistema, aplicarTema, temaAtual, type Tema } from "@/lib/tema";

/**
 * Interruptor de modo: só a luminária do Pull Cord (KokonutUI), pendurada
 * no cabeçalho. Luz acesa = papel (claro); apagada = tela (escuro).
 * O componente original não é alterado: o recorte, o tamanho e as cores
 * vêm do CSS (header.css).
 */
export function Lampada() {
  const [tema, setTema] = useState<Tema>(() => temaAtual());

  // Sem escolha salva, acompanha o sistema
  useEffect(() => aoMudarSistema(setTema), []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", tema === "escuro");
  }, [tema]);

  return (
    <div className="lampada">
      <PullCord
        className="lampada_corpo overflow-visible rounded-none border-0 bg-transparent"
        checked={tema === "claro"}
        onCheckedChange={(acesa) => {
          const novo: Tema = acesa ? "claro" : "escuro";
          setTema(novo);
          aplicarTema(novo);
        }}
        label="Luz da página (desligada = modo escuro)"
      />
    </div>
  );
}
