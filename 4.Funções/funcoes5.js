// Funções de ALTA ORDEM
//A)Recebem uma ou + funções como PARÂMETRO
function aplicarOperacao(x, operacao) {
  //Fução de ALTA ORDEM
  return operacao(x);
}

function dobrar(numero) {
  return numero * 2;
}

const resultado = aplicarOperacao(5, dobrar);
console.log(resultado);

//B)Recebem uma função como resultado
function criarIncrementador(incremento) {
  return function (numero) {
    //Função ANÔNIMA  (sem nome)
    return numero + incremento;
  };
}

const incrementoPor2 = criarIncrementador(2); //  cria a função   ==>isso já executa a função "criarIncremtador"

console.log(incrementoPor2(5)); //não executa a função ==>apenas mostra o resultado

// const resultado2 = incrementoPor2(5); // executa a função
// console.log(incrementoPor2);
