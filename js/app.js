function adicionar ()
{
let produto = document.getElementById ("produto").value;
let nomeProduto = produto.split ("-")[0];
let valorUnitario = produto.split ("R$") [1];
let quantidade = document.getElementById ("quantidade").value;
let carrinho = document.getElementById ('lista-produtos');
let preco = quantidade * valorUnitario;

carrinho.innerHTML = `<section class="carrinho__produtos__produto">
<span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$ ${preco}</span>
</section>`;

}
function limpar()
{

}