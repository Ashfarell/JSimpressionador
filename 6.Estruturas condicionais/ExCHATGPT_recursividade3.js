// 🧠 Bateria de Recursividade — Nível 1 (fundamentos)
// EX1 — Contar de 1 até N
// Crie uma função recursiva que receba um número e imprima de 1 até ele.

console.log('EX1 A) REGRESSIVA-------------------------------------------------------------------------------------');
function NAteUm(n) {
  console.log(n);
  if (n === 1) {
    return 0;
  } else {
    return NAteUm(n - 1); //console.log ANTES da função ==>PRINT na IDA   (5,4,3,2,1)
  }
}
NAteUm(5); //Aqui conta de 5 até 1...

console.log('EX1 A) PROGRESSIVA-------------------------------------------------------------------------------------');
function UmAteN(n) {
  if (n === 0) {
    return 1;
  } else {
    UmAteN(n - 1);
    console.log(n); //console.log DEPOIS da função ==>  PRINT na VOLTA   (1,2,3,4,5)
  }
}
UmAteN(5); //Aqui conta de 1 até 5

console.log('FIM EX1--------------------------------------------------------------------------------------');

// Teste p/ mostrar PRINT na IDA e na VOLTA
function test(n) {
  if (n === 0) {
    return 0;
  } else {
    console.log('A', n); //console.log ANTES da função ==>PRINT na IDA   (3,2,1)
    test(n - 1);
    console.log('B', n); //console.logDEPOIS da função ==>PRINT na IDA   (1,2,3)
  }
}
test(3);

console.log('FIM TESTE--------------------------------------------------------------------------------------');

// 🧠 EX2 — Contagem Regressiva
function contagemRegressiva(n) {
  console.log(n);
  if (n === 1) {
    return;
  } else {
    return contagemRegressiva(n - 1);
  }
}

contagemRegressiva(5);

console.log('FIM EX2--------------------------------------------------------------------------------------');

// EX3 Somar de 1 até N usando recursividade.
function contarAteN(n) {
  if (n === 0) {
    return 0;
  } else {
    return n + contarAteN(n - 1);
  }
}
console.log(contarAteN(5));

console.log('FIM EX3--------------------------------------------------------------------------------------');

// EX4 — Inverter uma palavra
// Crie uma função recursiva que retorne:   ananab
const palavra = 'banana';

function inverter(palavra) {
  if (palavra.length === 1) {
    return palavra;
  }
  console.log(palavra);
  return inverter(palavra.slice(1)) + palavra[0];
}

console.log(inverter('banana'));

console.log('FIM EX4--------------------------------------------------------------------------------------NÃO ENTENDI NADA!!!!!!!!!!!!!');

// EX5 - Escreva uma função que some todos os números de 1 até n.
function somaN(n) {
  if (n === 0) {
    return 0;
  } else {
    return n + somaN(n - 1);
  }
}
console.log(somaN(5));

console.log('FIM EX5--------------------------------------------------------------------------------------');

// EX6- Faça uma função que conte quantos elementos existem em um array.
const contar6 = [10, 20, 30, 40];

function contarElementosArray(lista) {
  if (lista.length === 0) {
    return 0;
  }
  return 1 + contarElementosArray(lista.slice(1));
}
console.log(contarElementosArray(contar6));

console.log('FIM EX6--------------------------------------------------------------------------------------');

// EX7 -Escreva uma função recursiva que encontre o maior número de um array.

// const numeros7 = [4, 10, 2, 30, 7];

// function maiorNumeroArray(lista) {}

// // console.log(maiorNumeroArray(numeros7));

console.log('FIM EX7--------------------------------------------------------------------------------------NÃO ENTENDI NADA!!!!!!!!!!!!!');

// Vou te dar uma dica para o resto da sua carreira.  // Sempre que você vir um exercício de recursão, faça estas quatro perguntas:
// Qual é o caso base? (Quando a função para de chamar a si mesma?)
// Qual é a chamada recursiva? (Qual é o "problema menor" que estou resolvendo?)
// O que fica pausado enquanto a chamada recursiva acontece?
// Quando a chamada retorna, o que faço com o valor recebido?

// EX TESTE 1
function teste(n) {
  console.log('Entrou:', n);

  if (n === 0) {
    return;
  }

  teste(n - 1);

  console.log('Saiu:', n);
}

teste(3);

console.log('FIM TESTE 1--------------------------------------------------------------------------------------');
// EX TESTE 2
let listaTeste2 = [5, 7, 30];
function compararArray(lista) {
  if (lista.length === 1) {
    return lista[0];
  }
  const maiorArray = compararArray(lista.slice(1));
  if (maiorArray > lista[0]) {
    return maiorArray;
  } else {
    return lista[0];
  }
}
console.log(compararArray(listaTeste2));

console.log('FIM TESTE 2--------------------------------------------------------------------------------------');

// TESTE 3 (bem parecido com o do maior número)
// Crie uma função recursiva que encontre o menor número de um array.

const numeros3 = [8, 3, 12, 1, 6];

function menorArray(lista) {
  if (lista.length === 1) {
    return lista[0];
  }
  const menor = menorArray(lista.slice(1));
  if (menor < lista[0]) {
    return menor;
  } else {
    return lista[0];
  }
}

console.log(menorArray(numeros3));

console.log('FIM TESTE 3--------------------------------------------------------------------------------------');

// TESTE4 — Somar todos os números de um array
const numeros4 = [5, 10, 20, 3];

function somarArray(lista) {
  if (lista.length === 0) {
    return 0;
  }
  const soma = somarArray(lista.slice(1));
  return soma + lista[0];
}
console.log(somarArray(numeros4));

console.log('FIM TESTE 4--------------------------------------------------------------------------------------');

// TESTE5 — Produto de um array (multiplicação)
const numeros5 = [2, 3, 4];

function multiplicarArray(lista) {
  if (lista.length === 0) {
    return 1;
  }
  const multiplicado = multiplicarArray(lista.slice(1));
  return multiplicado * lista[0];
}

console.log(multiplicarArray(numeros5));

console.log('FIM TESTE 5--------------------------------------------------------------------------------------');

// TESTE6 — Contar números pares
const numeros6 = [2, 5, 8, 1, 10];

function contarPares(lista) {
  if (lista.length === 0) {
    return 0;
  }
  let par = contarPares(lista.slice(1));
  if (lista[0] % 2 === 0) {
    par = par + 1;
    // console.log(lista[0]);
    return par;
  }
  return par;
}
console.log(contarPares(numeros6));

console.log('FIM TESTE 6--------------------------------------------------------------------------------------');

// TESTE7 — Verificar se existe um número par no array
const numeros7 = [1, 3, 5, 8];

console.log('TESTE7 SEM CONST--------------------------------------------------------------------------------------');
function existeParArray(lista) {
  if (lista.length === 0) {
    return false;
  }
  if (lista[0] % 2 === 0) {
    console.log(lista[0]);
    return true;
  } else {
    if (existeParArray(lista.slice(1)) === true) {
      return true;
    }
  }
  return false;
}

console.log(existeParArray(numeros7));

console.log(
  'TESTE7 COM CONST------------------------------------------------------------------------SE ACHAR TRUE ==>MANTÉM!! MESMO SE O PRÓXIMO FOR FALSE'
);
function existeParArray2(lista) {
  if (lista.length === 0) {
    return false;
  }
  let par = existeParArray2(lista.slice(1));
  if (lista[0] % 2 === 0) {
    par = true;
    return par;
  }
  if (par === true) {
    return par;
  }
  return false;
}

console.log(existeParArray2(numeros7));
