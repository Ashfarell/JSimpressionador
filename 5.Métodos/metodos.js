const pessoa = {
  nome: 'Jean',
  idade: 35,
  msg: function () {
    console.log(`Hello ${pessoa.nome}`);
  },
};

console.log(pessoa.nome);
pessoa.msg(); //n/ usei console.log porque a função já tem

//Função com RETURN   - S/ PARÂMETRO
const pessoa2 = {
  nome: 'Juan',
  idade: 40,
  msg2: function () {
    return console.log(`Hello ${pessoa2.nome}`);
  },
};

console.log(pessoa2.msg2('dhahd'));

//Função C/ PARÂMETRO
const pessoa3 = {
  nome: 'Lucas',
  idade: 40,
  msg3: function () {
    return `Hello ${pessoa3.nome}`;
  },
};

console.log(pessoa3.msg3('Ana')); // como n/ tem parâmetro na função msg, n/ imprime o nome que coloco aqui!

//
const pessoa4 = {
  nome: 'Diogo',
  idade: 45,
  saudacao: function (nome4) {
    return `Hello ${nome4}`;
  },
};

console.log(pessoa4.saudacao('Igor'));
