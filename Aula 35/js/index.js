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
    //RTDatabase.addkeyValueNode("feiticos", feitico);
    // promise -> e uma promessa para inserir feitico no database
    let promise = RTDatabase.addkeyValueNode('feiticos', feitico)
    // se a promessa ocorreu com sucessso 
    promise.then(() => {
        //limpar os imputs 
        limpar([inFeitico, inNivel])
        //mostra um alerta
        alert("dados inseridos com sucesso!")
    })
    console.log('teste')

}

function limpar(array) {
    array.forEach((x) => {
        x.value = "";
    })
}

function carregarFeiticos() {
    RTDatabase.loadValueEvent('feiticos', (data) => {
        console.log(data);

        for (let indice in data) {
            let feitico = data[indice];
           // console.log(feitico);
           alert(feitico.nome + "," + feitico.nivel)
        }
        // inserir no 
    })
}

carregarFeiticos();

console.log(app)
console.log(database)