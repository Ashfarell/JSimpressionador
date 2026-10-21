// Objeto com função dentro
let conta = {
  nome: 'Igor',
  numero: 58,
  saldoInicial: 500,
  idade: 38,
  gerarFrase: function () {
    console.log(`O usuário é ${this.nome} e seu número é ${this.numero}. Sua idade é ${conta.idade}`);
  },
};

conta.gerarFrase();

// 1. O que você fez: uma função fábrica (factory function)
function criarConta(nome, numero, saldoInicial) {
  return {
    nome,
    numero,
    saldoInicial,
    gerarRelatorio: function () {
      return `O usuário é ${this.nome}, seu número é ${this.numero} e seu saldo inicial é ${this.saldoInicial}`;
    },
  };
}

const conta1 = criarConta('Jean', 72, 250);
console.log(conta1.gerarRelatorio());
console.log(conta1);

console.log(conta1 instanceof criarConta);
// console.log(conta instanceof conta1);

