function validarFormulario() {
  // Obter o valor do campo de texto
  const campoTexto = document.getElementById('campoTexto');
  let valorCampo = campoTexto.value;

  //   Verificar se o campo de texto está vazio ou não

  if (valorCampo === '') {
    alert('Por favor preencha o campo de texto!');
    return false; //Impede a submissão
  } else {
    return true; //permite a submissão
  }
}
