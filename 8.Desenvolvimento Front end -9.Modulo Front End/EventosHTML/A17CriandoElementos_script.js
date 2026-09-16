function criarElemento() {
  const ul = document.getElementById('lista-de-elementos'); //Caputura elemento

  const body = document.getElementsByTagName('body');
  //   console.log(ul);

  const novaLi = document.createElement('li');

  const novoInput = document.createElement('input');

  console.log('Adicionando novos inputs e lis');

  novaLi.appendChild(novoInput);

  ul.appendChild(novaLi); //pai filho?
}
