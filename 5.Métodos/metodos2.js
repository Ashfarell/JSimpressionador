let texto = 'Oi amigo';

console.log(texto.toUpperCase());
console.log(texto.toLocaleUpperCase());

// let lista = [5, 10, 20, 30];
// let lista1 = [20, 30, 25, 20];
// console.log(lista);

// console.log(lista[0] + lista1[0]);

//slice (start, end )
console.log(texto.slice(1, 4));
console.log(texto[1]);
console.log(texto[4]);

console.log(texto.slice(-3)); //trás p/ frente

// substring(start, end )    ==>fatiando
console.log(texto.substring(1, 4));

// Replace(search, replaceWith)
console.log(texto.replace('amigo', 'camarada'));
console.log(texto);

let name = 'Hellooooooo';
console.log(name.replace('o', 'teste'));

// indexOf
let msg = 'Hello meu amigo';
console.log(msg.indexOf('Hello'));
console.log(msg.indexOf('meu'));
console.log(msg.indexOf('amigo'));
console.log(msg[9]);
console.log(msg[10]);
console.log(msg[11]);
