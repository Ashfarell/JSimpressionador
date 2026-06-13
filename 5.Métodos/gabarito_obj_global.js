//MDN - Math: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math
//MDN - DATE: // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date

// Exercício 1: Você precisa criar uma função que receba um número decimal e o arredonde de
// três formas diferentes: para baixo, para cima e para o valor inteiro mais próximo. Mostre o
// resultado de cada arredondamento no console.

let num = 7.89;

function arrendodarNumeros(numero) {
  let baixo = Math.floor(numero); // Number.parseInt(numero);
  let cima = Math.ceil(numero); // Number(numero.toFixed());
  let arrendodarProximo = Math.round(numero);

  console.log(`Arrendodado para baixo : ${baixo}`);
  console.log(`Arrendodado para cima : ${cima}`);
  console.log(`Arrendodado para o valor mais próximo : ${arrendodarProximo}`);
}

arrendodarNumeros(num);

// Exercício 2: Crie uma função que receba uma lista de números e retorne o valor máximo e o
// valor mínimo dessa lista.

let listaNumeros = [10, 5, 20, 40, 1, 7];
//Spread Operator
function encontrarMaxMin(listaNumeros) {
  // [10, 5, 20, 40, 1, 7]
  console.log(`Valor mínimo: ${Math.min(...listaNumeros)}`); // 10, 5, 20, 40, 1, 7
  console.log(`Valor máximo: ${Math.max(...listaNumeros)}`); // 10, 5, 20, 40, 1, 7
}

encontrarMaxMin(listaNumeros);
// Parametros diretamente - argumentos individuais
function encontrarMaxMinimo(num1, num2, num3, num4, num5, num6) {
  console.log(`Valor mínimo: ${Math.min(num1, num2, num3, num4, num5, num6)}`); // 10, 5, 20, 40, 1, 7
  console.log(`Valor máximo: ${Math.max(num1, num2, num3, num4, num5, num6)}`);
}

encontrarMaxMinimo(10, 5, 20, 40, 1, 7);

// Exercício 3: Você deve criar uma função que gere três tipos de números aleatórios: um entre 0
// e 1, outro entre 0 e 100, e um número inteiro aleatório entre dois valores específicos. Exiba os
// resultados no console.

// 50, 100

function gerarNumeroAleatorio(min, max) {
  let zeroAum = Number(Math.random().toFixed(2)); // 0 e 1
  let zeroAcem = Math.random() * 100; // 0 - 100
  let aleatorioMaxMin = Math.random() * (max - min) + min;
  // faixa min-max  0.1 * (100 - 50) = 50 + 50 = max 100.
  console.log(zeroAum);
  console.log(zeroAcem);
  console.log(`Aleatorio entre ${max} e ${min}:  ${aleatorioMaxMin}`);
}

// gerarNumeroAleatorio(30, 100); // chamada da função

// Exercício 4: Crie uma função que receba duas datas e calcule a diferença entre elas em dias.
// Exiba o resultado no console.

// 2024-01-01, 2024-10-07 - ano/mes/dia

function calcularDiferençaEmDias(dataInicial, dataFinal) {
  let diferencaMillissegundos = new Date(dataFinal) - new Date(dataInicial);
  let diferencaEmDias = diferencaMillissegundos / (1000 * 60 * 60 * 24);
  // millisegundos 1000 = 1 segundo => 60 converte segundos em minutos 60seg = 1min =>
  // 60 converter para minutos 60min = 1hora => 24 horas = 1 dia.
  console.log(diferencaMillissegundos);
  console.log(`A diferença entre os datas é : ${diferencaEmDias} dias`);
}

// calcularDiferençaEmDias("2024-01-01", "2024-10-08");

//Exercício 5: Crie uma função que receba uma data e extraia o ano, mês e dia dessa data.
// Exiba as informações no console.

// 2024-10-07 - UTC
// Ano: 2024, Mês: 10, Dia: 6 - UTC-3

function extrairPartesData(dataString) {
  let data = new Date(dataString);
  let ano = data.getFullYear();
  let mes = data.getMonth() + 1; // indices 0 -11
  let dia = data.getDate();

  console.log("Ano: ", ano);
  console.log("Mês: ", mes);
  console.log("Dia: ", dia);
}

// extrairPartesData("2024-10-07");

extrairPartesData("2024-10-07T00:00:00");

// Exercício 6: Crie uma função que receba a data de nascimento de uma pessoa e calcule sua
// idade com base na data atual. Exiba a idade no console.
let dataNascimento = "1990-12-15";
// Idade: 34

function calcularIdade(dataNascimento) {
  let nascimento = new Date(dataNascimento);
  let hoje = new Date(); // data atual

  //Calcular idade com base pela diferença de anos
  let idade = hoje.getFullYear() - nascimento.getFullYear(); // 2024 - 1990 = 34

  // Criar a data do aniversário atual ano
  let aniversarioAtual = new Date(
    hoje.getFullYear(),
    nascimento.getMonth(),
    nascimento.getDate()
  ); //ANO-MES-DIA

  // Calcula diferença em millissegundos e converter em dias
  let diferencaDias = (hoje - aniversarioAtual) / (1000 * 60 * 60 * 24);

  //Ajuste de idade
  let ajuste = (diferencaDias < 0) * 1; // booleano (transformado em numero)
  //   console.log(ajuste);

  idade = idade - ajuste; // 34 - 0; = 34 anos
  // não fez anivsersario esse ano = 34 - 1 = 33;
  console.log("Minha idade é: ", idade);
}

calcularIdade(dataNascimento);

// console.log(1000 * 60 * 60 * 24); // 86400000 millissegundos que 1 dia possui
// timestamp(millissegundos) / millissegundos por dia

// Desafio: Crie uma função que receba uma data e a formate no padrão brasileiro (dia/mês/ano).
// Exiba o resultado no console.

// 2024-10-07 - UTC
// Data formatada no padrão brasileiro: 07/10/2024 - UTC 3

function formatarPadraoBrasileiro(dataString) {
  //Divide a string da data
  let data = new Date(dataString + "T00:00:00");
  let dia = data.getDate();
  let mes = data.getMonth() + 1;
  let ano = data.getFullYear();

  const dataFormata = `${dia}/${mes}/${ano}`;
  console.log(`Essa data é formatada: ${dataFormata}`);
}

// formatarPadraoBrasileiro("2024-10-07T00:00:00");

let data1 = "2024-10-07";
let data2 = "2023-08-22";
let data3 = "2024-01-13";

//DINÂMICA
formatarPadraoBrasileiro(data1);
formatarPadraoBrasileiro(data2);
formatarPadraoBrasileiro(data3);

function formatarPadraoMetodoNumber(dataString) {
  //Dividir a string data
  let partesDaData = dataString.split("-");
  //   console.log(partesDaData);

  //Converter para number
  let ano = parseInt(partesDaData[0]);
  let mes = parseInt(partesDaData[1]);
  let dia = parseInt(partesDaData[2]);

  let dataFormata = `${dia}/${mes}/${ano}`; // não é uma Data - O TIPO DADO - não está vindo do Objeto Date.
  console.log(dataFormata + " Por métodos de number e string.");
  //   console.log(dataFormata.getDate());
}

// formatarPadraoMetodoNumber(data1);

function formatarPadraoBrasileiroDate(dataString) {
  let data = new Date(dataString + "T00:00:00");

  let dataFormatada = data.toLocaleDateString("pt-BR");
  console.log("Data formatada no padrão brasileiro: " + dataFormatada);
}

formatarPadraoBrasileiroDate(data1);
formatarPadraoBrasileiroDate(data2);
formatarPadraoBrasileiroDate(data3);
