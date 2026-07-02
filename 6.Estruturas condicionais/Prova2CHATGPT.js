// EX1 — Contagem simples
const numeros1 = [5, 60, 22, 90, 100, 3];

function maiorQue50(lista) {
  let count = 0;
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] > 50) {
      count++;
    }
  }
  return count;
}
console.log(maiorQue50(numeros1));
console.log('FIM EX1');

// EX2 — Objetos + condição
const equipe2 = [
  { nome: 'Bruno', ativo: true },
  { nome: 'Joana', ativo: false },
  { nome: 'Daniel', ativo: true },
  { nome: 'Márcio', ativo: false },
];
function ativos(lista) {
  let base = [];
  for (let i = 0; i < lista.length; i++) {
    if (lista[i].ativo) {
      base.push(lista[i].nome);
    }
  }
  return base;
}
console.log(ativos(equipe2));
console.log('FIM EX2');

// 🟡 EX3 — while
const numeros3 = [2, 4, 6, 8, 10];

function somar(lista) {
  let i = 0;
  let soma = 0;
  while (i < lista.length) {
    soma = soma + lista[i];
    i++;
  }
  return soma;
}
console.log(somar(numeros3));
console.log('FIM EX3');

// EX4 — do...while

function printAte(n) {
  let i = 1;
  do {
    console.log(i);
    i++;
  } while (i < n);
  console.log(i);
}
printAte(10);
console.log('FIM EX4');

// EX5 — Condição dupla
const numeros5 = [5, 12, 8, 20, 3, 14, 7, 18];

function condicaoDupla(lista) {
  let base = [];
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] > 10 && lista[i] % 2 == 0) {
      base.push(lista[i]);
    }
  }
  return base;
}
console.log(condicaoDupla(numeros5));
console.log('FIM EX5');

// EX6 — filter + map
const equipe6 = [
  { nome: 'Bruno', salario: 10000 },
  { nome: 'JB', salario: 8000 },
  { nome: 'Joana', salario: 12000 },
  { nome: 'Daniel', salario: 5000 },
];

console.log('EX6 A)');
let const6 = equipe6.filter((p) => p.salario >= 9000);
console.log(const6);

console.log('EX6 B');
let const6B = equipe6.filter((p) => p.salario >= 9000).map((p) => p.nome);
console.log(const6B);

console.log('FIM EX6');

// EX7 — Transformação com map
const numeros7 = [5, 10, 15, 20];

let const7 = numeros7.map((p) => 'Valor: ' + p);
console.log(const7);
console.log('FIM EX7');

// EX8 — Mistura geral
const equipe8 = [
  { nome: 'Bruno', salario: 10000, disponivel: true },
  { nome: 'Joana', salario: 7000, disponivel: true },
  { nome: 'Daniel', salario: 9500, disponivel: false },
  { nome: 'Jorge', salario: 12000, disponivel: true },
];

console.log('EX8 A)');
let filtro8 = equipe8.filter((p) => p.salario >= 9000 && p.disponivel).map((p) => p.nome + ' ganha ' + p.salario);
console.log(filtro8);

console.log('EX8 B)');
function condicaoDupla2(lista) {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i].salario >= 9000 && lista[i].disponivel) {
      console.log(lista[i].nome + ' ganha ' + lista[i].salario);
    }
  }
}
condicaoDupla2(equipe8);
console.log('FIM EX8');

// EX9 — Método em objeto
const pessoa = {
  nome: 'Bruno',
  idade: 35,
  hello: function () {
    return `Olá, meu nome é ${pessoa.nome} e tenho ${pessoa.idade} anos`;
  },
};
console.log(pessoa.hello());
console.log('FIM EX9');

// EX10 — Desafio final 😈
const numeros10 = [5, 12, 18, 22, 7, 30, 9];

let filtro10 = numeros10.filter((p) => p > 10 && p % 2 === 0).map((p) => p * 3);
console.log(filtro10);
console.log('FIM EX10');
