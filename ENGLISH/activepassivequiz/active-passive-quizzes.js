/* =====================================================
   ACTIVE & PASSIVE VOICE
   QUIZ LIST SYSTEM
   50 QUIZZES
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const quizGrid = document.getElementById("quizGrid");

    const filterButtons =
        document.querySelectorAll(".filter-btn");


    /* =================================================
       CHECK HTML
    ================================================= */

    if (!quizGrid) {

        console.error(
            "ERROR: #quizGrid element not found."
        );

        return;

    }


    /* =================================================
       QUIZ DATABASE
    ================================================= */

    const quizzes = [];

    const TOTAL_QUIZZES = 50;


    /* =================================================
       CREATE 50 QUIZZES
    ================================================= */

    for (let i = 1; i <= TOTAL_QUIZZES; i++) {

        let difficulty;
        let description;


        if (i <= 5) {

            difficulty = "basic";

            description =
                "Basic Active and Passive Voice identification and conversion.";

        }

        else if (i <= 10) {

            difficulty = "intermediate";

            description =
                "Practice continuous tense and basic mixed voice transformations.";

        }

        else if (i <= 15) {

            difficulty = "intermediate";

            description =
                "Practice perfect tense, modal verbs and mixed voice questions.";

        }

        else if (i <= 25) {

            difficulty = "advanced";

            description =
                "Advanced Active and Passive Voice transformation practice.";

        }

        else if (i <= 35) {

            difficulty = "advanced";

            description =
                "Complex sentences, interrogatives and special constructions.";

        }

        else {

            difficulty = "ssc";

            description =
                "SSC CGL level mixed and tricky Active Passive questions.";

        }


        quizzes.push({

            id: i,

            difficulty: difficulty,

            title:
                "Active & Passive Quiz " +
                String(i).padStart(2, "0"),

            description: description,

            questions: 10,

            marks: 10

        });

    }


    /* =================================================
       DIFFICULTY LABEL
    ================================================= */

    function getDifficultyLabel(difficulty) {

        const labels = {

            basic: "Basic",

            intermediate: "Intermediate",

            advanced: "Advanced",

            ssc: "SSC CGL"

        };

        return labels[difficulty] || difficulty;

    }


    /* =================================================
       CREATE QUIZ CARDS
    ================================================= */

    function renderQuizzes(filter = "all") {

        quizGrid.innerHTML = "";


        const filteredQuizzes =
            quizzes.filter(function (quiz) {

                if (filter === "all") {

                    return true;

                }

                return quiz.difficulty === filter;

            });


        filteredQuizzes.forEach(function (quiz) {

            const card =
                document.createElement("div");


            card.className =
                "quiz-card";


            card.innerHTML = `

                <div class="card-top">

                    <div class="quiz-number">

                        ${String(quiz.id).padStart(2, "0")}

                    </div>


                    <span class="difficulty ${quiz.difficulty}">

                        ${getDifficultyLabel(
                            quiz.difficulty
                        )}

                    </span>

                </div>


                <h3>

                    ${quiz.title}

                </h3>


                <p>

                    ${quiz.description}

                </p>


                <div class="card-info">

                    <div class="info-item">

                        <strong>
                            ${quiz.questions}
                        </strong>

                        Questions

                    </div>


                    <div class="info-item">

                        <strong>
                            ${quiz.marks}
                        </strong>

                        Marks

                    </div>


                    <div class="info-item">

                        <strong>
                            Practice
                        </strong>

                        Mode

                    </div>

                </div>


                <a
                    class="start-btn"
                    href="active-passive-quiz.html?topic=active-passive&quiz=${quiz.id}"
                >

                    Start Quiz →

                </a>

            `;


            quizGrid.appendChild(card);

        });


        /* =================================================
           NO RESULT
        ================================================= */

        if (filteredQuizzes.length === 0) {

            quizGrid.innerHTML = `

                <div class="no-quizzes">

                    <h3>No quizzes found</h3>

                    <p>
                        Try another category.
                    </p>

                </div>

            `;

        }

    }


    /* =================================================
       FILTER BUTTONS
    ================================================= */

    filterButtons.forEach(function (button) {

        button.addEventListener(
            "click",
            function () {

                filterButtons.forEach(
                    function (btn) {

                        btn.classList.remove("active");

                    }
                );


                this.classList.add("active");


                const filter =
                    this.dataset.filter || "all";


                renderQuizzes(filter);

            }
        );

    });


    /* =================================================
       INITIAL LOAD
    ================================================= */

    renderQuizzes("all");


    console.log(
        "Active & Passive Quiz List loaded successfully."
    );

});