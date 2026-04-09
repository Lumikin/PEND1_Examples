const API_LOGIN = "https://dummyjson.com/auth/login";

const formLogin = document.querySelector("#formLogin");
const msgErro = document.querySelector("#msgErro");
const msgLogado = document.querySelector("#msgLogado");

async function realizarLogin(username, password) {
  return axios.post(API_LOGIN, { username, password });
}

function mostrarSucesso(username) {
  msgLogado.innerText = `Bem-vindo, ${username}!`;
  
  msgLogado.classList.remove("d-none");
  msgErro.classList.add("d-none");
}

function mostrarErro() {
  msgErro.innerText = "Usuário ou senha inválidos.";
  
  msgErro.classList.remove("d-none");
  msgLogado.classList.add("d-none");
}

formLogin.addEventListener("submit", async (e) => {
  e.preventDefault();
  
  const username = document.querySelector("#username").value;
  const password = document.querySelector("#password").value;

  try {
    const resposta = await realizarLogin(username, password);
    mostrarSucesso(resposta.data.firstName);
  } catch (error) {
    console.error("Erro no login:", error);
    mostrarErro();
  }
});