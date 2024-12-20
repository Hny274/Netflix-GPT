// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXCa5JkBilh-uQIZ-Xgskr103j6g7Y060",
  authDomain: "netflixgpt-caaa9.firebaseapp.com",
  projectId: "netflixgpt-caaa9",
  storageBucket: "netflixgpt-caaa9.firebasestorage.app",
  messagingSenderId: "351755461670",
  appId: "1:351755461670:web:d7d2e99085be3926a0b2e7",
  measurementId: "G-F99S0ZZW22",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
