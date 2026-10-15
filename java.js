/* =========================================
   SSC CGL - ENGLISH SYNONYMS MCQ TEST
========================================= */


/* QUESTIONS */

const questions = [

    {
        question: "Choose the synonym of 'Abundant'.",

        options: [
            "Scarce",
            "Plentiful",
            "Empty",
            "Weak"
        ],

        answer: "Plentiful"
    },


    {
        question: "Choose the synonym of 'Brave'.",

        options: [
            "Coward",
            "Weak",
            "Courageous",
            "Lazy"
        ],

        answer: "Courageous"
    },


    {
        question: "Choose the synonym of 'Rapid'.",

        options: [
            "Slow",
            "Fast",
            "Late",
            "Weak"
        ],

        answer: "Fast"
    },


    {
        question: "Choose the synonym of 'Ancient'.",

        options: [
            "Modern",
            "New",
            "Old",
            "Recent"
        ],

        answer: "Old"
    },


    {
        question: "Choose the synonym of 'Benevolent'.",

        options: [
            "Cruel",
            "Kind",
            "Angry",
            "Selfish"
        ],

        answer: "Kind"
    },


    {
        question: "Choose the synonym of 'Candid'.",

        options: [
            "Frank",
            "Dishonest",
            "Secret",
            "Rude"
        ],

        answer: "Frank"
    },


    {
        question: "Choose the synonym of 'Diligent'.",

        options: [
            "Lazy",
            "Careless",
            "Hardworking",
            "Weak"
        ],

        answer: "Hardworking"
    },


    {
        question: "Choose the synonym of 'Eloquent'.",

        options: [
            "Silent",
            "Expressive",
            "Confused",
            "Unclear"
        ],

        answer: "Expressive"
    },


    {
        question: "Choose the synonym of 'Fragile'.",

        options: [
            "Strong",
            "Heavy",
            "Delicate",
            "Hard"
        ],

        answer: "Delicate"
    },


    {
        question: "Choose the synonym of 'Hostile'.",

        options: [
            "Friendly",
            "Helpful",
            "Unfriendly",
            "Kind"
        ],

        answer: "Unfriendly"
    }

];


/* =========================================
   VARIABLES
========================================= */

let currentQuestion = 0;

let userAnswers = new Array(questions.length).fill(null);

let timeLeft = 5 * 60;

let timerInterval;


/* =========================================
   HTML ELEMENTS
========================================= */

const questionElement =
    document.getElementById("question");

const optionsElement =
    document.getElementById("options");

const questionNumber =
    document.getElementById("question-number");

const totalQuestion =
    document.getElementById("total-question");

const previousButton =
    document.getElementById("previous-btn");

const nextButton =
    document.getElementById("next-btn");

const progress =
    document.getElementById("progress");

const timer =
    document.getElementById("timer");

const quizContainer =
    document.querySelector(".quiz-container");

const resultBox =
    document.getElementById("result");


/* =========================================
   TOTAL QUESTIONS
========================================= */

totalQuestion.textContent = questions.length;


/* =========================================
   DISPLAY QUESTION
========================================= */

function showQuestion() {

    const q = questions[currentQuestion];


    /* QUESTION NUMBER */

    questionNumber.textContent =
        currentQuestion + 1;


    /* QUESTION */

    questionElement.textContent =
        q.question;


    /* CLEAR OLD OPTIONS */

    optionsElement.innerHTML = "";


    /* CREATE OPTIONS */

    q.options.forEach(function(option) {

        const optionDiv =
            document.createElement("div");


        optionDiv.classList.add("option");


        optionDiv.textContent =
            option;


        /* SELECT OPTION */

        optionDiv.onclick = function() {

            selectOption(option);

        };


        /* IF ALREADY SELECTED */

        if (userAnswers[currentQuestion] === option) {

            optionDiv.classList.add("selected");

        }


        optionsElement.appendChild(optionDiv);

    });


    /* PROGRESS */

    const progressValue =
        ((currentQuestion + 1) / questions.length) * 100;


    progress.style.width =
        progressValue + "%";


    /* PREVIOUS BUTTON */

    if (currentQuestion === 0) {

        previousButton.disabled = true;

    } else {

        previousButton.disabled = false;

    }


    /* NEXT BUTTON */

    if (currentQuestion === questions.length - 1) {

        nextButton.style.display = "none";

    } else {

        nextButton.style.display = "block";

    }

}


/* =========================================
   SELECT OPTION
========================================= */

function selectOption(option) {

    userAnswers[currentQuestion] =
        option;


    /* Remove previous selection */

    const allOptions =
        document.querySelectorAll(".option");


    allOptions.forEach(function(item) {

        item.classList.remove("selected");

    });


    /* Add selected class */

    allOptions.forEach(function(item) {

        if (item.textContent === option) {

            item.classList.add("selected");

        }

    });

}


/* =========================================
   NEXT QUESTION
========================================= */

function nextQuestion() {

    if (currentQuestion < questions.length - 1) {

        currentQuestion++;

        showQuestion();

    }

}


/* =========================================
   PREVIOUS QUESTION
========================================= */

function previousQuestion() {

    if (currentQuestion > 0) {

        currentQuestion--;

        showQuestion();

    }

}


/* =========================================
   TIMER
========================================= */

function startTimer() {

    timerInterval =
        setInterval(function() {


            let minutes =
                Math.floor(timeLeft / 60);


            let seconds =
                timeLeft % 60;


            minutes =
                String(minutes).padStart(2, "0");


            seconds =
                String(seconds).padStart(2, "0");


            timer.textContent =
                minutes + ":" + seconds;


            timeLeft--;


            /* TIME OVER */

            if (timeLeft < 0) {

                clearInterval(timerInterval);

                submitQuiz();

            }


        }, 1000);

}


/* =========================================
   SUBMIT QUIZ
========================================= */

function submitQuiz() {

    clearInterval(timerInterval);


    let correct = 0;

    let wrong = 0;

    let unattempted = 0;


    /* CHECK ANSWERS */

    questions.forEach(function(q, index) {

        if (userAnswers[index] === null) {

            unattempted++;

        }

        else if (userAnswers[index] === q.answer) {

            correct++;

        }

        else {

            wrong++;

        }

    });


    /* SCORE */

    const score = correct;


    const percentage =
        (correct / questions.length) * 100;


    /* SHOW RESULT */

    document.getElementById("result-total")
        .textContent = questions.length;


    document.getElementById("correct")
        .textContent = correct;


    document.getElementById("wrong")
        .textContent = wrong;


    document.getElementById("unattempted")
        .textContent = unattempted;


    document.getElementById("score")
        .textContent =
        score + "/" + questions.length;


    document.getElementById("percentage")
        .textContent =
        percentage.toFixed(0) + "%";


    /* HIDE QUIZ */

    quizContainer.style.display =
        "none";


    /* SHOW RESULT */

    resultBox.style.display =
        "block";

}


/* =========================================
   START
========================================= */

showQuestion();

startTimer();
<a href="topic-tests.html">Topic Tests <small>⌄</small></a>
 