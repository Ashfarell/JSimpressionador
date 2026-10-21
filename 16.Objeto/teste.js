const { arch } = require('node:os');

let meusDados = {
  nome: 'Jean',
  idade: 38,
  print: function () {
    console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
  },
};

console.log(meusDados);
meusDados.print();

function criarObjeto(nome, idade, cidade) {
  return {
    nome,
    idade,
    cidade,
    printTexto: function () {
      return `Nome: ${this.nome} de ${this.idade} anos, de ${this.cidade}`;
    },
  };
}

let user1 = criarObjeto('Dan', 40, 'SP');
console.log(user1);
console.log(user1.printTexto());

// 8. O operador instanceof
const data = new Date();
console.log(data);

console.log(data instanceof Date);
console.log(user1 instanceof criarObjeto);
console.log(criarObjeto.nome instanceof criarObjeto);
console.log(user1 instanceof Object);

let lista = ['maça', 'banana', 1];
console.log(lista instanceof Array);

const pessoas = [
  {
    nome: 'Jean',
    idade: 38,
    cidade: 'São Paulo',
  },
  {
    nome: 'Maria',
    idade: 32,
    cidade: 'Curitiba',
  },
  {
    nome: 'Pedro',
    idade: 25,
    cidade: 'Rio de Janeiro',
  },
];

console.log(pessoas instanceof Array);
console.log(pessoas instanceof Object);

console.log(pessoas[0]);
console.log(pessoas[0] instanceof Array);
console.log(pessoas[0] instanceof Object);

// TESTE PREENCHER OBJETO
let db = {};

function preencherObjeto(objeto, nome, idade) {
  ((objeto.nome = nome), (objeto.idade = idade));
}

preencherObjeto(db, 'Jean', 38);
console.log(db);

// CRIAR OBJETO
function criarObjetoC(nome, idade) {
  return {
    nome,
    idade,
  };
}

console.log(criarObjetoC('Danilo', 42));
