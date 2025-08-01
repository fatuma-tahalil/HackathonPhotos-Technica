// Firebase configurations

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCguDlCKCmxicOCwZfiEz_Nd68pOeR0koc",
  authDomain: "technica-fellowship-project.firebaseapp.com",
  projectId: "technica-fellowship-project",
  storageBucket: "technica-fellowship-project.firebasestorage.app",
  messagingSenderId: "848149447772",
  appId: "1:848149447772:web:620d280a553bd72f005299",
  measurementId: "G-JFBTEDWCSL"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
