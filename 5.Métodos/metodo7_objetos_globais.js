let numeros = [5, 15, 25, 30];
console.log(numeros.every((numero) => numero > 7));

let frutas = ['banana', 'maça', 'pera', 'melao'];

console.log(frutas.every((fruta) => fruta.includes('a')));

let PI = Math.PI; //PI
console.log(PI);

let raizQuadr = Math.sqrt(9); //Raiz quadrada
console.log(raizQuadr);

const potencia = Math.pow(2, 4); //Potência ==>base, expoente
console.log(potencia);

console.log('start tests--------------------------------------------------------------------------');

function raiz(x) {
  return Math.sqrt(x);
}

console.log(`A raiz de ${9} é ${raiz(9)}`);

function potencia2(a, b) {
  return Math.pow(a, b);
}

console.log(potencia2(10, 2));
console.log(`${5} Elevado à ${2} é igual à ${potencia2(5, 2)}`);

console.log('Math parte 2--------------------------------------------------------------------------------');
let numero = 3.45;
let numero2 = 3.55;

console.log(Math.round(numero)); //4 p/ baixo
console.log(Math.round(numero2)); //5 p/ baixo

console.log(parseFloat(numero));

console.log(parseInt(numero2));

console.log(Math.random() * 10);

const numeroAleatorio = Math.random() * 10;
console.log(numeroAleatorio.toFixed(2));

const aleatorio = Number.parseFloat((Math.random() * 100).toFixed(2));
console.log(typeof aleatorio);
console.log(aleatorio);
