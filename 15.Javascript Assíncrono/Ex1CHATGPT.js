//                                 🧩 Exercício 1 — setTimeout + arrow function
// Alternativa A ---setTimeout usando uma arrow function como callback
console.log('Ínicio A');

setTimeout(() => {
  console.log('Olá, amigo A!'); //👉 Essa ARROW FUNCTION é uma CALLBACK.
}, 2000);

console.log('Fim A');

// Alternativa B -----função

function ex1B() {
  console.log('Ínicio B');
  setTimeout(() => {
    console.log('Olá, amigo B!'); //👉 ARROW FUNCTION
  }, 2000);
  console.log('Fim B');
}

console.log('FIM EX1-----------------------------------------------------');

ex1B();

//                              🧩 Exercício 2 — Callback + setTimeout
// Alternativa A -- setTimeout dentro da função
function mostrarMensagemA() {
  setTimeout(() => {
    console.log('Estudei Javascript hoje!');
  }, 3000);
}

mostrarMensagemA();

// Alternativa B -- função dentro do setTimeout
setTimeout(() => {
  function mostrarMensagemB() {
    console.log('Estudei Javascript hoje!');
  }
  mostrarMensagemB(); //                             EXECUTA A FUNÇÃO
}, 3000);

console.log('FIM EX2-----------------------------------------------------');

//                             🧩 Exercício 3 — Callback + parâmetro

function executarTarefa(funcao) {
  funcao();
}

function estudar() {
  console.log('Vamos estudar');
}

executarTarefa(estudar);

console.log('FIM EX3-----------------------------------------------------');
