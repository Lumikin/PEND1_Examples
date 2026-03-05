// getElementById (Capturar elemento pelo Id)
// console.log(estoqueProduto)
// estoqueProduto.querySelector (Seleciona por consulta)

let novoParagrafo = document.createElement("p");
novoParagrafo.innerText = `Hello`;

let card = document.querySelector(".card-body");

let estoqueProduto = document.getElementById("estoqueProduto");
let mensagem = document.getElementById("mensagem");
let estoque = 10;

//  ---- botao de comprar produtos ---- //

function comprarProduto() {
  if (estoque > 0) {
    estoque--;
    estoqueProduto.innerText = `Estoque ${estoque} unidades`;
    mensagem.className = "text-success fw-bold";
    // mensagem.innerText = `Compra realizada com sucesso!`;
    card.appendChild(novoParagrafo);
  } else {
    mensagem.innerText = `Produto esgotado!`;
  }
}

//  ---- botao de resetar produtos ---- //

function resetarProduto() {
  estoque = 10;
  estoqueProduto.innerText = `Estoque: 10 unidades`;
  mensagem.innerText = ``;

  novoParagrafo.remove();
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

console.log(card.children);

// ---- Mostrar botão no console ---- //

let btnReset = document.querySelector("#btnReset");
let btnComprar = btnReset.previousElementSibling;
let hr = btnReset.nextElementSibling;

console.log(btnComprar);
console.log(hr);
