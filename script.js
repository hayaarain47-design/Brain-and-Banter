// ==========================================
// BRAIN & BANTER - LOGIN SYSTEM
// ==========================================

const loginForm = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");
const loginMessage = document.getElementById("loginMessage");


// ==========================================
// SHOW / HIDE PASSWORD
// ==========================================

togglePassword.addEventListener("click", function () {

    if (passwordInput.type === "password") {

        passwordInput.type = "text";
        togglePassword.textContent = "Hide";

    } else {

        passwordInput.type = "password";
        togglePassword.textContent = "Show";

    }

});


// ==========================================
// LOGIN
// ==========================================

loginForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();


    // Basic validation

    if (username === "") {

        showMessage("Please enter your name.", "error");
        usernameInput.focus();
        return;

    }


    if (password === "") {

        showMessage("Please enter your password.", "error");
        passwordInput.focus();
        return;

    }


    // Temporary demo login
    // We will connect the real authentication later.

    if (password.length < 4) {

        showMessage(
            "Password must contain at least 4 characters.",
            "error"
        );

        passwordInput.focus();
        return;

    }


    // Save user information for the next pages

    localStorage.setItem(
        "brainBanterUser",
        username
    );


    showMessage(
        "Login successful. Opening portal...",
        "success"
    );


    // Small delay for a smooth transition

    setTimeout(function () {

        window.location.href = "dashboard.html";

    }, 900);

});


// ==========================================
// MESSAGE FUNCTION
// ==========================================

function showMessage(message, type) {

    loginMessage.textContent = message;

    if (type === "success") {

        loginMessage.style.color = "#16803c";

    } else {

        loginMessage.style.color = "#d14343";

    }

}


// ==========================================
// REMOVE ERROR MESSAGE WHEN USER TYPES
// ==========================================

usernameInput.addEventListener("input", function () {

    loginMessage.textContent = "";

});

passwordInput.addEventListener("input", function () {

    loginMessage.textContent = "";

});
