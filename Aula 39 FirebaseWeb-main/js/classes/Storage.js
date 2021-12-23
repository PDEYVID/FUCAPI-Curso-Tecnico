import {
  getStorage, ref as sRef, uploadBytesResumable,
  getDownloadURL
}
  from 'https://www.gstatic.com/firebasejs/9.4.1/firebase-storage.js'

class Storage {
  /* 
    Iniciar um upload de um arquivo por Bytes
      - path: Deve conter o caminho completo do arquivo no storage
      - bytes: arquivo a ser feito upload
  */
  static uploadBytes(path, bytes) {
    let storage = getStorage();
    // cria referencia do upload no storage
    let storageRef = sRef(storage, path);
    //retornar o upload
    return uploadBytesResumable(storageRef, bytes);

  }
  static getDownloadURL(uploadTask) {
    return getDownloadURL(uploadTask.snaphot.ref);

  }

}

export { Storage }