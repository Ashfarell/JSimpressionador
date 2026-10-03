// setTimeout

setTimeout(function () {
  console.log('Primeiro teste');
}, 2000);

console.log('Vai executar antes');

setTimeout(function test2() {
  console.log('Segundo teste');
}, 1000);

// setInterval
let intervalo = 5;
setInterval(function () {
  for (let i = 0; i < intervalo; i++) {
    console.log(`O valor é ${i}`);
    console.log(`Volta ${i}`);
  }
}, 2000);

// let teste2 = setInterval(() => {
//   console.log(`O intervalo é ${intervalo}`);
//   intervalo--;
//   if (intervalo < 0) {
//     clearInterval(intervalo);
//     console.log('FIM');
//   }
// }, 1000);

// CALLBACK
// 1) Criamos a PRIMEIRA função dizerOi
function dizerOi() {
  console.log('Oi');
}

// 2) Criamos a SEGUNDA função executar, que recebe uma função como parâmetro.

function executar(funcao) {
  funcao();
}

// Chamamos a SEGUNDA passando a PRIMEIRA como argumento:
executar(dizerOi); //dizerOi foi passada p/ outra função ==>CALLBACK
