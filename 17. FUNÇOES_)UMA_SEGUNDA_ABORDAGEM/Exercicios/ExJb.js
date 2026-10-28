// Exercício 1: Você é responsável por atualizar os salários de todos os funcionários de uma empresa. A empresa decidiu aumentar o salário de todos em 10%. Crie um array com os
// salários atuais e utilize o método .map() para calcular o novo salário de cada funcionário. Qual será o array resultante?

const salarios = [8000, 5000, 15000, 13000, 8500];

const novosSalarios = salarios.map((p) => (p / 0.9).toFixed(2));
console.log(novosSalarios);

console.log('FIM EX1----------------------------------------------------------------------------------------------');

// Exercício 2: Uma loja decidiu reajustar os preços de todos os produtos em 5% para cobrir os custos operacionais. Crie um array com os preços dos produtos e utilize o método .map() para
// calcular os novos preços. Quais serão os novos preços?

let precosProdutos = [50, 35, 100, 200, 25, 15];
const novosPrecos = precosProdutos.map((p) => (p / 0.95).toFixed(2));
console.log(novosPrecos);

console.log('FIM EX2----------------------------------------------------------------------------------------------');

// Exercício 3: Você precisa adicionar um identificador único (ID) a cada funcionário da empresa.
// Crie um array com os nomes dos funcionários e utilize o método .map() para adicionar um ID
// a cada um deles. O ID deve ser baseado na posição do funcionário no array. Como ficará o array resultante?

//OBJETO DENTRO DE ARRAY
//ARRAY
const funcionarios1 = ['Jean', 'Igor', 'Jade'];

const novaLista4 = funcionarios1.map((p, i) => `id ${i}: ${p}`);
console.log(novaLista4);

console.log('PRINT ITEM + ID COM FOREACH');
function testForEach3(lista) {
  lista.forEach((p, n) => {
    console.log(`id: ${n}: ${p}`);
  });
}

testForEach3(funcionarios1);

funcionarios1.forEach((p) => {
  console.log(p);
});

console.log('FIM EX3----------------------------------------------------------------------------------------------');

const imoveis = [
  { id: 1, tipo: 'Apartamento', valor: 400000, disponivel: true, bairro: 'Centro' },
  {
    id: 2,
    tipo: 'Casa',
    valor: 550000,
    disponivel: false,
    bairro: 'Subúrbio',
  },
  { id: 3, tipo: 'Cobertura', valor: 900000, disponivel: true, bairro: 'Centro' },
  { id: 4, tipo: 'Apartamento', valor: 300000, disponivel: false, bairro: 'Zona Sul' },
  { id: 5, tipo: 'Casa', valor: 700000, disponivel: true, bairro: 'Centro' },
];

// Exercício 4: Você tem uma lista de imóveis, alguns disponíveis para venda e outros não.
// Utilize o método .filter() para criar uma nova lista contendo apenas os imóveis que estão
// disponíveis para venda. Qual será o array resultante?

const imoveisDispo = imoveis.filter((p) => p.disponivel);
console.log(imoveisDispo);

console.log('FIM EX4----------------------------------------------------------------------------------------------');

// Exercício 5: Você tem uma lista de imóveis com seus respectivos valores. Utilize o método
// .filter() para criar uma nova lista contendo apenas os imóveis que têm valor acima de R$
// 500.000. Qual será o array resultante?
const filtrarImoveisPreco = imoveis.filter((p) => p.valor > 500000);
console.log(filtrarImoveisPreco);

const filtrarImoveisPrecoeTransformar = imoveis.filter((p) => p.valor > 500000).map((p) => p.tipo + '/' + 'id:' + p.id);
console.log(filtrarImoveisPrecoeTransformar);

console.log('FIM EX5----------------------------------------------------------------------------------------------');

// Exercício 6: Você tem uma lista de imóveis em diferentes bairros da cidade. Utilize o método
// .filter() para criar uma nova lista contendo apenas os imóveis localizados no bairro
// "Centro". Qual será o array resultante?
const filtrarBairro = imoveis.filter((p) => p.bairro === 'Centro');
console.log(filtrarBairro);

const filtrarBairroTransformar = imoveis.filter((p) => p.bairro === 'Centro').map((p) => p.id + '/ ' + p.tipo);
console.log(filtrarBairroTransformar);

console.log('FIM EX6----------------------------------------------------------------------------------------------');

// Exercício 7: Você tem um array de objetos representando as vendas de uma empresa, onde
// cada objeto contém o valor da venda. Utilize o método .reduce() para calcular o faturamento
// total da empresa. Qual será o valor total?

//ARRAY DE OBJETOS

const vendaEmpresa = [
  { id: 1, valor: 1500 },
  { id: 2, valor: 1000 },
  { id: 3, valor: 1400 },
  { id: 4, valor: 5500 },
];

const fatTotalReduce = vendaEmpresa.reduce((acc, n) => acc + n.valor, 0);
console.log(fatTotalReduce);
console.log('FIM EX7----------------------------------------------------------------------------------------------');

// Exercício 8: Você tem um array de objetos representando avaliações de clientes, onde cada
// objeto contém uma pontuação de satisfação (de 1 a 5). Utilize o método .reduce() para
// calcular a média de satisfação dos clientes. Qual será a média?

const notasClientes = [
  { cliente: 'Jean', nota: 6 },
  { cliente: 'Igor', nota: 8 },
  { cliente: 'Jade', nota: 4 },
  { cliente: 'Vanessa', nota: 9 },
];

const mediaReduce = notasClientes.reduce((acc, n) => acc + n.nota, 0) / notasClientes.length;
console.log(`A média é ${mediaReduce}`);

console.log('FIM EX8----------------------------------------------------------------------------------------------');
// Exercício 9: Você tem um array de objetos representando produtos vendidos, onde cada
// objeto contém o nome do produto e sua categoria. Utilize o método .reduce() para criar um
// objeto que conte quantos produtos foram vendidos em cada categoria. Como ficará o objeto resultante?

const ItensVenda = [
  { nome: 'Camisa', categoria: 'Vestuário' },
  { nome: 'Calça', categoria: 'Vestuário' },
  { nome: 'Notebook', categoria: 'Eletrônicos' },
  { nome: 'Celular', categoria: 'Eletrônicos' },
  { nome: 'Tênis', categoria: 'Calçados' },
  { nome: 'Meias', categoria: 'Vestuário' },
];

//Reduce p/ criar OBJETO
console.log('EX9 A) - versão com REDUCE--------------------------------------------------------------');
const vendasCatReduce = ItensVenda.reduce((acc, item) => {
  if (acc[item.categoria]) {
    acc[item.categoria]++;
  } else {
    acc[item.categoria] = 1;
  }
  return acc;
}, {});

console.log(vendasCatReduce);

console.log('EX9 B) - versão com FUNÇÃO--------------------------------------------------------------');
function vendasCatFuncao(lista) {
  let novaLista = {};

  for (let i = 0; i < lista.length; i++) {
    if (novaLista[lista[i].categoria]) {
      novaLista[lista[i].categoria]++;
    } else {
      novaLista[lista[i].categoria] = 1;
    }
  }
  return novaLista;
}

console.log(vendasCatFuncao(ItensVenda));

console.log('EX9 B) - versão com ForEach--------------------------------------------------------------');

let novaLista9 = {}; //                         DECLARADA ANTES DO FOREACH, CASO CONTRÁRIO VAI CRIAR UMA DO ZERO SEMPRE

ItensVenda.forEach((lista) => {
  if (novaLista9[lista.categoria]) {
    novaLista9[lista.categoria]++;
  } else {
    novaLista9[lista.categoria] = 1;
  }
});
console.log(novaLista9);

console.log('FIM EX9----------------------------------------------------------------------------------------------');

// Exercício 10: Crie uma função tradicional chamada calcularDesconto que receba o preço
// de um produto e a porcentagem de desconto, e retorne o valor do produto com o desconto aplicado.
// Após criar a função tradicional, transforme-a em uma Arrow Function.
// Exemplo de Entrada: //const precoProduto = 200; const percentualDesconto = 15

//FUNÇÃO
function calcularDesconto(preco, desconto) {
  return preco - (preco * desconto) / 100;
}

console.log('O preço com desconto é ' + calcularDesconto(200, 15));

//                                                              ARROW FUNCTION
const precoFinal = (preco, desconto) => {
  return `O preço com desconto é ${preco - (preco * desconto) / 100}`;
};

console.log(precoFinal(200, 15));

console.log('FIM EX10----------------------------------------------------------------------------------------------');

// Exercício 11: Crie uma função tradicional chamada filtrarPorCategoria que receba uma
// lista de produtos e uma categoria, e retorne os produtos que pertencem àquela categoria. Após
// criar a função tradicional, transforme-a em uma Arrow Function

const produtos11 = [
  { nome: 'Camisa', categoria: 'Vestuário' },
  { nome: 'Notebook', categoria: 'Eletrônicos' },
  { nome: 'Tênis', categoria: 'Calçados' },
  { nome: 'Calça', categoria: 'Vestuário' },
];

//                                                                  FUNÇÃO ------------------------------------------------------------------------------------------------
console.log('EX11) C)- versão com Função--------------------------------------------------------------');
function filtrarPorCategoria(lista, categoria) {
  let novaLista = [];
  for (let i = 0; i < lista.length; i++) {
    if (categoria === lista[i].categoria) {
      novaLista.push(lista[i]);
    }
  }
  return novaLista;
}

console.log(filtrarPorCategoria(produtos11, 'Vestuário'));

//                                                                      ARROW FUNCTION ------------------------------------------------------------------------------------------------
console.log('EX11) B)- versão com Arrow Function-------------------------------------------------------------');

const filtrarPorCatArrow = (lista, categoria) => {
  let novaLista = [];
  for (let i = 0; i < lista.length; i++) {
    if (categoria === lista[i].categoria) {
      novaLista.push(lista[i]);
    }
  }
  return novaLista;
};
console.log(filtrarPorCatArrow(produtos11, 'Vestuário'));

//                                                                          REDUCE    ------------------------------------------------------------------------------------------------
console.log('EX11) C)- versão com Reduce--------------------------------------------------------------');
const filtrarPorCatReduce = produtos11.filter((p) => p.categoria === 'Vestuário');
console.log(filtrarPorCatReduce);

console.log('FIM EX11----------------------------------------------------------------------------------------------');
// Exercício 12: Crie uma função tradicional chamada calcularFaturamentoTotal que
// receba uma lista de vendas e retorne o faturamento total somando o valor de todas as vendas.
// Após criar a função tradicional, transforme-a em uma Arrow Function

const vendas12 = [
  { id: 1, valor: 1500 },
  { id: 2, valor: 2300 },
  { id: 3, valor: 3200 },
];

//                                                                  FUNÇÃO ------------------------------------------------------------------------------------------------
console.log('EX12) A)- versão com Função--------------------------------------------------------------');
function calcularFaturamentoTotal(lista) {
  let total = 0;
  for (let i = 0; i < lista.length; i++) {
    total += lista[i].valor;
  }
  return total;
}

console.log(calcularFaturamentoTotal(vendas12));

//                                                                      ARROW FUNCTION ------------------------------------------------------------------------------------------------
console.log('EX11) B)- versão com Arrow Function-------------------------------------------------------------');
const fatTotalArrow = (lista) => {
  let total = 0;
  for (let i = 0; i < lista.length; i++) {
    total += lista[i].valor;
  }
  return total;
};
console.log(fatTotalArrow(vendas12));

//                                                                          REDUCE    ------------------------------------------------------------------------------------------------
console.log('EX11) C)- versão com Reduce--------------------------------------------------------------');
const fatTotal12 = vendas12.reduce((acc, item) => acc + item.valor, 0);
console.log(fatTotal12);

console.log('FIM EX12----------------------------------------------------------------------------------------------');
