let input1 = document.getElementById('input1');
let botaoAdicionar = document.getElementById('botaoAdicionar');
let listaDeTarefas = document.getElementById('listaDeTarefas');

// function botaoClicado(event) {
//   console.log(input1.value);
//   //   event.preventDefault();
// }

botaoAdicionar.addEventListener('click', function (event) {
  console.log(input1.value);
  //   event.preventDefault();
});

// Criar elemento ao clicar no botão - createElement()
//Se o campo de input n/ é preenchido ==> NÃO CRIA NADA!
// Cria <li> dentro do <ul>

botaoAdicionar.addEventListener('click', function () {
  if (input1.value !== '') {
    let tarefa = document.createElement('li');
    let botaoRemover = document.createElement('button'); //Cria botão
    botaoRemover.textContent = '   Remover tarefa';

    // Fazer o botão apagar a tafefa
    botaoRemover.addEventListener('click', function () {
      // tarefa.appendChild(botaoRemover).remove();
      botaoRemover.parentElement.remove();
      console.log('Tarefa removida');
    });

    tarefa.textContent = input1.value; //tarefa pega o conteúdo de input1
    console.log(tarefa.textContent + ' é o nome da tarefa');

    listaDeTarefas.appendChild(tarefa); //Coloca tarefa (LI) dentro do UL
    tarefa.appendChild(botaoRemover); //Coloca botão dentro da tarefa
    input1.value = ''; //Limpa o campo de input
  }
});
