import { buscarPersonagens } from "../../services/personagens/personagem.api.js";
import criarCardPersonagem from "../../components/personagem/card.component.js";
import criarColunas from "../../components/shared/coluna-bootstrap.componet.js";
export default async function personagensPage() {
  const app = document.querySelector("#app");
  app.innerHTML = `
  <h1 class="fw-bold text-primary">🧙 Personagens</h1>
  <div class="row mt-4" id="lista-personagens"></div>
`;
  const row = document.querySelector("#lista-personagens");
  const personagem = await buscarPersonagens();
  personagem.forEach(personagem => {
    const coluna = criarColunas();
    const card = criarCardPersonagem(personagem);
    coluna.appendChild(card);
    row.appendChild(coluna);
  });
}
