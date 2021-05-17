import firebase from "firebase/app"
import "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyDR3BynoHsGb_JZW_x9jTufR0hgamgXNgk",
    authDomain: "disney-clone-2dc4a.firebaseapp.com",
    projectId: "disney-clone-2dc4a",
    storageBucket: "disney-clone-2dc4a.appspot.com",
    messagingSenderId: "872927345477",
    appId: "1:872927345477:web:ae910311ac16bf7ec19c2c",
    measurementId: "G-0M6NC74BSF"
};


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
  }

// const db = firebaseApp.firestore()
const auth = firebase.auth()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()


export { auth, googleAuthProvider };