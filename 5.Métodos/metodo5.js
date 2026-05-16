//FUNÇÃO DENTRO DE UM OBJETO
let objeto = {
  nome: 'Jean',
  idade: 25,
  mostrarmensagem: function () {
    //Função dentro do objeto SEM parâmetros
    console.log('Este é um método dentro do objeto');
  },
  apresentar: function (nome, idade) {
    //Função dentro do objeto COM parâmetros
    console.log('Meu nome é ' + nome + ' e tenho ' + idade + ' anos');
  },
};

objeto.mostrarmensagem(); //Chama função dentro do objeto
objeto.apresentar(objeto.nome, objeto.idade); //Chama função dentro do objeto passando parâmetros

console.log(objeto.nome);
objeto.endereco = 'Rua 123';
console.log(objeto);

objeto.nome = 'Maria';
console.log(objeto.nome);

let string = 'Meu nome é Jean';
console.log(string.length);
console.log(string.toUpperCase());

let array = [1, 2, 3, 4, 5];
console.log(array.length);

//OBJETOS PRÉ-DEFINIDOS   ==> OBJEct - KEYS (MÉTODO PARA RETORNAR AS CHAVES DE UM OBJETO)
const produto = {
  nome: 'Camiseta',
  preco: 29.99,
  descricao: 'Camiseta de algodão',
};

Object.keys(produto); //Retorna um array com as chaves do objeto  ==>P/ usar MÉTODOS NATIVOS DO JS p/ OBJETOS
console.log(Object.keys(produto)); //  Keys ==>Traz as PROPRIEDADES DO OBJETO
console.log(Object.values(produto)); // Values ==>Traz os VALORES DO OBJETO
console.log(Object.entries(produto)); // Entries ==>Traz as CHAVES E VALORES DO OBJETO

let loja = {
  nome: 'Ceará',
  produtos: ['Camiseta', 'Calça', 'Tênis'],
  preco: [29.99, 49.99, 89.99],
  apresentacao: function () {
    //Função dentro do objeto SEM parâmetros
    console.log('Bem-vindo à loja ');
  },
  OlaChique: function (nome, produtos) {
    console.log('Olá, somas a loja ' + nome + ' e temos os seguintes produtos: ' + produtos);
  },
};

loja.apresentacao();
loja.OlaChique(loja.nome, loja.produtos);

console.log(Object.keys(loja));
console.log(Object.values(loja));
console.log(Object.entries(loja));

const casa = {
  cor: 'Azul',
  tamanho: 'Grande',
  cidade: 'SP',
  boasVindas: function (cor, tamanho, cidade) {
    console.log('Bem-vindo à minha casa! Ela é ' + cor + ' é do tamanho ' + tamanho + ' e fica na cidade de ' + cidade);
  },
};
casa.boasVindas(casa.cor, casa.tamanho, casa.cidade);

Object.assign(casa, { cor: 'vermelha' }); // assign ==> Método para modificar o valor de uma propriedade do objeto)
casa.boasVindas(casa.cor, casa.tamanho, casa.cidade);

Object.assign(casa, { bairro: 'Centro' }); // assign ==> Método para adicionar uma nova propriedade ao objeto)
console.log(casa.bairro);

console.log(Object.keys(casa));

Object.defineProperty(casa, 'cidade', { value: 'RJ' });
console.log(casa.cidade);

Object.defineProperty(casa, 'bairro', { value: 'Copacabana' });

console.log(Object.values(casa));

const pessoa = {
  nome: 'Jean',
  idade: 25,
  profissao: 'Desenvolvedor',
  cidade: 'Sampa',
};

const pessoa2 = {
  nome: 'Maria',
  idade: 30,
  profissao: 'Designer',
  estado: 'SP',
};

const copia = {};
Object.assign(copia, pessoa, pessoa2);
console.log(copia);

console.log(Object.keys(pessoa));
delete pessoa.cidade;
console.log(Object.keys(pessoa));

const projeto = {
  pais: 'Brasil',
  porte: 'Grande',
  setor: 'Tecnologia',
  Salut: function () {
    console.log('Bonjour');
  },
};

const projeto2 = Object.create(projeto); //Herda as propriedades e métodos do objeto projeto
projeto2.Salut(); //Chama o método Salut do objeto projeto
console.log(projeto2.porte); //Acessa a propriedade porte do objeto projeto através do objeto projeto2

projeto2.objetivo = 'Inovação';
projeto2.prazo = 'Longo';
console.log(projeto2.objetivo); //Acessa a nova propriedade objetivo do objeto projeto2

console.log(Object.keys(projeto2)); //Não retorna as chaves do objeto projeto2, pois elas são herdadas do objeto projeto
console.log(Object.values(projeto2));

console.log(projeto2.hasOwnProperty('objetivo')); //Verifica se a propriedade objetivo pertence ao objeto projeto2
console.log(projeto2.hasOwnProperty('pais)'));
