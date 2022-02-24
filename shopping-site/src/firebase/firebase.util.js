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

export const createUserProfileDocument = async (
  userAuth,
  additionalData
) => {
  //Check if null
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();
  //Create and store a new user with userAuth object if not in firestore
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("Error adding user ",  error.message);
    }
  }
  //Returning in case object is needed to do other things!
  return userRef;
};


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
