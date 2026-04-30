// OI :3c
import criarNavbar, {
  ativarMenu,
} from "./components/layout/navbar.component.js";
import personagensPage from "./pages/personagens/personagens.pages";
import { personagensFavoritosPage } from "./pages/personagens/favoritos.pages";

criarNavbar();
personagensPage();

const btnHome = document.querySelector("#btnHome");
const btnFavoritos = document.querySelector("#btnFavoritos");

btnHome.addEventListener("click", () => {
  ativarMenu(btnHome);
  personagensPage();
});
btnFavoritos.addEventListener("click", () => {
  ativarMenu(btnFavoritos);
  personagensFavoritosPage();
});
