import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const config = {
  apiKey: "AIzaSyCiYnYbLkTlkWuk63tNZaGV4u8Ej6OKKkA",
  authDomain: "shopping-site-db.firebaseapp.com",
  projectId: "shopping-site-db",
  storageBucket: "shopping-site-db.appspot.com",
  messagingSenderId: "571025624278",
  appId: "1:571025624278:web:c40849eadea8e94df6cd77",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
