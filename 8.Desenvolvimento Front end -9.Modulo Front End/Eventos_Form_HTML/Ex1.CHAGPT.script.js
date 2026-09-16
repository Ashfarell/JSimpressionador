//Função quando passa o mouse em "NOME"
// function focoNome() {
//   document.getElementById('nome').style.color = 'blue';
//   console.log('Mouse em cima do campo "NOME"');
// }

// function tirarFocoNome() {
//   document.getElementById('nome').style.color = 'black';
//   console.log('Mouse fora do campo "NOME"');
// }

// Função para exibir msg ao trocar a CIDADE
function trocarCidade() {
  document.getElementById('cidade');
  console.log('cidade alterada (função): ' + cidade.value);
}

// Função p/ exibir Msg ao enviar o formulário (Submit)
// function formularioEnviado() {
//   console.log('Formulário enviado');
//   alert('Formulário enviado!');
// }

// Definindo VAR por ID
let textoNome = document.getElementById('textoNome');
let nome = document.getElementById('nome');
let cidade = document.getElementById('cidade');
let enviar = document.getElementById('enviar');
let formulario = document.getElementById('formulario');
let email = document.getElementById('email');
let senha = document.getElementById('senha');
let confirmarSenha = document.getElementById('confirmarSenha');
let idade = document.getElementById('idade');
let checkbox1 = document.getElementById('checkbox1');
let radio1 = document.getElementById('radio1');

// Evento p/ mudar cor do texto do campo NOME (input)
textoNome.addEventListener('focus', function () {
  textoNome.style.color = 'red';
  nome.style.color = 'red';
  console.log('Campo nome focado');
});

// Evento p/ mudar cor quando sair do campo NOME (input)
textoNome.addEventListener('blur', function () {
  textoNome.style.color = 'black';
  nome.style.color = 'black';
  console.log('Campo nome desfocado');
});

// Texto o/ troca de CIDADE
cidade.addEventListener('change', function () {
  console.log('Cidade alterada para: ' + cidade.value);
});

// Msg ao enviar o formulário (Submit) +prevent p/ navegador n/ recarregar a página
// Importante que o evento seja do FORMULÁRIO!!!!! N/ da página!!!!
// formulario.addEventListener('submit', function (event) {
//   event.preventDefault();
//   alert('Formulário enviado! (com addEvent)');
//   console.log('Formulário enviado!');
// });

// Verificar se NOME está preenchido
// formulario.addEventListener('submit', function (event) {
//   if (textoNome.value === '') {
//     console.log('ERRO');
//     event.preventDefault();
//   }
// });

// Verificar campos vazios ao enviar o formulário
formulario.addEventListener('submit', function (event) {
  if (textoNome.value === '' || email.value === '' || senha.value === '' || idade.value === '') {
    console.log('ERRO de um desses campos');

    if (textoNome.value === '') {
      alert('Favor preencher o campo: nome');
    } else if (email.value === '') {
      alert('Favor preencher o campo: email');
    } else if (senha.value === '') {
      alert('Favor preencher o campo: senha');
    } else if (idade.value === '') {
      alert('Favor preencher o campo: idade');
    } else {
      event.preventDefault();
      alert('Formulário enviado!');
      console.log('Formulário enviado!');
    }
  } else {
    event.preventDefault();
    alert('Formulário enviado!');
    console.log('Formulário enviado!');
  }
  event.preventDefault();
});

// Verificar CHECKBOX vazio
// if (!checkbox1.checked) {
//   alert('Preencher checkbox!');
//   console.log('Checkbox vazio');
// }

// // Verificar RADIO vazio
// if (!radio1.checked) {
//   alert('Preencher RADIO!!');
//   console.log('Radio vazio');
// }

// Verificar CHECKBOX e RADIO vazios
formulario.addEventListener('submit', function (event) {
  if (!checkbox1.checked || !radio1.checked) {
    console.log('Checkbox ou radio vazio');
    alert('Favor preencher o checkbox/radio');
    event.preventDefault();
  }
});

// keydown + event.key   ==>mostra tecla pressionada
document.addEventListener('keydown', function () {
  console.log(event.key);
});

// // Impedir "ENTER" no campo NOME
// textoNome.addEventListener('keydown', function (event) {
//   if (event.key === 'Enter') {
//     event.preventDefault();
//     alert('Não pressionar "ENTER"');
//   }
// });

// keydown + event.key ==>ENTER + BACKSPACE
// textoNome.addEventListener('keydown', function (event) {
//   if (event.key === 'Enter') {
//     console.log('Enter pressionado');
//   } else if (event.key === 'Backspace') {
//     console.log('Apagando');
//   }
//   // event.preventDefault();          //DESATIVADO ou bloqueia todas as teclas!!
// });

//keydown + event.key ==>Contar teclas pressionadas
let contador = 0;
textoNome.addEventListener('keydown', function (event) {
  if (event.key !== '') {
    contador++;
    // event.preventDefault();
  }
  console.log(contador);
});

// Verificar se senhas são iguais
document.addEventListener('submit', function (event) {
  if (senha !== confirmarSenha) {
    alert('As senhas são diferentes');
  }
});
