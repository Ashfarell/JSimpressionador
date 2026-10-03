// 🧩 Exercício 1 — Operação assíncrona-------------------------------------------------------------------------
function verificarUsuario() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let numero = Math.random();
      let userValido = numero > 0.5;
      if (userValido) {
        resolve(`Numero ${numero.toFixed(2)} - Usuário encontrado.`);
      } else reject(`Numero ${numero.toFixed(2)} - Usuário não encontrado.`);
    }, 2000);
  });
}

verificarUsuario()
  .then((resultado) => {
    console.log(`${resultado} Verificação validada`);
  })
  .catch((erro) => {
    console.log(` ${erro} Verificação reprovada`);
  })
  .finally(() => console.log('Operação encerrada'));

setTimeout(() => {
  console.log('FIM EX1--------------------------------------------------------------------');
}, 2000);

// 🧩 Exercício 2 — Buscar um produto-------------------------------------------------------------------------
function buscarProduto() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let produtoEncontrado = true;
      if (produtoEncontrado) {
        resolve('Produto encontrado!');
      } else {
        reject('Produto não encontrado!');
      }
    }, 3000);
  });
}

buscarProduto()
  .then((resultado) => {
    console.log(`${resultado} Sucesso `);
  })
  .catch((erro) => {
    console.log(`${erro} Falha`);
  })
  .finally(() => {
    console.log('Operação encerrada');
  });

setTimeout(() => {
  console.log('FIM EX2-------------------------------------------------------------------');
}, 3000);
