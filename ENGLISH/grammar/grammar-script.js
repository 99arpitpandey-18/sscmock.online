/* =========================================================
   SSC ENGLISH GRAMMAR
   COMMON JAVASCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       SCROLL TOP BUTTON
       ===================================================== */

    const scrollTopBtn = document.getElementById("scrollTopBtn");

    if (scrollTopBtn) {

        window.addEventListener("scroll", function () {

            if (window.scrollY > 350) {
                scrollTopBtn.style.display = "flex";
                scrollTopBtn.style.alignItems = "center";
                scrollTopBtn.style.justifyContent = "center";
            } else {
                scrollTopBtn.style.display = "none";
            }

        });

    }


    /* =====================================================
       SMOOTH SCROLL FOR INTERNAL LINKS
       ===================================================== */

    const internalLinks = document.querySelectorAll(
        'a[href^="#"]'
    );

    internalLinks.forEach(function (link) {

        link.addEventListener("click", function (e) {

            const targetId = this.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const target = document.querySelector(targetId);

            if (target) {

                e.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });


    /* =====================================================
       ACTIVE SIDEBAR LINK
       ===================================================== */

    const sections = document.querySelectorAll(
        ".notes-content h2[id]"
    );

    const sidebarLinks = document.querySelectorAll(
        ".notes-sidebar a[href^='#']"
    );


    function updateActiveSidebar() {

        let currentSection = "";

        sections.forEach(function (section) {

            const sectionTop =
                section.getBoundingClientRect().top;

            if (sectionTop <= 150) {
                currentSection = section.id;
            }

        });


        sidebarLinks.forEach(function (link) {

            link.style.background = "";
            link.style.color = "";

            const href =
                link.getAttribute("href");

            if (href === "#" + currentSection) {

                link.style.background = "#eff6ff";
                link.style.color = "#1d4ed8";

            }

        });

    }


    if (sections.length && sidebarLinks.length) {

        window.addEventListener(
            "scroll",
            updateActiveSidebar
        );

        updateActiveSidebar();

    }


    /* =====================================================
       MOBILE MENU
       ===================================================== */

    const mobileButton =
        document.querySelector(".mobile-menu-btn");

    const headerLinks =
        document.querySelector(".header-links");


    if (mobileButton && headerLinks) {

        mobileButton.addEventListener(
            "click",
            function () {

                if (
                    headerLinks.style.display ===
                    "flex"
                ) {

                    headerLinks.style.display =
                        "none";

                } else {

                    headerLinks.style.display =
                        "flex";

                    headerLinks.style.flexDirection =
                        "column";

                    headerLinks.style.position =
                        "absolute";

                    headerLinks.style.top =
                        "75px";

                    headerLinks.style.right =
                        "20px";

                    headerLinks.style.background =
                        "#07152f";

                    headerLinks.style.padding =
                        "12px";

                    headerLinks.style.borderRadius =
                        "10px";

                    headerLinks.style.boxShadow =
                        "0 10px 25px rgba(0,0,0,.25)";

                    headerLinks.style.zIndex =
                        "999";

                }

            }
        );

    }


    /* =====================================================
       SEARCH
       ===================================================== */

    const searchInput =
        document.querySelector(
            ".search-box input"
        );


    if (searchInput) {

        searchInput.addEventListener(
            "input",
            function () {

                const query =
                    this.value
                        .toLowerCase()
                        .trim();

                const cards =
                    document.querySelectorAll(
                        ".topic-card"
                    );


                cards.forEach(function (card) {

                    const text =
                        card.textContent
                            .toLowerCase();

                    if (
                        query === "" ||
                        text.includes(query)
                    ) {

                        card.style.display =
                            "";

                    } else {

                        card.style.display =
                            "none";

                    }

                });

            }
        );

    }


    /* =====================================================
       EXTERNAL / PAGE LINK SAFETY
       ===================================================== */

    const pageLinks =
        document.querySelectorAll(
            ".page-nav-btn"
        );


    pageLinks.forEach(function (link) {

        link.addEventListener(
            "click",
            function () {

                document.body.style.opacity =
                    "0.97";

                setTimeout(function () {

                    document.body.style.opacity =
                        "1";

                }, 150);

            }
        );

    });

});


/* =========================================================
   SCROLL TO TOP
   ========================================================= */

function scrollToTop() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================================
   MOBILE MENU FUNCTION
   ========================================================= */

function toggleMobileMenu() {

    const headerLinks =
        document.querySelector(".header-links");

    if (!headerLinks) {
        return;
    }


    if (
        headerLinks.style.display ===
        "flex"
    ) {

        headerLinks.style.display =
            "none";

    } else {

        headerLinks.style.display =
            "flex";

        headerLinks.style.flexDirection =
            "column";

        headerLinks.style.position =
            "absolute";

        headerLinks.style.top =
            "75px";

        headerLinks.style.right =
            "20px";

        headerLinks.style.background =
            "#07152f";

        headerLinks.style.padding =
            "12px";

        headerLinks.style.borderRadius =
            "10px";

        headerLinks.style.zIndex =
            "999";

    }

}


/* =========================================================
   PRINT NOTES
   ========================================================= */

function printNotes() {

    window.print();

}


/* =========================================================
   CURRENT YEAR
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const yearElements =
            document.querySelectorAll(
                ".current-year"
            );

        yearElements.forEach(
            function (element) {

                element.textContent =
                    new Date().getFullYear();

            }
        );

    }
);