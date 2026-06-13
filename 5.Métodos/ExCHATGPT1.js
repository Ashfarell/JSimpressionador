console.log(
  'EX FUNÇÕES + CONDICIONAL--------------------------------------------------------------------------------------------------------------'
);
//Exercício 1 — Decrèscimo Percentual
function calcularDescont(valor, desconto) {
  return valor - (valor * desconto) / 100;
}

console.log(calcularDescont(1000, 10));

//Exercício 2 — Acréscimo Percentual
function calcularAumento(valor, aumento) {
  return valor + (valor * aumento) / 100;
}

console.log(calcularAumento(1000, 10));

//Exercício 3 — Comissão de Vendas
function calcularComissao(valorVenda, percentualComissao) {
  return (valorVenda * percentualComissao) / 100;
}

console.log(calcularComissao(10000, 5));

//Exercício 4 — Valor com Imposto
function calcularValorComImposto(valorProduto, percentualImposto) {
  return valorProduto + (valorProduto * percentualImposto) / 100;
}

console.log(calcularValorComImposto(1000, 10));

//Exercício 5 — Desconto + Imposto
function calcularPrecoFinal(valorProduto, percentualDesconto, percentualImposto) {
  const precoDesconto = valorProduto - (valorProduto * percentualDesconto) / 100; //Criando CONST dentro da função
  return precoDesconto + (precoDesconto * percentualImposto) / 100;
}

console.log(calcularPrecoFinal(1000, 10, 5));

//Exercício 6 — Bônus de Funcionário
function calcularSalarioFinal(salarioBase, percentualBonus) {
  if (percentualBonus > 20) {
    return salarioBase + (salarioBase * 20) / 100; //Usando IF + RETURN
  } else {
    return salarioBase + salarioBase * (percentualBonus / 100);
  }
}

console.log(calcularSalarioFinal(1000, 10));

// Exercício 7 — Frete Grátis
function calcularValorPedido(valorProduto, valorFrete) {
  if (valorProduto >= 200) {
    return valorProduto;
  } else {
    return valorProduto + valorFrete;
  }
}

console.log(calcularValorPedido(180, 50));

// Exercício 8 — Desconto por Faixa

function calcularPrecoPromociona(valorProduto) {
  if (valorProduto >= 1000) {
    return valorProduto - valorProduto * 0.15;
  } else {
    return valorProduto - valorProduto * 0.05;
  }
}

console.log(calcularPrecoPromociona(900));

// Exercício 9 — Desconto por Faixas
function calcularDescontoFaixa(valorProduto) {
  if (valorProduto < 500) {
    return valorProduto - valorProduto * 0.05;
  } else if (valorProduto >= 500 && valorProduto <= 999) {
    return valorProduto - valorProduto * 0.1; //IF + ELSE IF + ELSE
  } else return valorProduto - valorProduto * 0.15;
}

console.log(calcularDescontoFaixa(1000));

// Exercício 10 — Bônus por Tempo de Empresa

function calcularBonusFuncionario(salario, anosEmpresa) {
  if (anosEmpresa < 2) {
    return salario + salario * 0.05;
  } else if (anosEmpresa >= 2 && anosEmpresa <= 5) {
    return salario + salario * 0.1;
  } else return salario + salario * 0.15;
}

console.log(calcularBonusFuncionario(1000, 5.1));

// Exercício 11 — Aprovação de Empréstimo
function avaliarEmprestimo(salario, valorParcela) {
  if (valorParcela <= salario * 0.3) {
    return 'Aprovado';
  } else return 'Recusado';
}

console.log(avaliarEmprestimo(1000, 330));

// Exercício 12 — Elegível para Promoção
function avaliarPromocao(anosEmpresa, avaliacao) {
  if (anosEmpresa >= 3 && avaliacao >= 8) {
    return 'Promovido';
  } else {
    return 'Não promovido';
  }
}
console.log(avaliarPromocao(2, 8));

// Exercício 13 — Entrada VIP
function permitirEntrada(idade, possuirConvite) {
  if (idade >= 18 || possuirConvite === true) {
    return 'Entrada permitida';
  } else {
    return 'Entrada negada';
  }
}

console.log(permitirEntrada(17, true));

// Exercício 14 — Desconto Especial
function aplicarDescontoEspecial(valorCompra, clienteVip) {
  if (valorCompra >= 1000 || clienteVip) {
    return '20% desconto';
  } else {
    return '5% desconto';
  }
}

console.log(aplicarDescontoEspecial(1500, false));

// Exercício 15 — Acesso ao Sistema
function validarAcesso(usuarioAtivo, possuiPermissao, administrador) {
  if (usuarioAtivo === true && (possuiPermissao || administrador)) {
    return 'Acesso permitido';
  } else {
    return 'Acesso negado';
  }
}
console.log(validarAcesso(false, true, false));

console.log(
  'EX FUNÇÕES + ARRAY-------------------------------------------------------------------------------------------------------------'
);

// Exercício 17 — Adicionar Produto
const produtos = ['Notebook', 'Smartphone'];
function adicionarProduto(lista) {
  return lista.push('Tablet');
}
console.log(adicionarProduto(produtos)); // Adiciona PRODUTO  + MOSTRA qtd de produtos no ARRAY  ==>PRINT 3
console.log(produtos);

// Exercício 18 — Contar Produtos
let produtos2 = ['Notebook', 'Smartphone', 'Tablet'];
function contarProdutos(lista) {
  return lista.length;
}
console.log(contarProdutos(produtos2));

// Exercício 19 — Adicionar Produto por PARÂMETRO
let produtos3 = ['Notebook', 'Smartphone'];
function adicionarProdutoPorParametro(lista, produto) {
  return lista.push(produto); //Função para adicionar um produto por parâmetro, usando o método PUSH para adicionar o produto ao final do array. O método PUSH retorna a nova quantidade de elementos no array, mas o array em si é modificado diretamente.
}

console.log(adicionarProdutoPorParametro(produtos3, produtos[0])); //Adiciona o produto 'Tablet' ao array produtos3, usando o índice 2 do array produtos. O resultado da função será a nova quantidade de elementos no array produtos3, que é 3.
console.log(produtos3);

// Exercício 20 — Obter Produto por Índice
const materiais = ['Cimento', 'Areia', 'Pedra', 'Tijolo'];
function obterProduto(lista, indice) {
  return lista[indice];
}

console.log(obterProduto(materiais, 1));

// Exercício 21 — Mostrar Produtos
function mostrarProdutos(lista) {
  for (let i = 0; i < lista.length; i++) {
    console.log(lista[i]);
  }
  // return lista;
}

// console.log(mostrarProdutos(materiais)); //Se usar RETURN
mostrarProdutos(materiais); //Se NÃO usar RETURN

//Exercício 16 — Filtrar números positivos  Crie uma função:  filtrarPositivos------------------TERMINAR!!!!!!!!!!!!!!!
// Parâmetro:
let numeros = [-2, 5, 0, 8, -1, -3, 4];

function filtrarPositivos(numeros) {
  let resultado = []; //VAR p/ armazenar os números positivos filtrados. Inicialmente, é um array vazio.

  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > 0) {
      resultado.push(numeros[i]); //Percorre ARAY (FOR)  + Verifica condicional (IF)
    }
  }
  return resultado;
}

console.log('EX16 - Vamos filtrar os números positivos  ' + filtrarPositivos(numeros));
console.log(
  'EX16 FUNÇÃO + FOR + IF + ARRAY-------------------------------------------------------------------------------------------------------------'
);

// Exercício 22 — Somar todos os números
const numeros2 = [1, 2, 3, 4, 5]; //Função que soma todos os números de um array. A função recebe um array de números como parâmetro e retorna a soma total desses números. Ela utiliza um loop for para iterar sobre cada elemento do array, acumulando a soma em uma variável chamada soma, que é inicializada com o valor 0. Ao final do loop, a função retorna o valor da soma total.

function somarNumeros(lista) {
  let soma = 0; //VAR p/ armazenar SOMA!!!!!!!!              N/ armazena ARRAY!!!!!!
  for (let i = 0; i < lista.length; i++) {
    soma += lista[i];
  }
  return soma;
}

console.log('EX22 - Vamos somar todos os números  ' + somarNumeros(numeros2));

// Exercício 23 — Contar positivos
function contarPositivos(lista) {
  let contador = 0;
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] > 0) {
      contador++;
    }
  }
  return contador;
}
console.log('EX23 - Vamos contar apenas os positivos  ' + contarPositivos(numeros));

// console.log(somarNumeros(numeros2));

// Exercício 23 — Contar positivos
function contarPositivos(lista) {
  let soma = 0;
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] > 0) {
      soma++;
    }
  }
  return soma;
}
console.log('EX23 - Vamos contar apenas os positivos ' + contarPositivos(numeros));

console.log('EX com PADRÃO BUSCA DE MAX ---------------------------------------------------------------------------------------');
// Exercício 24 — Encontrar o Maior Número
const lista24 = [3, 45, 2, 9, 5, 10, 2, 0, 950];
function encontrarMaior(lista) {
  let maior = lista[0]; //Busca de máximo ==>PADRÃO            //se começar c/ 0 pode ter problema caso a lista possua Nº negativos
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] > maior) {
      maior = lista[i];
    }
  }
  return maior;
}
console.log('EX24 - Encontrar o Maior Número - PADRÃO BUSCA DE MAX :' + encontrarMaior(lista24));

// Exercício 25 — Encontrar o Menor Número

const lista25 = [25, 32, -15, 0, 8, 105, 38, -1002, -950];
function encontrarMenor(lista) {
  let menor = lista[0];

  for (let i = 0; i < lista.length; i++) {
    if (lista[i] < menor) {
      menor = lista[i];
    }
  }
  return menor;
}
console.log('EX25 - Encontrar o menor Número  da lista : ' + encontrarMenor(lista25));

console.log(
  'Próximo exercício ==> FILTER  ---------------------------------------------------------------------------------------------------'
);
// Exercício 26 — Contar Números Pares
const numeros26 = [1, 2, 3, 4, 5, 6, 8, 10];
function contarPares(lista) {
  let contador = 0;

  for (let i = 0; i < lista.length; i++) {
    if (lista[i] % 2 == 0) {
      contador++;
    }
  }
  return contador;
}
console.log('EX26 - Contar Números Pares : ' + contarPares(numeros26));

//EX HASHTAG
// Exercício 2: Crie uma função que receba uma lista de números e retorne o valor máximo e o valor mínimo dessa lista.
// Exemplo Entrada: // 10, 5, 20, 40, 1, 7
// Exemplo Saída: // Valor mínimo: 1
// Valor máximo: 40
const lista = [5, 15, -10, 95, -25, 105, 25, 30];
function maxMin2(lista) {
  let maior = lista[0];
  let menor = lista[0];

  for (let i = 0; i < lista.length; i++) {
    if (lista[i] > maior) {
      maior = lista[i]; //Uma função devolve 2 Números
    }
  }
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] < menor) {
      menor = lista[i];
    }
  }
  console.log(maior);
  console.log(menor);
}
maxMin2(lista);
console.log('EX2 c/ 2 FOR----------------------------------------');

function maxMin3(lista) {
  let maior = lista[0];
  let menor = lista[0];

  for (let i = 0; i < lista.length; i++) {
    if (lista[i] > maior) {
      maior = lista[i];
    }
    if (lista[i] < menor) {
      menor = lista[i];
    }
  }
  console.log(maior);
  console.log(menor);
}
maxMin3(lista);

console.log('EX2 c/ 1 FOR----------------------------------------');
