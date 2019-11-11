console.log('Firebase Cadastro JS OK!');

//---------------------------------------------

const cadastro = document.querySelector('#cadastro');

//---------------------------------------------

cadastro.addEventListener('click', function() {
    firebase
            .auth()
            .createUserWithEmailAndPassword(email.value, senha.value)
            .then(function(result) {
                const fb = firebase.auth().currentUser.uid;
                firebase.database().ref().child(`/${fb}`).set({
                    segunda: 0,
                    terca: 0,
                    quarta: 0,
                    quinta: 0,
                    sexta: 0
                })
                $('#meuModal').modal('show')
                $('h5.modal-title').text('Cadastrado com sucesso!!');
                $('div.modal-body').text('Obrigado por se cadastrar! Você será redirencionado agora.');
                $('#closeModal').click(function(){
                      window.location.href='faltas.html';
                })
            })
            .catch(function(error){
                console.log(error.code);
                $('#meuModal').modal('show');
                $('h5.modal-title').text('Ocorreu um erro')
                $('div.modal-body').text(`Erro: ${error.code}`);
            })
});
