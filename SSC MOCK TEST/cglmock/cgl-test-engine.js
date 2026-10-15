/* =========================================================
   SSC CGL HARD MOCK TEST
   COMPLETE EXAM ENGINE
   MOCK 01 - MOCK 10
   BILINGUAL ENGINE
========================================================= */

"use strict";


/* =========================================================
   GLOBAL VARIABLES
========================================================= */

let selectedLanguage = "english";

let currentMockNumber = 1;

let currentSection = "reasoning";

let currentQuestionIndex = 0;

let testStarted = false;

let testSubmitted = false;

let timerInterval = null;

let totalTime = 60 * 60;

let timeRemaining = totalTime;

let testStartTime = null;

let testEndTime = null;

let currentMock = null;


/* =========================================================
   USER ANSWERS
========================================================= */

let userAnswers = {

    reasoning: {},
    gk: {},
    math: {},
    english: {}

};


/* =========================================================
   MARKED QUESTIONS
========================================================= */

let markedQuestions = {

    reasoning: {},
    gk: {},
    math: {},
    english: {}

};


/* =========================================================
   SECTION CONFIGURATION
========================================================= */

const sectionConfig = {

    reasoning: {

        title:
            "General Intelligence & Reasoning",

        shortTitle:
            "Reasoning",

        hindiTitle:
            "सामान्य बुद्धिमत्ता एवं तर्कशक्ति",

        count: 25

    },


    gk: {

        title:
            "General Awareness",

        shortTitle:
            "General Awareness",

        hindiTitle:
            "सामान्य जागरूकता",

        count: 25

    },


    math: {

        title:
            "Quantitative Aptitude",

        shortTitle:
            "Quantitative Aptitude",

        hindiTitle:
            "मात्रात्मक योग्यता",

        count: 25

    },


    english: {

        title:
            "English Comprehension",

        shortTitle:
            "English",

        hindiTitle:
            "English Comprehension",

        count: 25

    }

};


/* =========================================================
   SECTION ORDER
========================================================= */

const sectionOrder = [

    "reasoning",
    "gk",
    "math",
    "english"

];


/* =========================================================
   DOM READY
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        initializeMock();

    }
);


/* =========================================================
   INITIALIZE MOCK
========================================================= */

function initializeMock() {

    const params =
        new URLSearchParams(
            window.location.search
        );


    const urlMock =
        params.get("mock");


    if (urlMock) {

        const parsed =
            parseInt(urlMock);


        if (

            !isNaN(parsed) &&

            parsed >= 1 &&

            parsed <= 10

        ) {

            currentMockNumber =
                parsed;

        }

    }


    /*
       Load selected mock
    */

    loadMockDatabase();


    /*
       Update start screen
    */

    updateStartScreen();


    /*
       Update mock selection
    */

    updateMockSelection();


    /*
       Create palette
    */

    createPalette();


    /*
       Set language
    */

    selectLanguage(
        selectedLanguage
    );

}


/* =========================================================
   SELECT MOCK
========================================================= */

function selectMock(mockNumber) {

    mockNumber =
        parseInt(mockNumber);


    /*
       Validate
    */

    if (

        isNaN(mockNumber) ||

        mockNumber < 1 ||

        mockNumber > 10

    ) {

        return;

    }


    /*
       Check database
    */

    if (
        typeof cglMocks ===
        "undefined"
    ) {

        alert(
            "Mock database is not loaded."
        );

        return;

    }


    let selectedMock =
        null;


    /*
       Possible database keys
    */

    const possibleKeys = [

        "mock" + mockNumber,

        String(mockNumber),

        mockNumber

    ];


    /*
       Find mock
    */

    for (
        let key of possibleKeys
    ) {

        if (
            cglMocks[key]
        ) {

            selectedMock =
                cglMocks[key];

            break;

        }

    }


    /*
       Mock unavailable
    */

    if (!selectedMock) {

        alert(

            "Mock " +

            String(mockNumber)
                .padStart(2, "0") +

            " is not available yet."

        );

        return;

    }


    /*
       Do not allow changing
       mock during active test
    */

    if (
        testStarted &&
        !testSubmitted
    ) {

        alert(
            "You cannot change the mock while the test is running."
        );

        return;

    }


    /*
       Set selected mock
    */

    currentMockNumber =
        mockNumber;

    currentMock =
        selectedMock;


    /*
       Update URL
    */

    const newURL =

        window.location.pathname +

        "?mock=" +

        mockNumber;


    window.history.replaceState(

        {},

        "",

        newURL

    );


    /*
       Update UI
    */

    updateStartScreen();

    updateMockSelection();

    createPalette();


    /*
       Reset question position
    */

    currentSection =
        "reasoning";

    currentQuestionIndex =
        0;

}


/* =========================================================
   LOAD MOCK DATABASE
========================================================= */

function loadMockDatabase() {

    if (
        typeof cglMocks ===
        "undefined"
    ) {

        console.warn(
            "cglMocks not found. Please load cgl-test-questions.js first."
        );

        currentMock =
            null;

        return;

    }


    const possibleKeys = [

        "mock" + currentMockNumber,

        String(currentMockNumber),

        currentMockNumber

    ];


    currentMock =
        null;


    /*
       Find selected mock
    */

    for (
        let key of possibleKeys
    ) {

        if (
            cglMocks[key]
        ) {

            currentMock =
                cglMocks[key];

            break;

        }

    }


    /*
       Fallback to Mock 01
    */

    if (
        !currentMock &&
        cglMocks.mock1
    ) {

        currentMock =
            cglMocks.mock1;

        currentMockNumber =
            1;

    }


    if (!currentMock) {

        console.error(
            "Mock test database is empty."
        );

    }

}


/* =========================================================
   UPDATE START SCREEN
========================================================= */

function updateStartScreen() {

    const titleElement =
        document.getElementById(
            "startMockTitle"
        );


    if (titleElement) {

        if (

            currentMock &&

            currentMock.title

        ) {

            titleElement.textContent =
                currentMock.title;

        } else {

            titleElement.textContent =

                "SSC CGL Tier-I Hard Mock " +

                String(currentMockNumber)
                    .padStart(2, "0");

        }

    }


    /*
       Badge
    */

    const badge =
        document.getElementById(
            "selectedMockBadge"
        );


    if (badge) {

        badge.textContent =

            "Mock " +

            String(currentMockNumber)
                .padStart(2, "0") +

            " Selected";

    }

}


/* =========================================================
   UPDATE MOCK CARD SELECTION
========================================================= */

function updateMockSelection() {

    document
        .querySelectorAll(
            ".mock-card"
        )
        .forEach(
            function (card) {

                card.classList.remove(
                    "active"
                );

            }
        );


    const selectedCard =
        document.querySelector(

            '.mock-card[data-mock="' +

            currentMockNumber +

            '"]'

        );


    if (selectedCard) {

        selectedCard.classList.add(
            "active"
        );

    }


    /*
       Badge
    */

    const badge =
        document.getElementById(
            "selectedMockBadge"
        );


    if (badge) {

        badge.textContent =

            "Mock " +

            String(currentMockNumber)
                .padStart(2, "0") +

            " Selected";

    }

}


/* =========================================================
   LANGUAGE SELECTION
========================================================= */

function selectLanguage(language) {

    if (

        language !== "english" &&

        language !== "hindi"

    ) {

        language =
            "english";

    }


    selectedLanguage =
        language;


    /*
       Update buttons
    */

    document
        .querySelectorAll(
            ".language-btn"
        )
        .forEach(
            function (button) {

                button.classList.remove(
                    "active"
                );


                if (

                    button.dataset.language ===
                    language

                ) {

                    button.classList.add(
                        "active"
                    );

                }

            }
        );


    /*
       Update selected language
    */

    const languageDisplay =
        document.getElementById(
            "selectedLanguage"
        );


    if (languageDisplay) {

        languageDisplay.textContent =

            language === "hindi"

                ? "हिन्दी"

                : "English";

    }


    /*
       If exam is running,
       re-render current question
    */

    if (
        testStarted &&
        !testSubmitted
    ) {

        renderQuestion();

    }

}


/* =========================================================
   START TEST
========================================================= */

function startTest() {

    /*
       Make sure database is loaded
    */

    if (!currentMock) {

        loadMockDatabase();

    }


    if (!currentMock) {

        alert(
            "Mock questions are not loaded yet."
        );

        return;

    }


    /*
       Validate questions
    */

    if (
        !validateMockStructure()
    ) {

        alert(

            "Selected mock does not contain all required sections."

        );

        return;

    }


    testStarted =
        true;

    testSubmitted =
        false;


    /*
       Reset timer
    */

    timeRemaining =
        totalTime;


    testStartTime =
        Date.now();


    testEndTime =
        null;


    /*
       Reset position
    */

    currentSection =
        "reasoning";

    currentQuestionIndex =
        0;


    /*
       Reset answers
    */

    userAnswers = {

        reasoning: {},
        gk: {},
        math: {},
        english: {}

    };


    /*
       Reset review
    */

    markedQuestions = {

        reasoning: {},
        gk: {},
        math: {},
        english: {}

    };


    /*
       Hide start screen
    */

    const startScreen =
        document.getElementById(
            "startScreen"
        );


    const examScreen =
        document.getElementById(
            "examScreen"
        );


    if (startScreen) {

        startScreen.classList.add(
            "hidden"
        );

    }


    if (examScreen) {

        examScreen.classList.remove(
            "hidden"
        );

    }


    /*
       Mock name
    */

    const mockName =
        document.getElementById(
            "currentMockName"
        );


    if (mockName) {

        mockName.textContent =

            currentMock.title ||

            "Hard Mock " +

            String(currentMockNumber)
                .padStart(2, "0");

    }


    /*
       Create palette
    */

    createPalette();


    /*
       Render first question
    */

    renderQuestion();


    /*
       Start timer
    */

    startTimer();

}


/* =========================================================
   VALIDATE MOCK
========================================================= */

function validateMockStructure() {

    if (!currentMock) {

        return false;

    }


    for (
        let section of sectionOrder
    ) {

        if (

            !Array.isArray(
                currentMock[section]
            )

        ) {

            return false;

        }

    }


    return true;

}


/* =========================================================
   TIMER
========================================================= */

function startTimer() {

    clearInterval(
        timerInterval
    );


    updateTimerDisplay();


    timerInterval =
        setInterval(
            function () {

                if (
                    testSubmitted
                ) {

                    clearInterval(
                        timerInterval
                    );

                    return;

                }


                timeRemaining--;


                if (
                    timeRemaining < 0
                ) {

                    timeRemaining =
                        0;

                }


                updateTimerDisplay();


                if (
                    timeRemaining <= 0
                ) {

                    clearInterval(
                        timerInterval
                    );

                    autoSubmitTest();

                }

            },
            1000
        );

}


/* =========================================================
   TIMER DISPLAY
========================================================= */

function updateTimerDisplay() {

    const timer =
        document.getElementById(
            "timer"
        );


    if (!timer) return;


    const hours =
        Math.floor(
            timeRemaining / 3600
        );


    const minutes =
        Math.floor(
            (timeRemaining % 3600) /
            60
        );


    const seconds =
        timeRemaining % 60;


    if (hours > 0) {

        timer.textContent =

            String(hours)
                .padStart(2, "0") +

            ":" +

            String(minutes)
                .padStart(2, "0") +

            ":" +

            String(seconds)
                .padStart(2, "0");

    } else {

        timer.textContent =

            String(minutes)
                .padStart(2, "0") +

            ":" +

            String(seconds)
                .padStart(2, "0");

    }


    /*
       Warning state
    */

    if (
        timeRemaining <= 300
    ) {

        timer.style.color =
            "#d83a3a";

    }

    else if (
        timeRemaining <= 600
    ) {

        timer.style.color =
            "#a56a00";

    }

    else {

        timer.style.color =
            "";

    }

}


/* =========================================================
   GET SECTION QUESTIONS
========================================================= */

function getSectionQuestions() {

    if (!currentMock) {

        return [];

    }


    const questions =
        currentMock[
            currentSection
        ];


    if (
        !Array.isArray(
            questions
        )
    ) {

        return [];

    }


    return questions;

}


/* =========================================================
   GET CURRENT QUESTION
========================================================= */

function getCurrentQuestion() {

    const questions =
        getSectionQuestions();


    return questions[
        currentQuestionIndex
    ];

}


/* =========================================================
   RENDER QUESTION
========================================================= */

function renderQuestion() {

    const question =
        getCurrentQuestion();


    if (!question) {

        console.warn(

            "Question not found:",

            currentSection,

            currentQuestionIndex

        );

        return;

    }


    /*
       Question number
    */

    const number =
        document.getElementById(
            "questionNumber"
        );


    if (number) {

        number.textContent =
            currentQuestionIndex + 1;

    }


    /*
       Total
    */

    const total =
        document.querySelector(
            ".question-total"
        );


    if (total) {

        total.textContent =

            "/ " +

            getSectionQuestions()
                .length;

    }


    /*
       Question text
    */

    const questionText =
        document.getElementById(
            "questionText"
        );


    if (questionText) {

        questionText.innerHTML =
            getQuestionText(
                question,
                currentSection
            );

    }


    /*
       Options
    */

    renderOptions(
        question,
        currentSection
    );


    /*
       Review
    */

    updateReviewButton();


    /*
       Palette
    */

    updatePalette();


    /*
       Progress
    */

    updateProgress();


    /*
       Section tabs
    */

    updateSectionTabs();

}


/* =========================================================
   GET QUESTION TEXT
========================================================= */

function getQuestionText(
    question,
    section
) {

    /*
       English always English
    */

    if (
        section === "english"
    ) {

        return escapeHTML(

            question.questionEnglish ||

            question.question ||

            ""

        );

    }


    /*
       Hindi
    */

    if (
        selectedLanguage === "hindi"
    ) {

        if (
            question.questionHindi
        ) {

            return (

                escapeHTML(

                    question.questionEnglish ||

                    question.question ||

                    ""

                )

                +

                "<br><br>"

                +

                escapeHTML(

                    question.questionHindi

                )

            );

        }

    }


    /*
       English
    */

    return escapeHTML(

        question.questionEnglish ||

        question.question ||

        ""

    );

}


/* =========================================================
   GET OPTION TEXT
========================================================= */

function getOptionText(
    option,
    section
) {

    if (

        typeof option === "object" &&

        option !== null

    ) {

        if (
            section === "english"
        ) {

            return (

                option.english ||

                option.text ||

                ""

            );

        }


        if (
            selectedLanguage ===
            "hindi"
        ) {

            const english =
                option.english || "";


            const hindi =
                option.hindi || "";


            if (
                english &&
                hindi
            ) {

                return (

                    english +

                    "<br>" +

                    hindi

                );

            }


            return (
                hindi ||
                english
            );

        }


        return (

            option.english ||

            option.text ||

            ""

        );

    }


    return option;

}


/* =========================================================
   RENDER OPTIONS
========================================================= */

function renderOptions(
    question,
    section
) {

    const container =
        document.getElementById(
            "optionsContainer"
        );


    if (!container) return;


    container.innerHTML =
        "";


    const options =
        question.options || [];


    const selected =
        userAnswers[section][
            currentQuestionIndex
        ];


    options.forEach(
        function (
            option,
            index
        ) {

            const optionElement =
                document.createElement(
                    "div"
                );


            optionElement.className =
                "option";


            if (
                selected === index
            ) {

                optionElement.classList.add(
                    "selected"
                );

            }


            const optionText =
                getOptionText(
                    option,
                    section
                );


            optionElement.innerHTML = `

                <div class="option-letter">

                    ${String.fromCharCode(
                        65 + index
                    )}

                </div>

                <div class="option-text">

                    ${escapeHTML(
                        String(optionText)
                    ).replace(
                        /&lt;br&gt;/g,
                        "<br>"
                    )}

                </div>

            `;


            optionElement.addEventListener(
                "click",
                function () {

                    selectAnswer(
                        index
                    );

                }
            );


            container.appendChild(
                optionElement
            );

        }
    );

}


/* =========================================================
   SELECT ANSWER
========================================================= */

function selectAnswer(
    optionIndex
) {

    if (
        testSubmitted
    ) {

        return;

    }


    userAnswers[
        currentSection
    ][
        currentQuestionIndex
    ] =
        optionIndex;


    /*
       Answering removes review
    */

    if (

        markedQuestions[
            currentSection
        ][
            currentQuestionIndex
        ]

    ) {

        delete markedQuestions[
            currentSection
        ][
            currentQuestionIndex
        ];

    }


    renderOptions(
        getCurrentQuestion(),
        currentSection
    );


    updatePalette();

    updateProgress();

}


/* =========================================================
   CLEAR ANSWER
========================================================= */

function clearAnswer() {

    delete userAnswers[
        currentSection
    ][
        currentQuestionIndex
    ];


    renderOptions(
        getCurrentQuestion(),
        currentSection
    );


    updatePalette();

    updateProgress();

}


/* =========================================================
   MARK FOR REVIEW
========================================================= */

function toggleReview() {

    const current =
        markedQuestions[
            currentSection
        ][
            currentQuestionIndex
        ];


    if (current) {

        delete markedQuestions[
            currentSection
        ][
            currentQuestionIndex
        ];

    } else {

        markedQuestions[
            currentSection
        ][
            currentQuestionIndex
        ] =
            true;

    }


    updateReviewButton();

    updatePalette();

}


/* =========================================================
   REVIEW BUTTON
========================================================= */

function updateReviewButton() {

    const button =
        document.getElementById(
            "markReviewBtn"
        );


    if (!button) return;


    const isMarked =

        !!markedQuestions[
            currentSection
        ][
            currentQuestionIndex
        ];


    if (isMarked) {

        button.textContent =
            "🔖 Marked for Review";

        button.style.color =
            "#7546c9";

        button.style.borderColor =
            "#7546c9";

    }

    else {

        button.textContent =
            "🔖 Mark for Review";

        button.style.color =
            "";

        button.style.borderColor =
            "";

    }

}


/* =========================================================
   SAVE & NEXT
========================================================= */

function saveAndNext() {

    const questions =
        getSectionQuestions();


    /*
       Next question
    */

    if (

        currentQuestionIndex <

        questions.length - 1

    ) {

        currentQuestionIndex++;

        renderQuestion();

        return;

    }


    /*
       Next section
    */

    const nextSection =
        getNextSection();


    if (nextSection) {

        currentSection =
            nextSection;

        currentQuestionIndex =
            0;

        renderQuestion();

        return;

    }


    /*
       End of test
    */

    confirmSubmit();

}


/* =========================================================
   PREVIOUS QUESTION
========================================================= */

function previousQuestion() {

    if (
        currentQuestionIndex > 0
    ) {

        currentQuestionIndex--;

        renderQuestion();

        return;

    }


    /*
       Previous section
    */

    const previousSection =
        getPreviousSection();


    if (previousSection) {

        currentSection =
            previousSection;


        currentQuestionIndex =

            getSectionQuestions()
                .length - 1;


        renderQuestion();

    }

}


/* =========================================================
   SECTION SWITCH
========================================================= */

function switchSection(
    section
) {

    if (
        !sectionConfig[section]
    ) {

        return;

    }


    currentSection =
        section;

    currentQuestionIndex =
        0;


    renderQuestion();

}


/* =========================================================
   NEXT SECTION
========================================================= */

function getNextSection() {

    const index =
        sectionOrder.indexOf(
            currentSection
        );


    if (

        index >= 0 &&

        index <
        sectionOrder.length - 1

    ) {

        return sectionOrder[
            index + 1
        ];

    }


    return null;

}


/* =========================================================
   PREVIOUS SECTION
========================================================= */

function getPreviousSection() {

    const index =
        sectionOrder.indexOf(
            currentSection
        );


    if (
        index > 0
    ) {

        return sectionOrder[
            index - 1
        ];

    }


    return null;

}


/* =========================================================
   UPDATE SECTION TABS
========================================================= */

function updateSectionTabs() {

    document
        .querySelectorAll(
            ".section-tab"
        )
        .forEach(
            function (tab) {

                tab.classList.remove(
                    "active"
                );


                if (

                    tab.dataset.section ===
                    currentSection

                ) {

                    tab.classList.add(
                        "active"
                    );

                }

            }
        );

}


/* =========================================================
   CREATE QUESTION PALETTE
========================================================= */

function createPalette() {

    const palette =
        document.getElementById(
            "questionPalette"
        );


    if (!palette) return;


    palette.innerHTML =
        "";


    let globalNumber =
        1;


    sectionOrder.forEach(
        function (section) {

            const questions =

                currentMock &&

                currentMock[section];


            if (
                !Array.isArray(
                    questions
                )
            ) {

                return;

            }


            questions.forEach(
                function (
                    question,
                    index
                ) {

                    const button =
                        document.createElement(
                            "button"
                        );


                    button.type =
                        "button";


                    button.className =
                        "palette-number";


                    button.textContent =
                        globalNumber;


                    button.dataset.section =
                        section;


                    button.dataset.index =
                        index;


                    button.addEventListener(
                        "click",
                        function () {

                            if (
                                !testStarted ||
                                testSubmitted
                            ) {

                                return;

                            }


                            currentSection =
                                section;


                            currentQuestionIndex =
                                index;


                            renderQuestion();

                        }
                    );


                    palette.appendChild(
                        button
                    );


                    globalNumber++;

                }
            );

        }
    );


    updatePalette();

}


/* =========================================================
   UPDATE PALETTE
========================================================= */

function updatePalette() {

    const buttons =
        document.querySelectorAll(
            ".palette-number"
        );


    buttons.forEach(
        function (button) {

            const section =
                button.dataset.section;


            const index =
                Number(
                    button.dataset.index
                );


            button.classList.remove(

                "answered",

                "review",

                "current"

            );


            /*
               Current
            */

            if (

                section ===
                currentSection &&

                index ===
                currentQuestionIndex

            ) {

                button.classList.add(
                    "current"
                );

            }


            /*
               Answered
            */

            if (

                userAnswers[
                    section
                ] &&

                userAnswers[
                    section
                ][index] !== undefined

            ) {

                button.classList.add(
                    "answered"
                );

            }


            /*
               Review priority
            */

            if (

                markedQuestions[
                    section
                ] &&

                markedQuestions[
                    section
                ][index]

            ) {

                button.classList.remove(
                    "answered"
                );

                button.classList.add(
                    "review"
                );

            }

        }
    );


    /*
       Palette count
    */

    const paletteCount =
        document.getElementById(
            "paletteCount"
        );


    if (paletteCount) {

        paletteCount.textContent =

            getGlobalQuestionNumber() +

            " / " +

            getTotalQuestionCount();

    }

}


/* =========================================================
   GET TOTAL QUESTION COUNT
========================================================= */

function getTotalQuestionCount() {

    let total =
        0;


    sectionOrder.forEach(
        function (section) {

            if (

                currentMock &&

                Array.isArray(
                    currentMock[section]
                )

            ) {

                total +=
                    currentMock[
                        section
                    ].length;

            }

        }
    );


    return total;

}


/* =========================================================
   GLOBAL QUESTION NUMBER
========================================================= */

function getGlobalQuestionNumber() {

    let number =
        0;


    for (
        let section of sectionOrder
    ) {

        if (
            section ===
            currentSection
        ) {

            number +=

                currentQuestionIndex +

                1;

            break;

        }


        if (

            currentMock &&

            Array.isArray(
                currentMock[section]
            )

        ) {

            number +=

                currentMock[
                    section
                ].length;

        }

    }


    return number;

}


/* =========================================================
   TEST PROGRESS
========================================================= */

function updateProgress() {

    let answered =
        0;

    let total =
        0;


    sectionOrder.forEach(
        function (section) {

            const questions =

                currentMock &&

                currentMock[section];


            if (
                !Array.isArray(
                    questions
                )
            ) {

                return;

            }


            total +=
                questions.length;


            Object.keys(

                userAnswers[
                    section
                ]

            ).forEach(
                function () {

                    answered++;

                }
            );

        }
    );


    const percentage =

        total > 0

            ? Math.round(
                (
                    answered /
                    total
                ) * 100
            )

            : 0;


    const progressBar =
        document.getElementById(
            "progressBar"
        );


    const progressPercent =
        document.getElementById(
            "progressPercent"
        );


    if (progressBar) {

        progressBar.style.width =
            percentage + "%";

    }


    if (progressPercent) {

        progressPercent.textContent =
            percentage + "%";

    }

}


/* =========================================================
   SUBMIT CONFIRMATION
========================================================= */

function confirmSubmit() {

    if (
        testSubmitted
    ) {

        return;

    }


    const modal =
        document.getElementById(
            "submitModal"
        );


    if (modal) {

        modal.classList.remove(
            "hidden"
        );

    }

}


/* =========================================================
   CLOSE SUBMIT MODAL
========================================================= */

function closeSubmitModal() {

    const modal =
        document.getElementById(
            "submitModal"
        );


    if (modal) {

        modal.classList.add(
            "hidden"
        );

    }

}


/* =========================================================
   AUTO SUBMIT
========================================================= */

function autoSubmitTest() {

    if (
        testSubmitted
    ) {

        return;

    }


    alert(
        "Time is over. Your test will be submitted automatically."
    );


    submitTest();

}


/* =========================================================
   SUBMIT TEST
========================================================= */

function submitTest() {

    if (
        testSubmitted
    ) {

        return;

    }


    testSubmitted =
        true;


    clearInterval(
        timerInterval
    );


    testEndTime =
        Date.now();


    closeSubmitModal();


    /*
       Calculate result
    */

    const result =
        calculateFullResult();


    /*
       Save result
    */

    saveResult(
        result
    );


    /*
       Hide exam
    */

    const examScreen =
        document.getElementById(
            "examScreen"
        );


    if (examScreen) {

        examScreen.classList.add(
            "hidden"
        );

    }


    /*
       Show result
    */

    const resultScreen =
        document.getElementById(
            "resultScreen"
        );


    if (resultScreen) {

        resultScreen.classList.remove(
            "hidden"
        );

    }


    /*
       Render
    */

    renderResult(
        result
    );

}


/* =========================================================
   CALCULATE FULL RESULT
========================================================= */

function calculateFullResult() {

    let correct =
        0;

    let wrong =
        0;

    let skipped =
        0;


    const sectionResults =
        {};


    sectionOrder.forEach(
        function (section) {

            const questions =

                currentMock &&

                currentMock[section];


            if (

                !Array.isArray(
                    questions
                )

            ) {

                sectionResults[
                    section
                ] = {

                    total: 0,

                    correct: 0,

                    wrong: 0,

                    skipped: 0,

                    marks: 0

                };

                return;

            }


            let sectionCorrect =
                0;

            let sectionWrong =
                0;

            let sectionSkipped =
                0;


            questions.forEach(
                function (
                    question,
                    index
                ) {

                    const selected =

                        userAnswers[
                            section
                        ][index];


                    /*
                       Skipped
                    */

                    if (
                        selected ===
                        undefined
                    ) {

                        skipped++;

                        sectionSkipped++;

                        return;

                    }


                    const answer =
                        getCorrectAnswerIndex(
                            question
                        );


                    /*
                       Correct
                    */

                    if (
                        selected ===
                        answer
                    ) {

                        correct++;

                        sectionCorrect++;

                    }

                    /*
                       Wrong
                    */

                    else {

                        wrong++;

                        sectionWrong++;

                    }

                }
            );


            const sectionMarks =

                (
                    sectionCorrect * 2
                )

                -

                (
                    sectionWrong * 0.5
                );


            sectionResults[
                section
            ] = {

                total:
                    questions.length,

                correct:
                    sectionCorrect,

                wrong:
                    sectionWrong,

                skipped:
                    sectionSkipped,

                marks:
                    sectionMarks

            };

        }
    );


    const marks =

        (
            correct * 2
        )

        -

        (
            wrong * 0.5
        );


    const maximumMarks =
        getTotalQuestionCount() * 2;


    const percentage =

        maximumMarks > 0

            ? (
                marks /
                maximumMarks
            ) * 100

            : 0;


    /*
       Time taken
    */

    const timeTaken =

        totalTime -
        timeRemaining;


    return {

        totalQuestions:
            getTotalQuestionCount(),

        correct:
            correct,

        wrong:
            wrong,

        skipped:
            skipped,

        marks:
            marks,

        maximumMarks:
            maximumMarks,

        percentage:
            percentage,

        timeTaken:
            timeTaken,

        sectionResults:
            sectionResults

    };

}


/* =========================================================
   GET CORRECT ANSWER
========================================================= */

function getCorrectAnswerIndex(
    question
) {

    /*
       Numeric answer
       0 = A
       1 = B
       2 = C
       3 = D
    */

    if (

        typeof question.answer ===
        "number"

    ) {

        return question.answer;

    }


    /*
       answerIndex
    */

    if (

        typeof question.answerIndex ===
        "number"

    ) {

        return question.answerIndex;

    }


    /*
       A/B/C/D
    */

    if (

        typeof question.answer ===
        "string"

    ) {

        const answer =

            question.answer
                .trim()
                .toUpperCase();


        const index =

            [
                "A",
                "B",
                "C",
                "D"
            ].indexOf(
                answer
            );


        if (
            index !== -1
        ) {

            return index;

        }

    }


    return -1;

}


/* =========================================================
   RENDER RESULT
========================================================= */

function renderResult(
    result
) {

    const score =
        document.getElementById(
            "finalScore"
        );


    const percentage =
        document.getElementById(
            "finalPercentage"
        );


    const correct =
        document.getElementById(
            "correctCount"
        );


    const wrong =
        document.getElementById(
            "wrongCount"
        );


    const skipped =
        document.getElementById(
            "skippedCount"
        );


    const time =
        document.getElementById(
            "timeTaken"
        );


    if (score) {

        score.textContent =

            Number(
                result.marks
            ).toFixed(2);

    }


    if (percentage) {

        percentage.textContent =

            Number(
                result.percentage
            ).toFixed(2) +

            "%";

    }


    if (correct) {

        correct.textContent =
            result.correct;

    }


    if (wrong) {

        wrong.textContent =
            result.wrong;

    }


    if (skipped) {

        skipped.textContent =
            result.skipped;

    }


    if (time) {

        time.textContent =

            formatTime(
                result.timeTaken
            );

    }


    renderSectionAnalysis(
        result.sectionResults
    );

}


/* =========================================================
   SECTION ANALYSIS
========================================================= */

function renderSectionAnalysis(
    sectionResults
) {

    const container =
        document.getElementById(
            "sectionAnalysis"
        );


    if (!container) return;


    container.innerHTML =
        "";


    sectionOrder.forEach(
        function (section) {

            const data =
                sectionResults[
                    section
                ];


            if (!data) return;


            const accuracy =

                data.total > 0

                    ? (

                        data.correct /
                        data.total

                    ) * 100

                    : 0;


            const item =
                document.createElement(
                    "div"
                );


            item.className =
                "analysis-item";


            item.innerHTML = `

                <h3>

                    ${escapeHTML(
                        sectionConfig[
                            section
                        ].title
                    )}

                </h3>


                <div class="analysis-numbers">

                    <span>
                        Correct: ${data.correct}
                    </span>

                    <span>
                        Wrong: ${data.wrong}
                    </span>

                    <span>
                        Skipped: ${data.skipped}
                    </span>

                    <span>
                        Score:
                        ${data.marks.toFixed(2)}
                    </span>

                </div>


                <div class="analysis-bar">

                    <div
                        class="analysis-bar-fill"
                        style="width:${accuracy}%">
                    </div>

                </div>

            `;


            container.appendChild(
                item
            );

        }
    );

}


/* =========================================================
   SAVE RESULT
========================================================= */

function saveResult(
    result
) {

    const resultData = {

        mockNumber:
            currentMockNumber,

        mockTitle:
            currentMock &&
            currentMock.title
                ? currentMock.title
                : "",

        language:
            selectedLanguage,

        result:
            result,

        answers:
            userAnswers,

        marked:
            markedQuestions,

        submittedAt:
            new Date().toISOString()

    };


    localStorage.setItem(

        "cgl_mock_result_" +

        currentMockNumber,

        JSON.stringify(
            resultData
        )

    );

}


/* =========================================================
   SHOW EXPLANATIONS
========================================================= */

function showExplanations() {

    const resultScreen =
        document.getElementById(
            "resultScreen"
        );


    const explanationScreen =
        document.getElementById(
            "explanationScreen"
        );


    if (resultScreen) {

        resultScreen.classList.add(
            "hidden"
        );

    }


    if (explanationScreen) {

        explanationScreen.classList.remove(
            "hidden"
        );

    }


    renderExplanations(
        "all"
    );

}


/* =========================================================
   BACK TO RESULT
========================================================= */

function backToResult() {

    const resultScreen =
        document.getElementById(
            "resultScreen"
        );


    const explanationScreen =
        document.getElementById(
            "explanationScreen"
        );


    if (explanationScreen) {

        explanationScreen.classList.add(
            "hidden"
        );

    }


    if (resultScreen) {

        resultScreen.classList.remove(
            "hidden"
        );

    }

}


/* =========================================================
   RENDER EXPLANATIONS
========================================================= */

function renderExplanations(
    filter = "all"
) {

    const container =
        document.getElementById(
            "explanationsContainer"
        );


    if (!container) return;


    container.innerHTML =
        "";


    let questionNumber =
        1;


    sectionOrder.forEach(
        function (section) {

            const questions =

                currentMock &&

                currentMock[section];


            if (

                !Array.isArray(
                    questions
                )

            ) {

                return;

            }


            questions.forEach(
                function (
                    question,
                    index
                ) {

                    const selected =

                        userAnswers[
                            section
                        ][index];


                    const correct =

                        getCorrectAnswerIndex(
                            question
                        );


                    let status;


                    /*
                       Status
                    */

                    if (
                        selected ===
                        undefined
                    ) {

                        status =
                            "skipped";

                    }

                    else if (
                        selected ===
                        correct
                    ) {

                        status =
                            "correct";

                    }

                    else {

                        status =
                            "wrong";

                    }


                    /*
                       Filter
                    */

                    if (

                        filter !== "all" &&

                        filter !== status

                    ) {

                        questionNumber++;

                        return;

                    }


                    const card =

                        createExplanationCard(

                            question,

                            questionNumber,

                            selected,

                            correct,

                            status,

                            section

                        );


                    container.appendChild(
                        card
                    );


                    questionNumber++;

                }
            );

        }
    );


    /*
       Empty filter
    */

    if (
        container.children.length === 0
    ) {

        container.innerHTML = `

            <div class="explanation-card">

                <h3>
                    No questions found
                </h3>

                <p>
                    There are no questions
                    in this category.
                </p>

            </div>

        `;

    }

}


/* =========================================================
   CREATE EXPLANATION CARD
========================================================= */

function createExplanationCard(

    question,

    questionNumber,

    selected,

    correct,

    status,

    section

) {

    const card =
        document.createElement(
            "div"
        );


    card.className =
        "explanation-card";


    /*
       Status text
    */

    let statusText =
        "";


    if (
        status === "correct"
    ) {

        statusText =
            "✓ Correct";

    }

    else if (
        status === "wrong"
    ) {

        statusText =
            "✕ Wrong";

    }

    else {

        statusText =
            "— Not Attempted";

    }


    /*
       Question
    */

    const questionHTML =

        getQuestionTextForExplanation(

            question,

            section

        );


    /*
       Options
    */

    let optionsHTML =
        "";


    const options =
        question.options || [];


    options.forEach(
        function (
            option,
            index
        ) {

            let text =
                getOptionText(
                    option,
                    section
                );


            let className =
                "explanation-option";


            /*
               Correct
            */

            if (
                index === correct
            ) {

                className +=
                    " correct-answer";

            }


            /*
               User wrong
            */

            if (

                selected === index &&

                selected !== correct

            ) {

                className +=
                    " user-wrong";

            }


            const safeText =

                escapeHTML(
                    String(text)
                ).replace(
                    /&lt;br&gt;/g,
                    "<br>"
                );


            optionsHTML += `

                <div
                    class="${className}"
                >

                    <strong>

                        ${String.fromCharCode(
                            65 + index
                        )}.

                    </strong>

                    ${safeText}

                </div>

            `;

        }
    );


    /*
       Explanation
    */

    const explanation =

        getExplanationText(

            question,

            section

        );


    /*
       Final card
    */

    card.innerHTML = `

        <div
            class="explanation-question-head"
        >

            <span
                class="explanation-q-number"
            >

                Q${questionNumber}

            </span>


            <span
                class="answer-status ${status}"
            >

                ${statusText}

            </span>

        </div>


        <div
            class="explanation-question"
        >

            ${questionHTML}

        </div>


        <div
            class="explanation-options"
        >

            ${optionsHTML}

        </div>


        <div
            class="solution-box"
        >

            <strong>
                📖 Explanation
            </strong>


            <p>
                ${explanation}
            </p>

        </div>

    `;


    return card;

}


/* =========================================================
   QUESTION TEXT FOR EXPLANATION
========================================================= */

function getQuestionTextForExplanation(

    question,

    section

) {

    /*
       English
    */

    if (
        section === "english"
    ) {

        return escapeHTML(

            question.questionEnglish ||

            question.question ||

            ""

        );

    }


    /*
       Hindi
    */

    if (

        selectedLanguage === "hindi" &&

        question.questionHindi

    ) {

        return (

            escapeHTML(

                question.questionEnglish ||

                question.question ||

                ""

            )

            +

            "<br><br>"

            +

            escapeHTML(

                question.questionHindi

            )

        );

    }


    /*
       English
    */

    return escapeHTML(

        question.questionEnglish ||

        question.question ||

        ""

    );

}


/* =========================================================
   GET EXPLANATION TEXT
========================================================= */

function getExplanationText(

    question,

    section

) {

    /*
       English section
       always English
    */

    if (
        section === "english"
    ) {

        return escapeHTML(

            question.explanationEnglish ||

            question.explanation ||

            "Detailed explanation will be provided."

        ).replace(
            /&lt;br&gt;/g,
            "<br>"
        );

    }


    /*
       Hindi mode
    */

    if (

        selectedLanguage === "hindi" &&

        question.explanationHindi

    ) {

        return (

            escapeHTML(

                question.explanationEnglish ||

                question.explanation ||

                ""

            )

            +

            "<br><br>"

            +

            escapeHTML(

                question.explanationHindi

            )

        );

    }


    /*
       English mode
    */

    return escapeHTML(

        question.explanationEnglish ||

        question.explanation ||

        "Detailed explanation will be provided."

    );

}


/* =========================================================
   FILTER EXPLANATIONS
========================================================= */

function filterExplanations(
    filter
) {

    /*
       Update active buttons
    */

    document
        .querySelectorAll(
            ".filter-btn"
        )
        .forEach(
            function (button) {

                button.classList.remove(
                    "active"
                );

            }
        );


    /*
       Match filter
    */

    document
        .querySelectorAll(
            ".filter-btn"
        )
        .forEach(
            function (button) {

                const text =

                    button.textContent
                        .toLowerCase();


                if (

                    filter === "all" &&

                    text.includes("all")

                ) {

                    button.classList.add(
                        "active"
                    );

                }


                if (

                    filter === "wrong" &&

                    text.includes("wrong")

                ) {

                    button.classList.add(
                        "active"
                    );

                }


                if (

                    filter === "correct" &&

                    text.includes("correct")

                ) {

                    button.classList.add(
                        "active"
                    );

                }


                if (

                    filter === "skipped" &&

                    text.includes(
                        "attempted"
                    )

                ) {

                    button.classList.add(
                        "active"
                    );

                }

            }
        );


    renderExplanations(
        filter
    );

}


/* =========================================================
   RETRY TEST
========================================================= */

function retryTest() {

    /*
       Clear active state
    */

    testStarted =
        false;

    testSubmitted =
        false;


    clearInterval(
        timerInterval
    );


    /*
       Same mock
    */

    const url =

        window.location.pathname +

        "?mock=" +

        currentMockNumber;


    window.location.href =
        url;

}


/* =========================================================
   FORMAT TIME
========================================================= */

function formatTime(
    seconds
) {

    seconds =
        Math.max(
            0,
            Number(seconds) || 0
        );


    const hours =
        Math.floor(
            seconds / 3600
        );


    const minutes =
        Math.floor(
            (seconds % 3600) /
            60
        );


    const remainingSeconds =
        seconds % 60;


    if (
        hours > 0
    ) {

        return (

            String(hours)
                .padStart(2, "0")

            +

            ":"

            +

            String(minutes)
                .padStart(2, "0")

            +

            ":"

            +

            String(
                remainingSeconds
            )
                .padStart(2, "0")

        );

    }


    return (

        String(minutes)
            .padStart(2, "0")

        +

        ":"

        +

        String(
            remainingSeconds
        )
            .padStart(2, "0")

    );

}


/* =========================================================
   ESCAPE HTML
========================================================= */

function escapeHTML(
    value
) {

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
   KEYBOARD SHORTCUTS
========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (

            !testStarted ||

            testSubmitted

        ) {

            return;

        }


        /*
           Arrow Right
        */

        if (
            event.key ===
            "ArrowRight"
        ) {

            saveAndNext();

        }


        /*
           Arrow Left
        */

        if (
            event.key ===
            "ArrowLeft"
        ) {

            previousQuestion();

        }

    }
);


/* =========================================================
   PREVENT ACCIDENTAL REFRESH
========================================================= */

window.addEventListener(
    "beforeunload",
    function (event) {

        if (

            testStarted &&

            !testSubmitted

        ) {

            event.preventDefault();

            event.returnValue =
                "";

        }

    }
);


/* =========================================================
   EXPOSE FUNCTIONS GLOBALLY
========================================================= */

window.selectMock =
    selectMock;

window.selectLanguage =
    selectLanguage;

window.startTest =
    startTest;

window.switchSection =
    switchSection;

window.toggleReview =
    toggleReview;

window.clearAnswer =
    clearAnswer;

window.saveAndNext =
    saveAndNext;

window.previousQuestion =
    previousQuestion;

window.confirmSubmit =
    confirmSubmit;

window.closeSubmitModal =
    closeSubmitModal;

window.submitTest =
    submitTest;

window.showExplanations =
    showExplanations;

window.backToResult =
    backToResult;

window.filterExplanations =
    filterExplanations;

window.retryTest =
    retryTest;