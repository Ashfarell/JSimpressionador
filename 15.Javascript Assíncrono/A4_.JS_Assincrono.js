//A4. setTimeout() -Executa código depois de um período de tempo determinado
// setTimeout(função, tempoEmMilissegundos)
// setTimeout(useCallback, setTimeout);

setTimeout(function () {
  console.log('Testando 1 - último a ser executado');
}, 5000);

console.log('FIM 1 hehe');

setTimeout(function () {
  console.log('Testando 2');
}, 2000);

console.log('FIM 2 hehe');

//A5. setInterval(função, tempoEmMilissegundos)
// Executa função a cada intervalo de tempo até ser STOPADO   (CTRL + C)

setInterval(() => {
  for (let i = 0; i < 5; i++) console.log(`Testando setInterval ${i}`);
}, 2000);

console.log('FIM');

// A6 - Função anônima

let saudação = (function () {
  console.log('test ANONIMA');
})(); //() p/ já executar

// A7
// cidadão de primeira classe = funções armazenadas dentro de variáveis, funções, callbacks, funções retornadas por outras

// FUNÇÃO ANÔNIMA
let varComFuncao = (function () {
  console.log('oi sou uma função dentro de uma var');
})();

// varComFuncao(); 

// FUNÇÃO NOMEADA
let somaComVar = (function somar(a, b) {
  console.log(a + b);
})(5, 4);

// somaComVar(5, 4);

// Função arrowfuncion
let multiplicar = (a, b) => console.log(a * b);
multiplicar(10, 2);

// setTimeout

setTimeout(function () {
  multiplicar(5, 3);
}, 5000);

setTimeout(function () {
  multiplicar(5, 2);
}, 3000);

setTimeout(function () {
  multiplicar(5, 1);
}, 2000);
