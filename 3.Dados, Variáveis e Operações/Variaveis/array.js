// Array   - REFERÊNCIA - Mutável
let lista = ['maçã', 'banana', 'laranja'];
console.log(lista);
console.log(lista[0]);
console.log('A arrray tem ' + lista.length + ' itens');

lista[2] = 'uva'; //alterando o valor do índice 2 (laranja) para 'uva'
console.log(lista);

// Tipo PRIMITIVO - Imutável
let nome = 'Jean';
console.log(nome[0]);
console.log((nome[0] = 'B')); //tentando alterar o primeiro caractere da string (J) para 'B' - isso não é permitido, strings são imutáveis
console.log(nome); //  o valor de 'nome' permanece inalterado, pois strings são imutáveis
