// 🟢 Fase 1 — Aquecimento (10 exercícios)
// Aqui eu verifico:
// if/else
// for
// funções
// arrays
// objetos

// Nível: fácil.

// Exercício 1 — Total das Compras 🛒
// Uma loja possui os seguintes preços:
// const compras = [120, 80, 250, 40, 60];
// Crie a função:  calcularTotal(compras)
// que retorne: 550

const compras1 = [120, 80, 250, 40, 60];

function calcularTotal(lista) {
  let soma = 0;
  for (let i = 0; i < lista.length; i++) {
    soma += lista[i];
  }
  return soma;
}
console.log(calcularTotal(compras1));

console.log('Fim EX1---------------------------------------------------');

// 🟢 EX2 — Maior valor do Array
// Agora vamos subir um degrau.
// Dado: const numeros = [18, 7, 35, 12, 90, 41];

// Crie a função: maiorNumero(numeros)
// que retorne: // 90

const numeros2 = [18, 7, 35, 12, 90, 41];
function maiorNumero(lista) {
  let maior = lista[0];
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] > maior) {
      maior = lista[i];
    }
  }
  return maior;
}
console.log(maiorNumero(numeros2));

console.log('Fim EX2---------------------------------------------------');

// 🟢 FASE 1 — EX3
// Exercício 3 — Contar números pares 🔢
// Dado o array: const numeros = [12, 7, 25, 40, 33, 18, 9, 100];

// Crie uma função: contarPares(numeros)

// que retorne a quantidade de números pares existentes no array.
// Resultado esperado: 4

const numeros3 = [12, 7, 25, 40, 33, 18, 9, 100];

function contarPares(lista) {
  let pares = 0;
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] % 2 === 0) {
      pares++;
    }
  }
  return pares;
}
console.log(contarPares(numeros3));

const filtrarPares = numeros3.filter((p) => p % 2 === 0);
console.log(filtrarPares);

console.log('Fim EX3---------------------------------------------------');

// 🟢 EX4 — Produto mais caro 💰
// Uma loja possui o seguinte array:
const produtos4 = [
  { nome: 'Mouse', preco: 80 },
  { nome: 'Teclado', preco: 150 },
  { nome: 'Monitor', preco: 1200 },
  { nome: 'Headset', preco: 350 },
];
// Crie a função produtoMaisCaro(produtos)
// que retorne: Monitor - R$1200
console.log('EX4 A) Solução com 2 FOR-----------------------------------------------------------');

function produtoMaisCaro(lista) {
  let maisCaro = lista[0].preco;
  let nome = '';

  //Pegando maior valor ARRAY
  for (let i = 0; i < lista.length; i++) {
    // console.log(lista[i].preco);

    if (lista[i].preco > maisCaro) {
      maisCaro = lista[i].preco;
    }
  }
  // Descobrindo nome correspondeo ao mais caro
  for (let j = 0; j < lista.length; j++) {
    if (maisCaro === lista[j].preco) {
      nome = lista[j].nome;
    }
  }

  return `${nome} - ${maisCaro}`;
}
console.log(produtoMaisCaro(produtos4));

console.log('EX4 B) Solução com 1 FOR-----------------------------------------------------------');
function produtoMaisCaro2(lista) {
  let maisCaro = lista[0].preco;
  let nome = lista[0].nome;

  for (let i = 0; i < lista.length; i++) {
    if (lista[i].preco > maisCaro) {
      maisCaro = lista[i].preco;
      nome = lista[i].nome;
    }
  }
  return `${nome} - ${maisCaro}`;
}

console.log(produtoMaisCaro2(produtos4));

console.log('EX4 C) Solução SIMPLEs-----------------------------------------------------------');

function produtoMaisCaro3(lista) {
  let maisCaro = lista[0];

  for (let i = 0; i < lista.length; i++) {
    if (lista[i].preco > maisCaro.preco) {
      maisCaro = lista[i];
    }
  }
  return `${maisCaro.nome} -  ${maisCaro.preco}`;
}
console.log(produtoMaisCaro3(produtos4));

console.log('Fim EX4---------------------------------------------------');

// 🟢 FASE 1 — EX5
// Agora quero misturar duas coisas:
// arrays
// objetos

// Mas ainda sem Object.keys().
// Exercício 5 — Média da turma 🎓
// Uma escola possui o seguinte array:

const alunos5 = [
  { nome: 'Ana', nota: 8 },
  { nome: 'Carlos', nota: 6 },
  { nome: 'Julia', nota: 10 },
  { nome: 'Pedro', nota: 7 },
];

// Crie a função: mediaTurma(alunos)
// que retorne exatamente: Média da turma: 7.75

function mediaTurma(lista) {
  let soma = 0;
  let qtd = 0;

  for (let i = 0; i < lista.length; i++) {
    soma += lista[i].nota;
    qtd++;
  }
  return `Média da turma: ${soma / qtd.toFixed(2)}`;
}
console.log(mediaTurma(alunos5));

console.log('Fim EX5---------------------------------------------------');
console.log('Fim FASE1------------------------------------------------------------------------------------');

// FASE 2 — EX1
// Exercício 1 — Lista de Funcionários 👨‍💻
// Temos este array:
const funcionarios1 = [
  {
    nome: 'Ana',
    setor: 'QA',
    salario: 5000,
  },
  {
    nome: 'Carlos',
    setor: 'Desenvolvimento',
    salario: 8000,
  },
  {
    nome: 'Julia',
    setor: 'QA',
    salario: 6000,
  },
];

// Crie uma função: listarFuncionarios(funcionarios)
// que retorne: Funcionários:
// Ana - QA - R$5000
// Carlos - Desenvolvimento - R$8000
// Julia - QA - R$6000

console.log('EX5 - A) COM ARRAY-----------------------------------------------');
function listarFuncionarios(lista) {
  let novo = [];

  for (let i = 0; i < lista.length; i++) {
    novo.push(`${lista[i].nome} - ${lista[i].setor} -R$${lista[i].salario}`);
  }
  return novo;
}

console.log(listarFuncionarios(funcionarios1));

console.log('EX5 - B) SEM Array----------------------------------------------');

function listarFuncionarios2(lista) {
  let relatorio = '';
  for (let i = 0; i < lista.length; i++) {
    relatorio += `${lista[i].nome} - ${lista[i].setor} - R$${lista[i].salario.toFixed(2)}   \n`;
  }
  return relatorio;
}

console.log(listarFuncionarios2(funcionarios1));

console.log('Fim EX1---------------------------------------------------');

// 🟡 JavaScript Meister Test
// FASE 2 — EX2
// Exercício 2 — Empresa e seus funcionários 🏢
// Temos:
const empresa2 = {
  nome: 'Tech Solutions',
  funcionarios: [
    {
      nome: 'Ana',
      cargo: 'QA',
      salario: 5000,
    },
    {
      nome: 'Carlos',
      cargo: 'Desenvolvedor',
      salario: 8000,
    },
    {
      nome: 'Julia',
      cargo: 'Analista',
      salario: 6000,
    },
  ],
};

const test = Object.keys(empresa2);
console.log(test);
console.log(empresa2.nome);
console.log(empresa2.funcionarios[0].nome);
console.log(empresa2.funcionarios.length);

// Crie uma função:  relatorioEmpresa(empresa)
// que retorne: Empresa: Tech Solutions
// Funcionários:
// Ana - QA - R$5000.00
// Carlos - Desenvolvedor - R$8000.00
// Julia - Analista - R$6000.00

function relatorioEmpresa(lista) {
  let relatorio = '';

  relatorio += `Empresa: ${lista.nome}\n`;
  for (let i = 0; i < lista.funcionarios.length; i++) {
    relatorio += `${lista.funcionarios[i].nome} - ${lista.funcionarios[i].cargo} - R$${lista.funcionarios[i].salario.toFixed(2)}\n`;
  }
  return relatorio;
}

console.log(relatorioEmpresa(empresa2));

console.log('Fim EX2---------------------------------------------------');

// FASE 2 — EX3
// Exercício 3 — Cadastro de clientes com endereço 🏠
// Temos:
const clientes3 = [
  {
    nome: 'Ana',
    idade: 30,
    endereco: {
      cidade: 'São Paulo',
      estado: 'SP',
    },
  },
  {
    nome: 'Carlos',
    idade: 25,
    endereco: {
      cidade: 'Rio de Janeiro',
      estado: 'RJ',
    },
  },
  {
    nome: 'Julia',
    idade: 35,
    endereco: {
      cidade: 'Curitiba',
      estado: 'PR',
    },
  },
];

// Crie uma função: listarClientes(clientes)
// que retorne: Clientes:
// Ana - 30 anos - São Paulo/SP
// Carlos - 25 anos - Rio de Janeiro/RJ
// Julia - 35 anos - Curitiba/PR

console.log('EX3 A)------------------- --------------------------');
function listarClientes(lista) {
  let relatorio = '';
  relatorio += `Clientes:\n`;
  for (let i = 0; i < lista.length; i++) {
    relatorio += `${lista[i].nome} - ${lista[i].idade} anos - ${lista[i].endereco.cidade}/${lista[i].endereco.estado} \n`;
  }
  return relatorio;
}
console.log(listarClientes(clientes3));

console.log('EX3 A)Solução B) --------------------------');
function listarClientes2(lista) {
  let relatorio = '';
  relatorio += `Clientes:\n`;
  for (let i = 0; i < lista.length; i++) {
    let cliente = lista[i]; //VAR p/ n/ ficar repetindo lista[i]

    relatorio += `${cliente.nome} - ${cliente.idade} anos - ${cliente.endereco.cidade}  ${cliente.endereco.estado}\n`;
  }
  return relatorio;
}
console.log(listarClientes2(clientes3));

console.log('Fim EX3---------------------------------------------------');

// FASE 2 — EX4
// Exercício 4 — Controle de pedidos 🛒
// Temos:
const pedidos4 = [
  {
    cliente: 'Ana',
    produtos: [
      {
        nome: 'Notebook',
        preco: 3000,
      },
      {
        nome: 'Mouse',
        preco: 100,
      },
    ],
  },
  {
    cliente: 'Carlos',
    produtos: [
      {
        nome: 'Teclado',
        preco: 200,
      },
      {
        nome: 'Monitor',
        preco: 1200,
      },
    ],
  },
];
console.log(pedidos4[0].produtos[1].preco);
console.log(pedidos4[0].produtos[1].preco + 100);
console.log(pedidos4[0].cliente);
console.log(pedidos4.length);
console.log(pedidos4[0].produtos.length);

// Crie uma função: relatorioPedidos(pedidos)
// que retorne: Pedidos:
// Cliente: Ana
// Notebook - R$3000.00
// Mouse - R$100.00
// Total: R$3100.00

// Cliente: Carlos
// Teclado - R$200.00
// Monitor - R$1200.00
// Total: R$1400.00

function relatorioPedidos(lista) {
  let relatorio = '';

  relatorio += `Pedidos:\n`;
  for (let i = 0; i < lista.length; i++) {
    let total = 0;
    relatorio += `Cliente: ${lista[i].cliente}\n`;

    for (let j = 0; j < lista[i].produtos.length; j++) {
      total += lista[i].produtos[j].preco;
      relatorio += `${lista[i].produtos[j].nome} - R$${lista[i].produtos[j].preco.toFixed(2)}\n`;
    }
    relatorio += `Total: R$${total.toFixed(2)}\n \n`;
  }

  return relatorio;
}
console.log(relatorioPedidos(pedidos4));

console.log('Fim EX4---------------------------------------------------');

// 🟡 Fase 2 — EX5 (último exercício)
// Agora vamos misturar tudo o que vimos e adicionar um pouco de lógica de seleção.
// Sistema de Cursos 📚 Temos:
const escola5 = {
  nome: 'EBAC',
  cursos: [
    {
      nome: 'JavaScript',
      alunos: [
        {
          nome: 'Ana',
          nota: 9,
        },
        {
          nome: 'Carlos',
          nota: 7,
        },
      ],
    },
    {
      nome: 'QA',
      alunos: [
        {
          nome: 'Julia',
          nota: 10,
        },
        {
          nome: 'Pedro',
          nota: 8,
        },
      ],
    },
  ],
};
// console.log(escola5.nome);

// console.log(escola5.cursos.length);
// console.log(escola5.cursos[1].nome);
// console.log(escola5.cursos[1].alunos[0].nome);
// console.log(escola5.cursos[0].alunos.length);
// console.log(escola5.cursos[0].alunos[1].nome);
// console.log(escola5.cursos[0].alunos[0].nota);

// Crie a função: relatorioCursos(escola)
// Retorno esperado:
// Escola: EBAC

// Curso: JavaScript
// Ana - Nota: 9
// Carlos - Nota: 7
// Média: 8.00

// Curso: QA
// Julia - Nota: 10
// Pedro - Nota: 8
// Média: 9.00

function relatorioCursos(lista) {
  let relatorio = '';
  relatorio += `Escola: ${lista.nome}\n \n`;

  // 1º LOOP: nome curso
  for (let i = 0; i < lista.cursos.length; i++) {
    relatorio += `Curso: ${lista.cursos[i].nome}\n`;
    let soma = 0;
    let media = 0;

    // 2ºLOOP: nome aluno + nota
    for (let j = 0; j < lista.cursos[i].alunos.length; j++) {
      relatorio += `${lista.cursos[i].alunos[j].nome} - Nota: ${lista.cursos[i].alunos[j].nota.toFixed(2)}\n`;
      soma += lista.cursos[i].alunos[j].nota;
      media = soma / lista.cursos[i].alunos.length;
    }
    relatorio += `Média: ${media.toFixed(2)}\n`;
    relatorio += `\n`;
  }

  return relatorio;
}

console.log(relatorioCursos(escola5));

console.log('Fim EX5---------------------------------------------------');

console.log('Fim FASE2------------------------------------------------------------------------------------');
// 🔵 FASE 3 — EX1
// Tema: forEach()
// Antes de qualquer coisa: forEach() não substitui tudo.
// Ele serve quando você quer: "Percorrer todos os elementos e fazer alguma ação."

// Ele não retorna um novo array.
// Exercício 1
// Temos:
const frutasF31 = ['Maçã', 'Banana', 'Laranja', 'Uva'];

// Crie a função: listarFrutas(frutas)
// Que retorne:
// Lista de frutas:
// 1 - Maçã
// 2 - Banana
// 3 - Laranja
// 4 - Uva

function listarFrutasF31(lista) {
  lista.forEach((fruta, i) => {
    console.log(i + 1, fruta);
  });
}

listarFrutasF31(frutasF31);

console.log('Fim EX1---------------------------------------------------------------------------------------------------------ForEach');

// Exercício 2 — Transformando preços 💰
// Temos:
const produtosF32 = [
  {
    nome: 'Notebook',
    preco: 3000,
  },
  {
    nome: 'Mouse',
    preco: 100,
  },
  {
    nome: 'Teclado',
    preco: 200,
  },
];

console.log(produtosF32[0].nome);
// Crie uma função: aplicarDesconto(produtos)
// que aplique 10% de desconto em todos os produtos.
// O retorno deve ser um novo array:
// [
//   {
//     nome: 'Notebook',
//     preco: 2700,
//   },
//   {
//     nome: 'Mouse',
//     preco: 90,
//   },
//   {
//     nome: 'Teclado',
//     preco: 180,
//   },
// ];

function aplicarDescontoF32(lista) {
  let transformar = lista.map((p) => `Nome: ${p.nome}  Preco: ${(p.preco * 0.9).toFixed(2)}`);

  return transformar;
}

console.log(aplicarDescontoF32(produtosF32));

console.log('Fim EX2--------------------------------------------------------------------------------------------------------MAP + OBJETO');

// Exercício 3 — Filtrar produtos caros 💰
// Temos:
const produtosF33 = [
  {
    nome: 'Notebook',
    preco: 3000,
  },
  {
    nome: 'Mouse',
    preco: 100,
  },
  {
    nome: 'Teclado',
    preco: 200,
  },
  {
    nome: 'Monitor',
    preco: 1500,
  },
];
// Crie: produtosCaros(lista)
// Que retorne apenas produtos com preço maior ou igual a: 1000
// Resultado esperado:
// [
//  {
//    nome:"Notebook",
//    preco:3000
//  },
//  {
//    nome:"Monitor",
//    preco:1500
//  }
// ]

function produtosCarosF33(lista) {
  const filtrar = lista.filter((p) => p.preco >= 1000);
  return filtrar;
}
console.log(produtosCarosF33(produtosF33));

console.log(
  'Fim EX3--------------------------------------------------------------------------------------------------------FILTER + OBJETO'
);

// 🔵 FASE 3 — EX4
// filter() + map()
// Situação:
// Uma empresa possui funcionários:
const funcionariosF34 = [
  {
    nome: 'Ana',
    setor: 'TI',
    ativo: true,
    salario: 5000,
  },
  {
    nome: 'Carlos',
    setor: 'Financeiro',
    ativo: false,
    salario: 4000,
  },
  {
    nome: 'Julia',
    setor: 'TI',
    ativo: true,
    salario: 6000,
  },
  {
    nome: 'Pedro',
    setor: 'RH',
    ativo: false,
    salario: 3500,
  },
];

// Objetivo:
// Criar uma função: listarFuncionariosAtivos(lista)
// Que retorne somente os nomes dos funcionários ativos.
// Resultado esperado:
// [
//  "Ana",
//  "Julia"
// ]
console.log('EX4 A)Uma única VAR');
function listarFuncionariosAtivosA(lista) {
  const filtrar = lista.filter((p) => p.ativo === true).map((p) => p.nome);
  return filtrar;
}

console.log(listarFuncionariosAtivosA(funcionariosF34));

console.log('EX4 B)2 VAR');
function listarFuncionariosAtivosB(lista) {
  const filtrar = lista.filter((p) => p.ativo === true);
  const transformar = filtrar.map((p) => p.nome);
  return transformar;
}
console.log(listarFuncionariosAtivosB(funcionariosF34));

('Fim EX4--------------------------------------------------------------------------------------------------------FILTER + MAP');

// Exercício 5 — Total de vendas 💰
// Temos:
const vendasF35 = [
  {
    produto: 'Notebook',
    valor: 3000,
  },
  {
    produto: 'Mouse',
    valor: 100,
  },
  {
    produto: 'Teclado',
    valor: 200,
  },
  {
    produto: 'Monitor',
    valor: 1500,
  },
];
// Crie: calcularTotalVendas(lista)
// Resultado esperado: Total vendido: 4800

function calcularTotalVendas5(lista) {
  const totalVendas = lista.reduce((acc, n) => acc + n.valor, 0);
  return `O total de vendas é ${totalVendas.toFixed(2)}`;
}
console.log(calcularTotalVendas5(vendasF35));

console.log(
  'Fim EX5--------------------------------------------------------------------------------------------------------REDUCE + OBJETO'
);

// 🔵 FASE 3 — EX6
// reduce() para calcular média
// Temos uma turma:
const alunosF36 = [
  {
    nome: 'Ana',
    nota: 8,
  },
  {
    nome: 'Carlos',
    nota: 7,
  },
  {
    nome: 'Julia',
    nota: 10,
  },
  {
    nome: 'Pedro',
    nota: 5,
  },
];
console.log(alunosF36.length);
// Objetivo
// Criar: calcularMediaTurma(lista)
// Resultado esperado: Média da turma: 7.50

function calcularMediaTurma6(lista) {
  const media = lista.reduce((acc, n) => acc + n.nota, 0); //acc start com 0 pq é o ACUMULADOR
  return `Média da turma: ${(media / lista.length).toFixed(2)}`;
}

console.log(calcularMediaTurma6(alunosF36));

console.log(
  'Fim EX6--------------------------------------------------------------------------------------------------------REDUCE + OBJETO'
);

// 🔵 FASE 3 — EX7
// reduce() criando agrupamento  // Imagine uma lista de vendas:
const vendasF37 = [
  {
    produto: 'Notebook',
    categoria: 'Eletrônicos',
    valor: 3000,
  },
  {
    produto: 'Mouse',
    categoria: 'Eletrônicos',
    valor: 100,
  },
  {
    produto: 'Cadeira',
    categoria: 'Móveis',
    valor: 500,
  },
  {
    produto: 'Mesa',
    categoria: 'Móveis',
    valor: 800,
  },
];
// Objetivo: Criar: agruparVendasPorCategoria(lista)
// Que retorne:
// {
//   Eletrônicos: 3100,
//   Móveis: 1300
// }
function agruparVendasPorCategoria(lista) {
  return lista.reduce((acc, venda) => {
    if (acc[venda.categoria]) {
      acc[venda.categoria] += venda.valor;
    } else {
      acc[venda.categoria] = venda.valor;
    }
    return acc;
  }, {}); //acc = {} pq n/ é mais acumulador!! Vamos construir um OBJETO
}

console.log(agruparVendasPorCategoria(vendasF37));

console.log(
  'Fim EX7--------------------------------------------------------------------------------------------------------REDUCE + OBJETO'
);

//TESTE-----------------------------------------------------------------------------------------------------------------------------------------
console.log(
  'TESTE REDUCE ------------------------------------------P/ Criar OBJETO!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!'
);
const produtos = [
  {
    nome: 'Notebook',
    preco: 3000,
  },
  {
    nome: 'Mouse',
    preco: 100,
  },
];

function testeReduce(lista) {
  const transformar = lista.reduce((acc, venda) => {
    acc[venda.nome] = venda.preco;
    return acc;
  }, {}); //acc = {} pq n/ é mais acumulador!! Vamos construir um OBJETO
  return transformar;
}
console.log(testeReduce(produtos));

console.log(
  'FIM TESTE REDUCE ------------------------------------------P/ Criar OBJETO!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!'
);
//FIM TESTE-----------------------------------------------------------------------------------------------------------------------------------------

// 🔵 EX7.1 — Agrupando valores
// Temos:
const dados7 = [
  { categoria: 'A', valor: 10 },
  { categoria: 'A', valor: 20 },
  { categoria: 'B', valor: 50 },
  { categoria: 'B', valor: 30 },
  { categoria: 'C', valor: 15 },
];
// Queremos que a função:
// agruparPorCategoria(dados)
// retorne:
// {
//   A: 30,
//   B: 80,
//   C: 15
// }

function agruparPorCategoria(lista) {
  return lista.reduce((acc, base) => {
    if (acc[base.categoria]) {
      acc[base.categoria] += base.valor;
    } else {
      acc[base.categoria] = base.valor;
    }
    return acc;
  }, {}); //acc = {} pq n/ é mais acumulador!! Vamos construir um OBJETO
}
console.log(agruparPorCategoria(dados7));
('Fim EX7.1--------------------------------------------------------------------------------------------------------REDUCE + OBJETO');

console.log(
  'Fim FASE3--------------------------------------------------------------------------------------------------------REDUCE + OBJETO'
);
// 🔴 FASE 4 — Escolhendo a ferramenta
// EX1 — Relatório de produtos
// Temos:
const produtosF41 = [
  {
    nome: 'Notebook',
    preco: 3000,
    estoque: 5,
  },
  {
    nome: 'Mouse',
    preco: 100,
    estoque: 20,
  },
  {
    nome: 'Teclado',
    preco: 200,
    estoque: 0,
  },
  {
    nome: 'Monitor',
    preco: 1500,
    estoque: 3,
  },
];

console.log('EX1 A) Solução correta');
function analisarProdutosA(lista) {
  let novaLista = [];
  for (let i = 0; i < lista.length; i++) {
    if (lista[i].estoque > 0) {
      novaLista.push(`  ${lista[i].nome}  -  R$${lista[i].preco.toFixed(2)}`);
    }
  }
  return novaLista;
}
console.log(analisarProdutosA(produtosF41));

console.log('EX1 B) Solução alternativa');
function analisarProdutosB(lista) {
  let relatorio = '';
  for (let i = 0; i < lista.length; i++) {
    if (lista[i].estoque > 0) {
      relatorio += ` ${lista[i].nome} - R$${lista[i].preco.toFixed(2)}\n`;
    }
  }
  return relatorio;
}
console.log(analisarProdutosB(produtosF41));

('Fim EX1------------------------------------------------------------------------------------------------------');

// 🔴 EX2 — agora sem dica de ferramenta
// Temos:
const vendasF42 = [
  { vendedor: 'Ana', valor: 1200 },
  { vendedor: 'Carlos', valor: 800 },
  { vendedor: 'Ana', valor: 500 },
  { vendedor: 'Pedro', valor: 2000 },
  { vendedor: 'Carlos', valor: 700 },
  { vendedor: 'Ana', valor: 300 },
];
// Crie: function analisarVendas(lista)
// que retorne:
// {
//   Ana: 2000,
//   Carlos: 1500,
//   Pedro: 2000
// }
console.log('EX2 A)Solução com função devolvendo OBJETO (CORRETO).......................................................');

function analisarVendasA(lista) {
  let base = [
    { vendedor: 'Ana', valor: 0 },
    { vendedor: 'Carlos', valor: 0 },
    { vendedor: 'Pedro', valor: 0 },
  ];
  let novaBase = {};

  for (let i = 0; i < lista.length; i++) {
    for (let j = 0; j < base.length; j++) {
      if (base[j].vendedor === lista[i].vendedor) {
        if (novaBase[base[j].vendedor]) {
          novaBase[base[j].vendedor] += lista[i].valor;
        } else {
          novaBase[base[j].vendedor] = lista[i].valor;
        }
      }
    }
  }
  return novaBase;
}

console.log(analisarVendasA(vendasF42));

console.log('EX2 B)Solução com função devolvendo ARRAY-------------------------');
function analisarVendasB(lista) {
  let base = [
    { vendedor: 'Ana', valor: 0 },
    { vendedor: 'Carlos', valor: 0 },
    { vendedor: 'Pedro', valor: 0 },
  ];
  for (let i = 0; i < lista.length; i++) {
    for (let j = 0; j < base.length; j++) {
      if (base[j].vendedor === lista[i].vendedor) {
        base[j].valor += lista[i].valor;
      }
    }
  }
  return base;
}

console.log(analisarVendasB(vendasF42));

console.log('EX2 C)Solução com REDUCE + OBJETO---------------------------------------------------------------------------------');
function analisarVendasC(lista) {
  return lista.reduce((acc, base) => {
    if (acc[base.vendedor]) {
      acc[base.vendedor] += base.valor;
    } else {
      acc[base.vendedor] = base.valor;
    }
    return acc;
  }, {});
}
console.log(analisarVendasC(vendasF42));

('Fim EX2------------------------------------------------------------------------------------------------------');
