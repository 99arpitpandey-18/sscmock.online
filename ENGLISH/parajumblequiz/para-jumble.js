/* =========================================================
   PARA JUMBLE QUIZ LIST
   FILE: para-jumble.js

   50 QUIZZES
   Each quiz = 10 Questions
   Total = 500 Questions
   ========================================================= */


/* =========================================================
   GLOBAL SETTINGS
========================================================= */

const TOTAL_QUIZZES = 50;

const QUESTIONS_PER_QUIZ = 10;

const QUIZ_PAGE = "para-jumble-quiz.html";


/* =========================================================
   DOM ELEMENTS
========================================================= */

const quizGrid =
    document.getElementById("quizGrid");

const quizSearch =
    document.getElementById("quizSearch");

const quizCount =
    document.getElementById("quizCount");

const noResults =
    document.getElementById("noResults");

const filterButtons =
    document.querySelectorAll(".filter-button");


/* =========================================================
   QUIZ DATA
========================================================= */

const quizData = [];


/* =========================================================
   CREATE 50 QUIZZES
========================================================= */

function createQuizData() {

    quizData.length = 0;


    for (
        let i = 1;
        i <= TOTAL_QUIZZES;
        i++
    ) {

        quizData.push({

            number: i,

            title:
                `Para Jumble Quiz ${i}`,

            description:
                `Practice SSC-level Para Jumble questions with logical sentence ordering.`,

            questions:
                QUESTIONS_PER_QUIZ,

            duration:
                "10 Min"

        });

    }

}


/* =========================================================
   CREATE QUIZ CARD
========================================================= */

function createQuizCard(quiz) {

    const card =
        document.createElement("article");


    card.className =
        "quiz-card";


    card.dataset.quizNumber =
        quiz.number;


    card.dataset.search =
        `${quiz.number} ${quiz.title}`.toLowerCase();


    card.innerHTML = `

        <div class="quiz-card-top">

            <div class="quiz-number">
                ${quiz.number}
            </div>

            <span class="quiz-status">
                PRACTICE
            </span>

        </div>


        <h3>
            ${escapeHTML(quiz.title)}
        </h3>


        <p class="quiz-card-description">
            ${escapeHTML(quiz.description)}
        </p>


        <div class="quiz-meta">

            <div class="quiz-meta-item">

                <span>📝</span>

                <span>
                    ${quiz.questions} Questions
                </span>

            </div>


            <div class="quiz-meta-item">

                <span>⏱️</span>

                <span>
                    ${quiz.duration}
                </span>

            </div>

        </div>


        <button
            type="button"
            class="start-quiz-button"
            data-quiz="${quiz.number}"
        >

            Start Quiz

            <span class="start-arrow">
                →
            </span>

        </button>

    `;


    return card;

}


/* =========================================================
   RENDER ALL QUIZZES
========================================================= */

function renderQuizzes(list = quizData) {

    if (!quizGrid) {
        return;
    }


    quizGrid.innerHTML = "";


    const fragment =
        document.createDocumentFragment();


    list.forEach(
        quiz => {

            const card =
                createQuizCard(quiz);

            fragment.appendChild(card);

        }
    );


    quizGrid.appendChild(fragment);


    updateQuizCount(list.length);


    updateNoResults(list.length);


    attachQuizButtons();

}


/* =========================================================
   ATTACH QUIZ BUTTON EVENTS
========================================================= */

function attachQuizButtons() {

    const buttons =
        document.querySelectorAll(
            ".start-quiz-button"
        );


    buttons.forEach(
        button => {

            button.addEventListener(
                "click",
                function () {

                    const quizNumber =
                        Number(
                            this.dataset.quiz
                        );


                    if (
                        !Number.isInteger(
                            quizNumber
                        )
                    ) {
                        return;
                    }


                    if (
                        quizNumber < 1 ||
                        quizNumber > TOTAL_QUIZZES
                    ) {
                        return;
                    }


                    openQuiz(
                        quizNumber
                    );

                }
            );

        }
    );

}


/* =========================================================
   OPEN QUIZ
========================================================= */

function openQuiz(quizNumber) {

    const url =
        `${QUIZ_PAGE}?quiz=${quizNumber}`;


    window.location.href = url;

}


/* =========================================================
   SEARCH QUIZZES
========================================================= */

function searchQuizzes(searchValue) {

    const value =
        searchValue
            .trim()
            .toLowerCase();


    if (value === "") {

        renderQuizzes(
            quizData
        );

        return;

    }


    const filtered =
        quizData.filter(
            quiz => {

                const searchableText =
                    `${quiz.number} ${quiz.title} ${quiz.description}`
                        .toLowerCase();


                return searchableText.includes(
                    value
                );

            }
        );


    renderQuizzes(
        filtered
    );

}


/* =========================================================
   SEARCH INPUT
========================================================= */

if (quizSearch) {

    quizSearch.addEventListener(
        "input",
        function () {

            searchQuizzes(
                this.value
            );

        }
    );

}


/* =========================================================
   FILTER BUTTON
========================================================= */

filterButtons.forEach(
    button => {

        button.addEventListener(
            "click",
            function () {

                filterButtons.forEach(
                    item => {

                        item.classList.remove(
                            "active"
                        );

                    }
                );


                this.classList.add(
                    "active"
                );


                const filter =
                    this.dataset.filter;


                if (
                    filter === "all"
                ) {

                    if (quizSearch) {

                        quizSearch.value =
                            "";

                    }


                    renderQuizzes(
                        quizData
                    );

                }

            }
        );

    }
);


/* =========================================================
   UPDATE QUIZ COUNT
========================================================= */

function updateQuizCount(count) {

    if (!quizCount) {
        return;
    }


    quizCount.textContent =
        count;

}


/* =========================================================
   NO RESULTS
========================================================= */

function updateNoResults(count) {

    if (!noResults) {
        return;
    }


    if (count === 0) {

        noResults.style.display =
            "block";

    } else {

        noResults.style.display =
            "none";

    }

}


/* =========================================================
   ESCAPE HTML
   Prevents unwanted HTML injection
========================================================= */

function escapeHTML(value) {

    if (
        value === null ||
        value === undefined
    ) {

        return "";

    }


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


/* =========================================================
   KEYBOARD SHORTCUT
   Enter on search can directly open Quiz
========================================================= */

if (quizSearch) {

    quizSearch.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key !== "Enter"
            ) {
                return;
            }


            const value =
                this.value.trim();


            const quizNumber =
                Number(value);


            if (
                Number.isInteger(
                    quizNumber
                ) &&
                quizNumber >= 1 &&
                quizNumber <= TOTAL_QUIZZES
            ) {

                openQuiz(
                    quizNumber
                );

            }

        }
    );

}


/* =========================================================
   INITIALIZE PAGE
========================================================= */

function initializeParaJumblePage() {

    createQuizData();

    renderQuizzes(
        quizData
    );

}


/* =========================================================
   START
========================================================= */

initializeParaJumblePage();