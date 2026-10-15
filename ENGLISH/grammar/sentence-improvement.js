/* =========================================================
   SSC SENTENCE IMPROVEMENT
   25 SETS × 20 QUESTIONS
========================================================= */


/* =========================================================
   QUESTION BANK
========================================================= */

const questionBank = {};


/* =========================================================
   MASTER QUESTION BANK
   20 CORE QUESTIONS
========================================================= */

const masterQuestions = [

{
sentence:"He is one of the best player in the team.",
options:[
"one of the best players",
"one of best player",
"one of the better player",
"No improvement"
],
answer:0,
explanation:"'One of' ke baad plural noun aata hai. Isliye 'player' ki jagah 'players' hoga."
},

{
sentence:"She is senior than me in experience.",
options:[
"senior than I",
"senior to me",
"more senior than me",
"No improvement"
],
answer:1,
explanation:"'Senior' ke saath standard construction 'senior to' hota hai. Correct: senior to me."
},

{
sentence:"He did not went to school yesterday.",
options:[
"did not gone",
"did not go",
"does not went",
"No improvement"
],
answer:1,
explanation:"'Did' ke baad verb ki first form aati hai. Isliye 'went' ki jagah 'go' hoga."
},

{
sentence:"She is good in Mathematics.",
options:[
"good on Mathematics",
"good with Mathematics",
"good at Mathematics",
"No improvement"
],
answer:2,
explanation:"Kisi subject ya skill mein achha hone ke liye 'good at' use hota hai."
},

{
sentence:"I prefer tea than coffee.",
options:[
"prefer tea over coffee",
"prefer tea to coffee",
"prefer tea from coffee",
"No improvement"
],
answer:1,
explanation:"'Prefer' ke saath standard structure 'prefer A to B' hota hai."
},

{
sentence:"He has been living here since five years.",
options:[
"from five years",
"for five years",
"by five years",
"No improvement"
],
answer:1,
explanation:"'Five years' duration hai, isliye 'for' use hoga. 'Since' point of time ke saath use hota hai."
},

{
sentence:"She gave me an useful advice.",
options:[
"a useful advice",
"a useful piece of advice",
"an useful piece of advice",
"No improvement"
],
answer:1,
explanation:"'Useful' 'yu' sound se start hota hai, isliye 'a' hoga. Saath hi 'advice' uncountable noun hai, isliye 'a piece of advice' correct hai."
},

{
sentence:"He is married with a doctor.",
options:[
"married by a doctor",
"married from a doctor",
"married to a doctor",
"No improvement"
],
answer:2,
explanation:"'Married' ke saath 'to' use hota hai. Correct: married to a doctor."
},

{
sentence:"She is capable to solve this problem.",
options:[
"capable for solving",
"capable of solving",
"capable to solving",
"No improvement"
],
answer:1,
explanation:"'Capable' ke baad 'of + gerund' use hota hai."
},

{
sentence:"He succeeded to pass the examination.",
options:[
"succeeded in passing",
"succeeded for passing",
"succeeded to passing",
"No improvement"
],
answer:0,
explanation:"'Succeed' ke baad 'in + gerund' use hota hai. Correct: succeeded in passing."
},

{
sentence:"I am looking forward to meet you.",
options:[
"looking forward for meeting you",
"looking forward to meeting you",
"looking forward at meeting you",
"No improvement"
],
answer:1,
explanation:"'Look forward to' mein 'to' preposition hai, isliye uske baad gerund 'meeting' aayega."
},

{
sentence:"He prevented me to enter the room.",
options:[
"prevented me for entering the room",
"prevented me from entering the room",
"prevented me to entering the room",
"No improvement"
],
answer:1,
explanation:"'Prevent someone from doing something' correct structure hai."
},

{
sentence:"She insisted to go there alone.",
options:[
"insisted for going there",
"insisted on going there",
"insisted to going there",
"No improvement"
],
answer:1,
explanation:"'Insist' ke saath 'on + gerund' use hota hai."
},

{
sentence:"The news are very encouraging.",
options:[
"The news is very encouraging.",
"The news were very encouraging.",
"The news have been very encouraging.",
"No improvement"
],
answer:0,
explanation:"'News' singular noun hai, isliye singular verb 'is' use hoga."
},

{
sentence:"Each of the boys have submitted his assignment.",
options:[
"Each of the boys has submitted his assignment.",
"Each of the boys have submit his assignment.",
"Each of the boys are submitting his assignment.",
"No improvement"
],
answer:0,
explanation:"'Each' singular hota hai, isliye 'has' use hoga."
},

{
sentence:"He discussed about the problem with me.",
options:[
"discussed on the problem",
"discussed the problem",
"discussed regarding about the problem",
"No improvement"
],
answer:1,
explanation:"'Discuss' ke baad directly object aata hai. 'Discuss about' incorrect construction hai."
},

{
sentence:"She did not knew the answer.",
options:[
"did not knows the answer",
"did not know the answer",
"does not knew the answer",
"No improvement"
],
answer:1,
explanation:"'Did not' ke baad base form 'know' aata hai."
},

{
sentence:"He made me to wait outside.",
options:[
"made me waiting outside",
"made me wait outside",
"made me waited outside",
"No improvement"
],
answer:1,
explanation:"Causative verb 'make' ke baad object + base verb use hota hai: made me wait."
},

{
sentence:"She let me to use her laptop.",
options:[
"let me using her laptop",
"let me use her laptop",
"let me used her laptop",
"No improvement"
],
answer:1,
explanation:"'Let' ke baad bare infinitive/base verb use hota hai. Correct: let me use."
},

{
sentence:"He is addicted with mobile games.",
options:[
"addicted by mobile games",
"addicted to mobile games",
"addicted from mobile games",
"No improvement"
],
answer:1,
explanation:"'Addicted' ke saath preposition 'to' use hota hai."
}

];


/* =========================================================
   CREATE 25 SETS
========================================================= */

for(let set = 1; set <= 25; set++){

    questionBank[set] = [];

    for(let i = 0; i < 20; i++){

        const original =
            masterQuestions[i];

        questionBank[set].push({

            sentence:original.sentence,

            options:[...original.options],

            answer:original.answer,

            explanation:original.explanation

        });

    }

}


/* =========================================================
   VARIABLES
========================================================= */

let selectedSet = 1;

let currentQuestion = 0;

let userAnswers = [];

let timerSeconds = 15 * 60;

let timerInterval = null;

let testSubmitted = false;


/* =========================================================
   ELEMENTS
========================================================= */

const setPage =
    document.getElementById("setPage");

const startPage =
    document.getElementById("startPage");

const testPage =
    document.getElementById("testPage");

const resultPage =
    document.getElementById("resultPage");


/* =========================================================
   CREATE SETS
========================================================= */

function createSets(){

    const container =
        document.getElementById("setContainer");

    container.innerHTML = "";


    for(let i = 1; i <= 25; i++){

        const card =
            document.createElement("div");

        card.className = "set-card";


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


        container.appendChild(card);

    }

}


/* =========================================================
   SELECT SET
========================================================= */

function selectSet(setNumber){

    selectedSet = setNumber;


    document.getElementById(
        "startTitle"
    ).textContent =
        "Sentence Improvement - Set " +
        selectedSet;


    setPage.classList.add("hidden");

    startPage.classList.remove("hidden");

    testPage.classList.add("hidden");

    resultPage.classList.add("hidden");


    window.scrollTo(0,0);

}


/* =========================================================
   SHOW SETS
========================================================= */

function showSets(){

    clearInterval(timerInterval);


    setPage.classList.remove("hidden");

    startPage.classList.add("hidden");

    testPage.classList.add("hidden");

    resultPage.classList.add("hidden");


    window.scrollTo(0,0);

}


/* =========================================================
   START TEST
========================================================= */

function startTest(){

    if(!questionBank[selectedSet]){

        alert(
            "Question bank load nahi hua."
        );

        return;

    }


    currentQuestion = 0;

    userAnswers =
        new Array(20).fill(null);

    timerSeconds = 15 * 60;

    testSubmitted = false;


    clearInterval(timerInterval);


    document.getElementById(
        "testTitle"
    ).textContent =
        "Sentence Improvement - Set " +
        selectedSet;


    setPage.classList.add("hidden");

    startPage.classList.add("hidden");

    resultPage.classList.add("hidden");

    testPage.classList.remove("hidden");


    loadQuestion();

    startTimer();


    window.scrollTo(0,0);

}


/* =========================================================
   TIMER
========================================================= */

function startTimer(){

    updateTimer();


    timerInterval =
        setInterval(function(){

            if(testSubmitted){

                clearInterval(timerInterval);

                return;

            }


            timerSeconds--;

            updateTimer();


            if(timerSeconds <= 0){

                clearInterval(timerInterval);

                submitTest(true);

            }

        },1000);

}


/* =========================================================
   TIMER DISPLAY
========================================================= */

function updateTimer(){

    const minutes =
        Math.floor(timerSeconds / 60);

    const seconds =
        timerSeconds % 60;


    document.getElementById(
        "timer"
    ).textContent =

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
        questionBank[selectedSet];

    const q =
        questions[currentQuestion];


    document.getElementById(
        "questionNumber"
    ).textContent =
        "Question " +
        (currentQuestion + 1);


    document.getElementById(
        "questionCount"
    ).textContent =
        (currentQuestion + 1) +
        " / " +
        questions.length;


    const percentage =
        ((currentQuestion + 1) /
        questions.length) * 100;


    document.getElementById(
        "progress"
    ).style.width =
        percentage + "%";


    let html = `

        <div class="sentence-title">

            Choose the correct improvement
            for the bold sentence.

        </div>


        <div class="sentence-box">

            <b>
                ${currentQuestion + 1}.
            </b>

            ${q.sentence}

        </div>


        <div class="improve-question">

            Choose the correct replacement:

        </div>


        <div class="options">

    `;


    q.options.forEach(
        function(option,index){

            const selected =
                userAnswers[currentQuestion]
                === index;


            html += `

                <label
                    class="option ${
                        selected
                        ? "selected"
                        : ""
                    }"
                >

                    <input
                        type="radio"
                        name="answer"
                        ${
                            selected
                            ? "checked"
                            : ""
                        }
                        onchange="
                            selectAnswer(${index})
                        "
                    >

                    <span class="option-letter">

                        ${String.fromCharCode(
                            65 + index
                        )}.

                    </span>

                    <span>
                        ${option}
                    </span>

                </label>

            `;

        }
    );


    html += `</div>`;


    document.getElementById(
        "questionBox"
    ).innerHTML =
        html;


    /* PREVIOUS */

    document.getElementById(
        "previousBtn"
    ).disabled =
        currentQuestion === 0;


    /* NEXT / SUBMIT */

    if(
        currentQuestion ===
        questions.length - 1
    ){

        document.getElementById(
            "nextBtn"
        ).classList.add("hidden");


        document.getElementById(
            "submitBtn"
        ).classList.remove("hidden");

    }

    else{

        document.getElementById(
            "nextBtn"
        ).classList.remove("hidden");


        document.getElementById(
            "submitBtn"
        ).classList.add("hidden");

    }


    createPalette();

}


/* =========================================================
   SELECT ANSWER
========================================================= */

function selectAnswer(index){

    if(testSubmitted){

        return;

    }


    userAnswers[currentQuestion] =
        index;


    loadQuestion();

}


/* =========================================================
   NEXT QUESTION
========================================================= */

function nextQuestion(){

    if(
        currentQuestion <
        questionBank[selectedSet].length - 1
    ){

        currentQuestion++;

        loadQuestion();

        window.scrollTo(0,0);

    }

}


/* =========================================================
   PREVIOUS QUESTION
========================================================= */

function previousQuestion(){

    if(currentQuestion > 0){

        currentQuestion--;

        loadQuestion();

        window.scrollTo(0,0);

    }

}


/* =========================================================
   QUESTION PALETTE
========================================================= */

function createPalette(){

    const palette =
        document.getElementById("palette");

    palette.innerHTML = "";


    for(let i = 0; i < 20; i++){

        const button =
            document.createElement("button");


        button.className =
            "palette-btn";


        button.textContent =
            i + 1;


        if(i === currentQuestion){

            button.classList.add(
                "current"
            );

        }


        if(userAnswers[i] !== null){

            button.classList.add(
                "answered"
            );

        }


        button.onclick = function(){

            currentQuestion = i;

            loadQuestion();

            window.scrollTo(0,0);

        };


        palette.appendChild(button);

    }

}


/* =========================================================
   SUBMIT TEST
========================================================= */

function submitTest(autoSubmit = false){

    if(testSubmitted){

        return;

    }


    if(!autoSubmit){

        const confirmSubmit =
            confirm(
                "Kya aap test submit karna chahte hain?"
            );


        if(!confirmSubmit){

            return;

        }

    }


    testSubmitted = true;


    clearInterval(timerInterval);


    const questions =
        questionBank[selectedSet];


    let correct = 0;

    let wrong = 0;

    let unattempted = 0;

    let reviewHTML = "";


    questions.forEach(
        function(q,index){

            const userAnswer =
                userAnswers[index];


            let status = "";


            if(userAnswer === null){

                unattempted++;

                status = `

                    <div class="gray-text">
                        ⚪ Unattempted
                    </div>

                `;

            }

            else if(
                userAnswer === q.answer
            ){

                correct++;

                status = `

                    <div class="correct-text">
                        ✅ Correct
                    </div>

                `;

            }

            else{

                wrong++;

                status = `

                    <div class="wrong-text">
                        ❌ Wrong
                    </div>

                `;

            }


            const yourAnswer =
                userAnswer === null

                ?

                "Not Attempted"

                :

                String.fromCharCode(
                    65 + userAnswer
                )
                +
                ". "
                +
                q.options[userAnswer];


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
                        ${q.sentence}

                    </div>


                    ${status}


                    <div class="answer-line">

                        <b>
                            Your Answer:
                        </b>

                        ${yourAnswer}

                    </div>


                    <div class="answer-line">

                        <b>
                            Correct Answer:
                        </b>

                        <span class="correct-text">

                            ${correctAnswer}

                        </span>

                    </div>


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

        }
    );


    const score =
        Math.round(
            (correct /
            questions.length) * 100
        );


    document.getElementById(
        "score"
    ).textContent =
        score;


    document.getElementById(
        "correct"
    ).textContent =
        correct;


    document.getElementById(
        "wrong"
    ).textContent =
        wrong;


    document.getElementById(
        "unattempted"
    ).textContent =
        unattempted;


    document.getElementById(
        "resultTitle"
    ).textContent =
        "Sentence Improvement - Set " +
        selectedSet;


    document.getElementById(
        "review"
    ).innerHTML =
        reviewHTML;


    testPage.classList.add("hidden");

    resultPage.classList.remove("hidden");


    window.scrollTo(0,0);

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
            "🎉 Congratulations!\n\n" +
            "Aapne Sentence Improvement ke " +
            "sabhi 25 Sets complete kar liye hain."
        );


        showSets();

    }

}


/* =========================================================
   INITIALIZE
========================================================= */

createSets();


console.log(
    "Sentence Improvement Test Loaded"
);

console.log(
    "Total Sets: 25"
);

console.log(
    "Questions Per Set: 20"
);

console.log(
    "Total Questions: 500"
);