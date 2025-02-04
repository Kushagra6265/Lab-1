// script.js
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let emailError = document.getElementById("emailError");
    let passwordError = document.getElementById("passwordError");

    emailError.textContent = "";
    passwordError.textContent = "";

    let valid = true;

    // Email validation (simple regex check)
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        emailError.textContent = "Please enter a valid email.";
        valid = false;
    }

    // Password validation (minimum 6 characters)
    if (password.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters.";
        valid = false;
    }

    if (valid) {
        alert("Login Successful! ✅");
        // You can redirect or process the login here
    }
});
