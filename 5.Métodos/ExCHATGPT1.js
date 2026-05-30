//Exercício 1 — Decrèscimo Percentual
function calcularDescont(valor, desconto) {
  return valor - (valor * desconto) / 100;
}

console.log(calcularDescont(1000, 10));

//Exercício 2 — Acréscimo Percentual
function calcularAumento(valor, aumento) {
  return valor + (valor * aumento) / 100;
}

console.log(calcularAumento(1000, 10));

//Exercício 3 — Comissão de Vendas
function calcularComissao(valorVenda, percentualComissao) {
  return (valorVenda * percentualComissao) / 100;
}

console.log(calcularComissao(10000, 5));

//Exercício 4 — Valor com Imposto
function calcularValorComImposto(valorProduto, percentualImposto) {
  return valorProduto + (valorProduto * percentualImposto) / 100;
}

console.log(calcularValorComImposto(1000, 10));

//Exercício 5 — Desconto + Imposto
function calcularPrecoFinal(valorProduto, percentualDesconto, percentualImposto) {
  const precoDesconto = valorProduto - (valorProduto * percentualDesconto) / 100; //Criando CONST dentro da função
  return precoDesconto + (precoDesconto * percentualImposto) / 100;
}

console.log(calcularPrecoFinal(1000, 10, 5));

//Exercício 6 — Bônus de Funcionário
function calcularSalarioFinal(salarioBase, percentualBonus) {
  if (percentualBonus > 20) {
    return salarioBase + (salarioBase * 20) / 100; //Usando IF + RETURN
  } else {
    return salarioBase + salarioBase * (percentualBonus / 100);
  }
}

console.log(calcularSalarioFinal(1000, 10));

// Exercício 7 — Frete Grátis
function calcularValorPedido(valorProduto, valorFrete) {
  if (valorProduto >= 200) {
    return valorProduto;
  } else {
    return valorProduto + valorFrete;
  }
}

console.log(calcularValorPedido(180, 50));

// Exercício 8 — Desconto por Faixa
