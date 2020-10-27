import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCC8MrOXeKTTtl-tl6Hod0RarLt1Sil2vg",
    authDomain: "imessage-clone-d98c6.firebaseapp.com",
    databaseURL: "https://imessage-clone-d98c6.firebaseio.com",
    projectId: "imessage-clone-d98c6",
    storageBucket: "imessage-clone-d98c6.appspot.com",
    messagingSenderId: "108899360106",
    appId: "1:108899360106:web:331941a85fb557c9ad5913",
    measurementId: "G-CYGKE006TE"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;

