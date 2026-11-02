import { useEffect, useState } from "react";
import ParticleButton from "@/components/kokonutui/particle-button";

/**
 * Botão "Copiar e-mail" com o Particle Button (KokonutUI): ao copiar, o rótulo
 * vira "Copiado" com um ✓ e uma pequena explosão de partículas. Só aparece
 * onde o navegador permite copiar, como antes. O visual vem de .copiar
 * (footer.css); o componente original não é alterado.
 */
export function CopiarEmail({ email }: { email: string }) {
  // A área de transferência só é conhecida no navegador
  const [podeCopiar, setPodeCopiar] = useState(false);
  useEffect(() => setPodeCopiar(Boolean(navigator.clipboard)), []);

  if (!podeCopiar) return null;

  return (
    <ParticleButton
      className="copiar"
      variant="ghost"
      onClick={() => navigator.clipboard.writeText(email)}
      pendingLabel="Copiando"
      successLabel="Copiado"
      errorLabel="Não foi possível copiar"
      successDuration={2200}
    >
      Copiar e-mail
    </ParticleButton>
  );
}
