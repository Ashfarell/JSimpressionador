const pessoa = { nome: 'Jean', idade: 38, estado: 'RJ', tipo: 'branco' };

if (pessoa.idade >= 18) {
  console.log('Você é maior de idade');
}

if (pessoa.idade >= 18 && pessoa.estado === 'SP') {
  console.log('OK');
} else {
  console.log('NOK');
}

if ((pessoa.idade >= 18) | (pessoa.estado === 'SP')) {
  console.log('OK');
} else {
  console.log('NOK');
}

// 4. Switch Case
console.log('Exemplos com SWITCH CASE');
const torcedor = { nome: 'Jean', idade: 38, estado: 'SP', time: 'santos' };

const boasVindasTest = `Bem vindo ${torcedor.time}`; //Usando Sring Template
console.log(boasVindasTest);

const boasVindas1 = 'Bem vindo palmeirense';
const boasVindas2 = 'Bem vindo SP';
const boasVindas3 = 'Bem vindo Corint';
const boasVindasGeral = 'Bem vindo amigo'; //Sem time

switch (torcedor.time) {
  case 'Palmeiras':
    console.log(boasVindas1);
    break;
  case 'SP':
    console.log(boasVindas2);
    break;
  case 'Corinthias':
    console.log(boasVindas3);
    break;
  default: //Executa caso nenhum teste tenha passado   //última condição ==>n/ requer break
    console.log(boasVindasGeral);
}

// 5. Operador ternário
console.log('Exemplos com OPERADOR TERNÁRIO');
torcedor.time === 'Palmeiras' ? console.log(boasVindas1) : console.log(boasVindasGeral);

const cliente = { nome: 'Jean', idade: 18, autorizacao: true };

if (cliente.idade >= 18 && cliente.autorizacao == true) {
  console.log('OK');
} else {
  console.log('NOK');
}

cliente.idade === 18 ? console.log('OK') : console.log('NOK'); //OPERADOR TERNÁRIO

cliente.idade === 18 && cliente.autorizacao === true ? console.log('OK') : console.log('NOK'); //OPERADOR TERNÁRIO

// 9. FOR - Exemplo prático
//Trazer nomes por CAT
let equipe = [
  { nome: 'Bruno', idade: 35, time: 'água', salario: 10000, disponivel: true }, //PRINT nome dos funcionários conforme CATEGORIA listada
  { nome: 'JB', idade: 27, time: 'terra', salario: 8000, disponivel: false },
  { nome: 'Joana', idade: 42, time: 'mar', salario: 7500, disponivel: true },
  { nome: 'Jorge', idade: 35, time: 'água', salario: 12000, disponivel: false },
  { nome: 'Daniel', idade: 27, time: 'terra', salario: 5000, disponivel: true },
  { nome: 'Márcio', idade: 42, time: 'mar', salario: 3000, disponivel: false },
];

function listarNomePorCat(categoria) {
  for (let i = 0; i < equipe.length; i++) {
    if (equipe[i].time === categoria) {
      console.log(equipe[i].nome);
    }
  }
}
listarNomePorCat('água');

//contar salários  COM PARÂMETRO
function salarios(base) {
  let soma = 0;
  for (let i = 0; i < base.length; i++) {
    soma = soma + base[i].salario;
  }
  return soma;
}

console.log(salarios(equipe));

// contar salários  SEM PARÂMETRO
function salarios2() {
  let soma = 0;
  for (let i = 0; i < equipe.length; i++) {
    soma += equipe[i].salario;
  }
  return soma;
}
console.log(salarios2());

//Print CONTAR funcionários disponíveis   - C/ PARÂMETRO

function contarDispo(base) {
  let contador = 0;
  for (let i = 0; i < base.length; i++) {
    if (base[i].disponivel === true) {
      contador++;
    }
  }
  return contador;
}

console.log(contarDispo(equipe));

//Print CONTAR funcionários disponíveis   - S/ PARÂMETRO
function contarDispo2() {
  let contador = 0;
  for (let i = 0; i < equipe.length; i++) {
    if (equipe[i].disponivel === true) {
      contador++;
    }
  }
  return contador;
}
console.log(contarDispo2());

// 12. WHILE - primeira abordagem
let funcionarios = 0;

while (funcionarios < 3) {
  console.log('Funcionários ' + (funcionarios + 1)); //P/ n/ contar 0
  funcionarios++;
}

console.log('Fim');

// Novo exemplo
let name = 'Jean';

function registarNome(nome) {
  while (true) {
    if (nome === '') {
      console.log('Favor preencher com seu nome');
      break;
    } else if (typeof nome !== 'string') {
      console.log('formato errado');
      break;
    } else {
      console.log('Nome OK');
      break;
    }
  }
}
registarNome('');

// Novo exemplo
let destino = 'Ceará';
let origem = 'SP';

function verificarViagem(origem, destino) {
  console.log('Boa viagem');

  while (origem !== destino) {
    if (origem === '' || typeof origem !== 'string') {
      console.log('Nome de origem precisa ser informado');
      break;
    } else if (destino === '' || typeof destino !== 'string') {
      console.log('Nome destino precisa ser informado');
      break;
    } else {
      console.log(`Local de origem ${origem} e local de destino ${destino}`);
      break;
    }
  }
}
verificarViagem(origem, destino);

// DO WHILE - primeira abordagem
let numero = 1;
do {
  console.log('Número ' + numero);
  numero++;
} while (numero < 10);

//Registrando funcionários    -DO WHILE
let funcionario = 6;

do {
  console.log('Registrando funcionário ' + funcionario);
  funcionario--;
} while (funcionario > 0);
