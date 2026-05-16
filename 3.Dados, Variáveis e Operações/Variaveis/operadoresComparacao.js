let a = 2;
let b = 3;
// c/ TRUE or FALSE
console.log(a + b);
console.log((a == b) == true); // == é igual a, ou seja, compara o valor, sem se importar com o tipo
console.log((a != b) == true); // != é diferente de, ou seja, compara o valor, sem se importar com o tipo
console.log(a <= b == true);
console.log((a !== b) == true); // !== é diferente, ou seja, compara o valor e o tipo

// S/ true or FALSE
console.log(a == b);
console.log(a != b);

console.log(5 == '5'); // == compara o valor, sem se importar com o tipo
console.log(5 === '5'); //  === compara o valor e o tipo

console.log(5 != '5'); // != compara o valor, sem se importar com o tipo
console.log(5 !== '5'); // !== compara o valor e o tipo

let senha = 12345;
let senha2 = '12345';
let minhaSenha = senha === senha2;
console.log('Minha senha é : ' + minhaSenha);
