//  Test Pitagoras
let primeiroCateto = document.getElementById('primeiroCateto');
let segundoCateto = document.getElementById('segundoCateto');
let calcular = document.getElementById('calcular');
let campoDeResultado = document.getElementById('campoDeResultado');

calcular.addEventListener('click', function (event) {
  //                      VERIFICANDO CAMPOS VAZIOS
  if (primeiroCateto.value === '' || segundoCateto.value === '') {
    alert('Favor preencher os dois campos');
    return; //             ENCERRA A FUNÇÃO!
  }
  //                        VERIFICANDO Nº NEGATIVOS
  if (primeiroCateto.value <= 0 || segundoCateto.value <= 0) {
    alert('Favor preencher com números positivos');
    return;
  }

  //                  CRIANDO CAMPO DE RESULTADO
  let resultado = document.createElement('h2');
  //                CÁLCULO HIPOTENUSA
  primeiroCateto = primeiroCateto.value * primeiroCateto.value;
  segundoCateto = segundoCateto.value * segundoCateto.value;
  let soma = primeiroCateto + segundoCateto;
  let hipotenusa = Math.sqrt(soma).toFixed(2);
  console.log(hipotenusa);
  //                  DEFININDO TEXTO DO CAMPO CRIADO
  resultado.textContent = `A hipotenusa é ${hipotenusa}`;

  //                  DEFININDO LOCAL DOCAMPO CRIADO
  campoDeResultado.appendChild(resultado);

  //                     APAGANDO OS CAMPOS DE INPUT
  event.preventDefault();
  document.getElementById('primeiroCateto').value = '';
  document.getElementById('segundoCateto').value = '';
});

// 1) Pq quando coloco 'submit' ao invés de 'click' dá erro?
//2) Pq depois de rodar uma vez o resultado é NAN?
// 3)Pq quando tento apagar o campo de preenchimento com a var n/ funciona? Apenas funcionar se usar document.get...id()
