import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider}from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyBzoub2AB36GUnM9ZMbpaJHOPnbIx7q7_w",
  authDomain: "chat-app-a6b4f.firebaseapp.com",
  projectId: "chat-app-a6b4f",
  storageBucket: "chat-app-a6b4f.appspot.com",
  messagingSenderId: "641063795978",
  appId: "1:641063795978:web:ab34c9847cd321a14e4ef3",
  measurementId: "G-7ZBRSGPMCR"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider=new GoogleAuthProvider()
export const db = getFirestore(app);
import { getFirestore } from "@firebase/firestore";
