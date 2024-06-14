// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYLtLpfG4wyMynwUpR3bXsMg3eMwtFGvM",
  authDomain: "kozom-9ea99.firebaseapp.com",
  databaseURL: "https://kozom-9ea99-default-rtdb.firebaseio.com",
  projectId: "kozom-9ea99",
  storageBucket: "kozom-9ea99.appspot.com",
  messagingSenderId: "595156363406",
  appId: "1:595156363406:web:a7e551baf3bd2b832201df",
  measurementId: "G-C093S48XM1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export {app}; 