/* =========================================================
   SSC CGL CLOZE TEST
   COMPLETE QUIZ ENGINE

   Connected Files:
   cloze-test.html
   cloze-test.js
   clozequiz.html
   clozequiz.css
   cloze-data.js
   ========================================================= */

"use strict";


/* =========================================================
   SETTINGS
   ========================================================= */

const TOTAL_QUESTIONS = 10;

const TOTAL_TIME = 10 * 60;


/* =========================================================
   STATE
   ========================================================= */

let currentQuestion = 0;

let selectedAnswers = [];

let timeLeft = TOTAL_TIME;

let timerInterval = null;

let quizFinished = false;


/* =========================================================
   GET QUIZ NUMBER FROM URL
   ========================================================= */

const urlParams =
    new URLSearchParams(
        window.location.search
    );


let quizNumber =
    parseInt(
        urlParams.get("quiz"),
        10
    );


if (
    isNaN(quizNumber) ||
    quizNumber < 1 ||
    quizNumber > 50
) {

    quizNumber = 1;

}


/* =========================================================
   GET QUIZ DATA
   ========================================================= */

const quizData =
    window.CLOZE_DATA
        ? window.CLOZE_DATA[quizNumber]
        : null;


if (!quizData) {

    console.error(
        "Cloze Test data not found."
    );

}


/* =========================================================
   DOM ELEMENTS
   ========================================================= */

const quizTitle =
    document.getElementById(
        "quizTitle"
    );


const passageContent =
    document.getElementById(
        "passageContent"
    );


const questionText =
    document.getElementById(
        "questionText"
    );


const questionNumber =
    document.getElementById(
        "questionNumber"
    );


const currentQuestionElement =
    document.getElementById(
        "currentQuestion"
    );


const totalQuestionElement =
    document.getElementById(
        "totalQuestion"
    );


const optionsContainer =
    document.getElementById(
        "optionsContainer"
    );


const previousBtn =
    document.getElementById(
        "previousBtn"
    );


const nextBtn =
    document.getElementById(
        "nextBtn"
    );


const answeredCount =
    document.getElementById(
        "answeredCount"
    );


const answeredTotal =
    document.getElementById(
        "answeredTotal"
    );


const timerElement =
    document.getElementById(
        "timer"
    );


const timerBox =
    document.getElementById(
        "timerBox"
    );


const resultOverlay =
    document.getElementById(
        "resultOverlay"
    );


const finalScore =
    document.getElementById(
        "finalScore"
    );


const correctAnswers =
    document.getElementById(
        "correctAnswers"
    );


const wrongAnswers =
    document.getElementById(
        "wrongAnswers"
    );


const unattemptedAnswers =
    document.getElementById(
        "unattemptedAnswers"
    );


const retryBtn =
    document.getElementById(
        "retryBtn"
    );


/* =========================================================
   START
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        initializeQuiz();

    }
);


/* =========================================================
   INITIALIZE QUIZ
   ========================================================= */

function initializeQuiz() {

    if (!quizData) {

        showDataError();

        return;

    }


    selectedAnswers =
        new Array(
            TOTAL_QUESTIONS
        ).fill(null);


    quizTitle.textContent =
        quizData.title;


    totalQuestionElement.textContent =
        TOTAL_QUESTIONS;


    answeredTotal.textContent =
        TOTAL_QUESTIONS;


    loadPassage();


    showQuestion();


    startTimer();

}


/* =========================================================
   LOAD PASSAGE
   ========================================================= */

function loadPassage() {

    if (!passageContent) {
        return;
    }


    let passage =
        quizData.passage;


    /*
     * Replace blanks with highlighted
     * blank numbers.
     */

    passage =
        passage.replace(
            /___(\d+)___/g,
            function (match, number) {

                return `
                    <span class="passage-blank">
                        [ ${number} ]
                    </span>
                `;

            }
        );


    passageContent.innerHTML =
        passage;

}


/* =========================================================
   SHOW QUESTION
   ========================================================= */

function showQuestion() {

    const question =
        quizData.questions[
            currentQuestion
        ];


    if (!question) {
        return;
    }


    /* Question numbers */

    questionNumber.textContent =
        currentQuestion + 1;


    currentQuestionElement.textContent =
        currentQuestion + 1;


    /* Question text */

    questionText.textContent =
        question.question;


    /* Options */

    renderOptions(
        question
    );


    /* Navigation */

    updateNavigation();


    /* Answer count */

    updateAnsweredCount();

}


/* =========================================================
   RENDER OPTIONS
   ========================================================= */

function renderOptions(question) {

    optionsContainer.innerHTML =
        "";


    const labels = [
        "A",
        "B",
        "C",
        "D"
    ];


    question.options.forEach(
        function (option, index) {

            const button =
                document.createElement(
                    "button"
                );


            button.type =
                "button";


            button.className =
                "option-btn";


            button.dataset.option =
                option;


            button.innerHTML = `

                <span class="option-label">
                    ${labels[index]}
                </span>

                <span class="option-text">
                    ${escapeHTML(option)}
                </span>

            `;


            if (
                selectedAnswers[
                    currentQuestion
                ] === option
            ) {

                button.classList.add(
                    "selected"
                );

            }


            button.addEventListener(
                "click",
                function () {

                    selectAnswer(
                        option
                    );

                }
            );


            optionsContainer.appendChild(
                button
            );

        }
    );

}


/* =========================================================
   SELECT ANSWER
   ========================================================= */

function selectAnswer(option) {

    if (quizFinished) {
        return;
    }


    selectedAnswers[
        currentQuestion
    ] = option;


    const buttons =
        optionsContainer.querySelectorAll(
            ".option-btn"
        );


    buttons.forEach(
        function (button) {

            button.classList.remove(
                "selected"
            );


            if (
                button.dataset.option ===
                option
            ) {

                button.classList.add(
                    "selected"
                );

            }

        }
    );


    updateAnsweredCount();

}


/* =========================================================
   NEXT BUTTON
   ========================================================= */

nextBtn.addEventListener(
    "click",
    function () {

        if (quizFinished) {
            return;
        }


        if (
            currentQuestion <
            TOTAL_QUESTIONS - 1
        ) {

            currentQuestion++;

            showQuestion();

        } else {

            finishQuiz();

        }

    }
);


/* =========================================================
   PREVIOUS BUTTON
   ========================================================= */

previousBtn.addEventListener(
    "click",
    function () {

        if (quizFinished) {
            return;
        }


        if (currentQuestion > 0) {

            currentQuestion--;

            showQuestion();

        }

    }
);


/* =========================================================
   UPDATE NAVIGATION
   ========================================================= */

function updateNavigation() {

    previousBtn.disabled =
        currentQuestion === 0;


    if (
        currentQuestion ===
        TOTAL_QUESTIONS - 1
    ) {

        nextBtn.textContent =
            "Submit Test ✓";

    } else {

        nextBtn.textContent =
            "Next →";

    }

}


/* =========================================================
   UPDATE ANSWERED COUNT
   ========================================================= */

function updateAnsweredCount() {

    const answered =
        selectedAnswers.filter(
            function (answer) {

                return answer !== null;

            }
        ).length;


    answeredCount.textContent =
        answered;

}


/* =========================================================
   TIMER
   ========================================================= */

function startTimer() {

    clearInterval(
        timerInterval
    );


    updateTimer();


    timerInterval =
        setInterval(
            function () {

                if (timeLeft <= 0) {

                    clearInterval(
                        timerInterval
                    );


                    finishQuiz();

                    return;

                }


                timeLeft--;

                updateTimer();

            },
            1000
        );

}


/* =========================================================
   UPDATE TIMER DISPLAY
   ========================================================= */

function updateTimer() {

    const minutes =
        Math.floor(
            timeLeft / 60
        );


    const seconds =
        timeLeft % 60;


    timerElement.textContent =
        `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;


    if (timeLeft <= 60) {

        timerBox.classList.add(
            "timer-warning"
        );

    } else {

        timerBox.classList.remove(
            "timer-warning"
        );

    }

}


/* =========================================================
   FINISH QUIZ
   ========================================================= */

function finishQuiz() {

    if (quizFinished) {
        return;
    }


    quizFinished = true;


    clearInterval(
        timerInterval
    );


    calculateResult();


    resultOverlay.style.display =
        "flex";

}


/* =========================================================
   CALCULATE RESULT
   ========================================================= */

function calculateResult() {

    let correct = 0;

    let wrong = 0;

    let unattempted = 0;


    quizData.questions.forEach(
        function (question, index) {

            const selected =
                selectedAnswers[index];


            if (selected === null) {

                unattempted++;

            }

            else if (
                selected ===
                question.answer
            ) {

                correct++;

            }

            else {

                wrong++;

            }

        }
    );


    finalScore.textContent =
        `${correct}/${TOTAL_QUESTIONS}`;


    correctAnswers.textContent =
        correct;


    wrongAnswers.textContent =
        wrong;


    unattemptedAnswers.textContent =
        unattempted;

}


/* =========================================================
   RETRY QUIZ
   ========================================================= */

retryBtn.addEventListener(
    "click",
    function () {

        resultOverlay.style.display =
            "none";


        currentQuestion = 0;


        selectedAnswers =
            new Array(
                TOTAL_QUESTIONS
            ).fill(null);


        timeLeft =
            TOTAL_TIME;


        quizFinished = false;


        showQuestion();


        startTimer();

    }
);


/* =========================================================
   DATA ERROR
   ========================================================= */

function showDataError() {

    quizTitle.textContent =
        "Quiz Data Error";


    passageContent.textContent =
        "Unable to load Cloze Test data.";


    questionText.textContent =
        "Please check cloze-data.js";


    optionsContainer.innerHTML =
        "";

}


/* =========================================================
   ESCAPE HTML
   ========================================================= */

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