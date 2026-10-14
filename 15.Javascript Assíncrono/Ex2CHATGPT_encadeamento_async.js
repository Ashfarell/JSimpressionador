// 🧠 EXERCÍCIOS — Encadeamento de Promises + async/await
// 1. Aquecimento — 2 then()
const minhaPromise = new Promise((resolve, reject) => {
  resolve('Primeira mensagem');
});

minhaPromise
  .then((mensagem) => {
    console.log(mensagem);

    // Quero que o próximo then receba:
    // "Segunda mensagem"
    return `Segunda mensagem`;
  })
  .then((novaMensagem) => {
    console.log(novaMensagem);
  });

//   2. Agora faça a "escada"
const promessa = new Promise((resolve) => {
  resolve('etapa 1');
});

promessa
  .then((mensagem) => {
    console.log(mensagem);
    return `etapa 2`;
  })
  .then((segundaMensagem) => {
    console.log(segundaMensagem);
    return `etapa 3`;
  })
  .then((ultimaMensagem) => {
    console.log(ultimaMensagem);
  });

//   3. Agora entra uma segunda Promise
function operacao1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Operação 1 concluída');
    }, 1000);
  });
}
function operacao2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Operação 2 concluída');
    }, 1000);
  });
}

operacao1()
  .then((mensagem) => {
    console.log(mensagem);
    return operacao2();
  })
  .then((ops2) => {
    console.log(ops2);
  });

// 🧠 EX4 — As mesmas duas operações com async/await

async function executar() {
  try {
    const ops1 = await operacao1();
    console.log(ops1);
    const ops2 = await operacao2();
    console.log(ops2);
  } catch {
    erro;
    console.log(erro);
  }
}

executar();

// 🧠 EX5 — "Todas as operações concluídas"
// Parte A — .then()
function operacaoEncadeada() {
  return operacao1()
    .then((mensagem) => {
      console.log(mensagem);
      return operacao2();
    })
    .then((ops2) => {
      console.log(ops2);
      console.log('Todas as operações concluídas');
    });
}

operacaoEncadeada();

// Agora Parte B 😎 Faça a mesma coisa usando async/await:

async function executarOperacaoEncadeada() {
  try {
    const const1 = await operacao1();
    console.log(const1);
    const const2 = await operacao2();
    console.log(const2);
    console.log('Todas as operações concluídas');
  } catch (erro) {
    console.log(erro);
  }
}
