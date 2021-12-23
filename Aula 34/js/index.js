// importa instancias app e database

import { app, database } from "./config.js"
import { RTDatabase } from "./classes/RTDatabase.js"

RTDatabase.teste();

let addFeitico = document.getElementById('addFeitico');
addFeitico.addEventListener('click', cadastrarFeitico);

function cadastrarFeitico() {
    // recuperando inputs
    let inFeitico = document.getElementById('inFeitico');
    let inNivel = document.getElementById('inNivel');

    //recuperar valores
    let nomefeitico = inFeitico.value;
    let nivel = inNivel.value;

    if (nomefeitico == "" || nivel == "") {
        alert('preencha os dois campos!!');
        return;
    }
    //objetc criado 
    let feitico = {
        "nome": nomefeitico,
        "nivel": nivel
    }
    RTDatabase.addkeyValueNode("feiticos", feitico);


}

console.log(app)
console.log(database)