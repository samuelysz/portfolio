import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// Tailwind CSS v4 + tema do shadcn (em camadas)
import "./index.css";
import "./styles/compat-tailwind.css";
// Estilos originais da landing (fora das camadas, por isso prevalecem)
import "./styles/legado.css";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
