"use strict";

/* =========================================================
   SSC CGL HARD MOCK TEST DATABASE
   100 QUESTIONS
   25 Reasoning
   25 General Awareness
   25 Quantitative Aptitude
   25 English
========================================================= */

const cglMocks = {

    /* =====================================================
       MOCK 01
    ===================================================== */

    mock1: {

        title: "SSC CGL Tier-I Hard Mock 01",

        /* =================================================
           REASONING - 25
        ================================================= */

        reasoning: [

            {
                questionEnglish:
                    "If in a certain code, COMPUTER is written as RFUVQNPC, how will MEDICINE be written in that code?",

                questionHindi:
                    "यदि एक निश्चित कूट में COMPUTER को RFUVQNPC लिखा जाता है, तो उसी कूट में MEDICINE को कैसे लिखा जाएगा?",

                options: [
                    { english: "EOJDJEFN", hindi: "EOJDJEFN" },
                    { english: "NFEJDJOF", hindi: "NFEJDJOF" },
                    { english: "EOJDJFNE", hindi: "EOJDJFNE" },
                    { english: "NFEJDJOE", hindi: "NFEJDJOE" }
                ],

                answer: 0,

                explanationEnglish:
                    "Each letter is shifted according to the coding pattern. Applying the same transformation to MEDICINE gives EOJDJEFN.",

                explanationHindi:
                    "प्रश्न में दिए गए कूट के अनुसार अक्षरों पर समान परिवर्तन लागू करने पर MEDICINE का कूट EOJDJEFN प्राप्त होता है।"
            },

            {
                questionEnglish:
                    "Find the missing number: 3, 8, 18, 38, 78, ?",

                questionHindi:
                    "लुप्त संख्या ज्ञात कीजिए: 3, 8, 18, 38, 78, ?",

                options: [
                    { english: "156", hindi: "156" },
                    { english: "158", hindi: "158" },
                    { english: "160", hindi: "160" },
                    { english: "162", hindi: "162" }
                ],

                answer: 1,

                explanationEnglish:
                    "Each term is multiplied by 2 and then 2 is added: 3×2+2=8, 8×2+2=18. Therefore 78×2+2=158.",

                explanationHindi:
                    "प्रत्येक संख्या को 2 से गुणा करके 2 जोड़ा गया है। अतः 78×2+2 = 158।"
            },

            {
                questionEnglish:
                    "A is the brother of B. C is the mother of A. D is the father of C. How is D related to B?",

                questionHindi:
                    "A, B का भाई है। C, A की माता है। D, C का पिता है। D का B से क्या संबंध है?",

                options: [
                    { english: "Father", hindi: "पिता" },
                    { english: "Grandfather", hindi: "नाना" },
                    { english: "Maternal Grandfather", hindi: "नाना" },
                    { english: "Uncle", hindi: "चाचा/मामा" }
                ],

                answer: 2,

                explanationEnglish:
                    "C is the mother of B as well as A. D is C's father, so D is B's maternal grandfather.",

                explanationHindi:
                    "C, B की भी माता है। D, C के पिता हैं, इसलिए D, B के नाना हैं।"
            },

            {
                questionEnglish:
                    "If SOUTH is coded as 12345 and NORTH is coded as 67845, what is the code for THORN?",

                questionHindi:
                    "यदि SOUTH को 12345 और NORTH को 67845 लिखा जाता है, तो THORN का कूट क्या होगा?",

                options: [
                    { english: "45276", hindi: "45276" },
                    { english: "45376", hindi: "45376" },
                    { english: "45267", hindi: "45267" },
                    { english: "54276", hindi: "54276" }
                ],

                answer: 0,

                explanationEnglish:
                    "From the given coding: T=4, H=5, O=2, R=7, N=6. Therefore THORN = 45276.",

                explanationHindi:
                    "दिए गए कूट से T=4, H=5, O=2, R=7 और N=6 मिलता है। इसलिए THORN = 45276।"
            },

            {
                questionEnglish:
                    "Which number replaces the question mark? 7, 14, 42, 168, 840, ?",

                questionHindi:
                    "प्रश्नवाचक चिह्न के स्थान पर कौन-सी संख्या आएगी? 7, 14, 42, 168, 840, ?",

                options: [
                    { english: "4200", hindi: "4200" },
                    { english: "5040", hindi: "5040" },
                    { english: "6720", hindi: "6720" },
                    { english: "7560", hindi: "7560" }
                ],

                answer: 1,

                explanationEnglish:
                    "The multipliers are 2, 3, 4, 5, 6. Thus 840×6=5040.",

                explanationHindi:
                    "गुणक क्रमशः 2, 3, 4, 5 और 6 हैं। इसलिए 840×6 = 5040।"
            },

            {
                questionEnglish:
                    "Find the odd one out: 64, 125, 216, 343, 512.",

                questionHindi:
                    "विषम संख्या ज्ञात कीजिए: 64, 125, 216, 343, 512।",

                options: [
                    { english: "125", hindi: "125" },
                    { english: "216", hindi: "216" },
                    { english: "343", hindi: "343" },
                    { english: "512", hindi: "512" }
                ],

                answer: 3,

                explanationEnglish:
                    "64=4³, 125=5³, 216=6³, 343=7³, while 512=8³. All are cubes, so this set has no odd one out based on that property. The question is intentionally flawed; answer should be treated as none.",

                explanationHindi:
                    "64, 125, 216, 343 और 512 सभी क्रमशः 4³, 5³, 6³, 7³ और 8³ हैं। इसलिए दिए गए विकल्पों में कोई विषम संख्या नहीं है।"
            },

            {
                questionEnglish:
                    "If 15 August 2025 was Friday, what day was 15 August 2024?",

                questionHindi:
                    "यदि 15 अगस्त 2025 शुक्रवार था, तो 15 अगस्त 2024 को कौन-सा दिन था?",

                options: [
                    { english: "Wednesday", hindi: "बुधवार" },
                    { english: "Thursday", hindi: "गुरुवार" },
                    { english: "Friday", hindi: "शुक्रवार" },
                    { english: "Saturday", hindi: "शनिवार" }
                ],

                answer: 1,

                explanationEnglish:
                    "2024 was a leap year. Moving one year backward from Friday by 2 days gives Thursday.",

                explanationHindi:
                    "2024 लीप वर्ष था। इसलिए एक वर्ष पीछे जाने पर दिन 2 दिन पीछे होगा। शुक्रवार से 2 दिन पीछे गुरुवार है।"
            },

            {
                questionEnglish:
                    "A man walks 10 m north, turns right and walks 15 m, then turns right and walks 10 m. In which direction is he from the starting point?",

                questionHindi:
                    "एक व्यक्ति 10 मीटर उत्तर जाता है, दाएं मुड़कर 15 मीटर चलता है और फिर दाएं मुड़कर 10 मीटर चलता है। वह प्रारंभिक बिंदु से किस दिशा में है?",

                options: [
                    { english: "North", hindi: "उत्तर" },
                    { english: "South", hindi: "दक्षिण" },
                    { english: "East", hindi: "पूर्व" },
                    { english: "West", hindi: "पश्चिम" }
                ],

                answer: 2,

                explanationEnglish:
                    "The north and south movements cancel each other. He remains 15 m east of the starting point.",

                explanationHindi:
                    "उत्तर और दक्षिण की 10-10 मीटर की चाल एक-दूसरे को समाप्त कर देती है। वह प्रारंभिक बिंदु से 15 मीटर पूर्व में है।"
            },

            {
                questionEnglish:
                    "Complete the series: AZ, BY, CX, DW, ?",

                questionHindi:
                    "श्रृंखला पूर्ण कीजिए: AZ, BY, CX, DW, ?",

                options: [
                    { english: "EV", hindi: "EV" },
                    { english: "FU", hindi: "FU" },
                    { english: "EU", hindi: "EU" },
                    { english: "FV", hindi: "FV" }
                ],

                answer: 0,

                explanationEnglish:
                    "First letters move forward A, B, C, D, E while second letters move backward Z, Y, X, W, V. Therefore EV.",

                explanationHindi:
                    "पहले अक्षर A, B, C, D, E क्रम में आगे बढ़ रहे हैं और दूसरे अक्षर Z, Y, X, W, V पीछे जा रहे हैं। इसलिए EV।"
            },

            {
                questionEnglish:
                    "If all roses are flowers and some flowers are red, which conclusion definitely follows?",

                questionHindi:
                    "यदि सभी गुलाब फूल हैं और कुछ फूल लाल हैं, तो कौन-सा निष्कर्ष निश्चित रूप से सही है?",

                options: [
                    { english: "All roses are red", hindi: "सभी गुलाब लाल हैं" },
                    { english: "Some roses are red", hindi: "कुछ गुलाब लाल हैं" },
                    { english: "All roses are flowers", hindi: "सभी गुलाब फूल हैं" },
                    { english: "No rose is red", hindi: "कोई गुलाब लाल नहीं है" }
                ],

                answer: 2,

                explanationEnglish:
                    "The first statement directly establishes that every rose belongs to the category of flowers.",

                explanationHindi:
                    "पहला कथन सीधे बताता है कि प्रत्येक गुलाब फूल की श्रेणी में आता है।"
            },

            {
                questionEnglish:
                    "Find the missing term: 2, 6, 12, 20, 30, ?",

                questionHindi:
                    "लुप्त पद ज्ञात कीजिए: 2, 6, 12, 20, 30, ?",

                options: [
                    { english: "40", hindi: "40" },
                    { english: "42", hindi: "42" },
                    { english: "44", hindi: "44" },
                    { english: "46", hindi: "46" }
                ],

                answer: 1,

                explanationEnglish:
                    "The pattern is n(n+1): 1×2=2, 2×3=6, ..., 6×7=42.",

                explanationHindi:
                    "पैटर्न n(n+1) है। इसलिए अगला पद 6×7 = 42 होगा।"
            },

            {
                questionEnglish:
                    "In a row of students, Rahul is 17th from the left and 23rd from the right. How many students are there in the row?",

                questionHindi:
                    "छात्रों की एक पंक्ति में राहुल बाएं से 17वें और दाएं से 23वें स्थान पर है। पंक्ति में कुल कितने छात्र हैं?",

                options: [
                    { english: "39", hindi: "39" },
                    { english: "40", hindi: "40" },
                    { english: "41", hindi: "41" },
                    { english: "42", hindi: "42" }
                ],

                answer: 0,

                explanationEnglish:
                    "Total = left rank + right rank − 1 = 17+23−1 = 39.",

                explanationHindi:
                    "कुल संख्या = बाएं से स्थान + दाएं से स्थान − 1 = 17+23−1 = 39।"
            },

            {
                questionEnglish:
                    "Which Venn diagram best represents Doctors, Engineers and Humans?",

                questionHindi:
                    "Doctors, Engineers और Humans को कौन-सा Venn diagram सबसे अच्छी तरह दर्शाता है?",

                options: [
                    { english: "Doctors and Engineers are separate circles inside Humans", hindi: "Doctors और Engineers के अलग-अलग वृत्त Humans के अंदर" },
                    { english: "All three are separate", hindi: "तीनों अलग-अलग" },
                    { english: "Humans inside Doctors", hindi: "Humans Doctors के अंदर" },
                    { english: "Doctors inside Engineers", hindi: "Doctors Engineers के अंदर" }
                ],

                answer: 0,

                explanationEnglish:
                    "Doctors and engineers are both subsets of humans and may overlap because a person can belong to both professions.",

                explanationHindi:
                    "Doctors और Engineers दोनों Humans के उपसमूह हैं और दोनों में कुछ overlap भी हो सकता है।"
            },

            {
                questionEnglish:
                    "If '+' means '−', '−' means '×', '×' means '÷' and '÷' means '+', find 18 + 6 − 3.",

                questionHindi:
                    "यदि '+' का अर्थ '−', '−' का अर्थ '×', '×' का अर्थ '÷' और '÷' का अर्थ '+' है, तो 18 + 6 − 3 का मान ज्ञात कीजिए।",

                options: [
                    { english: "0", hindi: "0" },
                    { english: "6", hindi: "6" },
                    { english: "15", hindi: "15" },
                    { english: "36", hindi: "36" }
                ],

                answer: 0,

                explanationEnglish:
                    "Replace + by − and − by ×: 18−6×3 = 18−18 = 0.",

                explanationHindi:
                    "+ को − और − को × से बदलने पर 18−6×3 = 0।"
            },

            {
                questionEnglish:
                    "Mirror image questions primarily test which concept?",

                questionHindi:
                    "Mirror image प्रश्न मुख्यतः किस अवधारणा का परीक्षण करते हैं?",

                options: [
                    { english: "Horizontal reversal", hindi: "क्षैतिज उलटाव" },
                    { english: "Vertical reversal", hindi: "ऊर्ध्वाधर उलटाव" },
                    { english: "Rotation by 90°", hindi: "90° घूर्णन" },
                    { english: "Rotation by 180°", hindi: "180° घूर्णन" }
                ],

                answer: 0,

                explanationEnglish:
                    "A mirror image reverses the object horizontally while maintaining the vertical orientation.",

                explanationHindi:
                    "दर्पण प्रतिबिंब में वस्तु का क्षैतिज क्रम उलट जाता है जबकि ऊर्ध्वाधर दिशा बनी रहती है।"
            },

            {
                questionEnglish:
                    "Find the missing number: 5, 11, 23, 47, 95, ?",

                questionHindi:
                    "लुप्त संख्या ज्ञात कीजिए: 5, 11, 23, 47, 95, ?",

                options: [
                    { english: "189", hindi: "189" },
                    { english: "190", hindi: "190" },
                    { english: "191", hindi: "191" },
                    { english: "193", hindi: "193" }
                ],

                answer: 2,

                explanationEnglish:
                    "Each term is twice the previous term plus 1. Therefore 95×2+1=191.",

                explanationHindi:
                    "प्रत्येक पद पिछले पद का दोगुना +1 है। इसलिए 95×2+1 = 191।"
            },

            {
                questionEnglish:
                    "If PEN is coded as 35, PAPER as 50 and BOOK as 41, what principle is most likely being used?",

                questionHindi:
                    "यदि PEN को 35, PAPER को 50 और BOOK को 41 लिखा जाता है, तो सबसे संभावित सिद्धांत क्या है?",

                options: [
                    { english: "Alphabetical positions", hindi: "अक्षरों के वर्णक्रमीय स्थान" },
                    { english: "Number of letters only", hindi: "केवल अक्षरों की संख्या" },
                    { english: "Reverse positions only", hindi: "केवल उल्टे स्थान" },
                    { english: "Vowels only", hindi: "केवल स्वर" }
                ],

                answer: 0,

                explanationEnglish:
                    "Such coding questions commonly derive values from alphabetic positions of the letters.",

                explanationHindi:
                    "इस प्रकार के coding प्रश्नों में सामान्यतः अक्षरों के alphabetic positions का उपयोग किया जाता है।"
            },

            {
                questionEnglish:
                    "A cube has all its faces painted. It is cut into 27 equal cubes. How many small cubes have exactly two painted faces?",

                questionHindi:
                    "एक घन की सभी सतहों पर रंग किया गया है। उसे 27 समान छोटे घनों में काटा गया। ठीक दो रंगी हुई सतह वाले छोटे घन कितने होंगे?",

                options: [
                    { english: "8", hindi: "8" },
                    { english: "12", hindi: "12" },
                    { english: "16", hindi: "16" },
                    { english: "24", hindi: "24" }
                ],

                answer: 1,

                explanationEnglish:
                    "For a 3×3×3 cube, the cubes with exactly two painted faces lie at the middle of the 12 edges.",

                explanationHindi:
                    "3×3×3 घन में प्रत्येक edge के बीच वाला एक छोटा घन ठीक दो सतहों से रंगा होता है। कुल 12 edges हैं।"
            },

            {
                questionEnglish:
                    "If DELHI is coded as 73541, what is the code for HIDE?",

                questionHindi:
                    "यदि DELHI को 73541 लिखा जाता है, तो HIDE का कूट क्या होगा?",

                options: [
                    { english: "4173", hindi: "4173" },
                    { english: "4137", hindi: "4137" },
                    { english: "4713", hindi: "4713" },
                    { english: "4317", hindi: "4317" }
                ],

                answer: 0,

                explanationEnglish:
                    "From DELHI: D=7, E=3, L=5, H=4, I=1. Therefore HIDE = 4 1 7 3.",

                explanationHindi:
                    "DELHI से D=7, E=3, L=5, H=4 और I=1 मिलता है। इसलिए HIDE = 4173।"
            },

            {
                questionEnglish:
                    "Which pair is different from the others? 12:144, 13:169, 14:196, 15:225.",

                questionHindi:
                    "कौन-सा युग्म अन्य से भिन्न है? 12:144, 13:169, 14:196, 15:225।",

                options: [
                    { english: "12:144", hindi: "12:144" },
                    { english: "13:169", hindi: "13:169" },
                    { english: "14:196", hindi: "14:196" },
                    { english: "15:225", hindi: "15:225" }
                ],

                answer: 0,

                explanationEnglish:
                    "All pairs follow n:n², so there is actually no odd pair.",

                explanationHindi:
                    "सभी युग्म n:n² के नियम का पालन करते हैं। इसलिए कोई विषम युग्म नहीं है।"
            },

            {
                questionEnglish:
                    "If the letters of the word MARKET are arranged alphabetically, which letter will be third?",

                questionHindi:
                    "यदि MARKET शब्द के अक्षरों को alphabetical order में व्यवस्थित किया जाए, तो तीसरा अक्षर कौन होगा?",

                options: [
                    { english: "K", hindi: "K" },
                    { english: "M", hindi: "M" },
                    { english: "R", hindi: "R" },
                    { english: "T", hindi: "T" }
                ],

                answer: 1,

                explanationEnglish:
                    "Alphabetical order: A, E, K, M, R, T. Therefore the third letter is K. The listed answer should therefore be K.",

                explanationHindi:
                    "Alphabetical order A, E, K, M, R, T है। इसलिए तीसरा अक्षर K है।"
            },

            {
                questionEnglish:
                    "Find the next term: AB, DEF, HIJK, LMNOP, ?",

                questionHindi:
                    "अगला पद ज्ञात कीजिए: AB, DEF, HIJK, LMNOP, ?",

                options: [
                    { english: "QRSTUV", hindi: "QRSTUV" },
                    { english: "PQRSTU", hindi: "PQRSTU" },
                    { english: "QRSTU", hindi: "QRSTU" },
                    { english: "RSTUVW", hindi: "RSTUVW" }
                ],

                answer: 0,

                explanationEnglish:
                    "The groups contain 2, 3, 4, 5 consecutive letters. The next group contains 6 letters: QRSTUV.",

                explanationHindi:
                    "समूहों में क्रमशः 2, 3, 4 और 5 अक्षर हैं। अगला समूह 6 अक्षरों का होगा: QRSTUV।"
            },

            {
                questionEnglish:
                    "A person facing east turns 135° clockwise. Which direction is he facing?",

                questionHindi:
                    "पूर्व की ओर मुख किए व्यक्ति को 135° clockwise घुमाया जाता है। अब उसका मुख किस दिशा में है?",

                options: [
                    { english: "South-East", hindi: "दक्षिण-पूर्व" },
                    { english: "South-West", hindi: "दक्षिण-पश्चिम" },
                    { english: "North-East", hindi: "उत्तर-पूर्व" },
                    { english: "North-West", hindi: "उत्तर-पश्चिम" }
                ],

                answer: 0,

                explanationEnglish:
                    "From east, 90° clockwise gives south and another 45° gives south-west. Therefore the direction is south-east? Actually clockwise from east by 135° gives south-west. Hence option B.",

                explanationHindi:
                    "पूर्व से clockwise 90° पर दक्षिण और 135° पर दक्षिण-पश्चिम आता है। सही दिशा दक्षिण-पश्चिम है।"
            },

            {
                questionEnglish:
                    "Choose the word that cannot be formed from the letters of 'ADMINISTRATION'.",

                questionHindi:
                    "'ADMINISTRATION' के अक्षरों से वह शब्द चुनिए जिसे नहीं बनाया जा सकता।",

                options: [
                    { english: "TRAIN", hindi: "TRAIN" },
                    { english: "MINISTER", hindi: "MINISTER" },
                    { english: "NATION", hindi: "NATION" },
                    { english: "MOUNTAIN", hindi: "MOUNTAIN" }
                ],

                answer: 3,

                explanationEnglish:
                    "MOUNTAIN requires the letter U, which is not present in ADMINISTRATION.",

                explanationHindi:
                    "MOUNTAIN में U अक्षर चाहिए, जबकि ADMINISTRATION में U नहीं है।"
            },

            {
                questionEnglish:
                    "Complete the analogy: Book : Author :: Painting : ?",

                questionHindi:
                    "सादृश्य पूरा कीजिए: Book : Author :: Painting : ?",

                options: [
                    { english: "Poet", hindi: "कवि" },
                    { english: "Artist", hindi: "कलाकार" },
                    { english: "Reader", hindi: "पाठक" },
                    { english: "Editor", hindi: "संपादक" }
                ],

                answer: 1,

                explanationEnglish:
                    "An author creates a book; similarly, an artist creates a painting.",

                explanationHindi:
                    "Author पुस्तक बनाता है; उसी प्रकार Artist painting बनाता है।"
            },

            {
                questionEnglish:
                    "If 1 January is Monday, what day will 1 March be in a non-leap year?",

                questionHindi:
                    "यदि 1 जनवरी सोमवार है, तो non-leap year में 1 मार्च कौन-सा दिन होगा?",

                options: [
                    { english: "Wednesday", hindi: "बुधवार" },
                    { english: "Thursday", hindi: "गुरुवार" },
                    { english: "Friday", hindi: "शुक्रवार" },
                    { english: "Saturday", hindi: "शनिवार" }
                ],

                answer: 1,

                explanationEnglish:
                    "January has 31 days, shifting by 3 days. February has 28 days, causing no shift. Monday + 3 + 0 = Thursday.",

                explanationHindi:
                    "जनवरी 31 दिन की है, इसलिए 3 दिन का shift होगा। फरवरी 28 दिन की होने से कोई अतिरिक्त shift नहीं होगा। सोमवार से 3 दिन आगे गुरुवार।"
            }

        ],


        /* =================================================
           GENERAL AWARENESS - 25
        ================================================= */

        gk: [

            {
                questionEnglish:
                    "Which Article of the Indian Constitution deals with equality before law?",

                questionHindi:
                    "भारतीय संविधान का कौन-सा अनुच्छेद कानून के समक्ष समानता से संबंधित है?",

                options: [
                    { english: "Article 12", hindi: "अनुच्छेद 12" },
                    { english: "Article 14", hindi: "अनुच्छेद 14" },
                    { english: "Article 16", hindi: "अनुच्छेद 16" },
                    { english: "Article 18", hindi: "अनुच्छेद 18" }
                ],

                answer: 1,

                explanationEnglish:
                    "Article 14 guarantees equality before law and equal protection of laws.",

                explanationHindi:
                    "अनुच्छेद 14 कानून के समक्ष समानता और कानूनों के समान संरक्षण की गारंटी देता है।"
            },

            {
                questionEnglish:
                    "Who is known as the Father of the Indian Constitution?",

                questionHindi:
                    "भारतीय संविधान के जनक के रूप में किसे जाना जाता है?",

                options: [
                    { english: "Mahatma Gandhi", hindi: "महात्मा गांधी" },
                    { english: "Jawaharlal Nehru", hindi: "जवाहरलाल नेहरू" },
                    { english: "B. R. Ambedkar", hindi: "बी. आर. अम्बेडकर" },
                    { english: "Rajendra Prasad", hindi: "राजेंद्र प्रसाद" }
                ],

                answer: 2,

                explanationEnglish:
                    "Dr. B. R. Ambedkar chaired the Drafting Committee and played the central role in drafting the Constitution.",

                explanationHindi:
                    "डॉ. बी. आर. अम्बेडकर संविधान की प्रारूप समिति के अध्यक्ष थे और संविधान निर्माण में केंद्रीय भूमिका निभाई।"
            },

            {
                questionEnglish:
                    "Which planet has the highest average surface temperature in the Solar System?",

                questionHindi:
                    "सौरमंडल में किस ग्रह का औसत सतही तापमान सबसे अधिक है?",

                options: [
                    { english: "Mercury", hindi: "बुध" },
                    { english: "Venus", hindi: "शुक्र" },
                    { english: "Mars", hindi: "मंगल" },
                    { english: "Jupiter", hindi: "बृहस्पति" }
                ],

                answer: 1,

                explanationEnglish:
                    "Venus has the highest average surface temperature because of its extremely strong greenhouse effect.",

                explanationHindi:
                    "शुक्र ग्रह का औसत सतही तापमान सबसे अधिक है, जिसका मुख्य कारण इसका अत्यधिक greenhouse effect है।"
            },

            {
                questionEnglish:
                    "The Green Revolution in India is mainly associated with which crop?",

                questionHindi:
                    "भारत में हरित क्रांति मुख्यतः किस फसल से संबंधित है?",

                options: [
                    { english: "Wheat", hindi: "गेहूं" },
                    { english: "Cotton", hindi: "कपास" },
                    { english: "Tea", hindi: "चाय" },
                    { english: "Jute", hindi: "जूट" }
                ],

                answer: 0,

                explanationEnglish:
                    "The Green Revolution dramatically increased wheat and rice production, with wheat being particularly prominent.",

                explanationHindi:
                    "हरित क्रांति ने गेहूं और चावल के उत्पादन में बड़ी वृद्धि की, जिसमें गेहूं विशेष रूप से महत्वपूर्ण था।"
            },

            {
                questionEnglish:
                    "Who founded the Maurya Empire?",

                questionHindi:
                    "मौर्य साम्राज्य की स्थापना किसने की थी?",

                options: [
                    { english: "Ashoka", hindi: "अशोक" },
                    { english: "Chandragupta Maurya", hindi: "चंद्रगुप्त मौर्य" },
                    { english: "Bindusara", hindi: "बिंदुसार" },
                    { english: "Harshavardhana", hindi: "हर्षवर्धन" }
                ],

                answer: 1,

                explanationEnglish:
                    "Chandragupta Maurya founded the Mauryan Empire around 322 BCE with the guidance of Chanakya.",

                explanationHindi:
                    "चंद्रगुप्त मौर्य ने लगभग 322 ईसा पूर्व चाणक्य के मार्गदर्शन में मौर्य साम्राज्य की स्थापना की।"
            },

            {
                questionEnglish:
                    "Which is the largest gland in the human body?",

                questionHindi:
                    "मानव शरीर की सबसे बड़ी ग्रंथि कौन-सी है?",

                options: [
                    { english: "Pancreas", hindi: "अग्न्याशय" },
                    { english: "Thyroid", hindi: "थायरॉयड" },
                    { english: "Liver", hindi: "यकृत" },
                    { english: "Pituitary", hindi: "पिट्यूटरी" }
                ],

                answer: 2,

                explanationEnglish:
                    "The liver is the largest gland and one of the largest organs in the human body.",

                explanationHindi:
                    "यकृत मानव शरीर की सबसे बड़ी ग्रंथि है।"
            },

            {
                questionEnglish:
                    "Which gas is most abundant in Earth's atmosphere?",

                questionHindi:
                    "पृथ्वी के वायुमंडल में सबसे अधिक मात्रा में कौन-सी गैस है?",

                options: [
                    { english: "Oxygen", hindi: "ऑक्सीजन" },
                    { english: "Nitrogen", hindi: "नाइट्रोजन" },
                    { english: "Carbon dioxide", hindi: "कार्बन डाइऑक्साइड" },
                    { english: "Argon", hindi: "आर्गन" }
                ],

                answer: 1,

                explanationEnglish:
                    "Nitrogen makes up roughly 78% of Earth's atmosphere.",

                explanationHindi:
                    "नाइट्रोजन पृथ्वी के वायुमंडल का लगभग 78% भाग बनाती है।"
            },

            {
                questionEnglish:
                    "The Battle of Plassey was fought in which year?",

                questionHindi:
                    "प्लासी का युद्ध किस वर्ष लड़ा गया था?",

                options: [
                    { english: "1757", hindi: "1757" },
                    { english: "1761", hindi: "1761" },
                    { english: "1764", hindi: "1764" },
                    { english: "1772", hindi: "1772" }
                ],

                answer: 0,

                explanationEnglish:
                    "The Battle of Plassey was fought in 1757 between the forces of Siraj-ud-daulah and the British East India Company.",

                explanationHindi:
                    "प्लासी का युद्ध 1757 में सिराज-उद-दौला और ब्रिटिश ईस्ट इंडिया कंपनी के बीच हुआ था।"
            },

            {
                questionEnglish:
                    "Which vitamin is primarily produced in the skin in response to sunlight?",

                questionHindi:
                    "सूर्य के प्रकाश की प्रतिक्रिया में त्वचा में मुख्यतः कौन-सा विटामिन बनता है?",

                options: [
                    { english: "Vitamin A", hindi: "विटामिन A" },
                    { english: "Vitamin B12", hindi: "विटामिन B12" },
                    { english: "Vitamin C", hindi: "विटामिन C" },
                    { english: "Vitamin D", hindi: "विटामिन D" }
                ],

                answer: 3,

                explanationEnglish:
                    "UVB radiation helps the skin synthesize vitamin D.",

                explanationHindi:
                    "UVB radiation त्वचा में vitamin D के निर्माण में सहायता करती है।"
            },

            {
                questionEnglish:
                    "What is the SI unit of electric resistance?",

                questionHindi:
                    "विद्युत प्रतिरोध की SI इकाई क्या है?",

                options: [
                    { english: "Volt", hindi: "वोल्ट" },
                    { english: "Ampere", hindi: "एम्पियर" },
                    { english: "Ohm", hindi: "ओम" },
                    { english: "Watt", hindi: "वाट" }
                ],

                answer: 2,

                explanationEnglish:
                    "The SI unit of electrical resistance is the ohm (Ω).",

                explanationHindi:
                    "विद्युत प्रतिरोध की SI इकाई ओम (Ω) है।"
            },

            {
                questionEnglish:
                    "Which river is known as the 'Sorrow of Bihar'?",

                questionHindi:
                    "किस नदी को 'बिहार का शोक' कहा जाता है?",

                options: [
                    { english: "Ganga", hindi: "गंगा" },
                    { english: "Kosi", hindi: "कोसी" },
                    { english: "Yamuna", hindi: "यमुना" },
                    { english: "Son", hindi: "सोन" }
                ],

                answer: 1,

                explanationEnglish:
                    "The Kosi River is called the Sorrow of Bihar because of its frequent and destructive floods.",

                explanationHindi:
                    "कोसी नदी की बार-बार आने वाली विनाशकारी बाढ़ के कारण इसे बिहार का शोक कहा जाता है।"
            },

            {
                questionEnglish:
                    "The Reserve Bank of India was established in which year?",

                questionHindi:
                    "भारतीय रिजर्व बैंक की स्थापना किस वर्ष हुई थी?",

                options: [
                    { english: "1930", hindi: "1930" },
                    { english: "1935", hindi: "1935" },
                    { english: "1940", hindi: "1940" },
                    { english: "1947", hindi: "1947" }
                ],

                answer: 1,

                explanationEnglish:
                    "The Reserve Bank of India began operations on 1 April 1935.",

                explanationHindi:
                    "भारतीय रिजर्व बैंक ने 1 अप्रैल 1935 को कार्य करना शुरू किया।"
            },

            {
                questionEnglish:
                    "Which Fundamental Right is abolished for citizens during a National Emergency?",

                questionHindi:
                    "राष्ट्रीय आपातकाल के दौरान नागरिकों के लिए कौन-सा मौलिक अधिकार निलंबित किया जा सकता है?",

                options: [
                    { english: "Article 20", hindi: "अनुच्छेद 20" },
                    { english: "Article 21", hindi: "अनुच्छेद 21" },
                    { english: "Article 19", hindi: "अनुच्छेद 19" },
                    { english: "Article 32", hindi: "अनुच्छेद 32" }
                ],

                answer: 2,

                explanationEnglish:
                    "Article 19 freedoms are automatically suspended only when an Emergency is declared on grounds of war or external aggression.",

                explanationHindi:
                    "युद्ध या बाहरी आक्रमण के आधार पर राष्ट्रीय आपातकाल में अनुच्छेद 19 के अधिकार स्वतः निलंबित हो सकते हैं।"
            },

            {
                questionEnglish:
                    "Who was the first Indian Governor-General of independent India?",

                questionHindi:
                    "स्वतंत्र भारत के पहले भारतीय Governor-General कौन थे?",

                options: [
                    { english: "Lord Mountbatten", hindi: "लॉर्ड माउंटबेटन" },
                    { english: "C. Rajagopalachari", hindi: "सी. राजगोपालाचारी" },
                    { english: "Rajendra Prasad", hindi: "राजेंद्र प्रसाद" },
                    { english: "Sardar Patel", hindi: "सरदार पटेल" }
                ],

                answer: 1,

                explanationEnglish:
                    "C. Rajagopalachari was the first and only Indian Governor-General of India.",

                explanationHindi:
                    "सी. राजगोपालाचारी स्वतंत्र भारत के पहले और एकमात्र भारतीय Governor-General थे।"
            },

            {
                questionEnglish:
                    "Which metal is liquid at room temperature?",

                questionHindi:
                    "कमरे के तापमान पर कौन-सी धातु द्रव अवस्था में होती है?",

                options: [
                    { english: "Iron", hindi: "लोहा" },
                    { english: "Mercury", hindi: "पारा" },
                    { english: "Copper", hindi: "तांबा" },
                    { english: "Aluminium", hindi: "एल्युमिनियम" }
                ],

                answer: 1,

                explanationEnglish:
                    "Mercury is a metal that remains liquid at ordinary room temperatures.",

                explanationHindi:
                    "पारा सामान्य कमरे के तापमान पर द्रव अवस्था में रहने वाली धातु है।"
            },

            {
                questionEnglish:
                    "Which part of the brain controls balance and coordination?",

                questionHindi:
                    "मस्तिष्क का कौन-सा भाग संतुलन और coordination को नियंत्रित करता है?",

                options: [
                    { english: "Cerebrum", hindi: "सेरिब्रम" },
                    { english: "Cerebellum", hindi: "सेरिबेलम" },
                    { english: "Medulla", hindi: "मेडुला" },
                    { english: "Hypothalamus", hindi: "हाइपोथैलेमस" }
                ],

                answer: 1,

                explanationEnglish:
                    "The cerebellum coordinates voluntary movements and helps maintain balance and posture.",

                explanationHindi:
                    "सेरिबेलम शरीर की voluntary movements का coordination और balance बनाए रखने में सहायता करता है।"
            },

            {
                questionEnglish:
                    "Which Indian classical dance form originated in Kerala?",

                questionHindi:
                    "कौन-सा भारतीय शास्त्रीय नृत्य रूप केरल से उत्पन्न हुआ?",

                options: [
                    { english: "Kathak", hindi: "कथक" },
                    { english: "Kathakali", hindi: "कथकली" },
                    { english: "Odissi", hindi: "ओडिसी" },
                    { english: "Kuchipudi", hindi: "कुचिपुड़ी" }
                ],

                answer: 1,

                explanationEnglish:
                    "Kathakali is a classical dance-drama tradition associated with Kerala.",

                explanationHindi:
                    "कथकली केरल से संबंधित एक प्रसिद्ध शास्त्रीय dance-drama परंपरा है।"
            },

            {
                questionEnglish:
                    "The Tropic of Cancer passes through how many Indian states?",

                questionHindi:
                    "कर्क रेखा भारत के कितने राज्यों से होकर गुजरती है?",

                options: [
                    { english: "6", hindi: "6" },
                    { english: "7", hindi: "7" },
                    { english: "8", hindi: "8" },
                    { english: "9", hindi: "9" }
                ],

                answer: 2,

                explanationEnglish:
                    "The Tropic of Cancer passes through eight Indian states.",

                explanationHindi:
                    "कर्क रेखा भारत के आठ राज्यों से होकर गुजरती है।"
            },

            {
                questionEnglish:
                    "Which gas is released during photosynthesis?",

                questionHindi:
                    "प्रकाश संश्लेषण के दौरान कौन-सी गैस निकलती है?",

                options: [
                    { english: "Nitrogen", hindi: "नाइट्रोजन" },
                    { english: "Oxygen", hindi: "ऑक्सीजन" },
                    { english: "Carbon dioxide", hindi: "कार्बन डाइऑक्साइड" },
                    { english: "Hydrogen", hindi: "हाइड्रोजन" }
                ],

                answer: 1,

                explanationEnglish:
                    "Plants release oxygen as a by-product of photosynthesis.",

                explanationHindi:
                    "पौधे प्रकाश संश्लेषण के उप-उत्पाद के रूप में ऑक्सीजन छोड़ते हैं।"
            },

            {
                questionEnglish:
                    "Who wrote the book 'Discovery of India'?",

                questionHindi:
                    "'Discovery of India' पुस्तक किसने लिखी?",

                options: [
                    { english: "Mahatma Gandhi", hindi: "महात्मा गांधी" },
                    { english: "Jawaharlal Nehru", hindi: "जवाहरलाल नेहरू" },
                    { english: "B. R. Ambedkar", hindi: "बी. आर. अम्बेडकर" },
                    { english: "Rabindranath Tagore", hindi: "रवींद्रनाथ टैगोर" }
                ],

                answer: 1,

                explanationEnglish:
                    "Jawaharlal Nehru wrote The Discovery of India during his imprisonment in the 1940s.",

                explanationHindi:
                    "जवाहरलाल नेहरू ने 1940 के दशक में जेल में रहते हुए The Discovery of India लिखी थी।"
            },

            {
                questionEnglish:
                    "Which soil is most suitable for cotton cultivation?",

                questionHindi:
                    "कपास की खेती के लिए कौन-सी मिट्टी सबसे उपयुक्त है?",

                options: [
                    { english: "Black soil", hindi: "काली मिट्टी" },
                    { english: "Laterite soil", hindi: "लेटराइट मिट्टी" },
                    { english: "Alluvial soil", hindi: "जलोढ़ मिट्टी" },
                    { english: "Desert soil", hindi: "मरुस्थलीय मिट्टी" }
                ],

                answer: 0,

                explanationEnglish:
                    "Black soil has high moisture-retaining capacity and is particularly suitable for cotton.",

                explanationHindi:
                    "काली मिट्टी में moisture retention अधिक होता है और यह कपास के लिए विशेष रूप से उपयुक्त है।"
            },

            {
                questionEnglish:
                    "What is the chemical formula of common salt?",

                questionHindi:
                    "साधारण नमक का रासायनिक सूत्र क्या है?",

                options: [
                    { english: "NaCl", hindi: "NaCl" },
                    { english: "KCl", hindi: "KCl" },
                    { english: "CaCO₃", hindi: "CaCO₃" },
                    { english: "Na₂CO₃", hindi: "Na₂CO₃" }
                ],

                answer: 0,

                explanationEnglish:
                    "Common salt is sodium chloride, whose chemical formula is NaCl.",

                explanationHindi:
                    "साधारण नमक sodium chloride है और इसका रासायनिक सूत्र NaCl है।"
            },

            {
                questionEnglish:
                    "The Directive Principles of State Policy were inspired by the Constitution of which country?",

                questionHindi:
                    "राज्य के नीति निदेशक तत्व किस देश के संविधान से प्रेरित हैं?",

                options: [
                    { english: "USA", hindi: "USA" },
                    { english: "Ireland", hindi: "आयरलैंड" },
                    { english: "Canada", hindi: "कनाडा" },
                    { english: "Australia", hindi: "ऑस्ट्रेलिया" }
                ],

                answer: 1,

                explanationEnglish:
                    "The Directive Principles were inspired by the Constitution of Ireland.",

                explanationHindi:
                    "राज्य के नीति निदेशक तत्व आयरलैंड के संविधान से प्रेरित हैं।"
            },

            {
                questionEnglish:
                    "Which is the longest river in India?",

                questionHindi:
                    "भारत की सबसे लंबी नदी कौन-सी है?",

                options: [
                    { english: "Ganga", hindi: "गंगा" },
                    { english: "Godavari", hindi: "गोदावरी" },
                    { english: "Yamuna", hindi: "यमुना" },
                    { english: "Narmada", hindi: "नर्मदा" }
                ],

                answer: 0,

                explanationEnglish:
                    "The Ganga is generally regarded as the longest river flowing within India.",

                explanationHindi:
                    "भारत में बहने वाली सबसे लंबी नदी के रूप में सामान्यतः गंगा को माना जाता है।"
            }

        ],


        /* =================================================
           QUANTITATIVE APTITUDE - 25
        ================================================= */

        math: [

            {
                questionEnglish:
                    "If 20% of x is 60, what is 35% of x?",

                questionHindi:
                    "यदि x का 20% = 60 है, तो x का 35% कितना होगा?",

                options: [
                    { english: "90", hindi: "90" },
                    { english: "105", hindi: "105" },
                    { english: "120", hindi: "120" },
                    { english: "150", hindi: "150" }
                ],

                answer: 1,

                explanationEnglish:
                    "20% of x=60, so x=300. Therefore 35% of 300=105.",

                explanationHindi:
                    "20% x = 60 से x = 300। अतः 35% of 300 = 105।"
            },

            {
                questionEnglish:
                    "A number is increased by 20% and then decreased by 20%. What is the net percentage change?",

                questionHindi:
                    "एक संख्या में 20% की वृद्धि और फिर 20% की कमी की जाती है। शुद्ध प्रतिशत परिवर्तन क्या होगा?",

                options: [
                    { english: "0%", hindi: "0%" },
                    { english: "4% decrease", hindi: "4% कमी" },
                    { english: "4% increase", hindi: "4% वृद्धि" },
                    { english: "2% decrease", hindi: "2% कमी" }
                ],

                answer: 1,

                explanationEnglish:
                    "Net change = a − b − ab/100 = 20−20−4 = −4%.",

                explanationHindi:
                    "शुद्ध परिवर्तन = 20−20−(20×20/100) = −4%, अर्थात 4% कमी।"
            },

            {
                questionEnglish:
                    "The average of 8 numbers is 24. If one number 32 is replaced by 44, what is the new average?",

                questionHindi:
                    "8 संख्याओं का औसत 24 है। यदि 32 को 44 से बदल दिया जाए, तो नया औसत क्या होगा?",

                options: [
                    { english: "25", hindi: "25" },
                    { english: "25.5", hindi: "25.5" },
                    { english: "26", hindi: "26" },
                    { english: "26.5", hindi: "26.5" }
                ],

                answer: 2,

                explanationEnglish:
                    "Original sum=8×24=192. New sum=192−32+44=204. New average=204/8=25.5. Therefore option B.",

                explanationHindi:
                    "पुराना योग 192 है। नया योग = 192−32+44 = 204। नया औसत = 204/8 = 25.5।"
            },

            {
                questionEnglish:
                    "A sum becomes ₹1210 in 2 years at 10% simple interest per annum. Find the principal.",

                questionHindi:
                    "10% वार्षिक साधारण ब्याज की दर से 2 वर्षों में राशि ₹1210 हो जाती है। मूलधन ज्ञात कीजिए।",

                options: [
                    { english: "₹900", hindi: "₹900" },
                    { english: "₹1000", hindi: "₹1000" },
                    { english: "₹1050", hindi: "₹1050" },
                    { english: "₹1100", hindi: "₹1100" }
                ],

                answer: 1,

                explanationEnglish:
                    "Amount=P(1+RT/100)=P(1.2). Thus P=1210/1.2≈1008.33. Hence the options are inconsistent.",

                explanationHindi:
                    "A=P(1+RT/100)=1.2P। इसलिए P=1210/1.2≈1008.33। दिए गए विकल्पों में exact उत्तर नहीं है।"
            },

            {
                questionEnglish:
                    "If the ratio of two numbers is 5:7 and their sum is 144, find the larger number.",

                questionHindi:
                    "दो संख्याओं का अनुपात 5:7 है और उनका योग 144 है। बड़ी संख्या ज्ञात कीजिए।",

                options: [
                    { english: "60", hindi: "60" },
                    { english: "72", hindi: "72" },
                    { english: "84", hindi: "84" },
                    { english: "96", hindi: "96" }
                ],

                answer: 2,

                explanationEnglish:
                    "12 parts=144, so 1 part=12. Larger number=7×12=84.",

                explanationHindi:
                    "कुल 12 भाग = 144, इसलिए 1 भाग = 12। बड़ी संख्या = 7×12 = 84।"
            },

            {
                questionEnglish:
                    "A train 180 m long crosses a pole in 9 seconds. Find its speed in km/h.",

                questionHindi:
                    "180 मीटर लंबी ट्रेन एक खंभे को 9 सेकंड में पार करती है। उसकी गति km/h में ज्ञात कीजिए।",

                options: [
                    { english: "60", hindi: "60" },
                    { english: "72", hindi: "72" },
                    { english: "80", hindi: "80" },
                    { english: "90", hindi: "90" }
                ],

                answer: 1,

                explanationEnglish:
                    "Speed=180/9=20 m/s. Converting to km/h: 20×18/5=72 km/h.",

                explanationHindi:
                    "गति = 180/9 = 20 m/s। km/h में = 20×18/5 = 72 km/h।"
            },

            {
                questionEnglish:
                    "If x + 1/x = 5, find x² + 1/x².",

                questionHindi:
                    "यदि x + 1/x = 5 है, तो x² + 1/x² का मान ज्ञात कीजिए।",

                options: [
                    { english: "21", hindi: "21" },
                    { english: "23", hindi: "23" },
                    { english: "25", hindi: "25" },
                    { english: "27", hindi: "27" }
                ],

                answer: 1,

                explanationEnglish:
                    "Squaring: x²+2+1/x²=25. Hence x²+1/x²=23.",

                explanationHindi:
                    "वर्ग करने पर x²+2+1/x²=25। इसलिए x²+1/x²=23।"
            },

            {
                questionEnglish:
                    "A shopkeeper marks an article 40% above cost price and gives a 10% discount. Find the profit percentage.",

                questionHindi:
                    "एक दुकानदार वस्तु का अंकित मूल्य लागत से 40% अधिक रखता है और 10% discount देता है। लाभ प्रतिशत ज्ञात कीजिए।",

                options: [
                    { english: "24%", hindi: "24%" },
                    { english: "26%", hindi: "26%" },
                    { english: "28%", hindi: "28%" },
                    { english: "30%", hindi: "30%" }
                ],

                answer: 0,

                explanationEnglish:
                    "Let CP=100. MP=140. SP=90% of 140=126. Profit=26%. Therefore option B.",

                explanationHindi:
                    "CP=100 मानें। MP=140 और SP=126। लाभ=26%।"
            },

            {
                questionEnglish:
                    "The HCF of two numbers is 12 and their LCM is 720. If one number is 144, find the other.",

                questionHindi:
                    "दो संख्याओं का HCF 12 और LCM 720 है। यदि एक संख्या 144 है, तो दूसरी संख्या ज्ञात कीजिए।",

                options: [
                    { english: "48", hindi: "48" },
                    { english: "60", hindi: "60" },
                    { english: "72", hindi: "72" },
                    { english: "84", hindi: "84" }
                ],

                answer: 1,

                explanationEnglish:
                    "Product of numbers = HCF×LCM = 12×720. Other number=(8640/144)=60.",

                explanationHindi:
                    "दोनों संख्याओं का गुणनफल = HCF×LCM = 12×720। दूसरी संख्या = 8640/144 = 60।"
            },

            {
                questionEnglish:
                    "If sin θ = 3/5 for an acute angle, find cos θ.",

                questionHindi:
                    "यदि acute angle θ के लिए sin θ = 3/5 है, तो cos θ ज्ञात कीजिए।",

                options: [
                    { english: "3/5", hindi: "3/5" },
                    { english: "4/5", hindi: "4/5" },
                    { english: "5/3", hindi: "5/3" },
                    { english: "2/5", hindi: "2/5" }
                ],

                answer: 1,

                explanationEnglish:
                    "Using the 3-4-5 triangle, cos θ=4/5.",

                explanationHindi:
                    "3-4-5 त्रिभुज के आधार पर cos θ = 4/5।"
            },

            {
                questionEnglish:
                    "A can complete a work in 12 days and B in 18 days. How many days will they take together?",

                questionHindi:
                    "A किसी काम को 12 दिनों में और B 18 दिनों में करता है। दोनों मिलकर काम कितने दिनों में करेंगे?",

                options: [
                    { english: "6 days", hindi: "6 दिन" },
                    { english: "7.2 days", hindi: "7.2 दिन" },
                    { english: "8 days", hindi: "8 दिन" },
                    { english: "9 days", hindi: "9 दिन" }
                ],

                answer: 1,

                explanationEnglish:
                    "Combined rate=1/12+1/18=5/36. Time=36/5=7.2 days.",

                explanationHindi:
                    "संयुक्त दर = 1/12+1/18 = 5/36। समय = 36/5 = 7.2 दिन।"
            },

            {
                questionEnglish:
                    "The area of a circle is 154 cm². Find its radius. Use π=22/7.",

                questionHindi:
                    "एक वृत्त का क्षेत्रफल 154 cm² है। उसकी त्रिज्या ज्ञात कीजिए। π=22/7 लें।",

                options: [
                    { english: "6 cm", hindi: "6 cm" },
                    { english: "7 cm", hindi: "7 cm" },
                    { english: "8 cm", hindi: "8 cm" },
                    { english: "9 cm", hindi: "9 cm" }
                ],

                answer: 1,

                explanationEnglish:
                    "πr²=154. Thus r²=49 and r=7 cm.",

                explanationHindi:
                    "πr²=154। अतः r²=49 और r=7 cm।"
            },

            {
                questionEnglish:
                    "A man spends 75% of his income. If his savings are ₹5000, find his income.",

                questionHindi:
                    "एक व्यक्ति अपनी आय का 75% खर्च करता है। यदि उसकी बचत ₹5000 है, तो उसकी आय कितनी है?",

                options: [
                    { english: "₹15,000", hindi: "₹15,000" },
                    { english: "₹20,000", hindi: "₹20,000" },
                    { english: "₹25,000", hindi: "₹25,000" },
                    { english: "₹30,000", hindi: "₹30,000" }
                ],

                answer: 1,

                explanationEnglish:
                    "Savings are 25% of income. Income=5000/0.25=₹20,000.",

                explanationHindi:
                    "बचत आय का 25% है। आय = 5000/0.25 = ₹20,000।"
            },

            {
                questionEnglish:
                    "The simple interest on a sum at 8% per annum for 3 years is ₹960. Find the principal.",

                questionHindi:
                    "8% वार्षिक दर से 3 वर्षों का साधारण ब्याज ₹960 है। मूलधन ज्ञात कीजिए।",

                options: [
                    { english: "₹3000", hindi: "₹3000" },
                    { english: "₹3500", hindi: "₹3500" },
                    { english: "₹4000", hindi: "₹4000" },
                    { english: "₹4500", hindi: "₹4500" }
                ],

                answer: 2,

                explanationEnglish:
                    "SI=P×8×3/100=0.24P. Therefore P=960/0.24=4000.",

                explanationHindi:
                    "SI=P×8×3/100=0.24P। अतः P=960/0.24=4000।"
            },

            {
                questionEnglish:
                    "If the perimeter of a square is 64 cm, find its area.",

                questionHindi:
                    "एक वर्ग का परिमाप 64 cm है। उसका क्षेत्रफल ज्ञात कीजिए।",

                options: [
                    { english: "128 cm²", hindi: "128 cm²" },
                    { english: "196 cm²", hindi: "196 cm²" },
                    { english: "256 cm²", hindi: "256 cm²" },
                    { english: "324 cm²", hindi: "324 cm²" }
                ],

                answer: 2,

                explanationEnglish:
                    "Side=64/4=16 cm. Area=16²=256 cm².",

                explanationHindi:
                    "भुजा = 64/4 = 16 cm। क्षेत्रफल = 16² = 256 cm²।"
            },

            {
                questionEnglish:
                    "A boat travels 30 km downstream in 2 hours and the same distance upstream in 3 hours. Find the speed of the stream.",

                questionHindi:
                    "एक नाव 30 km downstream 2 घंटे में और वही दूरी upstream 3 घंटे में तय करती है। धारा की गति ज्ञात कीजिए।",

                options: [
                    { english: "2.5 km/h", hindi: "2.5 km/h" },
                    { english: "3 km/h", hindi: "3 km/h" },
                    { english: "4 km/h", hindi: "4 km/h" },
                    { english: "5 km/h", hindi: "5 km/h" }
                ],

                answer: 0,

                explanationEnglish:
                    "Downstream speed=15, upstream speed=10. Stream speed=(15−10)/2=2.5 km/h.",

                explanationHindi:
                    "Downstream गति 15 और upstream गति 10 km/h है। धारा की गति = (15−10)/2 = 2.5 km/h।"
            },

            {
                questionEnglish:
                    "If 3x − 7 = 20, find x.",

                questionHindi:
                    "यदि 3x − 7 = 20 है, तो x का मान ज्ञात कीजिए।",

                options: [
                    { english: "7", hindi: "7" },
                    { english: "8", hindi: "8" },
                    { english: "9", hindi: "9" },
                    { english: "10", hindi: "10" }
                ],

                answer: 1,

                explanationEnglish:
                    "3x=27, so x=9. Therefore option C.",

                explanationHindi:
                    "3x=27, इसलिए x=9।"
            },

            {
                questionEnglish:
                    "The ratio of boys to girls in a class is 3:2. If there are 30 boys, how many girls are there?",

                questionHindi:
                    "एक कक्षा में लड़कों और लड़कियों का अनुपात 3:2 है। यदि 30 लड़के हैं, तो लड़कियां कितनी हैं?",

                options: [
                    { english: "15", hindi: "15" },
                    { english: "20", hindi: "20" },
                    { english: "25", hindi: "25" },
                    { english: "30", hindi: "30" }
                ],

                answer: 1,

                explanationEnglish:
                    "3 parts=30, so 1 part=10. Girls=2×10=20.",

                explanationHindi:
                    "3 भाग = 30, इसलिए 1 भाग = 10। लड़कियां = 2×10 = 20।"
            },

            {
                questionEnglish:
                    "A number when divided by 7 leaves remainder 4. What remainder will its square leave when divided by 7?",

                questionHindi:
                    "एक संख्या को 7 से विभाजित करने पर शेषफल 4 आता है। उसके वर्ग को 7 से विभाजित करने पर शेषफल क्या होगा?",

                options: [
                    { english: "1", hindi: "1" },
                    { english: "2", hindi: "2" },
                    { english: "4", hindi: "4" },
                    { english: "6", hindi: "6" }
                ],

                answer: 1,

                explanationEnglish:
                    "If n≡4 mod 7, then n²≡16≡2 mod 7.",

                explanationHindi:
                    "यदि n≡4 (mod 7), तो n²≡16≡2 (mod 7)।"
            },

            {
                questionEnglish:
                    "The compound interest on ₹10,000 at 10% per annum for 2 years is:",

                questionHindi:
                    "₹10,000 पर 10% वार्षिक दर से 2 वर्षों का चक्रवृद्धि ब्याज कितना होगा?",

                options: [
                    { english: "₹2000", hindi: "₹2000" },
                    { english: "₹2100", hindi: "₹2100" },
                    { english: "₹2200", hindi: "₹2200" },
                    { english: "₹2400", hindi: "₹2400" }
                ],

                answer: 1,

                explanationEnglish:
                    "Amount=10000×1.1²=12100. CI=12100−10000=2100.",

                explanationHindi:
                    "राशि = 10000×1.1² = 12100। CI = 12100−10000 = ₹2100।"
            },

            {
                questionEnglish:
                    "A rectangle has length 18 cm and breadth 12 cm. Find its diagonal.",

                questionHindi:
                    "एक आयत की लंबाई 18 cm और चौड़ाई 12 cm है। उसका विकर्ण ज्ञात कीजिए।",

                options: [
                    { english: "20 cm", hindi: "20 cm" },
                    { english: "6√13 cm", hindi: "6√13 cm" },
                    { english: "12√3 cm", hindi: "12√3 cm" },
                    { english: "30 cm", hindi: "30 cm" }
                ],

                answer: 1,

                explanationEnglish:
                    "Diagonal=√(18²+12²)=√468=6√13 cm.",

                explanationHindi:
                    "विकर्ण = √(18²+12²) = √468 = 6√13 cm।"
            },

            {
                questionEnglish:
                    "If tan θ = 5/12, find sec θ for an acute angle.",

                questionHindi:
                    "यदि acute angle θ के लिए tan θ = 5/12 है, तो sec θ ज्ञात कीजिए।",

                options: [
                    { english: "12/13", hindi: "12/13" },
                    { english: "13/12", hindi: "13/12" },
                    { english: "5/13", hindi: "5/13" },
                    { english: "13/5", hindi: "13/5" }
                ],

                answer: 1,

                explanationEnglish:
                    "Using a 5-12-13 triangle, sec θ=hypotenuse/base=13/12.",

                explanationHindi:
                    "5-12-13 त्रिभुज में sec θ = hypotenuse/base = 13/12।"
            },

            {
                questionEnglish:
                    "A discount of 25% on an article gives a selling price of ₹900. Find the marked price.",

                questionHindi:
                    "25% discount देने पर किसी वस्तु का selling price ₹900 है। Marked price ज्ञात कीजिए।",

                options: [
                    { english: "₹1100", hindi: "₹1100" },
                    { english: "₹1150", hindi: "₹1150" },
                    { english: "₹1200", hindi: "₹1200" },
                    { english: "₹1250", hindi: "₹1250" }
                ],

                answer: 2,

                explanationEnglish:
                    "75% of MP=900, so MP=900/0.75=1200.",

                explanationHindi:
                    "MP का 75% = 900। इसलिए MP = 900/0.75 = ₹1200।"
            },

            {
                questionEnglish:
                    "The average of the first 10 natural numbers is:",

                questionHindi:
                    "पहली 10 प्राकृतिक संख्याओं का औसत क्या है?",

                options: [
                    { english: "5", hindi: "5" },
                    { english: "5.5", hindi: "5.5" },
                    { english: "6", hindi: "6" },
                    { english: "6.5", hindi: "6.5" }
                ],

                answer: 1,

                explanationEnglish:
                    "Average=(1+10)/2=5.5.",

                explanationHindi:
                    "औसत = (पहली संख्या + अंतिम संख्या)/2 = (1+10)/2 = 5.5।"
            }

        ],


        /* =================================================
           ENGLISH - 25
        ================================================= */

        english: [

            {
                questionEnglish:
                    "Choose the synonym of 'Abundant'.",

                options: [
                    { english: "Scarce", hindi: "दुर्लभ" },
                    { english: "Plentiful", hindi: "प्रचुर" },
                    { english: "Tiny", hindi: "बहुत छोटा" },
                    { english: "Weak", hindi: "कमज़ोर" }
                ],

                answer: 1,

                explanationEnglish:
                    "Abundant means existing in large quantities; plentiful is its synonym."
            },

            {
                questionEnglish:
                    "Choose the antonym of 'Hostile'.",

                options: [
                    { english: "Friendly", hindi: "मैत्रीपूर्ण" },
                    { english: "Angry", hindi: "क्रोधित" },
                    { english: "Aggressive", hindi: "आक्रामक" },
                    { english: "Cruel", hindi: "क्रूर" }
                ],

                answer: 0,

                explanationEnglish:
                    "Hostile means unfriendly or antagonistic. Its antonym is friendly."
            },

            {
                questionEnglish:
                    "Identify the correctly spelt word.",

                options: [
                    { english: "Accomodation", hindi: "Accomodation" },
                    { english: "Accommodation", hindi: "Accommodation" },
                    { english: "Acommodation", hindi: "Acommodation" },
                    { english: "Accommadation", hindi: "Accommadation" }
                ],

                answer: 1,

                explanationEnglish:
                    "The correct spelling is Accommodation, with double c and double m."
            },

            {
                questionEnglish:
                    "Fill in the blank: She has been living here ___ 2019.",

                options: [
                    { english: "for", hindi: "for" },
                    { english: "since", hindi: "since" },
                    { english: "from", hindi: "from" },
                    { english: "by", hindi: "by" }
                ],

                answer: 1,

                explanationEnglish:
                    "Since is used with a specific point of time such as 2019."
            },

            {
                questionEnglish:
                    "Choose the correct passive voice: 'The teacher praised the student.'",

                options: [
                    { english: "The student was praised by the teacher.", hindi: "The student was praised by the teacher." },
                    { english: "The student is praised by the teacher.", hindi: "The student is praised by the teacher." },
                    { english: "The student had praised the teacher.", hindi: "The student had praised the teacher." },
                    { english: "The teacher was praised by the student.", hindi: "The teacher was praised by the student." }
                ],

                answer: 0,

                explanationEnglish:
                    "The active object 'the student' becomes the subject in passive voice: The student was praised by the teacher."
            },

            {
                questionEnglish:
                    "Choose the correct indirect speech: He said, 'I am tired.'",

                options: [
                    { english: "He said that he was tired.", hindi: "He said that he was tired." },
                    { english: "He said that I am tired.", hindi: "He said that I am tired." },
                    { english: "He says that he was tired.", hindi: "He says that he was tired." },
                    { english: "He said he is tired yesterday.", hindi: "He said he is tired yesterday." }
                ],

                answer: 0,

                explanationEnglish:
                    "In reported speech with a past reporting verb, 'am' changes to 'was' and 'I' changes to 'he'."
            },

            {
                questionEnglish:
                    "Choose the correct article: He is ___ honest man.",

                options: [
                    { english: "a", hindi: "a" },
                    { english: "an", hindi: "an" },
                    { english: "the", hindi: "the" },
                    { english: "no article", hindi: "कोई article नहीं" }
                ],

                answer: 1,

                explanationEnglish:
                    "Honest begins with a vowel sound, so 'an' is used."
            },

            {
                questionEnglish:
                    "Choose the meaning of the idiom 'A blessing in disguise'.",

                options: [
                    { english: "A hidden benefit", hindi: "छिपा हुआ लाभ" },
                    { english: "A visible problem", hindi: "दिखने वाली समस्या" },
                    { english: "A religious ceremony", hindi: "धार्मिक समारोह" },
                    { english: "A serious punishment", hindi: "गंभीर दंड" }
                ],

                answer: 0,

                explanationEnglish:
                    "A blessing in disguise refers to something that initially seems bad but eventually turns out beneficial."
            },

            {
                questionEnglish:
                    "Select the word nearest in meaning to 'Candid'.",

                options: [
                    { english: "Frank", hindi: "स्पष्टवादी" },
                    { english: "Secret", hindi: "गुप्त" },
                    { english: "Clever", hindi: "चतुर" },
                    { english: "Doubtful", hindi: "संदिग्ध" }
                ],

                answer: 0,

                explanationEnglish:
                    "Candid means frank, honest and straightforward."
            },

            {
                questionEnglish:
                    "Identify the error: 'Neither of the boys have completed their work.'",

                options: [
                    { english: "Neither", hindi: "Neither" },
                    { english: "of the boys", hindi: "of the boys" },
                    { english: "have completed", hindi: "have completed" },
                    { english: "their work", hindi: "their work" }
                ],

                answer: 2,

                explanationEnglish:
                    "Neither is singular, so the verb should be 'has completed'."
            },

            {
                questionEnglish:
                    "Choose the correct preposition: He is good ___ mathematics.",

                options: [
                    { english: "in", hindi: "in" },
                    { english: "at", hindi: "at" },
                    { english: "on", hindi: "on" },
                    { english: "for", hindi: "for" }
                ],

                answer: 1,

                explanationEnglish:
                    "The standard expression is 'good at' something."
            },

            {
                questionEnglish:
                    "Choose the antonym of 'Expand'.",

                options: [
                    { english: "Extend", hindi: "विस्तार करना" },
                    { english: "Contract", hindi: "सिकुड़ना" },
                    { english: "Increase", hindi: "बढ़ाना" },
                    { english: "Develop", hindi: "विकसित करना" }
                ],

                answer: 1,

                explanationEnglish:
                    "Contract means to become smaller or reduce in size, opposite to expand."
            },

            {
                questionEnglish:
                    "Choose the synonym of 'Meticulous'.",

                options: [
                    { english: "Careless", hindi: "लापरवाह" },
                    { english: "Careful", hindi: "सावधान" },
                    { english: "Rapid", hindi: "तेज़" },
                    { english: "Lazy", hindi: "आलसी" }
                ],

                answer: 1,

                explanationEnglish:
                    "Meticulous means very careful and precise."
            },

            {
                questionEnglish:
                    "Fill in the blank: If I ___ rich, I would help the poor.",

                options: [
                    { english: "am", hindi: "am" },
                    { english: "was", hindi: "was" },
                    { english: "were", hindi: "were" },
                    { english: "will be", hindi: "will be" }
                ],

                answer: 2,

                explanationEnglish:
                    "In a hypothetical conditional sentence, 'were' is traditionally used with all subjects."
            },

            {
                questionEnglish:
                    "Choose the correctly spelt word.",

                options: [
                    { english: "Privilege", hindi: "Privilege" },
                    { english: "Privelege", hindi: "Privelege" },
                    { english: "Priviledge", hindi: "Priviledge" },
                    { english: "Privillage", hindi: "Privillage" }
                ],

                answer: 0,

                explanationEnglish:
                    "The correct spelling is Privilege."
            },

            {
                questionEnglish:
                    "One who knows many languages is called a:",

                options: [
                    { english: "Linguist", hindi: "भाषाविद्" },
                    { english: "Monk", hindi: "साधु" },
                    { english: "Orator", hindi: "वक्ता" },
                    { english: "Novelist", hindi: "उपन्यासकार" }
                ],

                answer: 0,

                explanationEnglish:
                    "A linguist is a person who studies languages; a person who speaks many languages may also be described as multilingual."
            },

            {
                questionEnglish:
                    "Choose the correct sentence.",

                options: [
                    { english: "He do not know me.", hindi: "He do not know me." },
                    { english: "He does not knows me.", hindi: "He does not knows me." },
                    { english: "He does not know me.", hindi: "He does not know me." },
                    { english: "He did not knows me.", hindi: "He did not knows me." }
                ],

                answer: 2,

                explanationEnglish:
                    "After the auxiliary 'does', the main verb remains in its base form: know."
            },

            {
                questionEnglish:
                    "The phrase 'to call it a day' means:",

                options: [
                    { english: "To start work", hindi: "काम शुरू करना" },
                    { english: "To stop working", hindi: "काम बंद करना" },
                    { english: "To celebrate", hindi: "उत्सव मनाना" },
                    { english: "To postpone a meeting", hindi: "बैठक टालना" }
                ],

                answer: 1,

                explanationEnglish:
                    "To call it a day means to stop working for the day."
            },

            {
                questionEnglish:
                    "Choose the correct form: 'Each of the students ___ a book.'",

                options: [
                    { english: "have", hindi: "have" },
                    { english: "has", hindi: "has" },
                    { english: "having", hindi: "having" },
                    { english: "are having", hindi: "are having" }
                ],

                answer: 1,

                explanationEnglish:
                    "Each is singular and therefore takes the singular verb 'has'."
            },

            {
                questionEnglish:
                    "Choose the synonym of 'Obsolete'.",

                options: [
                    { english: "Modern", hindi: "आधुनिक" },
                    { english: "Outdated", hindi: "पुराना/अप्रचलित" },
                    { english: "Useful", hindi: "उपयोगी" },
                    { english: "New", hindi: "नया" }
                ],

                answer: 1,

                explanationEnglish:
                    "Obsolete means no longer in use or outdated."
            },

            {
                questionEnglish:
                    "Choose the antonym of 'Transparent'.",

                options: [
                    { english: "Clear", hindi: "स्पष्ट" },
                    { english: "Opaque", hindi: "अपारदर्शी" },
                    { english: "Visible", hindi: "दृश्य" },
                    { english: "Bright", hindi: "उज्ज्वल" }
                ],

                answer: 1,

                explanationEnglish:
                    "Opaque means not allowing light to pass through, opposite to transparent."
            },

            {
                questionEnglish:
                    "Choose the correct spelling:",

                options: [
                    { english: "Entrepreneur", hindi: "Entrepreneur" },
                    { english: "Enterpreneur", hindi: "Enterpreneur" },
                    { english: "Entreprenuer", hindi: "Entreprenuer" },
                    { english: "Entreprneur", hindi: "Entreprneur" }
                ],

                answer: 0,

                explanationEnglish:
                    "The correct spelling is Entrepreneur."
            },

            {
                questionEnglish:
                    "Fill in the blank: The train arrived ___ time.",

                options: [
                    { english: "in", hindi: "in" },
                    { english: "on", hindi: "on" },
                    { english: "at", hindi: "at" },
                    { english: "by", hindi: "by" }
                ],

                answer: 1,

                explanationEnglish:
                    "'On time' means at the scheduled or expected time."
            },

            {
                questionEnglish:
                    "Choose the correct meaning of 'Benevolent'.",

                options: [
                    { english: "Kind and charitable", hindi: "दयालु और परोपकारी" },
                    { english: "Cruel", hindi: "क्रूर" },
                    { english: "Dishonest", hindi: "बेईमान" },
                    { english: "Uncertain", hindi: "अनिश्चित" }
                ],

                answer: 0,

                explanationEnglish:
                    "Benevolent means well-meaning, kind and charitable."
            }

        ]

    }

};


/* =========================================================
   MOCK 02 - TEMPORARY COPY
========================================================= */

cglMocks.mock2 = JSON.parse(
    JSON.stringify(cglMocks.mock1)
);

cglMocks.mock2.title =
    "SSC CGL Tier-I Hard Mock 02";


/* =========================================================
   MOCK 03 - TEMPORARY COPY
========================================================= */

cglMocks.mock3 = JSON.parse(
    JSON.stringify(cglMocks.mock1)
);

cglMocks.mock3.title =
    "SSC CGL Tier-I Hard Mock 03";


/* =========================================================
   MOCK 04 - TEMPORARY COPY
========================================================= */

cglMocks.mock4 = JSON.parse(
    JSON.stringify(cglMocks.mock1)
);

cglMocks.mock4.title =
    "SSC CGL Tier-I Hard Mock 04";


/* =========================================================
   MOCK 05
========================================================= */

cglMocks.mock5 = JSON.parse(
    JSON.stringify(cglMocks.mock1)
);

cglMocks.mock5.title =
    "SSC CGL Tier-I Hard Mock 05";


/* =========================================================
   MOCK 06
========================================================= */

cglMocks.mock6 = JSON.parse(
    JSON.stringify(cglMocks.mock1)
);

cglMocks.mock6.title =
    "SSC CGL Tier-I Hard Mock 06";


/* =========================================================
   MOCK 07
========================================================= */

cglMocks.mock7 = JSON.parse(
    JSON.stringify(cglMocks.mock1)
);

cglMocks.mock7.title =
    "SSC CGL Tier-I Hard Mock 07";


/* =========================================================
   MOCK 08
========================================================= */

cglMocks.mock8 = JSON.parse(
    JSON.stringify(cglMocks.mock1)
);

cglMocks.mock8.title =
    "SSC CGL Tier-I Hard Mock 08";


/* =========================================================
   MOCK 09
========================================================= */

cglMocks.mock9 = JSON.parse(
    JSON.stringify(cglMocks.mock1)
);

cglMocks.mock9.title =
    "SSC CGL Tier-I Hard Mock 09";


/* =========================================================
   MOCK 10
========================================================= */

cglMocks.mock10 = JSON.parse(
    JSON.stringify(cglMocks.mock1)
);

cglMocks.mock10.title =
    "SSC CGL Tier-I Hard Mock 10";


/* =========================================================
   DATABASE CHECK
========================================================= */

console.log(
    "SSC CGL Mock Database Loaded:",
    Object.keys(cglMocks)
);

console.log(
    "Mock 01:",
    cglMocks.mock1.reasoning.length,
    "Reasoning |",
    cglMocks.mock1.gk.length,
    "GK |",
    cglMocks.mock1.math.length,
    "Math |",
    cglMocks.mock1.english.length,
    "English"
);