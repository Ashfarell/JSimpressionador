// 5. Map e Filter
let clientes = [
  { nome: 'Jean', idade: 38, setor: 'tec' },
  {
    nome: 'Igor',
    idade: 31,
    setor: 'RH',
  },
  {
    nome: 'Jade',
    idade: 53,
    setor: 'RH',
  },
];

let filtrarClientes = clientes.filter((p) => p.idade >= 30);
console.log(filtrarClientes);

let test1 = clientes.map((p) => p.nome);
console.log(test1);

let transformar = clientes.map((p) => p.idade + 10);
console.log(transformar);

let transformar2 = clientes.map((p) => p.nome.concat(p.setor) + ' ' + p.idade + 100);
console.log(transformar2);

const filtrarETransformar = clientes.filter((p) => p.idade >= 30 && p.setor === 'RH');
console.log(filtrarETransformar);

filtrarETransformar1 = clientes
  .filter((p) => p.idade >= 30 && p.setor === 'RH')
  .map((p) => p.nome.concat('').concat(p.setor) + ' ' + p.idade);
console.log(filtrarETransformar1);

// 6. Reduce
let faturamento = [1_500_000, 850_000, 938_000, 1_350_000, 450_000];

//Dobrar usando FUNCTION()
console.log('Dobrar usando FUNCTION()-------------------------------------------------------------------------');
function modificarFat(lista) {
  let novo;
  for (let i = 0; i < lista.length; i++) {
    novo = lista[i] * 2;
    console.log(novo);
  }
}

console.log(modificarFat(faturamento));

// DOBRAR usando map
console.log('DOBRAR usando map-------------------------------------------------------------------------');
const dobrarMap = faturamento.map((p) => p * 2);
console.log(dobrarMap);

// somar tudo com função
console.log('somar tudo com função-------------------------------------------------------------------------');
function somarFat(lista) {
  let soma = 0;
  for (let i = 0; i < lista.length; i++) {
    soma += lista[i];
  }
  return soma;
}
console.log(somarFat(faturamento).toFixed(2));

// Somar tudo com reduce
console.log('Somar tudo com reduce-------------------------------------------------------------------------');
const somarRed = faturamento.reduce((acc, n) => acc + n, 0);
console.log(somarRed);

// *2 com forEach
console.log('Somar tudo com forEach-------------------------------------------------------------------------');
function somarforEach(lista) {
  lista.forEach((item) => {
    console.log(item * 2);
  });
}
somarforEach(faturamento);

//Somar tudo com forEach
console.log('Somar tudo com forEach-------------------------------------------------------------------------');
function somarForEach(lista) {
  let soma = 0;
  lista.forEach((item) => {
    soma += item;
  });
  return soma;
}

console.log(somarForEach(faturamento));
