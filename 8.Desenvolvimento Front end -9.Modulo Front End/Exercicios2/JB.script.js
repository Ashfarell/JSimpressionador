function addTask() {
  //addTask() é a função responsável por pegar o que o usuário digitou e transformar aquilo em uma nova tarefa dentro da lista.
  // console.log(elementoLista);
  let armazenar = document.getElementById('taskInput').value; //PASSO 2

  if (armazenar === '') {
    alert('Insira uma atividade'); //ALERT ==>MSG p/ USER    //PASSO 2 + PASSO 8
  } else {
    alert(`Atividade '${armazenar}' inserida com sucesso`) + console.log('Ok');

    // /PASSO 3 Criamos LI
    let elementoLista = document.createElement('li'); //(apenas cria LI na memória)
    elementoLista.innerText = armazenar; //Pega o texto do input
    // console.log(elementoLista); //Opcional PASSO 3

    // PASSO 4 Criamos o Botão
    let botaoDeletar = document.createElement('button'); // (apenas cria BOTÃO na memória)
    botaoDeletar.id = 'remover'; //P/ editar no CSS
    // Para ele aparecer na página, precisamos anexá-lo a algum elemento que já esteja no HTML.
    botaoDeletar.textContent = 'Remover tarefa';

    // Dizemos o que o botão faz
    botaoDeletar.onclick = function () {
      botaoDeletar.parentElement.remove(); //PARENTELEMNT + REMOVE
    };

    // Conectamos os elementos na página
    elementoLista.appendChild(botaoDeletar); //==>Cria botaoDeletar dentro do elementoLista
    taskList.appendChild(elementoLista);

    // Limpa o campo INPUT
    document.getElementById('taskInput').value = ''; //PASSO 7
  }
}

// let taskInput = document.getElementById('taskInput');
// let taskList = document.getElementById('taskList');
