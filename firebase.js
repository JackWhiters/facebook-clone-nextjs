import firebase from 'firebase';
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCahhZZ-4VUipDx61ypbZAeZtuzQ8wcjzc",
    authDomain: "facebook-2-yt-c62f0.firebaseapp.com",
    projectId: "facebook-2-yt-c62f0",
    storageBucket: "facebook-2-yt-c62f0.appspot.com",
    messagingSenderId: "697245935866",
    appId: "1:697245935866:web:27601411eb360b0c504143"
  };

  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

  const db = app.firestore();
  const storage = firebase.storage();

  export {db,storage};