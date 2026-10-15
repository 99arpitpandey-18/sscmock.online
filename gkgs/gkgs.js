/* =========================================================
   SSC MOCK - GK & GS MASTER NOTES
   COMMON JAVASCRIPT
   ========================================================= */


/* =========================================================
   01. DOM READY
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    initializeTheme();
    initializeMobileMenu();
    initializeBackToTop();
    initializeReadingProgress();
    initializeSearch();
    initializeFontControls();
    initializeToggles();
    initializeTOC();
    initializeActiveNavigation();
    initializePrintButton();
    initializeKeyboardShortcuts();
    initializeSmoothScroll();
    initializePageAnimations();

});


/* =========================================================
   02. THEME SYSTEM
   ========================================================= */

function initializeTheme() {

    const themeButton =
        document.querySelector("#themeToggle");

    const savedTheme =
        localStorage.getItem("gkgs-theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
        updateThemeIcon();
    }

    if (themeButton) {

        themeButton.addEventListener("click", function () {

            document.body.classList.toggle("dark-mode");

            const isDark =
                document.body.classList.contains("dark-mode");

            localStorage.setItem(
                "gkgs-theme",
                isDark ? "dark" : "light"
            );

            updateThemeIcon();

        });

    }

}


function updateThemeIcon() {

    const themeButton =
        document.querySelector("#themeToggle");

    if (!themeButton) return;

    const isDark =
        document.body.classList.contains("dark-mode");

    themeButton.innerHTML =
        isDark ? "☀️" : "🌙";

    themeButton.setAttribute(
        "aria-label",
        isDark
            ? "Light Mode"
            : "Dark Mode"
    );

}


/* =========================================================
   03. MOBILE MENU
   ========================================================= */

function initializeMobileMenu() {

    const menuButton =
        document.querySelector("#menuToggle");

    const mobileMenu =
        document.querySelector("#mobileMenu");

    if (!menuButton || !mobileMenu) {
        return;
    }

    menuButton.addEventListener(
        "click",
        function () {

            mobileMenu.classList.toggle("active");

            const opened =
                mobileMenu.classList.contains("active");

            menuButton.innerHTML =
                opened ? "✕" : "☰";

        }
    );


    const mobileLinks =
        mobileMenu.querySelectorAll("a");

    mobileLinks.forEach(function (link) {

        link.addEventListener(
            "click",
            function () {

                mobileMenu.classList.remove(
                    "active"
                );

                menuButton.innerHTML = "☰";

            }
        );

    });

}


/* =========================================================
   04. BACK TO TOP
   ========================================================= */

function initializeBackToTop() {

    const button =
        document.querySelector("#backToTop") ||
        document.querySelector(".back-to-top");

    if (!button) return;

    window.addEventListener(
        "scroll",
        function () {

            if (window.scrollY > 400) {

                button.classList.add("show");

            } else {

                button.classList.remove("show");

            }

        }
    );


    button.addEventListener(
        "click",
        function () {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );

}


/* =========================================================
   05. READING PROGRESS
   ========================================================= */

function initializeReadingProgress() {

    let progressBar =
        document.querySelector("#readingProgress");

    if (!progressBar) {

        progressBar =
            document.createElement("div");

        progressBar.id =
            "readingProgress";

        progressBar.style.position =
            "fixed";

        progressBar.style.top =
            "0";

        progressBar.style.left =
            "0";

        progressBar.style.height =
            "4px";

        progressBar.style.width =
            "0%";

        progressBar.style.background =
            "linear-gradient(90deg,#1d4ed8,#7c3aed)";

        progressBar.style.zIndex =
            "9999";

        progressBar.style.transition =
            "width 0.1s linear";

        document.body.appendChild(
            progressBar
        );

    }


    window.addEventListener(
        "scroll",
        function () {

            const documentHeight =
                document.documentElement
                    .scrollHeight -
                window.innerHeight;

            if (documentHeight <= 0) {
                progressBar.style.width =
                    "100%";
                return;
            }

            const scrollTop =
                window.scrollY;

            const percentage =
                (scrollTop / documentHeight) * 100;

            progressBar.style.width =
                Math.min(
                    100,
                    Math.max(0, percentage)
                ) + "%";

        }
    );

}


/* =========================================================
   06. SEARCH SYSTEM
   ========================================================= */

function initializeSearch() {

    const searchInput =
        document.querySelector("#searchInput");

    const searchButton =
        document.querySelector("#searchBtn");

    if (!searchInput) return;


    function performSearch() {

        const query =
            searchInput.value
                .trim()
                .toLowerCase();

        const searchableElements =
            document.querySelectorAll(
                ".content-card, " +
                ".chapter-card, " +
                ".fact-card, " +
                ".mcq, " +
                ".timeline-item, " +
                ".one-liner, " +
                ".flashcard"
            );


        if (query === "") {

            searchableElements.forEach(
                function (element) {

                    element.style.display =
                        "";

                }
            );

            removeSearchMessage();

            return;

        }


        let results = 0;


        searchableElements.forEach(
            function (element) {

                const text =
                    element.innerText
                        .toLowerCase();

                if (text.includes(query)) {

                    element.style.display =
                        "";

                    results++;

                    highlightSearchTerm(
                        element,
                        query
                    );

                } else {

                    element.style.display =
                        "none";

                }

            }
        );


        showSearchMessage(
            results,
            query
        );

    }


    if (searchButton) {

        searchButton.addEventListener(
            "click",
            performSearch
        );

    }


    searchInput.addEventListener(
        "keyup",
        function (event) {

            if (event.key === "Enter") {
                performSearch();
            }

            if (
                searchInput.value.trim() === ""
            ) {
                performSearch();
            }

        }
    );

}


/* =========================================================
   07. SEARCH MESSAGE
   ========================================================= */

function showSearchMessage(
    results,
    query
) {

    removeSearchMessage();


    const message =
        document.createElement("div");

    message.id =
        "searchMessage";

    message.style.padding =
        "12px 15px";

    message.style.margin =
        "12px 0";

    message.style.borderRadius =
        "8px";

    message.style.background =
        "#eff6ff";

    message.style.color =
        "#1d4ed8";

    message.style.fontWeight =
        "600";

    message.innerHTML =
        results +
        " result(s) found for: <strong>" +
        escapeHTML(query) +
        "</strong>";


    const searchBox =
        document.querySelector(
            ".search-box"
        );

    if (searchBox) {

        searchBox.after(message);

    }

}


function removeSearchMessage() {

    const message =
        document.querySelector(
            "#searchMessage"
        );

    if (message) {
        message.remove();
    }

}


/* =========================================================
   08. SEARCH HIGHLIGHT
   ========================================================= */

function highlightSearchTerm(
    element,
    query
) {

    /*
       Search filtering is intentionally
       separated from permanent HTML
       highlighting so that existing
       formatting is not destroyed.
    */

    element.classList.add(
        "search-result"
    );

}


/* =========================================================
   09. HTML ESCAPE
   ========================================================= */

function escapeHTML(text) {

    const div =
        document.createElement("div");

    div.textContent =
        text;

    return div.innerHTML;

}


/* =========================================================
   10. FONT SIZE CONTROL
   ========================================================= */

function initializeFontControls() {

    const increase =
        document.querySelector(
            "#increaseFont"
        );

    const decrease =
        document.querySelector(
            "#decreaseFont"
        );

    const reset =
        document.querySelector(
            "#resetFont"
        );

    const content =
        document.querySelector(
            ".content-area"
        );


    if (!content) return;


    let currentSize =
        parseInt(
            localStorage.getItem(
                "gkgs-font-size"
            )
        );


    if (
        isNaN(currentSize)
    ) {

        currentSize = 16;

    }


    applyFontSize(
        content,
        currentSize
    );


    if (increase) {

        increase.addEventListener(
            "click",
            function () {

                currentSize =
                    Math.min(
                        24,
                        currentSize + 1
                    );

                applyFontSize(
                    content,
                    currentSize
                );

            }
        );

    }


    if (decrease) {

        decrease.addEventListener(
            "click",
            function () {

                currentSize =
                    Math.max(
                        12,
                        currentSize - 1
                    );

                applyFontSize(
                    content,
                    currentSize
                );

            }
        );

    }


    if (reset) {

        reset.addEventListener(
            "click",
            function () {

                currentSize = 16;

                applyFontSize(
                    content,
                    currentSize
                );

            }
        );

    }

}


function applyFontSize(
    content,
    size
) {

    content.style.setProperty(
        "--gkgs-font-size",
        size + "px"
    );

    const paragraphs =
        content.querySelectorAll(
            "p"
        );

    paragraphs.forEach(
        function (p) {

            p.style.fontSize =
                size + "px";

        }
    );


    localStorage.setItem(
        "gkgs-font-size",
        size
    );

}


/* =========================================================
   11. TRICK / ANSWER TOGGLE
   ========================================================= */

function initializeToggles() {

    const toggleButtons =
        document.querySelectorAll(
            "[data-toggle]"
        );


    toggleButtons.forEach(
        function (button) {

            button.addEventListener(
                "click",
                function () {

                    const targetId =
                        button.getAttribute(
                            "data-toggle"
                        );

                    const target =
                        document.getElementById(
                            targetId
                        );

                    if (!target) return;


                    target.classList.toggle(
                        "hidden"
                    );


                    const hidden =
                        target.classList.contains(
                            "hidden"
                        );


                    button.innerText =
                        hidden
                            ? "देखें"
                            : "छिपाएँ";

                }
            );

        }
    );


    /*
       Automatic trick toggles
    */

    const trickTitles =
        document.querySelectorAll(
            ".trick-title"
        );


    trickTitles.forEach(
        function (title) {

            title.style.cursor =
                "pointer";

            title.addEventListener(
                "click",
                function () {

                    const parent =
                        title.parentElement;

                    if (!parent) return;

                    const children =
                        parent.querySelectorAll(
                            "p, ul, ol"
                        );

                    children.forEach(
                        function (child) {

                            child.classList.toggle(
                                "hidden"
                            );

                        }
                    );

                }
            );

        }
    );

}


/* =========================================================
   12. TABLE OF CONTENTS
   ========================================================= */

function initializeTOC() {

    const toc =
        document.querySelector(
            "#toc"
        );

    if (!toc) return;


    const headings =
        document.querySelectorAll(
            ".content-area h2, " +
            ".content-area h3"
        );


    if (!headings.length) return;


    const list =
        document.createElement("ul");


    headings.forEach(
        function (heading, index) {

            if (!heading.id) {

                heading.id =
                    "section-" +
                    (index + 1);

            }


            const item =
                document.createElement("li");


            const link =
                document.createElement("a");


            link.href =
                "#" + heading.id;

            link.textContent =
                heading.innerText;


            link.addEventListener(
                "click",
                function (event) {

                    event.preventDefault();

                    heading.scrollIntoView({
                        behavior:
                            "smooth",
                        block:
                            "start"
                    });

                }
            );


            item.appendChild(link);

            list.appendChild(item);

        }
    );


    toc.appendChild(list);

}


/* =========================================================
   13. ACTIVE SECTION NAVIGATION
   ========================================================= */

function initializeActiveNavigation() {

    const sections =
        document.querySelectorAll(
            "[id^='section-'], " +
            ".gkgs-section"
        );

    const tocLinks =
        document.querySelectorAll(
            ".toc a"
        );


    if (
        !sections.length ||
        !tocLinks.length
    ) {
        return;
    }


    const observer =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(
                    function (entry) {

                        if (
                            entry.isIntersecting
                        ) {

                            const id =
                                entry.target.id;

                            tocLinks.forEach(
                                function (link) {

                                    link.classList.remove(
                                        "active"
                                    );

                                    if (
                                        link.getAttribute(
                                            "href"
                                        ) ===
                                        "#" + id
                                    ) {

                                        link.classList.add(
                                            "active"
                                        );

                                    }

                                }
                            );

                        }

                    }
                );

            },
            {
                rootMargin:
                    "-20% 0px -70% 0px"
            }
        );


    sections.forEach(
        function (section) {

            if (section.id) {
                observer.observe(section);
            }

        }
    );

}


/* =========================================================
   14. PRINT NOTES
   ========================================================= */

function initializePrintButton() {

    const printButtons =
        document.querySelectorAll(
            "#printNotes, .print-notes"
        );


    printButtons.forEach(
        function (button) {

            button.addEventListener(
                "click",
                function () {

                    window.print();

                }
            );

        }
    );

}


/* =========================================================
   15. KEYBOARD SHORTCUTS
   ========================================================= */

function initializeKeyboardShortcuts() {

    document.addEventListener(
        "keydown",
        function (event) {

            /*
               Ctrl + K
               Search
            */

            if (
                event.ctrlKey &&
                event.key.toLowerCase() === "k"
            ) {

                event.preventDefault();

                const search =
                    document.querySelector(
                        "#searchInput"
                    );

                if (search) {

                    search.focus();

                }

            }


            /*
               Home
            */

            if (
                event.key === "Home" &&
                !isTypingTarget(event.target)
            ) {

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            }


            /*
               End
            */

            if (
                event.key === "End" &&
                !isTypingTarget(event.target)
            ) {

                window.scrollTo({
                    top:
                        document.documentElement
                            .scrollHeight,
                    behavior:
                        "smooth"
                });

            }


            /*
               D = Dark Mode
            */

            if (
                event.key.toLowerCase() === "d" &&
                !isTypingTarget(event.target)
            ) {

                const theme =
                    document.querySelector(
                        "#themeToggle"
                    );

                if (theme) {
                    theme.click();
                }

            }

        }
    );

}


function isTypingTarget(element) {

    if (!element) return false;

    const tag =
        element.tagName.toLowerCase();

    return (
        tag === "input" ||
        tag === "textarea" ||
        tag === "select" ||
        element.isContentEditable
    );

}


/* =========================================================
   16. SMOOTH SCROLL
   ========================================================= */

function initializeSmoothScroll() {

    const links =
        document.querySelectorAll(
            'a[href^="#"]'
        );


    links.forEach(
        function (link) {

            link.addEventListener(
                "click",
                function (event) {

                    const id =
                        link.getAttribute(
                            "href"
                        );

                    if (
                        !id ||
                        id === "#"
                    ) {
                        return;
                    }


                    const target =
                        document.querySelector(
                            id
                        );

                    if (!target) {
                        return;
                    }


                    event.preventDefault();


                    target.scrollIntoView({
                        behavior:
                            "smooth",
                        block:
                            "start"
                    });

                }
            );

        }
    );

}


/* =========================================================
   17. PAGE ANIMATIONS
   ========================================================= */

function initializePageAnimations() {

    const elements =
        document.querySelectorAll(
            ".content-card, " +
            ".chapter-card, " +
            ".fact-card, " +
            ".mcq, " +
            ".timeline-item, " +
            ".flashcard"
        );


    if (!elements.length) {
        return;
    }


    const observer =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(
                    function (entry) {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "fade-in"
                            );

                            observer.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },
            {
                threshold: 0.08
            }
        );


    elements.forEach(
        function (element) {

            observer.observe(
                element
            );

        }
    );

}


/* =========================================================
   18. READING POSITION SAVE
   ========================================================= */

function initializeReadingPosition() {

    const pageKey =
        "gkgs-reading-" +
        location.pathname;


    const savedPosition =
        localStorage.getItem(
            pageKey
        );


    if (savedPosition) {

        const restore =
            confirm(
                "क्या आप पिछली पढ़ी हुई जगह से जारी रखना चाहते हैं?"
            );

        if (restore) {

            window.scrollTo({
                top:
                    parseInt(
                        savedPosition
                    ),
                behavior:
                    "smooth"
            });

        }

    }


    let saveTimer;


    window.addEventListener(
        "scroll",
        function () {

            clearTimeout(
                saveTimer
            );


            saveTimer =
                setTimeout(
                    function () {

                        localStorage.setItem(
                            pageKey,
                            window.scrollY
                        );

                    },
                    500
                );

        }
    );

}


/* =========================================================
   19. COPY PROTECTION MESSAGE
   ========================================================= */

function initializeCopyProtection() {

    /*
       Intentionally not blocking
       copying. Students should be
       able to copy notes for study.
    */

}


/* =========================================================
   20. EXAM FILTER
   ========================================================= */

function initializeExamFilter() {

    const buttons =
        document.querySelectorAll(
            "[data-exam-filter]"
        );

    const cards =
        document.querySelectorAll(
            "[data-exam]"
        );


    if (
        !buttons.length ||
        !cards.length
    ) {
        return;
    }


    buttons.forEach(
        function (button) {

            button.addEventListener(
                "click",
                function () {

                    const filter =
                        button.getAttribute(
                            "data-exam-filter"
                        );


                    cards.forEach(
                        function (card) {

                            const exam =
                                card.getAttribute(
                                    "data-exam"
                                );


                            if (
                                filter === "all" ||
                                exam === filter
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
            );

        }
    );

}


/* =========================================================
   21. ANSWER REVEAL
   ========================================================= */

function initializeAnswerReveal() {

    const buttons =
        document.querySelectorAll(
            ".show-answer"
        );


    buttons.forEach(
        function (button) {

            button.addEventListener(
                "click",
                function () {

                    const answerId =
                        button.dataset.answer;

                    if (!answerId) {
                        return;
                    }


                    const answer =
                        document.getElementById(
                            answerId
                        );


                    if (!answer) {
                        return;
                    }


                    answer.classList.toggle(
                        "hidden"
                    );


                    if (
                        answer.classList.contains(
                            "hidden"
                        )
                    ) {

                        button.textContent =
                            "उत्तर देखें";

                    } else {

                        button.textContent =
                            "उत्तर छिपाएँ";

                    }

                }
            );

        }
    );

}


/* =========================================================
   22. COLLAPSIBLE CHAPTERS
   ========================================================= */

function initializeCollapsibleChapters() {

    const headers =
        document.querySelectorAll(
            "[data-collapse]"
        );


    headers.forEach(
        function (header) {

            header.addEventListener(
                "click",
                function () {

                    const targetId =
                        header.dataset.collapse;

                    const target =
                        document.getElementById(
                            targetId
                        );

                    if (!target) {
                        return;
                    }


                    target.classList.toggle(
                        "hidden"
                    );


                    header.classList.toggle(
                        "collapsed"
                    );

                }
            );

        }
    );

}


/* =========================================================
   23. BOOKMARK SYSTEM
   ========================================================= */

function initializeBookmarks() {

    const buttons =
        document.querySelectorAll(
            ".bookmark-btn"
        );


    buttons.forEach(
        function (button) {

            const section =
                button.dataset.bookmark;

            if (!section) {
                return;
            }


            const key =
                "gkgs-bookmark-" +
                section;


            if (
                localStorage.getItem(
                    key
                ) === "true"
            ) {

                button.classList.add(
                    "bookmarked"
                );

            }


            button.addEventListener(
                "click",
                function () {

                    const active =
                        button.classList.toggle(
                            "bookmarked"
                        );


                    localStorage.setItem(
                        key,
                        active
                    );


                    button.textContent =
                        active
                            ? "🔖 Saved"
                            : "🔖 Save";

                }
            );

        }
    );

}


/* =========================================================
   24. STUDY TIMER
   ========================================================= */

let studyTimerSeconds = 0;
let studyTimerInterval = null;


function startStudyTimer() {

    if (studyTimerInterval) {
        return;
    }


    studyTimerInterval =
        setInterval(
            function () {

                studyTimerSeconds++;

                updateStudyTimer();

            },
            1000
        );

}


function stopStudyTimer() {

    clearInterval(
        studyTimerInterval
    );

    studyTimerInterval =
        null;

}


function resetStudyTimer() {

    stopStudyTimer();

    studyTimerSeconds = 0;

    updateStudyTimer();

}


function updateStudyTimer() {

    const timer =
        document.querySelector(
            "#studyTimer"
        );

    if (!timer) {
        return;
    }


    const hours =
        Math.floor(
            studyTimerSeconds / 3600
        );


    const minutes =
        Math.floor(
            (studyTimerSeconds % 3600) / 60
        );


    const seconds =
        studyTimerSeconds % 60;


    timer.textContent =
        String(hours).padStart(2, "0") +
        ":" +
        String(minutes).padStart(2, "0") +
        ":" +
        String(seconds).padStart(2, "0");

}


/* =========================================================
   25. SUBJECT NAVIGATION
   ========================================================= */

function getSubjectNavigation() {

    const subjects = [

        {
            name: "इतिहास",
            file: "history.html"
        },

        {
            name: "भूगोल",
            file: "geography.html"
        },

        {
            name: "भारतीय राजव्यवस्था",
            file: "indian-polity.html"
        },

        {
            name: "भारतीय अर्थव्यवस्था",
            file: "indian-economy.html"
        },

        {
            name: "भौतिक विज्ञान",
            file: "physics.html"
        },

        {
            name: "रसायन विज्ञान",
            file: "chemistry.html"
        },

        {
            name: "जीव विज्ञान",
            file: "biology.html"
        },

        {
            name: "कंप्यूटर जागरूकता",
            file: "computer-awareness.html"
        },

        {
            name: "Static GK",
            file: "static-gk.html"
        },

        {
            name: "Current Affairs",
            file: "current-affairs.html"
        },

        {
            name: "पर्यावरण",
            file: "environment.html"
        }

    ];

    return subjects;

}


/* =========================================================
   26. CURRENT SUBJECT DETECTION
   ========================================================= */

function getCurrentSubjectIndex() {

    const currentFile =
        location.pathname
            .split("/")
            .pop();


    const subjects =
        getSubjectNavigation();


    return subjects.findIndex(
        function (subject) {

            return (
                subject.file ===
                currentFile
            );

        }
    );

}


/* =========================================================
   27. NEXT / PREVIOUS SUBJECT
   ========================================================= */

function initializeSubjectNavigation() {

    const previous =
        document.querySelector(
            "#previousSubject"
        );

    const next =
        document.querySelector(
            "#nextSubject"
        );


    const subjects =
        getSubjectNavigation();


    const index =
        getCurrentSubjectIndex();


    if (index === -1) {
        return;
    }


    if (previous) {

        if (index > 0) {

            previous.href =
                subjects[index - 1].file;

            previous.innerHTML =
                "← " +
                subjects[index - 1].name;

        } else {

            previous.style.visibility =
                "hidden";

        }

    }


    if (next) {

        if (
            index <
            subjects.length - 1
        ) {

            next.href =
                subjects[index + 1].file;

            next.innerHTML =
                subjects[index + 1].name +
                " →";

        } else {

            next.style.visibility =
                "hidden";

        }

    }

}


/* =========================================================
   28. STUDY STREAK
   ========================================================= */

function updateStudyStreak() {

    const today =
        new Date()
            .toISOString()
            .split("T")[0];


    const lastStudy =
        localStorage.getItem(
            "gkgs-last-study"
        );


    let streak =
        parseInt(
            localStorage.getItem(
                "gkgs-streak"
            )
        ) || 0;


    if (!lastStudy) {

        streak = 1;

    } else {

        const previous =
            new Date(lastStudy);

        const current =
            new Date(today);

        const difference =
            Math.floor(
                (
                    current -
                    previous
                ) /
                (
                    1000 *
                    60 *
                    60 *
                    24
                )
            );


        if (difference === 1) {

            streak++;

        } else if (
            difference > 1
        ) {

            streak = 1;

        }

    }


    localStorage.setItem(
        "gkgs-streak",
        streak
    );

    localStorage.setItem(
        "gkgs-last-study",
        today
    );


    const streakElement =
        document.querySelector(
            "#studyStreak"
        );


    if (streakElement) {

        streakElement.textContent =
            streak + " Days";

    }

}


/* =========================================================
   29. PAGE VISIT COUNTER
   ========================================================= */

function updatePageVisitCount() {

    const key =
        "gkgs-visits-" +
        location.pathname;


    let visits =
        parseInt(
            localStorage.getItem(
                key
            )
        ) || 0;


    visits++;


    localStorage.setItem(
        key,
        visits
    );


    const element =
        document.querySelector(
            "#pageVisits"
        );


    if (element) {

        element.textContent =
            visits;

    }

}


/* =========================================================
   30. AUTO INITIALIZATION
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        initializeReadingPosition();
        initializeExamFilter();
        initializeAnswerReveal();
        initializeCollapsibleChapters();
        initializeBookmarks();
        initializeSubjectNavigation();
        updateStudyStreak();
        updatePageVisitCount();

    }
);


/* =========================================================
   31. GLOBAL FUNCTIONS
   ========================================================= */

window.GKGS = {

    startTimer:
        startStudyTimer,

    stopTimer:
        stopStudyTimer,

    resetTimer:
        resetStudyTimer,

    getSubjects:
        getSubjectNavigation,

    getCurrentSubject:
        getCurrentSubjectIndex

};


/* =========================================================
   32. CONSOLE INFORMATION
   ========================================================= */

console.log(
    "%cSSC MOCK GK-GS Master Notes Loaded",
    "color:#1d4ed8;font-size:16px;font-weight:bold;"
);

console.log(
    "History → Geography → Polity → Economy → Physics → Chemistry → Biology → Computer → Static GK → Current Affairs → Environment"
);


/* =========================================================
   END OF GK-GS COMMON JAVASCRIPT
   ========================================================= */