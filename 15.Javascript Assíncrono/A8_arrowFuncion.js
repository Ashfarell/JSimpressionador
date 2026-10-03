// Arrow Function
// () => {};

let minhaFUncao = () => console.log('hello');

// minhaFUncao();

let intervalo = 5;

let teste = setInterval(() => {
  for (let i = intervalo; i >= 0; i--) {
    console.log(`Teste ${intervalo}`);
    intervalo--;
  }
}, 2000);

let teste2 = setInterval(() => {
  console.log(`Teste ${intervalo}`);
  intervalo--;
  if (intervalo < 0) {
    clearInterval(intervalo);
    console.log('FIM');
  }
}, 2000);

// A9
const soma = (a, b) => {
  return a + b;
};

// console.log(soma(5, 4));

const testarArrow = (a, b) => {
  let contador = 5;
  let contador2 = contador;
  for (let i = 0; i < contador; i++) {
    contador2--;
    console.log(`O número é ${i} e o resultado é ${a + b + i + contador2}`);
    console.log(`O contador2 vale ${contador2}`);
  }
};

testarArrow(5, 4);
