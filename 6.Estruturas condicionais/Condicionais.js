const pessoa = { nome: 'Jean', idade: 38, estado: 'RJ', tipo: 'branco' };

if (pessoa.idade >= 18) {
  console.log('Você é maior de idade');
}

if (pessoa.idade >= 18 && pessoa.estado === 'SP') {
  console.log('OK');
} else {
  console.log('NOK');
}

if ((pessoa.idade >= 18) | (pessoa.estado === 'SP')) {
  console.log('OK');
} else {
  console.log('NOK');
}
