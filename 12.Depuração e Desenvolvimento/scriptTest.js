// let tabela = document.getElementById('tabela');
let criarTabela = document.getElementById('criarTabela');
let tabela = document.getElementById('tabela');
let dobrarQuantidades = document.getElementById('dobrarQuantidades');
let descontoDez = document.getElementById('descontoDez');
let reduzirQtd = document.getElementById('reduzirQtd');

let produtos = [
  {
    nome: 'Caneca',
    preco: 50,
    quantidade: 15,
  },
  {
    nome: 'Camisa Preta',
    preco: 80,
    quantidade: 20,
  },
  {
    nome: 'Caderno 100 folhas',
    preco: 40,
    quantidade: 20,
  },
  {
    nome: 'Garrafa Térmica',
    preco: 80,
    quantidade: 30,
  },
];

criarTabela.addEventListener('click', function (event) {
  for (let i = 0; i < produtos.length; i++) {
    // 1º CRIO ITEM NA TABELA
    let itemTabela = document.createElement('li');
    let nome = document.createElement('span');
    let preco = document.createElement('span');
    let quantidade = document.createElement('span');

    // 2º DEFINO O CONTEÚDO DO ITEM CRIADO
    // itemTabela.textContent = `${produtos[i].nome} R$: ${produtos[i].preco.toFixed(2)} ${produtos[i].quantidade}`;
    // itemTabela.textContent = ``;
    nome.textContent = produtos[i].nome;
    preco.textContent = `R$${produtos[i].preco}`;
    quantidade.textContent = produtos[i].quantidade;

    // 3º COLOCO O ELEMENTO DENTRO DO OUTRO
    tabela.appendChild(itemTabela);
    itemTabela.appendChild(nome);
    itemTabela.appendChild(preco);
    itemTabela.appendChild(quantidade);
  }
  console.log(tabela);
  event.preventDefault();
});

// Lógica botões
dobrarQuantidades.addEventListener('click', function (event) {
  for (let i = 0; i < produtos.length; i++) {
    produtos[i].quantidade *= 2;
  }
});

descontoDez.addEventListener('click', function (event) {
  for (let i = 0; i < produtos.length; i++) {
    produtos[i].preco *= 0.9;
  }
});

reduzirQtd.addEventListener('click', function (event) {
  for (let i = 0; i < produtos.length; i++) {
    produtos[i].quantidade /= 2;
  }
});

aumentarPrecos.addEventListener('click', function (event) {
  for (let i = 0; i < produtos.length; i++) {
    produtos[i].preco *= 1.05;
  }
});
