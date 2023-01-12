let valorTotal = 30000;
let valorEntrada = 3000;
let valorPrestacao = 750;
let valorAbatido;

function abaterValor(valorTotal){
  valorAbatido = valorTotal - valorEntrada;

  return valorAbatido;
}

function Prestacao(valorAbatido){
   
  return valorAbatido/valorPrestacao;
}

console.log('O valor total do carro após a entrada é de R$ ' + (abaterValor(valorTotal)));
console.log('E a quantidade de prestações após a entrada é de ' + (parseInt(Prestacao(valorAbatido))) + ' vezes.');
