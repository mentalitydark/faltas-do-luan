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
                window.location.href="faltas.html";
            })
            .catch(function(error){
                console.log(error.code);
                console.log(error.mensage);
                alert("Falha ao se cadastrar.\nErro: "+error.code);
            })
});
