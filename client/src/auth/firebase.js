// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjoRQMtxTfw2YqbNBcpkdh8V0ZpMmoQcc",
  authDomain: "krishna-singha-portfolio.firebaseapp.com",
  projectId: "krishna-singha-portfolio",
  storageBucket: "krishna-singha-portfolio.appspot.com",
  messagingSenderId: "474131737418",
  appId: "1:474131737418:web:f26be6370bfdc581b92fb3",
  measurementId: "G-3JNPMQBEDM"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);