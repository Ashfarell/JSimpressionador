function criarElementoInnerText() {
  const ul = document.getElementById('lista-de-elementos'); //Caputura elemento

  const novaLi = document.createElement('li');
  novaLi.innerText = 'Novo Input com InnerText';

  const novoInput = document.createElement('input');

  novaLi.appendChild(novoInput);
  ul.appendChild(novaLi); //pai filho?
}

function criarElementoInnerHtml() {
  const ul = document.getElementById('lista-de-elementos');
  const novaLi = document.createElement('li');

  console.log('Adicionando novo elemento ao clicar');
  novaLi.innerHTML = '<p>Criei um parágrafo novo</p>';
  ul.appendChild(novaLi);
}

function criarElementoTextContent() {
  const ul = document.getElementById('lista-de-elementos');
  const novaLi = document.createElement('li');
  const novoInput = document.createElement('input');

  novaLi.textContent = 'Atribuindo conteúdo TextContent';
  novaLi.appendChild(novoInput);
  ul.appendChild(novaLi);
}

//PROPRIEDADES:
// innerText  - texto - esilização css (elementos ocultos)
// textContent  - texto
// innerHtml   -conteúdo html e texto
