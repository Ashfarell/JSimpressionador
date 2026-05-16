// split(delimeter[, limit])
let texto = 'maçã banana laranja uvas';
let frutas = texto.split(' '); //delimitador: a cada ocorrência do elemenot ==>cria SUBSTRING
console.log(frutas);

// split + limitar elementos
let frutas2 = texto.split(' ', 3); //delimitador + limite de elementos da lista
console.log(frutas2);

let texto2 = '"maçã""banana""laranja""uva"';
let frutas3 = texto.split('');
console.log(frutas3);

// splice(índice inicial, numeroDeItensARemover, item1....)
frutas.splice(1, 1);
console.log(frutas);

console.log(frutas);

let carro = 'astra, voyage, Gol, 308';
console.log(carro);

let carro2 = carro;
console.log(carro2);
// carro2.splice(0, 2);
console.log(carro);
