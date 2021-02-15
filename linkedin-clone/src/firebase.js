import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCjpQJVuTxsBdqWtGj6GlZ9I6H9J6tjKJo",
    authDomain: "socialapp-fb2b3.firebaseapp.com",
    projectId: "socialapp-fb2b3",
    storageBucket: "socialapp-fb2b3.appspot.com",
    messagingSenderId: "654775085032",
    appId: "1:654775085032:web:496998f9763f9de6fa265d",
    measurementId: "G-NWPVBDLY57", 
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const storage = firebase.storage();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

   
  export { db, auth, storage, provider };