const lista = document.getElementById('list'); //Usando como VAR GLOBAL

function adicionarItem() {
  //   const lista = document.getElementById('list');
  const novaLi = document.createElement('li');
  novaLi.textContent = 'Novo item';

  lista.appendChild(novaLi);
}

function removerItem() {
  //   const lista = document.getElementById('list');
  const ultimoItem = lista.lastElementChild;

  lista.removeChild(ultimoItem);
}
