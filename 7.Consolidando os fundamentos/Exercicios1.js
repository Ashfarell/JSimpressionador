console.log('ARQUIVO NOVO 123456');
// Requisito 1: : Crie uma função que receba dois números inteiros e retorne a soma deles.
// Função: somar
// Exemplo Entrada: // somar(5, 3);
// Exemplo Saída: //

console.log('EX1 C/ PARÂMETRO------------------');
function somar(a, b) {
  return a + b;
}
console.log(somar(5, 10));

console.log('EX1 C/ PARÂMETRO DENTRO da função------------------');
function somar2(x, y) {
  let a = 10;
  let b = 20;
  return 5 + 10;
}

console.log(somar2());

console.log('EX1 S/ PARÂMETRO ------------------');
function somar3() {
  return 5 + 10;
}
console.log(somar3());

console.log('FIM EX1 ------------------------------------------------------------------------------------------------');

// // Requisito 2: Crie uma função que receba um array de nomes e retorne esse array ordenado em ordem alfabética. Função: ordenarNomes
// Exemplo Entrada: // ordenarNomes(['Ana', 'Elias', 'Carlos', 'Beatriz']);
// Exemplo Saída: // ['Ana', 'Beatriz', 'Carlos', ‘Elias’]

let nomes2 = ['Ana', 'Elias', 'Carlos', 'Beatriz'];

function orderNomes(lista) {
  console.log(lista.sort());
}
orderNomes(nomes2);

console.log('FIM EX2 ------------------------------------------------------------------------------------------------');

// Requisito 3: Crie uma função que receba dois valores e retorne verdadeiro se ambos forem considerados "truthy".
// Função: compararValores
// Exemplo Entrada: // compararValores(5, "texto");
// // compararValores(0, "texto");
// Exemplo Saída: // true
// // false

//ERRADO ==>COMPARA VALOR
function compararValores(a, b) {
  if (a == b) {
    return true; //== compara VALOR
  }
  return false;
}
console.log(compararValores(1, '1'));

//ERRADO ==>COMPARA VALOR + TIPO
function compararValores1(a, b) {
  if (a === b) {
    return true; //== compara VALOR
  }
  return false;
}
console.log(compararValores1(1, '1'));

//CORRETO==>COMPARA TRUPHY ==>n/ compara os valores, verifica se cada um é TRUPHY
console.log('EX3 SOLUÇÃO CORRETA ------------------');
function compararValores2(a, b) {
  if (a && b) {
    return true; //compara se valores são truphy
  }
  return false;
}
console.log(compararValores2(0, 0));

console.log('FIM EX3 ------------------------------------------------------------------------------------------------');

// Requisito 4: Crie uma função que receba um valor investido e uma taxa de juros e retorne o rendimento obtido com esse investimento.
// Função: calcularRendimento
// Exemplo Entrada: //calcularRendimento(1000, 5);
// Exemplo Saída: // 50

function calcularRendimento(valorInvestido, TxJuros) {
  const rendimento = (valorInvestido * TxJuros) / 100;
  return `Aplicando ${valorInvestido} reais com um rendimento de ${TxJuros} %, você receberá ${rendimento} reais`;
}
console.log(calcularRendimento(500, 10));

console.log('FIM EX4 ------------------------------------------------------------------------------------------------');

// Requisito 5: Crie uma função que receba uma frase como parâmetro e retorne um array contendo as palavras que compõem essa frase, separadas por espaços.
// Função: dividirFrase
// Exemplo Entrada: // dividirFrase("Esta é uma frase de exemplo.");
// Exemplo Saída: // ["Esta", "é", "uma", "frase", "de", "exemplo."

console.log('EX5 A)  CORRETO -------------------------------------------------------------------------');
function dividirFrase(frase) {
  let texto = frase.split(' ');
  return texto;
}

console.log(dividirFrase2('Eu sou o Jean'));

console.log('EX5 B) EXPRESSÂO REGULAR -------------------------------------------------------------------------');
function dividirFrase2(frase) {
  let texto = frase.split(/\s+/); //EXPRESSÃO REGULAR \s → qualquer espaço, tab, quebra de linha etc.
  return texto;
}

console.log(dividirFrase2('Eu    sou    o      Jean'));

console.log('FIM EX5 ------------------------------------------------------------------------------------------------');

// Requisito 6: Crie uma função que receba o número de vitórias e empates de um time e retorne a quantidade total de pontos, sabendo que cada vitória vale 3 pontos e cada empate vale 1 ponto.
// Função: calcularPontos
// Exemplo Entrada: // calcularPontos(5, 2);
// Exemplo Saída: // 17

function calcularPontos(vitorias, empates) {
  const pontostVitoria = 3;
  const pontosEmpate = 1;
  const pontuacao = vitorias * pontostVitoria + empates * pontosEmpate;
  return `A pontuação final é de ${pontuacao} pontos`;
}

console.log(calcularPontos(3, 2));

console.log('FIM EX6 ------------------------------------------------------------------------------------------------');

// Exercício 7: Crie uma função que receba uma frase e retorne a quantidade de vogais contidas nela.
// Função: contarVogais.
// Exemplo Entrada: // contarVogais("Olá, tudo bem?");
// Exemplo Saída:
// // 5
let frase = 'Eu sou o Jean ';

//SOLUÇÃO ERRADA
console.log('EX7 - Testando contar apenas caracteres SEM ELSE');
function contarVogais(frase) {
  let transformada = frase.split('');
  let soma = 0;
  for (let i = 0; i < transformada.length; i++) {
    if (transformada[i] !== ' ') {
      soma += 1;
    }
    soma += 0;
  }
  return soma;
}
console.log(contarVogais(frase));

//SOLUÇÃO ERRADA
console.log('EX7 - Testando contar apenas caracteres COM ELSE');
function contarVogais2(frase) {
  let transformada = frase.split('');
  let soma = 0;
  for (let i = 0; i < transformada.length; i++) {
    if (transformada[i] == ' ') {
      soma += 0;
    } else {
      soma += 1;
    }
  }
  return soma;
}
console.log(contarVogais2(frase));

//SOLUÇÃO CORRETA
console.log('EX7 A)SOLUÇÃO CORRETA - verifica se itens ARRAY estão dentro de STRING');

function contarVogais3(frase) {
  let vogais = 'aeiou'; //vogais = STRING
  let soma = 0;
  let transformada = frase.split('');
  for (let i = 0; i < transformada.length; i++) {
    if (vogais.includes(transformada[i].toLowerCase())) {
      soma = soma + 1;
    } else {
      soma = soma + 0;
    }
  }
  return soma;
}
console.log(contarVogais3(frase));

console.log('EX7 B)SOLUÇÃO CORRETA - verifica se itens ARRAY estão dentro de ARRAY');

function contarVogais4(frase) {
  let vogais = ['a', 'e', 'i', 'o', 'u']; //vogais = ARRAY
  let soma = 0;
  let transformada = frase.split('');
  for (let i = 0; i < transformada.length; i++) {
    if (vogais.includes(transformada[i].toLowerCase())) {
      soma = soma + 1;
    } else {
      soma = soma + 0;
    }
  }
  return soma;
}
console.log(contarVogais4(frase));

console.log('FIM EX7 ------------------------------------------------------------------------------------------------');

// Requisito 8: Crie uma função que receba um array de gastos e retorne a quantidade de vezes que o maior gasto aparece nesse array.
// // Função: maiorGasto
// Exemplo Entrada: // maiorGasto([10, 5, 20, 15]);
// Exemplo Saída: // 20

const gastos8 = [10, 5, 20, 15, 20, 8, 15, 18, 20];

console.log('EX8 A) Pegar maior valor-------------------------------------');
function maiorGasto(lista) {
  let maior = lista[0];
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] > maior) {
      maior = lista[i];
    }
  }
  return maior;
}
console.log(maiorGasto(gastos8));

console.log('EX8 B) Pegar maior valor + contar Nº de vezez que aparece-------------------------------------');

function maiorGasto2(lista) {
  let maior = lista[0];
  let contador = 0;
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] > maior) {
      maior = lista[i];
    }
  }
  for (let j = 0; j < lista.length; j++) {
    if (maior === lista[j]) {
      // console.log(lista[j]);
      // console.log(maior);
      contador++;
    } else {
      maior += 0;
    }
  }
  return `O maior número é ${maior} e ele aparece ${contador} vezes.`;
}

console.log(maiorGasto2(gastos8));

console.log('FIM EX8 ------------------------------------------------------------------------------------------------');

// Requisito 9: Crie uma função que receba um array de números e retorne a média desses números.
// Função: calcularMedia
// Exemplo Entrada: // calcularMedia([10, 20, 30, 40]);
// Exemplo Saída: // 25

const numeros9 = [10, 20, 30, 40];

console.log('EX9 A) SEM VAR media-----------------------');
function calcularMedia(lista) {
  let soma = 0;
  // let media = soma / lista.length; //N/ usada
  for (let i = 0; i < lista.length; i++) {
    soma = soma + lista[i];
  }
  return `A soma é de ${soma} e a média é de ${soma / lista.length}.`;
}

console.log(calcularMedia(numeros9));

console.log('EX9 A) COM VAR media-----------------------');
function calcularMedia2(lista) {
  let soma = 0;

  for (let i = 0; i < lista.length; i++) {
    soma = soma + lista[i];
  }
  let media = soma / lista.length; //precisa vir DEPOIS de soma existir
  return `A soma é de ${soma} e a média é de ${media}`;
}

console.log(calcularMedia2(numeros9));

console.log('FIM EX9 ------------------------------------------------------------------------------------------------');

// Exercício 10: Crie uma função que receba uma palavra e retorne um booleano indicando se a palavra é um palíndromo.
// Função: ehPalindromo
// Exemplo Entrada: // ehPalindromo("arara");
// // ehPalindromo("cachorro");
// Exemplo Saída: // true
// // false

//TESTE
let palavra10 = 'cachorro';

let testR = palavra10.split('').reverse().join(''); //split: string ==>ARRAY  // reverse: ARRAY trás p/ frente // join> ARRAY ==>STRING
console.log(testR);
console.log(typeof testR);

let array = ['e', 'u', ' ', 's', 'o', 'u', ' ', 'o', ' ', 'J', 'e', 'a', 'n', '.'];
console.log(array);

let string = array.join('');
console.log(string);

let palavra10B = 'ArarA';
console.log(palavra10B);
let testRB = palavra10B.split('').reverse().join('').toLocaleLowerCase();
console.log(testRB);

//CORRETO
function ehPalindromo(palavra) {
  palavra = palavra.toLocaleLowerCase();
  let inverso = palavra.split('').reverse().join('').toLocaleLowerCase();
  if (palavra === inverso) {
    return true;
  } else {
    return false;
  }
}

console.log(ehPalindromo('Arara'));

console.log('FIM EX10 ------------------------------------------------------------------------------------------------');

// Requisito 11: Crie uma função que receba um número inteiro e retorne um booleano indicando se o número é primo.
// Um número primo é um número que:   ✅ é maior que 1   ✅ só tem dois divisores positivos:
// 1 E ele mesmo

// // Função: ehPrimo
// Exemplo Entrada: // ehPrimo(7)
// ehPrimo(4);
// Exemplo Saída: // true
// false

function ehPrimo(n) {
  // let test = true;
  for (let i = n; i > 1; i--) {
    console.log('n: ' + n);
    console.log('i: ' + i);
    if (n !== i) {
      if (n % i === 0) {
        return false;
        // test = false;
        // return test; //RETORNO ANCETECIPADO!!! ASSIM n/ PRECISA TESTAR TODOS OS NÚMEORS
      }
    }
  }
  return true;
}

console.log(ehPrimo(15));

console.log('FIM EX11 ------------------------------------------------------------------------------------------------');

// Requisito 12: Crie uma função que receba uma frase e retorne a quantidade de palavras que ela contém.
// Função: contarPalavras
// Exemplo Entrada: // contarPalavras("Olá, tudo bem?");
// Exemplo Saída: // 3
let frase12 = 'Olá, tudo bem meu amigo,    Jean?';

function contarPalavras(frase) {
  let transformado = frase.split(/\s+/); //EXPRESSÃO REGULAR
  // console.log(transformado);
  // console.log(transformado.length);
  return transformado.length;
}

console.log(contarPalavras(frase12));

console.log('FIM EX12 ------------------------------------------------------------------------------------------------');

// Requisito 13: Crie uma função que receba duas distâncias (distancia1 e distancia2) e retorne qual pessoa está mais próxima, indicando "Pessoa 1" se a primeira distância for menor,
// "Pessoa 2" se a segunda distância for menor, ou "Ambos estão a mesma distância" se as distâncias forem iguais.
// Função: calcularDistancia
// Exemplo Entrada: // calcularDistancia(10, 15);
// // calcularDistancia(20, 15);
// // calcularDistancia(30, 30);
// Exemplo Saída: // “Pessoa 1”
// // "Pessoa 2"
// "Ambos estão a mesma distância"

function calcularDistancia(a, b) {
  if (a < b) {
    return 'Pessoa 1';
  } else if (a > b) {
    return 'Pessoa 2';
  } else {
    return 'Ambos estão a mesma distância';
  }
}

console.log(calcularDistancia(5, 8));

console.log('FIM EX13 ------------------------------------------------------------------------------------------------');

// Requisito 14: Crie uma função que receba um array de despesas e retorne um novo array contendo
// "Alto Gasto" para despesas maiores que 100 e
// "Gasto Controlado" para despesas iguais ou menores que 100.
// Função: controleDespesas
// Exemplo Entrada: // const despesas = [150, 80, 200, 60, 120];
// const resultado = controleDespesas(despesas);
// Exemplo Saída: // ["Alto Gasto", "Gasto Controlado", "Alto Gasto", "Gasto Controlado", "Alto Gasto"]

const despesas14 = [150, 80, 200, 60, 120];

console.log('EX14 A) solução original----------------------------');
function controleDespesas(lista) {
  const altoGasto = 'Alto gasto';
  const gastoControlado = 'Gasto controlado';
  let saida = [];
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] > 100) {
      saida.push(altoGasto);
    } else {
      saida.push(gastoControlado);
    }
  }
  return saida;
}

console.log(controleDespesas(despesas14));

console.log(
  'EX14 B) solução com !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!MAP + FUNÇÃO!!!!!!!!!!!!!!!!!!!!!!!!----------------------------'
);

// const transformadoALTO = despesas14.filter((p) => p > 100).map((p) => p + ': ' + 'Alto gasto');
// console.log(transformadoALTO);

// const transformadoControlado = despesas14.filter((p) => p <= 100).map((p) => p + ': ' + 'Gasto controlado');
// console.log(transformadoControlado);

const transformandoTudo = despesas14.map((p) => {
  if (p > 100) {
    return p + ':' + ' Alto gasto';
  } else {
    return p + ':' + ' Gasto moderado';
  }
});
console.log(transformandoTudo);

console.log('FIM EX14 ------------------------------------------------------------------------------------------------');

// Exercício 15: Crie uma função que receba um array de nomes de investimentos que você quer fazer e um segundo parâmetro com seu nome.
// Função: gerarListaInvestimentos
// Exemplo Entrada: //const investimentos = [5000, 2000, 15000];
// const nome = "Maria";
// const resultado = gerarListaInvestimentos(investimentos1, nome1);

const investimentos15 = [5000, 2000, 15000];
const nome15 = 'Maria';

function gerarListaInvestimentos(lista, nome) {
  let saida = [];
  for (let i = 0; i < lista.length; i++) {
    saida.push('investimento: ' + lista[i] + ': ' + nome);
  }
  return saida;
}

console.log(gerarListaInvestimentos(investimentos15, nome15));

console.log('FIM EX15 ------------------------------------------------------------------------------------------------');

// Exercício 16: Crie uma função que receba uma frase e codifique as vogais de acordo com a seguinte substituição: a → 1, e → 2, i → 3, o → 4, u → 5. Crie uma segunda função que decodifique a frase, revertendo as substituições.
// Funções: codificar e decodificar
// Exemplo Entrada: // const frase = "a casa e o sol";
// const resultado = codificar(frase);
// const frase2 = "1 c1s2 2 4 s4l";
// const resultado2 = decodificar(frase2);
// Exemplo Saída: // "1 c1s2 2 4 s4l"
// // "a casa e o sol"

const frase16 = 'a casa e o sol';
console.log(frase16.split(''));
console.log(frase16.split('')[0]);

console.log('EX16 A) solução original c/ IF+ IF/ELSE----------------------------');
function codificar(frase) {
  let codificada = frase.split(''); //transforma STRING==>ARRAY
  for (let i = 0; i < codificada.length; i++) {
    if (codificada[i] == 'a') {
      codificada[i] = 1;
    } else if (codificada[i] == 'e') {
      codificada[i] = 2;
    } else if (codificada[i] == 'i') {
      codificada[i] = 3;
    } else if (codificada[i] == 'o') {
      codificada[i] = 4;
    } else if (codificada[i] == 'u') {
      codificada[i] = 5;
    }
  }
  return codificada.join(''); //transforma ARRAY ==>STRING
}
console.log(codificar(frase16));

console.log(
  'EX16 B) solução com                                                  OBJETO!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! ----------------------------'
);

const codigo = {
  a: '1',
  e: '2',
  i: '3',
  o: '4',
  u: '5',
};

function codificar2(frase, codigo) {
  let codificada = frase.split('');
  for (let i = 0; i < codificada.length; i++) {
    if (codigo[codificada[i]] !== undefined) {
      codificada[i] = codigo[codificada[i]];
    }
  }
  return codificada.join('');
}
console.log(codificar2(frase16, codigo));

console.log(
  'EX16 C) solução com                                                      OBJETO + hasOwnProperty!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! ----------------------------'
);

function codificar3(frase, codigo) {
  let codificada = frase.split('');
  for (let i = 0; i < codificada.length; i++) {
    if (codigo.hasOwnProperty(codificada[i])) {
      codificada[i] = codigo[codificada[i]];
    }
  }
  return codificada.join('');
}
console.log(codificar3(frase16, codigo));

console.log(
  'EX16 D) solução com                                                      REGEX!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! ----------------------------'
);

function codificarRegex(frase) {
  let resultado = frase.replace(/a/g, '1').replace(/e/g, '2').replace(/i/g, '3').replace(/o/g, '4').replace(/u/g, '5');

  return resultado;
}

console.log(codificarRegex(frase16));

console.log('FIM EX16 ------------------------------------------------------------------------------------------------');
