// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD1DBbwdt-sVTTD_MWRtZMfaiX7f_IuVVo",
  authDomain: "instagram-clone-1f92f.firebaseapp.com",
  projectId: "instagram-clone-1f92f",
  storageBucket: "instagram-clone-1f92f.appspot.com",
  messagingSenderId: "448246188091",
  appId: "1:448246188091:web:966f08898318b1a7b0b41e",
  measurementId: "G-G0MKX5M08D",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };

//export default db
