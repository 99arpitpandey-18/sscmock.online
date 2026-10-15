/* =========================================================
   SSC GRAMMAR NOTES JS
========================================================= */


/* =========================================================
   ELEMENTS
========================================================= */

const topicLinks =
    document.querySelectorAll(".topic-link");

const revisionButtons =
    document.querySelectorAll(
        ".sidebar-revision button"
    );

const topics =
    document.querySelectorAll(".topic-section");

const progressFill =
    document.getElementById("progressFill");

const progressPercent =
    document.getElementById("progressPercent");

const completedTopics =
    document.getElementById("completedTopics");

const sidebar =
    document.getElementById("sidebar");

const menuBtn =
    document.getElementById("menuBtn");

const themeBtn =
    document.getElementById("themeBtn");

const searchInput =
    document.getElementById("searchInput");


/* =========================================================
   TOPIC NAVIGATION
========================================================= */

function openTopic(topicId){

    topics.forEach(topic => {

        topic.classList.remove(
            "active-topic"
        );

    });


    const selectedTopic =
        document.getElementById(topicId);


    if(selectedTopic){

        selectedTopic.classList.add(
            "active-topic"
        );

    }


    topicLinks.forEach(link => {

        link.classList.remove("active");

        if(
            link.dataset.topic === topicId
        ){

            link.classList.add("active");

        }

    });


    markTopicVisited(topicId);


    window.scrollTo({
        top:0,
        behavior:"smooth"
    });


    if(window.innerWidth <= 900){

        sidebar.classList.remove("open");

    }

}


/* =========================================================
   NORMAL TOPIC BUTTONS
========================================================= */

topicLinks.forEach(link => {

    link.addEventListener(
        "click",
        function(){

            openTopic(
                this.dataset.topic
            );

        }
    );

});


/* =========================================================
   QUICK REVISION BUTTONS
========================================================= */

revisionButtons.forEach(button => {

    button.addEventListener(
        "click",
        function(){

            openTopic(
                this.dataset.topic
            );

        }
    );

});


/* =========================================================
   PROGRESS TRACKING
========================================================= */

const topicIds = [

    "tenses",
    "sva",
    "articles",
    "prepositions",
    "voice",
    "narration",
    "conjunction",
    "pronouns"

];


function getVisitedTopics(){

    try{

        return JSON.parse(
            localStorage.getItem(
                "sscGrammarVisited"
            )
        ) || [];

    }
    catch(error){

        return [];

    }

}


function saveVisitedTopics(data){

    localStorage.setItem(
        "sscGrammarVisited",
        JSON.stringify(data)
    );

}


function markTopicVisited(topicId){

    if(!topicIds.includes(topicId)){
        return;
    }


    let visited =
        getVisitedTopics();


    if(!visited.includes(topicId)){

        visited.push(topicId);

        saveVisitedTopics(visited);

    }


    updateProgress();

}


function updateProgress(){

    const visited =
        getVisitedTopics();


    const completed =
        visited.filter(
            id => topicIds.includes(id)
        ).length;


    const percentage =
        Math.round(
            (completed / topicIds.length) * 100
        );


    progressFill.style.width =
        percentage + "%";


    progressPercent.textContent =
        percentage + "%";


    completedTopics.textContent =
        completed;

}


updateProgress();


/* =========================================================
   MOBILE MENU
========================================================= */

if(menuBtn){

    menuBtn.addEventListener(
        "click",
        function(){

            sidebar.classList.toggle(
                "open"
            );

        }
    );

}


/* =========================================================
   DARK MODE
========================================================= */

const savedTheme =
    localStorage.getItem(
        "grammarTheme"
    );


if(savedTheme === "dark"){

    document.body.classList.add(
        "dark"
    );

    themeBtn.textContent = "☀️";

}


themeBtn.addEventListener(
    "click",
    function(){

        document.body.classList.toggle(
            "dark"
        );


        const isDark =
            document.body.classList.contains(
                "dark"
            );


        localStorage.setItem(
            "grammarTheme",
            isDark ? "dark" : "light"
        );


        themeBtn.textContent =
            isDark ? "☀️" : "🌙";

    }
);


/* =========================================================
   SEARCH
========================================================= */

searchInput.addEventListener(
    "input",
    function(){

        const query =
            this.value
                .trim()
                .toLowerCase();


        if(!query){

            topics.forEach(
                topic => {

                    topic.classList.remove(
                        "search-hidden"
                    );

                }
            );

            return;

        }


        let firstMatch = null;


        topics.forEach(topic => {

            const text =
                topic.innerText.toLowerCase();


            if(text.includes(query)){

                topic.classList.remove(
                    "search-hidden"
                );


                if(!firstMatch){

                    firstMatch = topic;

                }

            }
            else{

                topic.classList.add(
                    "search-hidden"
                );

            }

        });


        if(firstMatch){

            topics.forEach(
                topic =>
                    topic.classList.remove(
                        "active-topic"
                    )
            );


            firstMatch.classList.add(
                "active-topic"
            );

        }

    }
);


/* =========================================================
   REVISION CHECKBOX SAVE
========================================================= */

const checkboxes =
    document.querySelectorAll(
        ".revision-checklist input"
    );


checkboxes.forEach(
    (checkbox,index) => {

        const saved =
            localStorage.getItem(
                "grammarCheck_" + index
            );


        if(saved === "true"){

            checkbox.checked = true;

        }


        checkbox.addEventListener(
            "change",
            function(){

                localStorage.setItem(
                    "grammarCheck_" + index,
                    this.checked
                );

            }
        );

    }
);


/* =========================================================
   KEYBOARD SHORTCUTS
========================================================= */

document.addEventListener(
    "keydown",
    function(event){

        /* Ctrl + K = Search */

        if(
            event.ctrlKey &&
            event.key.toLowerCase() === "k"
        ){

            event.preventDefault();

            searchInput.focus();

        }


        /* Escape = close mobile sidebar */

        if(event.key === "Escape"){

            sidebar.classList.remove(
                "open"
            );

        }

    }
);


/* =========================================================
   INITIAL TOPIC
========================================================= */

openTopic("tenses");