function exibirDetalhes(nome, curso) {
  console.log('Professor: ' + nome + ' Curso: ' + curso);
}
exibirDetalhes('JB', 'MKT');

// function nomeFuncao(PARÂMETRO){
// Instrução
// }

// nomeFuncao(ARGUMENTO)              ==>Chamada de função ==>Executa bloco de instruções

function soma(a, b) {
  console.log(a + b);
}
soma(5, 4);

function calculo(a, b) {
  console.log(a + b);
}

let var1 = 10; //Usando VAR e chamando na p/ executar o programa
let var2 = 20;

calculo(5, 10);
calculo(var1, var2);
