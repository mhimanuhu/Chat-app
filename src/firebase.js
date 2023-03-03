import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAyu-FZYnUIU8ceec5Y4gnbMO-2b3puN5A",
  authDomain: "aapsi-baate.firebaseapp.com",
  projectId: "aapsi-baate",
  storageBucket: "aapsi-baate.appspot.com",
  messagingSenderId: "497206101170",
  appId: "1:497206101170:web:f373f601267b997894f5ab",
  measurementId: "G-YYT99DG9H5"
};
  const firebaseApp = firebase.initializeApp
  (firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth , provider};
  export default db;  
 