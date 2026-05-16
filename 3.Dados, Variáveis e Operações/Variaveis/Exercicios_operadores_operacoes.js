// Exercício 1: Você tem um produto que custa R$ 200,00 e recebeu um desconto de R$ 40,00.
// Além disso, há um imposto de R$ 12,00 sobre o preço com desconto. Calcule o preço final do
// produto após aplicar o desconto e o imposto.
let precoProduto = 200;
//console.log(precoProduto);
let desconto = 40;
let imposto = 12;
let precoFinal = precoProduto - desconto + imposto;
console.log('Exercício 1: O preço final do produtoé de R$ ' + precoFinal);

// Exercício 2: Você comprou um produto por R$ 100,00 e deseja vender com um lucro adicional
// de R$ 30,00. Calcule o preço de venda do produto
let precoProduto2 = 100;
let lucro = (precoProduto2 * 30) / 100;
// console.log(lucro);
let precoVenda = precoProduto2 + lucro;
console.log('Exercício 2: O preço de venda é de R$ ' + precoVenda);

// Exercício 3: Você tem um orçamento de R$ 250,00 e deseja verificar se o custo de um
// produto, após aplicar um desconto de R$ 50,00, está dentro do orçamento. O custo do produto
// é R$300,00.
let orcamento = 250;
let desconto2 = 50;
let custoProduto = 300;
let precoFinal2 = custoProduto - desconto2;

//Exercício 3: Versão com print simples
console.log(
  'Exercício 3 V1: ' +
    'O preço final é de ' +
    precoFinal2 +
    ' e está dentro do orçamento'
);
console.log(precoFinal <= orcamento);

//Exercício 3 com variável para armazenar o resultado da comparação
let final = precoFinal2 <= orcamento; //variável para armazenar o resultado da comparação
console.log(
  `Exercício 3 V2: O custo é de R$ ${precoFinal2} e o produto está dentro do orçamento: ${final}`
);

//Exercício 3: Versão com Condicional Ternária
if (precoFinal2 <= orcamento) {
  console.log(
    `Exercício 3 V3: O custo do produto é de R$ ${precoFinal2} e está dentro do orçamento: ${final}`
  );
} else {
  console.log('Exercício 3: O custo do produto está fora do orçamento.');
}

// Exercício 4: Você tem duas variáveis, uma que representa a quantidade de produtos em um
// estoque como uma string ("20") e outra que representa a quantidade mínima necessária de
// produtos no estoque como um número (20). Verifique se a quantidade atual de produtos é
// suficiente (igual ou maior que a quantidade mínima necessária) após converter a string para um
// número. Imprima no console se a quantidade é suficiente ou não.
let qtdAtual = '20';
let qtdMinima = 20;

//Exercício 4: Versão com print simples
console.log(Number(qtdAtual)); // Convertendo a string para número
console.log('Exercício 4 V1: A quantidade é suficiente');
console.log(qtdAtual >= qtdMinima);

// Exercício 4: Versão com variável para armazenar o resultado da comparação
let qtdSuficiente = Number(qtdAtual) >= qtdMinima; //variável que transforma a string em número e armazena o resultado da comparação
console.log(
  'Exercício 4 V2: A quantidade no estoque é suficinete: ' + qtdSuficiente
);
// Exercício 5: Você tem três variáveis: uma que representa se um produto está disponível como
// umbooleano (true), outra que representa a quantidade de produtos no estoque (10), e uma
// terceira que representa a quantidade mínima necessária de produtos no estoque (15). Verifique
// se o produto está disponível e se a quantidade é suficiente (igual ou maior que a quantidade
// mínima necessária) usando operadores lógicos NOT e AND. Imprima no console se o produto
// está disponível e tem a quantidade suficiente
let booleano = true;
let qtdProduto = 10;
let qtdMinima2 = 15;

let produtoDispo = booleano && qtdProduto >= qtdMinima2; //variável que armazena o resultado da comparação usando o operador lógico AND
console.log(
  'Exercício 5: O produto está disponível e tem quantidade suficiente:   ' +
    produtoDispo +
    ' e o produto está indisponível ' +
    !booleano
);
