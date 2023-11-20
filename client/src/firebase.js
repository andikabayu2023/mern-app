// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-app-36bee.firebaseapp.com",
  projectId: "mern-app-36bee",
  storageBucket: "mern-app-36bee.appspot.com",
  messagingSenderId: "390660524813",
  appId: "1:390660524813:web:f3925e752214daf9ed7e44",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
