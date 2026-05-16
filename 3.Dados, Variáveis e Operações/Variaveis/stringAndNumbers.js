//String
// "um texto" - string
// 'Criar uma mensagem' - string
// 'Cria mais um texto' - string template

let mensagem = 'Olá mundo';
let nome = 'Paulo';
let nome2 = 'Maria';
let mensagem2 = `Olá, ${nome}. Bem vindo ao curso`; //INTERPOLAÇÃO DE STRING - template string - template literal
let mensagem3 = `${nome2}. , ${nome}. Bem vindos ao curso`; //INTERPOLAÇÃO DE STRING - template string - template literal

console.log(mensagem);
console.log(nome);
console.log(mensagem2);
console.log(mensagem3);
//console.log(mensagem + ' ' + nome + ' ' + 'isso é uma concatenação'); //concatenação de string

console.log(nome2[0]); //acessar um caractere específico da string - índice começa em 0
console.log((nome2[0] = 'J')); //string é imutável, n/ é possível alterar um caractere específico da string
console.log(nome2[0]);

// Number
//Inteiro: Positivo ou Negativo  - decimal: Positivo ou Negativo - NaN (Not a Number) - Infinity (Infinito)

let numero = 30;
let numero1 = -56;
let decimal = 3.14;
// infinity e NaN
