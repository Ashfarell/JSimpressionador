document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('form');
  const limparBotao = document.getElementById('limpar');

  form.addEventListener('submit', function (event) {
    event.preventDefault(); //Impede carregamento da página

    // Capturar os dados do form
    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;

    // Verificar se os campos estão preenchidos
    if (nome && idade) {
      // Se campos existirem ==>salvo no localStorage
      // Verifico c/ setItem
      localStorage.setItem('nome', nome);
      localStorage.setItem('idade', idade);

      //   Limpar os campos do form
      document.getElementById('nome').value = '';
      document.getElementById('idade').value = '';

      alert('Dados salvos com sucesso');
    } else {
      alert('Por favor preencha os campos');
    }
  });

  // Limpar localStorage - removeItem()
  limparBotao.addEventListener('click', function () {
    localStorage.removeItem('nome');
    localStorage.removeItem('idade');
    texto.textContent = '';
    alert('Os dados foram removidos do localStorage');
  });

  // getItem ==>Acessar os dados do localStorage
  const carregarBtn = document.getElementById('carregar');
  const texto = document.getElementById('texto');

  carregarBtn.addEventListener('click', function () {
    const dadoNome = localStorage.getItem('nome');
    const dadoIdade = localStorage.getItem('idade');

    texto.textContent = `O nome do usuário é ${dadoNome} e sua idade é ${dadoIdade}`;
  });
});
