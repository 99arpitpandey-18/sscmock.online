/* =========================================================
   SSC CGL CLOZE TEST
   QUIZ LIST SYSTEM
   50 QUIZZES
   ========================================================= */

"use strict";


/* =========================================================
   SETTINGS
   ========================================================= */

const TOTAL_QUIZZES = 50;

const QUESTIONS_PER_QUIZ = 10;

const QUIZ_PAGE = "clozequiz.html";


/* =========================================================
   DOM ELEMENTS
   ========================================================= */

const quizGrid =
    document.getElementById("quizGrid");

const filterButtons =
    document.querySelectorAll(".filter-btn");


/* =========================================================
   QUIZ INFORMATION
   ========================================================= */

const quizTitles = [

    "Basic Grammar & Usage",
    "Parts of Speech",
    "Articles & Determiners",
    "Subject-Verb Agreement",
    "Tenses",
    "Prepositions",
    "Conjunctions",
    "Pronouns",
    "Adjectives & Adverbs",
    "Vocabulary Based Cloze",

    "Basic Sentence Completion",
    "Grammar Application",
    "Common Errors Based Cloze",
    "Contextual Vocabulary",
    "Verb Based Cloze",
    "Noun Based Cloze",
    "Preposition Based Cloze",
    "Article Based Cloze",
    "Conjunction Based Cloze",
    "Mixed Grammar Cloze",

    "Intermediate Grammar",
    "Sentence Structure",
    "Vocabulary in Context",
    "Synonyms Based Cloze",
    "Antonyms Based Cloze",
    "Idioms Based Cloze",
    "Phrasal Verbs",
    "One Word Substitution",
    "Word Formation",
    "Mixed Vocabulary",

    "Advanced Grammar",
    "Advanced Vocabulary",
    "Logical Context",
    "Sentence Flow",
    "Paragraph Completion",
    "Contextual Grammar",
    "Mixed Tenses",
    "Advanced Prepositions",
    "Advanced Conjunctions",
    "Advanced Articles",

    "SSC CGL Practice Set 1",
    "SSC CGL Practice Set 2",
    "SSC CGL Practice Set 3",
    "SSC CGL Practice Set 4",
    "SSC CGL Practice Set 5",
    "SSC CGL Practice Set 6",
    "SSC CGL Practice Set 7",
    "SSC CGL Practice Set 8",
    "SSC CGL Practice Set 9",
    "SSC CGL Practice Set 10"

];


/* =========================================================
   DIFFICULTY
   ========================================================= */

const difficulties = [

    "basic",
    "basic",
    "basic",
    "basic",
    "basic",
    "basic",
    "basic",
    "basic",
    "basic",
    "basic",

    "intermediate",
    "intermediate",
    "intermediate",
    "intermediate",
    "intermediate",
    "intermediate",
    "intermediate",
    "intermediate",
    "intermediate",
    "intermediate",

    "intermediate",
    "intermediate",
    "intermediate",
    "intermediate",
    "intermediate",
    "intermediate",
    "intermediate",
    "intermediate",
    "intermediate",
    "intermediate",

    "advanced",
    "advanced",
    "advanced",
    "advanced",
    "advanced",
    "advanced",
    "advanced",
    "advanced",
    "advanced",
    "advanced",

    "ssc",
    "ssc",
    "ssc",
    "ssc",
    "ssc",
    "ssc",
    "ssc",
    "ssc",
    "ssc",
    "ssc"

];


/* =========================================================
   DIFFICULTY LABEL
   ========================================================= */

const difficultyLabels = {

    basic: "Basic",

    intermediate: "Intermediate",

    advanced: "Advanced",

    ssc: "SSC CGL"

};


/* =========================================================
   PAGE LOAD
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        generateQuizCards();

        setupFilters();

    }
);


/* =========================================================
   GENERATE 50 QUIZ CARDS
   ========================================================= */

function generateQuizCards() {

    quizGrid.innerHTML = "";


    for (
        let i = 0;
        i < TOTAL_QUIZZES;
        i++
    ) {

        const quizNumber = i + 1;

        const difficulty =
            difficulties[i] || "basic";

        const title =
            quizTitles[i] ||
            `Cloze Test Quiz ${quizNumber}`;


        const card =
            createQuizCard(
                quizNumber,
                title,
                difficulty
            );


        quizGrid.appendChild(card);

    }

}


/* =========================================================
   CREATE QUIZ CARD
   ========================================================= */

function createQuizCard(
    quizNumber,
    title,
    difficulty
) {

    const card =
        document.createElement("article");


    card.className =
        "quiz-card";


    card.dataset.difficulty =
        difficulty;


    card.innerHTML = `

        <div class="card-top">

            <div class="quiz-number">
                ${String(quizNumber).padStart(2, "0")}
            </div>

            <div class="difficulty ${difficulty}">
                ${difficultyLabels[difficulty]}
            </div>

        </div>


        <h3>
            ${escapeHTML(title)}
        </h3>


        <p>
            Practice Cloze Test passages
            specially designed for SSC CGL
            English preparation.
        </p>


        <div class="card-info">

            <div class="info-item">
                <strong>
                    ${QUESTIONS_PER_QUIZ}
                </strong>
                Questions
            </div>


            <div class="info-item">
                <strong>
                    10
                </strong>
                Minutes
            </div>

        </div>


        <a
            href="${QUIZ_PAGE}?quiz=${quizNumber}"
            class="start-btn"
        >
            Start Quiz →
        </a>

    `;


    return card;

}


/* =========================================================
   FILTER SYSTEM
   ========================================================= */

function setupFilters() {

    filterButtons.forEach(
        function (button) {

            button.addEventListener(
                "click",
                function () {

                    const selectedFilter =
                        this.dataset.filter;


                    filterButtons.forEach(
                        function (btn) {

                            btn.classList.remove(
                                "active"
                            );

                        }
                    );


                    this.classList.add("active");


                    filterQuizzes(
                        selectedFilter
                    );

                }
            );

        }
    );

}


/* =========================================================
   FILTER QUIZZES
   ========================================================= */

function filterQuizzes(filter) {

    const cards =
        document.querySelectorAll(
            ".quiz-card"
        );


    cards.forEach(
        function (card) {

            const difficulty =
                card.dataset.difficulty;


            if (
                filter === "all" ||
                difficulty === filter
            ) {

                card.style.display =
                    "";

            } else {

                card.style.display =
                    "none";

            }

        }
    );

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