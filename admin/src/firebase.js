// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqP7ZuuxRkzUlHfNSd51EFEyajBhCuDQY",
  authDomain: "invsoft-test.firebaseapp.com",
  projectId: "invsoft-test",
  storageBucket: "invsoft-test.appspot.com",
  messagingSenderId: "1082082512377",
  appId: "1:1082082512377:web:f59d8c7848c01e015e8128",
  measurementId: "G-RY889GJM9R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;