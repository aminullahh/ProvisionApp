import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA0k-IcmxJOEBHBz_YzTFAZMWdaTl_ZPH0",
  authDomain: "provisionapp.firebaseapp.com",
  projectId: "provisionapp",
  storageBucket: "provisionapp.firebasestorage.app",
  messagingSenderId: "309011674063",
  appId: "1:309011674063:web:41a96392045e8528ea18ba",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Services
export const db = getFirestore(app);
export const auth = getAuth(app);
