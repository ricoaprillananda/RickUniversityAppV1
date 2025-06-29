import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC8Z8gJ8rsRhbRptRd61ovuLtIB9_h1cro",
  authDomain: "rickuniversity-aeedb.firebaseapp.com",
  projectId: "rickuniversity-aeedb",
  storageBucket: "rickuniversity-aeedb.appspot.com",
  messagingSenderId: "1089589020728",
  appId: "1:1089589020728:web:3350bdde168d21dc63c72d",
  measurementId: "G-ZPNEDFS1FI"
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); // 
