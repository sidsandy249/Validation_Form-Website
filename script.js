document.addEventListener("DOMContentLoaded", function () {
    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");
    const submitButton = document.getElementById("submitButton");

    const usernameError = document.getElementById("usernameError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const confirmPasswordError = document.getElementById("confirmPasswordError");

    
    function validateUsername() {
        const usernamePattern = /^[a-zA-Z0-9_]{3,15}$/;
        if (!usernamePattern.test(username.value.trim())) {
            usernameError.textContent = "Username must be 3-15 characters and contain only letters, numbers, and underscores.";
            return false;
        }
        usernameError.textContent = "";
        return true;
    }

    function validateEmail() {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value.trim())) {
            emailError.textContent = "Please enter a valid email address.";
            return false;
        }
        emailError.textContent = "";
        return true;
    }

    function validatePassword() {
        if (password.value.length < 8) {
            passwordError.textContent = "Password must be at least 8 characters.";
            return false;
        }
        passwordError.textContent = "";
        return true;
    }

    function validateConfirmPassword() {
        if (confirmPassword.value !== password.value) {
            confirmPasswordError.textContent = "Passwords do not match.";
            return false;
        }
        confirmPasswordError.textContent = "";
        return true;
    }

    
    function checkFormValidity() {
        const isFormValid = validateUsername() && validateEmail() && validatePassword() && validateConfirmPassword();
        submitButton.disabled = !isFormValid;
    }

 
    username.addEventListener("input", checkFormValidity);
    email.addEventListener("input", checkFormValidity);
    password.addEventListener("input", checkFormValidity);
    confirmPassword.addEventListener("input", checkFormValidity);

   
    document.getElementById("validationForm").addEventListener("submit", function (event) {
        event.preventDefault(); 

        
        if (!submitButton.disabled) {
            window.location.href = "submit.html"; 
        }
    });
});
