document.addEventListener("DOMContentLoaded", () => {

    const searchInput =
        document.getElementById("chapterSearch");

    const clearButton =
        document.getElementById("clearSearch");

    const status =
        document.getElementById("searchStatus");

    const grid =
        document.getElementById("chapterGrid");

    const cards =
        document.querySelectorAll(".chapter-card");

    const count =
        document.getElementById("chapterCount");

    const noResult =
        document.getElementById("noResult");

    const topButton =
        document.getElementById("topButton");


    /* ==========================================
       INITIAL COUNT
    ========================================== */

    count.textContent = cards.length;


    /* ==========================================
       SEARCH FUNCTION
    ========================================== */

    function searchChapters() {

        const query =
            searchInput.value
                .toLowerCase()
                .trim();


        let visibleCards = 0;


        cards.forEach(card => {

            const searchData =
                card.dataset.search.toLowerCase();


            if (
                query === "" ||
                searchData.includes(query)
            ) {

                card.classList.remove("hidden");

                visibleCards++;

            } else {

                card.classList.add("hidden");

            }

        });


        /* Update count */

        count.textContent = visibleCards;


        /* Empty search */

        if (query === "") {

            clearButton.style.display = "none";

            status.textContent = "";

            grid.style.display = "grid";

            noResult.style.display = "none";

            return;
        }


        /* Active search */

        clearButton.style.display = "grid";


        status.textContent =
            visibleCards +
            " chapter" +
            (visibleCards !== 1 ? "s" : "") +
            " found";


        /* No result */

        if (visibleCards === 0) {

            grid.style.display = "none";

            noResult.style.display = "block";

        } else {

            grid.style.display = "grid";

            noResult.style.display = "none";

        }

    }


    /* ==========================================
       INPUT EVENT
    ========================================== */

    searchInput.addEventListener(
        "input",
        searchChapters
    );


    /* ==========================================
       CLEAR SEARCH
    ========================================== */

    clearButton.addEventListener(
        "click",
        () => {

            searchInput.value = "";

            searchChapters();

            searchInput.focus();

        }
    );


    /* ==========================================
       BACK TO TOP
    ========================================== */

    window.addEventListener(
        "scroll",
        () => {

            if (window.scrollY > 350) {

                topButton.classList.add("show");

            } else {

                topButton.classList.remove("show");

            }

        }
    );


    topButton.addEventListener(
        "click",
        () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );


    /* ==========================================
       "/" KEY = SEARCH
    ========================================== */

    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "/" &&
                document.activeElement !== searchInput
            ) {

                event.preventDefault();

                searchInput.focus();

            }

        }
    );


    /* ==========================================
       ESC = CLEAR SEARCH
    ========================================== */

    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Escape" &&
                document.activeElement === searchInput
            ) {

                searchInput.value = "";

                searchChapters();

            }

        }
    );


    /* ==========================================
       CARD CLICK
       Temporary placeholder
    ========================================== */

    cards.forEach(card => {

        card.addEventListener(
            "click",
            event => {

                /*
                    अभी सभी cards का href "#"
                    है।

                    जब Chapter pages बनेंगे,
                    तब हम केवल href बदलेंगे।
                */

                if (card.getAttribute("href") === "#") {

                    event.preventDefault();

                    card.style.transform =
                        "translateY(-8px) rotate(-0.5deg)";

                    setTimeout(() => {

                        card.style.transform = "";

                    }, 220);

                }

            }
        );

    });

});
document.addEventListener("DOMContentLoaded", () => {


    /* ==========================================
       BACK TO TOP
    ========================================== */

    const topButton =
        document.getElementById("topButton");


    window.addEventListener(
        "scroll",
        () => {

            if (window.scrollY > 400) {

                topButton.classList.add("show");

            } else {

                topButton.classList.remove("show");

            }

        }
    );


    topButton.addEventListener(
        "click",
        () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        }
    );


    /* ==========================================
       QUICK NAVIGATION
    ========================================== */

    const links =
        document.querySelectorAll(
            ".quick-links a"
        );


    links.forEach(link => {

        link.addEventListener(
            "click",
            function(event) {

                const targetID =
                    this.getAttribute("href");


                if (
                    targetID &&
                    targetID.startsWith("#")
                ) {

                    event.preventDefault();


                    const target =
                        document.querySelector(
                            targetID
                        );


                    if (target) {

                        target.scrollIntoView({

                            behavior: "smooth",

                            block: "start"

                        });

                    }

                }

            }
        );

    });


    /* ==========================================
       KEYBOARD HOME
       Press H → Formula Index
    ========================================== */

    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key.toLowerCase() === "h" &&
                event.target.tagName !== "INPUT"
            ) {

                window.location.href =
                    "math-formula-index.html";

            }

        }
    );


    /* ==========================================
       FORMULA CARD ENTRANCE ANIMATION
    ========================================== */

    const cards =
        document.querySelectorAll(
            ".formula-card, .info-card"
        );


    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.style.opacity = "1";

                        entry.target.style.transform =
                            "translateY(0)";

                    }

                });

            },
            {
                threshold: 0.08
            }
        );


    cards.forEach(card => {

        card.style.opacity = "0";

        card.style.transform =
            "translateY(12px)";

        card.style.transition =
            "opacity 0.45s ease, transform 0.45s ease";

        observer.observe(card);

    });

});