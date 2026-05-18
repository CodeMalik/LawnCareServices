// firebase.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAN2Z0jUg5EFXQx7LQr_-Rl1PF-qknoP6w",
  authDomain: "lawncare-services-5a27d.firebaseapp.com",
  projectId: "lawncare-services-5a27d",
  storageBucket: "lawncare-services-5a27d.firebasestorage.app",
  messagingSenderId: "678392603831",
  appId: "1:678392603831:web:73d8dda798eb76c94f1932"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); // ✅ Export Firestore instance