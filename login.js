const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const successMessage = document.getElementById("successMessage");

    emailError.textContent = "";
    passwordError.textContent = "";
    successMessage.textContent = "";

    let isValid = true;

    if (email === "") {
        emailError.textContent = "Email is required";
        isValid = false;
    }

    if (password === "") {
        passwordError.textContent = "Password is required";
        isValid = false;
    } else if (password.length < 6) {
        passwordError.textContent =
            "Password must contain at least 6 characters";
        isValid = false;
    }

    if (isValid) {
        successMessage.textContent = "Login successful!";
    }
});