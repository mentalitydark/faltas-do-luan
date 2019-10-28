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
        alert('Bem vindo, '+email.value);
        window.location.href="faltas.html";
    })
    .catch(function(error) {
        console.error(error.code);
        console.error(error.message);
        alert('Falha ao entrar!\nErro: '+error.code);
    })
});
