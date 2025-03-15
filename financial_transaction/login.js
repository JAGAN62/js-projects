        // Import Firebase SDKs
        import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
        import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";

        // Firebase configuration
        const firebaseConfig = {
            apiKey: "AIzaSyAb7FSzYjd9zRPqh2O7iJzGUZd4eQE03YM",
            authDomain: "financeapp-61289.firebaseapp.com",
            projectId: "financeapp-61289",
            storageBucket: "financeapp-61289.appspot.com",
            messagingSenderId: "587490067730",
            appId: "1:587490067730:web:071277ed01de50991b9fcb"
        };

        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        const auth = getAuth(app); 

        // Get login button
        const btn = document.getElementById('login');

        btn.addEventListener('click', () => {
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            if (!email || !password) {
                alert("All fields are required!");
                return;
            }

            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    alert("Login successful! Redirecting...");
                    console.log("User Logged In:", userCredential.user);
                    
                    // Check if user is admin
                    if (email === 'admin123@gmail.com') {
                        window.location.href = "admin.html"; // Redirect admin
                    } else {
                        window.location.href = "user.html"; // Redirect normal user
                    }
                })
                .catch((error) => {
                    console.error("Login Error:", error.code, error.message);
                    alert("Login failed: " + error.message);
                });
        });

