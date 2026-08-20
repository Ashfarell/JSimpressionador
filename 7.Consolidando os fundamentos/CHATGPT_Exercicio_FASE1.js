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

console.log('Fim EX2------------------------------------------------------------------------------------------------------');

// 🔴 FASE 4 — EX3
// Funcionários e salários
// Temos:
const funcionariosF43 = [
  { nome: 'Ana', setor: 'TI', salario: 8500, ativo: true },
  { nome: 'Carlos', setor: 'Financeiro', salario: 6200, ativo: true },
  { nome: 'Mariana', setor: 'TI', salario: 9200, ativo: false },
  { nome: 'Pedro', setor: 'RH', salario: 5800, ativo: true },
  { nome: 'Julia', setor: 'TI', salario: 7800, ativo: true },
];
// Crie:
// function analisarFuncionarios(lista)
// que retorne um novo array contendo somente os funcionários ativos da TI, mas em um formato simplificado:
// [
//   'Ana - R$8500.00',
//   'Julia - R$7800.00'
// ]

console.log('EX3 A) Mais fácil');
function analisarFuncionarios(lista) {
  let novo = [];
  for (let i = 0; i < lista.length; i++) {
    if (lista[i].setor === 'TI' && lista[i].ativo) {
      novo.push(`${lista[i].nome} - R$${lista[i].salario.toFixed(2)}`);
    }
  }
  return novo;
}
console.log(analisarFuncionarios(funcionariosF43));

console.log('EX3 B) FILTER + MAP');

const novo = funcionariosF43.filter((p) => p.setor === 'TI' && p.ativo === true);

const transformar = novo.map((p) => p.nome + '  - ' + 'R$' + p.salario.toFixed(2));
console.log(transformar);

console.log('Fim EX3------------------------------------------------------------------------------------------------------');

// 🔴 EX4 — Média dos funcionários ativos
// Temos:
const funcionariosF44 = [
  { nome: 'Ana', salario: 8500, ativo: true },
  { nome: 'Carlos', salario: 6200, ativo: true },
  { nome: 'Mariana', salario: 9200, ativo: false },
  { nome: 'Pedro', salario: 5800, ativo: true },
  { nome: 'Julia', salario: 7800, ativo: true },
];
// Crie: function mediaSalariosAtivos(lista)
// que retorne: 7075.00

console.log('EX4 A) Função com IF');
function mediaSalariosAtivos(lista) {
  let media = 0;
  let count = 0;
  for (let i = 0; i < lista.length; i++) {
    if (lista[i].ativo) {
      media += lista[i].salario;
      count++;
    }
  }
  return (media / count).toFixed(2);
}
console.log(mediaSalariosAtivos(funcionariosF44));

console.log('EX4 B) Filter + REDUCE');
const filtrarFuncionarios = funcionariosF44.filter((p) => p.ativo);

const mediaFuncionariosAtivos = filtrarFuncionarios.reduce((acc, n) => acc + n.salario, 0);
console.log(mediaFuncionariosAtivos);

console.log((mediaFuncionariosAtivos / filtrarFuncionarios.length).toFixed(2));

console.log('Fim EX4------------------------------------------------------------------------------------------------------');

// 😈 EX5 — agora vamos misturar tudo
// Temos:
const pedidosF45 = [
  {
    cliente: 'Ana',
    status: 'entregue',
    valor: 250,
  },
  {
    cliente: 'Carlos',
    status: 'pendente',
    valor: 400,
  },
  {
    cliente: 'Ana',
    status: 'entregue',
    valor: 150,
  },
  {
    cliente: 'Pedro',
    status: 'entregue',
    valor: 500,
  },
  {
    cliente: 'Carlos',
    status: 'entregue',
    valor: 300,
  },
];
// Crie: function totalPedidosEntregues(lista)
// que retorne:
// {
//   Ana: 400,
//   Pedro: 500,
//   Carlos: 300
// }
console.log('EX5 A) Solução com função + for');
function totalPedidosEntregues(lista) {
  let base = [
    {
      cliente: 'Ana',
      valor: 0,
    },
    {
      cliente: 'Carlos',
      valor: 0,
    },
    {
      cliente: 'Pedro',
      valor: 0,
    },
  ];
  let novaBase = {};

  for (let i = 0; i < lista.length; i++) {
    for (let j = 0; j < base.length; j++) {
      if (base[j].cliente === lista[i].cliente) {
        if (lista[i].status === 'entregue') {
          if (novaBase[base[j].cliente]) {
            novaBase[base[j].cliente] += lista[i].valor;
          } else {
            novaBase[base[j].cliente] = lista[i].valor;
          }
        }
      }
    }
  }
  return novaBase;
}
console.log(totalPedidosEntregues(pedidosF45));

console.log(
  'EX5 B) Solução com FILTER +                   REDUCE-------------------------------------------------------------------------------------'
);
const filtrarClientesEx5 = pedidosF45.filter((p) => p.status === 'entregue');

function agregarClientesEx5sole(lista) {
  return lista.reduce((acc, base) => {
    if (acc[base.cliente]) {
      acc[base.cliente] += base.valor;
    } else {
      acc[base.cliente] = base.valor;
    }
    return acc;
  }, {});
}
console.log(agregarClientesEx5sole(filtrarClientesEx5));

console.log('Fim EX5------------------------------------------------------------------------------------------------------');

// 🔴 EX6 — agora vou tirar uma das suas "muletas"
// Agora teremos objeto dentro de objeto + array, e você vai precisar percorrer essa estrutura.
const empresaF46 = {
  nome: 'Tech Solutions',
  funcionarios: [
    {
      nome: 'Ana',
      setor: 'TI',
      salario: 8500,
      ativo: true,
    },
    {
      nome: 'Carlos',
      setor: 'Financeiro',
      salario: 6200,
      ativo: true,
    },
    {
      nome: 'Mariana',
      setor: 'TI',
      salario: 9200,
      ativo: false,
    },
  ],
};

// Crie: function analisarEmpresa(empresa)
// que retorne:
// {
//   nome: 'Tech Solutions',
//   funcionariosAtivos: 2,
//   folhaSalarial: 14700
// }
console.log('EX6 A) Solução com função + for');

function analisarEmpresa(lista) {
  let resultado = {
    nome: lista.nome,
    functionariosAtivos: 0,
    folhaSalarial: 0,
  };
  for (let i = 0; i < lista.funcionarios.length; i++) {
    if (lista.funcionarios[i].ativo) {
      resultado.functionariosAtivos += 1;
      resultado.folhaSalarial += lista.funcionarios[i].salario;
    }
  }

  return resultado;
}
console.log(analisarEmpresa(empresaF46));

console.log(
  'EX6 B) Solução com FILTER +                   REDUCE - SEM função-------------------------------------------------------------------------------------'
);

//Filtra funcionários ativos
const filtrarFuncionarisAtivosEx6 = empresaF46.funcionarios.filter((p) => p.ativo);

//Soma salário
const FolhaSalarioEx6 = filtrarFuncionarisAtivosEx6.reduce((acc, n) => acc + n.salario, 0);

//Cria objeto
let objetoFinal = {
  nome: empresaF46.nome,
  funcionariosAtivos: filtrarFuncionarisAtivosEx6.length,
  folhaSalarial: FolhaSalarioEx6,
};
console.log(objetoFinal);

console.log(
  'EX6 C) Solução com FILTER +                   REDUCE - DENTRO da função-------------------------------------------------------------------------------------'
);
function analisarEmpresaC(lista) {
  const filtrar = lista.funcionarios.filter((p) => p.ativo);
  const somarSalarios = filtrar.reduce((acc, n) => acc + n.salario, 0);
  let objetoFinal = {
    nome: lista.nome,
    funcionariosAtivos: filtrar.length,
    folhaSalarial: somarSalarios,
  };
  return objetoFinal;
}
console.log(analisarEmpresaC(empresaF46));

console.log(
  'EX6 D) Solução com FILTER +                   REDUCE - DENTRO da função ==>Criar objeto com REDUCE-------------------------------------------------------------------------------------'
);
function analisarEmpresaD(lista) {
  const filtrar = lista.funcionarios.filter((p) => p.ativo);
  return filtrar.reduce(
    (acc, base) => {
      acc.funcionariosAtivos += 1;
      acc.folhaSalarial += base.salario;
      return acc;
    },
    { nome: lista.nome, funcionariosAtivos: 0, folhaSalarial: 0 }
  );
}

console.log(analisarEmpresaD(empresaF46));

console.log('Fim EX5------------------------------------------------------------------------------------------------------');
console.log('Fim FASE4-----------------------------------------------------------------------------------------------------');

// 🟢 FASE 5 — EX1
// Temos:
const produtosF51 = [
  { nome: 'Notebook', categoria: 'Eletrônicos', preco: 3000, estoque: 5 },
  { nome: 'Mouse', categoria: 'Eletrônicos', preco: 100, estoque: 20 },
  { nome: 'Mesa', categoria: 'Móveis', preco: 800, estoque: 3 },
  { nome: 'Cadeira', categoria: 'Móveis', preco: 600, estoque: 0 },
  { nome: 'Teclado', categoria: 'Eletrônicos', preco: 200, estoque: 10 },
];
// Crie: function analisarEstoque(lista)
// // que retorne:
// {
//   produtosDisponiveis: 4,
//   valorTotalEstoque: 16200
// }

console.log('EX1 A)Solução com FOR');

function analisarEstoque(lista) {
  let disponiveis = 0;
  let valorTotal = 0;
  let novoObjeto = { disponiveis, valorTotal };
  for (let i = 0; i < lista.length; i++) {
    if (lista[i].estoque > 0) {
      disponiveis++;
      novoObjeto.disponiveis = disponiveis;
      valorTotal += lista[i].preco * lista[i].estoque;
      novoObjeto.valorTotal = valorTotal;
    }
  }
  return novoObjeto;
}

console.log(analisarEstoque(produtosF51));

console.log('EX1 B)Solução com -----------------------------------------------FILTER + -REDUCE SEM função-----------');

const filtrarEstoqueF51 = produtosF51.filter((p) => p.estoque > 0);

const somarEstoqueF51 = filtrarEstoqueF51.reduce((acc, n) => acc + n.preco * n.estoque, 0);

let novoObjetoF51 = {
  produtosDisponiveis: filtrarEstoqueF51.length,
  valorTotalEstoque: somarEstoqueF51,
};

console.log(novoObjetoF51);

console.log('EX1 C)Solução com -----------------------------------------------FILTER + -REDUCE COM função-----------');

function analisarEstoqueC(lista) {
  const filtrar = lista.filter((p) => p.estoque > 0);
  const somarEstoque = filtrar.reduce((acc, n) => acc + n.preco * n.estoque, 0);
  let novoObjeto = {
    produtosDisponiveis: filtrar.length,
    valorTotalEstoque: somarEstoque,
  };
  return novoObjeto;
}

console.log(analisarEstoqueC(produtosF51));

console.log('EX1 D)Solução com -----------------------------------------------FILTER +  --Criar objeto com REDUCE-----------');

function analisarEstoqueD(lista) {
  const filtrar = lista.filter((p) => p.estoque > 0);
  return filtrar.reduce(
    (acc, base) => {
      acc.produtosDisponiveis += 1;
      acc.valorTotalEstoque += base.preco * base.estoque;
      return acc;
    },
    {
      produtosDisponiveis: 0,
      valorTotalEstoque: 0,
    }
  );
}
console.log(analisarEstoqueD(produtosF51));

console.log('Fim FASE5-----------------------------------------------------------------------------------------------------');

// 🚀 FASE 6 — EX1
// Dados
const vendasF61 = [
  { vendedor: 'Ana', valor: 1200 },
  { vendedor: 'Carlos', valor: 800 },
  { vendedor: 'Ana', valor: 600 },
  { vendedor: 'Pedro', valor: 1500 },
  { vendedor: 'Carlos', valor: 900 },
  { vendedor: 'Ana', valor: 700 },
];
// Crie:
// function analisarVendas(lista)
// que retorne um objeto neste formato:
// {
//   totalVendas: 5700,
//   maiorVenda: 1500,
//   vendedorMaiorVenda: 'Pedro'
// }

console.log('EX1 A) Solução com OBJETO + FOR');
function analisarVendasF6E1(lista) {
  let novo = { totalVendas: 0, maiorVenda: 0, vendedorMaiorVenda: '' };

  for (let i = 0; i < lista.length; i++) {
    novo.totalVendas += lista[i].valor;
    if (lista[i].valor > novo.maiorVenda) {
      novo.maiorVenda = lista[i].valor;
      novo.vendedorMaiorVenda = lista[i].vendedor;
    }
  }
  return novo;
}

console.log(analisarVendasF6E1(vendasF61));

console.log('EX1 B) Solução com --------------------------------------------------------------------------OBJETO + REDUCE');

function analisarVendasF6E1B(lista) {
  return lista.reduce(
    (acc, base) => {
      acc.totalVendas += base.valor;
      if (base.valor > acc.maiorVenda) {
        acc.maiorVenda = base.valor;
        acc.vendedorMaiorVenda = base.vendedor;
      }
      return acc;
    },
    { totalVendas: 0, maiorVenda: 0, vendedorMaiorVenda: '' }
  );
}
console.log(analisarVendasF6E1B(vendasF61));

console.log('Fim EX1-----------------------------------------------------------------------------------------------------');
// 🚀 FASE 6 — EX2
// Temos:
const funcionariosF62 = [
  { nome: 'Ana', setor: 'TI', salario: 7000, ativo: true },
  { nome: 'Carlos', setor: 'RH', salario: 5000, ativo: true },
  { nome: 'Pedro', setor: 'TI', salario: 8000, ativo: false },
  { nome: 'Marina', setor: 'TI', salario: 6000, ativo: true },
  { nome: 'João', setor: 'RH', salario: 4500, ativo: false },
  { nome: 'Lucas', setor: 'TI', salario: 9000, ativo: true },
];
// Crie:
// function analisarSetorTI(lista)
// que retorne:
// {
//   funcionariosAtivos: 3,
//   folhaSalarial: 22000,
//   maiorSalario: 9000,
//   funcionarioMaiorSalario: 'Lucas'
// }
console.log('EX2 A) Solução com OBJETO + FOR');
function analisarSetorTiF6E2(lista) {
  let novo = {
    funcionariosAtivos: 0,
    folhaSalarial: 0,
    maiorSalario: 0,
    funcionarioMaiorSalario: '',
  };
  for (let i = 0; i < lista.length; i++) {
    if (lista[i].setor === 'TI' && lista[i].ativo) {
      novo.funcionariosAtivos++;
      novo.folhaSalarial += lista[i].salario;
      if (novo.maiorSalario <= lista[i].salario) {
        novo.maiorSalario = lista[i].salario;
        novo.funcionarioMaiorSalario = lista[i].nome;
      }
    }
  }
  return novo;
}

console.log(analisarSetorTiF6E2(funcionariosF62));

console.log('EX2 B) Solução com -------------------------------FILTER + REDUCE');
function analisarSetorTiF6E2B(lista) {
  const filtrar = lista.filter((p) => p.setor === 'TI' && p.ativo);

  return filtrar.reduce(
    (acc, base) => {
      acc.funcionariosAtivos++;
      acc.folhaSalarial += base.salario;
      if (base.salario > acc.maiorSalario) {
        acc.maiorSalario = base.salario;
        acc.funcionarioMaiorSalario = base.nome;
      }

      return acc;
    },
    { funcionariosAtivos: 0, folhaSalarial: 0, maiorSalario: 0, funcionarioMaiorSalario: '' }
  );
}

console.log(analisarSetorTiF6E2B(funcionariosF62));

console.log('FIM EX2-----------');

// 🧠 EX3 — Análise de vendas por categoria
// Você recebeu a seguinte lista:
const vendasF63 = [
  { produto: 'Notebook', categoria: 'Eletrônicos', preco: 3500, quantidade: 2 },
  { produto: 'Mouse', categoria: 'Eletrônicos', preco: 120, quantidade: 5 },
  { produto: 'Teclado', categoria: 'Eletrônicos', preco: 250, quantidade: 3 },
  { produto: 'Cadeira', categoria: 'Móveis', preco: 900, quantidade: 2 },
  { produto: 'Mesa', categoria: 'Móveis', preco: 1200, quantidade: 1 },
  { produto: 'Luminária', categoria: 'Casa', preco: 180, quantidade: 4 },
  { produto: 'Tapete', categoria: 'Casa', preco: 350, quantidade: 2 },
  { produto: 'Monitor', categoria: 'Eletrônicos', preco: 1800, quantidade: 2 },
];
// Sua função deverá se chamar:
// analisarVendasF6E2(lista)
// E deverá retornar um objeto com:
// {
//   faturamentoTotal: 0,
//   produtoMaisVendido: '',
//   quantidadeMaisVendida: 0,
//   categoriaMaiorFaturamento: ''
// }

console.log('EX3 A) Solução com FOR');
function analisarVendasF6E3(lista) {
  let novo = {
    faturamentoTotal: 0,
    produtoMaisVendido: '',
    quantidadeMaisVendida: 0,
    categoriaMaiorFaturamento: '',
  };

  let categorias = {
    Eletrônicos: 0,
    Móveis: 0,
    Casa: 0,
  };

  // calcular faturamento por categoria
  for (let j = 0; j < lista.length; j++) {
    categorias[lista[j].categoria] += lista[j].preco * lista[j].quantidade;
  }

  // Calcular maior categoria                    // FOR OF --------------------------------------
  let maiorFaturamento = 0;

  for (const [categoria, valor] of Object.entries(categorias)) {
    if (valor > maiorFaturamento) {
      maiorFaturamento = valor;
      novo.categoriaMaiorFaturamento = categoria;
    }
  }

  // Calcular qtd + vendida e produto + vendido
  for (let i = 0; i < lista.length; i++) {
    novo.faturamentoTotal += lista[i].preco * lista[i].quantidade;

    if (lista[i].quantidade > novo.quantidadeMaisVendida) {
      novo.quantidadeMaisVendida = lista[i].quantidade;
      novo.produtoMaisVendido = lista[i].produto;
    }
  }
  // return { novo, categorias };                    // Retornar + de um OBJETO
  return novo;
}

console.log(analisarVendasF6E3(vendasF63));
