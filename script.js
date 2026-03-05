// ---- Funcionalidades ---- //

let nomeProduto = document.querySelector("#nomeProduto");
let precoProduto = document.querySelector("#precoProduto");
let estoqueProduto = document.querySelector("#estoqueProduto");

// ---- Botões ---- //

let btnComprar = document.querySelector("#btnComprar");
let btnReset = document.querySelector("#btnReset");

// ---- mensagens ---- //

let mensagem = document.querySelector("#mensagem");

// ---- declarando valores ---- //

let estoque = 10;
let preco = 59.9;

// ---- eventos ---- //

btnComprar.addEventListener("click", () => {
  if (estoque > 0) {
    estoque--;
    if (estoque < 6) {
      preco = preco + preco * 0.05; // Atumentar 5%
      precoProduto.innerText = `Preço: R$ ${preco.toFixed(2)}`; // Mostrar o preco
    }
    estoqueProduto.innerText = `Estoque: ${estoque} unidades`; // Mostrar o estoque

    mensagem.innerText = `Compra realizada com sucesso!`; // Mensagem de compra realizada
    mensagem.className = `text-success fw-bold`; // Classe de estilização
  } else {
    mensagem.innerText = `Produto esgotado`; //Mensagem de produto esgotado
    mensagem.className = `text-danger fw-bold`; // Classe de estilização
  }

  btnReset.addEventListener("click", () => {
    estoque = 10;
    preco = 59.9;

    estoqueProduto.innerText = `Estoque: ${estoque} unidades`;
    precoProduto.innerText = `Preço: R$ ${preco.toFixed(2)}`; // Mostrar o preco
    mensagem.innerText = "";
  });
});
