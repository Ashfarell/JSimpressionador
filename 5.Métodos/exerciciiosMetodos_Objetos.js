// Módulo 5
// Exercícios- Métodos Objetos

// Exercício 1: Crie um objeto chamado Venda com as propriedades produto, quantidade, precoUnitario e desconto. Adicione um método chamado calcularTotal que calcule o
// valor total da venda, considerando o desconto. Adicione também um método chamado detalharVenda que retorne uma string detalhando a venda.
const venda = {
  produto: 'Notebook',
  quantidade: 5,
  precoUnitario: 1000,
  desconto: 100,
  calcularTotal: function () {
    return this.quantidade * this.precoUnitario - this.desconto;
  },
  detalharVenda: function () {
    return (
      'EX1 - O preço final de venda é formado pelo preço do produto: ' +
      this.precoUnitario +
      ', multiplicado pela quantidade: ' +
      this.quantidade +
      ', descontado o desconto: ' +
      this.desconto +
      ', resultando em: ' +
      this.calcularTotal()
    );
  },

  // //ERRADO - aplicarDesconto3------------------------------------------------------------------------------------------
  // aplicarDesconto3: function (newDesconto1) {
  //   this.desconto = newDesconto1 / 10; //ERRADO!!!! Método EX2 que definie o desconto ==>desconto recebe o valor de newDesconto, ou seja, o valor passado como argumento na chamada do método
  // }, //Ainda n/ resolve EX2 (pq atribui valor p/ desconto....preciso trazer valor %)
  // //ERRADO - aplicarDesconto------------------------------------------------------------------------------------------

  //ERRADO - aplicarDesconto------------------------------------------------------------------------------------------
  // aplicarDesconto: function (newDesconto) {
  //   this.desconto = this.desconto + newDesconto; //EX2 - MÉTODO
  // },
  //ERRADO - aplicarDesconto------------------------------------------------------------------------------------------

  aplicarDescontoGPT: function (percentual) {
    let valorTotal = this.quantidade * this.precoUnitario; //EX2 - CHATGPT (% desconto)
    this.desconto = (valorTotal * percentual) / 100; //EX2 - CHATGPT (% desconto)
  },
  atualizarQuantidade: function (newQuantidade) {
    this.quantidade = newQuantidade; //EX3
  },
  verificarEstoque: function (estoque) {
    if (this.quantidade > estoque) {
      return console.log('EX4 - NOK');
    } else console.log('EX4 - OK');
  },
}; //FIM const VENDA--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//SOLUÇÃO CHATGPT

//ERRADO - aplicarDesconto------------------------------------------------------------------------------------------
// venda.aplicarDesconto(10000 / 100); //EX2 - EXECUTANDO
// console.log(
//   'EX2 - O desconto é de: ' +
//     venda.desconto +
//     ' e o valor total é de: ' +
//     venda.calcularTotal() +
//     '. Nesse caso  o desconto concedido é de: ' +
//     (venda.desconto / (venda.calcularTotal() + venda.desconto)) * 100 +
//     '%'
// ); //ERRADO - aplicarDesconto------------------------------------------------------------------------------------------

// console.log(venda.calcularTotal());
console.log(venda.detalharVenda()); //EX1 - EXECUTANDO

// //ERRADO - aplicarDescont3o------------------------------------------------------------------------------------------
// venda.aplicarDesconto3(100); //ERRADO!!!! Executando MÉTODO EX2: aplicando um novo desconto de R$ 50 e verificando o valor total da venda após a aplicação do desconto.
// console.log(
//   `EX2 - TESTE3: O valor com o novo desconto é de R$ ${venda.calcularTotal()} sendo que o novo desconto é de R$ ${venda.desconto}`
// );//ERRADO - aplicarDesconto3------------------------------------------------------------------------------------------

// Exercício 2: Adicione um método ao objeto Venda chamado aplicarDesconto que recebe um valor percentual e atualiza o desconto da venda. Aplique um desconto de 10% e verifique o valor total com o método calcularTotal.

venda.aplicarDescontoGPT(10); //EX2 - CHATGPT executando (% desconto)
console.log('EX2 - CHATGPT: ' + venda.calcularTotal() + ' valor total'); //EX2 - CHATGPT executando (% desconto)
console.log('EX2 - CHATGPT: ' + venda.desconto + ' desconto'); //EX2 - CHATGPT executando (% desconto)
//END SOLUÇÃO CHATGPT

// //ERRADO - aplicarDesconto1------------------------------------------------------------------------------------------
// venda.aplicarDesconto1 = function () {
//   return this.calcularTotal() / this.precoUnitario; //método FORA do Objeto "VENDA"
// }; //ERRADO - aplicarDesconto1------------------------------------------------------------------------------------------

//ERRADO - aplicarDesconto2------------------------------------------------------------------------------------------
// venda.aplicarDesconto2 = function () {
//   return (this.desconto / (this.calcularTotal() + this.desconto)) * 100 + '%'; //método FORA do Objeto "VENDA" ==>calcula desconto concedido (100/2000 = 5%)
// };
// console.log('EX2 - TESTE 1: ' + venda.aplicarDesconto1());
// console.log('EX2 - TESTE 2: O desconto foi de: ' + venda.aplicarDesconto2());
// //ERRADO - aplicarDesconto2------------------------------------------------------------------------------------------

// Exercício 3: Adicione um método ao objeto Venda chamado atualizarQuantidade que  recebe um número e altera a quantidade do produto na venda. Atualize a quantidade e verifique o total da venda após a atualização.
venda.atualizarQuantidade(5);
console.log(venda.calcularTotal());

// Exercício 4: Adicione um método chamado verificarEstoque que recebe a quantidade disponível em estoque e retorna uma mensagem fixa indicando se a venda pode ser realizada ou se é necessário ajustar a quantidade.
// venda.estoque = ''; //EX4 ==>cria PROPRIEDADE "estoque" no OBJETO "venda"
venda.verificarEstoque(6);

// Exercício 5: Retorne um array com todas as suas propriedades e valores do objeto Venda. Exiba as propriedades e valores em um formato legível.

// Exercício 6: Obtenha um array com os nomes de todas as propriedades do objeto Venda. Exiba as propriedades do objeto.

// Exercício 7: Obtenha um array com todos os valores das propriedades do objeto Venda. Exiba os valores das propriedades.

// Exercício 8: Verifique se o objeto Venda possui a propriedade desconto. Retorne a verificação diretamente em uma mensagem fixa.

// Exercício 9: Crie um novo objeto NovaVenda que contenha as mesmas propriedades e valores de Venda, mas com um produto e quantidade diferentes. Exiba o novo objeto NovaVenda.

// Exercício 10: Adicione uma nova propriedade data ao objeto Venda, definindo-a como não enumerável. Exiba todas as propriedades do objeto Venda e, em seguida, exiba o valor da nova propriedade data separadamente.

// Exercício 11: Crie um novo objeto DescontoEspecial que herde as propriedades do objeto Venda, mas com um desconto fixo de 20%. Exiba as propriedades do novo objeto e verifique se o desconto foi aplicado corretamente.

// Exercício 12: Remova a propriedade desconto do objeto Venda. Verifique se a propriedade foi removida com sucesso e exiba as propriedades restantes do objeto
