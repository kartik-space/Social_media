// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBC-naRRpvqHSK_dSgJavaeqgDYf867FnA",
  authDomain: "social-media-insta-33f27.firebaseapp.com",
  projectId: "social-media-insta-33f27",
  storageBucket: "social-media-insta-33f27.appspot.com",
  messagingSenderId: "822849758116",
  appId: "1:822849758116:web:5ffbb943aa65cbd9995731",
  measurementId: "G-7REPE25QDQ"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const firestore = getFirestore(app)
const storage = getStorage(app)

export { app, auth, firestore, storage };
