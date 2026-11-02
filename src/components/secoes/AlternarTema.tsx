import { useEffect, useState } from "react";
import SwitchButton from "@/components/kokonutui/switch-button";
import { aoMudarSistema, definirTema, temaAtual, type Tema } from "@/lib/tema";

/**
 * Botão de modo papel/tela: o Switch Button (KokonutUI). O sol vira lua e o
 * novo modo se espalha a partir do botão num círculo. O componente original
 * não é alterado; o visual vem de .alternar-tema (header.css).
 */
export function AlternarTema() {
  const [tema, setTema] = useState<Tema>(() => temaAtual());

  // Sem escolha salva, acompanha o sistema
  useEffect(() => aoMudarSistema(setTema), []);

  return (
    <SwitchButton
      className="alternar-tema"
      showLabel={false}
      aria-label="Modo escuro"
      theme={tema === "escuro" ? "dark" : "light"}
      onThemeChange={(proximo) => {
        const novo: Tema = proximo === "dark" ? "escuro" : "claro";
        definirTema(novo);
        setTema(novo);
      }}
    />
  );
}
