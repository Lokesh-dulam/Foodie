// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCatMRDlAkJ2wiRYjRpdGQ6w3v40n_szk4",
  authDomain: "foodie-ee3c1.firebaseapp.com",
  projectId: "foodie-ee3c1",
  storageBucket: "foodie-ee3c1.appspot.com",
  messagingSenderId: "81869299774",
  appId: "1:81869299774:web:0d12ff19ffd763168bf16f",
  measurementId: "G-71R1611ZY2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth()