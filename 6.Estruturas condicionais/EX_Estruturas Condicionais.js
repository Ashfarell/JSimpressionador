// Exercício 1: Verificação de Desconto
function verificaDesconto(compra) {
  if (compra >= 100) {
    compra = compra - compra * 0.1;
    console.log(`'O cliente tem direito a 10% de desconto'. O valor final é de:  R$${compra}.`);
  } else {
    console.log(`'O cliente não tem direito a 10% de desconto. O valor final é de: R$${compra}.`);
  }
}
console.log('EX1 A)');
verificaDesconto(1000);

console.log('EX1 B)');

function verificarDesconto2(compra) {
  let compraFinal = 0;
  let desconto = 0;

  if (compra >= 100) {
    compraFinal = compra - compra * 0.1;
    desconto = compraFinal - compra;
    console.log(`O cliente tem direito a um desconto de 10%. O preço final é de R$${compraFinal} e o desconto é de R$${-desconto}.`);
  } else {
    console.log(`O cliente não tem direito a desconto. O valor final é de R$${compra}.`);
  }
}

verificarDesconto2(100);

console.log('Fim EX1--------------------------------------------------------------------');

// Exercício 2: Verificação de Produto em Estoqu
function verificarEstoque(qtdCompra) {
  let estoque = 20;
  if (qtdCompra > estoque) {
    console.log(`Quantidade não disponível. O estoque atual é de ${estoque}.`);
  } else {
    console.log(`Produto em estoque. Quantidade disponível ${estoque}.`);
  }
}

verificarEstoque(20);
console.log('Fim EX2--------------------------------------------------------------------');

// Exercício 3: Determinação de Categoria de Cliente
function categoriaCliente(pontuacao) {
  if (pontuacao >= 85) {
    console.log(`Cliente Premium`);
  } else if (pontuacao >= 50 && pontuacao < 85) {
    console.log(`Cliente Regular`);
  } else {
    console.log(`Cliente Comum`);
  }
}
console.log('EX3 A)');
categoriaCliente(85);

//B - SEM Parâmetro ==> MATH.RANDOM
function categoriaClienteB() {
  let pontuacao = Math.floor(Math.random() * 101); //MATH.floor + MATH.random
  if (pontuacao >= 85) {
    console.log(`Cliente Premium`);
  } else if (pontuacao >= 50 && pontuacao < 85) {
    console.log(`Cliente Regular`);
  } else {
    console.log(`Cliente Comum`);
  }
}
console.log('EX3 B)');
categoriaClienteB();

console.log('Fim EX3--------------------------------------------------------------------');

// Exercício 4: Classificação de Desempenho de Vendas   //   >99 EXC //99-90 MB //80-89 BD // 61-79 DS // <60 DI
let equipe4 = [
  { nome: 'Bruno', idade: 35, time: 'água', salario: 10000, disponível: true, desempenho: 92 }, //PRINT nome dos funcionários conforme CATEGORIA listada
  { nome: 'JB', idade: 27, time: 'terra', salario: 8000, disponível: false, desempenho: 85 },
  { nome: 'Joana', idade: 42, time: 'mar', salario: 7500, disponível: true, desempenho: 55 },
  { nome: 'Jorge', idade: 35, time: 'água', salario: 12000, disponível: false, desempenho: 45 },
  { nome: 'Daniel', idade: 27, time: 'terra', salario: 5000, disponível: true, desempenho: 28 },
  { nome: 'Márcio', idade: 42, time: 'mar', salario: 3000, disponível: false, desempenho: 65 },
];

function desempenhoIndividualDeVendas(lista) {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i].desempenho > 99) {
      console.log(`Vendedor: ${lista[i].nome}. Seu desempenho foi de ${lista[i].desempenho}: Excelente desempenho`);
    } else if (lista[i].desempenho >= 90 && lista[i].desempenho < 100) {
      console.log(`Vendedor: ${lista[i].nome}. Seu desempenho foi de ${lista[i].desempenho}: Muito bom desempenho`);
    } else if (lista[i].desempenho >= 80 && lista[i].desempenho < 90) {
      console.log(`Vendedor: ${lista[i].nome}. Seu desempenho foi de ${lista[i].desempenho}: Bom desempenho`);
    } else if (lista[i].desempenho >= 61 && lista[i].desempenho < 80) {
      console.log(`Vendedor: ${lista[i].nome}. Seu desempenho foi de ${lista[i].desempenho}: Desempenho satisfatório`);
    } else {
      console.log(`Vendedor: ${lista[i].nome}. Seu desempenho foi de ${lista[i].desempenho}: Desempeho insatisfatório`);
    }
  }
}
desempenhoIndividualDeVendas(equipe4);

console.log('Fim EX4--------------------------------------------------------------------');

// Exercício 5: Verificação de Velocidade
function verificarVelocidade(velocidade) {
  velocidade <= 80 ? console.log(true) : console.log(false);
}

verificarVelocidade(75);
console.log('Fim EX5--------------------------------------------------------------------');

// Exercício 6: Semáforo de Trânsito
function mensagemSemaforo(cor) {
  return cor === 'verde' ? 'Avançar' : cor === 'amarelo' ? 'Reduzir' : cor === 'vermelho' ? 'Parar' : 'Cor inválida';
}

console.log(mensagemSemaforo('amarelo'));
console.log('Fim EX6--------------------------------------------------------------------');

// Exercício 7: Prioridade no Trânsito
function coresDoSemaforo(cor) {
  switch (cor) {
    case 'verde':
      console.log('Avançar');
      break;

    case 'amarelo':
      console.log('Reduzir');
      break;
    case 'vermelho':
      console.log('Parar');
      break;
  }
}
coresDoSemaforo('amarelo');
console.log('Fim EX7--------------------------------------------------------------------');

// Exercício 8: Verificação de Placa de Veículo
function verificarPlaca(placa) {
  switch (placa) {
    case 1:
    case 2:
      console.log('Segunda-feira: Não pode circular');
      break;

    case 3:
    case 4:
      console.log('Terça-feira: Não pode circular');
      break;

    case 5:
    case 6:
      console.log('Quarta-feira: Não pode circular');
      break;

    case 7:
    case 8:
      console.log('Quinta-feira: Não pode circular');
      break;
    case 9:
    case 0:
      console.log('Sexta-feira: Não pode circular');

    default:
      console.log('Veículo autorizado a circular');
  }
}

verificarPlaca(6);
console.log('Fim EX8--------------------------------------------------------------------');

console.log(Math.random());

console.log(Math.random() * 10);

console.log(Math.floor(Math.random() * 10));

console.log(Math.floor(Math.random() * 100));
