const sair = document.querySelector('#sair');
sair.addEventListener('click', function() {
    firebase
        .auth()
        .signOut()
        .then(function() {
            alert('Você se deslogou');
            window.location.href="index.html";
        })
        .catch(function(error) {
            console.error(error);
        })
});