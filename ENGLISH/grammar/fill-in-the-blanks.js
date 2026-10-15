/* =========================================================
   SSC FILL IN THE BLANKS
   25 SETS × 20 QUESTIONS
========================================================= */


/* =========================================================
   QUESTION BANK
========================================================= */

const questionBank = {};


/* =========================================================
   20 UNIQUE QUESTIONS
========================================================= */

const masterQuestions = [

{
sentence:"The manager asked the employees to ______ the report before submitting it.",
options:[
"review",
"reviewed",
"reviewing",
"reviews"
],
answer:0,
explanation:"'To' ke baad verb ki first form aati hai. Isliye 'review' correct answer hai."
},

{
sentence:"She has been working here ______ 2020.",
options:[
"for",
"since",
"from",
"by"
],
answer:1,
explanation:"2020 ek specific point of time hai, isliye 'since' ka use hoga."
},

{
sentence:"He is afraid ______ dogs.",
options:[
"from",
"with",
"of",
"at"
],
answer:2,
explanation:"'Afraid' ke saath preposition 'of' use hota hai: afraid of dogs."
},

{
sentence:"The teacher was pleased ______ the student's performance.",
options:[
"with",
"at",
"from",
"by"
],
answer:0,
explanation:"'Pleased with' ek standard expression hai. Isliye 'with' correct hai."
},

{
sentence:"I have been waiting for you ______ two hours.",
options:[
"since",
"from",
"for",
"by"
],
answer:2,
explanation:"'Two hours' duration hai, isliye 'for' use hoga."
},

{
sentence:"He insisted ______ going to the meeting.",
options:[
"to",
"on",
"for",
"at"
],
answer:1,
explanation:"'Insist on + gerund' correct structure hai."
},

{
sentence:"The child was punished ______ telling a lie.",
options:[
"for",
"with",
"at",
"from"
],
answer:0,
explanation:"Kisi galat kaam ke reason ke liye 'punished for' use hota hai."
},

{
sentence:"She is good ______ English grammar.",
options:[
"in",
"on",
"at",
"with"
],
answer:2,
explanation:"Skill ya subject mein achha hone ke liye 'good at' use hota hai."
},

{
sentence:"He succeeded ______ solving the difficult problem.",
options:[
"at",
"on",
"in",
"for"
],
answer:2,
explanation:"'Succeed in + gerund' correct grammatical structure hai."
},

{
sentence:"The train arrived ______ time.",
options:[
"in",
"on",
"at",
"by"
],
answer:1,
explanation:"Exact scheduled time par hone ke sense mein 'on time' use hota hai."
},

{
sentence:"She is looking forward ______ meeting her old friend.",
options:[
"for",
"at",
"to",
"on"
],
answer:2,
explanation:"'Look forward to' ke baad gerund aata hai. Isliye 'to meeting' correct hai."
},

{
sentence:"The students were asked to ______ attention in class.",
options:[
"pay",
"paid",
"paying",
"pays"
],
answer:0,
explanation:"'Asked to' ke baad base form aati hai. Correct phrase 'pay attention' hai."
},

{
sentence:"He was tired, ______ he continued working.",
options:[
"because",
"but",
"so",
"although"
],
answer:1,
explanation:"Sentence mein contrast hai: tired hone ke bawajood kaam continue kiya. Isliye 'but' correct hai."
},

{
sentence:"If I ______ rich, I would help the poor.",
options:[
"am",
"was",
"were",
"be"
],
answer:2,
explanation:"Unreal/imaginary condition mein 'If I were' standard form hai."
},

{
sentence:"Neither the teacher nor the students ______ ready.",
options:[
"was",
"is",
"were",
"has"
],
answer:2,
explanation:"'Neither...nor' mein verb nearest subject ke according aata hai. 'Students' plural hai, isliye 'were'."
},

{
sentence:"The old man died ______ cancer.",
options:[
"from",
"of",
"with",
"by"
],
answer:1,
explanation:"Disease ke cause ke saath commonly 'die of' use hota hai."
},

{
sentence:"He divided the money ______ the two brothers.",
options:[
"among",
"between",
"into",
"with"
],
answer:1,
explanation:"Do persons/things ke beech distribution ke liye 'between' use hota hai."
},

{
sentence:"The teacher congratulated him ______ his success.",
options:[
"for",
"on",
"at",
"with"
],
answer:1,
explanation:"Correct expression 'congratulate someone on something' hai."
},

{
sentence:"She is accustomed ______ waking up early.",
options:[
"with",
"for",
"to",
"at"
],
answer:2,
explanation:"'Accustomed to' ke baad noun ya gerund aata hai. Isliye 'to waking' correct hai."
},

{
sentence:"The doctor advised him to give ______ smoking.",
options:[
"up",
"off",
"away",
"out"
],
answer:0,
explanation:"'Give up' ka meaning kisi habit ko chhodna hota hai. Isliye 'give up smoking' correct hai."
}

];


/* =========================================================
   CREATE 25 SETS
========================================================= */

for(let set = 1; set <= 25; set++){

    questionBank[set] = [];

    for(let i = 0; i < 20; i++){

        questionBank[set].push({

            sentence:
                masterQuestions[i].sentence,

            options:
                [...masterQuestions[i].options],

            answer:
                masterQuestions[i].answer,

            explanation:
                masterQuestions[i].explanation

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
   SELECT SET
========================================================= */

function selectSet(setNumber){

    selectedSet = setNumber;

    document.getElementById(
        "startTitle"
    ).textContent =
        "Fill in the Blanks - Set " +
        selectedSet;

    document.getElementById(
        "setPage"
    ).classList.add("hidden");

    document.getElementById(
        "startPage"
    ).classList.remove("hidden");

    window.scrollTo(0,0);
}


/* =========================================================
   CREATE SET BUTTONS
========================================================= */

function createSets(){

    const container =
        document.getElementById("setContainer");

    container.innerHTML = "";

    for(let i=1;i<=25;i++){

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
   SHOW ALL SETS
========================================================= */

function showSets(){

    clearInterval(timerInterval);

    document.getElementById(
        "setPage"
    ).classList.remove("hidden");

    document.getElementById(
        "startPage"
    ).classList.add("hidden");

    document.getElementById(
        "testPage"
    ).classList.add("hidden");

    document.getElementById(
        "resultPage"
    ).classList.add("hidden");

    window.scrollTo(0,0);
}


/* =========================================================
   START TEST
========================================================= */

function startTest(){

    if(!questionBank[selectedSet]){

        alert(
            "Is set ka question bank available nahi hai."
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
        "Fill in the Blanks - Set " +
        selectedSet;

    document.getElementById(
        "setPage"
    ).classList.add("hidden");

    document.getElementById(
        "startPage"
    ).classList.add("hidden");

    document.getElementById(
        "resultPage"
    ).classList.add("hidden");

    document.getElementById(
        "testPage"
    ).classList.remove("hidden");

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
        (currentQuestion + 1)
        +
        " / "
        +
        questions.length;

    const percentage =
        ((currentQuestion + 1)
        /
        questions.length)
        * 100;

    document.getElementById(
        "progress"
    ).style.width =
        percentage + "%";


    let html = `

        <div class="question-heading">

            Choose the most appropriate word
            to fill in the blank.

        </div>


        <div class="sentence">

            <b>
                ${currentQuestion + 1}.
            </b>

            ${q.sentence.replace(
                "______",
                '<span class="blank">______</span>'
            )}

        </div>


        <div class="choose-text">
            Select the correct option:
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


    document.getElementById(
        "previousBtn"
    ).disabled =
        currentQuestion === 0;


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
   NEXT
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
   PREVIOUS
========================================================= */

function previousQuestion(){

    if(currentQuestion > 0){

        currentQuestion--;

        loadQuestion();

        window.scrollTo(0,0);
    }
}


/* =========================================================
   PALETTE
========================================================= */

function createPalette(){

    const palette =
        document.getElementById("palette");

    palette.innerHTML = "";

    for(let i=0;i<20;i++){

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
   SUBMIT
========================================================= */

function submitTest(autoSubmit=false){

    if(testSubmitted){
        return;
    }


    if(!autoSubmit){

        const confirmation =
            confirm(
                "Kya aap test submit karna chahte hain?"
            );

        if(!confirmation){
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
            questions.length)
            * 100
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
        "Fill in the Blanks - Set "
        +
        selectedSet;


    document.getElementById(
        "review"
    ).innerHTML =
        reviewHTML;


    document.getElementById(
        "testPage"
    ).classList.add("hidden");


    document.getElementById(
        "resultPage"
    ).classList.remove("hidden");


    window.scrollTo(0,0);
}


/* =========================================================
   REPEAT
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
            "Aapne Fill in the Blanks ke " +
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
    "Fill in the Blanks Loaded"
);

console.log(
    "25 Sets × 20 Questions"
);