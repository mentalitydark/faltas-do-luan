console.log('Firebase Deletar.js! OK!');

//------------------------------------

import { contador } from './firebase-enviar.js'

//-----------------------------------

export function deleta(seg, ter, qua, qui, sex) {
    const user = firebase.auth().currentUser.uid;
    const fb = firebase.database().ref(`/${user}`);
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
    const Quantidade_segunda = Number(segunda) - contador(seg);
    const Quantidade_terca = Number(terca) - contador(ter);
    const Quantidade_quarta = Number(quarta) - contador(qua);
    const Quantidade_quinta = Number(quinta) - contador(qui);
    const Quantidade_sexta = Number(sexta) - contador(sex);
    const Quantidade_seg = Quantidade_segunda < 0 ? 0 : Quantidade_segunda;
    const Quantidade_ter = Quantidade_terca < 0 ? 0 : Quantidade_terca;
    const Quantidade_quar = Quantidade_quarta < 0 ? 0 : Quantidade_quarta;
    const Quantidade_qui = Quantidade_quinta < 0 ? 0 : Quantidade_quinta;
    const Quantidade_sex = Quantidade_sexta < 0 ? 0 : Quantidade_sexta;
    const faltas = {
        segunda: Quantidade_seg,
        terca: Quantidade_ter,
        quarta: Quantidade_quar,
        quinta: Quantidade_qui,
        sexta: Quantidade_sex
    };
    firebase.database().ref().child(`/${user}`).update(faltas);
};