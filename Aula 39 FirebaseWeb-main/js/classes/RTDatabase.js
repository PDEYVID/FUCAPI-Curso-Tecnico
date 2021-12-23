import { getDatabase, ref, set, push, onValue, remove, update }
  from 'https://www.gstatic.com/firebasejs/9.4.1/firebase-database.js'


class RTDatabase {
  static teste() {
    console.log("classe RT")
  }

  static updateKeyNode(nodePath, Value) {
    let refNode = ref(getDatabase(), nodePath);

    let updates = {
      url:value,

    }

    return update(refNode, updates);

  }

  // adicionar um valor em um nó
  static addKeyValueNode(nodePath, value) {
    //criar/recuperar nó
    let refNode = ref(getDatabase(), nodePath);
    //criando um novo id em nodePath
    let id = push(refNode)

    value.key = id.key;// adicionando a chave no objeto value
    //setar os valores no id
    // set é uma Promise -> requisicao assincrona
    return { promise: set(id, value), key: id.key };
  }
  /* 
    Carregar TODOS os dados em nodePath quando 
    ocorrer um evento
    Ex eventos: 
      - deletar dados
      - inserir dados
      - atualizar dados
  */
  static loadValueEvent(nodePath, callback) {
    // ref para o nó
    let refNode = ref(getDatabase(), nodePath);

    //ler dados do no -> assincrono -> precisa de callback(arrow function)
    onValue(refNode, (snapshot) => {
      let data = snapshot.val();
      callback(data);

    })
  }

  static removeNode(nodePath) {
    // criar a referencia do nó
    let refNode = ref(getDatabase(), nodePath);

    //retornar promise -> remover o nó
    return remove(refNode);
  }

}

export { RTDatabase }
