// Exercício 1: Converta valores de texto em números
// Imagine que você tem valores em formato de texto, como "150.50" ou "200px". Seu objetivo é
// convertê-los para números reais
let a = '150.50';
let b = '200px';
let c = 'abc';

//Forma complicada
let bNumero = Number(b.replace('px', '')); //transforma em Número + emimina letras
console.log('EX1 - b: ' + typeof bNumero);
console.log('EX1 - b: ' + Number(b.replace('px', '')));

console.log('EX1 - a Usando Number     : ' + Number(a));
console.log('EX1 - a Usando parseFloat : ' + Number.parseFloat(a));

let aNumero = Number(a);
console.log('EX1 - a: ' + typeof aNumero);

console.log('EX1 - c: ' + Number(c));

// Forma fácil
console.log('Forma fácil EX1 ----------------------------------S---------------------------');
console.log(Number(a));
console.log(parseFloat(a));
console.log(parseFloat(b));
console.log(parseInt(b));
console.log(Number(c));
console.log('FIM EX1 ----------------------------------------------------------------------------------');

// Exercício 2: Somar valores numéricos de uma entrada de formulário
// Você recebe dois valores numéricos como string. Converta-os e some-os corretamente
let d = '10';
let e = '20.25';

console.log(Number(d) + Number(Number(e).toPrecision(3)));
console.log(typeof Number(Number(e).toPrecision(3)));

// let x = 20.258;
// console.log(x.toFixed(1));
// console.log(x.toPrecision(4));
// console.log(typeof Number(x.toFixed(1)));
// console.log(x.toPrecision(3));

console.log('FIM EX2 ----------------------------------------------------------------------------------');

// Exercício 3: Arredonde valores financeiros
// Você tem um valor financeiro com várias casas decimais e deseja exibi-lo com apenas duas
// casas decimais.
let valor = 125.87273232;
console.log(valor.toFixed(2));
console.log(valor.toPrecision(5));

console.log('FIM EX3 ----------------------------------------------------------------------------------');

// Exercício 4: Ajustar a precisão de um número
// Você tem um número muito grande e precisa exibi-lo com uma precisão específica
let numero = 246.8274242424242;
console.log('EX4 - ' + numero.toPrecision(6));

console.log('FIM EX4 ----------------------------------------------------------------------------------');
// Exercício 5: Verificar se a entrada é um número válido
// Você recebe uma entrada do usuário e precisa garantir que seja um número válido antes de
// realizar qualquer operação
let entrada = '123abc';
console.log('EX5 - Forma 1: O número de entrada fornececido é : ' + Number.isInteger(entrada));

if (Number.isInteger(Number(entrada)) === true) {
  console.log('Validando número inteiro: OK');
} else {
  Number.isInteger(Number(entrada) === false);
  console.log('Validando número inteiro: NOK');
}

console.log(isNaN(entrada));

if (Number.isNaN(Number(entrada)) === true) {
  console.log('Entrada não é número válido');
} else {
  Number.isNaN(Number(entrada)) === false;
  console.log('Entrada ok');
}

console.log(parseFloat(entrada));
console.log(parseInt(entrada));
console.log(Number(entrada));
console.log('FIM EX5 ----------------------------------------------------------------------------------');

// Exercício 6: Verificar se o número é finito
// Você quer garantir que um número não seja Infinity ou NaN antes de usá-lo em cálculos
let teste = '123';

if (isNaN(Number(teste)) === true || !isFinite(Number(teste))) {
  console.log('Dado NaN ou infinito');
} else {
  console.log('Dado ok');
}

console.log(typeof Number(teste));
console.log(typeof parseFloat(Number(teste)));
console.log(isNaN(teste));
console.log(!isFinite(teste));
console.log('FIM EX6 ----------------------------------------------------------------------------------');

let x = '10.25';
console.log(Number(x));
console.log(parseFloat(x));
console.log(parseInt(x));

let y = '100.25abc';
console.log(Number(y));
console.log(parseFloat(y));
console.log(parseInt(y));
