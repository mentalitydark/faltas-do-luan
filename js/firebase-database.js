console.log('Real Time Database.js. OK!');

//--------------------------------------------

import { envia } from './firebase-enviar.js';
import { deleta } from './firebase-deletar.js';
//--------------------------------------------

const segunda = document.querySelectorAll('.segunda');
const terca = document.querySelectorAll('.terca');
const quarta = document.querySelectorAll('.quarta');
const quinta = document.querySelectorAll('.quinta');
const sexta = document.querySelectorAll('.sexta');
const enviar= document.querySelector('#enviar');
const deletar= document.querySelector('#deletar');


//-------------------------------------------------------

enviar.addEventListener('click', function() {
    envia(segunda, terca, quarta, quinta, sexta);
});

deletar.addEventListener('click', function() {
    deleta(segunda, terca, quarta, quinta, sexta);
});