// //
// let listaA = [5, 3, 2, 5, 2]; //listaA n/ é o Array em si, apenas o "endereço" p/ o Array na memória
// let listaB = listaA; //  REFERÊNCIA:  Lista B = Lista A

// listaB[0] = 100; //Alterando Lista B
// console.log(listaB);
// console.log(listaA);

// listaB = [100, 200, 300, 400]; //REATRIBUIÇÃO ==>B novo Array, n/ altera A
// console.log(listaB);
// console.log(listaA);

// let boasVindas = 'olá'; //não é alterado por msg
// let msg = boasVindas;
// msg = 'Bom dia';
// console.log(msg);
// console.log(boasVindas);

// let objA = { nome: 'Jean' };
// let objB = objA;
// // console.log(objA);
// // console.log(objB);

// objB.idade = 34;
// console.log(objA);
// console.log(objB);

let lojaA = [5, 10, 53, 3223];
let lojaB = [...lojaA];
// console.log(lojaB);

lojaB[0] = 500;
console.log(lojaB);
console.log(lojaA);

let escolaA = { nome: 'Dante' };
let escolaB = { ...escolaA };

// console.log(escolaA);
// console.log(escolaB);

escolaB.regiao = 'SP';
console.log(escolaA);
console.log(escolaB);
