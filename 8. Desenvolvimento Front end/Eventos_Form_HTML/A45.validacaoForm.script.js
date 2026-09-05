document.addEventListener('DOMContentLoaded', function () {
  const formulario = document.getElementById('meuFormulario');

  formulario.addEventListener('submit', function (event) {
    if (!validarCamposObrigatorios()) {
      event.preventDefault(); //impede a submissão do form se houver erros
    }

    function validarCamposObrigatorios() {
      // Usando ARRAY p/ percorrer lista de campos obrigatórios
      // pegando item com CLASS

      let camposObrigatorios = document.querySelectorAll('.obrigatorio');
      let camposValidos = true;

      for (let i = 0; i < camposObrigatorios.length; i++) {
        let campo = camposObrigatorios[i];
        if (campo.value === '' || campo.value === null) {
          console.log('ERRO');
          camposValidos = false;
        }
      }

      console.log(camposValidos);
      return camposValidos;
    }
  });
});
