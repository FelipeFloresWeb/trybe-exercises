let custoDeUmProduto = 10;
let valorDeVenda = 20;
let imposto = 1.2;
let valorCustoTotal = custoDeUmProduto * imposto;
let lucro = valorDeVenda - valorCustoTotal;

if (custoDeUmProduto < 0) {
  console.log('O valor de custo do produto está incorreto');
} else {
  console.log(lucro);
}