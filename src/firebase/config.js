// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1wwJ66Tl2nsaTjHtV6v1VY58DIPaNba4",
  authDomain: "tiendapol.firebaseapp.com",
  projectId: "tiendapol",
  storageBucket: "tiendapol.appspot.com",
  messagingSenderId: "149537986849",
  appId: "1:149537986849:web:ca77833a47514fd1ac0660"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);