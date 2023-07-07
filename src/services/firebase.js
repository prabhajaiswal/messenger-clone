// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // 
const firebaseConfig = {
  apiKey: "AIzaSyCvQflo2iJXzZWEMkELqAsHJBneCXioloE",
  authDomain: "chat-messenger-6d620.firebaseapp.com",
  projectId: "chat-messenger-6d620",
  storageBucket: "chat-messenger-6d620.appspot.com",
  messagingSenderId: "1003659165444",
  appId: "1:1003659165444:web:985b0d563c8a1aeaa15a51",
  measurementId: "G-X5BL8MKFEY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Us
const analytics = getAnalytics(app);


export default db;