// =====================================================
// SSC MOCK TEST SYSTEM
// CGL TIER 1 + TIER 2
// CPO TIER 1 + TIER 2
// CHSL TIER 1 + TIER 2
// MTS
// GD
// SELECTION POST
// STENOGRAPHER
// EXAM-CENTRE STYLE MOCK INTERFACE
// =====================================================

document.addEventListener("DOMContentLoaded", function () {

    // =================================================
    // DATABASE CHECK
    // =================================================

    console.log("====================================");
    console.log("SSC MOCK SYSTEM STARTING...");
    console.log("====================================");

    console.log("CGL Tier 1:", window.cglTier1Mocks);
    console.log("CGL Tier 2:", window.cglTier2Mocks);

    console.log("CPO Tier 1:", window.cpoTier1Mocks);
    console.log("CPO Tier 2:", window.cpoTier2Mocks);

    console.log("CHSL Tier 1:", window.chslTier1Mocks);
    console.log("CHSL Tier 2:", window.chslTier2Mocks);

    console.log("MTS:", window.mtsMocks);
    console.log("GD:", window.gdMocks);

    console.log(
        "Selection Post:",
        window.selectionPostMocks
    );

    console.log(
        "Stenographer:",
        window.stenoMocks
    );

    console.log("====================================");


    // =================================================
    // HOME PAGE ELEMENTS
    // =================================================

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


    // =================================================
    // DATABASE SELECTOR
    // =================================================

    function getDatabase(exam) {

        switch (exam) {

            // =============================================
            // CGL
            // =============================================

            case "cgl-tier1":
            case "cgl-paper1":

                return window.cglTier1Mocks || null;


            case "cgl-tier2":
            case "cgl-paper2":

                return window.cglTier2Mocks || null;


            // =============================================
            // CPO
            // =============================================

            case "cpo-tier1":
            case "cpo-paper1":

                return window.cpoTier1Mocks || null;


            case "cpo-tier2":
            case "cpo-paper2":

                return window.cpoTier2Mocks || null;


            // =============================================
            // CHSL
            // =============================================

            case "chsl-tier1":
            case "chsl-paper1":

                return window.chslTier1Mocks || null;


            case "chsl-tier2":
            case "chsl-paper2":

                return window.chslTier2Mocks || null;


            // =============================================
            // MTS
            // =============================================

            case "mts":
            case "mts-tier1":
            case "mts-paper1":

                return window.mtsMocks || null;


            // =============================================
            // GD
            // =============================================

            case "gd":
            case "gd-tier1":
            case "gd-paper1":

                return window.gdMocks || null;


            // =============================================
            // SELECTION POST
            // =============================================

            case "selectionpost":
            case "selection-post":
            case "selectionpost-tier1":
            case "selectionpost-paper1":

                return window.selectionPostMocks || null;


            // =============================================
            // STENOGRAPHER
            // =============================================

            case "steno":
            case "stenographer":
            case "steno-tier1":
            case "steno-paper1":

                return window.stenoMocks || null;


            // =============================================
            // NOT FOUND
            // =============================================

            default:

                console.error(
                    "Unknown exam:",
                    exam
                );

                return null;
        }
    }


    // =================================================
    // EXAM NAME
    // =================================================

    function getExamName(exam) {

        switch (exam) {

            // CGL

            case "cgl-tier1":
            case "cgl-paper1":

                return "SSC CGL Tier 1";


            case "cgl-tier2":
            case "cgl-paper2":

                return "SSC CGL Tier 2";


            // CPO

            case "cpo-tier1":
            case "cpo-paper1":

                return "SSC CPO Tier 1";


            case "cpo-tier2":
            case "cpo-paper2":

                return "SSC CPO Tier 2";


            // CHSL

            case "chsl-tier1":
            case "chsl-paper1":

                return "SSC CHSL Tier 1";


            case "chsl-tier2":
            case "chsl-paper2":

                return "SSC CHSL Tier 2";


            // MTS

            case "mts":
            case "mts-tier1":
            case "mts-paper1":

                return "SSC MTS";


            // GD

            case "gd":
            case "gd-tier1":
            case "gd-paper1":

                return "SSC GD";


            // Selection Post

            case "selectionpost":
            case "selection-post":
            case "selectionpost-tier1":
            case "selectionpost-paper1":

                return "SSC Selection Post";


            // Stenographer

            case "steno":
            case "stenographer":
            case "steno-tier1":
            case "steno-paper1":

                return "SSC Stenographer";


            default:

                return "SSC Examination";
        }
    }


    // =================================================
    // PAGINATION VARIABLES
    // =================================================

    let currentTestPage = 1;

    const testsPerPage = 10;

    let currentDatabase = null;

    let currentExam = null;

    let currentExamTitle = null;


    // =================================================
    // SHOW TEST LIST
    // =================================================

    function showTestList(exam, title) {

        const database =
            getDatabase(exam);


        if (!database) {

            alert(
                "Database load nahi hua.\n\n" +
                "Exam: " +
                exam +
                "\n\n" +
                "Console mein database status check karo."
            );

            console.error(
                "Database missing:",
                exam
            );

            return;
        }


        currentDatabase = database;

        currentExam = exam;

        currentExamTitle =
            title || getExamName(exam);

        currentTestPage = 1;


        if (testGrid) {

            testGrid.style.display = "none";

        }


        if (testListSection) {

            testListSection.style.display =
                "block";

        }


        if (selectedExam) {

            selectedExam.textContent =
                currentExamTitle;

        }


        renderTestPage();


        if (testListSection) {

            testListSection.scrollIntoView({
                behavior: "smooth"
            });

        }
    }


    // =================================================
    // RENDER TEST PAGE
    // =================================================

    function renderTestPage() {

        if (!currentDatabase) {
            return;
        }


        if (!testListContainer) {
            return;
        }


        testListContainer.innerHTML = "";


        const mockNumbers =
            Object.keys(currentDatabase)
                .sort(function (a, b) {

                    return Number(a) - Number(b);

                });


        const totalTests =
            mockNumbers.length;


        if (testCount) {

            testCount.textContent =
                totalTests;

        }


        const totalPages =
            Math.ceil(
                totalTests / testsPerPage
            );


        if (currentTestPage < 1) {

            currentTestPage = 1;

        }


        if (
            currentTestPage > totalPages &&
            totalPages > 0
        ) {

            currentTestPage =
                totalPages;

        }


        const startIndex =
            (currentTestPage - 1) *
            testsPerPage;


        const endIndex =
            startIndex +
            testsPerPage;


        const pageMocks =
            mockNumbers.slice(
                startIndex,
                endIndex
            );


        // =================================================
        // PAGE HEADER
        // =================================================

        const pageHeader =
            document.createElement("div");


        pageHeader.className =
            "mock-list-page-header";


        pageHeader.innerHTML = `

            <div>

                <div class="mock-list-badge">
                    SSC MOCK SERIES
                </div>

                <h2>
                    ${currentExamTitle || "SSC Mock Tests"}
                </h2>

                <p>
                    Select a test and start your preparation
                </p>

            </div>

            <div class="mock-total-count">

                <strong>
                    ${totalTests}
                </strong>

                <span>
                    Tests Available
                </span>

            </div>

        `;


        testListContainer.appendChild(
            pageHeader
        );


        // =================================================
        // NO TESTS
        // =================================================

        if (pageMocks.length === 0) {

            const empty =
                document.createElement("div");


            empty.className =
                "no-tests-message";


            empty.innerHTML = `

                <h3>
                    No Mock Tests Available
                </h3>

                <p>
                    Is exam ke liye abhi mock tests
                    database mein available nahi hain.
                </p>

            `;


            testListContainer.appendChild(
                empty
            );

            return;
        }


        // =================================================
        // CREATE TEST CARDS
        // =================================================

        pageMocks.forEach(
            function (mockNumber) {

                const mock =
                    currentDatabase[mockNumber];


                if (!mock) {
                    return;
                }


                const card =
                    document.createElement("div");


                card.className =
                    "dynamic-test-card";


                const questionCount =
                    Array.isArray(mock.questions)
                        ? mock.questions.length
                        : 0;


                const duration =
                    mock.duration || 60;


                card.innerHTML = `

                    <div class="dynamic-test-left">

                        <div class="dynamic-test-number">

                            TEST
                            ${mockNumber}

                        </div>

                        <div class="dynamic-test-info">

                            <h3>
                                ${
                                    mock.title ||
                                    "SSC Mock Test"
                                }
                            </h3>

                            <p>

                                <span>
                                    ${questionCount}
                                    Questions
                                </span>

                                <span class="test-divider">
                                    •
                                </span>

                                <span>
                                    ${duration}
                                    Minutes
                                </span>

                            </p>

                        </div>

                    </div>

                    <button
                        class="start-test-btn"
                        data-exam="${currentExam}"
                        data-mock="${mockNumber}"
                        type="button"
                    >

                        Start Test

                        <span>
                            →
                        </span>

                    </button>

                `;


                testListContainer.appendChild(
                    card
                );

            }
        );


        // =================================================
        // START BUTTONS
        // =================================================

        const startButtons =
            testListContainer.querySelectorAll(
                ".start-test-btn"
            );


        startButtons.forEach(
            function (button) {

                button.addEventListener(
                    "click",
                    function () {

                        startMock(
                            button.dataset.exam,
                            button.dataset.mock
                        );

                    }
                );

            }
        );


        // =================================================
        // PAGINATION
        // =================================================

        if (totalPages > 1) {

            createPagination(
                totalPages
            );

        }
    }


    // =================================================
    // PAGINATION
    // =================================================

    function createPagination(totalPages) {

        const pagination =
            document.createElement("div");


        pagination.className =
            "mock-pagination";


        // PREVIOUS

        const previousPage =
            document.createElement("button");


        previousPage.type =
            "button";


        previousPage.className =
            "pagination-btn";


        previousPage.textContent =
            "← Previous";


        previousPage.disabled =
            currentTestPage === 1;


        previousPage.addEventListener(
            "click",
            function () {

                if (currentTestPage > 1) {

                    currentTestPage--;

                    renderTestPage();

                    window.scrollTo({
                        top: 0,
                        behavior: "smooth"
                    });

                }

            }
        );


        pagination.appendChild(
            previousPage
        );


        // PAGE NUMBERS

        const maxVisiblePages = 5;


        let startPage =
            Math.max(
                1,
                currentTestPage -
                Math.floor(
                    maxVisiblePages / 2
                )
            );


        let endPage =
            Math.min(
                totalPages,
                startPage +
                maxVisiblePages -
                1
            );


        if (
            endPage -
            startPage +
            1 <
            maxVisiblePages
        ) {

            startPage =
                Math.max(
                    1,
                    endPage -
                    maxVisiblePages +
                    1
                );

        }


        for (
            let page = startPage;
            page <= endPage;
            page++
        ) {

            const pageButton =
                document.createElement(
                    "button"
                );


            pageButton.type =
                "button";


            pageButton.className =
                "pagination-number";


            pageButton.textContent =
                page;


            if (
                page === currentTestPage
            ) {

                pageButton.classList.add(
                    "active"
                );

            }


            pageButton.addEventListener(
                "click",
                function () {

                    currentTestPage =
                        page;

                    renderTestPage();

                    window.scrollTo({
                        top: 0,
                        behavior: "smooth"
                    });

                }
            );


            pagination.appendChild(
                pageButton
            );

        }


        // NEXT

        const nextPage =
            document.createElement("button");


        nextPage.type =
            "button";


        nextPage.className =
            "pagination-btn";


        nextPage.textContent =
            "Next →";


        nextPage.disabled =
            currentTestPage === totalPages;


        nextPage.addEventListener(
            "click",
            function () {

                if (
                    currentTestPage <
                    totalPages
                ) {

                    currentTestPage++;

                    renderTestPage();

                    window.scrollTo({
                        top: 0,
                        behavior: "smooth"
                    });

                }

            }
        );


        pagination.appendChild(
            nextPage
        );


        // PAGE INFO

        const pageInfo =
            document.createElement("span");


        pageInfo.className =
            "pagination-info";


        pageInfo.textContent =
            "Page " +
            currentTestPage +
            " of " +
            totalPages;


        pagination.appendChild(
            pageInfo
        );


        testListContainer.appendChild(
            pagination
        );
    }


    // =================================================
    // START MOCK
    // =================================================

    function startMock(exam, mockNumber) {

        const database =
            getDatabase(exam);


        if (!database) {

            alert(
                "Database load nahi hua!\n\n" +
                "Exam: " +
                exam
            );

            console.error(
                "Database missing:",
                exam
            );

            return;
        }


        const mock =
            database[mockNumber];


        if (!mock) {

            alert(
                "Mock Test " +
                mockNumber +
                " nahi mila!"
            );

            console.error(
                "Mock not found:",
                mockNumber
            );

            return;
        }


        sessionStorage.setItem(
            "selectedExam",
            exam
        );


        sessionStorage.setItem(
            "selectedMock",
            mockNumber
        );


        window.location.href =
            "mock.html?exam=" +
            encodeURIComponent(exam) +
            "&mock=" +
            encodeURIComponent(mockNumber);
    }


    // =================================================
    // VIEW ALL TESTS
    // =================================================

    const viewButtons =
        document.querySelectorAll(
            ".view-tests"
        );


    viewButtons.forEach(
        function (button) {

            button.addEventListener(
                "click",
                function () {

                    showTestList(
                        button.dataset.exam,
                        button.dataset.title
                    );

                }
            );

        }
    );


    // =================================================
    // BACK BUTTON
    // =================================================

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


    // =================================================
    // CHECK URL
    // =================================================

    const params =
        new URLSearchParams(
            window.location.search
        );


    const exam =
        params.get("exam");


    const mockNumber =
        Number(
            params.get("mock")
        );


    // =================================================
    // OPEN MOCK
    // =================================================

    if (
        exam &&
        mockNumber
    ) {

        startMockInterface(
            exam,
            mockNumber
        );

    }


    // =================================================
    // MOCK INTERFACE
    // =================================================

    function startMockInterface(
        exam,
        mockNumber
    ) {

        // =================================================
        // DATABASE
        // =================================================

        const database =
            getDatabase(exam);


        // =================================================
        // DATABASE ERROR
        // =================================================

        if (!database) {

            alert(
                "Mock Database load nahi hua!\n\n" +
                "Exam: " +
                exam +
                "\n\n" +
                "CGL/CPO/CHSL/MTS/GD/" +
                "Selection Post/Stenographer database check karo."
            );


            console.error(
                "DATABASE NOT FOUND:",
                exam
            );


            console.log(
                "Available databases:",
                {

                    cglTier1Mocks:
                        window.cglTier1Mocks,

                    cglTier2Mocks:
                        window.cglTier2Mocks,

                    cpoTier1Mocks:
                        window.cpoTier1Mocks,

                    cpoTier2Mocks:
                        window.cpoTier2Mocks,

                    chslTier1Mocks:
                        window.chslTier1Mocks,

                    chslTier2Mocks:
                        window.chslTier2Mocks,

                    mtsMocks:
                        window.mtsMocks,

                    gdMocks:
                        window.gdMocks,

                    selectionPostMocks:
                        window.selectionPostMocks,

                    stenoMocks:
                        window.stenoMocks
                }
            );


            return;
        }


        // =================================================
        // GET MOCK
        // =================================================

        const mock =
            database[mockNumber];


        if (!mock) {

            alert(
                "Mock Test " +
                mockNumber +
                " not found!"
            );


            console.error(
                "Mock not found:",
                mockNumber
            );


            console.log(
                "Available mock numbers:",
                Object.keys(database)
            );


            return;
        }


        // =================================================
        // BASIC VALIDATION
        // =================================================

        if (
            !Array.isArray(
                mock.questions
            )
        ) {

            alert(
                "Is mock ke questions database mein sahi format mein nahi hain."
            );


            console.error(
                "Invalid questions:",
                mock
            );


            return;
        }


        console.log(
            "===================================="
        );

        console.log(
            "MOCK INTERFACE STARTED"
        );

        console.log(
            "Exam:",
            exam
        );

        console.log(
            "Exam Name:",
            getExamDisplayName(exam)
        );

        console.log(
            "Mock:",
            mockNumber
        );

        console.log(
            "Questions:",
            mock.questions.length
        );

        console.log(
            "===================================="
        );


        // =================================================
        // REMOVE HOME PAGE
        // =================================================

        document.body.innerHTML = "";

        document.body.className = "";

        document.body.style.margin = "0";


        // =================================================
        // MAIN MOCK SCREEN
        // =================================================

        const mockScreen =
            document.createElement("div");


        mockScreen.className =
            "full-mock-screen";


        mockScreen.innerHTML = `

            <header class="mock-topbar">

                <div class="mock-brand">
                    SSC MOCK TEST
                </div>

                <div class="mock-title">
                    ${
                        mock.title ||
                        getExamDisplayName(exam)
                    }
                </div>

                <div class="mock-timer">

                    Time Left:

                    <strong id="mockTimer">
                        00:00
                    </strong>

                </div>

            </header>


            <div
                class="mock-section-navigation"
                id="mockSectionNavigation"
            >

                <button
                    type="button"
                    class="mock-section-tab active"
                    data-section="Part A"
                >
                    Part A
                </button>

                <button
                    type="button"
                    class="mock-section-tab"
                    data-section="Part B"
                >
                    Part B
                </button>

                <button
                    type="button"
                    class="mock-section-tab"
                    data-section="Part C"
                >
                    Part C
                </button>

                <button
                    type="button"
                    class="mock-section-tab"
                    data-section="Part D"
                >
                    Part D
                </button>


                <div class="mock-language-box">

                    <label for="mockLanguage">
                        Language
                    </label>

                    <select id="mockLanguage">

                        <option value="English">
                            English
                        </option>

                        <option value="Hindi">
                            Hindi
                        </option>

                    </select>

                </div>

            </div>


            <div class="mock-body">


                <main class="mock-question-area">


                    <div class="mock-section-bar">

                        <span id="mockSection">
                            Part A
                        </span>

                        <span id="mockQuestionNumber">
                            Question No. 1
                        </span>

                    </div>


                    <div class="mock-question-box">

                        <h2 id="mockQuestion">
                            Loading Question...
                        </h2>

                        <div
                            id="mockOptions"
                            class="mock-options"
                        ></div>

                    </div>


                    <div class="mock-controls">

                        <button
                            id="mockPrevious"
                            type="button"
                        >
                            ← Previous
                        </button>

                        <button
                            id="mockClear"
                            type="button"
                        >
                            Clear Response
                        </button>

                        <button
                            id="mockMark"
                            type="button"
                        >
                            Mark for Review
                        </button>

                        <button
                            id="mockNext"
                            type="button"
                        >
                            Save & Next →
                        </button>

                    </div>

                </main>


                <aside class="mock-sidebar">


                    <div class="candidate-box">

                        <div class="candidate-avatar">
                            👤
                        </div>

                        <div>

                            <strong>
                                Candidate
                            </strong>

                            <div
                                id="candidateExam"
                                style="
                                    font-size:11px;
                                    color:#777;
                                    margin-top:3px;
                                "
                            >
                                SSC Examination
                            </div>

                        </div>

                    </div>


                    <div
                        class="sidebar-language"
                        style="
                            margin-bottom:15px;
                        "
                    >

                        <label
                            for="sidebarLanguage"
                            style="
                                display:block;
                                font-size:12px;
                                font-weight:600;
                                margin-bottom:5px;
                            "
                        >
                            Choose Language
                        </label>

                        <select
                            id="sidebarLanguage"
                            style="
                                width:100%;
                                padding:7px;
                                border:1px solid #ccc;
                                border-radius:4px;
                                background:#fff;
                            "
                        >

                            <option value="English">
                                English
                            </option>

                            <option value="Hindi">
                                Hindi
                            </option>

                        </select>

                    </div>


                    <h3>
                        Question Palette
                    </h3>


                    <div
                        id="mockPalette"
                        class="mock-palette"
                    ></div>


                    <div class="palette-info">

                        <div>

                            <span
                                class="legend answered"
                            ></span>

                            Answered

                        </div>

                        <div>

                            <span
                                class="legend not-answered"
                            ></span>

                            Not Answered

                        </div>

                        <div>

                            <span
                                class="legend marked"
                            ></span>

                            Marked for Review

                        </div>

                    </div>


                    <button
                        id="mockSubmit"
                        class="mock-submit"
                        type="button"
                    >
                        Submit Test
                    </button>

                </aside>

            </div>

        `;


        document.body.appendChild(
            mockScreen
        );


        // =================================================
        // VARIABLES
        // =================================================

        let currentQuestion = 0;


        let answers =
            new Array(
                mock.questions.length
            ).fill(null);


        let marked =
            new Array(
                mock.questions.length
            ).fill(false);


        let visited =
            new Array(
                mock.questions.length
            ).fill(false);


        let timeLeft =
            Number(
                mock.duration || 60
            ) * 60;


        // =================================================
        // ELEMENTS
        // =================================================

        const timer =
            document.getElementById(
                "mockTimer"
            );


        const questionNumber =
            document.getElementById(
                "mockQuestionNumber"
            );


        const section =
            document.getElementById(
                "mockSection"
            );


        const questionText =
            document.getElementById(
                "mockQuestion"
            );


        const options =
            document.getElementById(
                "mockOptions"
            );


        const palette =
            document.getElementById(
                "mockPalette"
            );


        const previous =
            document.getElementById(
                "mockPrevious"
            );


        const next =
            document.getElementById(
                "mockNext"
            );


        const clear =
            document.getElementById(
                "mockClear"
            );


        const mark =
            document.getElementById(
                "mockMark"
            );


        const submit =
            document.getElementById(
                "mockSubmit"
            );


        const language =
            document.getElementById(
                "mockLanguage"
            );


        const sidebarLanguage =
            document.getElementById(
                "sidebarLanguage"
            );


        const sectionTabs =
            document.querySelectorAll(
                ".mock-section-tab"
            );


        // =================================================
        // CANDIDATE EXAM
        // =================================================

        const candidateExam =
            document.getElementById(
                "candidateExam"
            );


        if (candidateExam) {

            candidateExam.textContent =
                getExamDisplayName(exam);

        }


        // =================================================
        // TIMER
        // =================================================

        function updateTimer() {

            const minutes =
                Math.floor(
                    timeLeft / 60
                );


            const seconds =
                timeLeft % 60;


            timer.textContent =
                String(minutes)
                    .padStart(2, "0")
                +
                ":"
                +
                String(seconds)
                    .padStart(2, "0");


            if (
                timeLeft <= 0
            ) {

                clearInterval(
                    timerInterval
                );


                finishMock(
                    true
                );


                return;
            }


            timeLeft--;

        }


        const timerInterval =
            setInterval(
                updateTimer,
                1000
            );


        updateTimer();


        // =================================================
        // PALETTE
        // =================================================

        function createPalette() {

            palette.innerHTML = "";


            mock.questions.forEach(
                function (_, index) {

                    const button =
                        document.createElement(
                            "button"
                        );


                    button.type =
                        "button";


                    button.textContent =
                        index + 1;


                    button.title =
                        "Question " +
                        (index + 1);


                    button.addEventListener(
                        "click",
                        function () {

                            loadQuestion(
                                index
                            );

                        }
                    );


                    palette.appendChild(
                        button
                    );

                }
            );


            updatePalette();

        }


        // =================================================
        // UPDATE PALETTE
        // =================================================

        function updatePalette() {

            const buttons =
                palette.querySelectorAll(
                    "button"
                );


            buttons.forEach(
                function (
                    button,
                    index
                ) {

                    button.className = "";


                    if (
                        index ===
                        currentQuestion
                    ) {

                        button.classList.add(
                            "current"
                        );

                    }


                    if (
                        answers[index] !==
                        null
                    ) {

                        button.classList.add(
                            "answered"
                        );

                    }


                    if (
                        visited[index] &&
                        answers[index] === null
                    ) {

                        button.classList.add(
                            "not-answered"
                        );

                    }


                    if (
                        marked[index]
                    ) {

                        button.classList.add(
                            "marked"
                        );

                    }

                }
            );

        }


        // =================================================
        // QUESTION SECTION
        // =================================================

        function getQuestionSection(
            question,
            index
        ) {

            if (
                question.section
            ) {

                return question.section;

            }


            const total =
                mock.questions.length;


            const quarter =
                Math.ceil(
                    total / 4
                );


            if (
                index < quarter
            ) {

                return "Part A";

            }


            if (
                index < quarter * 2
            ) {

                return "Part B";

            }


            if (
                index < quarter * 3
            ) {

                return "Part C";

            }


            return "Part D";

        }


        // =================================================
        // SECTION TAB UPDATE
        // =================================================

        function updateSectionTabs(
            currentSection
        ) {

            sectionTabs.forEach(
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


        // =================================================
        // LOAD QUESTION
        // =================================================

        function loadQuestion(index) {

            if (
                index < 0 ||
                index >= mock.questions.length
            ) {

                return;

            }


            currentQuestion =
                index;


            visited[index] =
                true;


            const q =
                mock.questions[index];


            // QUESTION NUMBER

            questionNumber.textContent =
                "Question No. " +
                (index + 1);


            // SECTION

            const currentSection =
                getQuestionSection(
                    q,
                    index
                );


            section.textContent =
                currentSection;


            updateSectionTabs(
                currentSection
            );


            // QUESTION

            questionText.textContent =
                q.question ||
                "Question not available";


            // OPTIONS

            options.innerHTML = "";


            if (
                !Array.isArray(q.options)
            ) {

                console.error(
                    "Options missing:",
                    q
                );


                options.innerHTML = `

                    <div style="
                        padding:20px;
                        color:#b00020;
                    ">

                        Options not available

                    </div>

                `;


                return;
            }


            q.options.forEach(
                function (
                    option,
                    optionIndex
                ) {

                    const label =
                        document.createElement(
                            "label"
                        );


                    label.className =
                        "mock-option";


                    const radio =
                        document.createElement(
                            "input"
                        );


                    radio.type =
                        "radio";


                    radio.name =
                        "mockAnswer";


                    radio.value =
                        optionIndex;


                    if (
                        answers[index] ===
                        optionIndex
                    ) {

                        radio.checked =
                            true;


                        label.classList.add(
                            "selected"
                        );

                    }


                    const letter =
                        document.createElement(
                            "span"
                        );


                    letter.className =
                        "mock-option-letter";


                    letter.textContent =
                        String.fromCharCode(
                            65 +
                            optionIndex
                        );


                    const text =
                        document.createElement(
                            "span"
                        );


                    text.className =
                        "mock-option-text";


                    text.textContent =
                        option;


                    label.appendChild(
                        radio
                    );


                    label.appendChild(
                        letter
                    );


                    label.appendChild(
                        text
                    );


                    radio.addEventListener(
                        "change",
                        function () {

                            answers[index] =
                                optionIndex;


                            options
                                .querySelectorAll(
                                    ".mock-option"
                                )
                                .forEach(
                                    function (item) {

                                        item.classList.remove(
                                            "selected"
                                        );

                                    }
                                );


                            label.classList.add(
                                "selected"
                            );


                            updatePalette();

                        }
                    );


                    options.appendChild(
                        label
                    );

                }
            );


            // PREVIOUS

            previous.disabled =
                index === 0;


            // NEXT

            if (
                index ===
                mock.questions.length - 1
            ) {

                next.textContent =
                    "Submit Test";

            } else {

                next.textContent =
                    "Save & Next →";

            }


            // MARK

            if (
                marked[index]
            ) {

                mark.textContent =
                    "Unmark Review";

            } else {

                mark.textContent =
                    "Mark for Review";

            }


            updatePalette();

        }


        // =================================================
        // SECTION TAB CLICK
        // =================================================

        sectionTabs.forEach(
            function (tab) {

                tab.addEventListener(
                    "click",
                    function () {

                        const selectedSection =
                            tab.dataset.section;


                        let foundIndex =
                            -1;


                        for (
                            let i = 0;
                            i < mock.questions.length;
                            i++
                        ) {

                            if (
                                getQuestionSection(
                                    mock.questions[i],
                                    i
                                ) ===
                                selectedSection
                            ) {

                                foundIndex =
                                    i;

                                break;

                            }

                        }


                        if (
                            foundIndex !== -1
                        ) {

                            loadQuestion(
                                foundIndex
                            );

                        }

                    }
                );

            }
        );


        // =================================================
        // LANGUAGE
        // =================================================

        function syncLanguage(source) {

            if (
                source === language
            ) {

                sidebarLanguage.value =
                    language.value;

            } else {

                language.value =
                    sidebarLanguage.value;

            }


            console.log(
                "Selected Language:",
                language.value
            );

        }


        language.addEventListener(
            "change",
            function () {

                syncLanguage(
                    language
                );

            }
        );


        sidebarLanguage.addEventListener(
            "change",
            function () {

                syncLanguage(
                    sidebarLanguage
                );

            }
        );


        // =================================================
        // PREVIOUS
        // =================================================

        previous.addEventListener(
            "click",
            function () {

                if (
                    currentQuestion > 0
                ) {

                    loadQuestion(
                        currentQuestion - 1
                    );

                }

            }
        );


        // =================================================
        // NEXT
        // =================================================

        next.addEventListener(
            "click",
            function () {

                if (
                    currentQuestion <
                    mock.questions.length - 1
                ) {

                    loadQuestion(
                        currentQuestion + 1
                    );

                } else {

                    finishMock(
                        false
                    );

                }

            }
        );


        // =================================================
        // CLEAR RESPONSE
        // =================================================

        clear.addEventListener(
            "click",
            function () {

                answers[
                    currentQuestion
                ] = null;


                loadQuestion(
                    currentQuestion
                );

            }
        );


        // =================================================
        // MARK FOR REVIEW
        // =================================================

        mark.addEventListener(
            "click",
            function () {

                marked[
                    currentQuestion
                ] =
                    !marked[
                        currentQuestion
                    ];


                updatePalette();


                if (
                    marked[currentQuestion]
                ) {

                    mark.textContent =
                        "Unmark Review";

                } else {

                    mark.textContent =
                        "Mark for Review";

                }

            }
        );


        // =================================================
        // SUBMIT
        // =================================================

        submit.addEventListener(
            "click",
            function () {

                const answeredCount =
                    answers.filter(
                        function (answer) {

                            return answer !== null;

                        }
                    ).length;


                const remaining =
                    mock.questions.length -
                    answeredCount;


                const confirmResult =
                    confirm(
                        "Are you sure you want to submit the test?\n\n" +
                        "Answered: " +
                        answeredCount +
                        "\n" +
                        "Not Answered: " +
                        remaining
                    );


                if (
                    confirmResult
                ) {

                    finishMock(
                        false
                    );

                }

            }
        );


        // =================================================
        // FINISH MOCK
        // =================================================

        function finishMock(
            autoSubmit
        ) {

            clearInterval(
                timerInterval
            );


            let attempted = 0;

            let correct = 0;

            let wrong = 0;


            mock.questions.forEach(
                function (
                    q,
                    index
                ) {

                    if (
                        answers[index] !== null
                    ) {

                        attempted++;


                        if (
                            Number(
                                answers[index]
                            ) ===
                            Number(
                                q.answer
                            )
                        ) {

                            correct++;

                        } else {

                            wrong++;

                        }

                    }

                }
            );


            const notAttempted =
                mock.questions.length -
                attempted;


            // SCORE

            let score =
                (correct * 2) -
                (wrong * 0.50);


            score =
                Math.max(
                    0,
                    score
                );


            showResult(
                mock,
                attempted,
                correct,
                wrong,
                notAttempted,
                score,
                autoSubmit
            );

        }


        // =================================================
        // RESULT SCREEN
        // =================================================

        function showResult(
            mock,
            attempted,
            correct,
            wrong,
            notAttempted,
            score,
            autoSubmit
        ) {

            document.body.innerHTML = `

                <div class="mock-result-screen">

                    <div class="result-box">

                        <div class="result-icon">
                            ✓
                        </div>


                        <h1>
                            Test Submitted
                        </h1>


                        <p>
                            ${
                                mock.title ||
                                "SSC Mock Test"
                            }
                        </p>


                        ${
                            autoSubmit
                                ? `

                                    <p
                                        style="
                                            color:#d62828;
                                            font-weight:600;
                                        "
                                    >

                                        Time over.
                                        Test submitted automatically.

                                    </p>

                                `
                                : ""
                        }


                        <div class="result-grid">


                            <div>

                                <strong>
                                    ${mock.questions.length}
                                </strong>

                                <span>
                                    Total Questions
                                </span>

                            </div>


                            <div>

                                <strong>
                                    ${attempted}
                                </strong>

                                <span>
                                    Attempted
                                </span>

                            </div>


                            <div>

                                <strong>
                                    ${correct}
                                </strong>

                                <span>
                                    Correct
                                </span>

                            </div>


                            <div>

                                <strong>
                                    ${wrong}
                                </strong>

                                <span>
                                    Wrong
                                </span>

                            </div>


                            <div>

                                <strong>
                                    ${notAttempted}
                                </strong>

                                <span>
                                    Not Attempted
                                </span>

                            </div>


                            <div>

                                <strong>
                                    ${score}
                                </strong>

                                <span>
                                    Score
                                </span>

                            </div>


                        </div>


                        <button
                            id="backHome"
                            class="result-home-btn"
                            type="button"
                        >
                            Back to Mock Tests
                        </button>


                    </div>

                </div>

            `;


            const backHome =
                document.getElementById(
                    "backHome"
                );


            if (backHome) {

                backHome.addEventListener(
                    "click",
                    function () {

                        window.location.href =
                            "mock.html";

                    }
                );

            }

        }


        // =================================================
        // START MOCK
        // =================================================

        createPalette();

        loadQuestion(0);

    }


    // =================================================
    // EXAM DISPLAY NAME
    // =================================================

    function getExamDisplayName(exam) {

        switch (exam) {

            // CGL

            case "cgl-tier1":
            case "cgl-paper1":

                return "SSC CGL Tier 1";


            case "cgl-tier2":
            case "cgl-paper2":

                return "SSC CGL Tier 2";


            // CPO

            case "cpo-tier1":
            case "cpo-paper1":

                return "SSC CPO Tier 1";


            case "cpo-tier2":
            case "cpo-paper2":

                return "SSC CPO Tier 2";


            // CHSL

            case "chsl-tier1":
            case "chsl-paper1":

                return "SSC CHSL Tier 1";


            case "chsl-tier2":
            case "chsl-paper2":

                return "SSC CHSL Tier 2";


            // MTS

            case "mts":
            case "mts-tier1":
            case "mts-paper1":

                return "SSC MTS";


            // GD

            case "gd":
            case "gd-tier1":
            case "gd-paper1":

                return "SSC GD";


            // Selection Post

            case "selectionpost":
            case "selection-post":
            case "selectionpost-tier1":
            case "selectionpost-paper1":

                return "SSC Selection Post";


            // Stenographer

            case "steno":
            case "stenographer":
            case "steno-tier1":
            case "steno-paper1":

                return "SSC Stenographer";


            default:

                return "SSC Examination";
        }
    }

});