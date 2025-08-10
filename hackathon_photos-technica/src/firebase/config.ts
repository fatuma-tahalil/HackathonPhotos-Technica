import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_GOOGLE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: "technica-fellowship-project.firebasestorage.app",
  messagingSenderId: "848149447772",
  appId: "1:848149447772:web:620d280a553bd72f005299",
  measurementId: "G-JFBTEDWCSL"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const provider = new GoogleAuthProvider();
export const auth = getAuth(app);

export const storage = getStorage(app);
export default app;