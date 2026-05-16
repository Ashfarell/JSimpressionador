// ESCOPO GLOBAL - LOCAL (função)   // BLOCO
// GLOBAL:
let global = 'Hello'; //VAR pode ser utilizada livremente

function print() {
  console.log(global);
}

print();

console.log(global);

// LOCAL
function imprimir() {
  let local = 'hello World'; //VAR local criada dentro da função
  console.log(local);
}

imprimir();

// console.log(local); //ERRO pois local existe apenas dentro da FUNÇão

// BLOCO
if (true) {
  console.log(global);
}
