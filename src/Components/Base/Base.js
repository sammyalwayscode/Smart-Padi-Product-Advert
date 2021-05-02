import firebase from "firebase";
import "firebase/firestore";
import "firebase/storage";

export const app = firebase.initializeApp({
  apiKey: "AIzaSyAKHTKjQI3aOCOG83kCwBOiDg0LSqTa8yQ",
  authDomain: "smart-padi-products.firebaseapp.com",
  projectId: "smart-padi-products",
  storageBucket: "smart-padi-products.appspot.com",
  messagingSenderId: "117826986369",
  appId: "1:117826986369:web:fed162d1f73d582ed10880",
});
