function somar(a, b) {
  a = a + b;
  return a;
}
// VAR N/ MUDA DE VALOR
pars1 = 10;
pars2 = 50;

console.log(somar(pars1, pars2));
console.log(pars1);

// 6. Passagem por valor vs Passagem por referência

let obj1 = {
  value: 5,
};

let obj2 = {
  value: 10,
};

function somarObjeto(a, b) {
  a = a + b;
  return a;
}

console.log(somarObjeto(obj1.value, obj2.value));
console.log(obj1);

//OBJETO MUDA DE VALOR
let obj3 = {
  value: 20,
};

let obj4 = {
  value: 30,
};

function somarObjetoB(obj1, obj2) {
  obj1.value = obj1.value + obj2.value;
  return obj1.value;
}

console.log(somarObjetoB(obj3, obj4));

console.log(obj3);
