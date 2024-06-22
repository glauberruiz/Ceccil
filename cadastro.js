document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário padrão
    
    // Pegando os valores dos campos
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;
    
    // Exibindo os valores no console (pode ser substituído por uma requisição AJAX, por exemplo)
    console.log('Nome: ' + nome);
    console.log('Email: ' + email);
    console.log('Senha: ' + senha);
    
    // Aqui você pode adicionar código para enviar os dados para o servidor, fazer validações adicionais, etc.
});