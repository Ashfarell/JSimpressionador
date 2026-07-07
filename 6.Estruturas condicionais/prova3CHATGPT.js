// EX1 — Arrow Function + Array
const lista1 = [10, 25, 5, 30];
// Crie uma arrow function que receba um array de números e retorne apenas os números maiores que 20.

console.log('EX1 A) ARROW-------------------------------------------------------------------------------------');
let listafriltrada1 = lista1.some((numero) => numero > 20); //Print TRUE or FALSE
console.log(listafriltrada1);

console.log('EX1 B) FUNCTION)-------------------------------------------------------------------------------------');
function filtrarNumero(lista) {
  let base = [];
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] > 20) {
      base.push(lista[i]);
    }
  }
  return base;
}
console.log(filtrarNumero(lista1));

console.log('EX1 C) ARROW+FILTER-------------------------------------------------------------------------------------');
const filtrar1 = lista1.filter((p) => p > 20);
console.log(filtrar1);

console.log('EX1 D) ARROW+FILTER-------------------------------------------------------------------------------------');
const filtrar1Map = lista1.filter((p) => p > 20).map((p) => 'Número válido: ' + p);
console.log(filtrar1Map);

console.log('FIM EX1--------------------------------------------------------------------------------------');

// 🧠 Bateria de Revisão - Parte 2
// Mostre no console apenas o nome dos alunos com nota maior ou igual a 7.
const alunos = [
  { nome: 'Ana', nota: 8 },
  { nome: 'Bruno', nota: 5 },
  { nome: 'Carlos', nota: 9 },
];

console.log('EX2 A) FUNCTION-------------------------------------------------------------------------------------');
function filtrarNota(lista) {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i].nota > 7) {
      console.log('Aluno: ' + lista[i].nome);
    }
  }
}
filtrarNota(alunos);

console.log('EX2 B) FUNCTION+ ARRAY-------------------------------------------------------------------------------------');
function filtrarNotaArray(lista) {
  let base = [];
  for (let i = 0; i < lista.length; i++) {
    if (lista[i].nota > 7) {
      base.push(lista[i].nome);
    }
  }
  return base;
}
console.log(filtrarNotaArray(alunos));

console.log('EX2 C) FILTER-------------------------------------------------------------------------------------');
const filtrar2 = alunos.filter((p) => p.nota > 7); //FILTER com OBJETO
console.log(filtrar2);

console.log('EX2 D FILTER+MAP-------------------------------------------------------------------------------------');
const filtrar3 = alunos.filter((p) => p.nota > 7).map((p) => p.nome);
console.log(filtrar3);

console.log('FIM EX2--------------------------------------------------------------------------------------');

// 🧠 EX3 — while
// Sem usar reduce.
// Some todos os números do array abaixo utilizando apenas while.

const numeros3 = [4, 8, 12, 16];

console.log('EX2 A) FUNCTION+WHILE-------------------------------------------------------------------------------------');
function somarNumeros(lista) {
  let soma = 0;
  let i = 0;
  while (i < lista.length) {
    soma = soma + lista[i];
    i++;
  }
  return soma;
}
console.log(somarNumeros(numeros3));

console.log('EX2 B) ARROW FUNCTION+REDUCE-------------------------------------------------------------------------------------');
const arrowSomar = numeros3.reduce((acc, n) => acc + n, 0);
console.log(arrowSomar);

console.log('EX2 C) ARROW FUNCTION-------------------------------------------------------------------------------------');
const somarNumeros2 = (lista) => {
  let soma = 0;
  let i = 0;
  while (i < lista.length) {
    soma = soma + lista[i];
    i++;
  }
  return soma;
};
console.log(somarNumeros2(numeros3));

console.log('FIM EX3--------------------------------------------------------------------------------------');

// 🧠 EX4 — do...while
// Mostre no console todos os números de 10 até 1 utilizando apenas do...while.
function nAte1(n) {
  let i = 0;
  do {
    console.log(n);
    n--;
  } while (i < n);
}
nAte1(10);

console.log('FIM EX4--------------------------------------------------------------------------------------');

// 🧠 EX5 — map
const frutas = ['Maçã', 'Banana', 'Laranja'];

console.log('EX2 A) FILTER+MAP-------------------------------------------------------------------------------------');
const filtrarFrutas = frutas.filter((p) => p).map((p) => 'Fruta: ' + p);
console.log(filtrarFrutas);

console.log('EX5 B) MAP-------------------------------------------------------------------------------------');
const filtrarFrutas2 = frutas.map((p) => 'Fruta: ' + p);
console.log(filtrarFrutas2);

console.log('FIM EX5--------------------------------------------------------------------------------------');

// EX6 — filter + map com objetos.
// Crie uma solução que:
// Filtre apenas os produtos com preço maior ou igual a 20.
// Depois transforme o resultado para mostrar apenas o nome dos produtos.

const produtos = [
  { nome: 'Hambúrguer', preco: 25 },
  { nome: 'Batata', preco: 10 },
  { nome: 'Refrigerante', preco: 8 },
  { nome: 'Combo Especial', preco: 40 },
];

console.log('EX6 A) FILTER+MAP-------------------------------------------------------------------------------------');
const filtrar6 = produtos.filter((p) => p.preco >= 20).map((p) => p.nome);
console.log(filtrar6);

console.log('EX6 B) FUNCTION-------------------------------------------------------------------------------------');
function filtrarProdutos(lista) {
  let base = [];
  for (let i = 0; i < lista.length; i++) {
    if (lista[i].preco >= 20) {
      base.push(lista[i].nome);
    }
  }
  return base;
}
console.log(filtrarProdutos(produtos));

console.log('FIM EX6--------------------------------------------------------------------------------------');

// 🧠 EX7 — Objetos + Array + Filter + Map + Arrow
const funcionarios = [
  { nome: 'Ana', cargo: 'QA', salario: 4500 },
  { nome: 'Bruno', cargo: 'Dev', salario: 7000 },
  { nome: 'Carlos', cargo: 'QA', salario: 5500 },
  { nome: 'Daniel', cargo: 'Dev', salario: 3000 },
];

// Crie uma solução que:
// 1) // Filtre apenas funcionários do cargo:

// QA
// 2) // Depois transforme o resultado para retornar apenas o nome deles.

console.log('EX7 A) FILTER+MAP-------------------------------------------------------------------------------------');
const filtrarFuncionarios7 = funcionarios.filter((p) => p.cargo === 'QA').map((p) => p.nome);
console.log(filtrarFuncionarios7);

console.log('EX7 B) FUNÇÃO-------------------------------------------------------------------------------------');
function filtrarFuncionarios8(lista) {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i].cargo === 'QA') {
      console.log(lista[i].nome);
    }
  }
}
filtrarFuncionarios8(funcionarios);

console.log('EX7 C) FUNÇÃO +ARRAY-------------------------------------------------------------------------------------');
function filtrarFuncionarios9(lista) {
  let base = [];
  for (let i = 0; i < lista.length; i++) {
    if (lista[i].cargo === 'QA') {
      base.push(lista[i].nome);
    }
  }
  return base;
}
console.log(filtrarFuncionarios9(funcionarios));

// EX 7 - Desafio  - Retorne apenas os QAs que ganham mais de 5000

console.log('EX7 A-Desafio) FILTER+MAP-------------------------------------------------------------------------------------');
const filtrarDuplo = funcionarios.filter((p) => p.cargo === 'QA' && p.salario > 5000).map((p) => p.nome);
console.log(filtrarDuplo);

console.log('EX7 B-Desafio) FUNCTION------------------------------------------------------------------------------------');
function filtrarFuncionarios10(lista) {
  let base = [];
  for (let i = 0; i < lista.length; i++) {
    if (lista[i].cargo === 'QA' && lista[i].salario > 5000) {
      base.push(lista[i].nome);
    }
  }
  return base;
}
console.log(filtrarFuncionarios10(funcionarios));

console.log('FIM EX7--------------------------------------------------------------------------------------');

// 🧠 EX8 — Recursividade
const palavra = 'banana';

function contarletras(n) {
  console.log(n.length);
  if (n === '') {
    return 0;
  } else {
    return 1 + contarletras(n.slice(1));
  }
}
console.log(contarletras(palavra));

console.log('FIM EX8--------------------------------------------------------------------------------------');

// 🧠 EX9 — Objetos + Array + Reduce
// Crie uma solução que calcule o valor total dos pedidos.
const pedidos = [
  { cliente: 'Ana', valor: 30 },
  { cliente: 'Bruno', valor: 50 },
  { cliente: 'Carlos', valor: 20 },
  { cliente: 'Daniel', valor: 40 },
];

console.log('EX8 A)REDUCE------------------------------------------------------------------------------------');
const calcularTotalPedido9 = pedidos.reduce((acc, n) => acc + n.valor, 0);
console.log(calcularTotalPedido9);

console.log('EX8 B)FOR-------------------------------------------------------------------------------------');
function calcularTotaPedido10(lista) {
  let total = 0;
  for (let i = 0; i < lista.length; i++) {
    total += lista[i].valor;
  }
  return total;
}
console.log(calcularTotaPedido10(pedidos));

console.log('EX8 C)WHILE-------------------------------------------------------------------------------------');
function calcularTotaPedido11(lista) {
  let i = 0;
  let total = 0;
  while (i < lista.length) {
    total += lista[i].valor;
    i++;
  }
  return total;
}
console.log(calcularTotaPedido11(pedidos));

console.log('FIM EX9--------------------------------------------------------------------------------------');

// 🧠 EX10 — Relatório de Vendas
// A) Retorne apenas os vendedores que venderam mais de 1000.
// B)Calcule o total vendido apenas por esses vendedores.
const vendas = [
  { vendedor: 'Ana', valor: 1200 },
  { vendedor: 'Bruno', valor: 800 },
  { vendedor: 'Carlos', valor: 2000 },
  { vendedor: 'Daniel', valor: 500 },
];

console.log('EX10 A)FILTER+MAP-------------------------------------------------------------------------------------');
const filtrarVendedores = vendas.filter((p) => p.valor > 1000).map((p) => p.vendedor);
console.log(filtrarVendedores);

console.log('EX10 B)FILTER+REDUCE-------------------------------------------------------------------------------------');
const filtrarESomar = vendas.filter((p) => p.valor > 1000).reduce((acc, n) => acc + n.valor, 0);

console.log(filtrarESomar);

console.log('FIM EX10--------------------------------------------------------------------------------------');
