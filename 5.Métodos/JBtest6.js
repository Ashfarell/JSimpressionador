let numeros = [5, 25, 30, 15, 7];
console.log(numeros.every((numero) => numero >= 7));

let frutas = ['maça', 'banana', 'pera'];
console.log(frutas.every((fruta) => fruta.includes('e')));

let a = '125abc';
let b = '567';
let c = '555.23';

console.log(Number.parseFloat(a) + Number(b));
const cNum = Number.parseInt(c);
console.log(Number.parseFloat(b) + cNum);

function raiz(x) {
  return Math.sqrt(x);
}

console.log(raiz(9));

let texto = 'Oi eu sou seu amigo';
console.log(texto.slice(0, 10));

console.log(texto.replace('amigo', 'pai'));
console.log(texto.indexOf('sou'));

let texto2 = texto.split(' ');
console.log(texto2);

texto2.splice(4, 0, 'ahhah');
console.log(texto2);

const objeto = {
  produto: 'carro',
  ano: '2016',
  marca: 'Ford',
};

console.log(objeto.ano);

objeto.ano = '2021';
console.log(objeto.ano);

objeto.pais = 'BR';
console.log(objeto);

delete objeto.ano;
console.log(objeto);

const resultado = {
  custo: 10000,
  imposto: 5 / 100,
  vendas: 25000,
  LB: function () {
    return this.vendas - this.custo;
  },
};

console.log(resultado.LB());

resultado.LL = function () {
  return resultado.LB() - resultado.LB() * resultado.imposto;
};

console.log(resultado.LL());

console.log('NOVO------------------------------------------------------------------------------------------------------------');
function calculo(a, b, c) {
  return Math.pow(a, c) + Math.sqrt(b);
}

console.log(calculo(2, 9, 2));

console.log('NOVO------------------------------------------------------------------------------------------------------------');

const empresa = {
  vendas: 20000,
  custo: 3500,
  desconto: 1000,
  imposto: 10 / 100,
  lucro1: function () {
    return this.vendas - this.custo;
  },
};

console.log(empresa.lucro1());

empresa.lucro2 = function () {
  return empresa.lucro1() - empresa.lucro1() * empresa.imposto;
};

console.log(empresa.lucro2());

empresa.desconto = (empresa.vendas * 10) / 100;

console.log(empresa.desconto);

console.log('NOVO------------------------------------------------------------------------------------------------------------');
function calcularDesconto(x) {
  const a = 10000;
  const b = 5000;
  return a - b - (a * x) / 100;
}
console.log(calcularDesconto(10));
