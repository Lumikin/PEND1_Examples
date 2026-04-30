// --- imports --- //

import { criarBotaoFavorito } from "./buttom.component.js";
import criarImagemPersonagem from "./imagem.component.js";
import {
  salvarFavorito,
  ehFavorito,
  removerFavorito,
} from "../../storage/favoritos.storage.js";
export default function criarCardPersonagem(personagem) {
  const card = document.createElement("div");
  card.className = "card personagem-card border-0";

  const imageConteiner = document.createElement("div");
  imageConteiner.className = "position-relative overflow-hidden";

  const image = criarImagemPersonagem(personagem);
  image.classList.add("personagem-img");

  const btnConteiner = document.createElement("div");
  btnConteiner.className = "position-absolute top-0 end-0 m-2";
  let favoritos = ehFavorito(personagem);
  if (favoritos) {
    card.classList.add("favorito");
  }

  const buttom = criarBotaoFavorito();

  buttom.addEventListener("click", () => {
    favoritos = !favoritos;
    card.classList.toggle('favorito', favoritos);
    if (favoritos) {
      salvarFavorito(personagem);
    } else {
      removerFavorito(personagem);
    }
  });

  btnConteiner.appendChild(buttom);
  imageConteiner.append(image, btnConteiner);

  const cardBody = document.createElement("div");
  cardBody.className = "card-body";

  const casa = document.createElement("span");
  casa.className = "text-uppercase small fw-bold text-awrning";
  casa.innerHTML = personagem.house || "Desconhecida";

  const nome = document.createElement("h5");
  nome.className = "card-title fw-bold mt-1 mb-2";
  nome.innerText = personagem.name;

  cardBody.append(casa, nome);

  card.append(imageConteiner, cardBody);

  return card;
}
