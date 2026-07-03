function recursividade(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * recursividade(n - 1);
  }
}
console.log(recursividade(5));

//22. Enumerando informações em Objetos

//EX1
const carro = {
  marca: 'VW',
  modelo: 'Gol',
  ano: 2014,
};

//EX2
for (info in carro) {
  console.log(info); //Método iteração: p/ cada item do OBJETO  ==>FOR + IN
}

for (dados in carro) {
  console.log(`${dados}: ${carro[dados]}`); ////Método iteração: p/ cada item do objeto
}

// 23. Enumerando informações em Arrays    ==>FOR + OF
let lista = ['Jean', 'Daniel', 'Luiza', 'Victor'];

for (nome in lista) {
  console.log(nome); //for + IN  ==>índices
}

for (nomes of lista) {
  console.log(nomes); //Método iteração: p/ cada item do ARRAY ==> for + OF
}

// 24. Valores Truthy e Falsy

const varFalsy = 0;

if (varFalsy == false) {
  console.log('é verdade');
}
