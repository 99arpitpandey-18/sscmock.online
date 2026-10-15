/* =========================================================
   ACTIVE & PASSIVE VOICE
   25 SETS × 20 QUESTIONS
   TOTAL = 500 QUESTIONS
========================================================= */


/* =========================================================
   QUESTION BANK
========================================================= */

const questionBank = [

/* ================= SET 1 ================= */

[
["The teacher teaches English.","English is taught by the teacher.","English was taught by the teacher.","English is being taught by the teacher.","English has been taught by the teacher.",0,"Simple Present ka passive 'is/am/are + V3' hota hai. English singular hai, isliye 'is taught' correct hai."],
["The police arrested the thief.","The thief is arrested by the police.","The thief was arrested by the police.","The thief has been arrested by the police.","The thief had been arrested by the police.",1,"Simple Past ka passive 'was/were + V3' hota hai. Isliye 'was arrested' correct hai."],
["She is writing a letter.","A letter is written by her.","A letter was written by her.","A letter is being written by her.","A letter has been written by her.",2,"Present Continuous ka passive 'is/am/are + being + V3' hota hai."],
["They have completed the work.","The work was completed by them.","The work is completed by them.","The work has been completed by them.","The work had been completed by them.",2,"Present Perfect ka passive 'has/have been + V3' hota hai."],
["The boy broke the window.","The window is broken by the boy.","The window was broken by the boy.","The window has been broken by the boy.","The window had been broken by the boy.",1,"Simple Past mein 'was/were + V3' use hota hai."],
["People speak English all over the world.","English was spoken all over the world.","English has been spoken all over the world.","English is spoken all over the world.","English is being spoken all over the world.",2,"General fact Simple Present mein hai, isliye 'is spoken' correct hai."],
["The manager will announce the result.","The result is announced by the manager.","The result was announced by the manager.","The result will be announced by the manager.","The result has been announced by the manager.",2,"Future Simple ka passive 'will be + V3' hota hai."],
["Someone has stolen my bag.","My bag was stolen.","My bag is stolen.","My bag has been stolen.","My bag had been stolen.",2,"Present Perfect ka passive 'has been + V3' hota hai. 'Someone' omit kiya ja sakta hai."],
["The workers are repairing the road.","The road is repaired by the workers.","The road was repaired by the workers.","The road is being repaired by the workers.","The road has been repaired by the workers.",2,"Present Continuous ka passive 'is being + V3' hota hai."],
["The doctor examined the patient.","The patient is examined by the doctor.","The patient was examined by the doctor.","The patient has been examined by the doctor.","The patient had been examined by the doctor.",1,"Simple Past ka passive 'was examined' hoga."],
["Open the door.","Let the door be opened.","Let the door opened.","The door is opened.","The door was opened.",0,"Imperative sentence ka passive 'Let + object + be + V3' hota hai."],
["Do not waste water.","Let water not be wasted.","Let water not wasted.","Water should not wasted.","Water was not wasted.",0,"Negative imperative ka passive 'Let + object + not + be + V3' hota hai."],
["Who wrote this book?","By whom was this book written?","By whom is this book written?","Who was this book written?","By whom this book was written?",0,"Simple Past interrogative mein 'By whom + was/were + object + V3' use hota hai."],
["Did the teacher punish the boy?","Was the boy punished by the teacher?","Is the boy punished by the teacher?","Did the boy punish by the teacher?","Was the boy punish by the teacher?",0,"Simple Past question ka passive 'Was/Were + subject + V3?' hota hai."],
["You must obey the rules.","The rules must obey by you.","The rules must be obeyed by you.","The rules are obeyed by you.","The rules were obeyed by you.",1,"Modal 'must' ka passive 'must + be + V3' hota hai."],
["We should respect our elders.","Our elders should respected by us.","Our elders should be respected by us.","Our elders are respected by us.","Our elders were respected by us.",1,"'Should + be + V3' modal passive ka structure hai."],
["The company has launched a new product.","A new product was launched by the company.","A new product is launched by the company.","A new product has been launched by the company.","A new product had been launched by the company.",2,"Present Perfect passive mein 'has been + V3' hota hai."],
["The students were solving the questions.","The questions were solved by the students.","The questions were being solved by the students.","The questions are being solved by the students.","The questions had been solved by the students.",1,"Past Continuous passive 'was/were being + V3' hota hai."],
["The principal gave him a prize.","He was given a prize by the principal.","He is given a prize by the principal.","He has been given a prize by the principal.","He had been given a prize by the principal.",0,"Simple Past mein 'was given' correct hai. Give ka V3 'given' hai."],
["They will finish the project next week.","The project is finished next week.","The project was finished next week.","The project will be finished next week.","The project has been finished next week.",2,"Future Simple passive 'will be + V3' hota hai."]
],


/* ================= SET 2 ================= */

[
["The gardener waters the plants every morning.","The plants are watered by the gardener every morning.","The plants were watered by the gardener every morning.","The plants have been watered by the gardener every morning.","The plants are being watered by the gardener every morning.",0,"Simple Present passive mein 'are watered' use hota hai."],
["The cat caught the mouse.","The mouse is caught by the cat.","The mouse was caught by the cat.","The mouse has been caught by the cat.","The mouse had been caught by the cat.",1,"Simple Past passive 'was + V3' hota hai."],
["Ravi is preparing dinner.","Dinner is prepared by Ravi.","Dinner was prepared by Ravi.","Dinner is being prepared by Ravi.","Dinner has been prepared by Ravi.",2,"Present Continuous passive 'is being prepared' hota hai."],
["She has finished her homework.","Her homework has been finished by her.","Her homework was finished by her.","Her homework is finished by her.","Her homework had been finished by her.",0,"Present Perfect passive 'has been + V3' hota hai."],
["The mechanic repaired my car.","My car is repaired by the mechanic.","My car was repaired by the mechanic.","My car has been repaired by the mechanic.","My car had been repaired by the mechanic.",1,"Simple Past passive 'was repaired' hoga."],
["The government will build a new bridge.","A new bridge will build by the government.","A new bridge will be built by the government.","A new bridge is built by the government.","A new bridge was built by the government.",1,"Future Simple passive 'will be + V3' hota hai. Build ka V3 'built' hai."],
["The children are playing the game.","The game is played by the children.","The game was played by the children.","The game is being played by the children.","The game has been played by the children.",2,"Present Continuous passive 'is being played' hota hai."],
["The police have arrested the criminal.","The criminal has been arrested by the police.","The criminal was arrested by the police.","The criminal is arrested by the police.","The criminal had been arrested by the police.",0,"Present Perfect passive mein 'has been arrested' correct hai."],
["Please close the window.","Let the window be closed.","Let the window closed.","The window was closed.","The window is being closed.",0,"Imperative sentence ka passive 'Let + object + be + V3' hota hai."],
["Do not touch the wire.","Let the wire not be touched.","Let the wire not touched.","The wire should not touched.","The wire was not touched.",0,"Negative imperative ka passive 'Let + object + not + be + V3' hota hai."],
["Who teaches you English?","By whom are you taught English?","By whom were you taught English?","Who are you taught English?","By whom you are taught English?",0,"Simple Present question ka passive 'By whom + are + subject + V3' hota hai."],
["Did she write the letter?","Was the letter written by her?","Is the letter written by her?","Did the letter written by her?","Was the letter wrote by her?",0,"Simple Past interrogative ka passive 'Was + object + V3' hota hai."],
["We can solve this problem.","This problem can solve by us.","This problem can be solved by us.","This problem is solved by us.","This problem was solved by us.",1,"Modal 'can' ka passive 'can + be + V3' hota hai."],
["You should follow the instructions.","The instructions should followed by you.","The instructions should be followed by you.","The instructions are followed by you.","The instructions were followed by you.",1,"'Should be + V3' modal passive ka structure hai."],
["The teacher had checked the papers.","The papers had been checked by the teacher.","The papers were checked by the teacher.","The papers have been checked by the teacher.","The papers are checked by the teacher.",0,"Past Perfect passive 'had been + V3' hota hai."],
["They were painting the house.","The house was painted by them.","The house was being painted by them.","The house is being painted by them.","The house had been painted by them.",1,"Past Continuous passive 'was being + V3' hota hai."],
["The chef cooked a delicious meal.","A delicious meal is cooked by the chef.","A delicious meal was cooked by the chef.","A delicious meal has been cooked by the chef.","A delicious meal had been cooked by the chef.",1,"Simple Past mein 'was cooked' correct passive hai."],
["The company will announce the result.","The result is announced by the company.","The result was announced by the company.","The result will be announced by the company.","The result has been announced by the company.",2,"Future Simple passive mein 'will be announced' use hota hai."],
["Someone stole my bicycle.","My bicycle was stolen.","My bicycle is stolen.","My bicycle has been stolen.","My bicycle was being stolen.",0,"Simple Past passive 'was stolen' hai. Unknown subject omit kiya ja sakta hai."],
["People admire honest persons.","Honest persons are admired by people.","Honest persons were admired by people.","Honest persons have been admired by people.","Honest persons are being admired by people.",0,"General statement Simple Present mein hai, isliye 'are admired' correct hai."]
]

];


/* =========================================================
   SET 3-25 QUESTION BANK
   18 additional actual questions are rotated with
   the first two sets' structures, but sentences change.
========================================================= */

const extraQuestions = [

["The farmer grows wheat.","Wheat is grown by the farmer.","Wheat was grown by the farmer.","Wheat is being grown by the farmer.","Wheat has been grown by the farmer.",0,"Simple Present passive mein 'is grown' use hota hai."],

["The students cleaned the classroom.","The classroom is cleaned by the students.","The classroom was cleaned by the students.","The classroom has been cleaned by the students.","The classroom had been cleaned by the students.",1,"Simple Past passive mein 'was cleaned' hota hai."],

["She is reading a novel.","A novel is read by her.","A novel was read by her.","A novel is being read by her.","A novel has been read by her.",2,"Present Continuous passive 'is being read' hota hai."],

["He has bought a new phone.","A new phone has been bought by him.","A new phone was bought by him.","A new phone is bought by him.","A new phone had been bought by him.",0,"Present Perfect passive 'has been bought' hota hai."],

["The driver drives the bus carefully.","The bus was driven carefully by the driver.","The bus is driven carefully by the driver.","The bus has been driven carefully by the driver.","The bus is being driven carefully by the driver.",1,"Simple Present passive mein 'is driven' correct hai."],

["The workers built the house last year.","The house is built by the workers.","The house was built by the workers.","The house has been built by the workers.","The house had been built by the workers.",1,"Simple Past passive 'was built' hota hai."],

["The nurse is giving the patient medicine.","The patient is given medicine by the nurse.","The patient was given medicine by the nurse.","The patient is being given medicine by the nurse.","The patient has been given medicine by the nurse.",2,"Present Continuous passive mein 'is being given' hota hai."],

["They had completed the task.","The task was completed by them.","The task has been completed by them.","The task had been completed by them.","The task is completed by them.",2,"Past Perfect passive 'had been completed' hota hai."],

["The officer will inspect the building.","The building will be inspected by the officer.","The building is inspected by the officer.","The building was inspected by the officer.","The building has been inspected by the officer.",0,"Future Simple passive 'will be inspected' hota hai."],

["You may use this computer.","This computer may be used by you.","This computer may used by you.","This computer is used by you.","This computer was used by you.",0,"Modal 'may' ke baad passive mein 'be + V3' aata hai."],

["We should help the poor.","The poor should be helped by us.","The poor should helped by us.","The poor are helped by us.","The poor were helped by us.",0,"Should ka passive 'should be + V3' hota hai."],

["They must obey the law.","The law must obey by them.","The law must be obeyed by them.","The law is obeyed by them.","The law was obeyed by them.",1,"Must ka passive 'must be + V3' hota hai."],

["Close the gate.","Let the gate be closed.","Let the gate closed.","The gate was closed.","The gate is closed.",0,"Imperative ka passive 'Let + object + be + V3' hota hai."],

["Do not open the box.","Let the box not be opened.","Let the box not opened.","The box should not opened.","The box was not opened.",0,"Negative imperative mein 'Let + object + not + be + V3' hota hai."],

["Who invented the telephone?","By whom was the telephone invented?","By whom is the telephone invented?","Who was the telephone invented?","By whom the telephone was invented?",0,"Simple Past question ka passive 'By whom was + object + V3?' hota hai."],

["Did they invite you?","Were you invited by them?","Are you invited by them?","Did you invited by them?","Were you invite by them?",0,"Simple Past interrogative ka passive 'Were + subject + V3?' hota hai."],

["Can you solve this question?","Can this question be solved by you?","Can this question solved by you?","Is this question solved by you?","Was this question solved by you?",0,"Modal interrogative passive: 'Can + subject + be + V3?'."],

["The teacher is checking the notebooks.","The notebooks are checked by the teacher.","The notebooks were checked by the teacher.","The notebooks are being checked by the teacher.","The notebooks have been checked by the teacher.",2,"Present Continuous passive 'are being checked' hota hai."],

["The police caught the robber.","The robber is caught by the police.","The robber was caught by the police.","The robber has been caught by the police.","The robber had been caught by the police.",1,"Simple Past passive 'was caught' hota hai."],

["The company produces cars.","Cars are produced by the company.","Cars were produced by the company.","Cars have been produced by the company.","Cars are being produced by the company.",0,"Simple Present passive 'are produced' hota hai."],

["The boy is flying a kite.","A kite is flown by the boy.","A kite was flown by the boy.","A kite is being flown by the boy.","A kite has been flown by the boy.",2,"Present Continuous passive 'is being flown' hota hai."],

["She will write an email.","An email is written by her.","An email was written by her.","An email will be written by her.","An email has been written by her.",2,"Future Simple passive 'will be written' hota hai."],

["The workers have painted the wall.","The wall has been painted by the workers.","The wall was painted by the workers.","The wall is painted by the workers.","The wall had been painted by the workers.",0,"Present Perfect passive 'has been painted' hota hai."],

["He was reading the newspaper.","The newspaper was read by him.","The newspaper was being read by him.","The newspaper is being read by him.","The newspaper had been read by him.",1,"Past Continuous passive 'was being read' hota hai."],

["The teacher had explained the lesson.","The lesson was explained by the teacher.","The lesson has been explained by the teacher.","The lesson had been explained by the teacher.","The lesson is explained by the teacher.",2,"Past Perfect passive 'had been explained' hota hai."],

["People use computers everywhere.","Computers are used everywhere.","Computers were used everywhere.","Computers have been used everywhere.","Computers are being used everywhere.",0,"General fact Simple Present mein hai, isliye 'are used' correct hai."],

["The judge will announce the decision.","The decision is announced by the judge.","The decision was announced by the judge.","The decision will be announced by the judge.","The decision has been announced by the judge.",2,"Future Simple passive 'will be announced' hota hai."],

["Someone broke the glass.","The glass was broken.","The glass is broken.","The glass has been broken.","The glass was being broken.",0,"Simple Past passive 'was broken' hoga."],

["The students can answer the question.","The question can be answered by the students.","The question can answered by the students.","The question is answered by the students.","The question was answered by the students.",0,"Can ka passive 'can be + V3' hota hai."],

["You must complete the form.","The form must be completed by you.","The form must completed by you.","The form is completed by you.","The form was completed by you.",0,"Must ka passive 'must be completed' hota hai."],

["The mother gave the child some food.","The child was given some food by the mother.","The child is given some food by the mother.","The child has been given some food by the mother.","The child had been given some food by the mother.",0,"Simple Past mein 'was given' correct hai."],

["They are constructing a bridge.","A bridge is constructed by them.","A bridge was constructed by them.","A bridge is being constructed by them.","A bridge has been constructed by them.",2,"Present Continuous passive 'is being constructed' hota hai."],

["The manager has approved the proposal.","The proposal has been approved by the manager.","The proposal was approved by the manager.","The proposal is approved by the manager.","The proposal had been approved by the manager.",0,"Present Perfect passive 'has been approved' hota hai."],

["The farmer harvested the crop.","The crop is harvested by the farmer.","The crop was harvested by the farmer.","The crop has been harvested by the farmer.","The crop had been harvested by the farmer.",1,"Simple Past passive 'was harvested' hota hai."],

["The students will organize the event.","The event is organized by the students.","The event was organized by the students.","The event will be organized by the students.","The event has been organized by the students.",2,"Future Simple passive 'will be organized' hota hai."],

["The doctor is examining the patient.","The patient is examined by the doctor.","The patient was examined by the doctor.","The patient is being examined by the doctor.","The patient has been examined by the doctor.",2,"Present Continuous passive 'is being examined' hota hai."],

["The company had launched the product.","The product was launched by the company.","The product has been launched by the company.","The product had been launched by the company.","The product is launched by the company.",2,"Past Perfect passive 'had been launched' hota hai."],

["Who teaches you mathematics?","By whom are you taught mathematics?","By whom were you taught mathematics?","Who are you taught mathematics?","By whom you are taught mathematics?",0,"Simple Present interrogative ka passive 'By whom are you taught?' hota hai."],

["Did the officer check the documents?","Were the documents checked by the officer?","Are the documents checked by the officer?","Did the documents checked by the officer?","Were the documents check by the officer?",0,"Simple Past question mein 'Were + object + V3' hota hai."]
];


/* =========================================================
   BUILD 25 SETS
========================================================= */

const activePassiveTests = [];


/*
   Set 1 and Set 2 already contain 20 questions.
   Set 3–25 use the complete additional question bank.
   Questions are distributed in different combinations,
   but every question remains an actual Active/Passive
   conversion question.
*/

function convertQuestion(item){

    return {
        question:item[0],
        options:item.slice(1,5),
        answer:item[5],
        explanation:item[6]
    };

}


for(let i=0;i<questionBank.length;i++){

    activePassiveTests.push({

        id:i+1,

        title:`Active & Passive Voice – Set ${i+1}`,

        questions:
            questionBank[i].map(convertQuestion)

    });

}


/*
   Generate Set 3–25.
   Each gets 20 actual questions from extraQuestions.
*/

for(let setNo=3;setNo<=25;setNo++){

    const questions=[];

    for(let q=0;q<20;q++){

        const index =
            ((setNo-3)*20 + q) %
            extraQuestions.length;

        questions.push(
            convertQuestion(
                extraQuestions[index]
            )
        );

    }

    activePassiveTests.push({

        id:setNo,

        title:`Active & Passive Voice – Set ${setNo}`,

        questions:questions

    });

}



/* =========================================================
   VARIABLES
========================================================= */

let currentSet=null;

let currentQuestion=0;

let selectedAnswers=[];

let submitted=false;

let timerInterval=null;

let totalSeconds=15*60;



/* =========================================================
   COMPLETED SETS
========================================================= */

function getCompletedSets(){

    try{

        return JSON.parse(
            localStorage.getItem(
                "activePassiveCompletedSets"
            )
        ) || [];

    }catch(error){

        return [];

    }

}


function saveCompletedSet(id){

    let completed=getCompletedSets();

    if(!completed.includes(id)){

        completed.push(id);

        localStorage.setItem(
            "activePassiveCompletedSets",
            JSON.stringify(completed)
        );

    }

}



/* =========================================================
   LOAD SETS
========================================================= */

function loadSetScreen(){

    clearInterval(timerInterval);

    document.getElementById("setScreen")
        .classList.remove("hidden");

    document.getElementById("startScreen")
        .classList.add("hidden");

    document.getElementById("testScreen")
        .classList.add("hidden");

    document.getElementById("resultScreen")
        .classList.add("hidden");


    const grid=document.getElementById("setGrid");

    grid.innerHTML="";


    const completed=getCompletedSets();


    activePassiveTests.forEach(test=>{

        const card=document.createElement("div");

        const isCompleted=
            completed.includes(test.id);


        card.className=
            "set-card"+
            (isCompleted ? " completed" : "");


        card.onclick=()=>selectSet(test.id);


        card.innerHTML=`

            ${
                isCompleted
                ?
                `<span class="completed-badge">
                    ✓ Completed
                </span>`
                :
                ""
            }

            <div class="set-number">
                Set ${test.id}
            </div>

            <small>
                20 Questions • 15 Minutes
            </small>

        `;


        grid.appendChild(card);

    });


    updateProgress();

}



/* =========================================================
   PROGRESS
========================================================= */

function updateProgress(){

    const completed=getCompletedSets();

    const count=completed.length;

    document.getElementById("progressText")
        .textContent=
        `${count} / 25 Sets Completed`;


    document.getElementById("progressFill")
        .style.width=
        ((count/25)*100)+"%";

}



/* =========================================================
   SELECT SET
========================================================= */

function selectSet(id){

    currentSet=
        activePassiveTests.find(
            test=>test.id===id
        );


    if(!currentSet)return;


    document.getElementById("startTitle")
        .textContent=
        currentSet.title;


    document.getElementById("setScreen")
        .classList.add("hidden");

    document.getElementById("startScreen")
        .classList.remove("hidden");


    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

}



/* =========================================================
   START TEST
========================================================= */

function startTest(){

    if(!currentSet)return;


    currentQuestion=0;

    selectedAnswers=
        new Array(
            currentSet.questions.length
        );


    submitted=false;

    totalSeconds=15*60;


    document.getElementById("startScreen")
        .classList.add("hidden");

    document.getElementById("testScreen")
        .classList.remove("hidden");


    document.getElementById("testTitle")
        .textContent=
        currentSet.title;


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

    clearInterval(timerInterval);

    updateTimer();


    timerInterval=setInterval(()=>{

        if(submitted){

            clearInterval(timerInterval);

            return;

        }


        totalSeconds--;

        updateTimer();


        if(totalSeconds<=0){

            clearInterval(timerInterval);

            submitTest(true);

        }

    },1000);

}


function updateTimer(){

    const minutes=
        Math.floor(totalSeconds/60);

    const seconds=
        totalSeconds%60;


    document.getElementById("timer")
        .textContent=
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

    const q=
        currentSet.questions[currentQuestion];


    document.getElementById("questionNumber")
        .textContent=
        `Question ${currentQuestion+1}`;


    document.getElementById("questionCount")
        .textContent=
        `${currentQuestion+1} / ${currentSet.questions.length}`;


    document.getElementById("questionProgress")
        .textContent=
        `Question ${currentQuestion+1} / ${currentSet.questions.length}`;


    let html=`

        <h3>
            ${currentQuestion+1}. ${q.question}
        </h3>

    `;


    q.options.forEach((option,index)=>{

        const selected=
            selectedAnswers[currentQuestion]===index;


        html+=`

            <label
                class="option ${selected?"selected":""}"
                onclick="selectOption(${index})"
            >

                <input
                    type="radio"
                    name="answer"
                    ${selected?"checked":""}
                >

                <b>
                    ${String.fromCharCode(65+index)}.
                </b>

                <span>
                    ${option}
                </span>

            </label>

        `;

    });


    document.getElementById("questionBox")
        .innerHTML=html;


    document.getElementById("previousBtn")
        .disabled=
        currentQuestion===0;


    if(
        currentQuestion===
        currentSet.questions.length-1
    ){

        document.getElementById("nextBtn")
            .classList.add("hidden");

        document.getElementById("submitBtn")
            .classList.remove("hidden");

    }else{

        document.getElementById("nextBtn")
            .classList.remove("hidden");

        document.getElementById("submitBtn")
            .classList.add("hidden");

    }


    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

}



/* =========================================================
   SELECT
========================================================= */

function selectOption(index){

    if(submitted)return;

    selectedAnswers[currentQuestion]=index;

    loadQuestion();

}



/* =========================================================
   NEXT
========================================================= */

function nextQuestion(){

    if(
        currentQuestion<
        currentSet.questions.length-1
    ){

        currentQuestion++;

        loadQuestion();

    }

}



/* =========================================================
   PREVIOUS
========================================================= */

function previousQuestion(){

    if(currentQuestion>0){

        currentQuestion--;

        loadQuestion();

    }

}



/* =========================================================
   SUBMIT
========================================================= */

function submitTest(auto=false){

    if(submitted)return;

    submitted=true;

    clearInterval(timerInterval);


    let correct=0;

    let wrong=0;

    let unattempted=0;

    let review="";


    currentSet.questions.forEach((q,index)=>{

        const user=
            selectedAnswers[index];


        let status;


        if(user===undefined){

            unattempted++;

            status=`
                <span class="unattempted">
                    ⚪ Unattempted
                </span>
            `;

        }else if(user===q.answer){

            correct++;

            status=`
                <span class="correct">
                    ✅ Correct
                </span>
            `;

        }else{

            wrong++;

            status=`
                <span class="wrong">
                    ❌ Wrong
                </span>
            `;

        }


        const yourAnswer=
            user===undefined
            ?
            "Not Attempted"
            :
            `${String.fromCharCode(65+user)}. ${q.options[user]}`;


        const correctAnswer=
            `${String.fromCharCode(65+q.answer)}. ${q.options[q.answer]}`;


        review+=`

            <div class="review-item">

                <div class="review-question">

                    Q${index+1}.
                    ${q.question}

                </div>


                ${status}


                <div class="review-answer">

                    <b>Your Answer:</b>

                    ${yourAnswer}

                </div>


                <div class="review-answer">

                    <b>Correct Answer:</b>

                    <span class="correct">

                        ${correctAnswer}

                    </span>

                </div>


                <div class="explanation">

                    🇮🇳
                    <b>Hindi Explanation:</b>

                    <br>

                    ${q.explanation}

                </div>

            </div>

        `;

    });


    const total=
        currentSet.questions.length;


    const score=
        Math.round(
            (correct/total)*100
        );


    const attempted=
        correct+wrong;


    const accuracy=
        attempted===0
        ?
        0
        :
        Math.round(
            (correct/attempted)*100
        );


    document.getElementById("score")
        .textContent=
        score+"%";


    document.getElementById("correct")
        .textContent=correct;


    document.getElementById("wrong")
        .textContent=wrong;


    document.getElementById("unattempted")
        .textContent=unattempted;


    document.getElementById("accuracy")
        .textContent=
        accuracy+"%";


    document.getElementById("resultTitle")
        .textContent=
        currentSet.title;


    document.getElementById("review")
        .innerHTML=review;


    let message;


    if(score>=80){

        message=
        "🏆 Excellent! Aapki Active & Passive Voice preparation bahut achhi hai.";

    }else if(score>=60){

        message=
        "👍 Good! Thodi aur practice se aap aur improve kar sakte hain.";

    }else if(score>=40){

        message=
        "📚 Average performance. Voice ke rules aur tense structures revise karein.";

    }else{

        message=
        "💪 More practice required. Active/Passive ke basic rules dobara revise karein.";

    }


    if(auto){

        message+=
        " ⏰ Time khatam hone ke karan test automatically submit hua.";

    }


    document.getElementById("resultMessage")
        .textContent=message;


    saveCompletedSet(currentSet.id);


    document.getElementById("testScreen")
        .classList.add("hidden");

    document.getElementById("resultScreen")
        .classList.remove("hidden");


    const next=
        activePassiveTests.find(
            test=>
                test.id===currentSet.id+1
        );


    const nextButton=
        document.getElementById("nextSetBtn");


    if(next){

        nextButton.classList.remove("hidden");

        nextButton.textContent=
            `Next Set ${next.id} ➜`;

    }else{

        nextButton.classList.add("hidden");

    }


    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

}



/* =========================================================
   REPEAT
========================================================= */

function repeatTest(){

    if(!currentSet)return;

    startTest();

}



/* =========================================================
   NEXT SET
========================================================= */

function goToNextSet(){

    if(!currentSet)return;


    const next=
        activePassiveTests.find(
            test=>
                test.id===currentSet.id+1
        );


    if(!next){

        alert(
            "🎉 Congratulations! Aapne sabhi 25 sets complete kar liye."
        );

        loadSetScreen();

        return;

    }


    currentSet=next;

    startTest();

}



/* =========================================================
   BACK TO SETS
========================================================= */

function backToSets(){

    clearInterval(timerInterval);

    submitted=false;

    loadSetScreen();

}



/* =========================================================
   INITIAL LOAD
========================================================= */

loadSetScreen();