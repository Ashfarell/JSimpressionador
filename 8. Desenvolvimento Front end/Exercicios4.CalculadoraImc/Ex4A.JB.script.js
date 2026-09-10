// Versão A onclick + FUNÇÃO
document.addEventListener('DOMContentLoaded', function () {});

let form = document.getElementById('calc-form');
let name = document.getElementById('name');
let altura = document.getElementById('altura');
let peso = document.getElementById('peso');
let categoriaImcHidden = document.getElementById('categoriaImcHidden');

let resultado = document.getElementById('resultado');

// Validando campos obrigatórios c/ FUNÇÃO:
// VAR camposValidos !!!!
function validarCamposObrigatorios(event) {
  let camposValidos = true;
  let camposObrigatorios = document.querySelectorAll('.obrigatorio');
  let IMC = 0;

  // Criando VAR p/ ajustar altura em m:
  let alturaAjustada = altura.value;
  if (altura.value > 3) {
    alturaAjustada = altura.value / 100;
  } else {
    alturaAjustada = altura.value;
  }

  // Verificando campos vazios
  // VAR camposValidos !!!!
  for (let i = 0; i < camposObrigatorios.length; i++) {
    if (camposObrigatorios[i].value === '' || camposObrigatorios[i].value === null) {
      alert('Preencher campos obrigatórios');
      console.log('Campos vazios');
      camposValidos = false;
    }
  }
  // Calculando IMC
  if (camposValidos) {
    IMC = peso.value / (alturaAjustada * alturaAjustada);

    // Determinando categoria IMC + cor RESULTADO:
    let categoriaIMC;
    if (IMC < 18.5) {
      categoriaIMC = 'Abaixo do peso';
      resultado.style.backgroundColor = 'white';
    } else if (IMC >= 18.5 && IMC < 25) {
      categoriaIMC = 'Peso normal';
      resultado.style.backgroundColor = 'green';
    } else if (IMC >= 25 && IMC < 30) {
      categoriaIMC = 'Sobrepeso';
      resultado.style.backgroundColor = 'red';
    } else if (IMC >= 30) {
      categoriaIMC = 'Obesidade';
      resultado.style.backgroundColor = 'brown';
    }

    event.preventDefault();
    // alert(name.value + ', seu IMC é de : ' + IMC + '- ' + categoriaIMC);
    if (camposValidos) {
      console.log(IMC + '- ' + categoriaIMC);
    }

    // Alterando o campo 'RESULTADO"
    if (camposValidos) {
      resultado.textContent = name.value + ', seu IMC é de ' + IMC.toFixed(2) + ' e sua categoria é: ' + categoriaIMC;
    } else {
      resultado.textContent = 'Preencher campos obrigatórios';
      resultado.style.color = 'red';
    }

    // categoriaImcHidden ==>N/ aparece p/ usuário!
    categoriaImcHidden.value = categoriaIMC;
    if (camposObrigatorios) {
      console.log(categoriaImcHidden.value);
    }

    // Pegando dados com FORMDATA   ==>Requer "NAME" no HTML
    let dados = new FormData(form);

    for (let [chave, valor] of dados.entries()) {
      console.log(chave + ' ' + valor);
    }
  }
}

// form.addEventListener('submit', function (event) {
//   console.log('enviado');
//   event.preventDefault();
//   // if (name.value === '') {
//   //     alert('Campo vazio, favor preencher');
//   //   }
// });
