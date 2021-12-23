// Import the functions you need from the SDKs you need
import { initializeApp }
    from "https://www.gstatic.com/firebasejs/9.4.1/firebase-app.js";

import { getDatabase, ref, set, push, child }
    from "https://www.gstatic.com/firebasejs/9.4.1/firebase-database.js"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBbZeulyBaX4-wP8GXbmE-cBp4wQucGtNk",
    authDomain: "projetofirebase-a83fc.firebaseapp.com",
    databaseURL: "https://projetofirebase-a83fc-default-rtdb.firebaseio.com",
    projectId: "projetofirebase-a83fc",
    storageBucket: "projetofirebase-a83fc.appspot.com",
    messagingSenderId: "589655995422",
    appId: "1:589655995422:web:44fbb9bb207e3c2f8b2a0f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

let refNode = ref(database, 'feiticos/2')

set(refNode, {
    'nome': 'aaaa',
    'nivel': 'fwww'
})