// && (AND ) - ambas as condições são verdadeiras
let idade = 20;
let codigoPromo = true;

//1º forma && ==>Var
let acessoOk = idade > 18 && codigoPromo == true;
console.log(acessoOk); // true

// 2º forma && ==> condicional
if (idade > 18 && codigoPromo == true) {
  console.log('Acesso permitido');
}

// || (OR) - uma das condições é verdadeira
let idade2 = 19;
let codigoPromo2 = false;
let acessoOk2 = idade2 > 18 || codigoPromo2 == true;
console.log(acessoOk2);

// ! (NOT) - nega a condição
console.log('Negação de uma condição:');
let perfiConfigurado = !false; //Inverte o valor de false para true

let alerta = !perfiConfigurado; // Inverte o valor de perfiConfigurado para false
console.log(alerta); // true

//Test JB
console.log('Testando operadores lógicos:');
let sucesso = !true;

let checking = sucesso;
console.log(sucesso); // true
