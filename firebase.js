// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyC9vqR0c6B0JmA3hcGbswg18XgbAEbHMcM",
  authDomain: "hackathon-sylani.firebaseapp.com",
  projectId: "hackathon-sylani",
  storageBucket: "hackathon-sylani.appspot.com",
  messagingSenderId: "886447926670",
  appId: "1:886447926670:web:5b7f63a9ab222bfccf08df"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app);
const storage = getStorage(app);