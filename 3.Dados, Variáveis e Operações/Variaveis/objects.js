// Objeto

let carro = {
  marca: 'xxx',
  ano: '2020',
  versão: 'flex',
  motor: 2.0,
  acessórios: ['banco', 'chave', 'volante'],
};

// console.log(carro);

//Acessar propriedades dentro do Objeto (Chaves)

console.log(carro.ano); //utilizando .
console.log(carro['versão']); //Utilizando []

carro.marca = 'Voyage'; //altera item existente
console.log(carro.marca);

console.log(carro);

carro.seguro = 'Porto'; //Add item novo
console.log(carro.seguro);

let relogio = {
  marca: 'Casio',
  modelo: 'G-shock',
  ano: 2020,
  materialCaixa: 'resina',
};
// console.log(relogio);

relogio.materialCaixa = 'aço'; //altera item existente
console.log(relogio.materialCaixa);

relogio.tech = 'solarT'; //Add item novo
console.log(relogio);

delete relogio.ano; //deleta propriedade
console.log(relogio);

console.log('ano' in relogio); //Verifica se propriedade existe no objeto

let esporte = {
  tipo: 'futebol',
  pais: 'brasil',
  qtdEquipe: 12,
  rank: 2,
};
// console.log(esporte);
esporte.qtdEquipe = 11;
esporte.rei = 'pelé';
console.log(esporte);
