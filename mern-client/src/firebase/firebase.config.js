// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIpzQLpl_iFsKT0hacnWboGoHeeJfmzws",
  authDomain: "book-mern.firebaseapp.com",
  projectId: "book-mern",
  storageBucket: "book-mern.appspot.com",
  messagingSenderId: "195426410850",
  appId: "1:195426410850:web:dc17bab2ec26d71d128c3b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;