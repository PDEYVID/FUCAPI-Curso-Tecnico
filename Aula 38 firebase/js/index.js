// importa instancias app e database

import { app, database } from "./config.js"
import { RTDatabase } from "./classes/RTDatabase.js"
import { Storage } from './classes/Storage.js'

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

        let tbody = document.getElementById('tbody')
        tbody.innerHTML = "";

        for (let indice in data) {
            let feitico = data[indice];
            // console.log(feitico);
            // alert(feitico.nome + "," + feitico.nivel)

            inserirFeiticoTabela(feitico)
        }
        // inserir no 
    })
}

function inserirFeiticoTabela(feitico) {
    // recuperar tbody -> inserir linhas
    let tbody = document.getElementById('tbody');


    let linha = document.createElement("tr");

    let colunas = []; // armazena os <td>

    for (let prop in feitico) {
        //ignora a coluna key 
        if (prop != 'key') {
            // criar um td 
            let coluna = document.createElement('td');
            // inserit o valor na coluna(<td>)
            coluna.innerHTML = feitico[prop];
            //inserir a coluna (<td>) na linha 
            linha.appendChild(coluna)

        }

    }

    let acoes = document.createElement('td');
    acoes.innerHTML = `<span class="glyphicon glyphicon-remove" id="${feitico.key}"> </span>`

    // selecionando o botão para excluir
    let spanRemove = acoes.querySelector('.glyphicon-remove')
    //adicionando o evento de click
    spanRemove.addEventListener('click', () => {
        // alert('excluir' + feitico.key);
        removerFeitico(feitico.key)
    })

    linha.appendChild(acoes);

    // inserir linha na tabela
    tbody.appendChild(linha)

}

function removerFeitico(key) {
    // recuperar a promessa de excluir
    let promise = RTDatabase.removeNode('feiticos/' + key);

    promise.then(() => {
        alert('no removido!')
    })
}

var infoImg;

let input = document.getElementById('inputPhoto')
//input.onclick = function()
input.addEventListener('change', (e) => {
    infoImg = e.target.files[0];


    let leitorImg = new FileReader();
    leitorImg.readAsDataURL(infoImg)

    leitorImg.addEventListener('load', () => {
        // seleciona <img>
        let photo = document.getElementById('photo');
        photo.style.display = 'block';// aparece elemnto
        photo.src = leitorImg.result; // seta a imagem carregada
    });
})

let btnUpload = document.getElementById('btnUpload');
btnUpload.addEventListener('click', () => {
    uploadProcess();
})

function uploadProcess() {
    //recuperar a extensão  eo nome da imagem 
    let ext = getExtName(infoImg);
    let nome = getFileName(infoImg);

    //caminho da imagem no storage
    let path = 'imagens/' + nome + ext;

    Storage.uploadBytes(path, infoImg);

}

function getExtName(file) {
    let temp = file.getExtName.split('.');
    let ext = temp.slice(temp.length - 1, temp.length);
    return '.' + ext[0];

}

//"0,1,3,4"=> split(,) => [0,1,2,4]
//[0,1,2,3]=> split(.) => "0,1,2,3"
function getFileName(file) {
    let temp = file.getExtName.split(',');
    let fname = temp.slice(0, 1).join('.');
    return fname;
}



carregarFeiticos();

console.log(app)
console.log(database)