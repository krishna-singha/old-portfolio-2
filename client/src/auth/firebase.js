// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHNYDfU8zdMXXmFGUxA0UIq5pnMFoCqLY",
  authDomain: "new-portfolio-9d7c2.firebaseapp.com",
  projectId: "new-portfolio-9d7c2",
  storageBucket: "new-portfolio-9d7c2.appspot.com",
  messagingSenderId: "827570281016",
  appId: "1:827570281016:web:5c2142f57d752e697f64cd",
  measurementId: "G-4YHHBYX6XT"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);