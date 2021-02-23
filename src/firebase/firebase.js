import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDj8govHrP8sKBFMc5ptydXAST-Hp-de6g",
  authDomain: "royal-clothing-95498.firebaseapp.com",
  projectId: "royal-clothing-95498",
  storageBucket: "royal-clothing-95498.appspot.com",
  messagingSenderId: "664741314943",
  appId: "1:664741314943:web:e6a56ff27526b56157da4a",
  measurementId: "G-8FF8JDDG1H",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
