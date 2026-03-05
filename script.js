// getElementById (Capturar elemento pelo Id)
// console.log(estoqueProduto)
// estoqueProduto.querySelector (Seleciona por consulta)

let estoqueProduto = document.getElementById("estoqueProduto");
let mensagem = document.getElementById("mensagem");
let estoque = 10;

//  ---- botao de comprar produtos ---- //

function comprarProduto() {
  if (estoque > 0) {
    estoque--;
    estoqueProduto.innerText = `Estoque ${estoque} unidades`;
    mensagem.innerText = `Compra realizada com sucesso!`;
  } else {
    mensagem.innerText = `Produto esgotado!`;
  }
}

//  ---- botao de resetar produtos ---- //

function resetarProduto() {
  estoque = 10;
  estoqueProduto.innerText = `Estoque: 10 unidades`;
  mensagem.innerText = ``;
}

// ---- Capturar os elementos dentro da classe Produto ---- //

let produtos = document.querySelectorAll(".produto");

//  ---- Selecionar as arrays (lista)  ---- //

produtos.forEach((produto) => {
  console.log(produto);
});
console.log(produtos);

// ---- Mostrar nome dos produtos ---- //

let nomeProduto = document.querySelector("#nomeProduto");

let card = nomeProduto.parentElement;

console.log(card.children);

// ---- Mostrar botão no console ---- //

let btnReset = document.querySelector("#btnReset");
let btnComprar = btnReset.previousElementSibling;
let hr = btnReset.nextElementSibling;

console.log(btnComprar);
console.log(hr);
