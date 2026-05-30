//OBJETO
const projeto = {
  nome: 'Suez',
  tipo: 'off',
  print: function () {
    return console.log('Esse projeto tem o nome ' + this.nome + ' e é do tipo ' + this.tipo);
  },
};

console.log(projeto.nome);

projeto.prazo = 'MP';
console.log(projeto);

projeto.print();

projeto.ementa = function () {
  return console.log('E o prazo é de ' + this.prazo); //FUNÇÃO do projeto CRIADO
};

projeto.ementa();

// let a = 'Meu nome é ' + projeto.nome;
// console.log(a);

//ARAY
let frase = 'Eu sou o Jean';
console.log(frase.replace('Jean', 'Daniel'));

console.log(frase.toUpperCase());

let frase2 = frase.split(' ');
console.log(frase2);
console.log(typeof frase2);

frase2.splice(4, 0, 'Jan');
console.log(frase2);

frase2[4] = 'Lag';
console.log(frase2);
console.log(frase2[4]);

//
let lista = [5, 8, 9, 2, 15];
console.log(lista.some((numero) => numero > 7));

let palavras = ['casa', 'carro', 'elevador', 'lista'];
console.log(palavras.every((palavra) => palavra.includes('a')));

// console.log(Object.keys(projeto));
// console.log(Object.values(projeto));
// console.log(Object.entries(projeto));

//OBJETO + FUNÇÃO
const projeto2 = {
  valor: 10000,
  desconto: 2000,
  calcularValorFinal: function (valor, desconto) {
    return this.valor - this.desconto;
  },
};

console.log(projeto2.calcularValorFinal());

projeto2.adicional = projeto2.valor * 0.1;

console.log('O adicional é de ' + projeto2.adicional);

projeto2.calcularNovoValor = function (a, b, c) {
  //   return projeto2.valor + projeto2.adicional - projeto2.desconto;
  return this.valor + this.adicional - this.desconto;
  //   return a + b - c; // Funciona c/ Definindo PARÂMETROs na chamada
};

console.log('Definindo valor na FUNÇÃO ' + projeto2.calcularNovoValor());
// console.log('Definindo PARÂMETROs na chamada ' + projeto2.calcularNovoValor(projeto2.valor, projeto2.adicional, projeto2.desconto));

// Módulo 5
// Exercícios- Métodos Objetos

// Exercício 1: Crie um objeto chamado Venda com as propriedades produto, quantidade, precoUnitario e desconto. Adicione um método chamado calcularTotal que calcule o
// valor total da venda, considerando o desconto. Adicione também um método chamado detalharVenda que retorne uma string detalhando a venda.

const objeto = {
  produto: 'PC',
  quantidade: 2,
  precoUnitario: 1000,
  desconto: 10,

  calcularTotal: function () {
    const total = this.quantidade * this.precoUnitario; //função DENTRO do objeto ==>  nome: function
    return total - (total * this.desconto) / 100;
  },
  detalharVenda: function () {
    return `A quantidade de produtos é de ${this.quantidade} e preço unitario é de ${this.precoUnitario}, sendo o total de ${this.calcularTotal()} reais - calculado c/ calcularTotal`;
  },
};

console.log(objeto.calcularTotal());
console.log(objeto.detalharVenda());

objeto.imposto1 = function () {
  const precoComImposto1 = objeto.calcularTotal() + (objeto.calcularTotal() * 5) / 100; //add 5% de imposto sobre calcularTotal
  return `O preço de venda com imposto é de ${precoComImposto1}`; //Usar () quando CHAMAR a função ==>     objeto.calcularTotal()    ==>//Se vou usar o resultado de uma função, preciso executá-la
};

console.log(objeto.imposto1()); //print calcularTotal + 5%

objeto.imposto2 = function () {
  // const deducao = objeto.imposto1() - (objeto.imposto1 * 10) / 100;
  const deducao = objeto.calcularTotal() - (objeto.calcularTotal() * 10) / 100;
  return ((objeto.calcularTotal() - deducao) / objeto.calcularTotal()) * 100;
};

console.log(`A dedução foi de  ${objeto.imposto2()} %`);
