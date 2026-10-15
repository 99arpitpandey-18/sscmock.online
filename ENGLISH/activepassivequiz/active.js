// =========================================================
// SSC MOCK TEST
// ACTIVE & PASSIVE VOICE
// active.js
// =========================================================

"use strict";


// =========================================================
// SETTINGS
// =========================================================

const QUIZ_PAGE = "activequiz.html";


// =========================================================
// DOM ELEMENTS
// =========================================================

const quizGrid = document.getElementById("quizGrid");
const quizCount = document.getElementById("quizCount");
const totalQuizzes = document.getElementById("totalQuizzes");
const totalQuestions = document.getElementById("totalQuestions");


// =========================================================
// START
// =========================================================

document.addEventListener("DOMContentLoaded", () => {

    loadQuizData();

});


// =========================================================
// LOAD QUIZ DATA
// =========================================================

function loadQuizData() {

    showLoading();

    try {

        // Data now comes directly from active-passive.js
        const data = activePassiveData;

        const quizzes = getQuizList(data);

        if (!quizzes.length) {

            showEmpty();

            return;
        }

        updateStatistics(quizzes);

        createQuizCards(quizzes);

    }

    catch (error) {

        console.error("Quiz loading error:", error);

        showError();

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

            .map(([key, value]) => {

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

            })

            .filter(Boolean);

    }


    return [];

}


// =========================================================
// SHOW LOADING
// =========================================================

function showLoading() {

    quizGrid.innerHTML = `

        <div class="quiz-loading">

            Loading quizzes...

        </div>

    `;

}


// =========================================================
// SHOW EMPTY
// =========================================================

function showEmpty() {

    quizGrid.innerHTML = `

        <div class="quiz-empty">

            <h3>No quizzes available</h3>

            <p>
                Quiz data could not be found.
            </p>

        </div>

    `;


    if (quizCount) {

        quizCount.textContent = "0 Quizzes";

    }

}


// =========================================================
// SHOW ERROR
// =========================================================

function showError() {

    quizGrid.innerHTML = `

        <div class="quiz-empty">

            <h3>Unable to load quizzes</h3>

            <p>
                Please make sure
                <strong>active-passive.js</strong>
                is connected correctly.
            </p>

            <p style="margin-top:8px;">

                Check the script connection
                in active.html.

            </p>

        </div>

    `;

}


// =========================================================
// UPDATE STATISTICS
// =========================================================

function updateStatistics(quizzes) {

    let questionTotal = 0;


    quizzes.forEach((quiz) => {

        const questions =
            getQuestions(quiz);

        questionTotal += questions.length;

    });


    if (totalQuizzes) {

        totalQuizzes.textContent =
            quizzes.length;

    }


    if (totalQuestions) {

        totalQuestions.textContent =
            questionTotal;

    }


    if (quizCount) {

        quizCount.textContent =
            `${quizzes.length} Quiz${quizzes.length !== 1 ? "zes" : ""}`;

    }

}


// =========================================================
// GET QUESTIONS FROM QUIZ
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
// CREATE QUIZ CARDS
// =========================================================

function createQuizCards(quizzes) {

    quizGrid.innerHTML = "";


    quizzes.forEach((quiz, index) => {

        const card =
            createQuizCard(
                quiz,
                index
            );


        quizGrid.appendChild(card);

    });

}


// =========================================================
// CREATE SINGLE QUIZ CARD
// =========================================================

function createQuizCard(quiz, index) {

    const card =
        document.createElement("div");


    card.className = "quiz-card";


    const quizNumber =
        getQuizNumber(
            quiz,
            index
        );


    const quizTitle =
        getQuizTitle(
            quiz,
            index
        );


    const questions =
        getQuestions(quiz);


    const questionNumber =
        questions.length || 10;


    card.innerHTML = `

        <div class="quiz-card-top">

            <div class="quiz-number">

                ${quizNumber}

            </div>

            <div class="quiz-badge">

                PRACTICE

            </div>

        </div>


        <div>

            <h3>

                ${escapeHTML(quizTitle)}

            </h3>

            <p>

                Active &amp; Passive Voice

            </p>

        </div>


        <div class="quiz-card-bottom">

            <span class="question-count">

                ${questionNumber} Questions

            </span>


            <span class="start-text">

                Start →

            </span>

        </div>

    `;


    // =====================================================
    // CLICK → ACTIVEQUIZ.HTML
    // =====================================================

    card.addEventListener(

        "click",

        () => {

            openQuiz(
                quiz,
                index
            );

        }

    );


    return card;

}


// =========================================================
// GET QUIZ NUMBER
// =========================================================

function getQuizNumber(quiz, index) {

    if (quiz.number !== undefined) {

        return quiz.number;

    }


    if (quiz.quizNumber !== undefined) {

        return quiz.quizNumber;

    }


    return index + 1;

}


// =========================================================
// GET QUIZ TITLE
// =========================================================

function getQuizTitle(quiz, index) {

    return (

        quiz.title ||

        quiz.name ||

        quiz.quizName ||

        `Active & Passive Quiz ${index + 1}`

    );

}


// =========================================================
// OPEN QUIZ
// =========================================================

function openQuiz(quiz, index) {

    const quizId =
        getQuizId(
            quiz,
            index
        );


    const url =
        `${QUIZ_PAGE}?quiz=${encodeURIComponent(quizId)}`;


    window.location.href = url;

}


// =========================================================
// GET QUIZ ID
// =========================================================

function getQuizId(quiz, index) {

    return (

        quiz.id ||

        quiz.quizId ||

        quiz.number ||

        quiz.quizNumber ||

        index + 1

    );

}


// =========================================================
// ESCAPE HTML
// =========================================================

function escapeHTML(value) {

    return String(value)

        .replace(/&/g, "&amp;")

        .replace(/</g, "&lt;")

        .replace(/>/g, "&gt;")

        .replace(/"/g, "&quot;")

        .replace(/'/g, "&#039;");

}