console.log('Firebase Enviar.js! OK!');

//------------------------------------

export function envia(seg, ter, qua, qui, sex) {
    const use = firebase.auth().currentUser.uid;
    const fb = firebase.database().ref(`/${use}`);
    let segunda = '';
    let terca = '';
    let quarta = '';
    let quinta = '';
    let sexta = '';
    fb.on('value', function (event){segunda = event.val().segunda});
    fb.on('value', function (event){terca = event.val().terca});
    fb.on('value', function (event){quarta = event.val().quarta});
    fb.on('value', function (event){quinta = event.val().quinta});
    fb.on('value', function (event){sexta = event.val().sexta});
    const Quantidade_segunda = contador(seg) + Number(segunda);
    const Quantidade_terca = contador(ter) + Number(terca);
    const Quantidade_quarta = contador(qua) + Number(quarta);
    const Quantidade_quinta = contador(qui) + Number(quinta);
    const Quantidade_sexta = contador(sex) + Number(sexta);
    const user = firebase.auth().currentUser.uid;
    const faltas = {
        segunda: Quantidade_segunda,
        terca: Quantidade_terca,
        quarta: Quantidade_quarta,
        quinta: Quantidade_quinta,
        sexta: Quantidade_sexta
    };
    firebase.database().ref().child(`/${user}`).update(faltas);
};

export function contador(vetor) {
    let quantidade = 0;
    for(let i = 0; i < vetor.length; i++) {
        if(vetor[i].checked) {
            quantidade++;
        }
    }
    return quantidade;
};
