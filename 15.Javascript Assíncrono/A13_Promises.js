// const minhaPromise = new Promise((resolve, reject) => {
//   let sucesso = false; // false

//   if (sucesso) {
//     resolve("A operação foi bem sucedida");
//   } else {
//     reject("Houve uma falha na execução");
//   }
// });

// minhaPromise
//   .then((resultado) => {
//     console.log(`${resultado}. Operação bem-sucedida!`);
//   })
//   .catch((erro) => {
//     console.log(`${erro}: Falha na operação`);
//   })
//   .finally(() => {
//     console.log("Operação foi finalizada");
//   });

// console.log(minhaPromise);

function minhaOperacaoAssincrona() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let sucesso = Math.random();
      let sucesso1 = sucesso > 0.5; // 50% sucesso

      if (sucesso1) {
        resolve(`${sucesso.toFixed(2)} Operação concluída com sucesso!`);
      } else {
        reject(`${sucesso.toFixed(2)} Falha na operação`);
      }
    }, 2000);
  });
}

minhaOperacaoAssincrona()
  .then((resultado) => {
    console.log(resultado + ' Operação bem-sucedida da nossa função assíncrona');
  })
  .catch((erro) => {
    console.log(erro + ' Deu ruim!');
  })
  .finally(() => {
    console.log('Fim de operação.');
  });

// console.log(minhaOperacaoAssincrona()); // Estado inicial
