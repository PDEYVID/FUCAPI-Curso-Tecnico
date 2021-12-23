// importar instancias app e database
import { app, database } from './config.js'

import { RTDatabase } from './classes/RTDatabase.js'
import { Storage } from './classes/Storage.js'

RTDatabase.teste();

let addFeitico = document.getElementById('addFeitico');
addFeitico.addEventListener('click', cadastrarFeitico);

function cadastrarFeitico() {
  // recuperando input's
  let inFeitico = document.getElementById('inFeitico');
  let inNivel = document.getElementById('inNivel')

  // recuperar valores
  let nomeFeitico = inFeitico.value;
  let nivel = inNivel.value;

  if (nomeFeitico == "" || nivel == "") {
    alert('preencha os dois campos!!');
    return;
  }
  let feitico = {
    "nome": nomeFeitico,
    "nivel": nivel
  }
  // RTDatabase.addKeyValueNode('feiticos',feitico, limpar( [inFeitico,inNivel]));

  //promise -> é uma promessa para inserir feitico no database

  // destruring object 

  let { promise, key } = RTDatabase.addKeyValueNode('feiticos', feitico)
  //se apromessa ocorreu com sucesso
  promise.then(() => {
    //limpar os inputs
    limpar([inFeitico, inNivel])
    //mostrar um alerta
    if (infoImg) {
      uploadImagem(key)
    } else {
      alert("Dados inseridos com sucesso!")
    }
  })

  console.log('teste');

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
    tbody.innerHTML = ""

    for (let indice in data) {
      let feitico = data[indice];
      //console.log(feitico); 
      //alert(feitico.nome + "," + feitico.nivel)

      inserirFeiticoTabela(feitico)
    }
    // inserir no
  })
}
function inserirFeiticoTabela(feitico) {
  //
  // recuperar tbody -> inserir linhas
  let tbody = document.getElementById('tbody');

  let linha = document.createElement("tr");
  let colunas = []; // armazena os <td>

  for (let prop in feitico) {
    //ignorar a coluna key
    if (prop != 'key') {
      // criar um td
      let coluna = document.createElement('td')
      // inserir o valor na coluna( <td>)
      coluna.innerHTML = feitico[prop];
      // inserir a coluna( <td> ) na linha
      linha.appendChild(coluna)

    }

  }

  let acoes = document.createElement('td');
  acoes.innerHTML = `<span class="glyphicon glyphicon-remove" id="${feitico.key}"> </span>`
  //selecionando o botao de excluir
  let spanRemove = acoes.querySelector('.glyphicon-remove')
  //adicionando evento de click 
  spanRemove.addEventListener('click', () => {
    // alert('excluir '+feitico.key);
    removerFeitico(feitico.key)
  })

  linha.appendChild(acoes);

  //inserir linha na tabela
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

let input = document.getElementById('inputPhoto');
input.addEventListener('change', (e) => {
  //capturando info. da imagem
  infoImg = e.target.files[0];

  let leitorImg = new FileReader();
  leitorImg.readAsDataURL(infoImg)
  // load -> executa callback quando imagem carregada
  leitorImg.addEventListener('load', () => {
    //seleciona <img>
    let photo = document.getElementById('photo');
    photo.style.display = 'block'; // aparece elemento
    photo.src = leitorImg.result; // seta a imagem carregada
  });
})

/*let btnUpload = document.getElementById('btnUpload');
btnUpload.addEventListener('click', () => {
  uploadProcess();
})*/

function uploadImagem(key) {
  //recuperar a extensao e o nome da imagem
  let ext = getExtName(infoImg);
  let nome = getFileName(infoImg);
  //caminho da imagem no storage
  let path = 'images/' + nome + ext;

  let uploadTask = Storage.uploadBytes(path, infoImg);

  let progress = document.getElementById('progress');
  progress.style.display = "block";

  uploadTask.on('state-changed',
    (snapshot) => {
      //1° callback -> progresso
      let prec = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      progress.innerHTML = "Upload: " + prec + "%"
    },
    (error) => {
      alert('image not uploaded')
    },
    () => { // ulpload realizado com sucesso 
      let promise = Storage.getDownloadURL(uploadTask)
      promiseUrl.then((photoUrl) => {
        //console.log(url)

        let promise = RTDatabase.updateKeyNode('feiticos/' + key, 'url', photoUrl)
        promise.then(() => {
          alert("upload realizado com sucesso")
        })
      })
    }
  )
}

function getExtName(file) {
  let temp = file.name.split('.');
  let ext = temp.slice(temp.length - 1, temp.length);
  return '.' + ext[0];
}
// "0,1,3,4" => split(',') => [0,1,2,4]
//[0,1,2,3] => join('.') => "0.1.2.3"
function getFileName(file) {
  let temp = file.name.split('.');
  let fname = temp.slice(0, -1).join('.');
  return fname;
}

carregarFeiticos();

console.log(app)
console.log(database)