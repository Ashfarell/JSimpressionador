//EXPLICAÇÂO C/ e S/ PARÂMETRO
//S/ PARÂMETRO
// const dataatual = new Date();
// console.log(dataatual);

// //C/ PARÂMETRO
// const data = '1988-02-24';  //String

// const dataPassado = new Date(data);
// console.log(dataPassado);

// Exercício 1 — Extrair informações da data
function exibirData(data) {
  const data1 = new Date(data);
  console.log(data1.getFullYear());
  console.log(data1.getMonth() + 1);
  console.log(data1.getDate() + 1);
}

exibirData('2026-10-06');
console.log('Fim EX1-------------------------------------------------------------------------------------');

const data2 = new Date('2026-10-06');
console.log(data2.getTime()); //print número gigante
console.log(new Date(1791244800000)); //transforma número gigante em data

const timestamp = data2.getTime(); //armazena Nº gigante
console.log(timestamp); //print Nº gigante
console.log(new Date(timestamp)); //Converte Nº p/ data
console.log('FIM TESTE--------------------------------------------');

// Exercício 2 — Dias até o Ano Novo
function diasParaAnoNovo() {
  const hoje = new Date();
  const anoNovo = new Date('2027-01-01');
  const diferenca = anoNovo.getTime() - hoje.getTime();
  const conversao = 1000 * 60 * 60 * 24;
  return (diferenca / conversao).toFixed(0);
}

console.log('Faltam ' + diasParaAnoNovo() + ' dias para o ano novo');
console.log('Fim EX2-------------------------------------------------------------------------------------');

// Exercício 3 — Qual data é mais recente?
function datamaisRecente(data1, data2) {
  const dataA = new Date(data1).getTime();
  const dataB = new Date(data2).getTime();
  if (dataA > dataB) {
    return 'dataA é mais recente';
  } else {
    return 'dataB é mais recente';
  }
}

console.log(datamaisRecente('2026-04-30', '2026-06-05'));
console.log('Fim EX3-------------------------------------------------------------------------------------');
// Exercício 4 — Data de aniversário

function dataAniversario() {
  const data = new Date();
  const nascimento = new Date('1988-12-24');
  const diasVividos = (data.getTime() - nascimento.getTime()).toFixed(0);
  const conversao = 1000 * 60 * 60 * 24;
  const idade = (diasVividos / conversao / 365).toFixed(0);
  const diasVividosConv = (diasVividos / conversao).toFixed(0);
  console.log('Idade: ' + idade + ' anos');
  console.log('Dias vividos: ' + diasVividosConv + ' dias');
}

dataAniversario();
console.log('Fim EX4-------------------------------------------------------------------------------------');
// Exercício 5 — Data mais recente de uma lista

let datas5 = ['2024-01-01', '2026-05-10', '2025-12-25', '2026-01-01'];

function dataMaisRecente5(data) {
  let atual = data[0];
  for (let i = 0; i < data.length; i++) {
    if (new Date(data[i]).getTime() >= new Date(atual).getTime()) {
      atual = data[i];
    }
  }
  return atual;
}

console.log(dataMaisRecente5(datas5));
