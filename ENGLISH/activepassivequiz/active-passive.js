const activePassiveData = {
    quizzes: [
        {
            id: 1,
            title: "Active & Passive Quiz 1",
            time: 600,
            questions: [
                {
                    question: "The teacher teaches English.",
                    options: [
                        "English is taught by the teacher.",
                        "English was taught by the teacher.",
                        "English has been taught by the teacher.",
                        "English is being taught by the teacher."
                    ],
                    answer: 0,
                    explanation: "Simple Present Passive: is/am/are + V3."
                },
                {
                    question: "Ram writes a letter.",
                    options: [
                        "A letter was written by Ram.",
                        "A letter is written by Ram.",
                        "A letter has been written by Ram.",
                        "A letter is being written by Ram."
                    ],
                    answer: 1,
                    explanation: "Simple Present Passive uses is/am/are + V3."
                },
                {
                    question: "She opened the door.",
                    options: [
                        "The door is opened by her.",
                        "The door was opened by her.",
                        "The door has been opened by her.",
                        "The door is being opened by her."
                    ],
                    answer: 1,
                    explanation: "Simple Past Passive uses was/were + V3."
                },
                {
                    question: "They are playing cricket.",
                    options: [
                        "Cricket is played by them.",
                        "Cricket was played by them.",
                        "Cricket is being played by them.",
                        "Cricket has been played by them."
                    ],
                    answer: 2,
                    explanation: "Present Continuous Passive uses is/am/are + being + V3."
                },
                {
                    question: "The police arrested the thief.",
                    options: [
                        "The thief is arrested by the police.",
                        "The thief was arrested by the police.",
                        "The thief has been arrested by the police.",
                        "The thief is being arrested by the police."
                    ],
                    answer: 1,
                    explanation: "Simple Past Passive uses was/were + V3."
                },
                {
                    question: "He will complete the work.",
                    options: [
                        "The work will be completed by him.",
                        "The work is completed by him.",
                        "The work was completed by him.",
                        "The work has been completed by him."
                    ],
                    answer: 0,
                    explanation: "Future Simple Passive uses will be + V3."
                },
                {
                    question: "She has finished the homework.",
                    options: [
                        "The homework was finished by her.",
                        "The homework is finished by her.",
                        "The homework has been finished by her.",
                        "The homework is being finished by her."
                    ],
                    answer: 2,
                    explanation: "Present Perfect Passive uses has/have been + V3."
                },
                {
                    question: "The boy kicked the ball.",
                    options: [
                        "The ball is kicked by the boy.",
                        "The ball was kicked by the boy.",
                        "The ball has been kicked by the boy.",
                        "The ball is being kicked by the boy."
                    ],
                    answer: 1,
                    explanation: "Simple Past Passive uses was/were + V3."
                },
                {
                    question: "People speak English all over the world.",
                    options: [
                        "English was spoken all over the world.",
                        "English is spoken all over the world.",
                        "English has spoken all over the world.",
                        "English is being spoken all over the world."
                    ],
                    answer: 1,
                    explanation: "Simple Present Passive uses is/am/are + V3."
                },
                {
                    question: "The mechanic is repairing the car.",
                    options: [
                        "The car is repaired by the mechanic.",
                        "The car was repaired by the mechanic.",
                        "The car is being repaired by the mechanic.",
                        "The car has been repaired by the mechanic."
                    ],
                    answer: 2,
                    explanation: "Present Continuous Passive uses is being + V3."
                }
            ]
        },

        {
            id: 2,
            title: "Active & Passive Quiz 2",
            time: 600,
            questions: [
                {
                    question: "The students completed the project.",
                    options: [
                        "The project is completed by the students.",
                        "The project was completed by the students.",
                        "The project has been completed by the students.",
                        "The project is being completed by the students."
                    ],
                    answer: 1,
                    explanation: "Simple Past Passive uses was/were + V3."
                },
                {
                    question: "My mother cooks food every day.",
                    options: [
                        "Food was cooked by my mother every day.",
                        "Food is cooked by my mother every day.",
                        "Food has been cooked by my mother every day.",
                        "Food is being cooked by my mother every day."
                    ],
                    answer: 1,
                    explanation: "Simple Present Passive uses is/am/are + V3."
                },
                {
                    question: "The workers are building a bridge.",
                    options: [
                        "A bridge is built by the workers.",
                        "A bridge was built by the workers.",
                        "A bridge is being built by the workers.",
                        "A bridge has been built by the workers."
                    ],
                    answer: 2,
                    explanation: "Present Continuous Passive uses is being + V3."
                },
                {
                    question: "He bought a new car.",
                    options: [
                        "A new car is bought by him.",
                        "A new car was bought by him.",
                        "A new car has been bought by him.",
                        "A new car is being bought by him."
                    ],
                    answer: 1,
                    explanation: "Simple Past Passive uses was/were + V3."
                },
                {
                    question: "The company will launch a new product.",
                    options: [
                        "A new product will be launched by the company.",
                        "A new product is launched by the company.",
                        "A new product was launched by the company.",
                        "A new product has been launched by the company."
                    ],
                    answer: 0,
                    explanation: "Future Simple Passive uses will be + V3."
                },
                {
                    question: "The gardener waters the plants.",
                    options: [
                        "The plants are watered by the gardener.",
                        "The plants were watered by the gardener.",
                        "The plants have been watered by the gardener.",
                        "The plants are being watered by the gardener."
                    ],
                    answer: 0,
                    explanation: "Simple Present Passive uses are + V3."
                },
                {
                    question: "She has written a poem.",
                    options: [
                        "A poem was written by her.",
                        "A poem is written by her.",
                        "A poem has been written by her.",
                        "A poem is being written by her."
                    ],
                    answer: 2,
                    explanation: "Present Perfect Passive uses has been + V3."
                },
                {
                    question: "The chef prepared the meal.",
                    options: [
                        "The meal is prepared by the chef.",
                        "The meal was prepared by the chef.",
                        "The meal has been prepared by the chef.",
                        "The meal is being prepared by the chef."
                    ],
                    answer: 1,
                    explanation: "Simple Past Passive uses was/were + V3."
                },
                {
                    question: "They have cleaned the room.",
                    options: [
                        "The room was cleaned by them.",
                        "The room is cleaned by them.",
                        "The room has been cleaned by them.",
                        "The room is being cleaned by them."
                    ],
                    answer: 2,
                    explanation: "Present Perfect Passive uses has/have been + V3."
                },
                {
                    question: "The doctor examines the patient.",
                    options: [
                        "The patient was examined by the doctor.",
                        "The patient is examined by the doctor.",
                        "The patient has been examined by the doctor.",
                        "The patient is being examined by the doctor."
                    ],
                    answer: 1,
                    explanation: "Simple Present Passive uses is/am/are + V3."
                }
            ]
        },

        {
            id: 3,
            title: "Active & Passive Quiz 3",
            time: 600,
            questions: [
                {
                    question: "The manager approved the proposal.",
                    options: [
                        "The proposal is approved by the manager.",
                        "The proposal was approved by the manager.",
                        "The proposal has been approved by the manager.",
                        "The proposal is being approved by the manager."
                    ],
                    answer: 1,
                    explanation: "Simple Past Passive."
                },
                {
                    question: "The teacher is explaining the lesson.",
                    options: [
                        "The lesson is explained by the teacher.",
                        "The lesson was explained by the teacher.",
                        "The lesson is being explained by the teacher.",
                        "The lesson has been explained by the teacher."
                    ],
                    answer: 2,
                    explanation: "Present Continuous Passive."
                },
                {
                    question: "We celebrate Independence Day every year.",
                    options: [
                        "Independence Day was celebrated every year.",
                        "Independence Day is celebrated every year.",
                        "Independence Day has been celebrated every year.",
                        "Independence Day is being celebrated every year."
                    ],
                    answer: 1,
                    explanation: "Simple Present Passive."
                },
                {
                    question: "The scientist discovered a new method.",
                    options: [
                        "A new method is discovered by the scientist.",
                        "A new method was discovered by the scientist.",
                        "A new method has been discovered by the scientist.",
                        "A new method is being discovered by the scientist."
                    ],
                    answer: 1,
                    explanation: "Simple Past Passive."
                },
                {
                    question: "They will announce the results tomorrow.",
                    options: [
                        "The results are announced tomorrow.",
                        "The results were announced tomorrow.",
                        "The results will be announced tomorrow.",
                        "The results have been announced tomorrow."
                    ],
                    answer: 2,
                    explanation: "Future Simple Passive."
                },
                {
                    question: "The company has introduced a new policy.",
                    options: [
                        "A new policy was introduced by the company.",
                        "A new policy is introduced by the company.",
                        "A new policy has been introduced by the company.",
                        "A new policy is being introduced by the company."
                    ],
                    answer: 2,
                    explanation: "Present Perfect Passive."
                },
                {
                    question: "The police caught the criminal.",
                    options: [
                        "The criminal is caught by the police.",
                        "The criminal was caught by the police.",
                        "The criminal has been caught by the police.",
                        "The criminal is being caught by the police."
                    ],
                    answer: 1,
                    explanation: "Simple Past Passive."
                },
                {
                    question: "The children are flying kites.",
                    options: [
                        "Kites are flown by the children.",
                        "Kites were flown by the children.",
                        "Kites are being flown by the children.",
                        "Kites have been flown by the children."
                    ],
                    answer: 2,
                    explanation: "Present Continuous Passive."
                },
                {
                    question: "The government builds roads.",
                    options: [
                        "Roads were built by the government.",
                        "Roads are built by the government.",
                        "Roads have been built by the government.",
                        "Roads are being built by the government."
                    ],
                    answer: 1,
                    explanation: "Simple Present Passive."
                },
                {
                    question: "The artist painted a beautiful picture.",
                    options: [
                        "A beautiful picture is painted by the artist.",
                        "A beautiful picture was painted by the artist.",
                        "A beautiful picture has been painted by the artist.",
                        "A beautiful picture is being painted by the artist."
                    ],
                    answer: 1,
                    explanation: "Simple Past Passive."
                }
            ]
        },

        {
            id: 4,
            title: "Active & Passive Quiz 4",
            time: 600,
            questions: [
                {
                    question: "The students are solving the problem.",
                    options: [
                        "The problem is solved by the students.",
                        "The problem was solved by the students.",
                        "The problem is being solved by the students.",
                        "The problem has been solved by the students."
                    ],
                    answer: 2,
                    explanation: "Present Continuous Passive."
                },
                {
                    question: "She reads the newspaper every morning.",
                    options: [
                        "The newspaper is read by her every morning.",
                        "The newspaper was read by her every morning.",
                        "The newspaper has been read by her every morning.",
                        "The newspaper is being read by her every morning."
                    ],
                    answer: 0,
                    explanation: "Simple Present Passive."
                },
                {
                    question: "The farmer harvested the crop.",
                    options: [
                        "The crop is harvested by the farmer.",
                        "The crop was harvested by the farmer.",
                        "The crop has been harvested by the farmer.",
                        "The crop is being harvested by the farmer."
                    ],
                    answer: 1,
                    explanation: "Simple Past Passive."
                },
                {
                    question: "He has repaired the bicycle.",
                    options: [
                        "The bicycle was repaired by him.",
                        "The bicycle is repaired by him.",
                        "The bicycle has been repaired by him.",
                        "The bicycle is being repaired by him."
                    ],
                    answer: 2,
                    explanation: "Present Perfect Passive."
                },
                {
                    question: "The company will publish the report.",
                    options: [
                        "The report will be published by the company.",
                        "The report is published by the company.",
                        "The report was published by the company.",
                        "The report has been published by the company."
                    ],
                    answer: 0,
                    explanation: "Future Simple Passive."
                },
                {
                    question: "The nurse takes care of the patient.",
                    options: [
                        "The patient is taken care of by the nurse.",
                        "The patient was taken care of by the nurse.",
                        "The patient has been taken care of by the nurse.",
                        "The patient is being taken care of by the nurse."
                    ],
                    answer: 0,
                    explanation: "Simple Present Passive."
                },
                {
                    question: "The boy broke the window.",
                    options: [
                        "The window is broken by the boy.",
                        "The window was broken by the boy.",
                        "The window has been broken by the boy.",
                        "The window is being broken by the boy."
                    ],
                    answer: 1,
                    explanation: "Simple Past Passive."
                },
                {
                    question: "The workers have completed the building.",
                    options: [
                        "The building was completed by the workers.",
                        "The building is completed by the workers.",
                        "The building has been completed by the workers.",
                        "The building is being completed by the workers."
                    ],
                    answer: 2,
                    explanation: "Present Perfect Passive."
                },
                {
                    question: "The police are investigating the case.",
                    options: [
                        "The case is investigated by the police.",
                        "The case was investigated by the police.",
                        "The case is being investigated by the police.",
                        "The case has been investigated by the police."
                    ],
                    answer: 2,
                    explanation: "Present Continuous Passive."
                },
                {
                    question: "The author wrote this book.",
                    options: [
                        "This book is written by the author.",
                        "This book was written by the author.",
                        "This book has been written by the author.",
                        "This book is being written by the author."
                    ],
                    answer: 1,
                    explanation: "Simple Past Passive."
                }
            ]
        },

        {
            id: 5,
            title: "Active & Passive Quiz 5",
            time: 600,
            questions: [
                {
                    question: "The teacher checks the notebooks.",
                    options: [
                        "The notebooks are checked by the teacher.",
                        "The notebooks were checked by the teacher.",
                        "The notebooks have been checked by the teacher.",
                        "The notebooks are being checked by the teacher."
                    ],
                    answer: 0,
                    explanation: "Simple Present Passive."
                },
                {
                    question: "The students submitted their forms.",
                    options: [
                        "Their forms are submitted by the students.",
                        "Their forms were submitted by the students.",
                        "Their forms have been submitted by the students.",
                        "Their forms are being submitted by the students."
                    ],
                    answer: 1,
                    explanation: "Simple Past Passive."
                },
                {
                    question: "The workers are painting the house.",
                    options: [
                        "The house is painted by the workers.",
                        "The house was painted by the workers.",
                        "The house is being painted by the workers.",
                        "The house has been painted by the workers."
                    ],
                    answer: 2,
                    explanation: "Present Continuous Passive."
                },
                {
                    question: "She has cleaned the kitchen.",
                    options: [
                        "The kitchen was cleaned by her.",
                        "The kitchen is cleaned by her.",
                        "The kitchen has been cleaned by her.",
                        "The kitchen is being cleaned by her."
                    ],
                    answer: 2,
                    explanation: "Present Perfect Passive."
                },
                {
                    question: "They will organize the event.",
                    options: [
                        "The event is organized by them.",
                        "The event was organized by them.",
                        "The event will be organized by them.",
                        "The event has been organized by them."
                    ],
                    answer: 2,
                    explanation: "Future Simple Passive."
                },
                {
                    question: "The police protect the city.",
                    options: [
                        "The city is protected by the police.",
                        "The city was protected by the police.",
                        "The city has been protected by the police.",
                        "The city is being protected by the police."
                    ],
                    answer: 0,
                    explanation: "Simple Present Passive."
                },
                {
                    question: "The storm damaged many houses.",
                    options: [
                        "Many houses are damaged by the storm.",
                        "Many houses were damaged by the storm.",
                        "Many houses have been damaged by the storm.",
                        "Many houses are being damaged by the storm."
                    ],
                    answer: 1,
                    explanation: "Simple Past Passive."
                },
                {
                    question: "The company is developing new software.",
                    options: [
                        "New software is developed by the company.",
                        "New software was developed by the company.",
                        "New software is being developed by the company.",
                        "New software has been developed by the company."
                    ],
                    answer: 2,
                    explanation: "Present Continuous Passive."
                },
                {
                    question: "The government has announced new rules.",
                    options: [
                        "New rules were announced by the government.",
                        "New rules are announced by the government.",
                        "New rules have been announced by the government.",
                        "New rules are being announced by the government."
                    ],
                    answer: 2,
                    explanation: "Present Perfect Passive."
                },
                {
                    question: "The principal will distribute the prizes.",
                    options: [
                        "The prizes are distributed by the principal.",
                        "The prizes were distributed by the principal.",
                        "The prizes will be distributed by the principal.",
                        "The prizes have been distributed by the principal."
                    ],
                    answer: 2,
                    explanation: "Future Simple Passive."
                }
            ]
        }
    ]
};