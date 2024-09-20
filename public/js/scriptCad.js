document.getElementById('cad').addEventListener('submit', function(event) {
    const senha = document.getElementById('senha').value;
    const confSenha = document.getElementById('confSenha').value;

    // Verifica se as senhas são iguais
    if (senha !== confSenha) {
      alert("As senhas não coincidem!");
      event.preventDefault(); // Impede o envio do formulário
    }

  });

// Função para obter os parâmetros da query string
function getMessage(msg) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(msg);
}

const msgErroCad = getMessage('errorCad');
const msgSucessCad = getMessage('successCad');

// Exibe alert do Cadastro com erro ou sucesso se houver
if (msgErroCad) {
    alert(decodeURIComponent(msgErroCad));
    window.location.href = '/login';
}

if (msgSucessCad) {
    alert(decodeURIComponent(msgSucessCad));
    window.location.href = '/login';
}