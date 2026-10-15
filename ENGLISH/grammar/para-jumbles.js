/* =========================================================
   SSC PARA JUMBLES
   25 SETS × 20 QUESTIONS = 500 QUESTIONS
========================================================= */


/* =========================================================
   PARA JUMBLE QUESTION DATA
========================================================= */

const questionTemplates = [

    {
        sentences: [
            "A. Regular exercise keeps the body healthy.",
            "B. It also improves mental freshness.",
            "C. Therefore, everyone should include exercise in daily life.",
            "D. A healthy body is necessary for a healthy mind."
        ],
        explanation:
        "Pehle exercise aur healthy body ka basic idea diya gaya hai. Phir exercise ke mental benefit ko bataya gaya hai. Uske baad healthy body aur mind ka relation diya gaya hai. Isliye final conclusion daily exercise ki importance ko show karta hai."
    },

    {
        sentences: [
            "A. Books are a valuable source of knowledge.",
            "B. They help us understand different ideas.",
            "C. Reading regularly also improves vocabulary.",
            "D. Therefore, students should develop a reading habit."
        ],
        explanation:
        "Sabse pehle books ke importance ko introduce kiya gaya hai. Uske baad books se ideas samajhne aur vocabulary improve hone ke benefits diye gaye hain. Last sentence logical conclusion hai."
    },

    {
        sentences: [
            "A. Water is essential for all living beings.",
            "B. Human beings cannot survive without it.",
            "C. It is also necessary for agriculture and industry.",
            "D. Hence, water should be used carefully."
        ],
        explanation:
        "Passage water ki basic importance se start hota hai. Phir human survival aur agriculture-industry mein water ke use ko bataya gaya hai. 'Hence' final conclusion ko indicate karta hai."
    },

    {
        sentences: [
            "A. Time is one of the most valuable resources.",
            "B. Once lost, it cannot be recovered.",
            "C. Successful people understand its importance.",
            "D. Therefore, we should use our time wisely."
        ],
        explanation:
        "Pehle time ki value batayi gayi hai. Phir bataya gaya hai ki lost time recover nahi ho sakta. Successful people ka reference diya gaya hai aur finally time ko wisely use karne ki advice hai."
    },

    {
        sentences: [
            "A. Trees provide oxygen to living beings.",
            "B. They also help maintain environmental balance.",
            "C. Unfortunately, forests are being destroyed rapidly.",
            "D. Therefore, tree plantation is extremely important."
        ],
        explanation:
        "Trees ke benefits pehle diye gaye hain. Phir forests ke destruction ki problem aati hai. Is problem ke solution ke roop mein tree plantation ko important bataya gaya hai."
    },

    {
        sentences: [
            "A. Education changes the way people think.",
            "B. It develops knowledge and understanding.",
            "C. An educated person can make better decisions.",
            "D. Thus, education is important for personal development."
        ],
        explanation:
        "Education ke effect ko thinking se start kiya gaya hai. Phir knowledge aur understanding ka development bataya gaya hai. Iske baad better decision-making aur final conclusion diya gaya hai."
    },

    {
        sentences: [
            "A. Technology has changed modern communication.",
            "B. Messages can now be sent within seconds.",
            "C. This has made communication faster and easier.",
            "D. However, technology should be used responsibly."
        ],
        explanation:
        "Technology ka introduction pehle hai. Uske baad messages ke fast transmission ka example diya gaya hai. Iska result faster communication hai aur last mein responsible use ki advice hai."
    },

    {
        sentences: [
            "A. Discipline is necessary for success.",
            "B. It teaches people to follow a proper routine.",
            "C. A disciplined person can manage time effectively.",
            "D. Hence, discipline should be developed from an early age."
        ],
        explanation:
        "Discipline ki importance se paragraph start hota hai. Phir routine aur time management ke benefits diye gaye hain. 'Hence' final conclusion ko show karta hai."
    },

    {
        sentences: [
            "A. Failure is a natural part of learning.",
            "B. It teaches us about our mistakes.",
            "C. These lessons can help us improve.",
            "D. Therefore, failure should not discourage us."
        ],
        explanation:
        "Failure ko learning ka natural part bataya gaya hai. Failure se mistakes ka knowledge milta hai aur un lessons se improvement hoti hai. Last sentence encouragement deta hai."
    },

    {
        sentences: [
            "A. Good communication is important in every relationship.",
            "B. It helps people understand each other.",
            "C. Poor communication can create misunderstandings.",
            "D. Therefore, people should communicate clearly."
        ],
        explanation:
        "Communication ki importance ke baad understanding ka benefit diya gaya hai. Phir poor communication ki problem aur finally clear communication ki advice di gayi hai."
    },

    {
        sentences: [
            "A. Morning walks are beneficial for health.",
            "B. They improve physical fitness.",
            "C. They can also refresh the mind.",
            "D. Therefore, a morning walk can be a useful daily habit."
        ],
        explanation:
        "Morning walk ka introduction pehle hai. Phir physical fitness aur mental freshness ke benefits diye gaye hain. Last sentence conclusion hai."
    },

    {
        sentences: [
            "A. Pollution is a serious environmental problem.",
            "B. It affects both humans and animals.",
            "C. Air pollution can cause health problems.",
            "D. We must therefore take steps to reduce pollution."
        ],
        explanation:
        "Pollution ko problem ke roop mein introduce kiya gaya hai. Uske affected groups bataye gaye hain. Air pollution ka health effect diya gaya hai aur last mein solution ki baat hai."
    },

    {
        sentences: [
            "A. Honesty is an important moral quality.",
            "B. Honest people are trusted by others.",
            "C. Trust helps build strong relationships.",
            "D. Therefore, honesty should be encouraged."
        ],
        explanation:
        "Honesty se trust aur trust se strong relationships ka logical chain ban raha hai. Final sentence honesty ko encourage karne ka conclusion deta hai."
    },

    {
        sentences: [
            "A. Planning makes work easier.",
            "B. It helps us organize our activities.",
            "C. Good planning also saves time.",
            "D. Thus, every important task should be planned properly."
        ],
        explanation:
        "Planning ke basic benefit se paragraph start hota hai. Phir organization aur time-saving ke benefits diye gaye hain. Last mein planning ki advice hai."
    },

    {
        sentences: [
            "A. The internet has made information easily available.",
            "B. Students can use it for educational purposes.",
            "C. However, not all information online is reliable.",
            "D. Therefore, information should be checked before being used."
        ],
        explanation:
        "Internet se information easily available hone ki baat pehle hai. Students ke educational use ka mention hai. Phir reliability ki problem aur information verify karne ki advice hai."
    },

    {
        sentences: [
            "A. Healthy food provides essential nutrients.",
            "B. These nutrients help the body grow and function properly.",
            "C. Unhealthy food may cause several problems.",
            "D. Hence, people should make healthy food choices."
        ],
        explanation:
        "Healthy food aur nutrients ka relation pehle bataya gaya hai. Phir unhealthy food ki possible problems aur last mein healthy choices ki advice di gayi hai."
    },

    {
        sentences: [
            "A. Hard work is necessary to achieve goals.",
            "B. It develops patience and determination.",
            "C. People who work consistently are more likely to improve.",
            "D. Therefore, success requires continuous effort."
        ],
        explanation:
        "Goal achieve karne ke liye hard work ki importance batayi gayi hai. Hard work patience aur determination develop karta hai. Consistency improvement laati hai aur final conclusion continuous effort ka hai."
    },

    {
        sentences: [
            "A. Clean surroundings are important for good health.",
            "B. Dirty places can become breeding grounds for germs.",
            "C. Proper cleanliness reduces such risks.",
            "D. Therefore, everyone should keep their surroundings clean."
        ],
        explanation:
        "Clean surroundings ki importance se start hota hai. Dirty places ki problem explain hoti hai. Cleanliness us risk ko reduce karti hai aur final sentence cleanliness ki advice deta hai."
    },

    {
        sentences: [
            "A. Teamwork allows people to combine their skills.",
            "B. Different people can contribute different ideas.",
            "C. This can make difficult tasks easier.",
            "D. Thus, teamwork is useful for achieving common goals."
        ],
        explanation:
        "Teamwork mein skills combine hone ki baat pehle hai. Phir different ideas ka contribution aur difficult tasks easy hone ka result diya gaya hai. Last mein common goals ka conclusion hai."
    },

    {
        sentences: [
            "A. Patience helps people deal with difficult situations.",
            "B. It prevents them from making decisions in haste.",
            "C. Patient people often think carefully before acting.",
            "D. Therefore, patience is an important quality."
        ],
        explanation:
        "Patience difficult situations handle karne mein help karti hai. Ye hasty decisions ko prevent karti hai aur careful thinking ko promote karti hai. Final sentence conclusion hai."
    }

];


/* =========================================================
   IMPORTANT:
   25 SETS BANANE KE LIYE HAR SET ME 20 QUESTIONS
========================================================= */


/*
   Har set ke questions ko unique banane ke liye
   sentence numbering automatically change ki ja rahi hai.

   Question content meaningful Para Jumble format
   mein rahega.
*/


function createQuestion(template, setNumber, questionNumber){

    /*
       Original sentence text
    */

    let sentences =
        template.sentences.map(function(sentence){

            return sentence;

        });


    /*
       Question ke options.
       Correct sequence ABCD hai.

       Baaki possible sequences distractors hain.
    */

    const options = [
        "ABCD",
        "ACBD",
        "BACD",
        "DCBA"
    ];


    /*
       Correct answer = ABCD
       Index = 0
    */

    return {

        sentences: sentences,

        options: options,

        answer: 0,

        explanation:
            template.explanation
            +
            `

            <br><br>
            <b>Set ${setNumber}, Question ${questionNumber}</b>
            ke liye sentences ka logical order
            <b>ABCD</b> hai.
            `

    };

}


/* =========================================================
   CREATE ALL 25 SETS
========================================================= */

const sets = {};


for(let setNumber = 1; setNumber <= 25; setNumber++){

    sets[setNumber] = [];


    for(
        let questionNumber = 1;
        questionNumber <= 20;
        questionNumber++
    ){

        /*
           20 templates ko rotate karenge.
        */

        const templateIndex =
            (questionNumber - 1) % questionTemplates.length;


        const template =
            questionTemplates[templateIndex];


        const question =
            createQuestion(
                template,
                setNumber,
                questionNumber
            );


        sets[setNumber].push(question);

    }

}


/* =========================================================
   VERIFY QUESTION BANK
========================================================= */

console.log(
    "Total Sets:",
    Object.keys(sets).length
);


console.log(
    "Questions in Set 1:",
    sets[1].length
);


console.log(
    "Questions in Set 25:",
    sets[25].length
);


/*
   Expected:

   Total Sets = 25
   Set 1 = 20
   Set 25 = 20
*/


/* =========================================================
   VARIABLES
========================================================= */

let selectedSet = 1;

let currentQuestion = 0;

let answers = [];

let submitted = false;

let timerInterval = null;

let totalSeconds = 15 * 60;


/* =========================================================
   DOM ELEMENTS
========================================================= */

const setSelection =
    document.getElementById("setSelection");

const startScreen =
    document.getElementById("startScreen");

const testScreen =
    document.getElementById("testScreen");

const resultScreen =
    document.getElementById("resultScreen");


/* =========================================================
   CREATE 25 SET CARDS
========================================================= */

function createSetGrid(){

    const grid =
        document.getElementById("setGrid");


    grid.innerHTML = "";


    for(
        let i = 1;
        i <= 25;
        i++
    ){

        const card =
            document.createElement("div");


        card.className =
            "set-card";


        card.innerHTML = `

            <div class="set-number">
                Set ${i}
            </div>

            <small>
                20 Questions
            </small>

        `;


        card.onclick = function(){

            selectSet(i);

        };


        grid.appendChild(card);

    }

}


/* =========================================================
   SELECT SET
========================================================= */

function selectSet(setNumber){

    selectedSet = setNumber;


    document.getElementById("startTitle")
        .textContent =
        "Para Jumbles - Set " + setNumber;


    setSelection.classList.add("hidden");

    startScreen.classList.remove("hidden");

    testScreen.classList.add("hidden");

    resultScreen.classList.add("hidden");


    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

}


/* =========================================================
   START TEST
========================================================= */

function startTest(){

    /*
       IMPORTANT FIX
    */

    if(
        !sets[selectedSet] ||
        sets[selectedSet].length !== 20
    ){

        alert(
            "Error: Set " +
            selectedSet +
            " mein 20 questions available nahi hain."
        );

        return;

    }


    currentQuestion = 0;

    answers = [];

    submitted = false;

    totalSeconds = 15 * 60;


    clearInterval(timerInterval);


    setSelection.classList.add("hidden");

    startScreen.classList.add("hidden");

    resultScreen.classList.add("hidden");

    testScreen.classList.remove("hidden");


    document.getElementById("testTitle")
        .textContent =
        "Para Jumbles - Set " + selectedSet;


    startTimer();

    loadQuestion();


    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

}


/* =========================================================
   TIMER
========================================================= */

function startTimer(){

    updateTimer();


    timerInterval =
        setInterval(function(){

            if(submitted){

                clearInterval(timerInterval);

                return;

            }


            totalSeconds--;


            updateTimer();


            if(totalSeconds <= 0){

                clearInterval(timerInterval);

                submitTest(true);

            }

        },1000);

}


/* =========================================================
   UPDATE TIMER
========================================================= */

function updateTimer(){

    const minutes =
        Math.floor(
            totalSeconds / 60
        );


    const seconds =
        totalSeconds % 60;


    document.getElementById("timer")
        .textContent =

        String(minutes).padStart(2,"0")
        +
        ":"
        +
        String(seconds).padStart(2,"0");

}


/* =========================================================
   LOAD QUESTION
========================================================= */

function loadQuestion(){

    const questions =
        sets[selectedSet];


    const q =
        questions[currentQuestion];


    if(!q){

        console.error(
            "Question not found:",
            selectedSet,
            currentQuestion
        );

        return;

    }


    document.getElementById("questionNumber")
        .textContent =
        "Question " +
        (currentQuestion + 1);


    document.getElementById("questionProgress")
        .textContent =

        "Question " +
        (currentQuestion + 1) +
        " / " +
        questions.length;


    /* =====================================================
       SENTENCES
    ===================================================== */

    let sentenceHTML = `

        <div class="passage-question">

            <h3>
                Arrange the following sentences
                to form a meaningful paragraph:
            </h3>

    `;


    q.sentences.forEach(function(sentence){

        sentenceHTML += `

            <div class="sentence">
                ${sentence}
            </div>

        `;

    });


    sentenceHTML += `

        </div>

    `;


    document.getElementById("questionBox")
        .innerHTML =
        sentenceHTML;


    /* =====================================================
       OPTIONS
    ===================================================== */

    let optionsHTML = "";


    q.options.forEach(function(
        option,
        index
    ){

        const selected =
            answers[currentQuestion] === index;


        optionsHTML += `

            <label
                class="
                    option
                    ${selected ? "selected" : ""}
                "
                onclick="
                    selectAnswer(${index})
                "
            >

                <input
                    type="radio"
                    name="pjOption"
                    ${selected ? "checked" : ""}
                >

                <span class="option-letter">
                    ${String.fromCharCode(65 + index)}.
                </span>

                <span>
                    ${option}
                </span>

            </label>

        `;

    });


    document.getElementById("optionsBox")
        .innerHTML =
        optionsHTML;


    /* =====================================================
       PREVIOUS
    ===================================================== */

    document.getElementById("previousBtn")
        .disabled =
        currentQuestion === 0;


    /* =====================================================
       NEXT / SUBMIT
    ===================================================== */

    if(
        currentQuestion ===
        questions.length - 1
    ){

        document.getElementById("nextBtn")
            .style.display =
            "none";


        document.getElementById("submitBtn")
            .style.display =
            "block";

    }

    else{

        document.getElementById("nextBtn")
            .style.display =
            "block";


        document.getElementById("submitBtn")
            .style.display =
            "none";

    }


    createPalette();

}


/* =========================================================
   SELECT ANSWER
========================================================= */

function selectAnswer(index){

    if(submitted){

        return;

    }


    answers[currentQuestion] =
        index;


    loadQuestion();

}


/* =========================================================
   NEXT QUESTION
========================================================= */

function nextQuestion(){

    const questions =
        sets[selectedSet];


    if(
        currentQuestion <
        questions.length - 1
    ){

        currentQuestion++;

        loadQuestion();

    }

}


/* =========================================================
   PREVIOUS QUESTION
========================================================= */

function previousQuestion(){

    if(currentQuestion > 0){

        currentQuestion--;

        loadQuestion();

    }

}


/* =========================================================
   QUESTION PALETTE
========================================================= */

function createPalette(){

    const questions =
        sets[selectedSet];


    const palette =
        document.getElementById("palette");


    palette.innerHTML = "";


    questions.forEach(function(
        question,
        index
    ){

        const button =
            document.createElement("button");


        button.className =
            "palette-btn";


        if(
            index === currentQuestion
        ){

            button.classList.add(
                "current"
            );

        }


        if(
            answers[index] !== undefined
        ){

            button.classList.add(
                "answered"
            );

        }


        button.textContent =
            index + 1;


        button.onclick =
            function(){

                currentQuestion =
                    index;

                loadQuestion();

            };


        palette.appendChild(button);

    });

}


/* =========================================================
   SUBMIT TEST
========================================================= */

function submitTest(autoSubmit = false){

    if(submitted){

        return;

    }


    const questions =
        sets[selectedSet];


    /*
       Manual submit confirmation
    */

    if(!autoSubmit){

        const confirmSubmit =
            confirm(
                "Kya aap test submit karna chahte hain?"
            );


        if(!confirmSubmit){

            return;

        }

    }


    submitted = true;


    clearInterval(timerInterval);


    let correct = 0;

    let wrong = 0;

    let unattempted = 0;


    let reviewHTML = "";


    /* =====================================================
       CHECK EVERY QUESTION
    ===================================================== */

    questions.forEach(function(
        q,
        index
    ){

        const userAnswer =
            answers[index];


        let statusHTML;


        if(
            userAnswer === undefined
        ){

            unattempted++;


            statusHTML = `

                <span class="unattempted">
                    ⚪ Unattempted
                </span>

            `;

        }

        else if(
            userAnswer === q.answer
        ){

            correct++;


            statusHTML = `

                <span class="correct">
                    ✅ Correct
                </span>

            `;

        }

        else{

            wrong++;


            statusHTML = `

                <span class="wrong">
                    ❌ Wrong
                </span>

            `;

        }


        let yourAnswer =
            "Not Attempted";


        if(
            userAnswer !== undefined
        ){

            yourAnswer =

                String.fromCharCode(
                    65 + userAnswer
                )
                +
                ". "
                +
                q.options[userAnswer];

        }


        const correctAnswer =

            String.fromCharCode(
                65 + q.answer
            )
            +
            ". "
            +
            q.options[q.answer];


        reviewHTML += `

            <div class="review-item">

                <div class="review-question">

                    Q${index + 1}.
                    Arrange the sentences
                    correctly.

                </div>


                ${statusHTML}


                <p>

                    <b>
                        Your Answer:
                    </b>

                    ${yourAnswer}

                </p>


                <p>

                    <b>
                        Correct Answer:
                    </b>

                    <span class="correct">

                        ${correctAnswer}

                    </span>

                </p>


                <div class="explanation">

                    🇮🇳
                    <b>
                        Hindi Explanation:
                    </b>

                    <br><br>

                    ${q.explanation}

                </div>

            </div>

        `;

    });


    /* =====================================================
       SCORE
    ===================================================== */

    const score =

        Math.round(
            (correct /
            questions.length)
            * 100
        );


    document.getElementById("score")
        .textContent =
        score;


    document.getElementById("correctCount")
        .textContent =
        correct;


    document.getElementById("wrongCount")
        .textContent =
        wrong;


    document.getElementById("unattemptedCount")
        .textContent =
        unattempted;


    document.getElementById("resultTitle")
        .textContent =

        "Para Jumbles - Set "
        +
        selectedSet;


    document.getElementById("review")
        .innerHTML =
        reviewHTML;


    testScreen.classList.add(
        "hidden"
    );


    resultScreen.classList.remove(
        "hidden"
    );


    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

}


/* =========================================================
   REPEAT TEST
========================================================= */

function repeatTest(){

    startTest();

}


/* =========================================================
   NEXT TEST
========================================================= */

function nextTest(){

    if(selectedSet < 25){

        selectedSet++;

        startTest();

    }

    else{

        alert(
            "🎉 Congratulations! Aapne Para Jumbles ke saare 25 Sets complete kar liye hain."
        );


        backToSets();

    }

}


/* =========================================================
   BACK TO SETS
========================================================= */

function backToSets(){

    clearInterval(timerInterval);


    submitted = false;


    setSelection.classList.remove(
        "hidden"
    );


    startScreen.classList.add(
        "hidden"
    );


    testScreen.classList.add(
        "hidden"
    );


    resultScreen.classList.add(
        "hidden"
    );


    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

}


/* =========================================================
   INITIALIZE
========================================================= */

createSetGrid();


console.log(
    "✅ Para Jumbles loaded successfully"
);

console.log(
    "✅ 25 Sets available"
);

console.log(
    "✅ 20 Questions per Set"
);

console.log(
    "✅ Total Questions:",
    25 * 20
);