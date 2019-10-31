console.log('Firebase Deletar.js! OK!');

//------------------------------------

import { contador } from './firebase-enviar.js'

//-----------------------------------

export function deleta(seg, ter, qua, qui, sex) {
    const fb = firebase.database().ref();
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
    Quantidade_segunda = Quantidade_segunda < 0 ? 0 : Quantidade_segunda;
    Quantidade_terca = Quantidade_terca < 0 ? 0 : Quantidade_terca;
    Quantidade_quarta = Quantidade_quarta < 0 ? 0 : Quantidade_quarta;
    Quantidade_quinta = Quantidade_quinta < 0 ? 0 : Quantidade_quinta;
    Quantidade_sexta = Quantidade_sexta < 0 ? 0 : Quantidade_sexta;
    const faltas = {
        segunda: Quantidade_segunda,
        terca: Quantidade_terca,
        quarta: Quantidade_quarta,
        quinta: Quantidade_quinta,
        sexta: Quantidade_sexta
    };
    firebase.database().ref().child('/').update(faltas);
};