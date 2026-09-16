// armazena na VAR o módulo do HTTP integrado do note
const http = require('http');

// Função p/ lidar com requisições
// Cria função c/ 2 parâmetros
// req = pedido // res = resposta
const server = http.createServer((req, res) => {
  // Definindo o cabeçalho da resposta como HTML
  res.writeHead(200, { 'content-type': 'text/html' });

  // Escrevendo uma resposta simples
  res.write('<h1>Olá, mundo</h1>');

  // Finalizando a resposta
  res.end();
});

// Configurando o servidor p/ ouvir na porta 3000
// Fazer servidor se conectar a essa porta?
server.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
