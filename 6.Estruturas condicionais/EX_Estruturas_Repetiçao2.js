// RECURSIVIDADE:
// Exercício 1: Contagem de Itens do Cardápio (Recursivo)
// Você é o gerente de uma lanchonete e deseja contar quantos itens diferentes estão no seu cardápio. Crie uma função recursiva em JavaScript que conte quantos itens diferentes existem no cardápio da lanchonete.
const cardapio1 = ['frango', 'peixe', 'massa'];

console.log('FIM EX1 A)SEM VAR--------------------------------------------------------------------------------------------');
function contarItensCardapio(lista) {
  if (lista.length === 0) {
    return 0;
  }
  return 1 + contarItensCardapio(lista.slice(1));
}
console.log(contarItensCardapio(cardapio1));

console.log('FIM EX1 B)COM VAR--------------------------------------------------------------------------------------------');
function contarItensCardapio2(lista) {
  if (lista.length === 0) {
    return 0;
  }
  const qtd = contarItensCardapio2(lista.slice(1));
  return qtd + 1;
}
console.log(contarItensCardapio2(cardapio1));

console.log('FIM EX1--------------------------------------------------------------------------------------------');
// Exercício 2: Cálculo do Valor Total das Vendas (Recursivo)
// Você é o caixa de uma lanchonete e deseja calcular o valor total das vendas de hambúrgueres ao longo de um mês. Cada hambúrguer custa R$10, e você registra o número de hambúrgueres vendidos a cada dia do
// mês. Crie uma função recursiva em JavaScript que calcule o valor total das vendas de hambúrgueres no mês.

const preco = 10;
const vendasDias = [5, 8, 12, 3, 15, 2];

console.log('EX2 A)COM VAR--------------------------------------------------------------------------------------------');
function totalVendas(lista) {
  if (lista.length === 0) {
    return 0;
  }
  const soma = totalVendas(lista.slice(1));
  return soma + lista[0] * preco;
}

console.log(totalVendas(vendasDias));

console.log('EX2 B)SEM VAR--------------------------------------------------------------------------------------------');
function totalVendas2(lista) {
  if (lista.length === 0) {
    return 0;
  }

  return lista[0] * preco + totalVendas2(lista.slice(1));
}

console.log(totalVendas2(vendasDias));

console.log('FIM EX2--------------------------------------------------------------------------------------------');

// FOR IN:
// Exercício 3: Listagem de Itens do Cardápio
// Você é o gerente de uma lanchonete e deseja listar os itens do cardápio para exibição. Os itens do cardápio
// são armazenados em um objeto onde as chaves são os nomes dos itens e os valores são os preços. Crie um
// programa que use um loop for...in para listar todos os itens do cardápio juntamente com seus preços.

console.log(
  'EX3 VERSÃO ERRADA COM ARRAY (n/ OBJETO)--------------------------------------------------------------------------------------------'
);
console.log('FIM EX3 A)FOR--------------------------------------------------------------------------------------------');
const cardapio3 = [
  { prato: 'frango', preco: 20 },
  { prato: 'peixe', preco: 30 },
  { prato: 'carne', preco: 28 },
];
function listarCardapio(lista) {
  for (let i = 0; i < lista.length; i++) {
    console.log(lista[i]);
  }
}
listarCardapio(cardapio3);

console.log('FIM EX3 B)Map--------------------------------------------------------------------------------------------');
const mostrar = cardapio3.map((p) => p.prato + ': ' + p.preco);
console.log(mostrar);

const filtrarEMostrar = cardapio3.filter((p) => p.preco < 30).map((p) => p.prato + ': ' + p.preco);
console.log(filtrarEMostrar);

console.log(
  'EX3 - VERSÃO CORRETA (Objeto) + FOR IN------------------------------------------------------------------------------------------'
);
const cardapio4 = {
  frango: 20,
  peixe: 30,
  carne: 28,
};
function listarCardapio2(lista) {
  for (nome in lista) {
    console.log(`${nome}: ${lista[nome]}`);
  }
}
listarCardapio2(cardapio4);

console.log('FIM EX3--------------------------------------------------------------------------------------------');

// Exercício 4: Calcular o Total da Conta
// Você é o caixa de uma lanchonete e deseja calcular o total da conta com base nos itens pedidos por um cliente.
// Crie um programa que use um loop for...in para percorrer o pedido do cliente (um objeto com itens e quantidades) e calcule o valor total da conta.

const pedidoCliente = {
  cliente: 'Pedro',
  itens: [
    { prato: 'frango', preco: 20, qtd: 2 },

    { prato: 'peixe', preco: 30, qtd: 3 },

    { prato: 'carne', preco: 28, qtd: 1 },
  ],
};
function totalCliente(lista) {
  let total = 0;
  for (nome in lista) {
    total = total + lista[nome].preco * lista[nome].qtd;
  }
  return total;
}
console.log(totalCliente(pedidoCliente.itens));

console.log('FIM EX4--------------------------------------------------------------------------------------------');

console.log('EXEMPLOS FOR IN e FOR OF----------------------------------');
// EXEMPLO FOR IN
function printIN(lista) {
  for (nome in lista) {
    console.log(nome);
  }
}
printIN(pedidoCliente.itens);

// EXEMPLO FOR OF
function printOF(lista) {
  for (const nome of lista) {
    console.log(nome);
  }
}
printOF(pedidoCliente.itens);

console.log('FIM EXEMPLOS FOR IN e FOR OF----------------------------------');

// FOR OF:
// Exercício 5: Listagem de Itens do Cardápio
// Reutilizando o cardápio da lanchonete armazenado em um array do exercício 1, crie um programa que use um loop for...of para listar todos os itens do cardápio.

// EXEMPLO FOR OF
function listarItensComOf(lista) {
  for (const nome of lista) console.log(nome);
}
listarItensComOf(cardapio1);

// EXEMPLO FOR In
function listaItensComIn(lista) {
  for (const nome in lista) {
    console.log(lista[nome]);
  }
}
listaItensComIn(cardapio1);

console.log('FIM EX5--------------------------------------------------------------------------------------------');

// Exercício 6: Calcular o Total da Conta
// Você é o caixa de uma lanchonete e deseja calcular o total da conta com base nos itens pedidos por um
// cliente. Os itens do pedido estão armazenados em um array de objetos, onde cada objeto tem o nome do
// item e a quantidade. Crie um programa que use um loop for...of para percorrer o pedido do cliente e calcule o valor total da conta

const pedidoCliente2 = {
  cliente: 'Pedro',
  itens: [
    { prato: 'frango', preco: 20, qtd: 2 },

    { prato: 'peixe', preco: 30, qtd: 3 },

    { prato: 'carne', preco: 28, qtd: 1 },
  ],
};

function totalContaCliente(lista) {
  let total = 0;
  for (const nome of lista) {
    total = total + nome.qtd * nome.preco;
  }
  return total;
}

console.log(totalContaCliente(pedidoCliente2.itens));
