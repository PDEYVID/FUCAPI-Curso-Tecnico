export { getDatabase, ref, set, push, onValue } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-database.js"

class RTDatabase {
    static teste() {
        console.log("classe RT");
    }

    static addkeyValueNode(nodePath, value) {
        // CRIAR/RECUPERAR O Nó
        let refNode = ref(getDatabase(), nodePath());
        // criando um novo valor(keyValue) em nodepath
        let id = push(refNode)

        // setar os Valores no id
        set(id, value);
    }
}
export { RTDatabase }