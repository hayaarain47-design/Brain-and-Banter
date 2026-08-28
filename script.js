// ==========================================
// BRAIN & BANTER
// COMPLETE PORTAL JAVASCRIPT
// ==========================================


// ==========================================
// QUIZ DATABASE
// ==========================================

const quizData = {

    Biology: [
        {
            question: "What is the basic unit of life?",
            options: ["Atom", "Cell", "Tissue", "Organ"],
            answer: 1
        },
        {
            question: "Which organ pumps blood around the body?",
            options: ["Lungs", "Brain", "Heart", "Kidney"],
            answer: 2
        },
        {
            question: "Which gas do humans mainly need for respiration?",
            options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
            answer: 0
        },
        {
            question: "Which part of a plant absorbs water?",
            options: ["Flower", "Leaf", "Root", "Fruit"],
            answer: 2
        },
        {
            question: "Which blood cells help fight infections?",
            options: ["Red blood cells", "White blood cells", "Platelets", "Plasma"],
            answer: 1
        },
        {
            question: "What carries genetic information?",
            options: ["DNA", "Water", "Glucose", "Protein"],
            answer: 0
        },
        {
            question: "Which organ is mainly responsible for breathing?",
            options: ["Heart", "Lungs", "Stomach", "Liver"],
            answer: 1
        },
        {
            question: "Photosynthesis mainly occurs in which part of a plant?",
            options: ["Leaves", "Roots", "Seeds", "Flowers"],
            answer: 0
        },
        {
            question: "Which organ helps digest food?",
            options: ["Stomach", "Heart", "Lung", "Brain"],
            answer: 0
        },
        {
            question: "How many chambers does the human heart have?",
            options: ["2", "3", "4", "5"],
            answer: 2
        }
    ],


    Physics: [
        {
            question: "What is the SI unit of force?",
            options: ["Joule", "Newton", "Watt", "Pascal"],
            answer: 1
        },
        {
            question: "What force pulls objects toward Earth?",
            options: ["Friction", "Magnetism", "Gravity", "Tension"],
            answer: 2
        },
        {
            question: "What is the unit of electric current?",
            options: ["Volt", "Ohm", "Ampere", "Watt"],
            answer: 2
        },
        {
            question: "Light travels fastest in:",
            options: ["Water", "Glass", "Air", "Vacuum"],
            answer: 3
        },
        {
            question: "What is the SI unit of energy?",
            options: ["Newton", "Joule", "Watt", "Volt"],
            answer: 1
        },
        {
            question: "Which instrument measures temperature?",
            options: ["Barometer", "Thermometer", "Ammeter", "Voltmeter"],
            answer: 1
        },
        {
            question: "Which form of energy is stored in a battery?",
            options: ["Chemical energy", "Sound energy", "Light energy", "Nuclear energy"],
            answer: 0
        },
        {
            question: "What is the unit of power?",
            options: ["Watt", "Joule", "Newton", "Meter"],
            answer: 0
        },
        {
            question: "Which force opposes motion between surfaces?",
            options: ["Gravity", "Friction", "Magnetic force", "Buoyant force"],
            answer: 1
        },
        {
            question: "What is the approximate speed of light in vacuum?",
            options: ["3 × 10⁸ m/s", "3 × 10⁶ m/s", "3 × 10⁴ m/s", "3 × 10² m/s"],
            answer: 0
        }
    ],


    Mathematics: [
        {
            question: "What is 12 × 8?",
            options: ["86", "96", "108", "112"],
            answer: 1
        },
        {
            question: "What is the square root of 81?",
            options: ["7", "8", "9", "10"],
            answer: 2
        },
        {
            question: "What is 15% of 200?",
            options: ["20", "25", "30", "35"],
            answer: 2
        },
        {
            question: "What is the value of 5²?",
            options: ["10", "15", "20", "25"],
            answer: 3
        },
        {
            question: "Which number is prime?",
            options: ["9", "15", "17", "21"],
            answer: 2
        },
        {
            question: "What is 100 ÷ 4?",
            options: ["20", "25", "30", "40"],
            answer: 1
        },
        {
            question: "What is 7 + 8 × 2?",
            options: ["30", "23", "22", "24"],
            answer: 1
        },
        {
            question: "How many degrees are in a right angle?",
            options: ["45°", "90°", "180°", "360°"],
            answer: 1
        },
        {
            question: "What is the perimeter of a square with side 5 cm?",
            options: ["10 cm", "15 cm", "20 cm", "25 cm"],
            answer: 2
        },
        {
            question: "What is 3/4 as a decimal?",
            options: ["0.25", "0.50", "0.75", "1.25"],
            answer: 2
        }
    ],


    Computer: [
        {
            question: "What does CPU stand for?",
            options: [
                "Central Processing Unit",
                "Computer Personal Unit",
                "Central Program Utility",
                "Computer Processing Utility"
            ],
            answer: 0
        },
        {
            question: "Which language is used to structure web pages?",
            options: ["Python", "HTML", "C++", "SQL"],
            answer: 1
        },
        {
            question: "Which device is used to point and click?",
            options: ["Keyboard", "Monitor", "Mouse", "Printer"],
            answer: 2
        },
        {
            question: "What does RAM stand for?",
            options: [
                "Random Access Memory",
                "Read Access Machine",
                "Rapid Application Memory",
                "Random Application Module"
            ],
            answer: 0
        },
        {
            question: "Which one is an operating system?",
            options: ["Windows", "Chrome", "Google", "HTML"],
            answer: 0
        },
        {
            question: "Which symbol starts a comment in Python?",
            options: ["//", "#", "/*", "--"],
            answer: 1
        },
        {
            question: "What does URL stand for?",
            options: [
                "Uniform Resource Locator",
                "Universal Reading Link",
                "User Resource Location",
                "Uniform Reference Line"
            ],
            answer: 0
        },
        {
            question: "Which device displays visual output?",
            options: ["Scanner", "Keyboard", "Monitor", "Microphone"],
            answer: 2
        },
        {
            question: "Which of these is a programming language?",
            options: ["Python", "Google", "Windows", "Wi-Fi"],
            answer: 0
        },
        {
            question: "What is used to store files permanently?",
            options: ["RAM", "Hard drive", "Cache", "CPU"],
            answer: 1
        }
    ],


    "General Knowledge": [
        {
            question: "What is the capital of Pakistan?",
            options: ["Lahore", "Karachi", "Islamabad", "Peshawar"],
            answer: 2
        },
        {
            question: "Which is the largest ocean?",
            options: [
                "Atlantic Ocean",
                "Indian Ocean",
                "Pacific Ocean",
                "Arctic Ocean"
            ],
            answer: 2
        },
        {
            question: "How many continents are there?",
            options: ["5", "6", "7", "8"],
            answer: 2
        },
        {
            question: "Which planet is known as the Red Planet?",
            options: ["Venus", "Mars", "Jupiter", "Mercury"],
            answer: 1
        },
        {
            question: "Which is the largest planet in our solar system?",
            options: ["Earth", "Saturn", "Jupiter", "Neptune"],
            answer: 2
        },
        {
            question: "How many days are there in a leap year?",
            options: ["365", "366", "364", "360"],
            answer: 1
        },
        {
            question: "Which country is famous for the Eiffel Tower?",
            options: ["Italy", "France", "Spain", "Germany"],
            answer: 1
        },
        {
            question: "What is the currency of Japan?",
            options: ["Won", "Yuan", "Yen", "Ringgit"],
            answer: 2
        },
        {
            question: "Which gas makes up most of Earth's atmosphere?",
            options: [
                "Oxygen",
                "Nitrogen",
                "Carbon dioxide",
                "Hydrogen"
            ],
            answer: 1
        },
        {
            question: "How many hours are there in one day?",
            options: ["12", "18", "24", "48"],
            answer: 2
        }
    ]

};


// ==========================================
// LOGIN
// ==========================================

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    const usernameInput =
        document.getElementById("username");

    const passwordInput =
        document.getElementById("password");

    const togglePassword =
        document.getElementById("togglePassword");

    const loginMessage =
        document.getElementById("loginMessage");


    togglePassword.addEventListener("click", function () {

        if (passwordInput.type === "password") {

            passwordInput.type = "text";
            togglePassword.textContent = "Hide";

        } else {

            passwordInput.type = "password";
            togglePassword.textContent = "Show";

        }

    });


    loginForm.addEventListener("submit", function (event) {

        event.preventDefault();


        const username =
            usernameInput.value.trim();

        const password =
            passwordInput.value.trim();


        if (!username) {

            loginMessage.textContent =
                "Please enter your name.";

            loginMessage.style.color =
                "#d14343";

            return;

        }


        if (!password) {

            loginMessage.textContent =
                "Please enter your password.";

            loginMessage.style.color =
                "#d14343";

            return;

        }


        if (password.length < 4) {

            loginMessage.textContent =
                "Password must contain at least 4 characters.";

            loginMessage.style.color =
                "#d14343";

            return;

        }


        localStorage.setItem(
            "brainBanterUser",
            username
        );


        loginMessage.textContent =
            "Login successful. Opening portal...";

        loginMessage.style.color =
            "#16803c";


        setTimeout(function () {

            window.location.href =
                "dashboard.html";

        }, 700);

    });

}


// ==========================================
// DASHBOARD
// ==========================================

const userName =
    document.getElementById("userName");


if (userName) {

    const savedUser =
        localStorage.getItem(
            "brainBanterUser"
        );


    if (!savedUser) {

        window.location.href =
            "index.html";

    } else {

        userName.textContent =
            savedUser;

    }

}


// ==========================================
// SUBJECT CARDS
// ==========================================

const subjectCards =
    document.querySelectorAll(
        ".subject-card"
    );


subjectCards.forEach(function (card) {

    card.addEventListener(
        "click",
        function () {

            const subject =
                card.dataset.subject;


            localStorage.setItem(
                "selectedSubject",
                subject
            );


            window.location.href =
                "quiz.html";

        }
    );

});


// ==========================================
// LOGOUT
// ==========================================

const logoutButton =
    document.getElementById(
        "logoutButton"
    );

const resultLogout =
    document.getElementById(
        "resultLogout"
    );


function logoutUser() {

    localStorage.removeItem(
        "brainBanterUser"
    );

    localStorage.removeItem(
        "selectedSubject"
    );

    localStorage.removeItem(
        "quizScore"
    );

    localStorage.removeItem(
        "quizTotal"
    );

    localStorage.removeItem(
        "quizPercentage"
    );

    window.location.href =
        "index.html";

}


if (logoutButton) {

    logoutButton.addEventListener(
        "click",
        logoutUser
    );

}


if (resultLogout) {

    resultLogout.addEventListener(
        "click",
        logoutUser
    );

}


// ==========================================
// QUIZ VARIABLES
// ==========================================

let currentQuestionIndex = 0;

let selectedAnswers = [];

let timeLeft = 300;

let timerInterval = null;

let currentQuestions = [];

let currentSubject = "";


// ==========================================
// QUIZ START
// ==========================================

const questionText =
    document.getElementById(
        "questionText"
    );


if (questionText) {

    const savedUser =
        localStorage.getItem(
            "brainBanterUser"
        );


    currentSubject =
        localStorage.getItem(
            "selectedSubject"
        );


    if (
        !savedUser ||
        !currentSubject ||
        !quizData[currentSubject]
    ) {

        window.location.href =
            "dashboard.html";

    } else {

        currentQuestions =
            quizData[currentSubject];


        selectedAnswers =
            new Array(
                currentQuestions.length
            ).fill(null);


        document.getElementById(
            "quizSubject"
        ).textContent =
            currentSubject;


        document.getElementById(
            "totalQuestions"
        ).textContent =
            currentQuestions.length;


        loadQuestion();

        startTimer();

    }

}


// ==========================================
// LOAD QUESTION
// ==========================================

function loadQuestion() {

    const question =
        currentQuestions[
            currentQuestionIndex
        ];


    document.getElementById(
        "questionText"
    ).textContent =
        question.question;


    document.getElementById(
        "questionNumber"
    ).textContent =
        String(
            currentQuestionIndex + 1
        ).padStart(2, "0");


    document.getElementById(
        "currentQuestion"
    ).textContent =
        currentQuestionIndex + 1;


    const percentage =
        Math.round(
            (
                (currentQuestionIndex + 1) /
                currentQuestions.length
            ) * 100
        );


    document.getElementById(
        "progressPercent"
    ).textContent =
        percentage + "%";


    document.getElementById(
        "progressFill"
    ).style.width =
        percentage + "%";


    const optionsContainer =
        document.getElementById(
            "optionsContainer"
        );


    optionsContainer.innerHTML = "";


    question.options.forEach(
        function (option, index) {

            const button =
                document.createElement(
                    "button"
                );


            button.type = "button";

            button.className =
                "quiz-option";


            if (
                selectedAnswers[
                    currentQuestionIndex
                ] === index
            ) {

                button.classList.add(
                    "selected"
                );

            }


            button.innerHTML = `
                <span class="option-letter">
                    ${String.fromCharCode(65 + index)}
                </span>

                <span class="option-text">
                    ${option}
                </span>
            `;


            button.addEventListener(
                "click",
                function () {

                    selectedAnswers[
                        currentQuestionIndex
                    ] = index;

                    loadQuestion();

                }
            );


            optionsContainer.appendChild(
                button
            );

        }
    );


    const previousButton =
        document.getElementById(
            "previousButton"
        );


    previousButton.disabled =
        currentQuestionIndex === 0;


    const nextButton =
        document.getElementById(
            "nextButton"
        );


    nextButton.textContent =
        currentQuestionIndex ===
        currentQuestions.length - 1
            ? "Finish Quiz"
            : "Next →";

}


// ==========================================
// NEXT
// ==========================================

const nextButton =
    document.getElementById(
        "nextButton"
    );


if (nextButton) {

    nextButton.addEventListener(
        "click",
        function () {

            if (
                selectedAnswers[
                    currentQuestionIndex
                ] === null
            ) {

                alert(
                    "Please select an answer first."
                );

                return;

            }


            if (
                currentQuestionIndex <
                currentQuestions.length - 1
            ) {

                currentQuestionIndex++;

                loadQuestion();

            } else {

                finishQuiz();

            }

        }
    );

}


// ==========================================
// PREVIOUS
// ==========================================

const previousButton =
    document.getElementById(
        "previousButton"
    );


if (previousButton) {

    previousButton.addEventListener(
        "click",
        function () {

            if (
                currentQuestionIndex > 0
            ) {

                currentQuestionIndex--;

                loadQuestion();

            }

        }
    );

}


// ==========================================
// TIMER
// ==========================================

function startTimer() {

    updateTimerDisplay();


    timerInterval =
        setInterval(
            function () {

                timeLeft--;

                updateTimerDisplay();


                if (timeLeft <= 0) {

                    clearInterval(
                        timerInterval
                    );

                    finishQuiz();

                }

            },
            1000
        );

}


function updateTimerDisplay() {

    const timer =
        document.getElementById(
            "timer"
        );


    if (!timer) return;


    const minutes =
        Math.floor(
            timeLeft / 60
        );


    const seconds =
        timeLeft % 60;


    timer.textContent =
        String(minutes).padStart(2, "0")
        + ":"
        + String(seconds).padStart(2, "0");


    if (timeLeft <= 30) {

        timer.classList.add(
            "timer-warning"
        );

    }

}


// ==========================================
// FINISH QUIZ
// ==========================================

function finishQuiz() {

    clearInterval(
        timerInterval
    );


    let score = 0;


    currentQuestions.forEach(
        function (question, index) {

            if (
                selectedAnswers[index] ===
                question.answer
            ) {

                score++;

            }

        }
    );


    const total =
        currentQuestions.length;


    const percentage =
        Math.round(
            (score / total) * 100
        );


    localStorage.setItem(
        "quizScore",
        score
    );


    localStorage.setItem(
        "quizTotal",
        total
    );


    localStorage.setItem(
        "quizPercentage",
        percentage
    );


    localStorage.setItem(
        "quizAnswers",
        JSON.stringify(
            selectedAnswers
        )
    );


    window.location.href =
        "result.html";

}


// ==========================================
// RESULT PAGE
// ==========================================

const scoreElement =
    document.getElementById("score");


if (scoreElement) {

    const savedUser =
        localStorage.getItem(
            "brainBanterUser"
        );

    const subject =
        localStorage.getItem(
            "selectedSubject"
        );

    const score =
        Number(
            localStorage.getItem(
                "quizScore"
            )
        ) || 0;

    const total =
        Number(
            localStorage.getItem(
                "quizTotal"
            )
        ) || 10;

    const percentage =
        Number(
            localStorage.getItem(
                "quizPercentage"
            )
        ) || 0;


    document.getElementById(
        "resultUser"
    ).textContent =
        savedUser || "Explorer";


    document.getElementById(
        "resultSubject"
    ).textContent =
        subject || "Quiz";


    document.getElementById(
        "score"
    ).textContent =
        score;


    document.getElementById(
        "total"
    ).textContent =
        total;


    document.getElementById(
        "percentage"
    ).textContent =
        percentage + "%";


    document.getElementById(
        "percentageFill"
    ).style.width =
        percentage + "%";


    document.getElementById(
        "correctAnswers"
    ).textContent =
        score;


    document.getElementById(
        "wrongAnswers"
    ).textContent =
        total - score;


    document.getElementById(
        "attemptedAnswers"
    ).textContent =
        total;


    const performanceMessage =
        document.getElementById(
            "performanceMessage"
        );


    if (percentage >= 90) {

        performanceMessage.textContent =
            "Excellent work! Your knowledge is impressive.";

    } else if (percentage >= 70) {

        performanceMessage.textContent =
            "Great job! You have a strong understanding.";

    } else if (percentage >= 50) {

        performanceMessage.textContent =
            "Good effort! Keep practicing to improve.";

    } else {

        performanceMessage.textContent =
            "Keep learning and try the quiz again.";

    }

}


// ==========================================
// RETRY QUIZ
// ==========================================

const retryQuiz =
    document.getElementById(
        "retryQuiz"
    );


if (retryQuiz) {

    retryQuiz.addEventListener(
        "click",
        function () {

            window.location.href =
                "quiz.html";

        }
    );

}


// ==========================================
// RESULT → DASHBOARD
// ==========================================

const resultDashboard =
    document.getElementById(
        "resultDashboard"
    );


if (resultDashboard) {

    resultDashboard.addEventListener(
        "click",
        function () {

            window.location.href =
                "dashboard.html";

        }
    );

}


// ==========================================
// QUIZ → DASHBOARD
// ==========================================

const backToDashboard =
    document.getElementById(
        "backToDashboard"
    );


if (backToDashboard) {

    backToDashboard.addEventListener(
        "click",
        function () {

            clearInterval(
                timerInterval
            );

            window.location.href =
                "dashboard.html";

        }
    );

}


// ==========================================
// EXIT QUIZ
// ==========================================

const exitQuiz =
    document.getElementById(
        "exitQuiz"
    );


if (exitQuiz) {

    exitQuiz.addEventListener(
        "click",
        function () {

            const confirmed =
                confirm(
                    "Are you sure you want to exit the quiz?"
                );


            if (confirmed) {

                clearInterval(
                    timerInterval
                );

                window.location.href =
                    "dashboard.html";

            }

        }
    );

}
