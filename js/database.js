console.log('Real Time Database.js. OK!');
const segunda = document.querySelectorAll('.segunda');
const terca = document.querySelectorAll('.terca');
const quarta = document.querySelectorAll('.quarta');
const quinta = document.querySelectorAll('.quinta');
const sexta = document.querySelectorAll('.sexta');
const button= document.querySelector('button');
const ul = document.querySelector('#faltas_do_luan');


function contador(vetor) {
    let quantidade = 0;
    for(let i = 0; i < vetor.length; i++) {
        if(vetor[i].checked) {
            quantidade++;
        }
    }
    return quantidade;
};
function envia(seg, ter, qua, qui, sex) {
    const fb = firebase.database().ref();
    let segunda = '';
    let terca = '';
    let quarta = '';
    let quinta = '';
    let sexta = '';
    fb.on('value', function (e){segunda = e.val().segunda});
    fb.on('value', function (e){terca = e.val().terca});
    fb.on('value', function (e){quarta = e.val().quarta});
    fb.on('value', function (e){quinta = e.val().quinta});
    fb.on('value', function (e){sexta = e.val().sexta});
    console.log(segunda);
    const Quantidade_segunda = contador(seg) + Number(segunda);
    const Quantidade_terca = contador(ter) + Number(terca);
    const Quantidade_quarta = contador(qua) + Number(quarta);
    const Quantidade_quinta = contador(qui) + Number(quinta);
    const Quantidade_sexta = contador(sex) + Number(sexta);
    const faltas = {
        segunda: Quantidade_segunda,
        terca: Quantidade_terca,
        quarta: Quantidade_quarta,
        quinta: Quantidade_quinta,
        sexta: Quantidade_sexta
    };
    firebase.database().ref().child('/').update(faltas);
};
button.addEventListener('click', function() {
    envia(segunda, terca, quarta, quinta, sexta);
});

firebase.database().ref('/').on('value', function(e) {
    ul.innerHTML = '';
    for(let i = 0; i < 5; i++) {
        if(i === 0) {
            let li = document.createElement('li');
            li.appendChild(document.createTextNode("Segunda: "+e.val().segunda));
            li.classList.add('list-group-item');
            ul.appendChild(li);
        }
        if(i === 1) {
            let li = document.createElement('li');
            li.appendChild(document.createTextNode("Terça: "+e.val().terca));
            li.classList.add('list-group-item');
            ul.appendChild(li);
        }
        if(i === 2) {
            let li = document.createElement('li');
            li.appendChild(document.createTextNode("Quarta: "+e.val().quarta));
            li.classList.add('list-group-item');
            ul.appendChild(li);
        }
        if(i === 3) {
            let li = document.createElement('li');
            li.appendChild(document.createTextNode("Quinta: "+e.val().quinta));
            li.classList.add('list-group-item');
            ul.appendChild(li);
        }
        if(i === 4) {
            let li = document.createElement('li');
            li.appendChild(document.createTextNode("Sexta: "+e.val().sexta));
            li.classList.add('list-group-item');
            ul.appendChild(li);
        }
    }
});