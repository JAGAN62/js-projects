const btn=document.getElementById('signup');
            

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAb7FSzYjd9zRPqh2O7iJzGUZd4eQE03YM",
  authDomain: "financeapp-61289.firebaseapp.com",
  projectId: "financeapp-61289",
  storageBucket: "financeapp-61289.firebasestorage.app",
  messagingSenderId: "587490067730",
  appId: "1:587490067730:web:071277ed01de50991b9fcb"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Get authentication instance


btn.addEventListener('click',() =>{
const username=document.getElementById('username').value;
const email=document.getElementById('email').value;
const password=document.getElementById('password').value;

if (!username || !email || !password) {
    alert("All fields are required!");
    return;
}

createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        alert('Signup successful! Welcome, ' + username);
        window.location.href = "login.html"; // Redirect to dashboard

    })
    .catch((error) => {
        console.error("Error:", error.code, error.message);
        alert('Signup failed: ' + error.message);
    });
});
