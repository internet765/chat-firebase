import firebase from 'firebase/app';
import 'firebase/database';

firebase.initializeApp({
    apiKey: "AIzaSyC0Kj9NvzT694iRj_fUMNYbwI4-_DAKWF0",
    authDomain: "chat-firebase-b6bae.firebaseapp.com",
    databaseURL: "https://chat-firebase-b6bae-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "chat-firebase-b6bae",
    storageBucket: "chat-firebase-b6bae.appspot.com",
    messagingSenderId: "35517323646",
    appId: "1:35517323646:web:81402a93524eb21dbafb2f"
});

class Firebase {
    constructor() {
      this.fire = firebase
      this.database = this.fire.database();
    }
  
    getMessages = (cb) => {
       this.database.ref('messages').on('value', (snapshot) => {
       cb(snapshot.val())
      });
    }
  
    sendMessage = (value) => {
      const newKey = this.database.ref().child('messages').push().key;
      this.database.ref("messages/" + newKey).set(value)
    }
  }
  
  export default Firebase;