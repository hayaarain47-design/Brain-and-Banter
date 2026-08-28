// ==========================================
// BRAIN & BANTER
// MAIN JAVASCRIPT
// ==========================================


// ==========================================
// LOGIN PAGE
// ==========================================

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const togglePassword = document.getElementById("togglePassword");
    const loginMessage = document.getElementById("loginMessage");


    // Show / Hide Password

    if (togglePassword) {

        togglePassword.addEventListener("click", function () {

            if (passwordInput.type === "password") {

                passwordInput.type = "text";
                togglePassword.textContent = "Hide";

            } else {

                passwordInput.type = "password";
                togglePassword.textContent = "Show";

            }

        });

    }


    // Login

    loginForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();


        if (username === "") {

            showLoginMessage(
                "Please enter your name.",
                "error"
            );

            usernameInput.focus();

            return;
        }


        if (password === "") {

            showLoginMessage(
                "Please enter your password.",
                "error"
            );

            passwordInput.focus();

            return;
        }


        if (password.length < 4) {

            showLoginMessage(
                "Password must contain at least 4 characters.",
                "error"
            );

            passwordInput.focus();

            return;
        }


        // Save username

        localStorage.setItem(
            "brainBanterUser",
            username
        );


        showLoginMessage(
            "Login successful. Opening portal...",
            "success"
        );


        setTimeout(function () {

            window.location.href = "dashboard.html";

        }, 800);

    });


    function showLoginMessage(message, type) {

        loginMessage.textContent = message;

        if (type === "success") {

            loginMessage.style.color = "#16803c";

        } else {

            loginMessage.style.color = "#d14343";

        }

    }

}


// ==========================================
// DASHBOARD
// ==========================================

const userName = document.getElementById("userName");

if (userName) {

    const savedUser =
        localStorage.getItem("brainBanterUser");


    // If no user is logged in,
    // return to login page.

    if (!savedUser) {

        window.location.href = "index.html";

    } else {

        userName.textContent = savedUser;

    }

}


// ==========================================
// SUBJECT CARDS
// ==========================================

const subjectCards =
    document.querySelectorAll(".subject-card");


if (subjectCards.length > 0) {

    subjectCards.forEach(function (card) {

        card.addEventListener("click", function () {

            const subject =
                card.getAttribute("data-subject");


            // Save selected subject

            localStorage.setItem(
                "selectedSubject",
                subject
            );


            // Open quiz page

            window.location.href = "quiz.html";

        });

    });

}


// ==========================================
// LOGOUT
// ==========================================

const logoutButton =
    document.getElementById("logoutButton");


if (logoutButton) {

    logoutButton.addEventListener("click", function () {

        localStorage.removeItem(
            "brainBanterUser"
        );

        localStorage.removeItem(
            "selectedSubject"
        );

        window.location.href = "index.html";

    });

}
