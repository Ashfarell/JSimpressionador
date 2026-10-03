// EX1
// let nome = 'Jean';
// console.log(nome);
// console.log(idade);

// EX1  TRY + CATCH
// try {
//   console.log(idade);
// } catch (erro) {
//   //CAPTURA O ERRO E COLOCA NA VARIÁVEL "erro"
//   console.log(erro);
// }

// EX2   THROW
// let idade = 25;

// if (idade < 18) {
//   throw new Error('Idade menor que 18');
// } else {
//   console.log(idade);
// }

// EX3 TRY + CATCH + THROW
// let idade = 10;

// try {
//   if (idade < 15) {
//     throw new Error('Idade proibida'); //1. Criando um OBJETO de erro com a mensagem 'Idade proibida'
//     //                                     2.Lançando esse erro
//   }

//   console.log('Idade permitida');
// } catch (erro) {
//   console.log(erro.message);
// }

// let idade2 = 20;
// if (idade2 < 15) {
//   console.log('ERRO');
// } else {
//   console.log('IDADE OK');
// }

// 🥊 Exercício 1 — Validação de idade
// Menor de 18 anos → deve ser considerado um erro.

function verificarIdade(idade) {
  let idadeMinima = 18;

  try {
    if (idade < idadeMinima) {
      throw new Error(`Idade abaixo da idade de ${idadeMinima} anos.`);
    }
    console.log('IDADE OK');
  } catch (erro) {
    console.log(erro.message);
  }
}

verificarIdade(15);

// 🥊 Exercício 2 — Validar preço
// Preço igual ou menor que zero → erro.

function validarPreco(preco) {
  try {
    if (preco <= 0) {
      throw new Error('Preço não autorizado');
    }
    console.log('Preço cadastrado');
  } catch (erro) {
    console.log(erro.message);
  }
}
validarPreco(0);

// 🧠 Desafio — validar um produto
// Se nome estiver vazio → lançar: "Nome do produto é obrigatório"
// Se preco for menor ou igual a 0 → lançar: "Preço deve ser maior que zero"
// "Preço deve ser maior que zero" "Produto cadastrado com sucesso!"
function cadastrarProduto(nome, preco) {
  try {
    if (nome === '') {
      throw new Error('Nome do produto é obrigatório');
    } else if (preco <= 0) {
      throw new Error('Preço deve ser maior que zero');
    }
    console.log(`Produto ${nome} com o preço R$${preco.toFixed(2)} cadastrado com sucesso!`);
  } catch (erro) {
    console.log(erro.message);
  } finally {
    console.log('CERTO OU ERRADO, BLOCO EXECUTADO');
  }
}
cadastrarProduto('', 10);
