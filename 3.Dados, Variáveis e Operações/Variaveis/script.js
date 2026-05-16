// comentários - atalho: ctrl + ;
//declaração do tipo de variável   + nome da variável = informação armazenada

// declaração TIPO LET
let mensagem = 'Olá impressionador';
console.log(mensagem);

//Declaração do TIPO LET
let cor = 'vermelho';
console.log(cor);
// REDECLARAÇÃO n/ é permitido      (let cor = "azul")  ERRO!!!!!!
cor = 'azul'; //REATRIBUIÇÃO da variável LET (cor)  !!!CORRETO!!!
console.log(cor);

cor = 'verde'; //REATRIBUIÇÃO da variável LET (cor)  !!!CORRETO!!!
console.log(cor);

// declaração TIPO CONST
const segundaMensagem = 'Bem vindo ao curso de JavaScript';
console.log(segundaMensagem);
console.log(segundaMensagem);
//REDECLARAÇÃO n/ é permitido (const segundaMensagem = "Bem vindo ao Brasil)  ERRO!!!!!!
// segundaMensagem = "Quero alterar o valor"; //REATRIBUIÇÃO n/ é permitido !!!! ERRO!!!!!! imutável!!!!! ERRO!
// console.log(segundaMensagem);

// declaração TIPO VAR
var nome = 'Jean';
console.log(nome);

var nome = 'Maria'; //REDECLARAÇÃO é permitido (var nome = "Maria")  !!!CORRETO!!!
console.log(nome);

nome = 'Bruno'; //REATRIBUIÇÃO da variável VAR (nome)  !!!CORRETO!!!
console.log(nome);

console.log(testeHoisting); //n/ tem valor atribuído ainda
var testeHoisting = 'Teste de Hoisting'; //atribuição da variável
console.log(testeHoisting); //n/ funciona c/ LET ou CONST, somente VAR

//Visibilidade

var nome2 = 'maria';
console.log(nome2);
console.log('eu sou o JB');

var trader = 'moraes';
console.log(trader[0]); //acessando o primeiro caractere da string (m)
console.log((trader[0] = 'F')); //tentando alterar o primeiro caractere da string (m) para 'F' - isso não é permitido, strings são imutáveis
console.log(trader);     
