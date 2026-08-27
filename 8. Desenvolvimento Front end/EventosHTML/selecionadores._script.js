// getsElementsByTagName:
const titulo = document.getElementsByTagName('h2');
console.log('Selecinando pela tag h2: ', titulo); //Possível verificar c/ F12 + console

// getElementByClassName:
const paragrafosItens = document.getElementsByClassName('texto-lista');
console.log('Selecionando por nome da class: ', paragrafosItens); //Possível verificar c/ F12 + console

// getElementById:
const destacado = document.getElementById('destacado');
console.log('Selecionando por ID: ', destacado);

// querySelector: seleciona elemento usando seletor CSS
const destacadoSelector = document.querySelector('#destacado');
console.log('Selecionando ID por selecotor CSS: ', destacadoSelector);

// querySelectorAll: seleciona todos os elements que correspondam um seletor CSS
const todosPItens = document.querySelectorAll('.texto-lista');
console.log('Selecionando múltiplos elementos por seletor CSS: ', todosPItens);

// getElementByname;
const inputName = document.getElementsByName('username'); //N/ chama o Name! chama o conteúdo desse atributo
console.log('Selecionando por atributo name (username', inputName);

// querySelectorAll(*): Seleciona todos os elementos no document
const todosElementos = document.querySelectorAll('*');
console.log('Selecionando todos os elementos: ', todosElementos);
