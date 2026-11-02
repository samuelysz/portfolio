import type { CSSProperties } from "react";

/** Variáveis CSS inline (ex.: style={vars({ "--h": 23 })}), como no HTML original. */
export function vars(valores: Record<`--${string}`, string | number>): CSSProperties {
  return valores as CSSProperties;
}
