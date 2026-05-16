//Coerção Implicita
console.log(5 == '5');
console.log(5 === '5)');
console.log(5 + '5'); //Coerção Explicita  ==>número 5 é convertido para string '5'

console.log('10' - 5); //Coerção Explicita ==> - não é definido para string: string é convertida p/ number
console.log('3' * '2'); //Coerção Explicita ==> - não é definido para string: string é convertida p/ number
console.log('10' / '2'); //Coerção Explicita ==> - não é definido para string: string é convertida p/ number

console.log(null == undefined);
console.log(null === undefined);

console.log('Jean' == 'jean');
console.log('Jean' === 'jean');

//Interpolação
let name = 'jean';
let name2 = 'Maria';
let boasVindas = `Oi, ${name} seja bem vindo`;
console.log(boasVindas);
console.log(`Oi  ${name} e ${name2} sejam bem vindos`);

//índice
console.log(name[0]);
console.log((name[0] = 'P'));
console.log(name[0]);
console.log(typeof name);

//boolean
let a = 10;
let b = 20;
console.log(a > b);
console.log(a > b == true);
console.log(5 == '5');
console.log(5 === '5');

//Coerção Explicita
console.log('Coerção Explicita');
let numero = 123;
console.log(typeof numero);
console.log(String(numero));
console.log(typeof String(numero)); //mudei o tipo de numero para string, mas não alterei a variável numero, por isso o typeof numero continua sendo number
console.log(typeof numero); //para alterar o tipo da variável numero, preciso atribuir a conversão a ela mesma ou a outra variável

let string = String(numero); //outra variável
console.log(typeof string);

console.log('Número 2');
let numero2 = 45;
console.log(typeof numero2);
numero2 = String(numero2); // atribuição da conversão a própria variável numero2, ou seja, o tipo de numero2 agora é string
console.log(typeof numero2);

//CHECK var e Boolean
console.log('Check var e Boolean');
let txt = 'text';
console.log(Boolean(txt)); //toda string não vazia é considerada true

let vazio = '';
console.log(Boolean(vazio)); //toda string vazia é considerada false

let vazio2;
console.log(Boolean(vazio2)); //variável não inicializada é considerada false

let zero = 0;
console.log(Boolean(zero)); //o número 0 é considerado false

let one = 1;
console.log(Boolean(one)); //qualquer número diferente de 0 é considerado true

let txt2 = '12345';
console.log(Number(txt2)); //toda string que representa um número é convertida para number, caso contrário, o resultado é NaN (Not a Number)
console.log(Boolean(txt2)); //toda string não vazia é considerada true, mesmo que seja uma string numérica

let txt3 = 'var sem valor';
console.log(Number(txt3)); //toda string que não representa um número é convertida para NaN

//Converter booleano
console.log('Converter booleano');
let booleano = true;
console.log(booleano);
console.log(Number(booleano)); //true é convertido para 1 e false é convertido para 0
console.log(String(booleano)); //true é convertido para 1 e false é convertido para 0

let booleano2 = false;
console.log(booleano2);
console.log(Number(booleano2));
console.log(String(booleano2));

console.log(booleano[0]); //booleano é um tipo primitivo e não tem índices, portanto, isso resultará em undefined

//Test índice
console.log('Test índice');
let indice = 185;
console.log(indice[0]); //números são tipos primitivos e não têm índices, portanto, isso resultará em undefined

let palavra = 'coerção';
console.log(palavra[0]);
console.log(palavra[10]);
