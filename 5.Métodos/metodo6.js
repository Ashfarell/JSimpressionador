// Métodos Nativos - Number - parte 1
// Number - valores numérios - inteiors e pontos flutuantes
let inteiro = 42;
let numeroPontoFlutuante = 3.453278;

let inteiro2 = 4669;

//Verificar se número é inteiro
console.log(Number.isInteger(inteiro));

console.log(Number.isInteger(numeroPontoFlutuante));

// Formatar número de acordo com as casas decimais
console.log(inteiro.toFixed(5));
console.log(numeroPontoFlutuante.toFixed(1));

console.log(numeroPontoFlutuante.toFixed()); //Sem argumento ==>  0 CASAS DeCIMAIS

// Formatar número precisão especifíca
console.log(numeroPontoFlutuante.toPrecision(4)); //Verifica próxima casa p/ arrendondar

console.log(inteiro.toPrecision(1)); //define a quantidade de dígitos significativos de um número.
//4e+1 ==> notação científica.   ==> 4 x 10¹ ==>40
//42 tem 2 números significativos; mas pedi apenas 1 ==> 4 ==> 40

console.log(inteiro2.toPrecision(1)); //5 × 10³

// Métodos Nativos - Number - parte 2
let flutuanteString = '32.7869';
let inteiroString = '42';

// converter o valor (geralmente string) p/ Número
console.log(10 + Number(inteiroString));
let a = 100;
let b = Number(inteiroString);

//Converter String p/ Número     !!!vem PONTO FLUTUANTE do número!
console.log('Usando parseFLoat ' + Number.parseFloat(inteiro)); //parseFloat
console.log('Isando Number     ' + Number(inteiro)); //Number
console.log(a + b);

console.log('Usando Number     ' + Number(flutuanteString));
console.log('Usando parseFloat ' + parseFloat(flutuanteString));
console.log(typeof Number(flutuanteString));

// Converter INTEIRO p/ String
let numero = 100; //base decimal
//Bases vão de 2 ==>36
console.log(numero.toString()); //base decimal
console.log(numero.toString(10)); //base decimal
console.log(numero.toString(2)); //base binária
console.log(numero.toString(8)); //base octal

//Converter String p/ Número inteiro  ==>N/ vem PONTO FLUTUANTE do número
console.log(Number.parseInt(flutuanteString));
console.log(Number.parseInt(inteiro));

// Métodos Nativos - Number - parte 3
//NaN (Not a Number)
let notANumber = NaN;
let notANumber2 = 0 / 0;
let notANumber3 = Number('oi');

// Infinity
let infinito = Infinity;
let infinito2 = 1 / 0;
let infinito3 = Number.MAX_VALUE * 2;

console.log(notANumber3, NaN, infinito3);

// Verifica se o valor passado é NaN
console.log(Number.isNaN(notANumber3));
console.log(Number.isNaN(numero));

// Verifica se o valor passado é INFINITY (infinito)
console.log(Number.isFinite(infinito));
console.log(Number.isFinite(inteiro)); //é FINITO
console.log(Number.isFinite('Hello'));
console.log(Number.isFinite(100000000000000000000 * 10000000000000.0 * 10000000000.28283273727273));
