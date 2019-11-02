console.log('Firebase Consulta.js OK!');

//---------------------------------------

const ul = document.querySelector('#faltas_do_luan');

//---------------------------------------


const user = JSON.parse(window.localStorage.getItem('firebase:authUser:AIzaSyAPK65-5FuaLXUSDlT0A4eRlqjTHRJqxcU:[DEFAULT]')).uid
console.log(user)
firebase.database().ref().child(`/${user}`).on('value', function(event) {
    ul.innerHTML = '';
    for(let i = 0; i < 5; i++) {
        if(i === 0) {
            let li = document.createElement('li');
            li.appendChild(document.createTextNode("Segunda: "+event.val().segunda+" faltas"));
            li.classList.add('list-group-item');
            ul.appendChild(li);
        }
        if(i === 1) {
            let li = document.createElement('li');
            li.appendChild(document.createTextNode("Terça: "+event.val().terca+" faltas"));
            li.classList.add('list-group-item');
            ul.appendChild(li);
        }
        if(i === 2) {
            let li = document.createElement('li');
            li.appendChild(document.createTextNode("Quarta: "+event.val().quarta+" faltas"));
            li.classList.add('list-group-item');
            ul.appendChild(li);
        }
        if(i === 3) {
            let li = document.createElement('li');
            li.appendChild(document.createTextNode("Quinta: "+event.val().quinta+" faltas"));
            li.classList.add('list-group-item');
            ul.appendChild(li);
        }
        if(i === 4) {
            let li = document.createElement('li');
            li.appendChild(document.createTextNode("Sexta: "+event.val().sexta+" faltas"));
            li.classList.add('list-group-item');
            ul.appendChild(li);
        }
    }
});