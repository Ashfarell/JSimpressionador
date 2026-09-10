// OBJETOS
// formData //OBJ: simplificar o envio do FORM via JS  (enviar dados p/ servidor?)
// FormData - { nome: 'Jean', email: 'eu@gmail.com' };
// INPUT precisa ter "NAME"

document.addEventListener('DOMContentLoaded', function () {
  const formulario = document.getElementById('meuFormulario');

  // o que quero? obter os dados do formulário
  formulario.addEventListener('submit', function (event) {
    event.preventDefault(); //impede a submissão tradicional do formulário

    let dados = new FormData(formulario); //será aplicado no formulario

    // Exibir dados no console
    // dados.entries ==>Me dê os pares de dados que você armazenou
    for (let [chave, valor] of dados.entries()) {
      console.log(chave + ': ' + valor);
    }
  });
});
