// Funções Padrão e Argumentos Opcionais
function cumprimentar(saudacao, nome) {
  console.log(`Olá ${nome} , ${saudacao}`);
}
cumprimentar(); //print UNDEFINED pq n/ tem ARGUMENTO

// Agora c/ VALORES PADRÃO p/ os PARÂMETROS
function cumprimentar2(saudacao = 'boa tarde', nome = 'Visitante') {
  console.log(`Olá ${nome}, ${saudacao}`);
}
cumprimentar2();
