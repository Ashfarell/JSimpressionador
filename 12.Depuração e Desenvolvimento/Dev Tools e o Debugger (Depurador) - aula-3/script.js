const botaoDobrarQuantidades = document.getElementById(
  "botao-dobrar-quantidade"
);
const botaoDesconto = document.getElementById("botao-desconto");
const botaoReduzirQuantidades = document.getElementById(
  "botao-reduzir-quantidade"
);
const botaoReajustePrecos = document.getElementById("botao-reajuste-precos");
const botaoAvaliacaoMetas = document.getElementById("botao-avaliacao-metas");

const listaIdsCelulasPreco = [
  "preco-caneca",
  "preco-camisa",
  "preco-caderno",
  "preco-garrafa",
];
const listaIdsCelulasQuantidade = [
  "quantidade-caneca",
  "quantidade-camisa",
  "quantidade-caderno",
  "quantidade-garrafa",
];
const listaIdsCelulasVenda = [
  "vendas-caneca",
  "vendas-camisa",
  "vendas-caderno",
  "vendas-garrafa",
];

function dobrarQuantidades() {
  listaIdsCelulasQuantidade.forEach((id) => {
    const celulaQuantidade = document.getElementById(id);
    const quantidadeAtual = Number(celulaQuantidade.innerText);
    celulaQuantidade.innerText = quantidadeAtual * 2;
  });
}

function descontarDezPorCento() {
  listaIdsCelulasPreco.forEach((id) => {
    const celulaPreco = document.getElementById(id);
    const precoAtual = celulaPreco.innerText;
    celulaPreco.innerText = `R$ ${Number(precoAtual * 0.9)
      .toFixed(2)
      .replace(".", ",")}`;
  });
}

function cortarQuantidadesPelaMetade() {
  listaIdsCelulasQuantidade.forEach((id) => {
    const celulaQuantidade = document.getElementById(id);
    const quantidadeAtual = Number(celulaQuantidade.innerText);
    console.log("quantidadeAtual antes: ", quantidadeAtual);
    celulaQuantidade.innerText = Math.floor(quantidadeAtual / 2);
    console.log("quantidadeAtual depois: ", celulaQuantidade.innerText);
  });
}

function reajustarPrecos() {
  listaIdsCelulasPreco.forEach((id) => {
    const celulaPreco = document.getElementById(id);
    const precoAtual = celulaPreco.innerText;
    celulaPreco.innerText = `R$ ${Number(precoAtual * 1.05)
      .toFixed(2)
      .replace(".", ",")}`;
  });
}

function avaliarCumprimentoMetas() {
  const metaVendas = 8;
  listaIdsCelulasVenda.forEach((id) => {
    const celulaVendasDiarias = document.getElementById(id);
    if (Number(celulaVendasDiarias.innerText) >= metaVendas) {
      celulaVendasDiarias.style.backgroundColor = "#05353B";
      celulaVendasDiarias.style.color = "#f0f0f0";
    } else {
      celulaVendasDiarias.style.backgroundColor = "#7C2327";
      celulaVendasDiarias.style.color = "#f0f0f0";
    }
  });
}

botaoDobrarQuantidades.addEventListener("click", reajustarPrecos);
botaoDesconto.addEventListener("click", dobrarQuantidades);
botaoReduzirQuantidades.addEventListener("click", cortarQuantidadesPelaMetade);
botaoReajustePrecos.addEventListener("click", dobrarQuantidades);
botaoAvaliacaoMetas.addEventListener("click", avaliarCumprimentoMetas);
