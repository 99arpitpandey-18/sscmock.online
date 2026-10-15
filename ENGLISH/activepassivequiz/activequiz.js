// =========================================================
// SSC MOCK TEST
// ACTIVE & PASSIVE VOICE
// activequiz.js
// =========================================================

"use strict";


// =========================================================
// SETTINGS
// =========================================================

const DATA_FILE = "active-passive.json";


// =========================================================
// QUIZ STATE
// =========================================================

let allQuizzes = [];

let currentQuiz = null;

let questions = [];

let currentQuestionIndex = 0;

let userAnswers = [];

let timeLeft = 10 * 60;

let timerInterval = null;

let quizSubmitted = false;


// =========================================================
// DOM ELEMENTS
// =========================================================

const quizTitle =
    document.getElementById("quizTitle");

const quizSubtitle =
    document.getElementById("quizSubtitle");

const timerElement =
    document.getElementById("timer");

const currentQuestionElement =
    document.getElementById("currentQuestion");

const totalQuestionElement =
    document.getElementById("totalQuestion");

const answeredCountElement =
    document.getElementById("answeredCount");

const progressFill =
    document.getElementById("progressFill");

const questionStatus =
    document.getElementById("questionStatus");

const questionText =
    document.getElementById("questionText");

const optionsContainer =
    document.getElementById("optionsContainer");

const previousBtn =
    document.getElementById("previousBtn");

const clearBtn =
    document.getElementById("clearBtn");

const nextBtn =
    document.getElementById("nextBtn");

const questionNumbers =
    document.getElementById("questionNumbers");

const paletteCount =
    document.getElementById("paletteCount");

const submitBtn =
    document.getElementById("submitBtn");

const explanationBox =
    document.getElementById("explanationBox");

const explanationText =
    document.getElementById("explanationText");

const resultOverlay =
    document.getElementById("resultOverlay");

const resultScore =
    document.getElementById("resultScore");

const correctAnswers =
    document.getElementById("correctAnswers");

const wrongAnswers =
    document.getElementById("wrongAnswers");

const unansweredQuestions =
    document.getElementById(
        "unansweredQuestions"
    );

const resultPercentage =
    document.getElementById(
        "resultPercentage"
    );

const retryBtn =
    document.getElementById("retryBtn");

const backToQuizzesBtn =
    document.getElementById(
        "backToQuizzesBtn"
    );


// =========================================================
// PAGE LOAD
// =========================================================

document.addEventListener(
    "DOMContentLoaded",
    () => {

        loadQuiz();

        setupEvents();

    }
);


// =========================================================
// GET QUIZ ID FROM URL
// =========================================================

function getQuizIdFromURL() {

    const params =
        new URLSearchParams(
            window.location.search
        );

    return (
        params.get("quiz") ||
        "1"
    );

}


// =========================================================
// LOAD QUIZ
// =========================================================

async function loadQuiz() {

    try {

        showLoading();

        const response =
            await fetch(DATA_FILE);

        if (!response.ok) {

            throw new Error(
                "Unable to load quiz data."
            );

        }

        const data =
            await response.json();


        allQuizzes =
            getQuizList(data);


        if (!allQuizzes.length) {

            throw new Error(
                "No quizzes found."
            );

        }


        const requestedQuiz =
            getQuizIdFromURL();


        currentQuiz =
            findQuiz(
                requestedQuiz
            );


        if (!currentQuiz) {

            currentQuiz =
                allQuizzes[0];

        }


        questions =
            getQuestions(
                currentQuiz
            );


        if (!questions.length) {

            throw new Error(
                "No questions found in this quiz."
            );

        }


        // Create answer array

        userAnswers =
            new Array(
                questions.length
            ).fill(null);


        currentQuestionIndex = 0;

        quizSubmitted = false;


        // Timer

        timeLeft =
            getQuizTime(
                currentQuiz
            );


        updateQuizHeader();

        createQuestionPalette();

        renderQuestion();

        startTimer();


    } catch (error) {

        console.error(error);

        showError(
            error.message
        );

    }

}


// =========================================================
// GET QUIZ LIST
// =========================================================

function getQuizList(data) {

    if (Array.isArray(data)) {

        return data;

    }


    if (
        data &&
        Array.isArray(data.quizzes)
    ) {

        return data.quizzes;

    }


    if (
        data &&
        typeof data === "object"
    ) {

        return Object.entries(data)

            .map(
                ([key, value]) => {

                    if (
                        value &&
                        typeof value === "object"
                    ) {

                        return {

                            ...value,

                            id:
                                value.id ||
                                value.quizId ||
                                key

                        };

                    }

                    return null;

                }
            )

            .filter(Boolean);

    }


    return [];

}


// =========================================================
// FIND QUIZ
// =========================================================

function findQuiz(requestedId) {

    const requestedString =
        String(requestedId);


    return allQuizzes.find(
        (quiz, index) => {

            const id =
                String(
                    quiz.id ||
                    quiz.quizId ||
                    quiz.number ||
                    quiz.quizNumber ||
                    index + 1
                );


            return (
                id === requestedString ||
                String(index + 1) === requestedString
            );

        }
    );

}


// =========================================================
// GET QUESTIONS
// =========================================================

function getQuestions(quiz) {

    if (!quiz) {
        return [];
    }


    if (Array.isArray(quiz.questions)) {

        return quiz.questions;

    }


    if (Array.isArray(quiz.data)) {

        return quiz.data;

    }


    return [];

}


// =========================================================
// GET QUIZ TIME
// =========================================================

function getQuizTime(quiz) {

    /*
        JSON can optionally contain:

        "time": 600

        or

        "duration": 600

        Time is in seconds.
    */


    const time =
        Number(
            quiz.time ||
            quiz.duration ||
            600
        );


    return (
        Number.isFinite(time) &&
        time > 0
    )
        ? time
        : 600;

}


// =========================================================
// UPDATE HEADER
// =========================================================

function updateQuizHeader() {

    const title =
        currentQuiz.title ||
        currentQuiz.name ||
        currentQuiz.quizName ||
        "Active & Passive Voice";


    quizTitle.textContent =
        title;


    quizSubtitle.textContent =
        "SSC Practice Test";


    totalQuestionElement.textContent =
        questions.length;


    paletteCount.textContent =
        questions.length;

}


// =========================================================
// SHOW LOADING
// =========================================================

function showLoading() {

    questionText.innerHTML = `
        <div class="loading-question">
            Loading questions...
        </div>
    `;


    optionsContainer.innerHTML = "";

}


// =========================================================
// SHOW ERROR
// =========================================================

function showError(message) {

    questionText.innerHTML = `
        <div class="quiz-error">
            <strong>Unable to load quiz.</strong>
            <br><br>
            ${escapeHTML(message)}
            <br><br>
            Make sure
            <strong>active-passive.json</strong>
            is available and the website is being
            opened through Live Server.
        </div>
    `;


    optionsContainer.innerHTML = "";

    stopTimer();

}


// =========================================================
// RENDER QUESTION
// =========================================================

function renderQuestion() {

    if (
        !questions.length ||
        quizSubmitted
    ) {

        return;

    }


    const question =
        questions[
            currentQuestionIndex
        ];


    const questionNumber =
        currentQuestionIndex + 1;


    // -----------------------------------------
    // QUESTION NUMBER
    // -----------------------------------------

    currentQuestionElement.textContent =
        questionNumber;


    totalQuestionElement.textContent =
        questions.length;


    // -----------------------------------------
    // QUESTION TEXT
    // -----------------------------------------

    const text =
        getQuestionText(
            question
        );


    questionText.innerHTML =
        escapeHTML(text);


    // -----------------------------------------
    // STATUS
    // -----------------------------------------

    const answer =
        userAnswers[
            currentQuestionIndex
        ];


    if (answer !== null) {

        questionStatus.textContent =
            "Answered";

        questionStatus.style.color =
            "#16833b";

        questionStatus.style.background =
            "#e8f8ee";

    } else {

        questionStatus.textContent =
            "Not Answered";

        questionStatus.style.color =
            "#8a95a6";

        questionStatus.style.background =
            "#f2f4f8";

    }


    // -----------------------------------------
    // OPTIONS
    // -----------------------------------------

    renderOptions(question);


    // -----------------------------------------
    // EXPLANATION
    // -----------------------------------------

    explanationBox.style.display =
        "none";

    explanationText.textContent =
        "";


    // -----------------------------------------
    // NAVIGATION
    // -----------------------------------------

    previousBtn.disabled =
        currentQuestionIndex === 0;


    if (
        currentQuestionIndex ===
        questions.length - 1
    ) {

        nextBtn.textContent =
            "Finish →";

    } else {

        nextBtn.textContent =
            "Next →";

    }


    // -----------------------------------------
    // PROGRESS
    // -----------------------------------------

    updateProgress();


    // -----------------------------------------
    // PALETTE
    // -----------------------------------------

    updateQuestionPalette();

}


// =========================================================
// GET QUESTION TEXT
// =========================================================

function getQuestionText(question) {

    return (
        question.question ||
        question.text ||
        question.questionText ||
        "Question not available."
    );

}


// =========================================================
// GET OPTIONS
// =========================================================

function getOptions(question) {

    if (
        Array.isArray(
            question.options
        )
    ) {

        return question.options;

    }


    if (
        Array.isArray(
            question.choices
        )
    ) {

        return question.choices;

    }


    return [];

}


// =========================================================
// RENDER OPTIONS
// =========================================================

function renderOptions(question) {

    optionsContainer.innerHTML = "";


    const options =
        getOptions(question);


    if (!options.length) {

        optionsContainer.innerHTML = `
            <div class="quiz-error">
                No options found for this question.
            </div>
        `;

        return;

    }


    const selectedAnswer =
        userAnswers[
            currentQuestionIndex
        ];


    options.forEach(
        (option, index) => {

            const optionElement =
                document.createElement("div");


            optionElement.className =
                "option";


            if (
                selectedAnswer === index
            ) {

                optionElement.classList.add(
                    "selected"
                );

            }


            const letter =
                String.fromCharCode(
                    65 + index
                );


            optionElement.innerHTML = `

                <span class="option-letter">
                    ${letter}
                </span>

                <span class="option-text">
                    ${escapeHTML(
                        getOptionText(option)
                    )}
                </span>

            `;


            optionElement.addEventListener(
                "click",
                () => {

                    selectAnswer(index);

                }
            );


            optionsContainer.appendChild(
                optionElement
            );

        }
    );

}


// =========================================================
// GET OPTION TEXT
// =========================================================

function getOptionText(option) {

    if (
        typeof option === "string"
    ) {

        return option;

    }


    if (
        option &&
        typeof option === "object"
    ) {

        return (
            option.text ||
            option.option ||
            option.value ||
            ""
        );

    }


    return "";

}


// =========================================================
// SELECT ANSWER
// =========================================================

function selectAnswer(index) {

    if (quizSubmitted) {
        return;
    }


    userAnswers[
        currentQuestionIndex
    ] = index;


    renderQuestion();


    updateAnsweredCount();

}


// =========================================================
// CLEAR ANSWER
// =========================================================

function clearAnswer() {

    userAnswers[
        currentQuestionIndex
    ] = null;


    renderQuestion();

}


// =========================================================
// PREVIOUS QUESTION
// =========================================================

function previousQuestion() {

    if (
        currentQuestionIndex <= 0
    ) {

        return;

    }


    currentQuestionIndex--;

    renderQuestion();

}


// =========================================================
// NEXT QUESTION
// =========================================================

function nextQuestion() {

    if (
        currentQuestionIndex <
        questions.length - 1
    ) {

        currentQuestionIndex++;

        renderQuestion();

        return;

    }


    // Last question

    const confirmed =
        window.confirm(
            "You are on the last question. Do you want to submit the test?"
        );


    if (confirmed) {

        submitQuiz();

    }

}


// =========================================================
// CREATE QUESTION PALETTE
// =========================================================

function createQuestionPalette() {

    questionNumbers.innerHTML = "";


    questions.forEach(
        (_, index) => {

            const button =
                document.createElement("button");


            button.type =
                "button";


            button.className =
                "question-number-btn";


            button.textContent =
                index + 1;


            button.addEventListener(
                "click",
                () => {

                    currentQuestionIndex =
                        index;

                    renderQuestion();

                }
            );


            questionNumbers.appendChild(
                button
            );

        }
    );

}


// =========================================================
// UPDATE QUESTION PALETTE
// =========================================================

function updateQuestionPalette() {

    const buttons =
        questionNumbers.querySelectorAll(
            ".question-number-btn"
        );


    buttons.forEach(
        (button, index) => {

            button.classList.remove(
                "current",
                "answered"
            );


            if (
                index ===
                currentQuestionIndex
            ) {

                button.classList.add(
                    "current"
                );

            }


            if (
                userAnswers[index] !== null
            ) {

                button.classList.add(
                    "answered"
                );

            }

        }
    );

}


// =========================================================
// UPDATE PROGRESS
// =========================================================

function updateProgress() {

    const progress =
        (
            (currentQuestionIndex + 1) /
            questions.length
        ) * 100;


    progressFill.style.width =
        `${progress}%`;


    updateAnsweredCount();

}


// =========================================================
// ANSWERED COUNT
// =========================================================

function updateAnsweredCount() {

    const count =
        userAnswers.filter(
            answer =>
                answer !== null
        ).length;


    answeredCountElement.textContent =
        `${count} Answered`;

}


// =========================================================
// TIMER
// =========================================================

function startTimer() {

    stopTimer();


    updateTimer();


    timerInterval =
        setInterval(
            () => {

                timeLeft--;


                updateTimer();


                if (
                    timeLeft <= 0
                ) {

                    stopTimer();

                    alert(
                        "Time is over. Your test will be submitted."
                    );

                    submitQuiz();

                }

            },
            1000
        );

}


// =========================================================
// UPDATE TIMER
// =========================================================

function updateTimer() {

    const minutes =
        Math.floor(
            timeLeft / 60
        );


    const seconds =
        timeLeft % 60;


    timerElement.textContent =
        `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;


    if (
        timeLeft <= 60
    ) {

        timerElement.style.color =
            "#ffdddd";

    } else {

        timerElement.style.color =
            "white";

    }

}


// =========================================================
// STOP TIMER
// =========================================================

function stopTimer() {

    if (
        timerInterval !== null
    ) {

        clearInterval(
            timerInterval
        );

        timerInterval = null;

    }

}


// =========================================================
// SUBMIT QUIZ
// =========================================================

function submitQuiz() {

    if (quizSubmitted) {
        return;
    }


    const unanswered =
        userAnswers.filter(
            answer =>
                answer === null
        ).length;


    if (
        unanswered > 0 &&
        timeLeft > 0
    ) {

        const confirmed =
            window.confirm(
                `You have ${unanswered} unanswered question(s). Do you still want to submit?`
            );


        if (!confirmed) {
            return;
        }

    }


    quizSubmitted = true;


    stopTimer();


    calculateResult();


    resultOverlay.style.display =
        "flex";


    // Prevent further selection

    optionsContainer
        .querySelectorAll(".option")
        .forEach(
            option => {

                option.style.cursor =
                    "default";

            }
        );

}


// =========================================================
// CALCULATE RESULT
// =========================================================

function calculateResult() {

    let correct = 0;

    let wrong = 0;

    let unanswered = 0;


    questions.forEach(
        (question, index) => {

            const userAnswer =
                userAnswers[index];


            if (
                userAnswer === null
            ) {

                unanswered++;

                return;

            }


            const correctAnswer =
                getCorrectAnswer(
                    question
                );


            if (
                isCorrectAnswer(
                    userAnswer,
                    correctAnswer
                )
            ) {

                correct++;

            } else {

                wrong++;

            }

        }
    );


    const total =
        questions.length;


    const percentage =
        total > 0
            ? Math.round(
                (correct / total) * 100
            )
            : 0;


    resultScore.textContent =
        correct;


    correctAnswers.textContent =
        correct;


    wrongAnswers.textContent =
        wrong;


    unansweredQuestions.textContent =
        unanswered;


    resultPercentage.textContent =
        `${percentage}%`;

}


// =========================================================
// GET CORRECT ANSWER
// =========================================================

function getCorrectAnswer(question) {

    /*
        Supported formats:

        "answer": 0

        "correctAnswer": 0

        "correct": 0

        "answer": "A"

        "correctAnswer": "A"
    */


    if (
        question.answer !== undefined
    ) {

        return question.answer;

    }


    if (
        question.correctAnswer !== undefined
    ) {

        return question.correctAnswer;

    }


    if (
        question.correct !== undefined
    ) {

        return question.correct;

    }


    return null;

}


// =========================================================
// CHECK ANSWER
// =========================================================

function isCorrectAnswer(
    userAnswer,
    correctAnswer
) {

    if (
        correctAnswer === null ||
        correctAnswer === undefined
    ) {

        return false;

    }


    // Numeric answer

    if (
        typeof correctAnswer === "number"
    ) {

        return (
            userAnswer ===
            correctAnswer
        );

    }


    // String answer

    const answerString =
        String(
            correctAnswer
        )
        .trim()
        .toUpperCase();


    // A / B / C / D

    if (
        /^[A-Z]$/.test(
            answerString
        )
    ) {

        const correctIndex =
            answerString.charCodeAt(0) -
            65;


        return (
            userAnswer ===
            correctIndex
        );

    }


    // Numeric string

    if (
        /^\d+$/.test(
            answerString
        )
    ) {

        return (
            userAnswer ===
            Number(answerString)
        );

    }


    // Compare actual option text

    const question =
        questions[
            currentQuestionIndex
        ];


    const options =
        getOptions(question);


    if (
        options[userAnswer] !== undefined
    ) {

        const selectedText =
            getOptionText(
                options[userAnswer]
            )
            .trim()
            .toLowerCase();


        return (
            selectedText ===
            answerString.toLowerCase()
        );

    }


    return false;

}


// =========================================================
// RETRY QUIZ
// =========================================================

function retryQuiz() {

    window.location.reload();

}


// =========================================================
// BACK TO QUIZZES
// =========================================================

function backToQuizzes() {

    window.location.href =
        "active.html";

}


// =========================================================
// EVENTS
// =========================================================

function setupEvents() {

    previousBtn.addEventListener(
        "click",
        previousQuestion
    );


    nextBtn.addEventListener(
        "click",
        nextQuestion
    );


    clearBtn.addEventListener(
        "click",
        clearAnswer
    );


    submitBtn.addEventListener(
        "click",
        submitQuiz
    );


    retryBtn.addEventListener(
        "click",
        retryQuiz
    );


    backToQuizzesBtn.addEventListener(
        "click",
        backToQuizzes
    );

}


// =========================================================
// ESCAPE HTML
// =========================================================

function escapeHTML(value) {

    return String(value)

        .replace(
            /&/g,
            "&amp;"
        )

        .replace(
            /</g,
            "&lt;"
        )

        .replace(
            />/g,
            "&gt;"
        )

        .replace(
            /"/g,
            "&quot;"
        )

        .replace(
            /'/g,
            "&#039;"
        );

}