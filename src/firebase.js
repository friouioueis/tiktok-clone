import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBos-NAjIOHXfifqM-8GgfqFdgbnDhR7cI",
  authDomain: "tiktok-clone-1e844.firebaseapp.com",
  projectId: "tiktok-clone-1e844",
  storageBucket: "tiktok-clone-1e844.appspot.com",
  messagingSenderId: "638626295729",
  appId: "1:638626295729:web:2e128cf217f2b998221790",
  measurementId: "G-2W73N6H2RY",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
