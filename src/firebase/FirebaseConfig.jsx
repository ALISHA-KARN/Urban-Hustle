// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2g_Ht15YtPTeeebpE0WcHXgCv3H4BFxc",
  authDomain: "daystestproject.firebaseapp.com",
  projectId: "daystestproject",
  storageBucket: "daystestproject.firebasestorage.app",
  messagingSenderId: "414912696986",
  appId: "1:414912696986:web:e9cabe6f868ded15e98523"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }
