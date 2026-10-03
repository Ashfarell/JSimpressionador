function tarefaAssincrona(callback) {
  setTimeout(() => {
    console.log('Tarefa concluída');
    callback('Resultado da tarefa');
  }, 2000);
}

console.log('Inicio da Execução');

//Chama função assícrona e passa um callback para ser exectuado após 2 seg
tarefaAssincrona((resultado) => {
  console.log(resultado);
});

console.log('Fim da execução');
