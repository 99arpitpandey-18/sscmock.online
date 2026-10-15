// =====================================================
// SSC MOCK TEST SYSTEM
// COMPLETE MOCK ENGINE
// CGL T1/T2 | CPO P1/P2 | CHSL T1/T2
// MTS | GD | SELECTION POST | STENOGRAPHER
// =====================================================

document.addEventListener("DOMContentLoaded", function () {

    console.log("====================================");
    console.log("SSC MOCK SYSTEM STARTING...");
    console.log("====================================");

    // =================================================
    // DATABASE SELECTOR
    // =================================================

    function getDatabase(exam) {

        switch (exam) {

            case "cgl-tier1":
            case "cgl-paper1":
                return window.cglTier1Mocks || null;

            case "cgl-tier2":
            case "cgl-paper2":
                return window.cglTier2Mocks || null;

            case "cpo-tier1":
            case "cpo-paper1":
                return window.cpoTier1Mocks || null;

            case "cpo-tier2":
            case "cpo-paper2":
                return window.cpoTier2Mocks || null;

            case "chsl-tier1":
            case "chsl-paper1":
                return window.chslTier1Mocks || null;

            case "chsl-tier2":
            case "chsl-paper2":
                return window.chslTier2Mocks || null;

            case "mts":
            case "mts-tier1":
            case "mts-paper1":
                return window.mtsMocks || null;

            case "gd":
            case "gd-tier1":
            case "gd-paper1":
                return window.gdMocks || null;

            case "selectionpost":
            case "selection-post":
            case "selectionpost-tier1":
            case "selectionpost-paper1":
                return window.selectionPostMocks || null;

            case "steno":
            case "stenographer":
            case "steno-tier1":
            case "steno-paper1":
                return window.stenoMocks || null;

            default:
                return null;
        }
    }


    // =================================================
    // EXAM NAME
    // =================================================

    function getExamName(exam) {

        switch (exam) {

            case "cgl-tier1":
            case "cgl-paper1":
                return "SSC CGL Tier 1";

            case "cgl-tier2":
            case "cgl-paper2":
                return "SSC CGL Tier 2";

            case "cpo-tier1":
            case "cpo-paper1":
                return "SSC CPO Paper 1";

            case "cpo-tier2":
            case "cpo-paper2":
                return "SSC CPO Paper 2";

            case "chsl-tier1":
            case "chsl-paper1":
                return "SSC CHSL Tier 1";

            case "chsl-tier2":
            case "chsl-paper2":
                return "SSC CHSL Tier 2";

            case "mts":
            case "mts-tier1":
            case "mts-paper1":
                return "SSC MTS";

            case "gd":
            case "gd-tier1":
            case "gd-paper1":
                return "SSC GD";

            case "selectionpost":
            case "selection-post":
            case "selectionpost-tier1":
            case "selectionpost-paper1":
                return "SSC Selection Post";

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
    // DASHBOARD ELEMENTS
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
    // DASHBOARD VARIABLES
    // =================================================

    let currentDatabase = null;
    let currentExam = null;
    let currentExamTitle = null;

    let currentTestPage = 1;

    const testsPerPage = 10;


    // =================================================
    // SHOW TEST LIST
    // =================================================

    function showTestList(exam, title) {

        const database = getDatabase(exam);

        if (!database) {

            alert(
                "Database load nahi hua!\n\n" +
                "Exam: " + exam
            );

            console.error("Database missing:", exam);

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
            testListSection.style.display = "block";
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
    // RENDER TEST LIST
    // =================================================

    function renderTestPage() {

        if (!currentDatabase || !testListContainer) {
            return;
        }

        testListContainer.innerHTML = "";

        const mockNumbers =
            Object.keys(currentDatabase)
                .sort(function (a, b) {
                    return Number(a) - Number(b);
                });

        const totalTests = mockNumbers.length;

        if (testCount) {
            testCount.textContent = totalTests;
        }

        const totalPages =
            Math.max(
                1,
                Math.ceil(
                    totalTests / testsPerPage
                )
            );

        if (currentTestPage > totalPages) {
            currentTestPage = totalPages;
        }

        const startIndex =
            (currentTestPage - 1) *
            testsPerPage;

        const pageMocks =
            mockNumbers.slice(
                startIndex,
                startIndex + testsPerPage
            );


        // =================================================
        // HEADER
        // =================================================

        const header =
            document.createElement("div");

        header.className =
            "mock-list-page-header";

        header.innerHTML = `
            <div>
                <div class="mock-list-badge">
                    SSC MOCK SERIES
                </div>

                <h2>
                    ${currentExamTitle}
                </h2>

                <p>
                    Select a test and start your preparation
                </p>
            </div>

            <div class="mock-total-count">
                <strong>${totalTests}</strong>
                <span>Tests Available</span>
            </div>
        `;

        testListContainer.appendChild(header);


        // =================================================
        // EMPTY
        // =================================================

        if (pageMocks.length === 0) {

            const empty =
                document.createElement("div");

            empty.className =
                "no-tests-message";

            empty.innerHTML = `
                <h3>No Mock Tests Available</h3>
                <p>
                    Is exam ke liye abhi mock tests
                    available nahi hain.
                </p>
            `;

            testListContainer.appendChild(empty);

            return;
        }


        // =================================================
        // TEST CARDS
        // =================================================

        pageMocks.forEach(function (mockNumber) {

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
                Number(mock.duration) || 60;

            card.innerHTML = `
                <div class="dynamic-test-left">

                    <div class="dynamic-test-number">
                        TEST ${mockNumber}
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
                                ${questionCount} Questions
                            </span>

                            <span class="test-divider">
                                •
                            </span>

                            <span>
                                ${duration} Minutes
                            </span>
                        </p>

                    </div>

                </div>

                <button
                    class="start-test-btn"
                    type="button"
                    data-exam="${currentExam}"
                    data-mock="${mockNumber}"
                >
                    Start Test
                    <span>→</span>
                </button>
            `;

            testListContainer.appendChild(card);
        });


        // =================================================
        // START BUTTONS
        // =================================================

        testListContainer
            .querySelectorAll(".start-test-btn")
            .forEach(function (button) {

                button.addEventListener(
                    "click",
                    function () {

                        startMock(
                            button.dataset.exam,
                            button.dataset.mock
                        );

                    }
                );

            });


        // =================================================
        // PAGINATION
        // =================================================

        if (totalPages > 1) {
            createPagination(totalPages);
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


        const previous =
            document.createElement("button");

        previous.type = "button";
        previous.className = "pagination-btn";
        previous.textContent = "← Previous";
        previous.disabled =
            currentTestPage === 1;

        previous.addEventListener(
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

        pagination.appendChild(previous);


        // PAGE NUMBERS

        for (
            let page = 1;
            page <= totalPages;
            page++
        ) {

            if (
                totalPages > 7 &&
                page > 3 &&
                page < totalPages - 2 &&
                Math.abs(page - currentTestPage) > 1
            ) {

                if (
                    page === 4 ||
                    page === totalPages - 3
                ) {

                    const dots =
                        document.createElement("span");

                    dots.className =
                        "pagination-info";

                    dots.textContent = "...";

                    pagination.appendChild(dots);
                }

                continue;
            }

            const button =
                document.createElement("button");

            button.type = "button";

            button.className =
                "pagination-number";

            button.textContent = page;

            if (page === currentTestPage) {
                button.classList.add("active");
            }

            button.addEventListener(
                "click",
                function () {

                    currentTestPage = page;

                    renderTestPage();

                    window.scrollTo({
                        top: 0,
                        behavior: "smooth"
                    });
                }
            );

            pagination.appendChild(button);
        }


        const next =
            document.createElement("button");

        next.type = "button";
        next.className = "pagination-btn";
        next.textContent = "Next →";
        next.disabled =
            currentTestPage === totalPages;

        next.addEventListener(
            "click",
            function () {

                if (
                    currentTestPage < totalPages
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

        pagination.appendChild(next);


        const info =
            document.createElement("span");

        info.className =
            "pagination-info";

        info.textContent =
            `Page ${currentTestPage} of ${totalPages}`;

        pagination.appendChild(info);

        testListContainer.appendChild(pagination);
    }


    // =================================================
    // START MOCK
    // =================================================

    function startMock(exam, mockNumber) {

        const database =
            getDatabase(exam);

        if (!database) {

            alert(
                "Mock Database load nahi hua!"
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

            return;
        }

        if (
            !Array.isArray(mock.questions) ||
            mock.questions.length === 0
        ) {

            alert(
                "Is mock mein questions available nahi hain."
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
    // VIEW ALL BUTTONS
    // =================================================

    document
        .querySelectorAll(".view-tests")
        .forEach(function (button) {

            button.addEventListener(
                "click",
                function () {

                    showTestList(
                        button.dataset.exam,
                        button.dataset.title
                    );
                }
            );
        });


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
    // URL
    // =================================================

    const params =
        new URLSearchParams(
            window.location.search
        );

    const urlExam =
        params.get("exam");

    const urlMock =
        params.get("mock");


    // =================================================
    // OPEN MOCK INTERFACE
    // =================================================

    if (
        urlExam &&
        urlMock !== null &&
        urlMock !== ""
    ) {

        startMockInterface(
            urlExam,
            urlMock
        );
    }


    // =================================================
    // MOCK INTERFACE
    // =================================================

    function startMockInterface(
        exam,
        mockNumber
    ) {

        const database =
            getDatabase(exam);

        if (!database) {

            showErrorScreen(
                "Mock database not found",
                exam
            );

            return;
        }

        const mock =
            database[mockNumber];

        if (!mock) {

            showErrorScreen(
                "Mock Test not found",
                mockNumber
            );

            return;
        }

        if (
            !Array.isArray(mock.questions) ||
            mock.questions.length === 0
        ) {

            showErrorScreen(
                "Questions not available",
                exam
            );

            return;
        }


        // =================================================
        // EXAM SETTINGS
        // =================================================

        const settings =
            getExamSettings(exam, mock);


        // =================================================
        // REMOVE DASHBOARD
        // =================================================

        document.body.innerHTML = "";

        document.body.className =
            "mock-page-active";

        document.body.style.margin = "0";


        // =================================================
        // MOCK SCREEN
        // =================================================

        const screen =
            document.createElement("div");

        screen.className =
            "full-mock-screen";


        screen.innerHTML = `

            <!-- =========================================
                 TOP HEADER
            ========================================== -->

            <header class="mock-topbar">

                <div class="mock-brand">
                    <span class="mock-brand-main">
                        SSC
                    </span>

                    <span class="mock-brand-sub">
                        MOCK TEST
                    </span>
                </div>

                <div class="mock-title">
                    ${
                        mock.title ||
                        getExamName(exam)
                    }
                </div>

                <div class="mock-timer-wrap">

                    <span>
                        Time Left
                    </span>

                    <strong id="mockTimer">
                        00:00:00
                    </strong>

                </div>

            </header>


            <!-- =========================================
                 SECTION BAR
            ========================================== -->

            <div class="mock-section-navigation">

                <div
                    class="mock-section-tabs"
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

                </div>


                <div class="mock-language-box">

                    <label>
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


            <!-- =========================================
                 BODY
            ========================================== -->

            <div class="mock-body">


                <!-- =====================================
                     QUESTION AREA
                ====================================== -->

                <main class="mock-question-area">


                    <div class="mock-section-bar">

                        <div>

                            <strong id="mockSection">
                                Part A
                            </strong>

                        </div>

                        <div
                            id="mockQuestionNumber"
                        >
                            Question No. 1
                        </div>

                    </div>


                    <div class="mock-question-box">

                        <div
                            class="question-instruction"
                        >
                            Choose the correct answer.
                        </div>

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


                <!-- =====================================
                     SIDEBAR
                ====================================== -->

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
                                    opacity:.65;
                                    margin-top:4px;
                                "
                            >
                                SSC Examination
                            </div>

                        </div>

                    </div>


                    <div class="sidebar-language">

                        <label
                            for="sidebarLanguage"
                        >
                            Choose Language
                        </label>

                        <select
                            id="sidebarLanguage"
                        >

                            <option value="English">
                                English
                            </option>

                            <option value="Hindi">
                                Hindi
                            </option>

                        </select>

                    </div>


                    <div class="palette-heading">

                        <h3>
                            Question Palette
                        </h3>

                        <span
                            id="paletteProgress"
                        >
                            0 / 0
                        </span>

                    </div>


                    <div
                        id="mockPalette"
                        class="mock-palette"
                    ></div>


                    <div class="palette-info">

                        <div>
                            <span class="legend answered"></span>
                            Answered
                        </div>

                        <div>
                            <span class="legend not-answered"></span>
                            Not Answered
                        </div>

                        <div>
                            <span class="legend marked"></span>
                            Marked for Review
                        </div>

                        <div>
                            <span class="legend current"></span>
                            Current
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


        document.body.appendChild(screen);


        // =================================================
        // STATE
        // =================================================

        let currentQuestion = 0;

        const totalQuestions =
            mock.questions.length;

        const answers =
            new Array(totalQuestions)
                .fill(null);

        const marked =
            new Array(totalQuestions)
                .fill(false);

        const visited =
            new Array(totalQuestions)
                .fill(false);


        let timeLeft =
            Number(settings.duration) * 60;


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

        const paletteProgress =
            document.getElementById(
                "paletteProgress"
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


        const candidateExam =
            document.getElementById(
                "candidateExam"
            );

        if (candidateExam) {

            candidateExam.textContent =
                getExamName(exam);
        }


        // =================================================
        // TIMER
        // =================================================

        let timerInterval = null;


        function formatTime(seconds) {

            const hrs =
                Math.floor(seconds / 3600);

            const mins =
                Math.floor(
                    (seconds % 3600) / 60
                );

            const secs =
                seconds % 60;

            return (
                String(hrs).padStart(2, "0") +
                ":" +
                String(mins).padStart(2, "0") +
                ":" +
                String(secs).padStart(2, "0")
            );
        }


        function updateTimer() {

            timer.textContent =
                formatTime(
                    Math.max(0, timeLeft)
                );


            if (timeLeft <= 300) {

                timer.classList.add(
                    "timer-warning"
                );
            }


            if (timeLeft <= 0) {

                clearInterval(
                    timerInterval
                );

                finishMock(true);

                return;
            }

            timeLeft--;
        }


        updateTimer();


        timerInterval =
            setInterval(
                updateTimer,
                1000
            );


        // =================================================
        // QUESTION SECTION
        // =================================================

        function getQuestionSection(
            question,
            index
        ) {

            if (
                question &&
                question.section
            ) {

                return question.section;
            }


            const quarter =
                Math.ceil(
                    totalQuestions / 4
                );


            if (index < quarter) {
                return "Part A";
            }

            if (index < quarter * 2) {
                return "Part B";
            }

            if (index < quarter * 3) {
                return "Part C";
            }

            return "Part D";
        }


        // =================================================
        // SECTION TABS
        // =================================================

        function updateSectionTabs(
            currentSection
        ) {

            sectionTabs.forEach(
                function (tab) {

                    tab.classList.toggle(
                        "active",
                        tab.dataset.section ===
                        currentSection
                    );

                }
            );
        }


        // =================================================
        // CREATE PALETTE
        // =================================================

        function createPalette() {

            palette.innerHTML = "";

            mock.questions.forEach(
                function (_, index) {

                    const button =
                        document.createElement(
                            "button"
                        );

                    button.type = "button";

                    button.textContent =
                        index + 1;

                    button.className =
                        "palette-question";

                    button.addEventListener(
                        "click",
                        function () {

                            loadQuestion(index);

                        }
                    );

                    palette.appendChild(button);
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


            let answeredCount = 0;


            buttons.forEach(
                function (
                    button,
                    index
                ) {

                    button.className =
                        "palette-question";


                    if (
                        answers[index] !== null
                    ) {

                        button.classList.add(
                            "answered"
                        );

                        answeredCount++;
                    }


                    if (
                        visited[index] &&
                        answers[index] === null
                    ) {

                        button.classList.add(
                            "not-answered"
                        );
                    }


                    if (marked[index]) {

                        button.classList.add(
                            "marked"
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


            if (paletteProgress) {

                paletteProgress.textContent =
                    answeredCount +
                    " / " +
                    totalQuestions;
            }
        }


        // =================================================
        // LOAD QUESTION
        // =================================================

        function loadQuestion(index) {

            if (
                index < 0 ||
                index >= totalQuestions
            ) {
                return;
            }


            currentQuestion = index;

            visited[index] = true;


            const q =
                mock.questions[index];


            const currentSection =
                getQuestionSection(
                    q,
                    index
                );


            section.textContent =
                currentSection;


            questionNumber.textContent =
                "Question No. " +
                (index + 1);


            updateSectionTabs(
                currentSection
            );


            // QUESTION TEXT

            questionText.textContent =
                q.question ||
                "Question not available";


            // OPTIONS

            options.innerHTML = "";


            if (
                !Array.isArray(q.options)
            ) {

                options.innerHTML = `
                    <div class="option-error">
                        Options not available
                    </div>
                `;

                updatePalette();

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


                    const letter =
                        document.createElement(
                            "span"
                        );

                    letter.className =
                        "mock-option-letter";

                    letter.textContent =
                        String.fromCharCode(
                            65 + optionIndex
                        );


                    const text =
                        document.createElement(
                            "span"
                        );

                    text.className =
                        "mock-option-text";

                    text.textContent =
                        option;


                    if (
                        answers[index] ===
                        optionIndex
                    ) {

                        radio.checked = true;

                        label.classList.add(
                            "selected"
                        );
                    }


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
                                    function (
                                        item
                                    ) {

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


                    label.appendChild(radio);
                    label.appendChild(letter);
                    label.appendChild(text);

                    options.appendChild(label);
                }
            );


            // PREVIOUS

            previous.disabled =
                index === 0;


            // NEXT

            if (
                index ===
                totalQuestions - 1
            ) {

                next.textContent =
                    "Submit Test";

            } else {

                next.textContent =
                    "Save & Next →";
            }


            // MARK

            mark.textContent =
                marked[index]
                    ? "Unmark Review"
                    : "Mark for Review";


            updatePalette();
        }


        // =================================================
        // SECTION CLICK
        // =================================================

        sectionTabs.forEach(
            function (tab) {

                tab.addEventListener(
                    "click",
                    function () {

                        const selectedSection =
                            tab.dataset.section;


                        let firstQuestion = -1;


                        for (
                            let i = 0;
                            i < totalQuestions;
                            i++
                        ) {

                            if (
                                getQuestionSection(
                                    mock.questions[i],
                                    i
                                ) ===
                                selectedSection
                            ) {

                                firstQuestion = i;

                                break;
                            }
                        }


                        if (
                            firstQuestion !== -1
                        ) {

                            loadQuestion(
                                firstQuestion
                            );
                        }
                    }
                );
            }
        );


        // =================================================
        // LANGUAGE SYNC
        // =================================================

        function syncLanguage(
            source
        ) {

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
                "Language:",
                language.value
            );
        }


        language.addEventListener(
            "change",
            function () {

                syncLanguage(language);

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
                    totalQuestions - 1
                ) {

                    loadQuestion(
                        currentQuestion + 1
                    );

                } else {

                    confirmSubmit();
                }
            }
        );


        // =================================================
        // CLEAR
        // =================================================

        clear.addEventListener(
            "click",
            function () {

                answers[currentQuestion] =
                    null;

                loadQuestion(
                    currentQuestion
                );
            }
        );


        // =================================================
        // MARK
        // =================================================

        mark.addEventListener(
            "click",
            function () {

                marked[currentQuestion] =
                    !marked[currentQuestion];


                mark.textContent =
                    marked[currentQuestion]
                        ? "Unmark Review"
                        : "Mark for Review";


                updatePalette();
            }
        );


        // =================================================
        // SUBMIT CONFIRMATION
        // =================================================

        function confirmSubmit() {

            const answered =
                answers.filter(
                    function (value) {
                        return value !== null;
                    }
                ).length;


            const unanswered =
                totalQuestions -
                answered;


            const reviewed =
                marked.filter(
                    function (value) {
                        return value === true;
                    }
                ).length;


            const message =
                "Submit your test?\n\n" +
                "Answered: " +
                answered +
                "\n" +
                "Not Answered: " +
                unanswered +
                "\n" +
                "Marked for Review: " +
                reviewed;


            if (confirm(message)) {

                finishMock(false);
            }
        }


        submit.addEventListener(
            "click",
            function () {

                confirmSubmit();

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
                            isCorrectAnswer(
                                answers[index],
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
                totalQuestions -
                attempted;


            const score =
                Math.max(
                    0,
                    (
                        correct *
                        settings.marksPerQuestion
                    ) -
                    (
                        wrong *
                        settings.negativeMark
                    )
                );


            showResult(
                mock,
                attempted,
                correct,
                wrong,
                notAttempted,
                score,
                autoSubmit,
                settings
            );
        }


        // =================================================
        // RESULT
        // =================================================

        function showResult(
            mock,
            attempted,
            correct,
            wrong,
            notAttempted,
            score,
            autoSubmit,
            settings
        ) {

            const percentage =
                totalQuestions > 0
                    ? (
                        correct /
                        totalQuestions
                    ) * 100
                    : 0;


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
                                getExamName(exam)
                            }
                        </p>

                        ${
                            autoSubmit
                                ? `
                                    <div class="auto-submit-message">
                                        Time over. Test submitted automatically.
                                    </div>
                                `
                                : ""
                        }


                        <div class="result-grid">

                            <div>
                                <strong>
                                    ${totalQuestions}
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
                                    ${formatScore(score)}
                                </strong>

                                <span>
                                    Score
                                </span>
                            </div>


                            <div>
                                <strong>
                                    ${percentage.toFixed(1)}%
                                </strong>

                                <span>
                                    Accuracy
                                </span>
                            </div>

                        </div>


                        <div class="result-actions">

                            <button
                                id="backHome"
                                class="result-home-btn"
                                type="button"
                            >
                                Back to Mock Tests
                            </button>

                        </div>

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
        // START
        // =================================================

        createPalette();

        loadQuestion(0);
    }


    // =================================================
    // EXAM SETTINGS
    // =================================================

    function getExamSettings(
        exam,
        mock
    ) {

        const defaultSettings = {

            duration:
                Number(mock.duration) || 60,

            marksPerQuestion:
                2,

            negativeMark:
                0.50

        };


        switch (exam) {

            case "cgl-tier1":
            case "cgl-paper1":

                return {
                    duration:
                        Number(mock.duration) || 60,
                    marksPerQuestion: 2,
                    negativeMark: 0.50
                };


            case "cgl-tier2":
            case "cgl-paper2":

                return {
                    duration:
                        Number(mock.duration) || 60,
                    marksPerQuestion: 3,
                    negativeMark: 1
                };


            case "cpo-tier1":
            case "cpo-paper1":

                return {
                    duration:
                        Number(mock.duration) || 120,
                    marksPerQuestion: 1,
                    negativeMark: 0.25
                };


            case "cpo-tier2":
            case "cpo-paper2":

                return {
                    duration:
                        Number(mock.duration) || 120,
                    marksPerQuestion: 2,
                    negativeMark: 0.50
                };


            case "chsl-tier1":
            case "chsl-paper1":

                return {
                    duration:
                        Number(mock.duration) || 60,
                    marksPerQuestion: 2,
                    negativeMark: 0.50
                };


            case "chsl-tier2":
            case "chsl-paper2":

                return {
                    duration:
                        Number(mock.duration) || 60,
                    marksPerQuestion: 3,
                    negativeMark: 0
                };


            case "mts":
            case "mts-tier1":
            case "mts-paper1":

                return {
                    duration:
                        Number(mock.duration) || 90,
                    marksPerQuestion: 3,
                    negativeMark: 1
                };


            case "gd":
            case "gd-tier1":
            case "gd-paper1":

                return {
                    duration:
                        Number(mock.duration) || 60,
                    marksPerQuestion: 2,
                    negativeMark: 0.25
                };


            case "selectionpost":
            case "selection-post":
            case "selectionpost-tier1":
            case "selectionpost-paper1":

                return {
                    duration:
                        Number(mock.duration) || 60,
                    marksPerQuestion: 2,
                    negativeMark: 0.50
                };


            case "steno":
            case "stenographer":
            case "steno-tier1":
            case "steno-paper1":

                return {
                    duration:
                        Number(mock.duration) || 60,
                    marksPerQuestion: 2,
                    negativeMark: 0.50
                };


            default:
                return defaultSettings;
        }
    }


    // =================================================
    // ANSWER CHECK
    // =================================================

    function isCorrectAnswer(
        selected,
        correct
    ) {

        if (
            selected === null ||
            correct === undefined ||
            correct === null
        ) {

            return false;
        }


        // Numeric answer
        if (
            !isNaN(Number(correct))
        ) {

            return (
                Number(selected) ===
                Number(correct)
            );
        }


        // Letter answer
        const selectedLetter =
            String.fromCharCode(
                65 + Number(selected)
            );


        return (
            String(correct)
                .trim()
                .toUpperCase() ===
            selectedLetter
        );
    }


    // =================================================
    // SCORE FORMAT
    // =================================================

    function formatScore(score) {

        return Number(
            score.toFixed(2)
        );
    }


    // =================================================
    // ERROR SCREEN
    // =================================================

    function showErrorScreen(
        message,
        detail
    ) {

        document.body.innerHTML = `

            <div
                style="
                    min-height:100vh;
                    display:flex;
                    align-items:center;
                    justify-content:center;
                    background:#0b1020;
                    color:white;
                    font-family:Arial,sans-serif;
                    padding:20px;
                    box-sizing:border-box;
                "
            >

                <div
                    style="
                        width:min(600px,100%);
                        background:#151c30;
                        border:1px solid #2c3857;
                        border-radius:16px;
                        padding:40px;
                        text-align:center;
                        box-shadow:0 20px 60px rgba(0,0,0,.4);
                    "
                >

                    <div
                        style="
                            font-size:50px;
                            margin-bottom:15px;
                        "
                    >
                        ⚠️
                    </div>

                    <h1>
                        ${message}
                    </h1>

                    <p
                        style="
                            color:#aab4cc;
                        "
                    >
                        ${detail}
                    </p>

                    <button
                        onclick="window.location.href='mock.html'"
                        style="
                            margin-top:20px;
                            padding:12px 25px;
                            border:0;
                            border-radius:8px;
                            cursor:pointer;
                            font-weight:700;
                        "
                    >
                        Back to Mock Tests
                    </button>

                </div>

            </div>
        `;
    }

});
