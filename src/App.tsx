import { useEffect } from "react";
import { Cabecalho } from "@/components/secoes/Cabecalho";
import { Hero } from "@/components/secoes/Hero";
import { Experiencia } from "@/components/secoes/Experiencia";
import { Formacao } from "@/components/secoes/Formacao";
import { Contato } from "@/components/secoes/Contato";
import { iniciarAnimacoes } from "@/lib/animacoes";

export default function App() {
  useEffect(() => {
    iniciarAnimacoes();
  }, []);

  return (
    <>
      <Cabecalho />
      <main>
        <Hero />
        <Experiencia />
        <Formacao />
      </main>
      <Contato />
    </>
  );
}
