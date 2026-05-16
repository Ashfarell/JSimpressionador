//Função olá
function ola(nome) {
  console.log(`Olá ${nome}, seja bem vindo`);
}
ola('Jean');

// function soma(a, b) {
//   console.log(a + b);
// }
// soma(5, 4);

//Função Cadastro
function cadastro(nome, sobrenome) {
  console.log(`Olá ${nome} ${sobrenome} você foi cadastrado com sucesso`);
}
// cadastro('Jean', 'Bounan');

//Funcção saldo em conta
function banco(dispo, despesa) {
  let saldo = dispo - despesa; //VAR dentro da função   - Armazena valor da função
  return saldo;
}
console.log(banco(1000, 200));

//Função junta
function main() {
  //Junta todas as funções
  ola('Bruno');
  cadastro('Bruno', 'N.');
  let saldo = banco(1000, 500);
  console.log(`O saldo da sua conta é de ${saldo} R$`);
}
main();
