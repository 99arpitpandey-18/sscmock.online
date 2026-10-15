// =====================================================
// SSC MOCK TEST ENGINE
// CGL TIER 1 + CGL TIER 2
// =====================================================


// =====================================================
// GET URL PARAMETERS
// =====================================================

const urlParams = new URLSearchParams(
    window.location.search
);

const exam = urlParams.get("exam");

const mockNumber =
    Number(urlParams.get("mock")) || 1;


// =====================================================
// ACTIVE DATABASE
// =====================================================

let activeMockDatabase = null;


// =====================================================
// CGL TIER 1
// =====================================================

if (exam === "cgl-tier1") {

    if (
        window.cglTier1Mocks &&
        Object.keys(window.cglTier1Mocks).length > 0
    ) {

        activeMockDatabase =
            window.cglTier1Mocks;

        console.log(
            "✅ CGL Tier 1 Database Loaded"
        );

    } else {

        alert(
            "CGL Tier 1 Mock Database load nahi hua!"
        );

        throw new Error(
            "cglTier1Mocks not found"
        );
    }
}


// =====================================================
// CGL TIER 2
// =====================================================

else if (exam === "cgl-tier2") {

    if (
        window.cglTier2Mocks &&
        Object.keys(window.cglTier2Mocks).length > 0
    ) {

        activeMockDatabase =
            window.cglTier2Mocks;

        console.log(
            "✅ CGL Tier 2 Database Loaded"
        );

        console.log(
            "Available Tier 2 Mocks:",
            Object.keys(activeMockDatabase)
        );

    } else {

        alert(
            "CGL Tier 2 Mock Database load nahi hua!"
        );

        throw new Error(
            "cglTier2Mocks not found"
        );
    }
}


// =====================================================
// EXAM MISSING
// =====================================================

else {

    alert(
        "Exam select nahi hua!"
    );

    throw new Error(
        "Exam parameter missing"
    );
}


// =====================================================
// SAVE DATABASE
// =====================================================

window.activeMockDatabase =
    activeMockDatabase;


// =====================================================
// GET SELECTED MOCK
// =====================================================

const selectedMock =
    activeMockDatabase[mockNumber];


// =====================================================
// CHECK MOCK
// =====================================================

if (!selectedMock) {

    alert(
        "Mock Test " +
        mockNumber +
        " not found!"
    );

    throw new Error(
        "Mock Test " +
        mockNumber +
        " not found"
    );
}


// =====================================================
// QUESTIONS
// =====================================================

const questions =
    selectedMock.questions;


// =====================================================
// CHECK QUESTIONS
// =====================================================

if (
    !Array.isArray(questions) ||
    questions.length === 0
) {

    alert(
        "Is Mock Test mein questions nahi mile!"
    );

    throw new Error(
        "Questions not found"
    );
}


// =====================================================
// DEBUG
// =====================================================

console.log(
    "================================="
);

console.log(
    "SSC MOCK TEST STARTED"
);

console.log(
    "Exam:",
    exam
);

console.log(
    "Mock:",
    mockNumber
);

console.log(
    "Title:",
    selectedMock.title
);

console.log(
    "Questions:",
    questions.length
);

console.log(
    "================================="
);


// =====================================================
// STATE
// =====================================================

let currentQuestion = 0;

let userAnswers =
    new Array(questions.length).fill(null);

let markedQuestions =
    new Array(questions.length).fill(false);

let visitedQuestions =
    new Array(questions.length).fill(false);


// =====================================================
// HTML ELEMENTS
// =====================================================

const timerElement =
    document.getElementById("timer");

const questionNumber =
    document.getElementById("questionNumber");

const questionText =
    document.getElementById("questionText");

const optionsContainer =
    document.getElementById("optionsContainer");

const sectionName =
    document.getElementById("sectionName");

const questionPalette =
    document.getElementById("questionPalette");

const prevBtn =
    document.getElementById("prevBtn");

const nextBtn =
    document.getElementById("nextBtn");

const clearBtn =
    document.getElementById("clearBtn");

const markReviewBtn =
    document.getElementById("markReviewBtn");

const submitBtn =
    document.getElementById("submitBtn");

const submitModal =
    document.getElementById("submitModal");

const cancelSubmit =
    document.getElementById("cancelSubmit");

const confirmSubmit =
    document.getElementById("confirmSubmit");

const resultScreen =
    document.getElementById("resultScreen");


// =====================================================
// TIMER
// =====================================================

let timeLeft = 60 * 60;

let timerInterval =
    setInterval(updateTimer, 1000);


function updateTimer() {

    if (!timerElement) {
        return;
    }

    const minutes =
        Math.floor(timeLeft / 60);

    const seconds =
        timeLeft % 60;

    timerElement.textContent =
        String(minutes).padStart(2, "0") +
        ":" +
        String(seconds).padStart(2, "0");


    if (timeLeft <= 0) {

        clearInterval(timerInterval);

        submitTest();

        return;
    }

    timeLeft--;
}


// =====================================================
// LOAD QUESTION
// =====================================================

function loadQuestion(index) {

    if (
        index < 0 ||
        index >= questions.length
    ) {
        return;
    }


    currentQuestion = index;

    visitedQuestions[index] = true;


    const question =
        questions[index];


    if (questionNumber) {

        questionNumber.textContent =
            "Question No. " +
            (index + 1);
    }


    if (sectionName) {

        sectionName.textContent =
            question.section ||
            "General Awareness";
    }


    if (questionText) {

        questionText.textContent =
            question.question;
    }


    if (optionsContainer) {

        optionsContainer.innerHTML = "";
    }


    if (
        Array.isArray(question.options)
    ) {

        question.options.forEach(
            function(option, optionIndex) {

                const label =
                    document.createElement("label");

                label.className =
                    "option";


                const input =
                    document.createElement("input");

                input.type = "radio";

                input.name = "answer";

                input.value = optionIndex;


                if (
                    userAnswers[index] ===
                    optionIndex
                ) {

                    input.checked = true;
                }


                const letter =
                    document.createElement("span");

                letter.className =
                    "option-letter";

                letter.textContent =
                    String.fromCharCode(
                        65 + optionIndex
                    );


                const text =
                    document.createElement("span");

                text.className =
                    "option-text";

                text.textContent =
                    option;


                label.appendChild(input);

                label.appendChild(letter);

                label.appendChild(text);


                input.addEventListener(
                    "change",
                    function() {

                        userAnswers[index] =
                            optionIndex;

                        updateOptionStyles();

                        updatePalette();
                    }
                );


                optionsContainer.appendChild(
                    label
                );

            }
        );
    }


    updateOptionStyles();

    updatePalette();

    updateButtons();
}


// =====================================================
// OPTION STYLE
// =====================================================

function updateOptionStyles() {

    if (!optionsContainer) {
        return;
    }


    const options =
        optionsContainer.querySelectorAll(
            ".option"
        );


    options.forEach(
        function(option, index) {

            option.classList.remove(
                "selected"
            );


            if (
                userAnswers[
                    currentQuestion
                ] === index
            ) {

                option.classList.add(
                    "selected"
                );
            }

        }
    );
}


// =====================================================
// CREATE PALETTE
// =====================================================

function createPalette() {

    if (!questionPalette) {
        return;
    }


    questionPalette.innerHTML = "";


    questions.forEach(
        function(question, index) {

            const button =
                document.createElement("button");


            button.type = "button";

            button.textContent =
                index + 1;

            button.className =
                "palette-question";


            button.addEventListener(
                "click",
                function() {

                    loadQuestion(index);

                }
            );


            questionPalette.appendChild(
                button
            );

        }
    );


    updatePalette();
}


// =====================================================
// UPDATE PALETTE
// =====================================================

function updatePalette() {

    if (!questionPalette) {
        return;
    }


    const buttons =
        questionPalette.querySelectorAll(
            ".palette-question"
        );


    buttons.forEach(
        function(button, index) {

            button.className =
                "palette-question";


            if (
                index === currentQuestion
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


            if (
                visitedQuestions[index] &&
                userAnswers[index] === null
            ) {

                button.classList.add(
                    "not-answered"
                );
            }


            if (
                markedQuestions[index]
            ) {

                button.classList.add(
                    "marked"
                );
            }

        }
    );
}


// =====================================================
// NEXT
// =====================================================

if (nextBtn) {

    nextBtn.addEventListener(
        "click",
        function() {

            if (
                currentQuestion <
                questions.length - 1
            ) {

                loadQuestion(
                    currentQuestion + 1
                );

            } else {

                openSubmitModal();

            }

        }
    );
}


// =====================================================
// PREVIOUS
// =====================================================

if (prevBtn) {

    prevBtn.addEventListener(
        "click",
        function() {

            if (
                currentQuestion > 0
            ) {

                loadQuestion(
                    currentQuestion - 1
                );

            }

        }
    );
}


// =====================================================
// CLEAR RESPONSE
// =====================================================

if (clearBtn) {

    clearBtn.addEventListener(
        "click",
        function() {

            userAnswers[
                currentQuestion
            ] = null;

            loadQuestion(
                currentQuestion
            );

        }
    );
}


// =====================================================
// MARK FOR REVIEW
// =====================================================

if (markReviewBtn) {

    markReviewBtn.addEventListener(
        "click",
        function() {

            markedQuestions[
                currentQuestion
            ] =
                !markedQuestions[
                    currentQuestion
                ];


            if (
                currentQuestion <
                questions.length - 1
            ) {

                loadQuestion(
                    currentQuestion + 1
                );

            } else {

                updatePalette();

            }

        }
    );
}


// =====================================================
// OPEN SUBMIT MODAL
// =====================================================

function openSubmitModal() {

    if (!submitModal) {
        submitTest();
        return;
    }


    submitModal.style.display =
        "flex";
}


// =====================================================
// SUBMIT BUTTON
// =====================================================

if (submitBtn) {

    submitBtn.addEventListener(
        "click",
        function() {

            openSubmitModal();

        }
    );
}


// =====================================================
// CANCEL SUBMIT
// =====================================================

if (cancelSubmit) {

    cancelSubmit.addEventListener(
        "click",
        function() {

            if (submitModal) {

                submitModal.style.display =
                    "none";
            }

        }
    );
}


// =====================================================
// CONFIRM SUBMIT
// =====================================================

if (confirmSubmit) {

    confirmSubmit.addEventListener(
        "click",
        function() {

            if (submitModal) {

                submitModal.style.display =
                    "none";
            }

            submitTest();

        }
    );
}


// =====================================================
// SUBMIT TEST
// =====================================================

function submitTest() {

    clearInterval(
        timerInterval
    );


    let attempted = 0;

    let correct = 0;

    let wrong = 0;


    questions.forEach(
        function(question, index) {

            if (
                userAnswers[index] !== null
            ) {

                attempted++;


                if (
                    userAnswers[index] ===
                    question.answer
                ) {

                    correct++;

                } else {

                    wrong++;

                }

            }

        }
    );


    const notAttempted =
        questions.length -
        attempted;


    const score =
        correct * 2;


    const totalQuestionsElement =
        document.getElementById(
            "totalQuestions"
        );

    const attemptedQuestionsElement =
        document.getElementById(
            "attemptedQuestions"
        );

    const correctAnswersElement =
        document.getElementById(
            "correctAnswers"
        );

    const wrongAnswersElement =
        document.getElementById(
            "wrongAnswers"
        );

    const notAttemptedElement =
        document.getElementById(
            "notAttempted"
        );

    const finalScoreElement =
        document.getElementById(
            "finalScore"
        );


    if (totalQuestionsElement) {

        totalQuestionsElement.textContent =
            questions.length;
    }


    if (attemptedQuestionsElement) {

        attemptedQuestionsElement.textContent =
            attempted;
    }


    if (correctAnswersElement) {

        correctAnswersElement.textContent =
            correct;
    }


    if (wrongAnswersElement) {

        wrongAnswersElement.textContent =
            wrong;
    }


    if (notAttemptedElement) {

        notAttemptedElement.textContent =
            notAttempted;
    }


    if (finalScoreElement) {

        finalScoreElement.textContent =
            score +
            " / " +
            (questions.length * 2);
    }


    if (resultScreen) {

        resultScreen.style.display =
            "flex";
    }


    console.log(
        "================================="
    );

    console.log(
        "TEST SUBMITTED"
    );

    console.log(
        "Exam:",
        exam
    );

    console.log(
        "Mock:",
        mockNumber
    );

    console.log(
        "Attempted:",
        attempted
    );

    console.log(
        "Correct:",
        correct
    );

    console.log(
        "Wrong:",
        wrong
    );

    console.log(
        "Not Attempted:",
        notAttempted
    );

    console.log(
        "Score:",
        score
    );

    console.log(
        "================================="
    );
}


// =====================================================
// BUTTON STATES
// =====================================================

function updateButtons() {

    if (prevBtn) {

        prevBtn.disabled =
            currentQuestion === 0;
    }


    if (nextBtn) {

        if (
            currentQuestion ===
            questions.length - 1
        ) {

            nextBtn.textContent =
                "Submit Test";

        } else {

            nextBtn.textContent =
                "Save & Next →";
        }

    }
}


// =====================================================
// START MOCK
// =====================================================

createPalette();

loadQuestion(0);


// =====================================================
// FINAL DEBUG
// =====================================================

console.log(
    "Mock Engine Ready ✅"
);

console.log(
    "Exam:",
    exam
);

console.log(
    "Mock:",
    mockNumber
);

console.log(
    "Title:",
    selectedMock.title
);

console.log(
    "Questions:",
    questions.length
);
// =====================================================
// SSC WEBSITE + MOCK TEST SYSTEM
// =====================================================


// =====================================================
// MOCK TEST DROPDOWN
// =====================================================

const mockBtn = document.getElementById("mockBtn");
const mockMenu = document.getElementById("mockMenu");

if (mockBtn && mockMenu) {

    mockBtn.addEventListener("click", function (event) {

        event.stopPropagation();

        mockMenu.classList.toggle("show");

    });


    document.addEventListener("click", function (event) {

        if (!event.target.closest(".dropdown")) {

            mockMenu.classList.remove("show");

        }

    });

}


// =====================================================
// MOCK TEST SYSTEM
// =====================================================

// ================= ELEMENTS =================

const testGrid =
    document.getElementById("testGrid");

const testListSection =
    document.getElementById("testListSection");

const testListContainer =
    document.getElementById("testListContainer");

const selectedExam =
    document.getElementById("selectedExam");

const testCount =
    document.getElementById("testCount");

const backToTests =
    document.getElementById("backToTests");


// =====================================================
// EXAM TEST DATA
// =====================================================

const examTests = {

    "cgl-tier1": [
        "SSC CGL Tier 1 Mock Test 1",
        "SSC CGL Tier 1 Mock Test 2",
        "SSC CGL Tier 1 Mock Test 3",
        "SSC CGL Tier 1 Mock Test 4",
        "SSC CGL Tier 1 Mock Test 5",
        "SSC CGL Tier 1 Mock Test 6",
        "SSC CGL Tier 1 Mock Test 7",
        "SSC CGL Tier 1 Mock Test 8",
        "SSC CGL Tier 1 Mock Test 9",
        "SSC CGL Tier 1 Mock Test 10"
    ],


    "cgl-tier2": [
        "SSC CGL Tier 2 Mock Test 1",
        "SSC CGL Tier 2 Mock Test 2",
        "SSC CGL Tier 2 Mock Test 3",
        "SSC CGL Tier 2 Mock Test 4",
        "SSC CGL Tier 2 Mock Test 5",
        "SSC CGL Tier 2 Mock Test 6",
        "SSC CGL Tier 2 Mock Test 7",
        "SSC CGL Tier 2 Mock Test 8",
        "SSC CGL Tier 2 Mock Test 9",
        "SSC CGL Tier 2 Mock Test 10"
    ],


    "cpo-paper1": [
        "SSC CPO Paper 1 Mock Test 1",
        "SSC CPO Paper 1 Mock Test 2",
        "SSC CPO Paper 1 Mock Test 3",
        "SSC CPO Paper 1 Mock Test 4",
        "SSC CPO Paper 1 Mock Test 5",
        "SSC CPO Paper 1 Mock Test 6",
        "SSC CPO Paper 1 Mock Test 7",
        "SSC CPO Paper 1 Mock Test 8",
        "SSC CPO Paper 1 Mock Test 9",
        "SSC CPO Paper 1 Mock Test 10"
    ],


    "cpo-paper2": [
        "SSC CPO Paper 2 Mock Test 1",
        "SSC CPO Paper 2 Mock Test 2",
        "SSC CPO Paper 2 Mock Test 3",
        "SSC CPO Paper 2 Mock Test 4",
        "SSC CPO Paper 2 Mock Test 5",
        "SSC CPO Paper 2 Mock Test 6",
        "SSC CPO Paper 2 Mock Test 7",
        "SSC CPO Paper 2 Mock Test 8",
        "SSC CPO Paper 2 Mock Test 9",
        "SSC CPO Paper 2 Mock Test 10"
    ],


    "chsl-tier1": [
        "SSC CHSL Tier 1 Mock Test 1",
        "SSC CHSL Tier 1 Mock Test 2",
        "SSC CHSL Tier 1 Mock Test 3",
        "SSC CHSL Tier 1 Mock Test 4",
        "SSC CHSL Tier 1 Mock Test 5",
        "SSC CHSL Tier 1 Mock Test 6",
        "SSC CHSL Tier 1 Mock Test 7",
        "SSC CHSL Tier 1 Mock Test 8",
        "SSC CHSL Tier 1 Mock Test 9",
        "SSC CHSL Tier 1 Mock Test 10"
    ],


    "chsl-tier2": [
        "SSC CHSL Tier 2 Mock Test 1",
        "SSC CHSL Tier 2 Mock Test 2",
        "SSC CHSL Tier 2 Mock Test 3",
        "SSC CHSL Tier 2 Mock Test 4",
        "SSC CHSL Tier 2 Mock Test 5",
        "SSC CHSL Tier 2 Mock Test 6",
        "SSC CHSL Tier 2 Mock Test 7",
        "SSC CHSL Tier 2 Mock Test 8",
        "SSC CHSL Tier 2 Mock Test 9",
        "SSC CHSL Tier 2 Mock Test 10"
    ],


    "mts": [
        "SSC MTS Mock Test 1",
        "SSC MTS Mock Test 2",
        "SSC MTS Mock Test 3",
        "SSC MTS Mock Test 4",
        "SSC MTS Mock Test 5",
        "SSC MTS Mock Test 6",
        "SSC MTS Mock Test 7",
        "SSC MTS Mock Test 8",
        "SSC MTS Mock Test 9",
        "SSC MTS Mock Test 10"
    ],


    "gd": [
        "SSC GD Mock Test 1",
        "SSC GD Mock Test 2",
        "SSC GD Mock Test 3",
        "SSC GD Mock Test 4",
        "SSC GD Mock Test 5",
        "SSC GD Mock Test 6",
        "SSC GD Mock Test 7",
        "SSC GD Mock Test 8",
        "SSC GD Mock Test 9",
        "SSC GD Mock Test 10"
    ],


    "selection-post": [
        "SSC Selection Post Mock Test 1",
        "SSC Selection Post Mock Test 2",
        "SSC Selection Post Mock Test 3",
        "SSC Selection Post Mock Test 4",
        "SSC Selection Post Mock Test 5",
        "SSC Selection Post Mock Test 6",
        "SSC Selection Post Mock Test 7",
        "SSC Selection Post Mock Test 8",
        "SSC Selection Post Mock Test 9",
        "SSC Selection Post Mock Test 10"
    ]

};


// =====================================================
// VIEW ALL TEST BUTTONS
// =====================================================

const viewButtons =
    document.querySelectorAll(".view-tests");


viewButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const exam =
            button.getAttribute("data-exam");

        const title =
            button.getAttribute("data-title");

        openExamTests(exam, title);

    });

});


// =====================================================
// OPEN SELECTED EXAM TESTS
// =====================================================

function openExamTests(exam, title) {

    if (
        !testGrid ||
        !testListSection ||
        !testListContainer ||
        !selectedExam ||
        !testCount
    ) {
        console.error("Test list elements missing.");
        return;
    }


    const tests =
        examTests[exam] || [];


    console.log("Selected Exam:", exam);
    console.log("Tests:", tests);


    selectedExam.textContent =
        title;


    testCount.textContent =
        tests.length;


    testListContainer.innerHTML =
        "";


    // =================================================
    // CREATE TEST CARDS
    // =================================================

    tests.forEach(function (testName, index) {

        const testCard =
            document.createElement("div");


        testCard.className =
            "single-test-card";


        const number =
            String(index + 1).padStart(2, "0");


        testCard.innerHTML = `

            <div class="test-number">
                ${number}
            </div>


            <div class="test-info">

                <h3>
                    ${testName}
                </h3>


                <div class="test-meta">

                    <span>
                        📝 100 Questions
                    </span>

                    <span>
                        🎯 200 Marks
                    </span>

                    <span>
                        ⏱ 60 Minutes
                    </span>

                </div>

            </div>


            <button
                class="start-test-btn"
                data-test="${index + 1}"
                data-exam="${exam}"
                data-title="${testName}">

                Start Test →

            </button>

        `;


        testListContainer.appendChild(
            testCard
        );

    });


    // =================================================
    // HIDE EXAM CARDS
    // =================================================

    testGrid.style.display =
        "none";


    // =================================================
    // SHOW TEST LIST
    // =================================================

    testListSection.style.display =
        "block";


    // =================================================
    // SCROLL
    // =================================================

    testListSection.scrollIntoView({
        behavior: "smooth"
    });

}


// =====================================================
// BACK TO TEST SERIES
// =====================================================

if (backToTests) {

    backToTests.addEventListener(
        "click",
        function () {

            if (testListSection) {

                testListSection.style.display =
                    "none";

            }


            if (testGrid) {

                testGrid.style.display =
                    "grid";

            }


            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );

}


// =====================================================
// START TEST BUTTON
// =====================================================

document.addEventListener(
    "click",
    function (event) {

        if (
            event.target.classList.contains(
                "start-test-btn"
            )
        ) {

            const testNumber =
                event.target.getAttribute(
                    "data-test"
                );


            const exam =
                event.target.getAttribute(
                    "data-exam"
                );


            const testName =
                event.target.getAttribute(
                    "data-title"
                );


            console.log(
                "Starting Exam:",
                exam
            );


            console.log(
                "Starting Mock:",
                testNumber
            );


            console.log(
                "Test Name:",
                testName
            );


            openMockTest(
                exam,
                testNumber,
                testName
            );

        }

    }
);


// =====================================================
// OPEN PROPER MOCK TEST
// =====================================================

function openMockTest(
    exam,
    testNumber,
    testName
) {

    const url =
        "complete mock.html?exam=" +
        encodeURIComponent(exam) +
        "&mock=" +
        encodeURIComponent(testNumber) +
        "&name=" +
        encodeURIComponent(testName);


    console.log(
        "Opening Mock URL:",
        url
    );


    window.location.href =
        url;

}


// =====================================================
// AI ASK SYSTEM
// =====================================================

const openAIChat =
    document.getElementById("openAIChat");

const closeAIChat =
    document.getElementById("closeAIChat");

const aiChatOverlay =
    document.getElementById("aiChatOverlay");


if (openAIChat && aiChatOverlay) {

    openAIChat.addEventListener(
        "click",
        function () {

            aiChatOverlay.classList.add(
                "active"
            );


            document.body.style.overflow =
                "hidden";


            const input =
                document.getElementById(
                    "question"
                );


            if (input) {

                input.focus();

            }

        }
    );

}


// =====================================================
// CLOSE AI CHAT
// =====================================================

if (closeAIChat && aiChatOverlay) {

    closeAIChat.addEventListener(
        "click",
        function () {

            aiChatOverlay.classList.remove(
                "active"
            );


            document.body.style.overflow =
                "";

        }
    );

}


// =====================================================
// CLOSE AI CHAT OUTSIDE
// =====================================================

if (aiChatOverlay) {

    aiChatOverlay.addEventListener(
        "click",
        function (event) {

            if (
                event.target ===
                aiChatOverlay
            ) {

                aiChatOverlay.classList.remove(
                    "active"
                );


                document.body.style.overflow =
                    "";

            }

        }
    );

}


// =====================================================
// ENTER KEY AI
// =====================================================

const aiQuestionInput =
    document.getElementById("question");


if (aiQuestionInput) {

    aiQuestionInput.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Enter") {

                event.preventDefault();

                askAI();

            }

        }
    );

}


// =====================================================
// LOGIN / REGISTER SYSTEM
// =====================================================

function openAuth(type) {

    const modal =
        document.getElementById(
            "authModal"
        );


    const loginForm =
        document.getElementById(
            "loginForm"
        );


    const registerForm =
        document.getElementById(
            "registerForm"
        );


    const title =
        document.getElementById(
            "authTitle"
        );


    const subtitle =
        document.getElementById(
            "authSubtitle"
        );


    const icon =
        document.getElementById(
            "authIcon"
        );


    const bottomText =
        document.getElementById(
            "authBottomText"
        );


    const switchButton =
        document.getElementById(
            "authSwitch"
        );


    if (
        !modal ||
        !loginForm ||
        !registerForm
    ) {
        return;
    }


    // =================================================
    // LOGIN
    // =================================================

    if (type === "login") {

        loginForm.style.display =
            "block";


        registerForm.style.display =
            "none";


        if (icon) {

            icon.innerHTML =
                "🔐";

        }


        if (title) {

            title.innerHTML =
                "Welcome Back";

        }


        if (subtitle) {

            subtitle.innerHTML =
                "Login to continue your SSC preparation";

        }


        if (bottomText) {

            bottomText.innerHTML =
                "Don't have an account?";

        }


        if (switchButton) {

            switchButton.innerHTML =
                "Create Account";

        }

    }


    // =================================================
    // REGISTER
    // =================================================

    else {

        loginForm.style.display =
            "none";


        registerForm.style.display =
            "block";


        if (icon) {

            icon.innerHTML =
                "🚀";

        }


        if (title) {

            title.innerHTML =
                "Create Account";

        }


        if (subtitle) {

            subtitle.innerHTML =
                "Start your SSC preparation today";

        }


        if (bottomText) {

            bottomText.innerHTML =
                "Already have an account?";

        }


        if (switchButton) {

            switchButton.innerHTML =
                "Login";

        }

    }


    modal.classList.add(
        "active"
    );


    document.body.style.overflow =
        "hidden";

}


// =====================================================
// CLOSE AUTH
// =====================================================

function closeAuth() {

    const modal =
        document.getElementById(
            "authModal"
        );


    if (!modal) {
        return;
    }


    modal.classList.remove(
        "active"
    );


    document.body.style.overflow =
        "";

}


// =====================================================
// SWITCH AUTH
// =====================================================

function switchAuth() {

    const loginForm =
        document.getElementById(
            "loginForm"
        );


    if (!loginForm) {
        return;
    }


    if (
        loginForm.style.display ===
        "none"
    ) {

        openAuth("login");

    }

    else {

        openAuth("register");

    }

}


// =====================================================
// ESC KEY
// =====================================================

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            closeAuth();

        }

    }
);


// =====================================================
// REGISTER SYSTEM
// =====================================================

const registerForm =
    document.getElementById(
        "registerForm"
    );


if (registerForm) {

    registerForm.addEventListener(
        "submit",
        async function (event) {

            event.preventDefault();


            const inputs =
                this.querySelectorAll(
                    "input"
                );


            const name =
                inputs[0].value.trim();


            const email =
                inputs[1].value.trim();


            const password =
                inputs[2].value;


            try {

                const response =
                    await fetch(
                        "/api/register",
                        {

                            method: "POST",

                            headers: {
                                "Content-Type":
                                    "application/json"
                            },

                            body:
                                JSON.stringify({

                                    name:
                                        name,

                                    email:
                                        email,

                                    password:
                                        password

                                })

                        }
                    );


                const data =
                    await response.json();


                if (data.success) {

                    alert(
                        "Registration successful! 🎉"
                    );


                    this.reset();


                    openAuth(
                        "login"
                    );

                }

                else {

                    alert(
                        data.message
                    );

                }

            }

            catch (error) {

                console.error(
                    "Registration error:",
                    error
                );


                alert(
                    "Backend se connection nahi ho pa raha."
                );

            }

        }
    );

}


// =====================================================
// LOGIN SYSTEM
// =====================================================

const loginForm =
    document.getElementById(
        "loginForm"
    );


if (loginForm) {

    loginForm.addEventListener(
        "submit",
        async function (event) {

            event.preventDefault();


            const inputs =
                this.querySelectorAll(
                    "input"
                );


            const email =
                inputs[0].value.trim();


            const password =
                inputs[1].value;


            try {

                const response =
                    await fetch(
                        "/api/login",
                        {

                            method: "POST",

                            headers: {
                                "Content-Type":
                                    "application/json"
                            },

                            body:
                                JSON.stringify({

                                    email:
                                        email,

                                    password:
                                        password

                                })

                        }
                    );


                const data =
                    await response.json();


                if (data.success) {

                    alert(
                        "Login successful! 🎉"
                    );


                    this.reset();


                    closeAuth();


                    updateNavbar(
                        data.user
                    );

                }

                else {

                    alert(
                        data.message
                    );

                }

            }

            catch (error) {

                console.error(
                    "Login error:",
                    error
                );


                alert(
                    "Backend se connection nahi ho pa raha."
                );

            }

        }
    );

}


// =====================================================
// CHECK LOGIN SESSION
// =====================================================

async function checkLoginStatus() {

    try {

        const response =
            await fetch(
                "/api/me"
            );


        const data =
            await response.json();


        if (data.loggedIn) {

            console.log(
                "Logged in as:",
                data.user.name
            );


            updateNavbar(
                data.user
            );

        }

        else {

            console.log(
                "User is not logged in."
            );

        }

    }

    catch (error) {

        console.error(
            "Session check error:",
            error
        );

    }

}


// =====================================================
// UPDATE NAVBAR
// =====================================================

function updateNavbar(user) {

    const navButtons =
        document.querySelector(
            ".nav-buttons"
        );


    if (!navButtons) {
        return;
    }


    navButtons.innerHTML = `

        <button class="search">
            🔍
        </button>

        <span class="user-name">
            👋 ${user.name}
        </span>

        <button
            class="logout"
            onclick="logoutUser()">

            Logout

        </button>

    `;

}


// =====================================================
// LOGOUT
// =====================================================

async function logoutUser() {

    try {

        const response =
            await fetch(
                "/api/logout",
                {
                    method: "POST"
                }
            );


        const data =
            await response.json();


        if (data.success) {

            alert(
                "Logout successful! 👋"
            );


            location.reload();

        }

        else {

            alert(
                data.message ||
                "Logout failed."
            );

        }

    }

    catch (error) {

        console.error(
            "Logout error:",
            error
        );


        alert(
            "Logout nahi ho pa raha."
        );

    }

}


// =====================================================
// AI ASK SYSTEM
// =====================================================

async function askAI() {

    const input =
        document.getElementById(
            "question"
        );


    const chatBox =
        document.getElementById(
            "chatBox"
        );


    if (!input || !chatBox) {

        console.error(
            "AI chat elements not found."
        );

        return;

    }


    const question =
        input.value.trim();


    if (question === "") {
        return;
    }


    chatBox.innerHTML += `

        <div class="user-message">
            ${question}
        </div>

    `;


    input.value = "";


    chatBox.innerHTML += `

        <div
            class="ai-message"
            id="aiLoading">

            🤔 Thinking...

        </div>

    `;


    try {

        const response =
            await fetch(
                "/api/ask-ai",
                {

                    method: "POST",

                    headers: {
                        "Content-Type":
                            "application/json"
                    },

                    body:
                        JSON.stringify({

                            question:
                                question

                        })

                }
            );


        const data =
            await response.json();


        const loading =
            document.getElementById(
                "aiLoading"
            );


        if (loading) {

            loading.remove();

        }


        if (data.success) {

            chatBox.innerHTML += `

                <div class="ai-message">

                    🤖 ${data.answer}

                </div>

            `;

        }

        else {

            chatBox.innerHTML += `

                <div class="ai-message">

                    ❌ ${
                        data.message ||
                        "AI answer nahi de pa raha."
                    }

                </div>

            `;

        }


        chatBox.scrollTop =
            chatBox.scrollHeight;

    }

    catch (error) {

        console.error(
            "AI Error:",
            error
        );


        const loading =
            document.getElementById(
                "aiLoading"
            );


        if (loading) {

            loading.remove();

        }


        chatBox.innerHTML += `

            <div class="ai-message">

                ❌ Server se AI connection nahi ho pa raha.

            </div>

        `;

    }

}


// =====================================================
// CHECK SESSION
// =====================================================

checkLoginStatus();


// =====================================================
// FINAL MESSAGE
// =====================================================

console.log(
    "SSC Website JavaScript Loaded Successfully"
);