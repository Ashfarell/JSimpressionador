// 🏆 Mini-Prova JS — Parte 1 (EX1–EX5)
// Vamos fazer em blocos de 5 para não virar uma muralha gigante 😄
// 🟢 EX1 — Contagem simples
// Crie uma função que receba um array de números e retorne quantos são maiores que 50.

let lista1 = [10, 60, 80, 20, 100];

function maior50(lista) {
  let count = 0;
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] > 50) {
      count++;
    }
  }
  return count;
}
console.log(maior50(lista1));
console.log('FIM EX1------------------------------------------------------------');

// 🟢 EX2 — Objetos + condição
// Crie uma função que receba um lista e retorne apenas os nomes dos ativos.

const equipe = [
  { nome: 'Bruno', ativo: true },
  { nome: 'Joana', ativo: false },
  { nome: 'Daniel', ativo: true },
];

function dispo(lista) {
  let base = [];
  for (let i = 0; i < lista.length; i++) {
    if (lista[i].ativo) {
      base.push(lista[i].nome);
    }
  }
  return base;
}
console.log(dispo(equipe));
console.log('FIM EX2------------------------------------------------------------');

// 🟡 EX3 — while (novo 😄)
// Usando while, some os números:
let lista3 = [2, 4, 6, 8];

function somar(lista) {
  let soma = 0;
  let i = 0;
  while (i < lista.length) {
    soma += lista[i];
    i++;
  }
  return soma;
}
console.log(somar(lista3));
console.log('FIM EX3------------------------------------------------------------');

// 🟡 EX4 — do...while
// Crie uma função que receba um número e faça contagem até ele usando do...while.
let numero4 = 5;

function contagem(numero) {
  let i = 0;
  do {
    i++;
    console.log(i);
  } while (i < numero);
}

contagem(numero4);
console.log('FIM EX4------------------------------------------------------------');

// 🔵 EX5 — Mistura geral   //salário >= 9000  E   disponível
const equipe2 = [
  { nome: 'Bruno', salario: 10000, disponivel: true },
  { nome: 'JB', salario: 8000, disponivel: false },
  { nome: 'Joana', salario: 7000, disponivel: true },
  { nome: 'Jorge', salario: 12000, disponivel: true },
];

function selecionar(lista) {
  let base = [];
  for (let i = 0; i < lista.length; i++) {
    if (lista[i].salario >= 9000 && lista[i].disponivel) {
      base.push(lista[i].nome);
    }
  }
  return base;
}
console.log(selecionar(equipe2));
console.log('FIM EX5------------------------------------------------------------');

// 🟢 EX6 — filter + map   // Regra: salário > 9000
const filtrar6 = equipe2.filter((p) => p.salario > 9000);
// console.log(filtrar);
const nomes6 = filtrar6.map((p) => p.nome);
console.log(nomes6);
console.log('FIM EX6------------------------------------------------------------');

// 🟢 EX7 — condição tripla
// Receba:
// const numeros = [5, 12, 18, 22, 7, 30, 9];   // Retorne apenas números que sejam:   // > 10 E pares   E menores que 25

const numeros7 = [5, 12, 18, 22, 7, 30, 9];

function condicaoTripla(lista) {
  let base = [];
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] > 10 && lista[i] < 25 && lista[i] % 2 === 0) {
      base.push(lista[i]);
    }
  }
  return base;
}
console.log(condicaoTripla(numeros7));
console.log('FIM EX7------------------------------------------------------------');

// 🟡 EX8 — while + objetos   //Conte quantos funcionários estão disponíveis:
console.log('EX8 A)FOR');
function funcDispoA(lista) {
  let count = 0;
  for (let i = 0; i < lista.length; i++) {
    if (lista[i].disponivel) {
      count++;
    }
  }
  return count;
}
console.log(funcDispoA(equipe2));

console.log('EX8 B) WHILE');
function dispoB(lista) {
  let i = 0;
  let contador = 0;
  while (i < lista.length) {
    if (lista[i].disponivel) {
      contador = contador + 1;
    }
    i++;
  }

  return contador;
}
console.log(dispoB(equipe2));

console.log('EX8 C) FILTER + MAP');
const filtrar8 = equipe2.filter((p) => p.disponivel);
const nomes8 = filtrar8.map((p) => p.nome);
console.log(nomes8);

console.log('FIM EX8------------------------------------------------------------');

// 🟡 EX9 — transformação com map Receba:
// const numeros2 = [5, 10, 15];  // Transforme para:
// [
//  "Número: 5",
//  "Número: 10",
//  "Número: 15"
// ]
const numeros9 = [5, 10, 15];
const nomes9 = numeros9.map((p) => 'Número : ' + p);
console.log(nomes9);

console.log('FIM EX9------------------------------------------------------------');

// 🔵 EX10 — Mistura geral (modo vida real)
// Regra:  salário >= 9000  E disponível
const equipe3 = [
  { nome: 'Bruno', salario: 10000, disponivel: true },
  { nome: 'JB', salario: 8000, disponivel: false },
  { nome: 'Joana', salario: 7000, disponivel: true },
  { nome: 'Jorge', salario: 12000, disponivel: true },
  { nome: 'Daniel', salario: 9500, disponivel: true },
];

const filtrar10 = equipe3.filter((p) => p.salario >= 9000 && p.disponivel);
const nomes10 = filtrar10.map((p) => p.nome + ' ganha ' + p.salario);
console.log('EX10 A)FILTER + MAP');
console.log(nomes10);

console.log('EX10 B)FUNÇÃO');
function filtrar(lista) {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i].salario >= 9000 && lista[i].disponivel) {
      console.log(`${lista[i].nome} ganha ${lista[i].salario}`);
    }
  }
}
filtrar(equipe3);

console.log('FIM E10------------------------------------------------------------');
