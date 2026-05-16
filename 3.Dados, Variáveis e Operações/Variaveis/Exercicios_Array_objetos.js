// Exercício 1: Manipulação de Array- parte 1
// a. Crie um array chamado produtos contendo três nomes de produtos.
// b. Acesse e imprima o segundo produto.
// c. Modifique o terceiro produto para "Notebook" e imprima o array atualizado.
console.log('Exercício 1:');
let produtos = ['mouse', 'teclado', 'PC'];
console.log(produtos[1]);

produtos[2] = 'Notebook';
console.log(produtos);

// Exercício 2: Manipulação de Array- parte 2
// a. Crie um array chamado clientes contendo três nomes de clientes.
// b. Adicione um quarto cliente ao array.
// c. Remova o último cliente e imprima o array atualizado
console.log('Exercício 2:');
let clientes = ['Jean', 'Maria', 'Pedro'];
clientes[3] = 'Ivan'; //add 4º cliente

delete clientes[3];
console.log(clientes);

console.log(clientes);

// clientes.push('Gerson');
// console.log(clientes);
// delete clientes[4];
// console.log(clientes);

// Exercício 3: Manipulação de Objetos- parte 1
// a. Crie um objeto chamado produto com as propriedades nome, preco e quantidade.
// b. Acesse e imprima o nome do produto.
// c. Modifique o preço do produto e imprima o objeto atualizado
console.log('Exercício 3:');

let produto = {
  nome: 'carro',
  preco: 15000,
  quantidade: 2,
};
console.log(produto.nome); //3.b

produto.preco = 10000; //3.c
console.log(produto);

// Exercício 4: Manipulação de Objetos- parte 2
// a. Crie um objeto chamado venda com as propriedades cliente, produto e valor.
// b. Adicione a propriedade data ao objeto.
// c. Remova a propriedade produto e imprima o objeto atualizado.
console.log('Exercício 4:');

let venda = {
  cliente: 'LG',
  produto: 'TV',
  valor: 500,
};

venda.data = '25/03/2026'; //4.b
console.log(venda);

delete venda.data; //4.c
console.log(venda);

// Exercício 5: Manipulação dos Tipos Referências
// a. Crie um array estoque e atribua seus valores para um novo array novoEstoque.
// b. Modifique um elemento de novoEstoque e mostre que estoque não foi alterado.
// c. Crie um objeto funcionario e atribua seus valores para um novo objeto
// novoFuncionario.
// d. Modifique uma propriedade de novoFuncionario e mostre que funcionario não foi
// alterado
console.log('Exercício 5:');

let estoque = ['agua', 'coca', 'guarana'];
let novoEstoque = [...estoque]; //5.a - fiz SHALLOWCOPY caso contrário entendo que "b" n/ é possível
// console.log(novoEstoque);

novoEstoque[0] = 'suco'; //5.b
console.log(estoque);
console.log(novoEstoque);

let funcionario = {
  nome: 'Jonas',
  idade: 34,
  funcao: 'aux. deposito',
};

let novoFuncionario = { ...funcionario }; //SHALLOWCOPY
novoFuncionario.idade = 41; //5.d

console.log(funcionario);
console.log(novoFuncionario);
