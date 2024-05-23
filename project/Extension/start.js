// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7Ffw8gxhqr1u-j5NnWT523onT9Mj37Tg",
  authDomain: "what-is-your-credibility.firebaseapp.com",
  projectId: "what-is-your-credibility",
  storageBucket: "what-is-your-credibility.appspot.com",
  messagingSenderId: "944339238764",
  appId: "1:944339238764:web:ba232de6f043ec40f47d49",
  measurementId: "G-7D6V6H184L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);