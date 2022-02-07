import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDJUq9egwp-vTbBtT1csjh_SGhWJbKDN_k",
  authDomain: "fire-blog-69494.firebaseapp.com",
  projectId: "fire-blog-69494",
  storageBucket: "fire-blog-69494.appspot.com",
  messagingSenderId: "439089959599",
  appId: "1:439089959599:web:661b883d46a02747d87a5a",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const database = getDatabase();
export { database };

export const db = getFirestore();


const provider = new GoogleAuthProvider();
export { provider };

