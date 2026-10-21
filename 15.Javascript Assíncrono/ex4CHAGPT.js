//TEST
// function somar(a, b) {
//   return a + b;                    //função SOMAR faz o cálculo
// }

// function test(callback) {
//   console.log(callback);           //Função TEST recebe PARÂMETRO= CALLBACK e print CALLBACK
// }

// test(somar(5, 10));               //Executar TEST com ARGUMENTO = SOMAR
//                                    CALLBACK = SOMAR
// console.log('FIM TESTE------------------------------------------------------');

// Exercício 1 — Callback (nível 1)
// Imagine que queremos criar uma função chamada somar que recebe dois números e calcula a soma. Mas tem um detalhe: o resultado deverá ser enviado para outra função, que ficará responsável por exibi-lo no console.
// O objetivo é que esta chamada: somar(10, 5, callback);

function somar(a, b, callback) {
  let resultado = a + b;
  callback1(resultado);
}

function callback1(resultado) {
  console.log(`O resultado da soma é ${resultado}`);
}
somar(5, 10, callback1);

console.log('FIM EX1------------------------------------------------------');

// Exercício 2 — Vamos subir um degrau? 🚀
// Crie uma função chamada processar que:
// 1. Receba um número e uma função callback.
// 2. Multiplique o número por 2.
// 3. Envie o resultado para o callback.
// 4. O callback deve exibir: O dobro é: 20, quando você chamar a função passando 10.

function processar(a, callback) {
  let resultado = a * 2;
  callback2(resultado);
}

function callback2(numero) {
  console.log(`O dobro é: ${numero} `);
}

processar(10, callback2);

console.log('FIM EX2------------------------------------------------------');

// 3. Próximo exercício — Callback com dois valores
// Crie uma função calcular que receba dois números e um callback. Ela deverá multiplicar os dois números
// e enviar o resultado para o callback.
// Exemplo de uso: calcular(4, 6, callback);

function calcular(a, b, callback) {
  let resultado = a * b;
  callback3(resultado);
}

function callback3(valor) {
  console.log(`O resultado da multiplicação é ${valor}`);
}

calcular(5, 10, callback3);

console.log('FIM EX3------------------------------------------------------');

// Exercício 4 — Um pequeno desafio
// Crie uma função executarOperacao que receba dois números e um callback. O callback deverá decidir o que fazer com esses números.
// Use esta chamada como referência: executarOperacao(8, 3, subtrair);

function executarOperacao(a, b, callback) {
  callback(a, b);
}

function callback4(x, y) {
  console.log(`Callback decidiu subtrair e o resultado é ${x - y}`);
}

executarOperacao(5, 10, callback4);

console.log('FIM EX4------------------------------------------------------');
// Exercício 5 — Executar depois de 2 segundos
// Vamos retomar o desafio que ficou pendente.
// Crie uma função chamada executarDepois que receba um callback e o execute após 2 segundos.
// O resultado esperado será: Olá, JavaScript!

function executarDepois(callback) {
  setTimeout(() => {
    callback();
  }, 2000);
}

function callback5() {
  console.log('Olá, Javascript');
}
executarDepois(callback5);

setTimeout(() => {
  console.log('FIM EX5---------------------------------------------------------------------------------------------------');
}, 2000);

// Exercício 6 — Vamos testar a ordem de execução?
// Agora quero que você faça uma pequena alteração no seu raciocínio. Você deve exibir estas três mensagens, nesta ordem:
// Início
// Olá, JavaScript!
// Fim

function exibirMmensagens(callback) {
  console.log('Início');
  setTimeout(() => {
    console.log('Olá, JavaScript!');
    setTimeout(() => {
      callback(); //setTimeout criado dentro do outro ==>DEPENDÊNCIA
    }, 1000);
  }, 1000);
}

function msgFim() {
  console.log('Fim');
}

exibirMmensagens(msgFim);

setTimeout(() => {
  console.log('FIM EX6----------------------------------------------------------------------------------------------------');
}, 3000);

// EX 7 — Sequência de mensagens com callbacks
// Seu objetivo é fazer o programa exibir exatamente esta sequência:
// Início               — aparece imediatamente.
// Carregando dados...  — aparece após 1 segundo.
// Dados carregados!    — aparece 2 segundos depois da mensagem anterior.
// Processo concluído!  — aparece 1 segundo depois da mensagem anterior.

// EX7 - Opção B: colocar outro setTimeout dentro do segundo temporizador, logo após callback1().
console.log('EX7 B - Passando as 2 callbacks na função principal-----------------------------------------------------------');
function mensagensEncadeadas(callback1, callback2) {
  console.log('Início');
  setTimeout(() => {
    console.log('Carregando dados');
    setTimeout(() => {
      callback1();
      setTimeout(() => {
        callback2();
      }, 1000);
    }, 1000);
  }, 1000);
}

//
function msg1() {
  console.log('Dados carregados!');
}
function msg2() {
  console.log('Processo concluído');
}

mensagensEncadeadas(msg1, msg2);

// EX7 - Opção A: fazer a função msg1() também receber um callback, que será executado depois de exibir
console.log('EX7 A - Fazer a função msg1() também receber um callback----------------------------------------------------------');

function mensagensEncadeadasA(callback1) {
  console.log('Início');
  setTimeout(() => {
    console.log('Carregando dados');
    setTimeout(() => {
      callback1(msg2A); //passando o argumento para o CALLBACK msg1
    }, 1000);
  }, 1000);
}

//msg1 (callback) recebe de CALLBACK msg2
function msg1A(callback) {
  console.log('Dados carregados!');
  setTimeout(() => {
    callback();
  }, 1000);
}
function msg2A() {
  console.log('Processo concluído');
}

mensagensEncadeadasA(msg1A);

setTimeout(() => {
  console.log('FIM EX7----------------------------------------------------------------------------------------------------');
}, 4000);

// EX 8 — Callback com resultado
// Imagine que temos três etapas:
// 1. Exibir Início.
// 2. Após 1 segundo, calcular o dobro de 10 e exibir O dobro é 20.
// 3. Após mais 1 segundo, exibir Processo concluído!.
// A diferença em relação ao exercício anterior é que agora a primeira função precisa passar um resultado para outra função.

function mensagemCalculo(callback1, callback2) {
  let a = 0;
  let dobro = 0;
  console.log('Início');
  setTimeout(() => {
    a = 10;
    dobro = a * 2;
    setTimeout(() => {
      callback1(dobro);
      setTimeout(() => {
        callback2();
      }, 1000);
    }, 1000);
  }, 1000);
}

function callback8a(a) {
  console.log(`EX8------------O dobro é ${a}`);
}

function callback8b() {
  console.log('EX8----------Processo concluído');
}

mensagemCalculo(callback8a, callback8b);

setTimeout(() => {
  console.log('FIM EX8----------------------------------------------------------------------------------------------------');
}, 4000);

// EX 9 — Uma função que decide o resultado
// Objetivo
// /Criar uma função verificarNumero() que verifica se um número é maior ou igual a 10 e exibe as mensagens na ordem correta.
// Resultado esperado para o número 12:
// O programa deve exibir:
// Início da verificação
// Verificando...
// Resultado:  aprovado
// Verificação concluída!

function verificarNumero(numero, callbackResultado, callbackFinal) {
  console.log('Início da verificação');
  setTimeout(() => {
    console.log('Verificando');
    setTimeout(() => {
      if (numero >= 10) {
        callbackResultado(true);
      } else callbackResultado(false);
      setTimeout(() => {
        callbackFinal();
      }, 1000);
    }, 2000);
  }, 1000);
}

function exibirResultado(aprovado) {
  if (aprovado) {
    console.log('EX9-----------Resultado: aprovado');
  } else {
    console.log('EX9-----------Resultado: reprovado');
  }
}

function finalizar() {
  console.log('EX9-----------Verificação concluída!');
}

verificarNumero(12, exibirResultado, finalizar);
