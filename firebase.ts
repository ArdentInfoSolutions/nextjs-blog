import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBk4QUC2XmgSZJ6flF-BwLsaVaP8VGyed8",
  authDomain: "blog-ardentinfo.firebaseapp.com",
  projectId: "blog-ardentinfo",
  storageBucket: "blog-ardentinfo.firebasestorage.app",
  messagingSenderId: "853084268961",
  appId: "1:853084268961:web:0636e5d1e9bf4fc09803e0",
  measurementId: "G-5QJ9NQFF8W"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
