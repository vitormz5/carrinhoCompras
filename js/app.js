let totalGeral;
limpar();

//iniciar com a lista e preço vazio
document.getElementById("lista-produtos").innerHTML = "";
document.getElementById("valor-total").textContent = "R$ 0";

function adicionar() {
  //recuperar valores nome do produto quantidade e valor // .value pra pegar o que vem do html
  let produto = document.getElementById("produto").value;

  // função split divide a string em um array
  let nomeProduto = produto.split("-")[0];
  let valorUnitario = produto.split("R$")[1];
  // pegar o elemento com o id quantidade (o value)
  let quantidade = document.getElementById("quantidade").value;
  // calcula o subtotal
  let preco = quantidade * valorUnitario;

  //adicionar no carrinho
  let carrinho = document.getElementById("lista-produtos");
  carrinho.innerHTML =
    carrinho.innerHTML +
    `<section class="carrinho__produtos__produto">
  <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
</section>`;

  //atualizar o valor total
  totalGeral = totalGeral + preco;
  let precoTotal = document.getElementById("valor-total");
  precoTotal.textContent = `R$${totalGeral}`;
  // cada vez que clicar em adicoinar, zerar a quantidade
  document.getElementById("quantidade").value = 0;
}

function limpar() {
  document.getElementById("lista-produtos").innerHTML = "";
  document.getElementById("valor-total").textContent = "R$ 0";
  totalGeral = 0;
}
