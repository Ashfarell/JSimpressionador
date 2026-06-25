// Treino #1 — Contar números positivos
console.log('EX1 ----------------------------------------------------------------');
const lista = [5, -2, 15, 20, -8, 0, 105];

function numerosPositivos(numero) {
  let count = 0;
  for (let i = 0; i < numero.length; i++) {
    if (numero[i] > 0) {
      count++;
    }
  }
  return count;
}

console.log(numerosPositivos(lista));
console.log('Fim EX1 -------------------------------------------------------------');

// Treino #2 — Existe algum número negativo?
const lista2 = [5, -50, 55, 10, 20, 1];
console.log('EX2 A)----------------------------------------------------------------');
function numeronegativo(numero2) {
  let count = 0;
  for (let i = 0; i < numero2.length; i++) {
    if (numero2[i] < 0) {
      count++;
    }
  }
  if (count > 0) {
    return true;
  }
  return false;
}

console.log(numeronegativo(lista2));
console.log('EX2 B)----------------------------------------------------------------');

function numeronegativoB(numero3) {
  for (let i = 0; i < numero3.length; i++) {
    if (numero3[i] < 0) {
      return true; //assim que encontrar Número negativo ==>RETURN encerra a função
    }
  }
  return false;
}

console.log(numeronegativoB(lista2));
console.log('Fim EX2 -------------------------------------------------------------');

// Treino #3 — Encontrar o maior número
let lista3 = [5, 25, -15, 0, 105, -90, 205, 305];

function maiorValor(numero) {
  let maior = numero[0];
  for (let i = 0; i < numero.length; i++) {
    if (numero[i] > maior) {
      maior = numero[i];
    }
  }
  return maior;
}
console.log(maiorValor(lista3));
console.log('Fim EX3 -------------------------------------------------------------');
// Treino #4 — Encontrar o segundo maior número
function segundoMaior(numero) {
  let maior = numero[0];
  let segundo = numero[0];
  for (let i = 0; i < numero.length; i++) {
    if (numero[i] > maior) {
      maior = numero[i];
    }
    for (let j = 0; j < numero.length; j++) {
      if (numero[j] > segundo && numero[j] < maior) {
        segundo = numero[j];
      }
    }
  }
  return segundo;
}
console.log(segundoMaior(lista3));
console.log('Fim EX4 -------------------------------------------------------------');

// Treino #5 — Contar números pares
const lista4 = [5, 8, 10, 3, 2];

function numerosPares(numero) {
  let count = 0;
  for (let i = 0; i < numero.length; i++) {
    if (numero[i] % 2 == 0) {
      count++;
    }
  }
  return count;
}

console.log(numerosPares(lista4));
console.log('Fim EX5 -------------------------------------------------------------');

// Desafio Extra (se terminar rápido)
console.log('Desafio Extra A)----------------------------------------------------------------');
function parOuImpar(x) {
  x % 2 === 0 ? console.log('par') : console.log('ímpar');
}

parOuImpar(10);

console.log('Desafio Extra B)----------------------------------------------------------------');
function parOuImpar2(x) {
  return x % 2 == 0 ? 'par' : 'ímpar';
}
console.log(parOuImpar2(9));

console.log('Fim EX EXTRA (Operador ternário) -------------------------------------------------------------');

// Treino #6 — Maior valor + ternário
console.log('EX6 A)----------------------------------------------------------------');
const lista5 = [5, 8, 10, 3, 2, 150, 98, 2005, -50];

function encontrarMaior(numero) {
  let maior = numero[0];
  for (let i = 0; i < numero.length; i++) {
    if (numero[i] > maior) {
      maior = numero[i];
    }
  }
  if (maior > 100) {
    return maior + ' Maior que 100';
  }
  return maior + ' Menor ou igual a 100';
}

console.log(encontrarMaior(lista5));

console.log('EX6 B)----------------------------------------------------------------');
function encontrarMaior2(numero, baseline) {
  let maior = numero[0];
  // let baseline;
  for (let i = 0; i < numero.length; i++) {
    if (numero[i] > maior) {
      maior = numero[i];
    }
  }
  if (maior > baseline) {
    return maior + ` Maior que ${baseline}`;
  }
  return maior + ` Menor que ${baseline}`;
}

console.log(encontrarMaior2(lista5, 10000));
console.log('Fim EX6 -------------------------------------------------------------');

// 🟢 EX7 — maiores que 10
const lista6 = [5, 12, 8, 20, 3, 15];
function Maior10(numero) {
  let count = 0;
  for (let i = 0; i < numero.length; i++) {
    if (numero[i] > 10) {
      count++;
    }
  }
  return count;
}

console.log(Maior10(lista6));
console.log('Fim EX7 -------------------------------------------------------------');
// 🟡 EX8 — Entre dois valores
const lista7 = [5, 12, 8, 20, 3, 15, 25];
function entreNumeros(numero) {
  let count = 0;
  for (let i = 0; i < numero.length; i++) {
    if (numero[i] > 10 && numero[i] <= 20) {
      count++;
    }
  }
  return count;
}
console.log(entreNumeros(lista7));
console.log('Fim EX8 -------------------------------------------------------------');
// 🔵 EX9 — Filtrar e retornar nomes
const equipe = [
  { nome: 'Bruno', salario: 10000 },
  { nome: 'JB', salario: 8000 },
  { nome: 'Joana', salario: 7500 },
  { nome: 'Jorge', salario: 12000 },
  { nome: 'Daniel', salario: 5000 },
];

function filtrarSalario(equipe) {
  for (let i = 0; i < equipe.length; i++) {
    if (equipe[i].salario > 8000) {
      console.log(equipe[i].nome);
    }
  }
}
console.log('EX9 A)----------------------------------------------------------------');
filtrarSalario(equipe);

function filtrarSalario2(equipe, baseline) {
  let nomes = [];
  for (let i = 0; i < equipe.length; i++) {
    if (equipe[i].salario > baseline) {
      nomes.push(equipe[i].nome); //PUSH no ARRAY
    }
  }
  return nomes;
}
console.log('EX9 B)----------------------------------------------------------------');
console.log(filtrarSalario2(equipe, 8000));
console.log('Fim EX9 -------------------------------------------------------------');

//USANDO FILTER
console.log('---------                                                           USANDO FILTER-----------------------------------');

let equipe2 = [
  { nome: 'Bruno', idade: 35, time: 'água', salario: 10000, disponivel: true }, //PRINT nome dos funcionários conforme CATEGORIA listada
  { nome: 'JB', idade: 27, time: 'terra', salario: 8000, disponivel: false },
  { nome: 'Joana', idade: 42, time: 'mar', salario: 7500, disponivel: true },
  { nome: 'Jorge', idade: 35, time: 'água', salario: 12000, disponivel: false },
  { nome: 'Daniel', idade: 27, time: 'terra', salario: 5000, disponivel: true },
  { nome: 'Márcio', idade: 42, time: 'mar', salario: 3000, disponivel: false },
];

const resultado = equipe2.filter((p) => p.time == 'água'); //USANDO FILTER (sem Função!!!)
console.log('FILTER A');
console.log(resultado);

function timeEspecifico(a, b) {
  let nomes2 = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i].time == b) {
      nomes2.push(a[i].nome);
    }
  }
  return nomes2;
}

console.log('FUNCTION');
console.log(timeEspecifico(equipe2, 'água'));
console.log('---------                                                          FIM TESTE FILTER-----------------------------------');

// EX10 — Filtrar funcionários disponíveis
const resultado2 = equipe2.filter((p) => p.disponivel == true); //USANDO FILTER (sem Função!!!)
console.log('EX10 A (FILTER))----------------------------------------------------------------');
console.log(resultado2);

console.log('EX10 B (FUNÇÃO))----------------------------------------------------------------');
function retornaDispo(equipe) {
  let nomes3 = [];
  for (let i = 0; i < equipe.length; i++) {
    if (equipe[i].disponivel == true) {
      nomes3.push(equipe[i].nome);
    }
  }
  return nomes3;
}
console.log(retornaDispo(equipe2));
console.log('Fim EX10 -------------------------------------------------------------');

// 🟢 EX11 — Aquecimento com filter + consolidação
const resultado3 = equipe2.filter((p) => p.salario >= 10000); //USANDO FILTER (sem Função!!!)
console.log(resultado3);
console.log('Fim EX11 -------------------------------------------------------------');

console.log('---------                                                           USANDO MAP-----------------------------------');

// 💪 Agora seu treino (EX12) -MAP
const resultado4 = equipe2.map((p) => p.nome);
console.log(resultado4);
console.log('---------                                                          FIM TESTE MAP-----------------------------------');

// 🔵 EX13 — filter + map juntos
const resultado5 = equipe2.filter((p) => p.disponivel === true);
console.log(resultado5);
const resultado6 = resultado5.map((p) => p.nome);
console.log(resultado6);
console.log('Fim EX13 -------------------------------------------------------------');

// 🟢 EX14 — Base (for + if)
const lista14 = [5, -2, 10, -8, 3, 0];

function negativos(lista) {
  let count = 0;
  for (let i = 0; i < lista14.length; i++) {
    if (lista14[i] < 0) {
      count++;
    }
  }
  return count;
}
console.log(negativos(lista14));
console.log('Fim EX14 -------------------------------------------------------------');

// 🟡 EX15 — Contar por condição em objetos
const equipe15 = [
  { nome: 'Bruno', salario: 10000, disponivel: true },
  { nome: 'JB', salario: 8000, disponivel: false },
  { nome: 'Joana', salario: 7500, disponivel: true },
  { nome: 'Jorge', salario: 12000, disponivel: true },
  { nome: 'Daniel', salario: 5000, disponivel: true },
];

function salarioDispo(lista) {
  let count = 0;
  for (let i = 0; i < lista.length; i++) {
    if (lista[i].salario >= 8000 && lista[i].disponivel) {
      count++;
    }
  }
  return count;
}
console.log(salarioDispo(equipe15));
console.log('Fim EX15 -------------------------------------------------------------');

// 🔵 EX16 — Retornar nomes (for + if + push)
function retornaArray(lista) {
  let base = [];
  for (let i = 0; i < lista.length; i++) {
    if (lista[i].salario >= 8000 && lista[i].disponivel) {
      base.push(lista[i].nome);
    }
  }
  return base;
}
console.log('EX16 A)normal');
console.log(retornaArray(equipe15));

console.log('EX16 B)filter');
const16filtrados = equipe15.filter((p) => p.disponivel === true && p.salario >= 8000); //FILTER
console.log(const16filtrados);
const17nomes = const16filtrados.map((p) => p.nome); //MAP
console.log(const17nomes);

console.log('Fim EX16 -------------------------------------------------------------');

// 🔵 EX17 — FILTER MANUAL (nível base real)
const lista17 = [5, 12, 8, 20, 3, 14, 7, 18];

function maior10Pares(lista) {
  let base = [];
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] > 10 && lista[i] % 2 === 0) {
      base.push(lista[i]);
    }
  }
  return base;
}
console.log(maior10Pares(lista17));
console.log('Fim EX17 -------------------------------------------------------------');

// 🔵 EX18 — transformar depois de filtrar
const a18filtrado = lista17.filter((p) => p > 10 && p % 2 == 0); //FILTER
console.log(a18filtrado);

const a19transform = a18filtrado.map((p) => p * 2); //MAP
console.log(a19transform);
console.log('Fim EX18 -------------------------------------------------------------');

// 🔴 EX19 — filtro + transformação + condição dupla
const lista19 = [5, 12, 8, 20, 3, 14, 7, 18];

const filtrar19 = lista19.filter((p) => p > 10 && p % 2 === 0); //FILTER

const transformar19 = filtrar19.map((p) => p * 3); //MAP
console.log(transformar19);
console.log('Fim EX19 -------------------------------------------------------------');

// 🔵 EX20 — versão encadeada (filter + map juntos)
const encadeado20 = lista19.filter((p) => p > 10 && p % 2 === 0).map((p) => p * 3); //FILTER +MAP
console.log(encadeado20);
