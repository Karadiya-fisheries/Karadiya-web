// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBp7PHqetzRq85J536t2pu1xdP0pfKFyU0",
  authDomain: "karadiya-dashboard.firebaseapp.com",
  projectId: "karadiya-dashboard",
  storageBucket: "karadiya-dashboard.appspot.com",
  messagingSenderId: "97733120638",
  appId: "1:97733120638:web:25dd3954e86bfbc5607e2f",
  measurementId: "G-P1EVCQTXCF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export default storage;
