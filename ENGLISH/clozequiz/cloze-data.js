/* =========================================================
   SSC CGL CLOZE TEST DATA
   50 QUIZZES × 10 QUESTIONS = 500 QUESTIONS
   ========================================================= */

"use strict";

const CLOZE_DATA = {};


/* =========================================================
   PASSAGE BANK
   ========================================================= */

const passageBank = [

    {
        title: "The Importance of Education",

        passage:
            "Education plays an important role in the development of a person. It helps an individual to ___1___ knowledge and develop useful skills. A well educated person can ___2___ better decisions and contribute ___3___ the progress of society. Education also teaches us to ___4___ different situations with confidence. Therefore, every child should have ___5___ opportunity to receive good education. It also helps people ___6___ their abilities and become ___7___ members of society. A good education can ___8___ new opportunities and help a person ___9___ a better future. Thus, education should be ___10___ by everyone.",

        answers: [
            "gain",
            "make",
            "to",
            "handle",
            "an",
            "develop",
            "responsible",
            "create",
            "build",
            "valued"
        ]
    },


    {
        title: "The Value of Time",

        passage:
            "Time is one of the most valuable resources in life. Once lost, it can never be ___1___. Successful people understand the importance of time and ___2___ it wisely. They make proper plans and ___3___ their work according to priority. A person who ___4___ time regularly may face difficulties in the future. Hence, we should always ___5___ our time carefully. Proper planning can ___6___ unnecessary delays and help us ___7___ our goals. People who respect time usually ___8___ disciplined and make better ___9___. Therefore, everyone should learn to ___10___ time effectively.",

        answers: [
            "recovered",
            "use",
            "complete",
            "wastes",
            "manage",
            "avoid",
            "achieve",
            "become",
            "decisions",
            "value"
        ]
    },


    {
        title: "Healthy Habits",

        passage:
            "Good health is necessary for a happy and productive life. A person should eat a ___1___ diet and drink enough water. Regular exercise helps the body to remain ___2___. Proper sleep is also ___3___ for mental and physical well-being. We should avoid habits that are ___4___ to our health. Small healthy habits can ___5___ a big difference in our lives. People should also ___6___ enough rest and ___7___ unnecessary stress. A healthy lifestyle can ___8___ our energy and help us ___9___ active throughout the day. Therefore, good habits should be ___10___ regularly.",

        answers: [
            "balanced",
            "fit",
            "essential",
            "harmful",
            "make",
            "take",
            "avoid",
            "increase",
            "remain",
            "followed"
        ]
    },


    {
        title: "Reading Books",

        passage:
            "Reading is a useful habit that improves both knowledge and imagination. Books provide information about ___1___ subjects and different cultures. Regular reading also helps a person to ___2___ vocabulary and improve language skills. It encourages readers to think ___3___ and understand ideas better. A good book can ___4___ us to places and experiences that we may never ___5___ in real life. Reading also helps us ___6___ concentration and ___7___ our ability to understand complex ideas. People who read regularly often ___8___ better communication skills and can ___9___ their thoughts more clearly. Therefore, reading should be ___10___ part of daily life.",

        answers: [
            "various",
            "increase",
            "critically",
            "take",
            "experience",
            "improve",
            "develop",
            "have",
            "express",
            "a"
        ]
    },


    {
        title: "The Environment",

        passage:
            "The environment provides us with everything necessary for life. However, human activities have caused serious damage ___1___ nature. Pollution, deforestation and excessive use of resources ___2___ major problems today. It is our responsibility to ___3___ the environment and use natural resources ___4___. If people work together, they can ___5___ the harmful effects of pollution. We should ___6___ waste and ___7___ more trees wherever possible. Governments can also ___8___ strict rules to protect natural resources. Every individual must ___9___ responsibility and ___10___ the environment clean.",

        answers: [
            "to",
            "are",
            "protect",
            "wisely",
            "reduce",
            "avoid",
            "plant",
            "make",
            "take",
            "keep"
        ]
    },


    {
        title: "Hard Work",

        passage:
            "Success rarely comes without effort. A person who works hard and remains ___1___ can achieve his goals. Difficulties may ___2___ during the journey, but they should not discourage us. Instead, challenges should be ___3___ as opportunities to learn. A positive attitude and continuous effort can ___4___ confidence and help a person ___5___ successful. Hard work also teaches us to ___6___ patient and ___7___ from our mistakes. Those who never ___8___ trying are more likely to ___9___ their objectives and ___10___ their dreams into reality.",

        answers: [
            "determined",
            "arise",
            "seen",
            "build",
            "become",
            "remain",
            "learn",
            "stop",
            "achieve",
            "turn"
        ]
    },


    {
        title: "Teamwork",

        passage:
            "Teamwork is essential when people have to achieve a common goal. Each member of a team should ___1___ responsibility and cooperate with others. Good communication helps team members ___2___ misunderstandings. When people work together, they can ___3___ ideas and solve problems more effectively. A successful team is based ___4___ trust, respect and mutual ___5___. Team members should ___6___ each other and ___7___ their knowledge freely. When everyone ___8___ together, difficult tasks become ___9___ and the team can ___10___ its objectives successfully.",

        answers: [
            "take",
            "avoid",
            "share",
            "on",
            "support",
            "help",
            "share",
            "works",
            "easier",
            "achieve"
        ]
    },


    {
        title: "Technology",

        passage:
            "Technology has changed the way people live and work. Modern devices allow us to communicate ___1___ people across the world within seconds. Technology has also made many tasks ___2___ and faster. However, excessive dependence ___3___ technology can create problems. Therefore, it is important to use technology ___4___ and maintain a proper ___5___ between digital and real life. Technology can ___6___ access to information and ___7___ communication. However, people should ___8___ their screen time and ___9___ their privacy while using online services. Technology should be used ___10___ for the benefit of society.",

        answers: [
            "with",
            "easier",
            "on",
            "responsibly",
            "balance",
            "improve",
            "facilitate",
            "limit",
            "protect",
            "wisely"
        ]
    },


    {
        title: "Discipline",

        passage:
            "Discipline is an important quality that helps people achieve their goals. A disciplined person follows rules and ___1___ his responsibilities seriously. Discipline teaches us to control our ___2___ and use our time effectively. Students who remain disciplined are more likely to ___3___ good results. It also helps people ___4___ focused even when situations become ___5___. A disciplined person usually ___6___ a proper routine and ___7___ unnecessary distractions. Such habits can ___8___ productivity and ___9___ people move towards their goals. Therefore, discipline should be ___10___ from an early age.",

        answers: [
            "takes",
            "actions",
            "achieve",
            "stay",
            "difficult",
            "follows",
            "avoids",
            "increase",
            "help",
            "developed"
        ]
    },


    {
        title: "Courage",

        passage:
            "Courage does not mean the absence of fear. It means having the strength to ___1___ difficulties despite fear. A courageous person believes ___2___ himself and does not easily give ___3___. Challenges can make us stronger if we face them with a positive ___4___. Courage also helps us ___5___ the right thing when it is difficult. A brave person is willing to ___6___ responsibility and ___7___ from mistakes. Courage enables us to ___8___ difficult situations and ___9___ moving forward. Therefore, we should always ___10___ confidence in ourselves.",

        answers: [
            "face",
            "in",
            "up",
            "attitude",
            "do",
            "take",
            "learn",
            "handle",
            "keep",
            "develop"
        ]
    }

];


/* =========================================================
   OPTIONS FOR EACH CORRECT ANSWER
   IMPORTANT:
   Every set contains its correct answer.
   ========================================================= */

const optionBank = {

    gain: ["gain", "lose", "hide", "forget"],
    make: ["make", "take", "break", "cancel"],
    to: ["to", "at", "by", "from"],
    handle: ["handle", "avoid", "create", "ignore"],
    an: ["an", "a", "the", "no"],

    develop: ["develop", "destroy", "ignore", "remove"],
    responsible: ["responsible", "careless", "inactive", "weak"],
    create: ["create", "destroy", "remove", "forget"],
    build: ["build", "destroy", "lose", "break"],
    valued: ["valued", "ignored", "rejected", "forgotten"],

    recovered: ["recovered", "destroyed", "lost", "changed"],
    use: ["use", "waste", "lose", "break"],
    complete: ["complete", "destroy", "forget", "delay"],
    wastes: ["wastes", "saves", "uses", "finds"],
    manage: ["manage", "ignore", "lose", "waste"],
    avoid: ["avoid", "create", "increase", "cause"],
    achieve: ["achieve", "lose", "avoid", "forget"],
    become: ["become", "remain", "leave", "forget"],
    decisions: ["decisions", "mistakes", "questions", "problems"],
    value: ["value", "waste", "ignore", "destroy"],

    balanced: ["balanced", "unhealthy", "empty", "poor"],
    fit: ["fit", "ill", "weak", "tired"],
    essential: ["essential", "optional", "rare", "temporary"],
    harmful: ["harmful", "useful", "helpful", "necessary"],
    take: ["take", "give", "lose", "avoid"],
    increase: ["increase", "reduce", "remove", "forget"],
    remain: ["remain", "leave", "become", "disappear"],
    followed: ["followed", "ignored", "avoided", "forgotten"],

    various: ["various", "single", "limited", "similar"],
    critically: ["critically", "carelessly", "rarely", "silently"],
    experience: ["experience", "avoid", "ignore", "forget"],
    improve: ["improve", "damage", "reduce", "remove"],
    have: ["have", "lose", "hide", "forget"],
    express: ["express", "hide", "remove", "forget"],
    a: ["a", "an", "the", "no"],

    are: ["are", "is", "was", "has"],
    protect: ["protect", "damage", "ignore", "destroy"],
    wisely: ["wisely", "carelessly", "rarely", "slowly"],
    reduce: ["reduce", "increase", "create", "repeat"],
    plant: ["plant", "remove", "destroy", "cut"],
    keep: ["keep", "lose", "remove", "change"],

    determined: ["determined", "careless", "confused", "angry"],
    arise: ["arise", "disappear", "finish", "stop"],
    seen: ["seen", "hidden", "avoided", "forgotten"],
    remain: ["remain", "leave", "become", "disappear"],
    learn: ["learn", "ignore", "forget", "avoid"],
    stop: ["stop", "continue", "start", "repeat"],
    turn: ["turn", "throw", "hide", "break"],

    share: ["share", "hide", "lose", "destroy"],
    on: ["on", "at", "by", "from"],
    support: ["support", "anger", "conflict", "fear"],
    help: ["help", "harm", "ignore", "avoid"],
    works: ["works", "stops", "fails", "waits"],
    easier: ["easier", "harder", "slower", "weaker"],

    with: ["with", "from", "at", "by"],
    responsibly: ["responsibly", "carelessly", "randomly", "rarely"],
    balance: ["balance", "problem", "mistake", "difference"],
    facilitate: ["facilitate", "prevent", "destroy", "ignore"],
    limit: ["limit", "increase", "remove", "forget"],
    privacy: ["privacy", "speed", "noise", "distance"],

    takes: ["takes", "loses", "forgets", "avoids"],
    actions: ["actions", "books", "friends", "plans"],
    stay: ["stay", "leave", "become", "disappear"],
    difficult: ["difficult", "simple", "easy", "short"],
    follows: ["follows", "breaks", "ignores", "loses"],
    avoids: ["avoids", "creates", "accepts", "increases"],
    developed: ["developed", "destroyed", "ignored", "forgotten"],

    face: ["face", "hide", "create", "forget"],
    in: ["in", "on", "at", "from"],
    up: ["up", "away", "out", "off"],
    attitude: ["attitude", "mistake", "problem", "question"],
    do: ["do", "avoid", "forget", "hide"],
    confidence: ["confidence", "fear", "anger", "doubt"]
};


/* =========================================================
   SHUFFLE OPTIONS
   ========================================================= */

function shuffleArray(array) {

    const result = [...array];

    for (
        let i = result.length - 1;
        i > 0;
        i--
    ) {

        const j =
            Math.floor(
                Math.random() * (i + 1)
            );

        [
            result[i],
            result[j]
        ] =
        [
            result[j],
            result[i]
        ];
    }

    return result;
}


/* =========================================================
   GET OPTIONS
   ========================================================= */

function getOptions(answer) {

    let options = optionBank[answer];

    /*
     * Safety fallback.
     */

    if (!options) {

        options = [
            answer,
            "different",
            "possible",
            "common"
        ];
    }

    /*
     * Make absolutely sure that
     * the correct answer exists.
     */

    if (!options.includes(answer)) {

        options = [
            answer,
            ...options
        ];
    }

    /*
     * Remove duplicate options.
     */

    options = [...new Set(options)];

    /*
     * Exactly 4 options.
     */

    options = options.slice(0, 4);

    /*
     * Final safety check.
     */

    if (!options.includes(answer)) {
        options[0] = answer;
    }

    return shuffleArray(options);
}


/* =========================================================
   CREATE ONE QUIZ
   ========================================================= */

function createQuiz(
    quizNumber,
    passageIndex
) {

    const passage =
        passageBank[passageIndex];

    const questions = [];


    for (
        let i = 0;
        i < 10;
        i++
    ) {

        const answer =
            passage.answers[i];


        questions.push({

            id: i + 1,

            question:
                `Choose the most appropriate word for blank ${i + 1}.`,

            options:
                getOptions(answer),

            answer:
                answer

        });

    }


    return {

        id:
            quizNumber,

        title:
            `Cloze Test Quiz ${quizNumber}`,

        passageTitle:
            passage.title,

        passage:
            passage.passage,

        questions:
            questions

    };
}


/* =========================================================
   GENERATE 50 QUIZZES
   ========================================================= */

for (
    let quizNumber = 1;
    quizNumber <= 50;
    quizNumber++
) {

    const passageIndex =
        (quizNumber - 1) %
        passageBank.length;


    CLOZE_DATA[quizNumber] =
        createQuiz(
            quizNumber,
            passageIndex
        );
}


/* =========================================================
   GLOBAL ACCESS
   ========================================================= */

window.CLOZE_DATA =
    CLOZE_DATA;


/* =========================================================
   DEBUG CHECK
   ========================================================= */

console.log(
    "================================="
);

console.log(
    "SSC CGL CLOZE TEST LOADED"
);

console.log(
    "Total Quizzes:",
    Object.keys(CLOZE_DATA).length
);

console.log(
    "Questions in Quiz 1:",
    CLOZE_DATA[1].questions.length
);

console.log(
    "Questions in Quiz 50:",
    CLOZE_DATA[50].questions.length
);

console.log(
    "================================="
);