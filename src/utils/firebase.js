// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4KgJmBBmvzjDd_cavQUhE35ehGeBl3Rw",
  authDomain: "netfilxgpt-3d540.firebaseapp.com",
  projectId: "netfilxgpt-3d540",
  storageBucket: "netfilxgpt-3d540.firebasestorage.app",
  messagingSenderId: "747792271474",
  appId: "1:747792271474:web:0f0614109958bbcd381aeb",
  measurementId: "G-ER7B6DWEM0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();