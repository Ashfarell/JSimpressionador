// Exercício 1: Callback Simples
// Escreva uma função imprimirMensagem que aceita uma mensagem e uma função de retorno de chamada
// (callback). A função deve imprimir a mensagem no console e, em seguida, invocar a função de retorno de chamada

function imprimirMensagem(mensagem, callback) {
  console.log(mensagem);
  setTimeout(() => {
    callback();
  }, 2000);
}

imprimirMensagem('Teste', outra);

function outra() {
  console.log('Executando a função');
}

setTimeout(() => {
  console.log('FIM EX1---------------------------------------------------------------------------');
}, 2000);

const { resolve } = require('dns');
// Exercício 2: Leitura de Arquivo com Callback
// Escreva uma função lerArquivo que aceita um nome de arquivo e uma função de retorno de chamada
// (callback). A função deve ler o conteúdo do arquivo e passá-lo para a função de retorno de chamada. Por fim,
// chame a função lerArquivo() usando um callback que faça o conteúdo do arquivo ser exibido no console.
// Dica: disponibilizamos um arquivo de texto para esse exercício. Coloque-o na mesma pasta do seu código
// JavaScript pra facilitar a resolução
const fs = require('fs');

function lerArquivo(nomeArquivo, callback) {
  // Callback 1: fornecido pelo fs.readFile
  fs.readFile(nomeArquivo, 'utf8', (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    callback(data);
    // Verifica se houve erro
    // Callback 2: recebido como parâmetro de lerArquivo
    // Deve receber o conteúdo data
  });
}

function leitorArquivo(data) {
  console.log(data);
}

lerArquivo('./Exercícios - textoExercicio2.txt', leitorArquivo);

setTimeout(() => {
  console.log('FIM EX2---------------------------------------------------------------------------');
}, 3000);

// Exercício 3: Conceitos Básicos de Promises
// Crie uma nova Promise que seja resolvida após um atraso de 1 segundo e retorne a string "Promise
// resolvida". Use .then() para lidar com o valor resolvido e imprimir no console.
function testarPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Promise resolvida`);
    }, 1000);
  });
}

testarPromise().then((resultado) => {
  console.log(resultado);
});

setTimeout(() => {
  console.log('FIM EX3-------------------------------------------------------------');
}, 3000);

// Exercício 4: Encadeamento de Promises
// Crie duas Promises: uma que seja resolvida para "Olá" após um atraso de 1 segundo e outra que seja
// resolvida para "Mundo" após um atraso de 2 segundos. Encadeie essas Promises usando .then() para imprimir
// "Olá, Mundo" no console.
let primeiraMensagem;

function encadeamentoPromiseA() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Olá`);
    }, 1000);
  });
}

function encadeamentoPromiseB() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Mundo`);
    }, 2000);
  });
}

encadeamentoPromiseA()
  .then((resultado) => {
    primeiraMensagem = resultado;
    return encadeamentoPromiseB();
  })
  .then((ops2) => {
    console.log(`${primeiraMensagem}, ${ops2}`);
  });

setTimeout(() => {
  console.log('FIM EX4-------------------------------------------------------------');
}, 4000);

// Exercício 5: Tratamento de Erros com Promises
// Crie uma Promise que seja rejeitada com um erro após um atraso de 1 segundo. Use .catch() para lidar com o
// erro e imprimir no console.

// EX5 A)FUNÇÃO--------------------------------------------------------------
function tratamentoErroA() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let numero = Math.random();
      let notaCorte = 10;
      if (numero > notaCorte) {
        resolve(`Ok`);
      } else {
        reject(`Erro A`);
      }
    }, 1000);
  });
}

tratamentoErroA()
  .then((resultado) => {
    console.log(resultado);
  })
  .catch((erro) => {
    console.log(erro);
  });

//EX5 B)FUNÇÃO - Sem resolve--------------------------------------------------------------

// console.log('EX5 B)FUNÇÃO - Sem resolve');
function tratamentoErroB() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(`Erro B`);
    }, 1000);
  });
}

tratamentoErroB().catch((erro) => {
  console.log(erro);
});

// EX5 C)CONST--------------------------------------------------------------

const tratamentoErroC = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Erro C');
  }, 1000);
});

tratamentoErroC.catch((erro) => {
  console.log(erro);
});

setTimeout(() => {
  console.log('FIM EX5-------------------------------------------------------------');
}, 3000);

// Exercício 6: Promise All
// Crie três Promises: uma que seja resolvida para "Um" após um atraso de 1 segundo, outra que seja resolvida
// para "Dois" após um atraso de 2 segundos e uma terceira que seja resolvida para "Três" após um atraso de 3
// segundos. Use Promise.all() para aguardar a resolução de todas as Promises e, em seguida, imprima o array
// de valores resolvidos no console.
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Um');
  }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Dois');
  }, 2000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Três');
  }, 3000);
});

Promise.all([promise1, promise2, promise3]).then((resultados) => {
  console.log(resultados);
});

setTimeout(() => {
  console.log('FIM EX6-------------------------------------------------------------');
}, 4000);

// Exercício 7: Async/Await Básic
// Escreva uma função assíncrona buscarDados que usa await para simular a busca de dados de uma API após
// um atraso de 2 segundos. Imprima os dados buscados no console.
function api() {
  return `Dados recebidos da API`;
}
async function buscarDados() {
  return await new Promise((resolve) => {
    let resultado = api();
    setTimeout(() => {
      resolve(resultado);
    }, 2000);
  });
}

buscarDados().then((dados) => {
  console.log(dados);
});

setTimeout(() => {
  console.log('FIM EX7-------------------------------------------------------------');
}, 4000);

// Exercício 8: Tratamento de Erros com Async/Await----------------------------------------
// Escreva uma função assíncrona obterDados que usa await para buscar dados de uma API após um atraso de 1
// segundo. Se ocorrer um erro, capture-o e imprima uma mensagem de erro no console.

// EX8 - Versão A) Tratamento de erro com catch
function fakeAPI() {
  return 10;
}

async function obterDadosA() {
  return await new Promise((resolve, reject) => {
    let resultado = fakeAPI();
    setTimeout(() => {
      if (resultado === 100) {
        resolve(`OK A`);
      } else {
        reject(`NOK A`);
      }
    }, 1000);
  });
}

obterDadosA()
  .then((resposta) => {
    console.log(resposta);
  })
  .catch((erro) => {
    console.log(erro);
  });

// EX8 - Versão B) Tratamento de erro com ASCYNC/AWAIT----------------------------------------
async function obterDadosB() {
  try {
    let resultado = await new Promise((resolve) => {
      setTimeout(() => {
        resolve(fakeAPI());
      }, 1000);
    });
    if (resultado <= 100) {
      throw new Error('Resulado inválido');
    } else {
      console.log('OK');
    }
  } catch (erro) {
    console.log(erro.message);
  }
}

obterDadosB();

setTimeout(() => {
  console.log('FIM EX8----------------------------------------------------------------------');
}, 4000);

// // Exercício 9: Async/Await com Promise.all()
// Escreva uma função assíncrona buscarMultiplosDados que usa Promise.all() e await para buscar dados de
// várias APIs simultaneamente. Imprima o array de dados buscados no console
let api1 = [10, 20, 30, 40];
let api2 = [2, 5, 4, 2, '2'];
let api3 = ['2', 'd', '8'];

async function buscarMultiplosDados(a, b, c) {
  const retornoApi = await Promise.all([a, b, c]);
  return retornoApi;
}

buscarMultiplosDados(api1, api2, api3).then((resposta) => {
  console.log(resposta);
});

setTimeout(() => {
  console.log('FIM EX9-------------------------------------------------------------------------');
}, 5000);

// Exercício 10: Async/Await com Tratamento de Erros
// Escreva uma função assíncrona obterDadosComFallback que usa try...catch e await para buscar dados de uma
// API. Se ocorrer um erro, utilize um valor de fallback e imprima-o no console.

// EX10 A) TRY/CATCH ==> Tratamento de erro
function apiTesteA() {
  return new Promise((resolve, reject) => {
    const resposta = Math.random() * 10;

    if (resposta > 5) {
      resolve(`A) Passou ${resposta}`);
    } else {
      reject(new Error(`A) Não passou ${resposta}`));
    }
  });
}

async function obterDadosComFallbackA() {
  try {
    const retorno = await apiTesteA();

    console.log(retorno);
  } catch (erro) {
    console.log(erro.message);
  }
}
obterDadosComFallbackA(apiTesteA);

// EX10 B) com IF/ELSE (Não é tratamento de erro!!!!)----------------------------------------------------------
// function apiTesteB() {
//   console.log(Math.random() * 10);
//   return Math.random() * 10;
// }

// async function obterDadosComFallbackB() {
//   const resposta = await apiTesteB();
//   if (resposta > 5) {
//     console.log(`B- Passou! ${resposta} é maior que 5`);
//   } else {
//     console.log(`B- Não pasou! ${resposta} é menor que 5`);
//   }
// }

// obterDadosComFallbackB(apiTesteB);
