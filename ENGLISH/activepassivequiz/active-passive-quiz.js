/* =========================================================
   ACTIVE & PASSIVE VOICE QUIZ ENGINE
   QUIZ 01–50
   JSON BASED
   ========================================================= */

document.addEventListener("DOMContentLoaded", async function () {

    /* =========================================================
       1. GET QUIZ NUMBER FROM URL
       Example:
       active-passive-quiz.html?quiz=1
       active-passive-quiz.html?quiz=25
       active-passive-quiz.html?quiz=50
       ========================================================= */

    const params = new URLSearchParams(window.location.search);

    let quizNumber = parseInt(params.get("quiz"), 10);

    if (!Number.isInteger(quizNumber)) {
        quizNumber = 1;
    }


    /* =========================================================
       2. VALIDATE QUIZ NUMBER
       ========================================================= */

    if (quizNumber < 1 || quizNumber > 50) {
        showError(
            "Invalid quiz number. Quiz number must be between 1 and 50."
        );
        return;
    }


    /* =========================================================
       3. HTML ELEMENTS
       ========================================================= */

    const questionText =
        document.getElementById("questionText");

    const optionsContainer =
        document.getElementById("optionsContainer");

    const questionNumber =
        document.getElementById("questionNumber");

    const progressPercent =
        document.getElementById("progressPercent");

    const progressFill =
        document.getElementById("progressFill");

    const previousBtn =
        document.getElementById("previousBtn");

    const nextBtn =
        document.getElementById("nextBtn");

    const questionPalette =
        document.getElementById("questionPalette");

    const totalQuestions =
        document.getElementById("totalQuestions");

    const attemptedCount =
        document.getElementById("attemptedCount");

    const unansweredCount =
        document.getElementById("unansweredCount");

    const timer =
        document.getElementById("timer");

    const quizName =
        document.getElementById("quizName");


    /* =========================================================
       RESULT ELEMENTS
       ========================================================= */

    const resultOverlay =
        document.getElementById("resultOverlay");

    const score =
        document.getElementById("score");

    const correctAnswers =
        document.getElementById("correctAnswers");

    const wrongAnswers =
        document.getElementById("wrongAnswers");

    const skippedAnswers =
        document.getElementById("skippedAnswers");

    const percentage =
        document.getElementById("percentage");

    const submitBtn =
        document.getElementById("submitBtn");

    const reviewBtn =
        document.getElementById("reviewBtn");

    const closeResult =
        document.getElementById("closeResult");

    const restartBtn =
        document.getElementById("restartBtn");


    /* =========================================================
       REVIEW ELEMENTS
       ========================================================= */

    const reviewOverlay =
        document.getElementById("reviewOverlay");

    const reviewContent =
        document.getElementById("reviewContent");

    const closeReview =
        document.getElementById("closeReview");


    /* =========================================================
       4. CHECK HTML
       ========================================================= */

    const requiredElements = [
        questionText,
        optionsContainer,
        questionNumber,
        progressPercent,
        progressFill,
        previousBtn,
        nextBtn,
        questionPalette,
        totalQuestions,
        attemptedCount,
        unansweredCount,
        timer,
        quizName
    ];

    if (requiredElements.some(element => !element)) {

        showError(
            "Some required quiz HTML elements are missing."
        );

        return;
    }


    /* =========================================================
       5. JSON LOCATION
       
       IMPORTANT:
       This path assumes:
       
       project/
       │
       ├── active-passive-quiz.html
       ├── active-passive-quiz.js
       ├── active-passive-quiz.css
       │
       └── data/
           └── active-passive.json
       
       ========================================================= */

    const JSON_PATH = "./data/active-passive.json";


    let questions = [];


    try {

        console.log(
            "Loading Active & Passive Quiz..."
        );

        console.log(
            "Quiz Number:",
            quizNumber
        );

        console.log(
            "JSON Path:",
            JSON_PATH
        );


        /* =====================================================
           6. LOAD JSON
           ===================================================== */

        let response;

        try {

            response = await fetch(
                JSON_PATH + "?v=" + Date.now(),
                {
                    method: "GET",
                    cache: "no-store"
                }
            );

        } catch (fetchError) {

            throw new Error(
                "Failed to fetch JSON file. " +
                "If you opened the HTML directly by double-clicking it, " +
                "run the website through a local server instead."
            );

        }


        /* =====================================================
           7. CHECK HTTP RESPONSE
           ===================================================== */

        if (!response.ok) {

            throw new Error(
                "JSON file could not be loaded. " +
                "HTTP Status: " +
                response.status
            );

        }


        /* =====================================================
           8. READ JSON
           ===================================================== */

        let quizDatabase;

        try {

            quizDatabase = await response.json();

        } catch (jsonError) {

            throw new Error(
                "active-passive.json contains invalid JSON."
            );

        }


        console.log(
            "JSON loaded successfully."
        );


        /* =====================================================
           9. FIND QUIZ
           
           Supported:
           
           {
               "1": [...]
           }
           
           OR
           
           {
               "quiz1": [...]
           }
           
           ===================================================== */

        const normalKey =
            String(quizNumber);

        const alternateKey =
            "quiz" + quizNumber;


        if (
            quizDatabase &&
            typeof quizDatabase === "object" &&
            !Array.isArray(quizDatabase)
        ) {

            if (
                Array.isArray(
                    quizDatabase[normalKey]
                )
            ) {

                questions =
                    quizDatabase[normalKey];

            }

            else if (
                Array.isArray(
                    quizDatabase[alternateKey]
                )
            ) {

                questions =
                    quizDatabase[alternateKey];

            }

        }


        /* =====================================================
           10. SUPPORT ANOTHER FORMAT

           {
              "quizzes": {
                  "1": [...]
              }
           }

           ===================================================== */

        if (
            questions.length === 0 &&
            quizDatabase &&
            quizDatabase.quizzes &&
            typeof quizDatabase.quizzes === "object"
        ) {

            if (
                Array.isArray(
                    quizDatabase.quizzes[normalKey]
                )
            ) {

                questions =
                    quizDatabase.quizzes[normalKey];

            }

            else if (
                Array.isArray(
                    quizDatabase.quizzes[alternateKey]
                )
            ) {

                questions =
                    quizDatabase.quizzes[alternateKey];

            }

        }


        /* =====================================================
           11. QUIZ NOT FOUND
           ===================================================== */

        if (
            !Array.isArray(questions) ||
            questions.length === 0
        ) {

            throw new Error(
                "Quiz " +
                String(quizNumber).padStart(2, "0") +
                " was not found inside active-passive.json."
            );

        }


        /* =====================================================
           12. NORMALIZE QUESTIONS
           ===================================================== */

        questions = questions.map(function (item, index) {

            if (!item || typeof item !== "object") {

                return {
                    question:
                        "Question " + (index + 1),

                    options: [
                        "",
                        "",
                        "",
                        ""
                    ],

                    answer: 0,

                    explanation:
                        "No explanation available."
                };

            }


            let answer =
                Number(item.answer);


            /*
               Answer format:

               0 = A
               1 = B
               2 = C
               3 = D
            */

            if (
                !Number.isInteger(answer) ||
                answer < 0 ||
                answer > 3
            ) {

                console.warn(
                    "Invalid answer index at question:",
                    index + 1
                );

                answer = 0;

            }


            let options = [];


            if (Array.isArray(item.options)) {

                options =
                    item.options.map(function (option) {

                        return String(
                            option ?? ""
                        );

                    });

            }


            while (options.length < 4) {

                options.push("");

            }


            if (options.length > 4) {

                options =
                    options.slice(0, 4);

            }


            return {

                question:
                    String(
                        item.question ??
                        item.questionText ??
                        item.text ??
                        ""
                    ),

                options: options,

                answer: answer,

                explanation:
                    String(
                        item.explanation ??
                        item.solution ??
                        ""
                    )

            };

        });


        /* =====================================================
           13. VALIDATE QUESTIONS
           ===================================================== */

        questions.forEach(function (question, index) {

            if (
                question.question.trim() === ""
            ) {

                console.warn(
                    "Question " +
                    (index + 1) +
                    " has empty question text."
                );

            }


            if (
                question.options.length !== 4
            ) {

                console.warn(
                    "Question " +
                    (index + 1) +
                    " does not have exactly 4 options."
                );

            }

        });


        /* =====================================================
           14. QUIZ VARIABLES
           ===================================================== */

        let currentQuestion = 0;

        let userAnswers =
            new Array(
                questions.length
            ).fill(null);

        let timeLeft = 600;

        let timerInterval = null;

        let quizSubmitted = false;


        /* =====================================================
           15. HEADER
           ===================================================== */

        totalQuestions.textContent =
            questions.length;

        quizName.textContent =
            "Quiz " +
            String(quizNumber).padStart(2, "0");


        /* =====================================================
           16. ESCAPE HTML
           ===================================================== */

        function escapeHTML(text) {

            const div =
                document.createElement("div");

            div.textContent =
                String(text);

            return div.innerHTML;

        }


        /* =====================================================
           17. SHOW QUESTION
           ===================================================== */

        function showQuestion() {

            const question =
                questions[currentQuestion];


            if (!question) {
                return;
            }


            /* QUESTION NUMBER */

            questionNumber.textContent =
                "Question " +
                (currentQuestion + 1) +
                " of " +
                questions.length;


            /* PROGRESS */

            const percent =
                Math.round(
                    (
                        (currentQuestion + 1) /
                        questions.length
                    ) * 100
                );


            progressPercent.textContent =
                percent + "%";


            progressFill.style.width =
                percent + "%";


            /* QUESTION */

            questionText.textContent =
                question.question;


            /* CLEAR OPTIONS */

            optionsContainer.innerHTML =
                "";


            /* OPTIONS */

            question.options.forEach(
                function (option, index) {

                    const optionElement =
                        document.createElement("div");


                    optionElement.className =
                        "option";


                    if (
                        userAnswers[
                            currentQuestion
                        ] === index
                    ) {

                        optionElement.classList.add(
                            "selected"
                        );

                    }


                    optionElement.innerHTML = `

                        <div class="option-letter">
                            ${String.fromCharCode(65 + index)}
                        </div>

                        <div class="option-text">
                            ${escapeHTML(option)}
                        </div>

                    `;


                    optionElement.addEventListener(
                        "click",
                        function () {

                            if (quizSubmitted) {
                                return;
                            }


                            userAnswers[
                                currentQuestion
                            ] = index;


                            showQuestion();

                            updateSummary();

                        }
                    );


                    optionsContainer.appendChild(
                        optionElement
                    );

                }
            );


            /* PREVIOUS */

            previousBtn.disabled =
                currentQuestion === 0;


            /* NEXT */

            if (
                currentQuestion ===
                questions.length - 1
            ) {

                nextBtn.textContent =
                    "Finish →";

            } else {

                nextBtn.textContent =
                    "Next →";

            }


            updatePalette();

        }


        /* =====================================================
           18. CREATE PALETTE
           ===================================================== */

        function createPalette() {

            questionPalette.innerHTML =
                "";


            questions.forEach(
                function (_, index) {

                    const button =
                        document.createElement("button");


                    button.type =
                        "button";


                    button.className =
                        "palette-btn";


                    button.textContent =
                        index + 1;


                    button.addEventListener(
                        "click",
                        function () {

                            if (quizSubmitted) {
                                return;
                            }


                            currentQuestion =
                                index;


                            showQuestion();

                        }
                    );


                    questionPalette.appendChild(
                        button
                    );

                }
            );


            updatePalette();

        }


        /* =====================================================
           19. UPDATE PALETTE
           ===================================================== */

        function updatePalette() {

            const buttons =
                questionPalette.querySelectorAll(
                    ".palette-btn"
                );


            buttons.forEach(
                function (button, index) {

                    button.classList.remove(
                        "current",
                        "answered"
                    );


                    if (
                        userAnswers[index] !== null
                    ) {

                        button.classList.add(
                            "answered"
                        );

                    }


                    if (
                        index === currentQuestion
                    ) {

                        button.classList.add(
                            "current"
                        );

                    }

                }
            );

        }


        /* =====================================================
           20. UPDATE SUMMARY
           ===================================================== */

        function updateSummary() {

            const attempted =
                userAnswers.filter(
                    answer =>
                        answer !== null
                ).length;


            const unanswered =
                questions.length -
                attempted;


            attemptedCount.textContent =
                attempted;


            unansweredCount.textContent =
                unanswered;

        }


        /* =====================================================
           21. NEXT
           ===================================================== */

        nextBtn.addEventListener(
            "click",
            function () {

                if (quizSubmitted) {
                    return;
                }


                if (
                    currentQuestion ===
                    questions.length - 1
                ) {

                    submitQuiz();

                    return;

                }


                currentQuestion++;

                showQuestion();

            }
        );


        /* =====================================================
           22. PREVIOUS
           ===================================================== */

        previousBtn.addEventListener(
            "click",
            function () {

                if (quizSubmitted) {
                    return;
                }


                if (currentQuestion > 0) {

                    currentQuestion--;

                    showQuestion();

                }

            }
        );


        /* =====================================================
           23. SUBMIT BUTTON
           ===================================================== */

        if (submitBtn) {

            submitBtn.addEventListener(
                "click",
                function () {

                    if (quizSubmitted) {
                        return;
                    }


                    const unanswered =
                        userAnswers.filter(
                            answer =>
                                answer === null
                        ).length;


                    if (unanswered > 0) {

                        const confirmSubmit =
                            confirm(
                                "You have " +
                                unanswered +
                                " unanswered question(s).\n\n" +
                                "Do you want to submit?"
                            );


                        if (!confirmSubmit) {
                            return;
                        }

                    }


                    submitQuiz();

                }
            );

        }


        /* =====================================================
           24. SUBMIT QUIZ
           ===================================================== */

        function submitQuiz() {

            if (quizSubmitted) {
                return;
            }


            quizSubmitted = true;


            clearInterval(
                timerInterval
            );


            let correct = 0;

            let wrong = 0;

            let skipped = 0;


            questions.forEach(
                function (question, index) {

                    const answer =
                        userAnswers[index];


                    if (answer === null) {

                        skipped++;

                    }

                    else if (
                        answer === question.answer
                    ) {

                        correct++;

                    }

                    else {

                        wrong++;

                    }

                }
            );


            const percent =
                Math.round(
                    (
                        correct /
                        questions.length
                    ) * 100
                );


            score.textContent =
                correct +
                "/" +
                questions.length;


            correctAnswers.textContent =
                correct;


            wrongAnswers.textContent =
                wrong;


            skippedAnswers.textContent =
                skipped;


            percentage.textContent =
                percent + "%";


            if (resultOverlay) {

                resultOverlay.classList.add(
                    "show"
                );

            }

        }


        /* =====================================================
           25. REVIEW
           ===================================================== */

        if (reviewBtn) {

            reviewBtn.addEventListener(
                "click",
                function () {

                    if (resultOverlay) {

                        resultOverlay.classList.remove(
                            "show"
                        );

                    }


                    createReview();


                    if (reviewOverlay) {

                        reviewOverlay.classList.add(
                            "show"
                        );

                    }

                }
            );

        }


        /* =====================================================
           26. CREATE REVIEW
           ===================================================== */

        function createReview() {

            if (!reviewContent) {
                return;
            }


            reviewContent.innerHTML =
                "";


            questions.forEach(
                function (question, index) {

                    const userAnswer =
                        userAnswers[index];


                    const reviewItem =
                        document.createElement("div");


                    reviewItem.className =
                        "review-item";


                    let answerHTML = "";


                    if (userAnswer === null) {

                        answerHTML = `

                            <div class="review-answer skipped">
                                Your Answer: Not Answered
                            </div>

                            <div class="review-answer correct">
                                ✓ Correct Answer:
                                ${escapeHTML(
                                    question.options[
                                        question.answer
                                    ]
                                )}
                            </div>

                        `;

                    }

                    else if (
                        userAnswer === question.answer
                    ) {

                        answerHTML = `

                            <div class="review-answer correct">
                                ✓ Correct Answer:
                                ${escapeHTML(
                                    question.options[
                                        question.answer
                                    ]
                                )}
                            </div>

                        `;

                    }

                    else {

                        answerHTML = `

                            <div class="review-answer wrong">
                                ✗ Your Answer:
                                ${escapeHTML(
                                    question.options[
                                        userAnswer
                                    ]
                                )}
                            </div>

                            <div class="review-answer correct">
                                ✓ Correct Answer:
                                ${escapeHTML(
                                    question.options[
                                        question.answer
                                    ]
                                )}
                            </div>

                        `;

                    }


                    reviewItem.innerHTML = `

                        <div class="review-question">

                            Q${index + 1}.
                            ${escapeHTML(
                                question.question
                            )}

                        </div>

                        ${answerHTML}

                        <div class="review-answer">

                            <strong>
                                Explanation:
                            </strong>

                            <br>

                            ${
                                escapeHTML(
                                    question.explanation ||
                                    "No explanation available."
                                )
                            }

                        </div>

                    `;


                    reviewContent.appendChild(
                        reviewItem
                    );

                }
            );

        }


        /* =====================================================
           27. CLOSE REVIEW
           ===================================================== */

        if (closeReview) {

            closeReview.addEventListener(
                "click",
                function () {

                    reviewOverlay.classList.remove(
                        "show"
                    );


                    if (resultOverlay) {

                        resultOverlay.classList.add(
                            "show"
                        );

                    }

                }
            );

        }


        /* =====================================================
           28. CLOSE RESULT
           ===================================================== */

        if (closeResult) {

            closeResult.addEventListener(
                "click",
                function () {

                    resultOverlay.classList.remove(
                        "show"
                    );

                }
            );

        }


        /* =====================================================
           29. RESTART
           ===================================================== */

        if (restartBtn) {

            restartBtn.addEventListener(
                "click",
                function () {

                    window.location.href =
                        "active-passive-quiz.html?quiz=" +
                        quizNumber;

                }
            );

        }


        /* =====================================================
           30. TIMER
           ===================================================== */

        function updateTimer() {

            const minutes =
                Math.floor(
                    timeLeft / 60
                );


            const seconds =
                timeLeft % 60;


            timer.textContent =
                String(minutes).padStart(2, "0") +
                ":" +
                String(seconds).padStart(2, "0");

        }


        function startTimer() {

            updateTimer();


            timerInterval =
                setInterval(
                    function () {

                        if (quizSubmitted) {
                            return;
                        }


                        timeLeft--;


                        updateTimer();


                        if (timeLeft <= 0) {

                            clearInterval(
                                timerInterval
                            );


                            alert(
                                "Time is over. Your quiz will be submitted automatically."
                            );


                            submitQuiz();

                        }

                    },
                    1000
                );

        }


        /* =====================================================
           31. START QUIZ
           ===================================================== */

        createPalette();

        showQuestion();

        updateSummary();

        startTimer();


        console.log(
            "================================"
        );

        console.log(
            "QUIZ STARTED SUCCESSFULLY"
        );

        console.log(
            "Quiz:",
            quizNumber
        );

        console.log(
            "Questions:",
            questions.length
        );

        console.log(
            "================================"
        );


    } catch (error) {

        console.error(
            "ACTIVE & PASSIVE QUIZ ERROR:",
            error
        );


        showError(
            error.message
        );

    }


    /* =========================================================
       ERROR SCREEN
       ========================================================= */

    function showError(message) {

        document.body.innerHTML = `

            <div style="
                min-height:100vh;
                display:flex;
                align-items:center;
                justify-content:center;
                padding:20px;
                background:#f3f6fa;
                font-family:Arial,Helvetica,sans-serif;
            ">

                <div style="
                    width:100%;
                    max-width:620px;
                    background:#ffffff;
                    padding:40px;
                    border-radius:18px;
                    text-align:center;
                    box-shadow:0 15px 45px rgba(0,0,0,.10);
                ">

                    <div style="
                        width:70px;
                        height:70px;
                        margin:0 auto 20px;
                        border-radius:50%;
                        display:flex;
                        align-items:center;
                        justify-content:center;
                        background:#fff0f0;
                        color:#d93025;
                        font-size:32px;
                        font-weight:bold;
                    ">
                        !
                    </div>

                    <h2 style="
                        margin-bottom:12px;
                        color:#d93025;
                    ">
                        Unable to Load Quiz
                    </h2>

                    <p style="
                        color:#555;
                        line-height:1.6;
                    ">
                        ${escapeError(message)}
                    </p>

                    <div style="
                        margin-top:20px;
                        padding:15px;
                        background:#f5f7fa;
                        border-radius:10px;
                        font-size:14px;
                        color:#444;
                    ">

                        <strong>
                            Required JSON:
                        </strong>

                        <br><br>

                        data/active-passive.json

                    </div>

                    <p style="
                        margin-top:18px;
                        color:#777;
                        font-size:13px;
                        line-height:1.6;
                    ">

                        If you opened the HTML by double-clicking
                        it, use a local server such as VS Code
                        Live Server.

                    </p>

                    <button
                        onclick="location.reload()"
                        style="
                            margin-top:10px;
                            padding:12px 25px;
                            border:none;
                            border-radius:8px;
                            background:#1455d9;
                            color:white;
                            cursor:pointer;
                            font-weight:bold;
                        "
                    >
                        Reload Quiz
                    </button>

                </div>

            </div>

        `;

    }


    /* =========================================================
       ESCAPE ERROR
       ========================================================= */

    function escapeError(text) {

        const div =
            document.createElement("div");

        div.textContent =
            String(text);

        return div.innerHTML;

    }

});