console.log('Autenticação.js! OK!');
const entrar = document.querySelector('#entrar');

const email = document.querySelector('#emailAutenticator');
const senha = document.querySelector('#senhaAutenticator');

entrar.addEventListener('click', function() {
    firebase
    .auth()
    .signInWithEmailAndPassword(email.value, senha.value)
    .then(function (result) {
        console.log(result);
        $('#meuModal').modal('show');
        $('h5.modal-title').text('Bem vindo')
        $('div.modal-body').text(`Bem Vindo, ${result.email}`);
        $('#closeModal').click(function() {
            window.location.href="faltas.html";
        })
    })
    .catch(function(error) {
        if(error.code !== 'auth/network-request-failed') {
            console.error(error.code);
            $('#meuModal').modal('show');
            $('h5.modal-title').text('Ocorreu um erro')
            $('div.modal-body').text(`Erro: ${error.code}`);
        } else {
                window.location.reload();
            }
    })
});
