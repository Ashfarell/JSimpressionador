// Exercício 1: Você precisa criar uma função que receba um número decimal e o arredonde de
// três formas diferentes: para baixo, para cima e para o valor inteiro mais próximo. Mostre o
// resultado de cada arredondamento no console.
// Exemplo Entrada: // 7.89
// Exemplo Saída: // Arredondado para baixo: 7
// Arredondado para cima: 8
// Arredondado para o valor mais próximo: 8
function arredondarNumero(x) {
  console.log(Math.floor(x));
  console.log(Math.ceil(x));
  console.log(Math.round(x));
}
arredondarNumero(7.89);
console.log('FIM EX1 -------------------------------------------------------------------------------------------------------');

// Exercício 2: Crie uma função que receba uma lista de números e retorne o valor máximo e o valor mínimo dessa lista.
// Exemplo Entrada: // 10, 5, 20, 40, 1, 7
// Exemplo Saída: // Valor mínimo: 1
// Valor máximo: 40
const lista = [5, 15, -10, 95, -25, 105, 25, 30];
function maxMin(a, b, c, d, e, f, g, h) {
  console.log(Math.max(a, b, c, d, e, f, g, h));
  console.log(Math.min(a, b, c, d, e, f, g, h));
}
maxMin(5, 15, -10, 95, -25, 105, 25, 30);
console.log('EX2 SIMPLES----------------------------------------');

function maxMin4(lista) {
  console.log(Math.min(...lista)); ////…antes do parâmetro!!!
  console.log(Math.max(...lista));
}

maxMin4(lista);

console.log('EX2 SPREAD OPERATOR----------------------------------------');

function maxMin2(lista) {
  let maior = lista[0];
  let menor = lista[0];

  for (let i = 0; i < lista.length; i++) {
    if (lista[i] > maior) {
      maior = lista[i];
    }
  }
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] < menor) {
      menor = lista[i];
    }
  }
  console.log(maior);
  console.log(menor);
}
maxMin2(lista);
console.log('EX2 c/ 2 FOR 2 IF----------------------------------------');

function maxMin3(lista) {
  let maior = lista[0];
  let menor = lista[0];

  for (let i = 0; i < lista.length; i++) {
    if (lista[i] > maior) {
      maior = lista[i];
    }
    if (lista[i] < menor) {
      menor = lista[i];
    }
  }
  console.log(maior);
  console.log(menor);
}
maxMin3(lista);

console.log('EX2 c/ 1 FOR 2 IF----------------------------------------');
console.log('FIM EX2 -------------------------------------------------------------------------------------------------------');

// Exercício 3: Você deve criar uma função que gere três tipos de números aleatórios: um entre 0 e 1, outro entre 0 e 100, e um número inteiro aleatório entre dois valores específicos.
// Exiba os resultados no console.
// Exemplo Entrada: // 50, 100
// Exemplo Saída: // Aleatório entre 0 e 1: 0.8629821531529918
// Aleatório entre 0 e 100: 42.48780566605361
// Aleatório entre 50 e 100: 63.70589822740784

function Random2(min, max) {
  console.log(Number(Math.random().toFixed(2)));
  console.log(Math.random() * 100);
  console.log(Math.random() * (max - min) + min); //pq erro???
}
Random2();
console.log('EX3 C/ parâmetro----------------------------------------');
function Random() {
  console.log(Number(Math.random().toFixed(2)));
  console.log(Math.random() * 100);
  console.log(Math.round(Math.random() * 50 + 50));
}
Random();
console.log('EX3 S/ parâmetro----------------------------------------');
console.log('FIM EX3 -------------------------------------------------------------------------------------------------------');

// Exercício 4: Crie uma função que receba duas datas e calcule a diferença entre elas em dias.
// Exiba o resultado no console.
// Exemplo Entrada: // 2024-01-01, 2024-10-07
// Exemplo Saída: // Diferença em dias entre 2024-01-01 e 2024-10-07: 280
function difVal() {
  const agora = new Date();
  const futuro = new Date(2028, 0, 1);
  const conversao = 1000 * 60 * 60 * 24;
  const diferenca = (futuro - agora) / conversao;

  console.log('agora: ' + agora);
  console.log(agora.getTime()); //gera Número grande
  console.log('futuro: ' + futuro);
  console.log(futuro.getTime()); //gera Número grande
  console.log('A diferença é de ' + Number(diferenca.toFixed(0)) + ' dias');
}

difVal();
console.log((1830308400000 - 1780722316423) / (1000 * 60 * 60 * 24));
console.log('FIM EX4 -------------------------------------------------------------------------------------------------------');

const hoje = new Date();
const timestamp = hoje.getTime();

console.log(hoje);
console.log(timestamp); //pegando Nº MAT
console.log(new Date(timestamp));
console.log('TESTE -----------------------------------------');
// Exercício 5: Crie uma função que receba uma data e extraia o ano, mês e dia dessa data.
// Exiba as informações no console.
// Exemplo Entrada: // 2024-10-07
// Exemplo Saída: // Ano: 2024, Mês: 10, Dia: 6
function extraction(data) {
  //   const agora2 = new Date();
  console.log('Ano: ' + data.getFullYear()); //ano
  console.log('Mês: ' + data.getMonth() + 1); //mês   ==>+1 p/ corrigir (0-11)
  console.log('Dia: ' + data.getDate()); //dia
}
const dataTest = new Date(2025, 2, 3);
extraction(dataTest);
console.log('FIM EX5 -------------------------------------------------------------------------------------------------------');

// Exercício 6: Crie uma função que receba a data de nascimento de uma pessoa e calcule sua idade com base na data atual. Exiba a idade no console.
// Exemplo Entrada: // 1990-05-15
// Exemplo Saída: // Idade: 34
// Desafio: Crie uma função que receba uma data e a formate no padrão brasileiro (dia/mês/ano).
// Exiba o resultado no console.
// Exemplo Entrada: // 2024-10-07
// Exemplo Saída: // Data formatada no padrão brasileiro: 07/10/2024
function birthAge(birthDate) {
  const data = new Date(birthDate); //converte a data STRING ==> DATA
  const dataAtual = new Date();
  const conversao = 1000 * 60 * 60 * 24;
  const diferenca = (dataAtual - data) / conversao / 365;
  console.log('A diferença entre as datas é de : ' + Number(diferenca.toFixed(0)) + ' anos');
}

birthAge('1988-02-24'); //Melhor passar data como string (se não for JS pode achar que é p/ fazer cálculo)
console.log('FIM EX6 -------------------------------------------------------------------------------------------------------');
