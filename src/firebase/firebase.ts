// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRQ3-l3BkuZb36RVY9cD4XLI6WpHrr3mc",
  authDomain: "save-a-meal-ed650.firebaseapp.com",
  projectId: "save-a-meal-ed650",
  storageBucket: "save-a-meal-ed650.appspot.com",
  messagingSenderId: "367892919050",
  appId: "1:367892919050:web:06abbab354c12adcb300f3"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };