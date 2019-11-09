console.log('Firebase Sair.js OK!');
//----------------------------------

const sair = document.querySelector('#sair');
//-----------------------------------

sair.addEventListener('click', function() {
    firebase
        .auth()
        .signOut()
        .then(function() {
            $('#meuModal').modal('show');
            $('h5.modal-title').text('Saindo')
            $('div.modal-body').text(`Você saiu!`);
            $('#closeModal').click(function() {
                window.location.href="index.html";
            })
        })
        .catch(function(error) {
            console.error(error);
        })
});