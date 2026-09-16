// let tabela = document.getElementById('tabela');
let criarTabela = document.getElementById('criarTabela');
let tabela = document.getElementById('tabela');
let dobrarQuantidades = document.getElementById('dobrarQuantidades');
let descontoDez = document.getElementById('descontoDez');
let reduzirQtd = document.getElementById('reduzirQtd');
let cabecalho = document.querySelector('.cabecalho'); //P/ CRIAR COLUNA DINAMICAMENTE

let produtos = [
  {
    nome: 'Caneca',
    preco: 50,
    quantidade: 15,
  },
  {
    nome: 'Camisa Preta',
    preco: 80,
    quantidade: 25,
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
  //                 A)   1.CRIANDO COLUNA FATURAMENTO DINAMICAMENTE
  let colunaFaturamento = document.createElement('span');
  //                    2.DEFININDO TEXTO COLUNA DINÂMICA FATURAMENTO
  colunaFaturamento.textContent = 'Faturamento';
  //                   3. COLOCANDO FATURAMENTO DENTRO DE CABEÇAHO ( fora do FOR)
  cabecalho.appendChild(colunaFaturamento);

  //                  B)     1.CRIANDO COLUNA META DINAMICAMENTE
  let colunaMeta = document.createElement('span');
  //                    2.DEFININDO TEXTO COLUNA DINÂMICA META
  colunaMeta.textContent = 'Meta';
  //                   3. COLOCANDO META DENTRO DE CABEÇAHO ( fora do FOR)
  cabecalho.appendChild(colunaMeta);

  //                  B)     1.CRIANDO COLUNA META ATINGIDA? DINAMICAMENTE
  let colunaMetaAtingida = document.createElement('span');
  //                    2.DEFININDO TEXTO COLUNA DINÂMICA META ATINGIDA?
  colunaMetaAtingida.textContent = 'Meta Atingida?';
  //                   3. COLOCANDO META ATINGIDA? DENTRO DE CABEÇAHO ( fora do FOR)
  cabecalho.appendChild(colunaMetaAtingida);

  for (let i = 0; i < produtos.length; i++) {
    //                            1º CRIO ITEM NA TABELA
    //                            itemTabela ==>P/ CRIAR AS LINHAS DE CADA ITEM DA TABELA
    //          Para cada produto, precisamos criar um novo <li>.==>  SPAN ==>CRIAM ELEMENTOS DA LINHA
    let itemTabela = document.createElement('li'); //   !!! CRIA CADA LINHA DA TABELA!!!!!!
    let nome = document.createElement('span');
    let preco = document.createElement('span');
    let quantidade = document.createElement('span');
    //                            CRIANDO CONTEÚDO DINÂMICO FATURAMENTO + META
    let faturamento = document.createElement('span');
    let meta = document.createElement('span');
    let metaAtingida = document.createElement('span');

    //                              2º DEFINO O CONTEÚDO DO ITEM CRIADO
    //     itemTabela.textContent = `${produtos[i].nome} R$: ${produtos[i].preco.toFixed(2)} ${produtos[i].quantidade}`;
    //     itemTabela.textContent = ``;
    nome.textContent = produtos[i].nome;
    preco.textContent = `R$${produtos[i].preco}`;
    quantidade.textContent = produtos[i].quantidade;
    let calculoFaturamento = produtos[i].preco * produtos[i].quantidade;
    faturamento.textContent = `R$${calculoFaturamento.toFixed(2)}`;
    let valorMeta = produtos[i].preco * 20;
    meta.textContent = valorMeta;
    let checkMeta;
    if (calculoFaturamento >= valorMeta) {
      checkMeta = 'Sim';
    } else {
      checkMeta = 'Não';
    }
    metaAtingida.textContent = checkMeta;

    //                              3º COLOCO O ELEMENTO DENTRO DO OUTRO
    tabela.appendChild(itemTabela);
    itemTabela.appendChild(nome);
    itemTabela.appendChild(preco);
    itemTabela.appendChild(quantidade);
    itemTabela.appendChild(faturamento);
    itemTabela.appendChild(meta);
    itemTabela.appendChild(metaAtingida);
  }
  console.log('Tabela criada');
  event.preventDefault();
});

//                                          LÓGICA BOTÕES
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
