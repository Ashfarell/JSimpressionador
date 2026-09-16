const nome = document.getElementById('nome');
const cpf = document.getElementById('cpf');
const telefone = document.getElementById('telefone');
const cep = document.getElementById('cep');
const rua = document.getElementById('rua');
const numero = document.getElementById('numero');
const complemento = document.getElementById('complemento');
const bairro = document.getElementById('bairro');
const cidade = document.getElementById('cidade');
const estado = document.getElementById('estado');
const botaoAvancar = document.getElementById('botaoAvancar');
const formulario = document.getElementById('primeiroForm');
const mensagensErro = document.getElementById('mensagensErro');

// // A) Validar campos obrigatórios - apenas primeiroForm // Informa todos os campos em BRANCO //CHATO!
// formulario.addEventListener('submit', function (event) {
//   let camposObrigatorios = document.querySelectorAll('.obrigatorio');
//   let camposValidos = true;
//   for (let i = 0; i < camposObrigatorios.length; i++) {
//     if (camposObrigatorios[i].value === '' || camposObrigatorios[i].value === null) {
//       camposValidos = false;
//     }
//   }
//   if (camposValidos === false) {
//     alert('Preencher campos obrigatórios');
//     event.preventDefault(); //apenas executa se tiver campo vazios
//   }
// });

//  *** B) Validar campos obrigatórios - apenas primeiroForm // Informa todos os campos em BRANCO ("e")   ***
// ***                                                                                                  ***
// ARRAY lista TODOS os campos vazios
// formulario.addEventListener('submit', function (event) {
//   let camposObrigatorios = document.querySelectorAll('.obrigatorio');
//   let camposValidos = true;
//   let campoVazio = [];
//   for (let i = 0; i < camposObrigatorios.length; i++) {
//     if (camposObrigatorios[i].value === '' || camposObrigatorios[i].value === null) {
//       campoVazio.push(camposObrigatorios[i].id);
//       camposValidos = false;
//     }
//   }
//   if (camposValidos === false) {
//     console.log(`Preencha o campo ${campoVazio.slice(0, campoVazio.length - 1)} e ${campoVazio[campoVazio.length - 1]} `);
//     //join p/ transforma o conteúdo do array em uma string para apresentação.
//     // Slice + length p/ manipular Array
//     event.preventDefault(); //apenas executa se tiver campo vazios
//   }
// });

//   *** C) Validar campos obrigatórios - apenas primeiroForm //informa apenas 1º campo em branco   ***
// ***                                                                                           ***
// formulario.addEventListener('submit', function (event) {
//   let camposObrigatorios = document.querySelectorAll('.obrigatorio');
//   let camposValidos = true;
//   let campoVazio = [];
//   for (let i = 0; i < camposObrigatorios.length; i++) {
//     if (camposObrigatorios[i].value === '' || camposObrigatorios[i].value === null) {
//       campoVazio.push(camposObrigatorios[i].id);
//       camposValidos = false;
//     }
//   }
//   if (camposValidos === false) {
//     alert(`Preencha o campo ${campoVazio[0]} `);

//     event.preventDefault(); //apenas executa se tiver campo vazios
//   }
// });

//   *** D) Validar campos obrigatórios - apenas primeiroForm //informa apenas 1º campo em branco   + ARRAY ERROS***
// ***                                                                                           ***
formulario.addEventListener('submit', function (event) {
  let erros = [];
  let listaErros = document.createElement('ul'); //CRIA LISTA HTML

  let camposObrigatorios = document.querySelectorAll('.obrigatorio');
  for (let i = 0; i < camposObrigatorios.length; i++) {
    if (camposObrigatorios[i].value === '' || camposObrigatorios[i].value === null) {
      erros.push(camposObrigatorios[i].id);
      let erro = document.createElement('li'); //CRIA ELEMENTO HTML
      listaErros.appendChild(erro); //COLOCA ELEMENTO DENTRO DA LISTA
      erro.textContent = camposObrigatorios[i].id;
    }
  }
  if (erros.length > 0) {
    mensagensErro.textContent = 'Por favor, preencha os campos:';
    mensagensErro.appendChild(listaErros); //COLOCA LISTA DENTRO DE OUTRO ELEMENTO (HTML)
    // console.log(`Por favor preencha os campos: ${erros.slice(0, erros.length - 1)} e ${erros[erros.length - 1]}`);
    // alert(listaErros);
  }

  event.preventDefault();
});

// Validar formato nome
// REGEX: /\d/  ==>0-9
formulario.addEventListener('submit', function validarNome(event) {
  if (/\d/.test(nome.value)) {
    console.log('ERRO FORMATO NOME');
    event.preventDefault();
  }
});

// Validar CPF
formulario.addEventListener('submit', function (event) {
  if (!/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(cpf.value)) {
    console.log('ERRO FORMATO CPF');
    event.preventDefault();
  }
});

// Validar TELEFONE
formulario.addEventListener('submit', function (event) {
  if (!/^\(\d{2}\) \d{1} \d{4}-\d{4}$/.test(telefone.value)) {
    console.log('ERRO FORMATO TELEFONE');
    event.preventDefault();
  }
});

// Validar formato CEP
// REGEX: ⇒/[a-zA-Z]/  a-z // A-Z
// Formato CEP ==>  ^ + \d{5} + - + \d{3} + $
formulario.addEventListener('submit', function validarCep(event) {
  // if (/[a-zA-Z]/.test(cep.value)) {
  //   console.log('ERRO CEP');
  // }
  if (!/^\d{5}-\d{3}$/.test(cep.value)) {
    console.log('ERRO FORMATO CEP');
    event.preventDefault();
  }
});

// Validar formato ESTADO
// REGEX: ^[A-Za-z]{2}$/.test ==>Apenas letra/ Exatamente 2 letras
formulario.addEventListener('submit', function (event) {
  // REGEX: /^\d{5}-\d{3}$/.test          	⇒EXATAMENTE: 5 Nº - 3ºN
  if (!/^[A-Za-z]{2}$/.test(estado.value)) {
    console.log('ERRO FORMATO ESTADO');
    event.preventDefault();
  }
});

// Validar formato RUA, BAIRRO, CIDADE
formulario.addEventListener('submit', function (event) {
  if (rua.value === '' || /^\d+$/.test(rua.value)) {
    console.log('ERRO FORMATO RUA ');
  }

  if (bairro.value === '' || /^\d+$/.test(bairro.value)) {
    console.log('ERRO FORMATO BAIRRO');
  }

  if (cidade.value === '' || /^\d+$/.test(cidade.value)) {
    console.log('ERRO FORMATO CIDADE');
  }
});
