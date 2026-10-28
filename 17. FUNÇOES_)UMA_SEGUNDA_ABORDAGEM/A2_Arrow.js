function dobrar(x) {
  return x * 2;
}

const sobrarArrow = (numero) => {
  return numero * 2;
};

const sobrarArrow2 = () => {
  return 2 * 10;
};

console.log(`O número é ${dobrar(2)}`);
console.log(`O número com ARROW é ${sobrarArrow(2)}`);
console.log(`O número é ${sobrarArrow2()} `);

function criarMsg(textoVar) {
  textoTbase = `Hello my friend`;
  console.log(`${textoTbase}   ${textoVar}`);
}
criarMsg('Jean');

function criarMsg2(textoVar) {
  textoTbase = `Hello my friend`;
  return textoTbase + ' ' + textoVar;
}
console.log(criarMsg2('Jean'));

const criarMsgConst = (nome) => {
  const base = 'Hello my friend';
  console.log(`${base} ${nome}, agora com Arrow`);
};

criarMsgConst('Jean');

hello(); //             EXECUÇÃO ANTES DA CRIAÇÃO

function hello() {
  console.log('Hello');
}

const helloComArrow = () => {
  console.log('Hello com Arrow');
};
helloComArrow();

// A4 -Métodos de arrays: Mutabilidade vs Imutabilidade

let lista = [1, 2, 3, 4, 5];
console.log(lista);
lista.push(9);
console.log(lista);

let lista2 = [5, 4, 3, 2, 4, 1];
lista2.pop();

console.log(lista + lista2);

console.log(lista.concat(lista2));
