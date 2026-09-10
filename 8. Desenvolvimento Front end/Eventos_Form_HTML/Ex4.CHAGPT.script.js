let listaDeTarefas = document.getElementById('listaDeTarefas');
let input1 = document.getElementById('input1');
let botaoAdicionar = document.getElementById('botaoAdicionar');

// 1 função p/ mudar a cor ao passar e tirar o mouse
// function mouseEmCima(cor) {
//   listaDeTarefas.style.color = cor;
//   //   console.log('mouse em cima');
// }

// input1.addEventListener('click', function (event) {
//   console.log('campo clicado');
// });

// Criando nome da tarefa ao clicar no botão
botaoAdicionar.addEventListener('click', function (event) {
  if (input1.value !== '') {
    let tarefa = document.createElement('li');
    tarefa.textContent = input1.value;
    listaDeTarefas.appendChild(tarefa);

    // Limpando o campo input após ser preenchido
    input1.value = '';
    ('');
    // Criando botão REMOVER
    let botaoRemover = document.createElement('button');
    botaoRemover.textContent = 'Remover tarefa';
    tarefa.append(botaoRemover);
    botaoRemover.id = 'botaoRemover'; //Criando ID p/ campo criado

    // Criando botão CONCLUIR
    let botaoConcluir = document.createElement('button');
    botaoConcluir.textContent = 'Concluir';
    tarefa.appendChild(botaoConcluir);
    botaoConcluir.id = 'botaoConcluir'; //Criando ID p/ campo criado

    // botão CONCLUIR==> ClassList ==>cria CLASSE p/ CSS (ADD)  - Toggle ativa e desativa
    botaoConcluir.addEventListener('click', function () {
      tarefa.classList.add('concluida');
    });

    // botão DESFAZER
    let botaoDesfazer = document.createElement('button');
    botaoDesfazer.textContent = 'Desfazer';
    tarefa.appendChild(botaoDesfazer);

    // Botão DESFAZER ==>ClassList ==>   REMOVE   -- Toggle ativa e desativa
    botaoDesfazer.addEventListener('click', function () {
      tarefa.classList.remove('concluida');
    });

    // Criando utilidade p/ o botão REMOVER
    botaoRemover.addEventListener('click', function () {
      botaoRemover.parentElement.remove();
      console.log('tarefa removida');
    });
  }
});

// Função p/ pegar teclas clicadas
input1.addEventListener('keydown', function () {
  console.log(event.key);
  if (event.key === 'Enter') {
    console.log('Enter pressionado');
  }
});

// input1.addEventListener('keydown', function (event) {
//   if (event.key === 'Enter') {
//     event.preventDefault();
//     console.log('N/ pressionar ENTER');
//   }
// });
