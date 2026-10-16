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

// 🧩 Exercício 4 — (Aquecimento)-------------------------------------------------------------------------
function verificarIdade() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let idade = 20;
      if (idade >= 18) {
        resolve('Usuário maior de idade!');
      } else {
        reject('Usuário menor de idade!');
      }
    }, 2000);
  });
}

verificarIdade()
  .then((resultado) => {
    console.log(`${resultado} Sucesso`);
  })
  .catch((erro) => {
    console.log(`${erro} Falha`);
  })
  .finally(() => {
    console.log('Programa encerrado');
  });

setTimeout(() => {
  console.log('Fim EX3');
}, 3000);

// 🧩 EX5 — Buscar informações de um produto
function buscarProduto() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const produto = {
        nome: 'Notebook',
        preco: 3500,
      };
      let produtoEncontrado = true;
      if (produtoEncontrado) {
        // resolve(`Produto: ${produto.nome}  Preço: ${produto.preco}`);  //CASO A
        resolve(produto); //CASO B
      } else {
        reject('Produto não encontrado');
      }
    }, 2000);
  });
}

buscarProduto()
  .then((resultado) => {
    // console.log(`${resultado} -Produto encontrado -Sucesso EX5`);  //CASO A
    console.log(`O produto ${resultado.nome} foi encontrado com o preço de ${resultado.preco}`); //CASO B
  })
  .catch((erro) => {
    console.log(`${erro} Falha EX5`);
  })
  .finally(() => {
    console.log('Programa encerrado EX5');
  });
