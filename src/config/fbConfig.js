import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


// Initialize Firebase
var config = {
    apiKey: "AIzaSyDN88OOCB4Q7Z_UhVbgk5NLkwOGFdjsWTA",
    authDomain: "dessertkuaja.firebaseapp.com",
    databaseURL: "https://dessertkuaja.firebaseio.com",
    projectId: "dessertkuaja",
    storageBucket: "dessertkuaja.appspot.com",
    messagingSenderId: "782006855235"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true});

export default firebase;