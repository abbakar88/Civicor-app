// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } 
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBgnkyCRMLUq_ciI5jC4JOSPXMDWaJn1x0",
  authDomain: "civicor-3b61a.firebaseapp.com",
  projectId: "civicor-3b61a",
  storageBucket: "civicor-3b61a.firebasestorage.app",
  messagingSenderId: "253401914785",
  appId: "1:253401914785:web:4e050ad74a81e50f373fe0",
  measurementId: "G-D9ZKWEB5Q4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Register
document.getElementById("registerBtn").addEventListener("click", function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Registration successful!");
      window.location.href = "home.html";
    })
    .catch((error) => {
      alert(error.message);
    });
});

// Login
document.getElementById("loginBtn").addEventListener("click", function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Login successful!");
      window.location.href = "home.html";
    })
    .catch((error) => {
      alert(error.message);
    });
});
