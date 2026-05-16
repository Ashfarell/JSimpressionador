let dadosCliente = {
  nome: 'Jean',
  idPedido: 380,
  email: 'xxx@gmail.com',
};

function msgCliente(nome, id, email) {
  console.log(`Caro ${nome} confirmamos o recebimento do seu pedido ${id}`);
  console.log(`Em breve receberá informações em seu email ${email}`);
}

msgCliente(dadosCliente.nome, dadosCliente.idPedido, dadosCliente.email);

//Exemplo de diferentes formas de execução
function soma(a, b) {
  return a + b;
}
console.log(soma(2, 5)); //1: imprimir diretamente

let resultado = soma(2, 3); //Criando VAR que pega resultado da função - Já atribuímos os valores Depois print VAR
console.log(resultado);

let resultado2 = soma; //Criando VAR que pega resultado da função - N/ atribuímos valores; apenas no PRINT
console.log(resultado2(5, 10));

let pedidoCliente = {
  nome: 'JB',
  id: 2424,
  email: 'xxx@gmail.com',
  coca: 10,
  almoco: 15,
  sobremesa: 12,
};

function processarPedido(nome, id, email, item1, item2, item3) {
  console.log(`Oi Sr. ${nome}, seu pedido ${id} está pronto e a NF será enviada em seu email ${email}`);
  console.log('O valor total do seu pedido é de ');
}
processarPedido(pedidoCliente.nome, pedidoCliente.id, pedidoCliente.email);

//Função p/ calcular pedido s/ Variável
function calcularPedido(item1, item2, item3) {
  console.log(`O seu pedido contém: coca: ${item1}, bebida: ${item2}, sobremesa: ${item3}.`);
  console.log('O total do seu pedido é: ') & console.log(item1 + item2 + item3);
}

calcularPedido(
  //Executando FUNÇÃO
  pedidoCliente.coca,
  pedidoCliente.almoco,
  pedidoCliente.sobremesa
);

//Função p/ calcular pedido c/ Variável
console.log('TEST JB');

function calcularPedidoVar(id, item1, item2, item3) {
  let totalPedido = item1 + item2 + item3; //VAR dentro da FUNÇÃO
  console.log('Seu pedido ' + id + ' está sendo processado');
  console.log(`O total do pedido é ${totalPedido}`);
  return totalPedido; //Ordem p/ JS armazenar e retornar o que pedimos  -JS n/ lê nada após o RETURN
} //Return apenas totalPedido!!! N/ retorna console.log (acima)

let retornoFuncao = calcularPedidoVar(pedidoCliente.id, pedidoCliente.coca, pedidoCliente.almoco, pedidoCliente.sobremesa);
console.log(retornoFuncao);

// calcularPedidoVar(pedidoCliente.id, pedidoCliente.coca, pedidoCliente.almoco, pedidoCliente.sobremesa);
