// Exercício 1: Tratamento de Erro em Variável Não Definida
console.log('Ex1--------------------------------------------------------------------------');
function tratarErroVariavelNaoDefinida() {
  try {
    // let a = 10;                    //IF não pode ser avaliado ==>INTEROMPE O TRY ==>VAI P/ O CATCH
    if (a <= 0) {
      throw new Error('a variável precisa ter valor superior à 0');
    }
    console.log('OK');
  } catch (erro) {
    console.error('Erro ao acessar a variável');
    console.log(erro.message);
  }
  // console.log(a + variavel);
}
tratarErroVariavelNaoDefinida();

console.log('Ex2--------------------------------------------------------------------------');
function tratarErroFuncaoInexistente() {
  try {
    funcaoInexistente();
  } catch (erro) {
    console.error('A função não pode ser encontrada');
    console.log(erro.message);
  }
}

tratarErroFuncaoInexistente();
console.log('Ex3--------------------------------------------------------------------------');

function tratarErroAcessarPropriedadeNull() {
  try {
    let objeto = null;
    let a = objeto.nome;
  } catch (erro) {
    console.error('Objeto não encontrado');
    console.log(erro.message);
  }
}

tratarErroAcessarPropriedadeNull();
console.log('Ex4 A)Retornando undefined--------------------------------------------------------------------------');
function tratarErroPropriedadeInexistente() {
  try {
    let a = {};
    console.log(a.nome);
  } catch (erro) {
    console.error('Objeto não pode ser encontrado');
    console.log(erro.message);
  }
}

tratarErroPropriedadeInexistente();

console.log('Ex4 B)Retornando ERRO--------------------------------------------------------------------------');
function tratarErroPropriedadeInexistenteB() {
  try {
    let a = {};
    if (!a.nome) {
      throw new Error('objeto não existe');
    }
  } catch (erro) {
    console.error('Objeto não pode ser encontrado');
    console.log(erro.message);
  }
}

tratarErroPropriedadeInexistenteB();

console.log('Ex5--------------------------------------------------------------------------');

function tratarErroConversaoTipo() {
  try {
    let a = 'Jean';
    let numeroConvertido = Number.parseInt(a);
    if (isNaN(numeroConvertido)) {
      throw new Error('Variável é do tipo NaN');
    }
  } catch (erro) {
    console.error(erro.message);
  }
  return 'FIM';
}

console.log(tratarErroConversaoTipo());

console.log('TEST NaN-----------------------------------------------------------------------');
let a = 'Jean';
let test = Number.parseInt(a);
console.log(`O valor informado ${a} é (${test}) `);
console.log(isNaN(test));
console.log('FIM TEST NaN-------------------------------------------------------------------');

console.log('Ex6--------------------------------------------------------------------------');
function tratarErroDivisaoPorZero() {
  try {
    let dividendo = 10;
    let divisor = 0;
    if (divisor === 0) {
      throw new Error('Divisor não pode ser igual à 0');
    }
  } catch (erro) {
    console.error('ERRO');
    console.log(erro.message);
  }
}
tratarErroDivisaoPorZero();

console.log('Ex7--------------------------------------------------------------------------');

function lerArquivo() {
  try {
    function livro() {
      return 'Jean';
    }
    let conteudo = `Jean + ${livro()}`;
    // let conteudo = livro();
    if (conteudo !== livro()) {
      throw new Error('Conteúdo divergente');
    }
    console.log(`O conteúdo do livro é ${livro()}`);
  } catch (erro) {
    console.log(erro.message);
    console.error('Leitura não pode ser executada');
  } finally {
    console.log('Programa finalizado');
  }
}

lerArquivo();

console.log('Ex8--------------------------------------------------------------------------');

function conectarBancoDeDados() {
  try {
    function api() {
      return 200;
    }
    // let conexao = 10;
    let conexao = api();
    if (conexao !== api()) {
      throw new Error('Conexão falhou');
    }
    console.log('Conexão ok');
  } catch (erro) {
    console.error('Conexão falhou');
  } finally {
    console.log('Programa finalizado');
  }
}

conectarBancoDeDados();
