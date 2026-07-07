// Estrutura de Repetição - FOR
// // Exercício 1: Cálculo do Faturamento Semana
// Você é o gerente de uma lanchonete e deseja calcular o valor total das vendas de hambúrgueres em uma semana. Cada hambúrguer custa R$10, e você registra o número de hambúrgueres vendidos a cada dia da
// semana. Crie um programa que calcule o valor total das vendas em uma semana

const vendaSemana = [
  { dia: 'segunda', venda: 5 },
  { dia: 'terça', venda: 8 },
  { dia: 'quarta', venda: 8 },
  { dia: 'quinta', venda: 18 },
  { dia: 'sexta', venda: 15 },
  { dia: 'sábado', venda: 18 },
  { dia: 'domingo', venda: 20 },
];

function fatSemana(lista) {
  let preco = 10;
  let vendasDia = 0;
  let vendasTT = 0;
  for (let i = 0; i < lista.length; i++) {
    vendasDia = lista[i].venda * preco;
    vendasTT = vendasTT + vendasDia;
  }
  return vendasTT;
}
console.log(fatSemana(vendaSemana));
console.log('Fim EX1 --------------------------------------------------------------------------------------------');

// Exercício 2: Listagem do Cardápio Digital
// Você deseja criar um cardápio digital para sua lanchonete. Crie um programa que liste os itens do cardápio juntamente com seus preços. Utilize um loop for para percorrer o cardápio e exibi-lo
const cardapio = [
  { prato: 'frango', preco: 20 },
  { prato: 'peixe', preco: 25 },
  { prato: 'carne', preco: 22 },
  { prato: 'macarrão', preco: 21 },
  { prato: 'sopa', preco: 20 },
];

function exibirCardapio(lista) {
  console.log('Abaixo nossos pratos disponíveis:');
  for (let i = 0; i < lista.length; i++) {
    console.log(`${lista[i].prato}: ${lista[i].preco}`);
  }
}
console.log('EX A) --- FUNÇÃO');
exibirCardapio(cardapio);

console.log('EX B)                                                                                              --- MAP+FILTER');
const filtrar2 = cardapio.filter((p) => p.prato).map((p) => 'Abaixo nossos pratos disponíveis: ' + p.prato + ': ' + p.preco);
console.log(filtrar2);

console.log('Fim EX2--------------------------------------------------------------------------------------------');

// // Estrutura de Repetição - WHILE
// Exercício 3: Contagem de Dinheiro no Caixa
// Você é o caixa de uma lanchonete e precisa contar o dinheiro recebido até que a última venda do dia seja feita. Crie um programa que simule a contagem do dinheiro recebido a cada venda até o fechamento da
// lanchonete

const vendasDia3 = [20, 50, 35, 48, 50];

function contagemVenda(lista) {
  let vendasTT = 0;
  let i = 0;
  while (i < lista.length) {
    vendasTT = vendasTT + lista[i];
    i++;
  }
  return vendasTT;
}
console.log('EX A) --- WHILE');
console.log(contagemVenda(vendasDia3));

console.log('EX B)                                                                                                    --- REDUCE+FILTER');
const filtrar3 = vendasDia3.reduce((acc, n) => acc + n, 0);
console.log(filtrar3);
console.log('Fim EX3--------------------------------------------------------------------------------------------');

// // Exercício 4: Entrega de Pedidos Pendentes
// Você é o entregador de uma lanchonete e precisa entregar pedidos até que não haja mais pedidos pendentes.
// Crie um programa que simule a entrega de pedidos até que não haja mais pedidos na lista.
function pedidosPendentes(qtd) {
  let i = 0;
  while (qtd > 0) {
    i++;
    qtd--;
    console.log('Pedido: ' + i + ' entregue ', 'agora faltam ' + qtd + ' pedidos');
  }
  return i;
}
console.log(pedidosPendentes(5));
console.log('Fim EX4--------------------------------------------------------------------------------------------');
// Estrutura de Repetição - DO...WHILE

// Exercício 5: Adivinhe o Número Secreto para Desconto
// Você deseja criar um programa que permite aos clientes da sua lanchonete adivinharem um número secreto para ganhar um desconto. Eles podem tentar quantas vezes quiserem, mas só ganharão o desconto quando
// adivinharem o número secreto. Crie um programa que use a estrutura do...while para permitir que os clientes tentem adivinhar o número secreto.

const tentativas = [10, 25, 35, 125];

function numeroSecreto(lista) {
  let numero = 125;
  let i = 0;
  do {
    console.log('Seu número é ' + lista[i]);
    i++;
  } while (numero !== lista[i - 1]);
  {
  }
  console.log(`Parabéns, você acertou o número ${numero}`);
}

numeroSecreto(tentativas);
console.log('Fim EX5--------------------------------------------------------------------------------------------');

// Exercício 6: Gerenciamento de Estoque de Itens em Falta
// Você é o gerente de uma lanchonete e está verificando o estoque de itens em falta.
// Crie um programa que permita que você insira os itens que estão em falta e os adicione ao estoque até que você decida encerrar o processo.

const estoque6 = ['Pão', 'Azeite', 'Ovos', 'Leite'];

function itensEmFalta(lista) {
  let comprar = [];
  let i = 0;

  do {
    comprar.push(lista[i]);
    i++;
  } while (i < lista.length);
  return comprar;
}
console.log('EX A) --- DO-WHILE');
console.log(itensEmFalta(estoque6));

//SOLUÇÃO B

const estoque6B = [
  { item: 'Pão', estoque: 1 },
  { item: 'Azeite', estoque: 0 },
  { item: 'ovos', estoque: 3 },
  { item: 'Leite', estoque: 2 },
];

function itensEmFaltaB(lista) {
  let comprar = [];
  let i = 0;

  do {
    if (lista[i].estoque === 0) {
      comprar.push(lista[i]);
    }
    i++;
  } while (i < lista.length);
  return comprar;
}

console.log('EX B) --- DO-WHILE');
console.log(itensEmFaltaB(estoque6B));

console.log('Fim EX6--------------------------------------------------------------------------------------------');
