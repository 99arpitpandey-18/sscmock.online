/* =========================================================
   DIRECT & INDIRECT SPEECH
   25 SETS × 20 QUESTIONS
========================================================= */


/* =========================================================
   QUESTION DATA
   Format:

   [
      Question,
      Option A,
      Option B,
      Option C,
      Option D,
      Correct Index,
      Hindi Explanation
   ]
========================================================= */

const questionBank = [

/* ========================================================
   SET 1
======================================================== */

[
[
'He said, "I am busy."',
'He said that I was busy.',
'He said that he was busy.',
'He says that he was busy.',
'He said that he is busy.',
1,
'Reporting verb "said" past mein hai, isliye present "am" backshift hokar "was" hoga. Pronoun I → he hoga.'
],

[
'Ravi said, "I have finished my work."',
'Ravi said that he had finished his work.',
'Ravi said that I had finished my work.',
'Ravi said that he has finished his work.',
'Ravi says that he had finished his work.',
0,
'Present Perfect "have finished" indirect speech mein Past Perfect "had finished" ho jata hai. I → he aur my → his.'
],

[
'She said, "I will help you."',
'She said that she would help me.',
'She said that I would help her.',
'She said that she will help me.',
'She said that she would help you.',
0,
'Future "will" past reporting verb ke saath "would" ho jata hai. I → she aur you → me.'
],

[
'The teacher said, "The earth is round."',
'The teacher said that the earth was round.',
'The teacher said that the earth is round.',
'The teacher said that the earth had been round.',
'The teacher says that the earth was round.',
1,
'Universal truth mein tense generally change nahi hota. Isliye "is round" same rahega.'
],

[
'He said, "I bought a new car."',
'He said that he had bought a new car.',
'He said that he has bought a new car.',
'He said that I had bought a new car.',
'He says that he bought a new car.',
0,
'Simple Past "bought" reporting verb past hone par Past Perfect "had bought" ho jata hai.'
],

[
'She said, "I can swim."',
'She said that she could swim.',
'She said that she can swim.',
'She said that I could swim.',
'She said that she would swim.',
0,
'Modal "can" indirect speech mein "could" ho jata hai.'
],

[
'He said to me, "Do you know the answer?"',
'He asked me if I knew the answer.',
'He told me if I knew the answer.',
'He asked me that I knew the answer.',
'He said me whether I know the answer.',
0,
'Yes/No question mein "asked + if/whether" use hota hai aur question ka word order statement jaisa ho jata hai.'
],

[
'She said to me, "Where do you live?"',
'She asked me where I lived.',
'She asked me where did I live.',
'She told me where I live.',
'She said me where I lived.',
0,
'Wh-question mein wh-word retain hota hai, lekin indirect speech mein subject + verb order aata hai: where I lived.'
],

[
'The teacher said to the boy, "Open the door."',
'The teacher told the boy to open the door.',
'The teacher said the boy open the door.',
'The teacher asked the boy opened the door.',
'The teacher told that the boy opened the door.',
0,
'Imperative order mein "told + object + to + V1" use hota hai.'
],

[
'The officer said to the soldier, "Do not move."',
'The officer told the soldier not to move.',
'The officer told the soldier to not moved.',
'The officer said the soldier not move.',
'The officer asked the soldier did not move.',
0,
'Negative command mein "told + object + not to + V1" use hota hai.'
],

[
'He said, "Alas! I am ruined."',
'He exclaimed sadly that he was ruined.',
'He said sadly that I am ruined.',
'He told that he had ruined.',
'He exclaimed happily that he was ruined.',
0,
'"Alas!" sorrow show karta hai, isliye "exclaimed sadly" use hoga.'
],

[
'She said, "What a beautiful flower!"',
'She exclaimed that it was a very beautiful flower.',
'She said that what a beautiful flower it was.',
'She asked whether it was a beautiful flower.',
'She told that the flower was beautiful?',
0,
'Exclamatory sentence mein "exclaimed that" use hota hai aur sentence ko statement form mein convert kiya jata hai.'
],

[
'He said to me, "Please help me."',
'He requested me to help him.',
'He told me help him.',
'He asked that I helped him.',
'He said me to help me.',
0,
'"Please" request show karta hai, isliye "requested + object + to + V1" correct hai.'
],

[
'Mother said to me, "Do your homework."',
'Mother told me to do my homework.',
'Mother said me to do my homework.',
'Mother told that I did my homework.',
'Mother asked me that do my homework.',
0,
'Command/advice ke liye "told + object + to + V1" use hota hai. your → my.'
],

[
'He said, "I was reading a book."',
'He said that he had been reading a book.',
'He said that he was reading a book.',
'He says that he had read a book.',
'He said that I had been reading a book.',
0,
'Past Continuous reporting verb past hone par Past Perfect Continuous "had been reading" ho jata hai.'
],

[
'She said, "I had completed the work."',
'She said that she had completed the work.',
'She said that she has completed the work.',
'She said that she completed the work.',
'She says that she had completed the work.',
0,
'Past Perfect ka tense indirect speech mein normally same rehta hai.'
],

[
'He said, "I may go there."',
'He said that he might go there.',
'He said that he may go there.',
'He said that he would go there.',
'He said that he could go there.',
0,
'Modal "may" backshift hokar "might" ho jata hai.'
],

[
'Rita said, "I am going to Delhi tomorrow."',
'Rita said that she was going to Delhi the next day.',
'Rita said that she is going to Delhi tomorrow.',
'Rita said that she was going to Delhi tomorrow.',
'Rita says that she was going to Delhi the next day.',
0,
'Present Continuous future arrangement ke sense mein tha. "am going" → "was going"; tomorrow → the next day.'
],

[
'He said, "I met him yesterday."',
'He said that he had met him the previous day.',
'He said that he met him yesterday.',
'He said that he has met him the previous day.',
'He says that he had met him yesterday.',
0,
'Simple Past → Past Perfect aur yesterday → the previous day.'
],

[
'She said to me, "Can you solve this problem?"',
'She asked me if I could solve that problem.',
'She told me if I can solve this problem.',
'She asked me that I could solve this problem.',
'She said me whether I could solve that problem.',
0,
'Yes/No question mein "asked + if" use hota hai. can → could aur this → that.'
]

],


/* ========================================================
   SET 2
======================================================== */

[
[
'Ram said, "I am happy."',
'Ram said that I was happy.',
'Ram said that he was happy.',
'Ram said that he is happy.',
'Ram says that he was happy.',
1,
'I → he aur am → was, kyunki reporting verb past hai.'
],

[
'She said, "I have lost my pen."',
'She said that she had lost her pen.',
'She said that she has lost her pen.',
'She said that I had lost my pen.',
'She says that she had lost her pen.',
0,
'Present Perfect "have lost" → Past Perfect "had lost"; my → her.'
],

[
'He said, "I will come tomorrow."',
'He said that he would come the next day.',
'He said that he will come tomorrow.',
'He said that I would come tomorrow.',
'He says that he would come the next day.',
0,
'will → would aur tomorrow → the next day.'
],

[
'The boy said, "I can solve this question."',
'The boy said that he could solve that question.',
'The boy said that he can solve this question.',
'The boy said that I could solve that question.',
'The boy says that he could solve that question.',
0,
'can → could aur this → that.'
],

[
'He said to her, "Are you ready?"',
'He asked her if she was ready.',
'He told her if she was ready.',
'He asked her that she was ready.',
'He said her whether she is ready.',
0,
'Yes/No question: asked + if/whether + statement order.'
],

[
'She said to him, "Why are you crying?"',
'She asked him why he was crying.',
'She asked him why was he crying.',
'She told him why he was crying.',
'She said him why he is crying.',
0,
'Wh-question mein "why he was crying" statement order mein hota hai.'
],

[
'Father said to me, "Work hard."',
'Father advised me to work hard.',
'Father said me to work hard.',
'Father told that I worked hard.',
'Father asked me that I work hard.',
0,
'Advice ke sense mein "advised + object + to + V1" best structure hai.'
],

[
'The teacher said, "Do not make a noise."',
'The teacher ordered them not to make a noise.',
'The teacher said them not make noise.',
'The teacher ordered that they do not make noise.',
'The teacher asked them not made noise.',
0,
'Negative command mein ordered/told + object + not to + V1.'
],

[
'He said, "Hurrah! We have won the match."',
'He exclaimed with joy that they had won the match.',
'He exclaimed with sorrow that they won the match.',
'He said sadly that they had won the match.',
'He asked whether they had won the match.',
0,
'"Hurrah!" joy show karta hai, isliye exclaimed with joy. have won → had won.'
],

[
'She said, "Alas! My friend is dead."',
'She exclaimed with sorrow that her friend was dead.',
'She exclaimed with joy that her friend was dead.',
'She asked that her friend was dead.',
'She told that my friend is dead.',
0,
'"Alas!" sorrow show karta hai. my → her aur is → was.'
],

[
'He said, "What a beautiful scene!"',
'He exclaimed that it was a very beautiful scene.',
'He asked what a beautiful scene it was.',
'He said that what a scene it was.',
'He told that the scene is beautiful.',
0,
'Exclamatory sentence ko statement form mein convert karke "exclaimed that" use hota hai.'
],

[
'She said to me, "Please wait here."',
'She requested me to wait there.',
'She told me wait here.',
'She asked me that I waited there.',
'She said me to wait there.',
0,
'Please request show karta hai. here → there.'
],

[
'He said to me, "Please do not disturb me."',
'He requested me not to disturb him.',
'He requested me to not disturbed him.',
'He told me do not disturb me.',
'He said me not disturb him.',
0,
'Negative request: requested + object + not to + V1.'
],

[
'The teacher said, "The sun rises in the east."',
'The teacher said that the sun rose in the east.',
'The teacher said that the sun rises in the east.',
'The teacher said that the sun had risen in the east.',
'The teacher says that the sun rose in the east.',
1,
'Universal/general truth mein tense change nahi hota.'
],

[
'He said, "I was ill yesterday."',
'He said that he had been ill the previous day.',
'He said that he was ill yesterday.',
'He says that he had been ill the previous day.',
'He said that I had been ill yesterday.',
0,
'was → had been aur yesterday → the previous day.'
],

[
'She said, "I had seen the movie."',
'She said that she had seen the movie.',
'She said that she has seen the movie.',
'She said that she saw the movie.',
'She says that she had seen the movie.',
0,
'Past Perfect "had seen" normally unchanged rehta hai.'
],

[
'He said, "I must leave now."',
'He said that he had to leave then.',
'He said that he must leave now.',
'He said that he has to leave then.',
'He said that I had to leave now.',
0,
'Past reporting ke saath "must" obligation ke sense mein "had to" ho sakta hai; now → then.'
],

[
'She said, "I am busy now."',
'She said that she was busy then.',
'She said that she is busy now.',
'She said that I was busy then.',
'She says that she was busy now.',
0,
'am → was aur now → then.'
],

[
'He said to me, "Have you completed the work?"',
'He asked me if I had completed the work.',
'He asked me if I have completed the work.',
'He told me whether I had completed the work.',
'He said me that I had completed the work.',
0,
'Present Perfect question indirect speech mein Past Perfect ho jata hai.'
],

[
'The officer said to the man, "Show me your documents."',
'The officer ordered the man to show him his documents.',
'The officer said the man show me his documents.',
'The officer asked the man that he showed his documents.',
'The officer told that the man shows his documents.',
0,
'Order ke liye ordered + object + to + V1. me → him, your → his.'
]

]

];



/* =========================================================
   EXTRA QUESTION BANK

   These questions are used to build the remaining sets.
========================================================= */

const extraQuestions = [

[
'He said, "I am tired."',
'He said that he was tired.',
'He said that I was tired.',
'He said that he is tired.',
'He says that he was tired.',
0,
'am → was and I → he.'
],

[
'She said, "I have done my duty."',
'She said that she had done her duty.',
'She said that she has done her duty.',
'She said that I had done my duty.',
'She says that she had done her duty.',
0,
'Present Perfect → Past Perfect and my → her.'
],

[
'He said, "I will call you."',
'He said that he would call me.',
'He said that he will call me.',
'He said that I would call him.',
'He says that he would call me.',
0,
'will → would and you → me.'
],

[
'She said to me, "Do you like tea?"',
'She asked me if I liked tea.',
'She asked me if I like tea.',
'She told me if I liked tea.',
'She said me whether I liked tea.',
0,
'Yes/No question mein asked + if use hota hai.'
],

[
'He said to me, "Where are you going?"',
'He asked me where I was going.',
'He asked me where was I going.',
'He told me where I was going.',
'He said me where I was going.',
0,
'Wh-question mein statement word order use hota hai.'
],

[
'Mother said to her son, "Study hard."',
'Mother advised her son to study hard.',
'Mother said her son study hard.',
'Mother asked her son that he studied hard.',
'Mother told that her son studies hard.',
0,
'Advice ke liye advised + object + to + V1.'
],

[
'The teacher said, "Sit down."',
'The teacher told the students to sit down.',
'The teacher said the students sit down.',
'The teacher asked that students sat down.',
'The teacher told that students sit down.',
0,
'Command ke liye told + object + to + V1.'
],

[
'He said, "Do not waste time."',
'He advised me not to waste time.',
'He advised me to not wasted time.',
'He said me not waste time.',
'He told me do not waste time.',
0,
'Negative advice: advised + object + not to + V1.'
],

[
'She said, "Hurrah! I have passed."',
'She exclaimed with joy that she had passed.',
'She exclaimed with sorrow that she had passed.',
'She asked that she had passed.',
'She said sadly that she had passed.',
0,
'Hurrah joy show karta hai. have passed → had passed.'
],

[
'He said, "Alas! I have failed."',
'He exclaimed with sorrow that he had failed.',
'He exclaimed with joy that he had failed.',
'He asked whether he had failed.',
'He told that he has failed.',
0,
'Alas sorrow show karta hai. have failed → had failed.'
],

[
'He said, "What a wonderful idea!"',
'He exclaimed that it was a very wonderful idea.',
'He asked whether it was a wonderful idea.',
'He said what a wonderful idea it was.',
'He told that the idea is wonderful.',
0,
'Exclamation ko statement mein convert karke exclaimed that use hota hai.'
],

[
'She said to me, "Please forgive me."',
'She requested me to forgive her.',
'She told me forgive her.',
'She requested that I forgave her.',
'She said me to forgive me.',
0,
'Please request show karta hai. me → her.'
],

[
'He said, "I can help you."',
'He said that he could help me.',
'He said that he can help me.',
'He said that I could help him.',
'He says that he could help me.',
0,
'can → could and you → me.'
],

[
'She said, "I may visit Delhi."',
'She said that she might visit Delhi.',
'She said that she may visit Delhi.',
'She said that she would visit Delhi.',
'She said that she could visit Delhi.',
0,
'may → might.'
],

[
'He said, "I was playing cricket."',
'He said that he had been playing cricket.',
'He said that he was playing cricket.',
'He says that he had played cricket.',
'He said that I had been playing cricket.',
0,
'Past Continuous → Past Perfect Continuous.'
],

[
'She said, "I had completed the work."',
'She said that she had completed the work.',
'She said that she has completed the work.',
'She said that she completed the work.',
'She says that she had completed the work.',
0,
'Past Perfect normally unchanged rehta hai.'
],

[
'He said, "I met him yesterday."',
'He said that he had met him the previous day.',
'He said that he met him yesterday.',
'He said that he has met him the previous day.',
'He says that he had met him yesterday.',
0,
'Simple Past → Past Perfect and yesterday → previous day.'
],

[
'She said, "I will come here tomorrow."',
'She said that she would come there the next day.',
'She said that she will come here tomorrow.',
'She said that she would come here tomorrow.',
'She says that she would come there the next day.',
0,
'will → would, here → there, tomorrow → the next day.'
],

[
'He said, "I am working now."',
'He said that he was working then.',
'He said that he is working now.',
'He said that I was working then.',
'He says that he was working now.',
0,
'am → was and now → then.'
],

[
'The teacher said, "Honesty is the best policy."',
'The teacher said that honesty was the best policy.',
'The teacher said that honesty is the best policy.',
'The teacher said that honesty had been the best policy.',
'The teacher says honesty was the best policy.',
1,
'General truth/proverb mein tense change nahi hota.'
],

[
'He said to me, "Can you help me?"',
'He asked me if I could help him.',
'He told me if I can help him.',
'He asked me that I could help me.',
'He said me whether I could help him.',
0,
'Can → could; yes/no question mein asked + if.'
],

[
'She said to him, "Have you seen my book?"',
'She asked him if he had seen her book.',
'She asked him if he has seen her book.',
'She told him whether he had seen my book.',
'She said him that he had seen her book.',
0,
'Present Perfect → Past Perfect; my → her.'
],

[
'The boy said to his father, "I am hungry."',
'The boy told his father that he was hungry.',
'The boy said his father that I was hungry.',
'The boy asked his father that he was hungry.',
'The boy tells his father that he was hungry.',
0,
'am → was and I → he.'
],

[
'She said to me, "Why did you come here?"',
'She asked me why I had come there.',
'She asked me why had I come there.',
'She told me why I had come here.',
'She said me why I came there.',
0,
'Past question → Past Perfect after past reporting verb; here → there.'
],

[
'He said to me, "When will you return?"',
'He asked me when I would return.',
'He asked me when would I return.',
'He told me when I will return.',
'He said me when I would return.',
0,
'will → would and wh-question uses statement order.'
],

[
'Father said, "Work hard and be honest."',
'Father advised me to work hard and be honest.',
'Father said me work hard and be honest.',
'Father asked that I worked hard and honest.',
'Father told that I work hard and honest.',
0,
'Advice ke liye advised + object + to + verb use hota hai.'
],

[
'The captain said to the players, "Do not lose hope."',
'The captain advised the players not to lose hope.',
'The captain said the players not lose hope.',
'The captain asked the players that they did not lose hope.',
'The captain told that the players do not lose hope.',
0,
'Negative advice: advised + object + not to + V1.'
],

[
'He said, "Bravo! You have done well."',
'He applauded him saying that he had done well.',
'He exclaimed with sorrow that he had done well.',
'He asked whether he had done well.',
'He said that you have done well.',
0,
'Bravo appreciation/applause show karta hai. have done → had done.'
],

[
'She said, "Oh! I forgot the key."',
'She exclaimed with surprise that she had forgotten the key.',
'She exclaimed with joy that she forgot the key.',
'She asked whether she had forgotten the key.',
'She told that she has forgotten the key.',
0,
'Exclamation of surprise mein exclaimed with surprise use kiya jata hai.'
],

[
'The teacher said to me, "Bring your notebook tomorrow."',
'The teacher told me to bring my notebook the next day.',
'The teacher said me to bring my notebook tomorrow.',
'The teacher asked that I brought my notebook.',
'The teacher told me bring my notebook the next day.',
0,
'Command: told + object + to + V1; tomorrow → the next day.'
],

[
'He said, "I cannot attend the meeting."',
'He said that he could not attend the meeting.',
'He said that he cannot attend the meeting.',
'He said that I could not attend the meeting.',
'He says that he could not attend the meeting.',
0,
'cannot → could not.'
],

[
'She said, "I need not go there."',
'She said that she need not go there.',
'She said that she did not need to go there.',
'She said that she needed not go there.',
'She says that she did not need to go there.',
1,
'Need not ko indirect speech mein context ke according did not need to bhi express kiya ja sakta hai.'
],

[
'He said, "I used to play cricket."',
'He said that he used to play cricket.',
'He said that he had used to play cricket.',
'He said that he uses to play cricket.',
'He says that he used to played cricket.',
0,
'Used to generally unchanged rehta hai.'
],

[
'She said to me, "Let us go for a walk."',
'She suggested that we should go for a walk.',
'She told me that we go for a walk.',
'She ordered me to go for a walk.',
'She asked me that we went for a walk.',
0,
'Let us suggestion ke sense mein "suggested that we should..." use hota hai.'
],

[
'He said, "Let me help you."',
'He offered to help me.',
'He suggested me to help him.',
'He told me that let him help me.',
'He ordered me to help him.',
0,
'Let me + verb offer show karta hai, isliye offered to help.'
],

[
'She said, "May God bless you!"',
'She prayed that God might bless me.',
'She exclaimed that God blesses me.',
'She ordered God to bless me.',
'She asked God whether he blessed me.',
0,
'May God bless you blessing/prayer hai, isliye prayed that...might... use hota hai.'
],

[
'He said, "Would that I were rich!"',
'He wished that he were rich.',
'He said that he was rich.',
'He asked whether he was rich.',
'He ordered that he should be rich.',
0,
'Would that desire/wish express karta hai, isliye wished that use hota hai.'
],

[
'She said, "If only I were young again!"',
'She wished that she were young again.',
'She said that she was young again.',
'She asked whether she was young.',
'She ordered herself to be young.',
0,
'If only desire/wish express karta hai, isliye wished that use hota hai.'
]

];



/* =========================================================
   CONVERT DATA
========================================================= */

function makeQuestion(item){

    return {

        question:item[0],

        options:[
            item[1],
            item[2],
            item[3],
            item[4]
        ],

        answer:item[5],

        explanation:item[6]

    };

}



/* =========================================================
   CREATE 25 SETS
========================================================= */

const speechTests=[];


/* SET 1 + SET 2 */

questionBank.forEach((set,index)=>{

    speechTests.push({

        id:index+1,

        title:
            `Direct & Indirect Speech – Set ${index+1}`,

        questions:
            set.map(makeQuestion)

    });

});


/*
   Sets 3–25.

   Every set contains 20 questions.
*/

for(let setNo=3;setNo<=25;setNo++){

    let setQuestions=[];


    for(let q=0;q<20;q++){

        const index=
            ((setNo-3)*20+q)
            %
            extraQuestions.length;


        setQuestions.push(
            makeQuestion(
                extraQuestions[index]
            )
        );

    }


    speechTests.push({

        id:setNo,

        title:
            `Direct & Indirect Speech – Set ${setNo}`,

        questions:setQuestions

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
   LOCAL STORAGE
========================================================= */

function getCompletedSets(){

    try{

        return JSON.parse(
            localStorage.getItem(
                "directIndirectCompletedSets"
            )
        ) || [];

    }catch(error){

        return [];

    }

}


function saveCompletedSet(id){

    let completed=
        getCompletedSets();


    if(!completed.includes(id)){

        completed.push(id);

        localStorage.setItem(
            "directIndirectCompletedSets",
            JSON.stringify(completed)
        );

    }

}



/* =========================================================
   SHOW SETS
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


    const grid=
        document.getElementById("setGrid");


    grid.innerHTML="";


    const completed=
        getCompletedSets();


    speechTests.forEach(test=>{

        const card=
            document.createElement("div");


        const done=
            completed.includes(test.id);


        card.className=
            "set-card"+
            (done ? " completed" : "");


        card.onclick=
            ()=>selectSet(test.id);


        card.innerHTML=`

            ${
                done
                ?
                `
                <span class="completed-badge">
                    ✓ Completed
                </span>
                `
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

    const completed=
        getCompletedSets();


    const count=
        completed.length;


    document.getElementById("progressText")
        .textContent=
        `${count} / 25 Sets Completed`;


    document.getElementById("progressFill")
        .style.width=
        `${(count/25)*100}%`;

}



/* =========================================================
   SELECT SET
========================================================= */

function selectSet(id){

    currentSet=
        speechTests.find(
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


    totalSeconds=
        15*60;


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


    timerInterval=
        setInterval(()=>{

            if(submitted){

                clearInterval(
                    timerInterval
                );

                return;

            }


            totalSeconds--;


            updateTimer();


            if(totalSeconds<=0){

                clearInterval(
                    timerInterval
                );

                submitTest(true);

            }

        },1000);

}


function updateTimer(){

    const minutes=
        Math.floor(
            totalSeconds/60
        );


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
        currentSet.questions[
            currentQuestion
        ];


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
            ${currentQuestion+1}.
            ${q.question}
        </h3>

    `;


    q.options.forEach(
        (option,index)=>{

            const selected=
                selectedAnswers[
                    currentQuestion
                ]===index;


            html+=`

                <label
                    class="option ${
                        selected
                        ?
                        "selected"
                        :
                        ""
                    }"
                    onclick="
                        selectOption(${index})
                    "
                >

                    <input
                        type="radio"
                        name="answer"
                        ${
                            selected
                            ?
                            "checked"
                            :
                            ""
                        }
                    >

                    <b>
                        ${String.fromCharCode(
                            65+index
                        )}.
                    </b>

                    <span>
                        ${option}
                    </span>

                </label>

            `;

        }
    );


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
   SELECT OPTION
========================================================= */

function selectOption(index){

    if(submitted)return;


    selectedAnswers[
        currentQuestion
    ]=index;


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

function submitTest(autoSubmit=false){

    if(submitted)return;


    submitted=true;


    clearInterval(timerInterval);


    let correct=0;

    let wrong=0;

    let unattempted=0;

    let reviewHTML="";


    currentSet.questions.forEach(
        (q,index)=>{

            const userAnswer=
                selectedAnswers[index];


            let status="";


            if(userAnswer===undefined){

                unattempted++;


                status=`

                    <span class="unattempted">
                        ⚪ Unattempted
                    </span>

                `;

            }

            else if(
                userAnswer===
                q.answer
            ){

                correct++;


                status=`

                    <span class="correct">
                        ✅ Correct
                    </span>

                `;

            }

            else{

                wrong++;


                status=`

                    <span class="wrong">
                        ❌ Wrong
                    </span>

                `;

            }


            const yourAnswer=
                userAnswer===undefined
                ?
                "Not Attempted"
                :
                `${String.fromCharCode(
                    65+userAnswer
                )}. ${q.options[userAnswer]}`;


            const correctAnswer=
                `${String.fromCharCode(
                    65+q.answer
                )}. ${q.options[q.answer]}`;


            reviewHTML+=`

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

        }
    );


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
        .textContent=
        correct;


    document.getElementById("wrong")
        .textContent=
        wrong;


    document.getElementById("unattempted")
        .textContent=
        unattempted;


    document.getElementById("accuracy")
        .textContent=
        accuracy+"%";


    document.getElementById("resultTitle")
        .textContent=
        currentSet.title;


    document.getElementById("review")
        .innerHTML=
        reviewHTML;


    let message;


    if(score>=80){

        message=
            "🏆 Excellent! Aapki Direct & Indirect Speech ki preparation bahut achhi hai.";

    }
    else if(score>=60){

        message=
            "👍 Good! Thodi aur practice se aap aur improve kar sakte hain.";

    }
    else if(score>=40){

        message=
            "📚 Average performance. Narration ke rules aur tense changes revise karein.";

    }
    else{

        message=
            "💪 More practice required. Direct-Indirect ke basic rules dobara revise karein.";

    }


    if(autoSubmit){

        message+=
            " ⏰ Time khatam hone ke karan test automatically submit hua.";

    }


    document.getElementById("resultMessage")
        .textContent=
        message;


    saveCompletedSet(
        currentSet.id
    );


    document.getElementById("testScreen")
        .classList.add("hidden");


    document.getElementById("resultScreen")
        .classList.remove("hidden");


    const nextSet=
        speechTests.find(
            test=>
                test.id===
                currentSet.id+1
        );


    const nextButton=
        document.getElementById(
            "nextSetBtn"
        );


    if(nextSet){

        nextButton.classList.remove(
            "hidden"
        );


        nextButton.textContent=
            `Next Set ${nextSet.id} ➜`;

    }
    else{

        nextButton.classList.add(
            "hidden"
        );

    }


    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

}



/* =========================================================
   REPEAT TEST
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


    const nextSet=
        speechTests.find(
            test=>
                test.id===
                currentSet.id+1
        );


    if(!nextSet){

        alert(
            "🎉 Congratulations! Aapne Direct & Indirect Speech ke sabhi 25 sets complete kar liye."
        );


        loadSetScreen();

        return;

    }


    currentSet=
        nextSet;


    startTest();

}



/* =========================================================
   BACK TO SETS
========================================================= */

function backToSets(){

    clearInterval(
        timerInterval
    );


    submitted=false;


    loadSetScreen();

}



/* =========================================================
   INITIALIZE
========================================================= */

loadSetScreen();