import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyCE56CdPzPDv-3O31JSIb3C3ElQjWLJfEM",
    authDomain: "twitterclone-d45ec.firebaseapp.com",
    projectId: "twitterclone-d45ec",
    storageBucket: "twitterclone-d45ec.appspot.com",
    messagingSenderId: "498609272951",
    appId: "1:498609272951:web:7eee69b38207180d4f6e72"
};

const firebaseapp = firebase.initializeApp(firebaseConfig);

const db = firebaseapp.firestore();

export default db;