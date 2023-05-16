// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC26IXLr0FwgP7lVQMO5latX7bcIt9tmzI",
  authDomain: "volunteer-network-b5d7e.firebaseapp.com",
  projectId: "volunteer-network-b5d7e",
  storageBucket: "volunteer-network-b5d7e.appspot.com",
  messagingSenderId: "13952497954",
  appId: "1:13952497954:web:55c88823931329dbbc8d7b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;