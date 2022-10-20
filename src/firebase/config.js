import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA1wwJ66Tl2nsaTjHtV6v1VY58DIPaNba4",
  authDomain: "tiendapol.firebaseapp.com",
  projectId: "tiendapol",
  storageBucket: "tiendapol.appspot.com",
  messagingSenderId: "149537986849",
  appId: "1:149537986849:web:ca77833a47514fd1ac0660"
};


const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);