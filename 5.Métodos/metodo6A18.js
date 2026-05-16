const calculadora = {
  //calculadora = OBJETO
  valor1: 0, //valor1==>PROPRIEDADE
  valor2: 0,

  definirValores: function (v1, v2) {
    ((calculadora.valor1 = v1), //Método p/ atualizar os valores ==>objeto mais dinâmico
      (calculadora.valor2 = v2)); //valor1 pega valor de V1
  },
  somar: function () {
    return this.valor1 + this.valor2; //usando this. (ao invés de calculadora.valor1)
  }, //this. faz referência ao OBJETO Calculadora
  subtrair: function () {
    return calculadora.valor1 - calculadora.valor2;
  },
  multiplicar: function () {
    return calculadora.valor1 * calculadora.valor2;
  },
  dividir: function () {
    return calculadora.valor1 / calculadora.valor2;
  },
};

//Exemplo de uso
calculadora.definirValores(10, 2);
console.log(calculadora.somar());
console.log(calculadora.multiplicar());

//Função criada FORA do OBJETO calculadora
calculadora.exponenciacao = function () {
  return this.valor1 ** this.valor2; //função como MÉTODO do objeto calculadora.
};
console.log(calculadora.exponenciacao());
