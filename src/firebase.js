// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQleQ-_3vRrCckDzKOyVfvUP8zgz0jKdM",
  authDomain: "livelocation-576a6.firebaseapp.com",
  projectId: "livelocation-576a6",
  storageBucket: "livelocation-576a6.appspot.com",
  messagingSenderId: "692855436196",
  appId: "1:692855436196:web:195b3ccdc2dde4b05f0731"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore();