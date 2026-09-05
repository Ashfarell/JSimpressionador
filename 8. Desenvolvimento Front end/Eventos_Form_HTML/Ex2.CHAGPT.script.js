let meuFormulario = document.getElementById('meuFormulario');

let nome = document.getElementById('nome');
let email = document.getElementById('email');
let senha = document.getElementById('senha');
let confirmarSenha = document.getElementById('confirmarSenha');
let idade = document.getElementById('idade');
let dataNascimento = document.getElementById('dataNascimento');
let camposObrigatorios = document.querySelectorAll('.obrigatorio'); //querySelectorAll

let camposValidos = true; //VAR de CTRL!!!

meuFormulario.addEventListener('submit', function (event) {
  // VERIFICANDO CAMPOS VAZIOS (FORMA LENTA)
  //   if (
  //     nome.value === '' ||
  //     email.value === '' ||
  //     senha.value === '' ||
  //     confirmarSenha.value === '' ||
  //     idade.value === '' ||
  //     dataNascimento.value === ''
  //   ) {
  //     console.log('ERRO');
  //   } else {
  //     console.log('Formulário enviado');
  //   }

  // VERIFICANDO CAMPOS VAZIOS (FORMA COM querySelectorAll)
  for (let i = 0; i < camposObrigatorios.length; i++) {
    let campo = camposObrigatorios[i];
    if (campo.value === '' || campo.value === null) {
      console.log('ERRO1');
      camposValidos = false; //VAR de CTRL!!! Se virar FALSE, N/ volta p/ TRUE
    }
  }
  if (camposValidos) {
    alert('Formulário enviado');
    console.log('Formulário enviado'); //Se virou FALSE alguma vez, nunca EXECUTA!!!
  } else {
    console.log('ERRO CONFIRMADO');
  }
  event.preventDefault();
});

// Verificar campos obrigatórios
