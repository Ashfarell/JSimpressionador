// API key ⇒pegar código email  ⇒9f9c0997
let botaoBuscar = document.getElementById('botaoBuscar');
let cabecalho = document.getElementById('cabecalho');
let resultado = document.getElementById('resultado');
let url = 'https://www.omdbapi.com/?apikey=9f9c0997&t=Drive'; //Minha API key
let nomeFilme = document.getElementById('nomeFilme');
let anoFilme = document.getElementById('anoFilme');
let poster = document.getElementById('poster');
let infoAdicionais1 = document.getElementById('infoAdicionais1');
let infoAdicionais2 = document.getElementById('infoAdicionais2');
let modal = document.getElementById('modal');

async function testar(url) {
  //async permite usar await           //URL vem da 2º FUNÇÃO
  try {
    let resposta = await fetch(url); //resposta é um objeto Response ==>CONTEÚDO da entrega
    //                                  = "Recebi a resposta da API."
    let dados = await resposta.json(); //Agora queremos pegar o CONTEÚDO que está dentro da Response.

    //          29. Colocar conteúdo dentro do modal
    //              FAZER MODAL APENAS APARECER SE TIVER RESULTADO
    if (dados.Response === 'False') {
      modal.style.display = 'none';
      modal.innerHTML = '';
    } else {
      modal.innerHTML = `
  <h2>${dados.Title}</h2>
  <p>${dados.Year}</p>
`;
      modal.style.display = 'block';
    }

    // TESTE
    console.log(resposta);
    console.log(dados);
    console.log(dados.Title);

    // ERRO FILME ERRADO
    if (dados.Response === 'False') {
      throw new Error('Filme não encontrado.');
    }

    //                    6. Colocar o TÍTULO + ANO dentro do <h2>
    // resultado.textContent = `${dados.Title} ${dados.Year}`;
    resultado.innerHTML = `<strong>${dados.Title}</strong> ${dados.Year}`; //Parecido c/ textContent

    //                    26. Criar HTML através do JavaScript
    let infoprincipais = document.createElement('p');
    infoAdicionais1.appendChild(infoprincipais);
    infoprincipais.innerHTML = `<strong>Informações principais:</strong>`;

    let atores = document.createElement('p');
    infoAdicionais1.appendChild(atores);
    atores.innerHTML = `Actors: ${dados.Actors}`;

    let sinopse = document.createElement('p');
    infoAdicionais1.appendChild(sinopse);
    sinopse.innerHTML = `Plot: ${dados.Plot}`;

    let genero = document.createElement('p');
    infoAdicionais1.appendChild(genero);
    genero.textContent = `Genre: ${dados.Genre}`;
    console.log(resultado);

    //                  27. Criar uma ESTRUTURA HTML INTEIRA com innerHTML       *****
    infoAdicionais2.innerHTML = `
<strong><p>Informações extras:</p></strong>
<p>Awards: ${dados.Awards}:</p>
<p>BoxOffice: ${dados.BoxOffice}  </p>
<p>Released: ${dados.Released}    </p>
`;

    //                    23.Colocar POSTER/IMAGEM na página
    poster.src = dados.Poster;
  } catch (error) {
    if (error.message === 'Filme não encontrado.') {
      resultado.textContent = 'Filme não encontrado.';
      console.log('Filme não encontrado');
    } else {
      resultado.textContent = 'Outro erro';
    }
  }
}

botaoBuscar.addEventListener('click', function () {
  try {
    //                              7. Fazer o usuário escolher o filme ==>Constrói uma URL DINÂMICA
    let url; //Dentro do Try==>captura ERRO
    // let url = `https://www.omdbapi.com/abc123`; //N/ devolve JSON ==>ERRO

    // VERIFICA NOME + ANO
    if (anoFilme.value === '') {
      url = `https://www.omdbapi.com/?apikey=9f9c0997&t=${nomeFilme.value}`;
    } else {
      url = `https://www.omdbapi.com/?apikey=9f9c0997&t=${nomeFilme.value}&y=${anoFilme.value}`;
    }

    console.log(nomeFilme.value);
    console.log(anoFilme.value);
    console.log(url);

    //                  ERRO CAMPO NOME VAZIO
    if (nomeFilme.value === '') {
      throw new Error('O campo Nome precisa ser preenchido');
    }

    //                  ERRO CAMPO ANO VAZIO
    if (anoFilme.value.length > 0 && anoFilme.value.length !== 4) {
      alert('Ano precisa ter 4 dígitos');
      throw new Error('Ano precisa ter 4 dígitos');
    } else if (anoFilme.value.length > 0 && /[a-zA-Z]/.test(anoFilme.value)) {
      alert('Ano deve ser composto apenas por números');
      throw new Error('Ano deve ser composto apenas por números');
    }

    testar(url); //                   CHAMA 1º função==> apenas é executada a partir dessa!!!
  } catch (error) {
    // CATCH ERROR CAMPO NOME
    if (error.message === 'O campo Nome precisa ser preenchido') {
      resultado.textContent = 'O campo Nome precisa ser preenchido';
      return console.log('O campo Nome precisa ser preenchido');
    }
    //                                CATCH ERROR CAMPO ANO
    if (error.message === 'Ano precisa ter 4 dígitos') {
      resultado.textContent = 'Ano precisa ter 4 dígitos';
    } else if (error.message === 'Ano deve ser composto apenas por números') {
      resultado.textContent = 'Ano deve ser composto apenas por números';
    }
  }
  nomeFilme.value = ''; //LIMPA O CAMPO
  anoFilme.value = '';
  // infoAdicionais.textContent = '';
  poster.src = '';
  atores.textContent = '';
  sinopse.textContent = '';
  genero.textContent = '';
});
