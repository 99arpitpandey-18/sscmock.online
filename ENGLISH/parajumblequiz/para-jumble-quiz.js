/* =========================================================
   SSC CGL PARA JUMBLE QUIZ
   DATA DIRECTLY INSIDE JAVASCRIPT
   50 QUIZZES × 10 QUESTIONS = 500 QUESTIONS
========================================================= */


/* =========================================================
   PARA JUMBLE DATA
========================================================= */

const paraJumbleData = {

    subject: "Para Jumble",

    totalQuizzes: 50,

    questionsPerQuiz: 10,

    totalQuestions: 500,

    instruction:
        "Arrange the following sentences in the most logical order.",

    quizzes: [

        {
            quiz: 1,

            title: "Para Jumble Quiz 1",

            questions: [

                {
                    id: 1,

                    question: {

                        A: "It also helps students understand ideas more clearly.",

                        B: "Reading is one of the most useful habits for students.",

                        C: "Regular reading gradually improves vocabulary and language skills.",

                        D: "For this reason, students should make reading a part of their daily routine."

                    },

                    options: [

                        "BCAD",

                        "BACD",

                        "CBAD",

                        "ABCD"

                    ],

                    answer: 0
                },


                {
                    id: 2,

                    question: {

                        A: "A proper plan makes the work easier to manage.",

                        B: "Time management is important for students.",

                        C: "They can divide a large task into smaller activities.",

                        D: "This allows them to complete their work without unnecessary stress."

                    },

                    options: [

                        "BACD",

                        "BCAD",

                        "ACBD",

                        "ABCD"

                    ],

                    answer: 1
                },


                {
                    id: 3,

                    question: {

                        A: "Trees provide shade and help improve air quality.",

                        B: "Planting trees is beneficial for the environment.",

                        C: "They also help protect the soil from erosion.",

                        D: "Therefore, protecting existing trees and planting new ones is important."

                    },

                    options: [

                        "BACD",

                        "ABCD",

                        "BCAD",

                        "ACBD"

                    ],

                    answer: 1
                },


                {
                    id: 4,

                    question: {

                        A: "This habit can gradually improve concentration.",

                        B: "A quiet study environment is useful for learning.",

                        C: "Students can therefore choose a place with fewer distractions.",

                        D: "Noise and constant interruptions often make it difficult to focus."

                    },

                    options: [

                        "BDAC",

                        "BACD",

                        "ABDC",

                        "ABCD"

                    ],

                    answer: 0
                },


                {
                    id: 5,

                    question: {

                        A: "The information can then be used to make better decisions.",

                        B: "Good decisions usually depend on reliable information.",

                        C: "People should therefore check important facts before making a decision.",

                        D: "Relying on incomplete information may lead to mistakes."

                    },

                    options: [

                        "BDCA",

                        "BCDA",

                        "BACD",

                        "ABCD"

                    ],

                    answer: 0
                },


                {
                    id: 6,

                    question: {

                        A: "Regular exercise also helps people remain energetic during the day.",

                        B: "Physical exercise is important for maintaining a healthy lifestyle.",

                        C: "Even a short daily walk can be useful.",

                        D: "Therefore, people should try to include some physical activity in their routine."

                    },

                    options: [

                        "BADC",

                        "BCAD",

                        "BACD",

                        "ABCD"

                    ],

                    answer: 2
                },


                {
                    id: 7,

                    question: {

                        A: "It allows people to understand one another more effectively.",

                        B: "Clear communication is important in everyday life.",

                        C: "Listening carefully is an important part of communication.",

                        D: "Without proper communication, even simple ideas can be misunderstood."

                    },

                    options: [

                        "BCAD",

                        "BACD",

                        "BDCA",

                        "ABCD"

                    ],

                    answer: 0
                },


                {
                    id: 8,

                    question: {

                        A: "The habit can also reduce unnecessary spending.",

                        B: "Saving money requires regular planning.",

                        C: "A person should first understand how much money is being spent.",

                        D: "After identifying unnecessary expenses, some of them can be reduced."

                    },

                    options: [

                        "BCDA",

                        "BACD",

                        "CBDA",

                        "ABCD"

                    ],

                    answer: 0
                },


                {
                    id: 9,

                    question: {

                        A: "This makes revision easier before an examination.",

                        B: "Making short notes is a useful study technique.",

                        C: "Students can record important points while studying.",

                        D: "The notes can later be used to revise the main ideas quickly."

                    },

                    options: [

                        "BCDA",

                        "BCAD",

                        "CBAD",

                        "ABCD"

                    ],

                    answer: 1
                },


                {
                    id: 10,

                    question: {

                        A: "Small improvements made consistently can produce good results.",

                        B: "Success rarely comes from a single effort.",

                        C: "Regular practice is therefore important for developing any skill.",

                        D: "A person must continue working even when progress seems slow."

                    },

                    options: [

                        "BDAC",

                        "BACD",

                        "BCDA",

                        "ABCD"

                    ],

                    answer: 0
                }

            ]
        }

        /* =====================================================
           QUIZ 2
           QUIZ 3
           QUIZ 4
           ...
           QUIZ 50
           
           YAHAN 50 QUIZZES KA DATA RAHEGA
        ===================================================== */

    ]

};


/* =========================================================
   GLOBAL VARIABLES
========================================================= */

let allQuizData =
    paraJumbleData.quizzes;

let currentQuizNumber = 1;

let currentQuestionIndex = 0;

let quizQuestions = [];

let userAnswers = [];

let timerSeconds = 10 * 60;

let timerInterval = null;

let quizSubmitted = false;


/* =========================================================
   GET QUIZ NUMBER
========================================================= */

function getQuizNumberFromURL() {

    const params =
        new URLSearchParams(
            window.location.search
        );

    const quiz =
        parseInt(
            params.get("quiz"),
            10
        );

    if (
        Number.isInteger(quiz) &&
        quiz >= 1 &&
        quiz <= 50
    ) {

        return quiz;

    }

    return 1;
}


/* =========================================================
   LOAD QUIZ
   NO FETCH
   NO JSON FILE
========================================================= */

function loadQuizData() {

    try {

        currentQuizNumber =
            getQuizNumberFromURL();


        const selectedQuiz =
            allQuizData.find(
                quiz =>
                    Number(quiz.quiz) ===
                    currentQuizNumber
            );


        if (!selectedQuiz) {

            showError(
                "Quiz " +
                currentQuizNumber +
                " ka data JavaScript me nahi mila."
            );

            return;

        }


        quizQuestions =
            selectedQuiz.questions || [];


        if (
            quizQuestions.length === 0
        ) {

            showError(
                "Is quiz me questions nahi hain."
            );

            return;

        }


        userAnswers =
            new Array(
                quizQuestions.length
            ).fill(null);


        quizSubmitted = false;

        currentQuestionIndex = 0;

        timerSeconds = 10 * 60;


        if (quizNumberElement) {

            quizNumberElement.textContent =
                currentQuizNumber;

        }


        if (totalQuestionsElement) {

            totalQuestionsElement.textContent =
                quizQuestions.length;

        }


        if (sidebarTotalQuestions) {

            sidebarTotalQuestions.textContent =
                quizQuestions.length;

        }


        createQuestionPalette();

        renderQuestion();

        startTimer();


    } catch (error) {

        console.error(error);

        showError(
            "Quiz load nahi ho pa raha hai."
        );

    }

}


/* =========================================================
   BAaki tumhara existing quiz engine
   renderQuestion()
   renderSentences()
   renderOptions()
   selectAnswer()
   submitQuiz()
   timer()
   etc.
========================================================= */