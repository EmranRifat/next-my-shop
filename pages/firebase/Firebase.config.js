// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdR0B_7fiFNDqEKRj7Al6ynw-Qp1F7qSE",
  authDomain: "e-commerce-1c785.firebaseapp.com",
  projectId: "e-commerce-1c785",
  storageBucket: "e-commerce-1c785.appspot.com",
  messagingSenderId: "726034660611",
  appId: "1:726034660611:web:aacf813208f456670b3d36",
  measurementId: "G-E1DRG9C5FR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app