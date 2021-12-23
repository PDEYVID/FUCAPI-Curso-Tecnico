import { getDatabase, ref, set, push, onValue } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-database.js"

class RTDatabase {
    static teste() {
        console.log("classe RT");
    }

    static addkeyValueNode(nodePath, value) {
        // CRIAR/RECUPERAR O Nó
        let refNode = ref(getDatabase(), nodePath);
        // criando um novo valor(keyValue) em nodepath
        let id = push(refNode)

        // setar os Valores no id
        // set e uma Proimese -> requisicao assincrona
        return set(id, value);
    }

    /* carregar os dados em nodePath
    ocorre um evento
    exemplos de eventos
    -> deletar dados
    -> inseri dados
    -> atualizar dados 
    */
    static loadValueEvent(nodePath, callback) {
        // ref para o no
        let refNode = ref(getDatabase(), nodePath);

        // ler dados do no -> assincrono -> precisa de callback
        onValue(refNode, (snapshot) => {
            let data = snapshot.val();
            callback(data);


            /* console.log('Dados Feiticos: ')
            console.log(data);*
            // percorre o objeto
            for ( let indice in data) {
                let feitico = data[indice];
                console.log(feitico);
            }*/
        })
    }
}
export { RTDatabase }