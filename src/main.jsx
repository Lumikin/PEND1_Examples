import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render( // Cria um HTML básico na raiz do projeto
  <StrictMode>
    <App />  {/** Renderiza esse componente primeiro */}
  </StrictMode>,
);
