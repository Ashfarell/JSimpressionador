// Requisito 1: Simulação de Investimento
// ❖ Crieumafunção que simule o rendimento de um investimento com base em um valor inicial, uma taxa mensal de rendimento e um período de meses.
// ❖ A funçãodeve retornar o saldo final após o período especificado, com duas casas decimais.
// Função: simularInvestimento
console.log('EX1 A) juros simples');
function simularInvestimentoJS(aporte, juros, periodo) {
  return aporte + aporte * (juros / 100) * periodo;
}
console.log(simularInvestimentoJS(1000, 10, 3));

console.log('EX1 B) juros compostos + FOR');

function simularInvestimentoJC1(aporte, juros, periodo) {
  let total = aporte;

  for (let i = periodo; i > 0; i--) {
    total = total + total * (juros / 100);
    // console.log(total);
    // console.log(i);
  }
  return Number(total.toFixed(2));
}

console.log(simularInvestimentoJC1(1000, 10, 3));
console.log('Fim EX1----------------------------------------------------------------------------');

// Requisito 2: Gerenciamento de Despesas
// ❖ Crie uma função que receba um objeto representando as despesas mensais em diferentes categorias.
// ❖ Afunçãodeve calcular e retornar o total de despesas.
// Função: gerenciarDespesas

const despesasMensais = {
  categoriaA: {
    item: 'carro',
    despesa: 300,
  },
  categoriaB: {
    item: 'prédio',
    despesa: 500,
  },
  categoriaC: {
    item: 'equipe',
    despesa: 1200,
  },
};
console.log(despesasMensais);
console.log(despesasMensais.categoriaB);
console.log(Object.keys(despesasMensais));

function calcularDespesas(lista) {
  const transformando = Object.keys(lista); //p/ Transformar OBJETO ==> ARRAY de STRINGS
  let soma = 0;
  for (let i = 0; i < transformando.length; i++) {
    soma = soma + lista[transformando[i]].despesa;
    // console.log(lista[transformando[i]].despesa);
    // console.log(lista[transformando[i]]);
    // console.log(transformando[i]);
  }
  return soma;
}
console.log(calcularDespesas(despesasMensais));

console.log('Fim EX2----------------------------------------------------------------------------');

// Requisito 3: Obtenção do Mês Atual
// ❖ Crie uma função que retorne o nome do mês atual em formato string. A função deve utilizar um array de nomes dos meses para identificar o mês atual.
// Função: obterMesAtual

const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];

console.log('EX3 A) ------------------------');
function obterMesAtual(lista) {
  const data = new Date();
  let valor;
  for (let i = 0; i < lista.length; i++) {
    // console.log(lista[i]);
    if (i === data.getMonth()) {
      valor = lista[i];
    }
  }
  return valor;
}

console.log(obterMesAtual(meses));

const data = new Date();
console.log(data.getMonth());

const mes = data.getMonth() + 1;
console.log(mes);

console.log('EX3 B) ------------------------');

function obterMesAtua2(lista) {
  const data = new Date();
  for (let i = 0; i < lista.length; i++) {
    if (i === data.getMonth()) {
      return lista[i];
    }
  }
}
console.log(obterMesAtua2(meses));

console.log('Fim EX3----------------------------------------------------------------------------');

// Requisito 4: Geração de Relatório Financeiro
// ❖ Crie uma função que gere um relatório financeiro com base no investimento inicial, taxa de rendimento, duração do investimento, despesas mensais, meta de investimento e meta de orçamento.
// ❖ O relatório deve incluir:
// ■ O mês atual.
// ■ O saldo final do investimento.
// ■ O total de despesas.
// ■ Uma mensagem de economia ou excedente em relação ao orçamento.
// ■ Uma verificação se a meta de investimento foi atingida.
// ■ Um resumo das despesas por categoria.
// Função: gerarRelatorio
let aporte4 = 1000;
let juros4 = 10;
let prazo4 = 3;
let metaInvestimento4 = 1300;
let metaOrcamento4 = 2050;

const despesas4 = {
  carro: 300,
  mercado: 500,
  aluguel: 1200,
};

console.log(despesas4);
console.log(Object.keys(despesas4));
console.log(Object.values(despesas4));
console.log(Object.values(despesas4)[1]);

const meses4 = [
  'janeiro',
  'fevereiro',
  'março',
  'abril',
  'maio',
  'junho',
  'julho',
  'agosto',
  'setembro',
  'outubro',
  'novembro',
  'dezembro',
];

console.log(
  'EX4 A) OBJETO SIMPLES (objeto SEM mês e console.log)----------------------------------------------------------------------------'
);
function gerarRelatorio(aporte, juros, prazo, despesas, metaInv, metaOrc) {
  const transformandoObjeto = Object.values(despesas);
  // const data = new Date().getMonth();
  const nomeMes = meses4[new Date().getMonth()]; //busca nome do mês no ARRAY com base no número encontrado (6)
  let total = aporte;
  let somaDespesa = 0;
  const categorias = Object.entries(despesas);

  //Descobrindo saldo investimento
  for (let i = prazo; i > 0; i--) {
    total = total + (total * juros) / 100;
  }

  //Descobrindo despesa
  for (let j = 0; j < transformandoObjeto.length; j++) {
    somaDespesa = somaDespesa + transformandoObjeto[j];
  }

  //Relatório investimento
  if (total >= metaInv) {
    console.log(
      ` Relatório de investimento: Mês atual: ${nomeMes}. Prazo: ${prazo} meses. Aporte inicial: ${aporte}. Retorno mensal: ${juros}%. Saldo final de investimento: ${total.toFixed(2)}. Meta de ${metaInv.toFixed(2)}: Atingida`
    );
  } else {
    console.log(`Mês: ${nomeMes}. Meta de investimento não atingida`);
  }

  //Relatório de despesas
  if (somaDespesa <= metaOrc) {
    console.log(
      ` Relatório de despesas: Mês atual: ${nomeMes}. Gasto total: ${somaDespesa.toFixed(2)}. Meta de orçamento: ${metaOrc.toFixed(2)}. Meta de orçamento atingida`
    );
    console.log(' Despesas por categoria:');
  } else {
    console.log(` Relatório de despesas: Mês atual: ${nomeMes}. Meta de orçamento de ${metaOrc.toFixed(2)} não atingida`);
    console.log(' Despesas por categoria:');
  }

  for (let k = 0; k < categorias.length; k++) {
    console.log(categorias[k][0] + ': ' + categorias[k][1]);
  }
}

gerarRelatorio(aporte4, juros4, prazo4, despesas4, metaInvestimento4, metaOrcamento4);

console.log(
  'EX4 B) RETURN ao invés de console.log  ==>    refatoração (código mais limpo, return, melhor apresentação).                   VAR ACUMULADORA!!!!----------------------------------------------------------------------------'
);

function gerarRelatorio2(aporte, juros, prazo, despesas, metaInv, metaOrc) {
  const transformandoObjeto = Object.values(despesas);
  const nomeMes = meses4[new Date().getMonth()]; //busca nome do mês no ARRAY com base no número encontrado (6)
  let total = aporte;
  let somaDespesa = 0;
  const categorias = Object.entries(despesas);
  let relatorio = ''; //VAR acumuladora

  //Calculando investimento
  for (let i = 0; i < prazo; i++) {
    total = total + total * (juros / 100);
  }
  //Calculando despesa
  for (let j = 0; j < transformandoObjeto.length; j++) {
    somaDespesa = somaDespesa + transformandoObjeto[j];
  }

  // Verificando investimento X meta
  if (total >= metaInv) {
    relatorio += ` Relatório de investimento: Mês ${nomeMes}. Aporte inicial: ${aporte.toFixed(2)}. Rendimento: ${juros} %a.m. Prazo: ${prazo} meses. Saldo de investimento: ${total.toFixed(2)}. Meta: ${metaInv.toFixed(2)}. Meta atingida.\n`;
  } else {
    relatorio += ` Relatório de investimentos: Mês ${nomeMes}. Meta não atingida.\n`; //\n p/ PULAR LINHA
  }

  // Verificando orçamento X meta
  if (somaDespesa <= metaOrc) {
    relatorio += ` Relatório de despesas: Mês ${nomeMes}.Despesa total: ${somaDespesa.toFixed(2)}. Meta orçamento: ${metaOrc.toFixed(2)}. Meta atingida.\n`;
  } else {
    relatorio += ` Relatório de despesas: Mês ${nomeMes}. Meta não atingida.\n`;
  }

  // Despesas por categoria
  relatorio += ` Despesas por categoria: \n`;
  for (let k = 0; k < categorias.length; k++) {
    relatorio += `   ${categorias[k][0]}:   ${categorias[k][1].toFixed(2)};\n`;
  }

  return relatorio;
}
console.log(gerarRelatorio2(aporte4, juros4, prazo4, despesas4, metaInvestimento4, metaOrcamento4));

console.log(
  'EX4 C) Reutilizar as funções já criadas (investimento, despesas, mês atual)----------------------------------------------------'
);

function gerarRelatorio3(aporte, juros, prazo, despesas, metaInv, metaOrc, meses) {
  const saldoFinal = simularInvestimentoJC1(aporte, juros, prazo);
  const despesastotais = calcularDespesas(despesas);
  const nomeMes = meses[new Date().getMonth()];
  const categorias = Object.entries(despesas);
  let relatorio = '';

  // -----------------------------------------------------------------Montando relatório

  // Investimento
  if (saldoFinal >= metaInv) {
    relatorio += ` Relatório de investimentos: Mês: ${nomeMes}. Saldo final: ${saldoFinal.toFixed(2)}. Meta: ${metaInv.toFixed(2)}. Meta atingida\n`;
  } else {
    relatorio += ` Relatório de investimentos: Mês: ${nomeMes}. Saldo final: ${saldoFinal.toFixed(2)}. Meta: ${metaInv.toFixed(2)}. Meta não atingida atingida\n`;
  }
  // Despesa
  if (despesastotais <= metaOrc) {
    relatorio += ` Relatório de despesas: Mês: ${nomeMes}. Gastos totais: ${despesastotais.toFixed(2)}. Meta orçamento: ${metaOrc.toFixed(2)}. Meta atingida\n`;
  } else {
    relatorio += ` Relatório de despesas: Mês: ${nomeMes}. Gastos totais: ${despesastotais.toFixed(2)}. Meta orçamento: ${metaOrc.toFixed(2)}. Meta não atingida\n`;
  }
  // Despesa por categoria
  relatorio += ` Despesas por categoria:\n`;
  for (let i = 0; i < categorias.length; i++) {
    relatorio += `    ${categorias[i][1].item}:  ${categorias[i][1].despesa.toFixed(2)}\n`;
  }

  return relatorio;
}

console.log(gerarRelatorio3(aporte4, juros4, prazo4, despesasMensais, metaInvestimento4, metaOrcamento4, meses4));

console.log(
  'EX4 D) OBJETO COMPLEXO (múltiplos meses e objeto aninhado.) ----------------------------------------------------------------------------'
);
const despesasMensais4B = {
  janeiro: {
    carro: 300,
    mercado: 500,
    aluguel: 1200,
  },
  fevereiro: {
    carro: 300,
    mercado: 600,
    aluguel: 1200,
  },
  marco: {
    carro: 300,
    mercado: 550,
    aluguel: 1200,
  },
};

// Requisito 5: Estrutura de Dados para Despesas
// ❖ Crieumobjeto para armazenar as despesas mensais, utilizando categorias como alimentação, transporte, aluguel e lazer.
// ❖ Oobjeto deve permitir fácil acesso e modificação dos valores das despesas.

// Requisito 6: Entradas e Configurações do Investimento
// ❖ Defina variáveis para armazenar o valor inicial do investimento, a taxa mensal de rendimento, a duração do investimento em meses, a meta de investimento e a meta de orçamento mensal.
// ❖ Asvariáveis devem ser configuráveis para permitir diferentes simulações financeiras.

// Requisito 7: Execução do Relatório
// ❖ Chameafunção gerarRelatorio com os parâmetros adequados para gerar e exibir o relatório financeiro no console.
// ❖ Achamadadeveutilizar as variáveis e objetos definidos anteriormente
