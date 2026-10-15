/* =========================================================
   SSC READING COMPREHENSION
   25 PASSAGE SET SYSTEM
========================================================= */


/* =========================================================
   PASSAGE DATA
========================================================= */

const passageSets = [

/* =========================================================
   SET 1
========================================================= */

{
    id:1,

    title:"Technology and Modern Life",

    description:"Technology has changed the way people communicate, learn and work.",

    passageTitle:"Technology and Modern Life",

    passage:`
        <p>
        In today's fast-changing world, technology has become an important
        part of everyday life. It has made communication faster, improved
        access to information, and made many tasks easier. Students can
        attend online classes, search for educational material, and
        communicate with teachers from almost anywhere.
        </p>

        <p>
        However, technology is useful only when it is used wisely. Spending
        too much time on social media or entertainment can reduce
        concentration and waste valuable time. Therefore, students should
        learn to balance technology with reading, physical activities, and
        face-to-face interaction. The real benefit of technology depends not
        simply on having access to it, but on using it in a responsible and
        purposeful manner.
        </p>
    `,

    questions:[

        {
            question:"What is the main idea of the passage?",

            options:[
                "Technology should be avoided by students.",
                "Technology is useful when used wisely and responsibly.",
                "Social media is the most useful form of technology.",
                "Online classes are better than traditional classes."
            ],

            answer:1,

            explanation:"Passage ka main idea ye hai ki technology useful hai, lekin iska use wisely aur responsibly kiya jaana chahiye."
        },

        {
            question:"According to the passage, technology has made communication:",

            options:[
                "More difficult",
                "More expensive",
                "Faster",
                "Less important"
            ],

            answer:2,

            explanation:"Passage mein clearly bataya gaya hai ki technology ne communication ko faster banaya hai."
        },

        {
            question:"What can excessive use of social media cause?",

            options:[
                "Better concentration",
                "More physical activity",
                "Improved communication",
                "Reduced concentration and wasted time"
            ],

            answer:3,

            explanation:"Social media ya entertainment ka excessive use concentration ko reduce kar sakta hai aur valuable time waste kar sakta hai."
        },

        {
            question:"What should students balance technology with?",

            options:[
                "Only entertainment",
                "Reading, physical activities and face-to-face interaction",
                "More social media",
                "Longer online classes"
            ],

            answer:1,

            explanation:"Students ko technology ke saath reading, physical activities aur face-to-face interaction ka balance banana chahiye."
        },

        {
            question:"The real benefit of technology depends on:",

            options:[
                "Its price",
                "Its popularity",
                "Responsible and purposeful use",
                "The number of applications installed"
            ],

            answer:2,

            explanation:"Technology ka actual benefit sirf access hone se nahi, balki responsible aur purposeful use se milta hai."
        }

    ]
},



/* =========================================================
   SET 2
========================================================= */

{
    id:2,

    title:"Importance of Reading",

    description:"Reading develops knowledge, imagination and critical thinking.",

    passageTitle:"The Importance of Reading",

    passage:`
        <p>
        Reading is one of the simplest ways to improve knowledge. A person
        who reads regularly comes across new ideas, different opinions and
        unfamiliar subjects. Books, newspapers and reliable online sources
        can all help a learner understand the world better.
        </p>

        <p>
        Reading also improves concentration and vocabulary. Unlike quickly
        moving through short pieces of information, careful reading requires
        attention and patience. Students who develop a regular reading habit
        often find it easier to understand difficult subjects. Thus, reading
        is not merely a source of entertainment; it is an important tool for
        intellectual growth.
        </p>
    `,

    questions:[

        {
            question:"What is one major benefit of reading?",

            options:[
                "It reduces knowledge.",
                "It improves knowledge.",
                "It prevents learning.",
                "It wastes all free time."
            ],

            answer:1,

            explanation:"Passage ke according reading knowledge improve karne ka simple aur effective way hai."
        },

        {
            question:"Reading exposes a person to:",

            options:[
                "Only one opinion",
                "New ideas and different opinions",
                "Only entertainment",
                "Only advertisements"
            ],

            answer:1,

            explanation:"Regular reading se person ko new ideas, different opinions aur unfamiliar subjects ke baare mein pata chalta hai."
        },

        {
            question:"What does careful reading require?",

            options:[
                "Attention and patience",
                "Speed only",
                "Entertainment",
                "Competition"
            ],

            answer:0,

            explanation:"Passage specifically kehta hai ki careful reading ke liye attention aur patience required hota hai."
        },

        {
            question:"Reading can improve:",

            options:[
                "Only physical strength",
                "Concentration and vocabulary",
                "Only eyesight",
                "Only handwriting"
            ],

            answer:1,

            explanation:"Reading concentration aur vocabulary dono improve karne mein help karta hai."
        },

        {
            question:"According to the passage, reading is also a tool for:",

            options:[
                "Intellectual growth",
                "Physical training",
                "Financial investment",
                "Entertainment only"
            ],

            answer:0,

            explanation:"Passage ke end mein reading ko intellectual growth ka important tool bataya gaya hai."
        }

    ]
},



/* =========================================================
   SET 3
========================================================= */

{
    id:3,

    title:"Value of Time",

    description:"Time is limited and should be used carefully.",

    passageTitle:"The Value of Time",

    passage:`
        <p>
        Time is one of the most valuable resources available to every person.
        Unlike money, lost time cannot be earned back. Every individual gets
        the same number of hours in a day, but people use those hours in
        different ways.
        </p>

        <p>
        Successful people generally understand the importance of planning.
        They decide their priorities and avoid unnecessary activities.
        This does not mean that a person should work continuously without
        rest. Proper rest is also necessary. The real purpose of time
        management is to create a healthy balance between work, learning,
        responsibilities and relaxation.
        </p>
    `,

    questions:[

        {
            question:"Why is time considered valuable?",

            options:[
                "It can always be bought.",
                "Lost time cannot be earned back.",
                "Everyone has unlimited time.",
                "It can be stored."
            ],

            answer:1,

            explanation:"Time ki khas baat ye hai ki once lost, use wapas earn nahi kiya ja sakta."
        },

        {
            question:"How many hours does every individual get in a day?",

            options:[
                "Different fixed amounts",
                "The same number of hours",
                "Unlimited hours",
                "No fixed time"
            ],

            answer:1,

            explanation:"Passage ke according sabhi people ko day mein same number of hours milte hain."
        },

        {
            question:"Successful people generally understand the importance of:",

            options:[
                "Ignoring priorities",
                "Planning",
                "Sleeping all day",
                "Avoiding responsibility"
            ],

            answer:1,

            explanation:"Successful people planning aur priorities ko importance dete hain."
        },

        {
            question:"What is also necessary for proper time management?",

            options:[
                "No work",
                "Proper rest",
                "Continuous entertainment",
                "Avoiding learning"
            ],

            answer:1,

            explanation:"Passage clearly batata hai ki proper rest bhi necessary hai."
        },

        {
            question:"The purpose of time management is to create:",

            options:[
                "More pressure",
                "A healthy balance",
                "Only work",
                "Only relaxation"
            ],

            answer:1,

            explanation:"Time management ka purpose work, learning, responsibilities aur relaxation ke beech healthy balance banana hai."
        }

    ]
},



/* =========================================================
   SET 4
========================================================= */

{
    id:4,

    title:"Environmental Protection",

    description:"Protecting the environment is a shared responsibility.",

    passageTitle:"Protecting the Environment",

    passage:`
        <p>
        The environment provides humans with air, water, food and many other
        resources. However, increasing pollution and careless use of natural
        resources have created serious challenges. Rivers are polluted,
        forests are reduced and large quantities of waste are produced every
        day.
        </p>

        <p>
        Environmental protection cannot be the responsibility of governments
        alone. Individuals can also contribute by reducing unnecessary waste,
        saving water, planting trees and using resources carefully. Small
        actions performed by millions of people can create a significant
        difference. Protecting nature today is necessary for the well-being
        of future generations.
        </p>
    `,

    questions:[

        {
            question:"What does the environment provide humans with?",

            options:[
                "Only entertainment",
                "Air, water, food and resources",
                "Only buildings",
                "Only technology"
            ],

            answer:1,

            explanation:"Passage ke according environment humans ko air, water, food aur many natural resources provide karta hai."
        },

        {
            question:"What has created serious environmental challenges?",

            options:[
                "Reading",
                "Increasing pollution and careless resource use",
                "Planting trees",
                "Saving water"
            ],

            answer:1,

            explanation:"Increasing pollution aur natural resources ka careless use environmental problems ka major reason hai."
        },

        {
            question:"Environmental protection is the responsibility of:",

            options:[
                "Governments alone",
                "Individuals alone",
                "Both governments and individuals",
                "Scientists only"
            ],

            answer:2,

            explanation:"Passage kehta hai ki environmental protection sirf government ki nahi, individuals ki bhi responsibility hai."
        },

        {
            question:"Which action is suggested in the passage?",

            options:[
                "Wasting water",
                "Producing more waste",
                "Saving water",
                "Cutting forests"
            ],

            answer:2,

            explanation:"Saving water, planting trees aur unnecessary waste reduce karna suggested actions hain."
        },

        {
            question:"Why should nature be protected today?",

            options:[
                "For future generations",
                "For advertisements",
                "For entertainment",
                "For increasing pollution"
            ],

            answer:0,

            explanation:"Nature ko protect karna future generations ke well-being ke liye necessary hai."
        }

    ]
},



/* =========================================================
   SET 5
========================================================= */

{
    id:5,

    title:"Discipline and Success",

    description:"Discipline helps people turn goals into consistent action.",

    passageTitle:"Discipline and Success",

    passage:`
        <p>
        Discipline is the habit of doing what needs to be done even when a
        person does not feel motivated. Motivation can change from day to day,
        but discipline helps a person continue working toward a goal.
        </p>

        <p>
        Students who follow a regular study schedule usually develop better
        control over their time. Discipline does not mean that mistakes will
        never happen. Instead, it means learning from mistakes and returning
        to the planned routine. Over time, small disciplined actions can
        produce meaningful results.
        </p>
    `,

    questions:[

        {
            question:"What is discipline described as?",

            options:[
                "Waiting for motivation",
                "Doing necessary work consistently",
                "Avoiding goals",
                "Never making mistakes"
            ],

            answer:1,

            explanation:"Discipline ka meaning hai motivation na hone par bhi necessary work ko consistently karna."
        },

        {
            question:"What can change from day to day?",

            options:[
                "Motivation",
                "Time itself",
                "The past",
                "Basic laws"
            ],

            answer:0,

            explanation:"Passage ke according motivation day to day change ho sakti hai."
        },

        {
            question:"A regular study schedule can improve:",

            options:[
                "Time control",
                "Pollution",
                "Weather",
                "Entertainment"
            ],

            answer:0,

            explanation:"Regular study schedule students ko time par better control develop karne mein help karta hai."
        },

        {
            question:"Does discipline mean never making mistakes?",

            options:[
                "Yes",
                "No",
                "Only for students",
                "Only at work"
            ],

            answer:1,

            explanation:"Passage clearly kehta hai ki discipline ka matlab mistakes ka completely absent hona nahi hai."
        },

        {
            question:"Small disciplined actions can produce:",

            options:[
                "Meaningful results",
                "No results",
                "Only confusion",
                "Immediate failure"
            ],

            answer:0,

            explanation:"Time ke saath small disciplined actions meaningful results produce kar sakte hain."
        }

    ]
},



/* =========================================================
   SET 6
========================================================= */

{
    id:6,

    title:"Healthy Habits",

    description:"Simple daily habits can support a healthy lifestyle.",

    passageTitle:"Healthy Daily Habits",

    passage:`
        <p>
        Good health is influenced by many everyday choices. Eating balanced
        meals, getting enough sleep and remaining physically active are basic
        habits that can support overall well-being. These habits do not need
        to be complicated or expensive.
        </p>

        <p>
        Consistency is more important than occasional effort. A person who
        follows reasonable habits regularly is more likely to maintain them
        over time. It is also important to understand that health is not
        simply about physical fitness. Mental rest, social connection and
        adequate recovery are important parts of a balanced lifestyle.
        </p>
    `,

    questions:[

        {
            question:"Which is mentioned as a healthy habit?",

            options:[
                "Skipping sleep",
                "Eating balanced meals",
                "Avoiding all activity",
                "Ignoring rest"
            ],

            answer:1,

            explanation:"Balanced meals, enough sleep aur physical activity healthy habits ke examples hain."
        },

        {
            question:"According to the passage, healthy habits should be:",

            options:[
                "Complicated",
                "Expensive",
                "Reasonable and consistent",
                "Rare"
            ],

            answer:2,

            explanation:"Passage consistency aur reasonable habits ko important batata hai."
        },

        {
            question:"What is more important than occasional effort?",

            options:[
                "Consistency",
                "Luck",
                "Money",
                "Popularity"
            ],

            answer:0,

            explanation:"Healthy lifestyle maintain karne ke liye consistency occasional effort se zyada important hai."
        },

        {
            question:"Health is not simply about:",

            options:[
                "Physical fitness",
                "Sleep",
                "Food",
                "Recovery"
            ],

            answer:0,

            explanation:"Passage ke according health sirf physical fitness tak limited nahi hai."
        },

        {
            question:"Which is also important for a balanced lifestyle?",

            options:[
                "Mental rest",
                "Continuous work",
                "No social connection",
                "Ignoring recovery"
            ],

            answer:0,

            explanation:"Mental rest, social connection aur adequate recovery balanced lifestyle ke important parts hain."
        }

    ]
},



/* =========================================================
   SET 7
========================================================= */

{
    id:7,

    title:"Role of Education",

    description:"Education develops knowledge, skills and responsible thinking.",

    passageTitle:"The Role of Education",

    passage:`
        <p>
        Education is often associated with examinations and qualifications,
        but its purpose is much broader. It helps people understand ideas,
        develop useful skills and make informed decisions. A good education
        can also encourage curiosity and the willingness to learn throughout
        life.
        </p>

        <p>
        Education does not guarantee that every problem will disappear.
        Instead, it gives individuals better tools for dealing with problems.
        It can help people understand different viewpoints and participate
        responsibly in society. Therefore, education should be viewed as a
        process of continuous development rather than simply a means of
        obtaining certificates.
        </p>
    `,

    questions:[

        {
            question:"Education is often associated with:",

            options:[
                "Examinations and qualifications",
                "Sports only",
                "Entertainment",
                "Travel"
            ],

            answer:0,

            explanation:"Passage ke first sentence mein education ko examinations aur qualifications se associated bataya gaya hai."
        },

        {
            question:"Education helps people make:",

            options:[
                "Informed decisions",
                "Random decisions",
                "No decisions",
                "Only financial decisions"
            ],

            answer:0,

            explanation:"Education people ko informed decisions lene mein help karta hai."
        },

        {
            question:"Does education guarantee that every problem will disappear?",

            options:[
                "Yes",
                "No",
                "Only for students",
                "Only in schools"
            ],

            answer:1,

            explanation:"Passage clearly kehta hai ki education every problem ko automatically disappear nahi karta."
        },

        {
            question:"Education helps people understand:",

            options:[
                "Different viewpoints",
                "Only their own opinion",
                "Only advertisements",
                "Only numbers"
            ],

            answer:0,

            explanation:"Education different viewpoints ko understand karne mein help karta hai."
        },

        {
            question:"Education should be viewed as:",

            options:[
                "Only certificate collection",
                "Continuous development",
                "Entertainment",
                "A temporary activity"
            ],

            answer:1,

            explanation:"Passage education ko continuous development ka process batata hai."
        }

    ]
},



/* =========================================================
   SET 8
========================================================= */

{
    id:8,

    title:"Importance of Exercise",

    description:"Regular physical activity can support physical and mental well-being.",

    passageTitle:"Exercise and Well-being",

    passage:`
        <p>
        Regular physical activity is an important part of a balanced lifestyle.
        Exercise can improve physical fitness and may also help people manage
        stress. Activities such as walking, cycling, sports or simple exercises
        can be included in daily routines.
        </p>

        <p>
        The most useful routine is one that can be followed consistently.
        People do not necessarily need complicated training programmes to
        remain active. Choosing an activity that is suitable and enjoyable
        can make it easier to continue. Exercise should therefore be seen as
        a regular habit rather than a short-term activity.
        </p>
    `,

    questions:[

        {
            question:"Exercise is described as part of:",

            options:[
                "A balanced lifestyle",
                "Entertainment only",
                "Academic study",
                "Travel"
            ],

            answer:0,

            explanation:"Passage exercise ko balanced lifestyle ka important part batata hai."
        },

        {
            question:"Exercise may help people manage:",

            options:[
                "Stress",
                "Weather",
                "Examinations automatically",
                "Traffic"
            ],

            answer:0,

            explanation:"Passage ke according exercise stress manage karne mein help kar sakta hai."
        },

        {
            question:"Which activity is mentioned?",

            options:[
                "Walking",
                "Watching television",
                "Sleeping",
                "Reading only"
            ],

            answer:0,

            explanation:"Walking, cycling, sports aur simple exercises examples ke roop mein diye gaye hain."
        },

        {
            question:"The most useful routine is one that can be:",

            options:[
                "Followed consistently",
                "Changed every minute",
                "Avoided",
                "Used only once"
            ],

            answer:0,

            explanation:"Consistency exercise routine ko sustainable banati hai."
        },

        {
            question:"Exercise should be seen as:",

            options:[
                "A short-term activity",
                "A regular habit",
                "A competition only",
                "A punishment"
            ],

            answer:1,

            explanation:"Passage exercise ko short-term activity ke bajay regular habit ke roop mein dekhne ki baat karta hai."
        }

    ]
},



/* =========================================================
   SET 9
========================================================= */

{
    id:9,

    title:"Water Conservation",

    description:"Water conservation is essential because freshwater resources are limited.",

    passageTitle:"Saving Water",

    passage:`
        <p>
        Water is essential for human life, agriculture and industry. Although
        the earth contains a large amount of water, only a small portion is
        available as usable freshwater. Growing populations and changing
        patterns of water use can increase pressure on these resources.
        </p>

        <p>
        Water conservation does not always require major projects. Simple
        actions such as repairing leaking taps, avoiding unnecessary wastage
        and using water carefully can help. Farmers, industries and households
        all have a role to play. Responsible use today can help ensure that
        sufficient water remains available in the future.
        </p>
    `,

    questions:[

        {
            question:"Water is essential for:",

            options:[
                "Only agriculture",
                "Human life, agriculture and industry",
                "Only industry",
                "Only transportation"
            ],

            answer:1,

            explanation:"Passage water ko human life, agriculture aur industry ke liye essential batata hai."
        },

        {
            question:"Only a small portion of Earth's water is:",

            options:[
                "Usable freshwater",
                "Salt",
                "Frozen permanently",
                "Artificial"
            ],

            answer:0,

            explanation:"Earth par large amount water hai, lekin usable freshwater ka portion small hai."
        },

        {
            question:"Which action can help conserve water?",

            options:[
                "Ignoring leaks",
                "Repairing leaking taps",
                "Wasting water",
                "Leaving taps open"
            ],

            answer:1,

            explanation:"Leaking taps repair karna water conservation ka simple action hai."
        },

        {
            question:"Who has a role in water conservation?",

            options:[
                "Households only",
                "Farmers only",
                "Industries only",
                "All of them"
            ],

            answer:3,

            explanation:"Farmers, industries aur households sabhi water conservation mein role play karte hain."
        },

        {
            question:"Responsible water use can help:",

            options:[
                "Ensure future availability",
                "Increase wastage",
                "Reduce freshwater",
                "Stop agriculture"
            ],

            answer:0,

            explanation:"Responsible use future mein sufficient water availability ensure karne mein help karta hai."
        }

    ]
},



/* =========================================================
   SET 10
========================================================= */

{
    id:10,

    title:"Power of Communication",

    description:"Clear communication helps people understand one another.",

    passageTitle:"Effective Communication",

    passage:`
        <p>
        Communication is not simply the act of speaking. Effective
        communication involves expressing ideas clearly and listening
        carefully to others. When people communicate well, misunderstandings
        can often be reduced.
        </p>

        <p>
        Good communication is especially important in workplaces, classrooms
        and relationships. A person should consider the needs of the listener
        and choose suitable words. Listening is equally important because
        communication is a two-way process. Patience and respect can make
        communication more effective.
        </p>
    `,

    questions:[

        {
            question:"Effective communication involves:",

            options:[
                "Speaking only",
                "Speaking clearly and listening carefully",
                "Ignoring others",
                "Using difficult words"
            ],

            answer:1,

            explanation:"Effective communication mein clear expression ke saath careful listening bhi important hai."
        },

        {
            question:"Good communication can reduce:",

            options:[
                "Misunderstandings",
                "Knowledge",
                "Respect",
                "Listening"
            ],

            answer:0,

            explanation:"Clear communication misunderstandings ko reduce kar sakta hai."
        },

        {
            question:"Communication is especially important in:",

            options:[
                "Classrooms",
                "Workplaces",
                "Relationships",
                "All of these"
            ],

            answer:3,

            explanation:"Passage workplace, classroom aur relationships teeno mein communication ki importance batata hai."
        },

        {
            question:"A speaker should consider:",

            options:[
                "Only themselves",
                "The needs of the listener",
                "Only difficult vocabulary",
                "Nothing"
            ],

            answer:1,

            explanation:"Speaker ko listener ki needs consider karni chahiye aur suitable words choose karne chahiye."
        },

        {
            question:"Communication is described as:",

            options:[
                "A one-way process",
                "A two-way process",
                "An unnecessary process",
                "A written process only"
            ],

            answer:1,

            explanation:"Listening ki importance ke karan communication ko two-way process bataya gaya hai."
        }

    ]
},



/* =========================================================
   SET 11
========================================================= */

{
    id:11,

    title:"Importance of Trees",

    description:"Trees support ecosystems and provide several benefits to humans.",

    passageTitle:"Trees and Human Life",

    passage:`
        <p>
        Trees are an important part of natural ecosystems. They provide
        shelter for many animals, help maintain soil quality and contribute
        to cleaner air. Trees also provide shade and can reduce the effect
        of excessive heat in many areas.
        </p>

        <p>
        Rapid urban development can lead to the loss of trees. For this
        reason, planting and protecting trees should be considered an
        important community responsibility. Trees require years to grow,
        so protecting existing ones is often as important as planting new
        ones.
        </p>
    `,

    questions:[

        {
            question:"Trees provide shelter for:",

            options:[
                "Many animals",
                "Only humans",
                "Buildings",
                "Vehicles"
            ],

            answer:0,

            explanation:"Passage ke according trees many animals ko shelter provide karte hain."
        },

        {
            question:"Trees contribute to:",

            options:[
                "Cleaner air",
                "More pollution",
                "More waste",
                "Traffic"
            ],

            answer:0,

            explanation:"Trees cleaner air maintain karne mein contribute karte hain."
        },

        {
            question:"Rapid urban development can lead to:",

            options:[
                "More forests",
                "Loss of trees",
                "More rainfall automatically",
                "Better soil everywhere"
            ],

            answer:1,

            explanation:"Rapid urban development trees ke loss ka reason ban sakta hai."
        },

        {
            question:"Protecting trees should be:",

            options:[
                "Ignored",
                "A community responsibility",
                "Done only by children",
                "Avoided"
            ],

            answer:1,

            explanation:"Passage trees ko protect karna community responsibility batata hai."
        },

        {
            question:"Why is protecting existing trees important?",

            options:[
                "Trees grow instantly.",
                "Trees require years to grow.",
                "Trees need no time.",
                "Trees are temporary."
            ],

            answer:1,

            explanation:"Existing trees ko protect karna important hai kyunki new trees ko grow hone mein years lagte hain."
        }

    ]
},



/* =========================================================
   SET 12
========================================================= */

{
    id:12,

    title:"Learning from Failure",

    description:"Failure can provide useful lessons when people respond positively.",

    passageTitle:"Learning from Failure",

    passage:`
        <p>
        Failure is often viewed negatively, but it can provide valuable
        information. When a plan does not produce the expected result, a
        person can examine what went wrong and identify areas for improvement.
        </p>

        <p>
        This does not mean that every failure automatically leads to success.
        Learning requires honest reflection and willingness to change.
        People who treat mistakes as opportunities to learn are more likely
        to improve their future performance. In this sense, failure can become
        part of the learning process.
        </p>
    `,

    questions:[

        {
            question:"Failure can provide:",

            options:[
                "Valuable information",
                "No information",
                "Only entertainment",
                "Permanent success"
            ],

            answer:0,

            explanation:"Failure se person ko valuable information mil sakti hai about what went wrong."
        },

        {
            question:"After failure, a person can examine:",

            options:[
                "What went wrong",
                "Only other people",
                "The weather",
                "Nothing"
            ],

            answer:0,

            explanation:"Failure ke baad what went wrong examine karna improvement ke liye useful hai."
        },

        {
            question:"Does every failure automatically lead to success?",

            options:[
                "Yes",
                "No",
                "Always",
                "Only in school"
            ],

            answer:1,

            explanation:"Passage clearly states that every failure automatically success nahi deta."
        },

        {
            question:"Learning from failure requires:",

            options:[
                "Honest reflection",
                "Ignoring mistakes",
                "Blaming others",
                "Giving up"
            ],

            answer:0,

            explanation:"Honest reflection aur willingness to change learning ke liye required hain."
        },

        {
            question:"Failure can become part of:",

            options:[
                "The learning process",
                "Entertainment",
                "A holiday",
                "Competition only"
            ],

            answer:0,

            explanation:"Passage failure ko learning process ka part batata hai."
        }

    ]
},



/* =========================================================
   SET 13
========================================================= */

{
    id:13,

    title:"Public Transport",

    description:"Public transportation can benefit cities when used effectively.",

    passageTitle:"Public Transportation",

    passage:`
        <p>
        Public transportation allows many people to travel using shared
        vehicles such as buses and trains. In crowded cities, effective
        public transport can reduce the number of private vehicles on roads.
        This may help reduce traffic and pollution.
        </p>

        <p>
        For public transport to be successful, it needs to be reliable,
        affordable and convenient. People are more likely to use buses or
        trains when services are frequent and comfortable. Better public
        transportation can therefore benefit both individuals and cities.
        </p>
    `,

    questions:[

        {
            question:"Public transportation includes:",

            options:[
                "Only private cars",
                "Buses and trains",
                "Only bicycles",
                "Only airplanes"
            ],

            answer:1,

            explanation:"Passage buses aur trains ko public transportation ke examples ke roop mein mention karta hai."
        },

        {
            question:"Effective public transport can reduce:",

            options:[
                "Private vehicles on roads",
                "Public services",
                "Education",
                "Communication"
            ],

            answer:0,

            explanation:"Good public transport private vehicles ki road usage ko reduce kar sakta hai."
        },

        {
            question:"Reducing private vehicles may help reduce:",

            options:[
                "Traffic and pollution",
                "Knowledge",
                "Education",
                "Food production"
            ],

            answer:0,

            explanation:"Fewer private vehicles traffic aur pollution dono reduce karne mein help kar sakte hain."
        },

        {
            question:"Public transport needs to be:",

            options:[
                "Unreliable",
                "Expensive",
                "Reliable and affordable",
                "Rare"
            ],

            answer:2,

            explanation:"Reliable, affordable aur convenient services public transport ke success ke liye important hain."
        },

        {
            question:"People are more likely to use public transport when services are:",

            options:[
                "Rare",
                "Frequent and comfortable",
                "Expensive",
                "Unpredictable"
            ],

            answer:1,

            explanation:"Frequent aur comfortable services logon ko public transport use karne ke liye encourage karti hain."
        }

    ]
},



/* =========================================================
   SET 14
========================================================= */

{
    id:14,

    title:"Power of Teamwork",

    description:"Teamwork combines different skills and ideas to achieve common goals.",

    passageTitle:"The Power of Teamwork",

    passage:`
        <p>
        Many difficult tasks become easier when people work together.
        Teamwork allows individuals with different skills and experiences
        to contribute toward a common goal. One person may have strong
        technical knowledge while another may be better at planning or
        communication.
        </p>

        <p>
        Effective teamwork requires trust, communication and respect.
        Disagreements may occur, but they can be handled through discussion.
        A successful team does not require everyone to think exactly alike.
        Instead, different perspectives can help the group find better
        solutions.
        </p>
    `,

    questions:[

        {
            question:"Teamwork allows people to contribute:",

            options:[
                "Different skills",
                "Only identical skills",
                "Nothing",
                "Only money"
            ],

            answer:0,

            explanation:"Teamwork mein different skills aur experiences wale people common goal ke liye contribute karte hain."
        },

        {
            question:"Effective teamwork requires:",

            options:[
                "Trust and communication",
                "Silence",
                "Competition only",
                "No discussion"
            ],

            answer:0,

            explanation:"Trust, communication aur respect effective teamwork ke essential elements hain."
        },

        {
            question:"Disagreements can be handled through:",

            options:[
                "Discussion",
                "Ignoring everyone",
                "Leaving the team",
                "Anger only"
            ],

            answer:0,

            explanation:"Passage disagreements ko discussion ke through handle karne ki baat karta hai."
        },

        {
            question:"A successful team requires everyone to think:",

            options:[
                "Exactly alike",
                "Differently always",
                "Exactly alike is not necessary",
                "Without logic"
            ],

            answer:2,

            explanation:"Successful team mein everyone ka exactly same think karna necessary nahi hai."
        },

        {
            question:"Different perspectives can help find:",

            options:[
                "Better solutions",
                "More problems only",
                "Less information",
                "No solution"
            ],

            answer:0,

            explanation:"Different perspectives group ko better solutions find karne mein help kar sakte hain."
        }

    ]
},



/* =========================================================
   SET 15
========================================================= */

{
    id:15,

    title:"Digital Literacy",

    description:"Digital literacy helps people use online information safely and effectively.",

    passageTitle:"Digital Literacy",

    passage:`
        <p>
        Digital technology has made information easier to access, but easy
        access does not mean that every piece of information is reliable.
        Digital literacy involves knowing how to search, evaluate and use
        online information responsibly.
        </p>

        <p>
        Users should check the source of information before accepting a claim
        as true. Comparing information from reliable sources can help identify
        misleading content. Digital literacy also includes understanding
        privacy and behaving responsibly while using online platforms.
        </p>
    `,

    questions:[

        {
            question:"Easy access to information means that all information is:",

            options:[
                "Reliable",
                "Always false",
                "Not necessarily reliable",
                "Official"
            ],

            answer:2,

            explanation:"Passage kehta hai ki easy access ka matlab ye nahi ki har information reliable hai."
        },

        {
            question:"Digital literacy involves knowing how to:",

            options:[
                "Search and evaluate information",
                "Avoid all technology",
                "Create advertisements",
                "Ignore sources"
            ],

            answer:0,

            explanation:"Digital literacy mein search, evaluate aur online information ko responsibly use karna included hai."
        },

        {
            question:"Users should check:",

            options:[
                "The source",
                "Only the title",
                "Only the picture",
                "Nothing"
            ],

            answer:0,

            explanation:"Claim ko true maan ne se pehle information ka source check karna chahiye."
        },

        {
            question:"Comparing reliable sources can help identify:",

            options:[
                "Misleading content",
                "Only entertainment",
                "Weather",
                "Games"
            ],

            answer:0,

            explanation:"Reliable sources compare karne se misleading content identify karne mein help milti hai."
        },

        {
            question:"Digital literacy also includes understanding:",

            options:[
                "Privacy",
                "Only games",
                "Only shopping",
                "Only videos"
            ],

            answer:0,

            explanation:"Privacy aur responsible online behaviour digital literacy ka part hain."
        }

    ]
},



/* =========================================================
   SET 16
========================================================= */

{
    id:16,

    title:"Importance of Sleep",

    description:"Adequate sleep supports learning, attention and recovery.",

    passageTitle:"Sleep and Learning",

    passage:`
        <p>
        Sleep is an important part of daily life. During sleep, the body and
        mind get time to recover. Adequate sleep can support attention,
        memory and the ability to learn. Students who regularly ignore sleep
        may find it harder to concentrate during study.
        </p>

        <p>
        Good sleep habits include maintaining a reasonably regular schedule
        and creating a comfortable sleeping environment. Sleep is not wasted
        time; it is a necessary part of maintaining overall well-being and
        effective daily functioning.
        </p>
    `,

    questions:[

        {
            question:"During sleep, the body and mind:",

            options:[
                "Recover",
                "Stop functioning permanently",
                "Become less active forever",
                "Learn nothing"
            ],

            answer:0,

            explanation:"Sleep ke time body aur mind ko recover karne ka opportunity milta hai."
        },

        {
            question:"Adequate sleep can support:",

            options:[
                "Attention and memory",
                "Only entertainment",
                "Pollution",
                "Traffic"
            ],

            answer:0,

            explanation:"Adequate sleep attention, memory aur learning ability support karta hai."
        },

        {
            question:"Ignoring sleep may make it harder to:",

            options:[
                "Concentrate",
                "Sleep",
                "Walk",
                "Eat"
            ],

            answer:0,

            explanation:"Students jo sleep regularly ignore karte hain unhe study ke time concentrate karna difficult ho sakta hai."
        },

        {
            question:"A good sleep habit is:",

            options:[
                "An irregular schedule",
                "A reasonably regular schedule",
                "No sleeping",
                "Constant screen use"
            ],

            answer:1,

            explanation:"Reasonably regular sleep schedule good sleep habit ka example hai."
        },

        {
            question:"Sleep should be considered:",

            options:[
                "Wasted time",
                "A necessary part of well-being",
                "Unnecessary",
                "Only entertainment"
            ],

            answer:1,

            explanation:"Passage sleep ko overall well-being aur effective functioning ke liye necessary batata hai."
        }

    ]
},



/* =========================================================
   SET 17
========================================================= */

{
    id:17,

    title:"Role of Curiosity",

    description:"Curiosity encourages people to ask questions and explore ideas.",

    passageTitle:"Curiosity and Learning",

    passage:`
        <p>
        Curiosity is the desire to understand something that is not yet known.
        It encourages people to ask questions, explore ideas and look for
        explanations. In education, curiosity can make learning more active
        because students become interested in discovering answers.
        </p>

        <p>
        Curiosity should be combined with careful thinking. Not every answer
        found online or heard from another person is correct. A curious learner
        therefore asks questions but also checks evidence. In this way,
        curiosity can become a powerful tool for meaningful learning.
        </p>
    `,

    questions:[

        {
            question:"Curiosity is the desire to:",

            options:[
                "Understand the unknown",
                "Avoid questions",
                "Stop learning",
                "Ignore evidence"
            ],

            answer:0,

            explanation:"Curiosity unknown cheez ko understand karne ki desire hai."
        },

        {
            question:"Curiosity encourages people to:",

            options:[
                "Ask questions and explore ideas",
                "Avoid learning",
                "Ignore answers",
                "Stop thinking"
            ],

            answer:0,

            explanation:"Curiosity people ko questions ask karne aur ideas explore karne ke liye encourage karti hai."
        },

        {
            question:"Curiosity can make learning:",

            options:[
                "More active",
                "Impossible",
                "Unnecessary",
                "Less meaningful"
            ],

            answer:0,

            explanation:"Curiosity students ko answers discover karne mein interested banati hai, isliye learning more active ho sakti hai."
        },

        {
            question:"A curious learner should also check:",

            options:[
                "Evidence",
                "Advertisements",
                "Rumours",
                "Nothing"
            ],

            answer:0,

            explanation:"Curiosity ke saath careful thinking aur evidence check karna important hai."
        },

        {
            question:"Curiosity can become a powerful tool for:",

            options:[
                "Meaningful learning",
                "Ignoring facts",
                "Entertainment only",
                "Avoiding questions"
            ],

            answer:0,

            explanation:"Evidence ke saath curiosity meaningful learning ka powerful tool ban sakti hai."
        }

    ]
},



/* =========================================================
   SET 18
========================================================= */

{
    id:18,

    title:"Saving Electricity",

    description:"Efficient use of electricity can reduce unnecessary consumption.",

    passageTitle:"Using Electricity Wisely",

    passage:`
        <p>
        Electricity is essential for modern life, but unnecessary consumption
        can increase costs and place additional pressure on energy resources.
        Many households can reduce waste through simple changes in daily
        behaviour.
        </p>

        <p>
        Switching off lights and appliances when they are not needed is one
        simple step. Using energy-efficient equipment can also reduce
        consumption over time. Saving electricity does not mean giving up
        useful technology; it means using energy thoughtfully and avoiding
        unnecessary waste.
        </p>
    `,

    questions:[

        {
            question:"Unnecessary electricity consumption can increase:",

            options:[
                "Costs",
                "Knowledge",
                "Reading",
                "Rainfall"
            ],

            answer:0,

            explanation:"Unnecessary electricity consumption costs ko increase kar sakta hai."
        },

        {
            question:"One simple way to save electricity is to:",

            options:[
                "Leave lights on",
                "Switch off unused appliances",
                "Use more appliances",
                "Ignore energy use"
            ],

            answer:1,

            explanation:"Unused lights aur appliances switch off karna simple electricity-saving step hai."
        },

        {
            question:"Energy-efficient equipment can reduce:",

            options:[
                "Consumption",
                "Education",
                "Communication",
                "Reading"
            ],

            answer:0,

            explanation:"Energy-efficient equipment electricity consumption reduce karne mein help kar sakta hai."
        },

        {
            question:"Saving electricity means:",

            options:[
                "Giving up technology",
                "Using energy thoughtfully",
                "Never using electricity",
                "Avoiding all appliances"
            ],

            answer:1,

            explanation:"Electricity save karna technology completely give up karna nahi, balki energy thoughtfully use karna hai."
        },

        {
            question:"Households can reduce energy waste through:",

            options:[
                "Simple behaviour changes",
                "More wastage",
                "Leaving devices on",
                "Ignoring costs"
            ],

            answer:0,

            explanation:"Daily behaviour mein simple changes electricity waste reduce kar sakte hain."
        }

    ]
},



/* =========================================================
   SET 19
========================================================= */

{
    id:19,

    title:"Importance of Patience",

    description:"Patience helps people handle difficult situations thoughtfully.",

    passageTitle:"The Value of Patience",

    passage:`
        <p>
        Patience is the ability to remain calm while waiting or dealing with
        difficulty. In a world where people often expect immediate results,
        patience can be difficult to practise. However, many valuable goals
        require time.
        </p>

        <p>
        Patience does not mean doing nothing. A patient person can continue
        working while accepting that some results cannot be achieved
        immediately. Patience can also reduce impulsive decisions because it
        gives people time to think before acting.
        </p>
    `,

    questions:[

        {
            question:"Patience is the ability to:",

            options:[
                "Remain calm during waiting or difficulty",
                "Avoid all work",
                "Demand immediate results",
                "Ignore problems"
            ],

            answer:0,

            explanation:"Patience difficult situation ya waiting ke time calm rehne ki ability hai."
        },

        {
            question:"Why can patience be difficult today?",

            options:[
                "People often expect immediate results.",
                "Nobody works.",
                "Goals are always easy.",
                "Time has stopped."
            ],

            answer:0,

            explanation:"Modern life mein people immediate results expect karte hain, isliye patience difficult ho sakti hai."
        },

        {
            question:"Patience does not mean:",

            options:[
                "Doing nothing",
                "Remaining calm",
                "Continuing work",
                "Thinking carefully"
            ],

            answer:0,

            explanation:"Patient hone ka matlab inactive rehna nahi hai; person work continue kar sakta hai."
        },

        {
            question:"Patience can reduce:",

            options:[
                "Impulsive decisions",
                "Learning",
                "Knowledge",
                "Planning"
            ],

            answer:0,

            explanation:"Patience acting se pehle thinking ka time deti hai, isliye impulsive decisions reduce ho sakte hain."
        },

        {
            question:"Many valuable goals require:",

            options:[
                "Time",
                "No effort",
                "Immediate results",
                "Luck only"
            ],

            answer:0,

            explanation:"Passage ke according many valuable goals achieve karne mein time lagta hai."
        }

    ]
},



/* =========================================================
   SET 20
========================================================= */

{
    id:20,

    title:"Importance of Planning",

    description:"Planning helps people organise tasks and use resources effectively.",

    passageTitle:"Planning for Better Results",

    passage:`
        <p>
        Planning involves deciding what needs to be done and determining how
        to do it. A simple plan can help a person identify priorities and
        avoid forgetting important tasks. Planning is useful for students,
        workers and organisations.
        </p>

        <p>
        A plan should be realistic and flexible. Unexpected events may require
        changes, and a good plan should allow for them. Planning does not
        guarantee perfect results, but it can make work more organised and
        reduce unnecessary confusion.
        </p>
    `,

    questions:[

        {
            question:"Planning involves deciding:",

            options:[
                "What needs to be done and how",
                "Only what to buy",
                "Nothing",
                "Only future holidays"
            ],

            answer:0,

            explanation:"Planning mein tasks aur unhe complete karne ka method decide kiya jata hai."
        },

        {
            question:"A simple plan can help identify:",

            options:[
                "Priorities",
                "Weather",
                "Traffic only",
                "Entertainment"
            ],

            answer:0,

            explanation:"Planning priorities identify karne mein help karti hai."
        },

        {
            question:"A good plan should be:",

            options:[
                "Rigid only",
                "Realistic and flexible",
                "Impossible",
                "Unclear"
            ],

            answer:1,

            explanation:"Unexpected events ke liye plan realistic aur flexible hona chahiye."
        },

        {
            question:"Unexpected events may require:",

            options:[
                "Changes in the plan",
                "Giving up",
                "No action",
                "Ignoring everything"
            ],

            answer:0,

            explanation:"Unexpected situations mein plan ko modify karna pad sakta hai."
        },

        {
            question:"Planning can reduce:",

            options:[
                "Unnecessary confusion",
                "Knowledge",
                "Success",
                "Organisation"
            ],

            answer:0,

            explanation:"Planning work ko organised banati hai aur unnecessary confusion reduce karti hai."
        }

    ]
},



/* =========================================================
   SET 21
========================================================= */

{
    id:21,

    title:"Importance of Honesty",

    description:"Honesty builds trust and supports healthy relationships.",

    passageTitle:"Honesty and Trust",

    passage:`
        <p>
        Honesty means communicating truthfully and avoiding deliberate
        deception. Honest behaviour can help build trust between individuals.
        Trust is important in friendships, families, workplaces and many
        other social situations.
        </p>

        <p>
        Being honest does not mean speaking without considering other people's
        feelings. Truth can be communicated respectfully and thoughtfully.
        In difficult situations, honesty may require courage, but it can
        prevent larger problems that might arise from continued deception.
        </p>
    `,

    questions:[

        {
            question:"Honesty means:",

            options:[
                "Communicating truthfully",
                "Always hiding information",
                "Deceiving people",
                "Avoiding communication"
            ],

            answer:0,

            explanation:"Honesty ka basic meaning truthful communication aur deliberate deception avoid karna hai."
        },

        {
            question:"Honest behaviour can help build:",

            options:[
                "Trust",
                "Confusion",
                "Fear",
                "Distance"
            ],

            answer:0,

            explanation:"Honesty individuals ke beech trust build karne mein help karti hai."
        },

        {
            question:"Honesty is important in:",

            options:[
                "Friendships",
                "Families",
                "Workplaces",
                "All of these"
            ],

            answer:3,

            explanation:"Passage friendships, families aur workplaces sab mein trust ki importance batata hai."
        },

        {
            question:"Being honest does not mean:",

            options:[
                "Speaking without considering feelings",
                "Communicating truthfully",
                "Being respectful",
                "Being thoughtful"
            ],

            answer:0,

            explanation:"Honesty ka matlab insensitive ya thoughtless way mein bolna nahi hai."
        },

        {
            question:"Honesty can prevent:",

            options:[
                "Larger problems from continued deception",
                "Trust",
                "Communication",
                "Respect"
            ],

            answer:0,

            explanation:"Continued deception se larger problems develop ho sakte hain; honesty unhe prevent kar sakti hai."
        }

    ]
},



/* =========================================================
   SET 22
========================================================= */

{
    id:22,

    title:"Role of Sports",

    description:"Sports can develop physical skills as well as teamwork and discipline.",

    passageTitle:"Sports and Development",

    passage:`
        <p>
        Sports provide opportunities for physical activity and skill
        development. They can also teach lessons that are useful outside
        the playing field. Players often learn to cooperate with teammates,
        follow rules and respond to both success and disappointment.
        </p>

        <p>
        Participation in sports should focus on healthy development rather
        than winning at any cost. Respect for opponents and fair play are
        important values. Sports can therefore contribute to physical,
        social and personal development when approached in a balanced way.
        </p>
    `,

    questions:[

        {
            question:"Sports provide opportunities for:",

            options:[
                "Physical activity and skill development",
                "Only entertainment",
                "Avoiding rules",
                "No learning"
            ],

            answer:0,

            explanation:"Sports physical activity aur skill development ke opportunities provide karte hain."
        },

        {
            question:"Players often learn to:",

            options:[
                "Cooperate with teammates",
                "Ignore rules",
                "Avoid teamwork",
                "Disrespect opponents"
            ],

            answer:0,

            explanation:"Team sports players ko cooperation aur teamwork sikhate hain."
        },

        {
            question:"Sports participation should focus on:",

            options:[
                "Winning at any cost",
                "Healthy development",
                "Avoiding practice",
                "Ignoring opponents"
            ],

            answer:1,

            explanation:"Passage healthy development ko winning at any cost se zyada important batata hai."
        },

        {
            question:"Which value is important in sports?",

            options:[
                "Fair play",
                "Dishonesty",
                "Disrespect",
                "Ignoring rules"
            ],

            answer:0,

            explanation:"Fair play aur opponents ka respect important sports values hain."
        },

        {
            question:"Sports can contribute to:",

            options:[
                "Physical, social and personal development",
                "Only physical development",
                "Only entertainment",
                "Only competition"
            ],

            answer:0,

            explanation:"Balanced sports participation physical, social aur personal development mein contribute kar sakti hai."
        }

    ]
},



/* =========================================================
   SET 23
========================================================= */

{
    id:23,

    title:"Books and Knowledge",

    description:"Books preserve ideas and allow knowledge to pass between generations.",

    passageTitle:"Books as a Source of Knowledge",

    passage:`
        <p>
        Books have played an important role in preserving human knowledge.
        They allow ideas, experiences and discoveries to be recorded and
        shared with people who may live in different places or different
        periods of history.
        </p>

        <p>
        Modern technology has changed the way books are produced and read,
        but the basic purpose remains similar. Whether a book is printed or
        digital, thoughtful reading can introduce readers to ideas beyond
        their immediate experience. Books therefore remain valuable sources
        of knowledge and imagination.
        </p>
    `,

    questions:[

        {
            question:"Books help preserve:",

            options:[
                "Human knowledge",
                "Only advertisements",
                "Traffic",
                "Weather"
            ],

            answer:0,

            explanation:"Books human knowledge ko preserve karne mein important role play karte hain."
        },

        {
            question:"Books allow ideas to be:",

            options:[
                "Recorded and shared",
                "Destroyed",
                "Hidden forever",
                "Ignored"
            ],

            answer:0,

            explanation:"Books ideas, experiences aur discoveries ko record aur share karne ka medium hain."
        },

        {
            question:"Technology has changed:",

            options:[
                "How books are produced and read",
                "The need for all knowledge",
                "History",
                "Human imagination"
            ],

            answer:0,

            explanation:"Modern technology ne books ke production aur reading methods ko change kiya hai."
        },

        {
            question:"Thoughtful reading can introduce readers to:",

            options:[
                "Ideas beyond immediate experience",
                "Only familiar ideas",
                "Nothing new",
                "Only advertisements"
            ],

            answer:0,

            explanation:"Books readers ko unki immediate experience se beyond ideas explore karne ka chance dete hain."
        },

        {
            question:"Books remain valuable sources of:",

            options:[
                "Knowledge and imagination",
                "Traffic",
                "Pollution",
                "Noise"
            ],

            answer:0,

            explanation:"Passage books ko knowledge aur imagination ke valuable sources batata hai."
        }

    ]
},



/* =========================================================
   SET 24
========================================================= */

{
    id:24,

    title:"Problem Solving",

    description:"Good problem solving requires understanding, analysis and careful action.",

    passageTitle:"The Art of Problem Solving",

    passage:`
        <p>
        Problems are a normal part of life. Solving a problem effectively
        usually begins with understanding what the actual problem is.
        People sometimes rush toward a solution without first identifying
        the cause.
        </p>

        <p>
        Once the problem is understood, possible solutions can be compared.
        A useful solution should address the main cause rather than only
        the visible result. After taking action, the outcome should be
        reviewed to see whether further changes are necessary. This process
        makes problem solving more systematic.
        </p>
    `,

    questions:[

        {
            question:"Effective problem solving usually begins with:",

            options:[
                "Understanding the actual problem",
                "Immediate action",
                "Ignoring the cause",
                "Blaming others"
            ],

            answer:0,

            explanation:"Problem solving ka first step actual problem ko properly understand karna hai."
        },

        {
            question:"People sometimes rush toward:",

            options:[
                "A solution",
                "A holiday",
                "A book",
                "A new job"
            ],

            answer:0,

            explanation:"Passage kehta hai ki people kabhi-kabhi cause identify kiye bina solution ki taraf rush karte hain."
        },

        {
            question:"Possible solutions should be:",

            options:[
                "Compared",
                "Ignored",
                "Hidden",
                "Randomly selected"
            ],

            answer:0,

            explanation:"Problem understand hone ke baad possible solutions ko compare karna chahiye."
        },

        {
            question:"A useful solution should address:",

            options:[
                "The main cause",
                "Only the visible result",
                "Nothing",
                "Another unrelated problem"
            ],

            answer:0,

            explanation:"Effective solution ko main cause address karna chahiye, sirf visible result nahi."
        },

        {
            question:"After taking action, the outcome should be:",

            options:[
                "Reviewed",
                "Ignored",
                "Hidden",
                "Forgotten"
            ],

            answer:0,

            explanation:"Action ke baad outcome review karna systematic problem solving ka important part hai."
        }

    ]
},



/* =========================================================
   SET 25
========================================================= */

{
    id:25,

    title:"Goal Setting",

    description:"Clear goals give direction and make progress easier to measure.",

    passageTitle:"Setting Meaningful Goals",

    passage:`
        <p>
        Goals give people a direction toward which they can work. A clear
        goal makes it easier to decide what actions are necessary. Without
        a clear objective, effort can become scattered and difficult to
        evaluate.
        </p>

        <p>
        Large goals are often easier to manage when divided into smaller
        steps. Each completed step provides an opportunity to review progress
        and make adjustments. Goals should be challenging but realistic.
        Regular effort, patience and willingness to adapt can help turn a
        long-term objective into achievable progress.
        </p>
    `,

    questions:[

        {
            question:"Goals give people:",

            options:[
                "Direction",
                "Confusion only",
                "No purpose",
                "Unlimited time"
            ],

            answer:0,

            explanation:"Goals people ko direction provide karte hain jiske according wo work kar sakte hain."
        },

        {
            question:"A clear goal makes it easier to decide:",

            options:[
                "Necessary actions",
                "The weather",
                "Other people's choices",
                "Nothing"
            ],

            answer:0,

            explanation:"Clear objective se necessary actions decide karna easier hota hai."
        },

        {
            question:"Large goals can be managed by:",

            options:[
                "Dividing them into smaller steps",
                "Ignoring them",
                "Avoiding action",
                "Changing them daily"
            ],

            answer:0,

            explanation:"Large goals ko smaller steps mein divide karna unhe manageable banata hai."
        },

        {
            question:"Goals should be:",

            options:[
                "Impossible",
                "Challenging but realistic",
                "Completely effortless",
                "Unclear"
            ],

            answer:1,

            explanation:"Passage goals ko challenging but realistic rakhne ki advice deta hai."
        },

        {
            question:"Which can help achieve long-term objectives?",

            options:[
                "Regular effort, patience and adaptability",
                "Giving up",
                "No planning",
                "Ignoring progress"
            ],

            answer:0,

            explanation:"Regular effort, patience aur adapt karne ki willingness long-term goals achieve karne mein help karti hai."
        }

    ]
}

];


/* =========================================================
   GLOBAL VARIABLES
========================================================= */

let selectedSetId = null;

let currentSet = null;

let currentQuestion = 0;

let selectedAnswers = [];

let submitted = false;

let totalSeconds = 15 * 60;

let startingSeconds = 15 * 60;

let timerInterval = null;

let testStartTime = null;

let timeExpired = false;


/* =========================================================
   LOCAL STORAGE
========================================================= */

const STORAGE_KEY = "ssc_passage_progress_v1";


function getProgress(){

    try{

        return JSON.parse(
            localStorage.getItem(STORAGE_KEY)
        ) || {};

    }

    catch(error){

        return {};

    }

}


function saveProgress(progress){

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(progress)
    );

}


/* =========================================================
   PAGE ELEMENTS
========================================================= */

const setsPage =
    document.getElementById("setsPage");

const startPage =
    document.getElementById("startPage");

const testPage =
    document.getElementById("testPage");

const resultPage =
    document.getElementById("resultPage");


/* =========================================================
   SHOW / HIDE PAGES
========================================================= */

function hideAllPages(){

    setsPage.classList.add("hidden");

    startPage.classList.add("hidden");

    testPage.classList.add("hidden");

    resultPage.classList.add("hidden");

}


function showSets(){

    stopTimer();

    hideAllPages();

    setsPage.classList.remove("hidden");

    updateProgressUI();

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

}


/* =========================================================
   RENDER SETS
========================================================= */

function renderSets(){

    const grid =
        document.getElementById("setsGrid");

    const progress =
        getProgress();

    let html = "";


    passageSets.forEach(function(set){

        const saved =
            progress[set.id];


        const completed =
            saved && saved.completed;


        const bestScore =
            saved && saved.bestScore !== undefined
            ? saved.bestScore
            : null;


        html += `

        <div
            class="set-card ${completed ? "completed" : ""}"
            onclick="openSet(${set.id})"
        >

            ${
                completed
                ?
                `<div class="completed-badge">
                    ✓ Completed
                </div>`
                :
                ""
            }


            <div class="set-number">

                ${String(set.id).padStart(2,"0")}

            </div>


            <h3>
                Set ${set.id}: ${set.title}
            </h3>


            <p>
                ${set.description}
            </p>


            <div class="set-meta">

                <span>📖 1 Passage</span>

                <span>❓ 5 Questions</span>

                <span>⏱️ 15 Min</span>

            </div>


            ${
                bestScore !== null
                ?
                `
                <div class="set-score">
                    🏆 Best Score: ${bestScore}%
                </div>
                `
                :
                `
                <div class="set-score"
                     style="color:#64748b">
                    Not attempted yet
                </div>
                `
            }

        </div>

        `;

    });


    grid.innerHTML = html;

}


/* =========================================================
   UPDATE PROGRESS
========================================================= */

function updateProgressUI(){

    const progress =
        getProgress();


    let completed = 0;


    passageSets.forEach(function(set){

        if(
            progress[set.id] &&
            progress[set.id].completed
        ){

            completed++;

        }

    });


    document.getElementById(
        "completedCount"
    ).textContent = completed;


    const percent =
        Math.round(
            (completed / passageSets.length) * 100
        );


    document.getElementById(
        "progressPercent"
    ).textContent = percent + "%";


    document.getElementById(
        "progressFill"
    ).style.width = percent + "%";


    renderSets();

}


/* =========================================================
   OPEN SET
========================================================= */

function openSet(id){

    const set =
        passageSets.find(
            item => item.id === id
        );


    if(!set){
        return;
    }


    selectedSetId = id;


    document.getElementById(
        "startTitle"
    ).textContent =
        "Set " + id + ": " + set.title;


    document.getElementById(
        "startDescription"
    ).textContent =
        set.description;


    hideAllPages();

    startPage.classList.remove("hidden");


    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

}


/* =========================================================
   START TEST
========================================================= */

function startSelectedTest(){

    if(!selectedSetId){
        return;
    }


    currentSet =
        passageSets.find(
            item => item.id === selectedSetId
        );


    if(!currentSet){
        return;
    }


    currentQuestion = 0;

    selectedAnswers =
        new Array(
            currentSet.questions.length
        );


    submitted = false;

    timeExpired = false;


    totalSeconds =
        15 * 60;


    startingSeconds =
        15 * 60;


    testStartTime =
        Date.now();


    document.getElementById(
        "testTitle"
    ).textContent =
        "Set " +
        currentSet.id +
        ": " +
        currentSet.title;


    document.getElementById(
        "passageTitle"
    ).textContent =
        currentSet.passageTitle;


    document.getElementById(
        "passageText"
    ).innerHTML =
        currentSet.passage;


    hideAllPages();

    testPage.classList.remove("hidden");


    startTimer();

    loadQuestion();

    createPalette();


    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

}


/* =========================================================
   TIMER
========================================================= */

function startTimer(){

    stopTimer();


    updateTimerDisplay();


    timerInterval =
        setInterval(function(){

            if(submitted){

                stopTimer();

                return;

            }


            totalSeconds--;


            updateTimerDisplay();


            if(totalSeconds <= 0){

                totalSeconds = 0;

                updateTimerDisplay();

                stopTimer();

                timeExpired = true;

                showTimeModal();

            }

        },1000);

}


function stopTimer(){

    if(timerInterval){

        clearInterval(timerInterval);

        timerInterval = null;

    }

}


function updateTimerDisplay(){

    const minutes =
        Math.floor(
            totalSeconds / 60
        );


    const seconds =
        totalSeconds % 60;


    const timer =
        document.getElementById("timer");


    timer.textContent =

        String(minutes).padStart(2,"0")
        +
        ":"
        +
        String(seconds).padStart(2,"0");


    if(totalSeconds <= 60){

        timer.style.color = "#dc2626";

    }

    else{

        timer.style.color = "#dc2626";

    }

}


/* =========================================================
   TIME MODAL
========================================================= */

function showTimeModal(){

    document
        .getElementById("timeModal")
        .classList.remove("hidden");

}


function closeTimeModalAndSubmit(){

    document
        .getElementById("timeModal")
        .classList.add("hidden");


    submitTest(true);

}


/* =========================================================
   LOAD QUESTION
========================================================= */

function loadQuestion(){

    if(!currentSet){
        return;
    }


    const questions =
        currentSet.questions;


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


    let html = "";


    html += `

        <div class="question-title">

            ${currentQuestion + 1}.
            ${q.question}

        </div>

    `;


    q.options.forEach(
        function(option,index){

            const selected =
                selectedAnswers[currentQuestion]
                === index;


            html += `

            <label
                class="option
                ${selected ? "selected" : ""}"
                onclick="selectOption(${index})"
            >

                <input
                    type="radio"
                    name="questionOption"
                    value="${index}"
                    ${selected ? "checked" : ""}
                >

                <span class="option-letter">
                    ${String.fromCharCode(65 + index)}.
                </span>

                <span class="option-text">
                    ${option}
                </span>

            </label>

            `;

        }
    );


    document.getElementById(
        "questionBox"
    ).innerHTML = html;


    updateNavigation();

    updatePalette();


    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

}


/* =========================================================
   SELECT OPTION
========================================================= */

function selectOption(index){

    if(submitted){
        return;
    }


    selectedAnswers[currentQuestion] =
        index;


    loadQuestion();

}


/* =========================================================
   PREVIOUS
========================================================= */

function previousQuestion(){

    if(currentQuestion > 0){

        currentQuestion--;

        loadQuestion();

    }

}


/* =========================================================
   NEXT
========================================================= */

function nextQuestion(){

    if(
        currentSet &&
        currentQuestion <
        currentSet.questions.length - 1
    ){

        currentQuestion++;

        loadQuestion();

    }

}


/* =========================================================
   NAVIGATION
========================================================= */

function updateNavigation(){

    const previousBtn =
        document.getElementById(
            "previousBtn"
        );


    const nextBtn =
        document.getElementById(
            "nextBtn"
        );


    const submitBtn =
        document.getElementById(
            "submitBtn"
        );


    previousBtn.disabled =
        currentQuestion === 0;


    if(
        currentQuestion ===
        currentSet.questions.length - 1
    ){

        nextBtn.style.display =
            "none";

        submitBtn.style.display =
            "block";

    }

    else{

        nextBtn.style.display =
            "block";

        submitBtn.style.display =
            "none";

    }

}


/* =========================================================
   QUESTION PALETTE
========================================================= */

function createPalette(){

    const palette =
        document.getElementById(
            "questionPalette"
        );


    let html = "";


    currentSet.questions.forEach(
        function(q,index){

            html += `

            <button
                class="palette-btn"
                id="palette-${index}"
                onclick="jumpToQuestion(${index})"
            >
                ${index + 1}
            </button>

            `;

        }
    );


    palette.innerHTML = html;


    updatePalette();

}


/* =========================================================
   UPDATE PALETTE
========================================================= */

function updatePalette(){

    if(!currentSet){
        return;
    }


    currentSet.questions.forEach(
        function(q,index){

            const btn =
                document.getElementById(
                    "palette-" + index
                );


            if(!btn){
                return;
            }


            btn.classList.remove(
                "active"
            );


            btn.classList.remove(
                "current"
            );


            if(
                selectedAnswers[index]
                !== undefined
            ){

                btn.classList.add(
                    "active"
                );

            }


            if(
                index === currentQuestion
            ){

                btn.classList.add(
                    "current"
                );

            }

        }
    );

}


/* =========================================================
   JUMP QUESTION
========================================================= */

function jumpToQuestion(index){

    if(!currentSet){
        return;
    }


    if(
        index >= 0 &&
        index <
        currentSet.questions.length
    ){

        currentQuestion = index;

        loadQuestion();

    }

}


/* =========================================================
   SUBMIT TEST
========================================================= */

function submitTest(autoSubmit = false){

    if(submitted){
        return;
    }


    if(
        !autoSubmit &&
        totalSeconds > 0
    ){

        const confirmSubmit =
            confirm(
                "Kya aap test submit karna chahte hain?"
            );


        if(!confirmSubmit){

            return;

        }

    }


    submitted = true;

    stopTimer();


    const questions =
        currentSet.questions;


    let correct = 0;

    let wrong = 0;

    let unattempted = 0;


    let reviewHTML = "";


    questions.forEach(
        function(q,index){

            const userAnswer =
                selectedAnswers[index];


            let statusHTML = "";

            let statusClass = "";


            if(
                userAnswer === undefined
            ){

                unattempted++;

                statusClass =
                    "status-unattempted";


                statusHTML =
                    "⚪ Unattempted";

            }

            else if(
                userAnswer === q.answer
            ){

                correct++;

                statusClass =
                    "status-correct";


                statusHTML =
                    "✅ Correct";

            }

            else{

                wrong++;

                statusClass =
                    "status-wrong";


                statusHTML =
                    "❌ Wrong";

            }


            let yourAnswer;


            if(
                userAnswer === undefined
            ){

                yourAnswer =
                    "Not Attempted";

            }

            else{

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
                    ${q.question}

                </div>


                <span
                    class="answer-status ${statusClass}"
                >
                    ${statusHTML}
                </span>


                <div class="answer-row">

                    <b>Your Answer:</b>

                    ${yourAnswer}

                </div>


                <div class="answer-row">

                    <b>Correct Answer:</b>

                    <span class="correct-answer">

                        ${correctAnswer}

                    </span>

                </div>


                <div class="explanation-box">

                    🇮🇳
                    <b>Hindi Explanation:</b>

                    <br><br>

                    ${q.explanation}

                </div>

            </div>

            `;

        }
    );


    const score =
        Math.round(
            (correct / questions.length)
            * 100
        );


    const elapsedSeconds =
        startingSeconds - totalSeconds;


    const safeElapsed =
        Math.max(
            0,
            elapsedSeconds
        );


    const minutes =
        Math.floor(
            safeElapsed / 60
        );


    const seconds =
        safeElapsed % 60;


    const formattedTime =
        minutes
        +
        ":"
        +
        String(seconds).padStart(2,"0");


    /* SAVE PROGRESS */

    saveTestResult(
        score,
        correct,
        wrong,
        unattempted,
        formattedTime
    );


    /* RESULT DATA */

    document.getElementById(
        "resultTitle"
    ).textContent =

        "Set "
        +
        currentSet.id
        +
        ": "
        +
        currentSet.title
        +
        " Result";


    document.getElementById(
        "scorePercent"
    ).textContent =
        score + "%";


    document.getElementById(
        "correctCount"
    ).textContent =
        correct;


    document.getElementById(
        "wrongCount"
    ).textContent =
        wrong;


    document.getElementById(
        "unattemptedCount"
    ).textContent =
        unattempted;


    document.getElementById(
        "timeTaken"
    ).textContent =
        formattedTime;


    document.getElementById(
        "reviewContainer"
    ).innerHTML =
        reviewHTML;


    setScoreMessage(score);


    const nextBtn =
        document.getElementById(
            "nextTestBtn"
        );


    if(
        currentSet.id <
        passageSets.length
    ){

        nextBtn.style.display =
            "inline-block";

        nextBtn.textContent =
            "➡️ Next Test";

    }

    else{

        nextBtn.style.display =
            "none";

    }


    hideAllPages();

    resultPage.classList.remove(
        "hidden"
    );


    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

}


/* =========================================================
   SAVE RESULT
========================================================= */

function saveTestResult(
    score,
    correct,
    wrong,
    unattempted,
    time
){

    const progress =
        getProgress();


    const old =
        progress[currentSet.id]
        ||
        {
            completed:false,
            attempts:0,
            bestScore:0
        };


    const bestScore =
        Math.max(
            old.bestScore || 0,
            score
        );


    progress[currentSet.id] = {

        completed:true,

        attempts:
            (old.attempts || 0) + 1,

        bestScore:bestScore,

        lastScore:score,

        correct:correct,

        wrong:wrong,

        unattempted:unattempted,

        time:time,

        lastAttempt:
            new Date().toISOString()

    };


    saveProgress(progress);


    updateProgressUI();

}


/* =========================================================
   SCORE MESSAGE
========================================================= */

function setScoreMessage(score){

    const message =
        document.getElementById(
            "scoreMessage"
        );


    if(score >= 90){

        message.textContent =
            "Excellent! Aapki comprehension bahut strong hai. 🔥";

    }

    else if(score >= 75){

        message.textContent =
            "Very Good! Thodi aur practice se aur better score aa sakta hai. 👏";

    }

    else if(score >= 60){

        message.textContent =
            "Good attempt! Passage reading aur options elimination par focus karein.";

    }

    else if(score >= 40){

        message.textContent =
            "Keep practising! Passage ko carefully read karke keywords identify karein.";

    }

    else{

        message.textContent =
            "Practice is the key. Explanation ko dhyan se padhein aur test repeat karein.";

    }

}


/* =========================================================
   REPEAT TEST
========================================================= */

function repeatTest(){

    if(!currentSet){
        return;
    }


    selectedSetId =
        currentSet.id;


    startSelectedTest();

}


/* =========================================================
   NEXT TEST
========================================================= */

function goToNextTest(){

    if(!currentSet){
        return;
    }


    const nextId =
        currentSet.id + 1;


    if(
        nextId >
        passageSets.length
    ){

        showSets();

        return;

    }


    selectedSetId =
        nextId;


    openSet(nextId);

}


/* =========================================================
   BROWSER BACK PROTECTION
========================================================= */

window.addEventListener(
    "beforeunload",
    function(event){

        if(
            !submitted &&
            !testPage.classList.contains(
                "hidden"
            )
        ){

            event.preventDefault();

            event.returnValue = "";

        }

    }
);


/* =========================================================
   INITIAL LOAD
========================================================= */

renderSets();

updateProgressUI();

showSets();