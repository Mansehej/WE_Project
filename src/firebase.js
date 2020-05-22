import firebase from "firebase";
import firebaseConfig from "./firebaseConfig.json"

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export { db };