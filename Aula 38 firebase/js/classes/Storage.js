import {
    getStorage, ref as sRef, uploadBytesResumable,
    getDownloadURL
}

    from 'https://www.gstatic.com/firebasejs/9.4.1/firebase-storage.js'

class Storage {

    /*
        inician um upload  de um arquivo por bytes
        -path: deve conter o caminho do arquivo no storage
        -bytes: arquivos a ser feito upload
    
    */
    static uploadBytes(path, bytes) {
        let storage = getStorage();
        // cria referencia do upload no storage 
        let storeRef = sRef(storage, path);
        // retornar o upload 
        return uploadBytesResumable(storeRef, bytes);
    }
}

export { Storage }