/* =========================================================
   SSC MATHS — PERCENTAGE LEARNING ENGINE
   FINAL PREMIUM VERSION
   SSC ONLY
   ========================================================= */


/* =========================================================
   1. BASIC PERCENTAGE DATA
   ========================================================= */

const percentageValues = [
    { fraction: "1/2", decimal: "0.5", percentage: "50%" },
    { fraction: "1/3", decimal: "0.333", percentage: "33.33%" },
    { fraction: "1/4", decimal: "0.25", percentage: "25%" },
    { fraction: "1/5", decimal: "0.2", percentage: "20%" },
    { fraction: "1/8", decimal: "0.125", percentage: "12.5%" },
    { fraction: "1/10", decimal: "0.1", percentage: "10%" },
    { fraction: "1/20", decimal: "0.05", percentage: "5%" },
    { fraction: "1/25", decimal: "0.04", percentage: "4%" },
    { fraction: "1/40", decimal: "0.025", percentage: "2.5%" },
    { fraction: "1/50", decimal: "0.02", percentage: "2%" },
    { fraction: "1/100", decimal: "0.01", percentage: "1%" }
];


/* =========================================================
   2. SSC PERCENTAGE CONCEPTS
   ========================================================= */

const percentageConcepts = [

    {
        id: "basic",
        title: "Basic Percentage",
        shortTitle: "Basics",

        hindi:
            "Percentage ka matlab hota hai kisi quantity ko 100 ke base par express karna.",

        english:
            "Percentage means expressing a quantity out of 100.",

        formula:
            "Percentage = (Part / Total) × 100",

        example:
            "20 students mein se 5 present hain. Percentage = (5/20) × 100 = 25%."
    },

    {
        id: "fraction",
        title: "Fraction to Percentage",
        shortTitle: "Fraction → %",

        hindi:
            "Fraction ko percentage mein convert karne ke liye fraction ko 100 se multiply karte hain.",

        english:
            "To convert a fraction into percentage, multiply it by 100.",

        formula:
            "Percentage = Fraction × 100",

        example:
            "3/4 × 100 = 75%"
    },

    {
        id: "decimal",
        title: "Decimal to Percentage",
        shortTitle: "Decimal → %",

        hindi:
            "Decimal ko percentage mein convert karne ke liye decimal ko 100 se multiply karte hain.",

        english:
            "Multiply a decimal by 100 to convert it into percentage.",

        formula:
            "Percentage = Decimal × 100",

        example:
            "0.35 × 100 = 35%"
    },

    {
        id: "percent-fraction",
        title: "Percentage to Fraction",
        shortTitle: "% → Fraction",

        hindi:
            "Percentage ko fraction mein convert karne ke liye 100 se divide karke simplify karte hain.",

        english:
            "Divide the percentage by 100 and simplify it.",

        formula:
            "x% = x/100",

        example:
            "25% = 25/100 = 1/4"
    },

    {
        id: "increase",
        title: "Percentage Increase",
        shortTitle: "Increase",

        hindi:
            "Original value ke comparison mein value kitni badhi hai, use percentage increase kehte hain.",

        english:
            "Percentage increase measures how much a value has increased from its original value.",

        formula:
            "Increase % = (Increase / Original Value) × 100",

        example:
            "200 se 250 hone par increase = 50, so increase = 25%."
    },

    {
        id: "decrease",
        title: "Percentage Decrease",
        shortTitle: "Decrease",

        hindi:
            "Original value ke comparison mein value kitni kam hui hai, use percentage decrease kehte hain.",

        english:
            "Percentage decrease measures how much a value has decreased from its original value.",

        formula:
            "Decrease % = (Decrease / Original Value) × 100",

        example:
            "500 se 400 hone par decrease = 100, so decrease = 20%."
    },

    {
        id: "successive",
        title: "Successive Percentage",
        shortTitle: "Successive %",

        hindi:
            "Jab kisi value par ek ke baad ek percentage changes hote hain, use successive percentage change kehte hain.",

        english:
            "Successive percentage changes occur one after another on the changed value.",

        formula:
            "Net Increase = a + b + ab/100",

        example:
            "20% increase aur 10% increase = 20 + 10 + 2 = 32%."
    },

    {
        id: "comparison",
        title: "Percentage Comparison",
        shortTitle: "Comparison",

        hindi:
            "Do quantities ko compare karte waqt base value identify karna sabse important hai.",

        english:
            "In percentage comparison, identifying the base value is important.",

        formula:
            "Percentage = Difference / Base Value × 100",

        example:
            "80 is 20% less than 100."
    },

    {
        id: "price",
        title: "Price & Percentage",
        shortTitle: "Price",

        hindi:
            "Price increase/decrease ke questions mein original price ko base maana jata hai.",

        english:
            "In price percentage questions, the original price is generally the base value.",

        formula:
            "New Price = Original × (100 ± Percentage)/100",

        example:
            "₹500 mein 20% increase = ₹600."
    },

    {
        id: "population",
        title: "Population Percentage",
        shortTitle: "Population",

        hindi:
            "Population ke questions mein percentage increase ya decrease apply kiya jata hai.",

        english:
            "Population questions commonly use percentage increase or decrease.",

        formula:
            "New Population = Old Population × (100 ± Percentage)/100",

        example:
            "20,000 mein 10% increase = 22,000."
    },

    {
        id: "salary",
        title: "Salary Percentage",
        shortTitle: "Salary",

        hindi:
            "Salary increase/decrease ke questions mein original salary ko base value maana jata hai.",

        english:
            "In salary questions, the original salary is used as the base value.",

        formula:
            "New Salary = Original Salary × (100 ± Percentage)/100",

        example:
            "₹20,000 mein 10% increase = ₹22,000."
    },

    {
        id: "expenditure",
        title: "Price, Consumption & Expenditure",
        shortTitle: "Expenditure",

        hindi:
            "Price aur consumption ke relation mein expenditure ko constant rakhne ke liye opposite percentage change apply hota hai.",

        english:
            "When expenditure remains constant, price and consumption change inversely.",

        formula:
            "Consumption decrease = Increase / (100 + Increase) × 100",

        example:
            "Price 20% increase hone par consumption 16⅔% decrease karni hogi."
    }
];


/* =========================================================
   3. SSC QUESTION DATABASE
   ========================================================= */

const percentageQuestions = [

    /* =====================================================
       BASIC
       ===================================================== */

    {
        concept: "basic",
        question: "100 ka 25% kitna hoga?",
        options: ["20", "25", "30", "35"],
        answer: 1,
        explanation:
            "25% = 25/100. Isliye 100 × 25/100 = 25."
    },

    {
        concept: "basic",
        question: "200 ka 10% kitna hoga?",
        options: ["10", "20", "30", "40"],
        answer: 1,
        explanation:
            "10% = 10/100. 200 × 10/100 = 20."
    },

    {
        concept: "basic",
        question: "500 ka 20% kitna hoga?",
        options: ["50", "75", "100", "125"],
        answer: 2,
        explanation:
            "500 × 20/100 = 100."
    },

    {
        concept: "basic",
        question: "80 ka 50% kitna hoga?",
        options: ["20", "30", "40", "50"],
        answer: 2,
        explanation:
            "50% ka matlab half hota hai. 80 ka half = 40."
    },

    {
        concept: "basic",
        question: "300 ka 15% kitna hoga?",
        options: ["30", "45", "50", "60"],
        answer: 1,
        explanation:
            "300 × 15/100 = 45."
    },


    /* =====================================================
       FRACTION
       ===================================================== */

    {
        concept: "fraction",
        question: "1/2 ko percentage mein convert karo.",
        options: ["25%", "40%", "50%", "75%"],
        answer: 2,
        explanation:
            "1/2 × 100 = 50%."
    },

    {
        concept: "fraction",
        question: "1/4 ko percentage mein convert karo.",
        options: ["20%", "25%", "30%", "40%"],
        answer: 1,
        explanation:
            "1/4 × 100 = 25%."
    },

    {
        concept: "fraction",
        question: "3/4 ko percentage mein convert karo.",
        options: ["50%", "60%", "75%", "80%"],
        answer: 2,
        explanation:
            "3/4 × 100 = 75%."
    },

    {
        concept: "fraction",
        question: "1/5 kitne percent ke barabar hai?",
        options: ["10%", "15%", "20%", "25%"],
        answer: 2,
        explanation:
            "1/5 × 100 = 20%."
    },

    {
        concept: "fraction",
        question: "3/5 ko percentage mein convert karo.",
        options: ["40%", "50%", "60%", "70%"],
        answer: 2,
        explanation:
            "3/5 × 100 = 60%."
    },


    /* =====================================================
       DECIMAL
       ===================================================== */

    {
        concept: "decimal",
        question: "0.25 ko percentage mein convert karo.",
        options: ["15%", "20%", "25%", "30%"],
        answer: 2,
        explanation:
            "0.25 × 100 = 25%."
    },

    {
        concept: "decimal",
        question: "0.5 ko percentage mein convert karo.",
        options: ["25%", "40%", "50%", "60%"],
        answer: 2,
        explanation:
            "0.5 × 100 = 50%."
    },

    {
        concept: "decimal",
        question: "0.75 ko percentage mein convert karo.",
        options: ["50%", "60%", "75%", "80%"],
        answer: 2,
        explanation:
            "0.75 × 100 = 75%."
    },

    {
        concept: "decimal",
        question: "0.08 ko percentage mein convert karo.",
        options: ["4%", "6%", "8%", "10%"],
        answer: 2,
        explanation:
            "0.08 × 100 = 8%."
    },


    /* =====================================================
       PERCENTAGE TO FRACTION
       ===================================================== */

    {
        concept: "percent-fraction",
        question: "25% ko simplest fraction mein convert karo.",
        options: ["1/2", "1/3", "1/4", "1/5"],
        answer: 2,
        explanation:
            "25% = 25/100 = 1/4."
    },

    {
        concept: "percent-fraction",
        question: "50% ka simplest fraction kya hai?",
        options: ["1/2", "1/3", "1/4", "2/3"],
        answer: 0,
        explanation:
            "50% = 50/100 = 1/2."
    },

    {
        concept: "percent-fraction",
        question: "20% ko fraction mein convert karo.",
        options: ["1/2", "1/4", "1/5", "1/10"],
        answer: 2,
        explanation:
            "20% = 20/100 = 1/5."
    },

    {
        concept: "percent-fraction",
        question: "75% ka simplest fraction kya hoga?",
        options: ["1/2", "2/3", "3/4", "4/5"],
        answer: 2,
        explanation:
            "75% = 75/100 = 3/4."
    },


    /* =====================================================
       INCREASE
       ===================================================== */

    {
        concept: "increase",
        question: "Ek number 200 se badhkar 250 ho gaya. Percentage increase kitna hai?",
        options: ["20%", "25%", "30%", "35%"],
        answer: 1,
        explanation:
            "Increase = 250 - 200 = 50. Percentage increase = 50/200 × 100 = 25%."
    },

    {
        concept: "increase",
        question: "Ek item ki price ₹500 se ₹600 ho gayi. Increase percentage kya hai?",
        options: ["10%", "15%", "20%", "25%"],
        answer: 2,
        explanation:
            "Increase = ₹100. Increase% = 100/500 × 100 = 20%."
    },

    {
        concept: "increase",
        question: "Salary ₹20,000 se ₹24,000 ho gayi. Percentage increase kya hai?",
        options: ["10%", "15%", "20%", "25%"],
        answer: 2,
        explanation:
            "Increase = ₹4,000. 4000/20000 × 100 = 20%."
    },

    {
        concept: "increase",
        question: "Ek number 400 se 500 ho gaya. Percentage increase kya hai?",
        options: ["20%", "25%", "30%", "40%"],
        answer: 1,
        explanation:
            "Increase = 100. 100/400 × 100 = 25%."
    },


    /* =====================================================
       DECREASE
       ===================================================== */

    {
        concept: "decrease",
        question: "Ek number 500 se 400 ho gaya. Percentage decrease kitna hai?",
        options: ["10%", "15%", "20%", "25%"],
        answer: 2,
        explanation:
            "Decrease = 100. 100/500 × 100 = 20%."
    },

    {
        concept: "decrease",
        question: "Price ₹1000 se ₹800 ho gayi. Percentage decrease kya hai?",
        options: ["10%", "15%", "20%", "25%"],
        answer: 2,
        explanation:
            "Decrease = ₹200. 200/1000 × 100 = 20%."
    },

    {
        concept: "decrease",
        question: "Ek quantity 800 se 600 ho gayi. Decrease percentage kya hai?",
        options: ["20%", "25%", "30%", "35%"],
        answer: 1,
        explanation:
            "Decrease = 200. 200/800 × 100 = 25%."
    },


    /* =====================================================
       SUCCESSIVE PERCENTAGE
       ===================================================== */

    {
        concept: "successive",
        question: "A number is increased by 20% and then increased by 10%. What is the overall percentage increase?",
        options: ["28%", "30%", "32%", "35%"],
        answer: 2,
        explanation:
            "Net increase = 20 + 10 + (20×10)/100 = 32%."
    },

    {
        concept: "successive",
        question: "A price is increased by 10% and then by 20%. Find the total percentage increase.",
        options: ["28%", "30%", "32%", "35%"],
        answer: 2,
        explanation:
            "Net increase = 10 + 20 + (10×20)/100 = 32%."
    },

    {
        concept: "successive",
        question: "A number is decreased by 20% and then decreased by 10%. What is the total percentage decrease?",
        options: ["28%", "30%", "32%", "25%"],
        answer: 0,
        explanation:
            "Net decrease = 20 + 10 - (20×10)/100 = 28%."
    },

    {
        concept: "successive",
        question: "A number is increased by 25% and then decreased by 20%. Find the net change.",
        options: ["5% increase", "5% decrease", "No change", "10% increase"],
        answer: 2,
        explanation:
            "100 → 125 → 100. Therefore there is no net change."
    },

    {
        concept: "successive",
        question: "A number is increased by 30% and then decreased by 30%. What is the net percentage change?",
        options: ["0%", "9% decrease", "9% increase", "6% decrease"],
        answer: 1,
        explanation:
            "100 → 130 → 91. Therefore net decrease = 9%."
    },

    {
        concept: "successive",
        question: "A value is increased by 40% and then decreased by 25%. What is the net change?",
        options: ["5% increase", "5% decrease", "10% increase", "No change"],
        answer: 0,
        explanation:
            "100 → 140 → 105. Therefore net increase = 5%."
    },

    {
        concept: "successive",
        question: "A number is decreased by 25% and then increased by 25%. What is the net percentage change?",
        options: ["0%", "6.25% decrease", "6.25% increase", "5% decrease"],
        answer: 1,
        explanation:
            "100 → 75 → 93.75. Therefore net decrease = 6.25%."
    },

    {
        concept: "successive",
        question: "A number is increased by 50% and then decreased by 40%. Find the net percentage change.",
        options: ["10% increase", "10% decrease", "20% increase", "No change"],
        answer: 1,
        explanation:
            "100 → 150 → 90. Therefore net decrease = 10%."
    },

    {
        concept: "successive",
        question: "A number is increased by 60% and then decreased by 50%. What is the net percentage change?",
        options: ["10% increase", "10% decrease", "20% increase", "20% decrease"],
        answer: 3,
        explanation:
            "100 → 160 → 80. Therefore net decrease = 20%."
    },

    {
        concept: "successive",
        question: "A value is increased by 20%, decreased by 10% and again increased by 20%. Find the net percentage change.",
        options: ["29.6% increase", "30% increase", "25% increase", "20% increase"],
        answer: 0,
        explanation:
            "100 → 120 → 108 → 129.6. Therefore net increase = 29.6%."
    },


    /* =====================================================
       PERCENTAGE COMPARISON
       ===================================================== */

    {
        concept: "comparison",
        question: "A = 80 और B = 100 है। A, B से कितने प्रतिशत कम है?",
        options: ["10%", "20%", "25%", "30%"],
        answer: 1,
        explanation:
            "Difference = 20. Base = 100. Percentage = 20/100 × 100 = 20%."
    },

    {
        concept: "comparison",
        question: "A = 120 और B = 100 है। A, B से कितने प्रतिशत अधिक है?",
        options: ["10%", "15%", "20%", "25%"],
        answer: 2,
        explanation:
            "Difference = 20. Base = 100. Percentage = 20%."
    },

    {
        concept: "comparison",
        question: "50, 200 का कितने प्रतिशत है?",
        options: ["20%", "25%", "30%", "40%"],
        answer: 1,
        explanation:
            "50/200 × 100 = 25%."
    },

    {
        concept: "comparison",
        question: "72, 90 से कितने प्रतिशत कम है?",
        options: ["15%", "20%", "25%", "30%"],
        answer: 1,
        explanation:
            "Difference = 18. 18/90 × 100 = 20%."
    },

    {
        concept: "comparison",
        question: "150, 120 से कितने प्रतिशत अधिक है?",
        options: ["20%", "25%", "30%", "35%"],
        answer: 1,
        explanation:
            "Difference = 30. 30/120 × 100 = 25%."
    },


    /* =====================================================
       PRICE
       ===================================================== */

    {
        concept: "price",
        question: "The price of a book is ₹500. If its price increases by 20%, what will be the new price?",
        options: ["₹550", "₹580", "₹600", "₹620"],
        answer: 2,
        explanation:
            "20% of ₹500 = ₹100. New price = ₹500 + ₹100 = ₹600."
    },

    {
        concept: "price",
        question: "The price of a shirt is ₹800. It is decreased by 15%. Find the new price.",
        options: ["₹680", "₹700", "₹720", "₹750"],
        answer: 0,
        explanation:
            "15% of ₹800 = ₹120. New price = ₹800 - ₹120 = ₹680."
    },

    {
        concept: "price",
        question: "The price of an item increases from ₹400 to ₹500. Find the percentage increase.",
        options: ["20%", "25%", "30%", "35%"],
        answer: 1,
        explanation:
            "Increase = ₹100. Percentage increase = 100/400 × 100 = 25%."
    },

    {
        concept: "price",
        question: "The price of an article decreases from ₹1000 to ₹850. Find the percentage decrease.",
        options: ["10%", "12%", "15%", "20%"],
        answer: 2,
        explanation:
            "Decrease = ₹150. 150/1000 × 100 = 15%."
    },

    {
        concept: "price",
        question: "A commodity's price is increased by 25%. By what percentage should the increased price be reduced to get the original price?",
        options: ["20%", "25%", "30%", "15%"],
        answer: 0,
        explanation:
            "Original = 100. Increased price = 125. Required decrease = 25/125 × 100 = 20%."
    },

    {
        concept: "price",
        question: "The price of an article is increased by 40%. By what percentage should it be decreased to restore the original price?",
        options: ["25%", "28.57%", "30%", "40%"],
        answer: 1,
        explanation:
            "Original = 100. New price = 140. Required decrease = 40/140 × 100 = 28.57%."
    },


    /* =====================================================
       POPULATION
       ===================================================== */

    {
        concept: "population",
        question: "The population of a town is 20,000. If it increases by 10%, what will be the new population?",
        options: ["21,000", "22,000", "23,000", "24,000"],
        answer: 1,
        explanation:
            "10% of 20,000 = 2,000. New population = 22,000."
    },

    {
        concept: "population",
        question: "A city's population is 50,000. It increases by 20% in one year. Find the population after one year.",
        options: ["55,000", "60,000", "65,000", "70,000"],
        answer: 1,
        explanation:
            "20% of 50,000 = 10,000. New population = 60,000."
    },

    {
        concept: "population",
        question: "A town has a population of 80,000. It decreases by 5%. What is the new population?",
        options: ["74,000", "75,000", "76,000", "78,000"],
        answer: 2,
        explanation:
            "5% of 80,000 = 4,000. New population = 76,000."
    },

    {
        concept: "population",
        question: "A population increases by 10% every year. If the current population is 10,000, what will it be after two years?",
        options: ["12,000", "12,100", "12,200", "11,000"],
        answer: 1,
        explanation:
            "After 1st year = 10,000 × 110/100 = 11,000. After 2nd year = 11,000 × 110/100 = 12,100."
    },


    /* =====================================================
       SALARY
       ===================================================== */

    {
        concept: "salary",
        question: "A person's salary is ₹20,000. If it is increased by 10%, what is the new salary?",
        options: ["₹21,000", "₹22,000", "₹23,000", "₹24,000"],
        answer: 1,
        explanation:
            "10% of ₹20,000 = ₹2,000. New salary = ₹22,000."
    },

    {
        concept: "salary",
        question: "A salary is increased from ₹25,000 to ₹30,000. Find the percentage increase.",
        options: ["15%", "20%", "25%", "30%"],
        answer: 1,
        explanation:
            "Increase = ₹5,000. 5,000/25,000 × 100 = 20%."
    },

    {
        concept: "salary",
        question: "A salary of ₹40,000 is reduced by 15%. Find the new salary.",
        options: ["₹32,000", "₹34,000", "₹36,000", "₹38,000"],
        answer: 1,
        explanation:
            "15% of ₹40,000 = ₹6,000. New salary = ₹34,000."
    },

    {
        concept: "salary",
        question: "A person's salary is increased by 20% and then decreased by 20%. What is the net change?",
        options: ["No change", "4% decrease", "4% increase", "2% decrease"],
        answer: 1,
        explanation:
            "100 → 120 → 96. Therefore net decrease = 4%."
    },


    /* =====================================================
       EXPENDITURE / CONSUMPTION
       ===================================================== */

    {
        concept: "expenditure",
        question: "किसी वस्तु की कीमत 20% बढ़ जाती है। खर्च समान रखने के लिए खपत कितने प्रतिशत घटानी होगी?",
        options: ["15%", "16⅔%", "20%", "25%"],
        answer: 1,
        explanation:
            "Required decrease = 20/120 × 100 = 16⅔%."
    },

    {
        concept: "expenditure",
        question: "किसी वस्तु की कीमत 25% बढ़ गई। खर्च समान रखने के लिए खपत कितने प्रतिशत घटानी होगी?",
        options: ["15%", "20%", "25%", "30%"],
        answer: 1,
        explanation:
            "Required decrease = 25/125 × 100 = 20%."
    },

    {
        concept: "expenditure",
        question: "किसी वस्तु की कीमत 10% घटती है। समान खर्च में खपत कितने प्रतिशत बढ़ सकती है?",
        options: ["10%", "11 1/9%", "12%", "15%"],
        answer: 1,
        explanation:
            "Required increase = 10/90 × 100 = 11 1/9%."
    },

    {
        concept: "expenditure",
        question: "पेट्रोल की कीमत 25% बढ़ गई। खर्च समान रखने के लिए खपत कितनी कम करनी होगी?",
        options: ["15%", "20%", "25%", "30%"],
        answer: 1,
        explanation:
            "Required decrease = 25/125 × 100 = 20%."
    }
];


/* =========================================================
   4. STATE
   ========================================================= */

let currentQuestion = 0;
let score = 0;
let attempted = 0;

let selectedAnswers =
    new Array(percentageQuestions.length).fill(null);

let questionChecked =
    new Array(percentageQuestions.length).fill(false);


/* =========================================================
   5. SAFE ELEMENT FINDER
   ========================================================= */

function findElement(...ids) {

    for (const id of ids) {

        const element =
            document.getElementById(id);

        if (element) {
            return element;
        }
    }

    return null;
}


/* =========================================================
   6. GET HTML ELEMENTS
   ========================================================= */

const conceptTitle =
    findElement(
        "conceptTitle",
        "topicTitle"
    );

const conceptHindi =
    findElement(
        "conceptHindi",
        "hindiExplanation"
    );

const conceptEnglish =
    findElement(
        "conceptEnglish",
        "englishExplanation"
    );

const conceptFormula =
    findElement(
        "conceptFormula",
        "formula"
    );

const conceptExample =
    findElement(
        "conceptExample",
        "example"
    );

const questionNumber =
    findElement(
        "questionNumber",
        "currentQuestion"
    );

const questionText =
    findElement(
        "questionText",
        "question"
    );

const optionsContainer =
    findElement(
        "optionsContainer",
        "options"
    );

const explanationBox =
    findElement(
        "explanationBox",
        "explanation"
    );

const scoreElement =
    findElement(
        "score",
        "quizScore"
    );

const progressElement =
    findElement(
        "progress",
        "progressText"
    );

const nextButton =
    findElement(
        "nextQuestion",
        "nextBtn"
    );

const previousButton =
    findElement(
        "previousQuestion",
        "prevBtn"
    );

const checkButton =
    findElement(
        "checkAnswer",
        "submitAnswer"
    );

const palette =
    findElement(
        "questionPalette",
        "palette"
    );


/* =========================================================
   7. SHOW CONCEPT
   ========================================================= */

function showConcept(conceptId) {

    const concept =
        percentageConcepts.find(
            item =>
                item.id === conceptId
        );

    if (!concept) {
        return;
    }

    if (conceptTitle) {
        conceptTitle.textContent =
            concept.title;
    }

    if (conceptHindi) {
        conceptHindi.textContent =
            concept.hindi;
    }

    if (conceptEnglish) {
        conceptEnglish.textContent =
            concept.english;
    }

    if (conceptFormula) {
        conceptFormula.textContent =
            concept.formula;
    }

    if (conceptExample) {
        conceptExample.textContent =
            concept.example;
    }
}


/* =========================================================
   8. LOAD QUESTION
   ========================================================= */

function loadQuestion(index) {

    if (
        index < 0 ||
        index >= percentageQuestions.length
    ) {
        return;
    }

    currentQuestion = index;

    const question =
        percentageQuestions[index];

    showConcept(
        question.concept
    );


    /* QUESTION NUMBER */

    if (questionNumber) {

        questionNumber.textContent =
            `Question ${index + 1} / ${percentageQuestions.length}`;

    }


    /* QUESTION */

    if (questionText) {

        questionText.textContent =
            question.question;

    }


    /* PROGRESS */

    if (progressElement) {

        const progress =
            ((index + 1) /
                percentageQuestions.length) *
            100;

        progressElement.textContent =
            `${Math.round(progress)}% Complete`;

    }


    /* CLEAR OPTIONS */

    if (optionsContainer) {

        optionsContainer.innerHTML = "";

    }


    /* CREATE OPTIONS */

    question.options.forEach(
        (option, optionIndex) => {

            const optionLabel =
                document.createElement("label");

            optionLabel.className =
                "quiz-option";


            optionLabel.innerHTML = `

                <input
                    type="radio"
                    name="percentageAnswer"
                    value="${optionIndex}"
                >

                <span class="option-letter">
                    ${String.fromCharCode(
                        65 + optionIndex
                    )}
                </span>

                <span class="option-content">
                    ${option}
                </span>

            `;


            const radio =
                optionLabel.querySelector(
                    "input"
                );


            if (
                selectedAnswers[index] ===
                optionIndex
            ) {

                radio.checked = true;

                optionLabel.classList.add(
                    "selected"
                );

            }


            radio.addEventListener(
                "change",
                () => {

                    if (
                        questionChecked[index]
                    ) {
                        return;
                    }

                    selectedAnswers[index] =
                        optionIndex;

                    clearOptionStyles();

                    optionLabel.classList.add(
                        "selected"
                    );

                    updatePalette();

                }
            );


            optionsContainer.appendChild(
                optionLabel
            );

        }
    );


    /* SHOW OLD RESULT IF ALREADY CHECKED */

    if (
        questionChecked[index]
    ) {

        const optionElements =
            optionsContainer.querySelectorAll(
                ".quiz-option"
            );

        optionElements.forEach(
            (option, optionIndex) => {

                if (
                    optionIndex ===
                    question.answer
                ) {

                    option.classList.add(
                        "correct"
                    );

                }

                if (
                    optionIndex ===
                    selectedAnswers[index] &&
                    selectedAnswers[index] !==
                    question.answer
                ) {

                    option.classList.add(
                        "wrong"
                    );

                }

            }
        );

        showExplanation(
            question.explanation,
            true
        );

    }

    else {

        clearExplanation();

    }


    updateButtons();

    updatePalette();
}


/* =========================================================
   9. CLEAR OPTION STYLES
   ========================================================= */

function clearOptionStyles() {

    if (!optionsContainer) {
        return;
    }

    const options =
        optionsContainer.querySelectorAll(
            ".quiz-option"
        );

    options.forEach(
        option => {

            option.classList.remove(
                "selected",
                "correct",
                "wrong"
            );

        }
    );
}


/* =========================================================
   10. CHECK ANSWER
   ========================================================= */

function checkAnswer() {

    const question =
        percentageQuestions[currentQuestion];

    const selected =
        selectedAnswers[currentQuestion];


    if (selected === null) {

        alert(
            "Please select an answer first."
        );

        return;
    }


    if (
        questionChecked[currentQuestion]
    ) {

        return;

    }


    questionChecked[currentQuestion] =
        true;

    attempted++;


    const optionElements =
        optionsContainer.querySelectorAll(
            ".quiz-option"
        );


    optionElements.forEach(
        (option, index) => {

            if (
                index === question.answer
            ) {

                option.classList.add(
                    "correct"
                );

            }


            if (
                index === selected &&
                selected !== question.answer
            ) {

                option.classList.add(
                    "wrong"
                );

            }

        }
    );


    /* SCORE */

    if (
        selected === question.answer
    ) {

        score++;

        showFeedback(
            "Correct! 🎉",
            true
        );

    }

    else {

        showFeedback(
            "Incorrect ❌",
            false
        );

    }


    /* EXPLANATION */

    showExplanation(
        question.explanation
    );


    updateScore();

    updateButtons();

    updatePalette();
}


/* =========================================================
   11. FEEDBACK
   ========================================================= */

function showFeedback(
    message,
    correct
) {

    if (!explanationBox) {
        return;
    }


    const feedback =
        document.createElement("div");

    feedback.className =
        correct
            ? "answer-feedback correct-feedback"
            : "answer-feedback wrong-feedback";

    feedback.textContent =
        message;


    explanationBox.prepend(
        feedback
    );
}


/* =========================================================
   12. SHOW EXPLANATION
   ========================================================= */

function showExplanation(
    text,
    alreadyChecked = false
) {

    if (!explanationBox) {
        return;
    }


    explanationBox.style.display =
        "block";


    if (
        alreadyChecked &&
        explanationBox.children.length > 0
    ) {

        return;

    }


    const explanationText =
        document.createElement("p");

    explanationText.className =
        "solution-text";


    explanationText.innerHTML = `
        <strong>Solution / Explanation</strong>
        <br><br>
        ${text}
    `;


    explanationBox.appendChild(
        explanationText
    );
}


/* =========================================================
   13. CLEAR EXPLANATION
   ========================================================= */

function clearExplanation() {

    if (!explanationBox) {
        return;
    }

    explanationBox.innerHTML = "";

    explanationBox.style.display =
        "none";
}


/* =========================================================
   14. UPDATE SCORE
   ========================================================= */

function updateScore() {

    if (scoreElement) {

        scoreElement.textContent =
            `${score} / ${attempted}`;

    }
}


/* =========================================================
   15. BUTTON STATES
   ========================================================= */

function updateButtons() {

    if (previousButton) {

        previousButton.disabled =
            currentQuestion === 0;

    }


    if (nextButton) {

        if (
            currentQuestion ===
            percentageQuestions.length - 1
        ) {

            nextButton.textContent =
                "Finish Quiz ✓";

        }

        else {

            nextButton.textContent =
                "Next Question →";

        }

    }


    if (checkButton) {

        if (
            questionChecked[currentQuestion]
        ) {

            checkButton.disabled =
                true;

            checkButton.textContent =
                "Answer Checked ✓";

        }

        else {

            checkButton.disabled =
                false;

            checkButton.textContent =
                "Check Answer";

        }

    }
}


/* =========================================================
   16. QUESTION PALETTE
   ========================================================= */

function createPalette() {

    if (!palette) {
        return;
    }


    palette.innerHTML = "";


    percentageQuestions.forEach(
        (question, index) => {

            const button =
                document.createElement("button");

            button.type =
                "button";

            button.textContent =
                index + 1;

            button.className =
                "palette-btn";


            button.addEventListener(
                "click",
                () => {

                    loadQuestion(index);

                }
            );


            palette.appendChild(
                button
            );

        }
    );


    updatePalette();
}


/* =========================================================
   17. UPDATE PALETTE
   ========================================================= */

function updatePalette() {

    if (!palette) {
        return;
    }


    const buttons =
        palette.querySelectorAll(
            ".palette-btn"
        );


    buttons.forEach(
        (button, index) => {

            button.classList.remove(
                "current",
                "answered",
                "correct",
                "wrong"
            );


            if (
                index === currentQuestion
            ) {

                button.classList.add(
                    "current"
                );

            }


            if (
                selectedAnswers[index] !==
                null
            ) {

                button.classList.add(
                    "answered"
                );

            }


            if (
                questionChecked[index]
            ) {

                if (
                    selectedAnswers[index] ===
                    percentageQuestions[index].answer
                ) {

                    button.classList.add(
                        "correct"
                    );

                }

                else {

                    button.classList.add(
                        "wrong"
                    );

                }

            }

        }
    );
}


/* =========================================================
   18. NEXT QUESTION
   ========================================================= */

if (nextButton) {

    nextButton.addEventListener(
        "click",
        () => {

            if (
                currentQuestion <
                percentageQuestions.length - 1
            ) {

                loadQuestion(
                    currentQuestion + 1
                );

            }

            else {

                finishQuiz();

            }

        }
    );
}


/* =========================================================
   19. PREVIOUS QUESTION
   ========================================================= */

if (previousButton) {

    previousButton.addEventListener(
        "click",
        () => {

            if (
                currentQuestion > 0
            ) {

                loadQuestion(
                    currentQuestion - 1
                );

            }

        }
    );
}


/* =========================================================
   20. CHECK BUTTON
   ========================================================= */

if (checkButton) {

    checkButton.addEventListener(
        "click",
        checkAnswer
    );
}


/* =========================================================
   21. FINISH QUIZ
   ========================================================= */

function finishQuiz() {

    const total =
        percentageQuestions.length;

    const unanswered =
        total - attempted;

    const wrong =
        attempted - score;

    const percentage =
        total > 0
            ? ((score / total) * 100).toFixed(1)
            : "0.0";


    let message = "";

    message +=
        "🎯 SSC Percentage Quiz Completed!\n\n";

    message +=
        `Total Questions: ${total}\n`;

    message +=
        `Attempted: ${attempted}\n`;

    message +=
        `Correct: ${score}\n`;

    message +=
        `Wrong: ${wrong}\n`;

    message +=
        `Not Attempted: ${unanswered}\n`;

    message +=
        `Accuracy: ${percentage}%`;


    alert(message);
}


/* =========================================================
   22. CONCEPT MENU
   ========================================================= */

function createConceptMenu() {

    const menu =
        findElement(
            "conceptMenu",
            "topicMenu",
            "percentageTopics"
        );


    if (!menu) {
        return;
    }


    menu.innerHTML = "";


    percentageConcepts.forEach(
        concept => {

            const button =
                document.createElement("button");

            button.type =
                "button";

            button.className =
                "concept-menu-btn";

            button.textContent =
                concept.shortTitle;


            button.addEventListener(
                "click",
                () => {

                    const firstQuestion =
                        percentageQuestions.findIndex(
                            q =>
                                q.concept ===
                                concept.id
                        );


                    if (
                        firstQuestion !== -1
                    ) {

                        loadQuestion(
                            firstQuestion
                        );

                    }

                    else {

                        showConcept(
                            concept.id
                        );

                    }

                }
            );


            menu.appendChild(
                button
            );

        }
    );
}


/* =========================================================
   23. BASIC PERCENTAGE TABLE
   ========================================================= */

function createPercentageTable() {

    const table =
        findElement(
            "percentageTable",
            "valuesTable"
        );


    if (!table) {
        return;
    }


    table.innerHTML = "";


    percentageValues.forEach(
        item => {

            const row =
                document.createElement("tr");


            row.innerHTML = `

                <td>${item.fraction}</td>

                <td>${item.decimal}</td>

                <td>
                    <strong>
                        ${item.percentage}
                    </strong>
                </td>

            `;


            table.appendChild(
                row
            );

        }
    );
}


/* =========================================================
   24. INITIALIZE
   ========================================================= */

function initializePercentagePage() {

    console.log(
        "SSC Percentage Learning System Started"
    );

    console.log(
        "Total SSC Questions:",
        percentageQuestions.length
    );

    console.log(
        "Total Concepts:",
        percentageConcepts.length
    );


    createConceptMenu();

    createPercentageTable();

    createPalette();

    loadQuestion(0);

    updateScore();
}


/* =========================================================
   25. START
   ========================================================= */

if (
    document.readyState ===
    "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        initializePercentagePage
    );

}

else {

    initializePercentagePage();

}


/* =========================================================
   26. DEBUG
   ========================================================= */

console.log(
    "SSC Percentage JS Loaded Successfully"
);

console.log(
    "SSC Concepts:",
    percentageConcepts.length
);

console.log(
    "SSC Questions:",
    percentageQuestions.length
);
/* =========================================================
SSC PERCENTAGE QUESTION BANK — PART 4
100 NEW SSC QUESTIONS
CGL / CHSL / MTS / CPO
========================================================= */

const percentagePart4 = [

/* =====================================================
1-20 : BASIC PERCENTAGE
===================================================== */

{
    concept: "Basic Percentage",
    level: "Basic",
    question: "240 ka 25% kitna hai?",
    options: ["50", "60", "70", "80"],
    answer: 1,
    explanation: "25% = 25/100. 240 × 25/100 = 60. Answer = 60."
},

{
    concept: "Basic Percentage",
    level: "Basic",
    question: "360 ka 15% kitna hai?",
    options: ["45", "54", "60", "64"],
    answer: 1,
    explanation: "360 × 15/100 = 54. Answer = 54."
},

{
    concept: "Basic Percentage",
    level: "Basic",
    question: "480 ka 12.5% kitna hai?",
    options: ["50", "60", "70", "80"],
    answer: 1,
    explanation: "12.5% = 1/8. 480 ÷ 8 = 60."
},

{
    concept: "Basic Percentage",
    level: "Basic",
    question: "640 ka 37.5% kitna hai?",
    options: ["220", "230", "240", "250"],
    answer: 2,
    explanation: "37.5% = 3/8. 640 × 3/8 = 240."
},

{
    concept: "Basic Percentage",
    level: "Basic",
    question: "750 ka 16% kitna hai?",
    options: ["110", "120", "125", "130"],
    answer: 1,
    explanation: "750 × 16/100 = 120."
},

{
    concept: "Basic Percentage",
    level: "Basic",
    question: "900 ka 22% kitna hai?",
    options: ["180", "198", "200", "220"],
    answer: 1,
    explanation: "900 × 22/100 = 198."
},

{
    concept: "Basic Percentage",
    level: "Basic",
    question: "1250 ka 8% kitna hai?",
    options: ["80", "90", "100", "110"],
    answer: 2,
    explanation: "1250 × 8/100 = 100."
},

{
    concept: "Basic Percentage",
    level: "Basic",
    question: "2000 ka 7.5% kitna hai?",
    options: ["125", "150", "175", "200"],
    answer: 1,
    explanation: "2000 × 7.5/100 = 150."
},

{
    concept: "Basic Percentage",
    level: "Basic",
    question: "320 ka 62.5% kitna hai?",
    options: ["180", "190", "200", "210"],
    answer: 2,
    explanation: "62.5% = 5/8. 320 × 5/8 = 200."
},

{
    concept: "Basic Percentage",
    level: "Basic",
    question: "560 ka 35% kitna hai?",
    options: ["186", "196", "206", "216"],
    answer: 1,
    explanation: "560 × 35/100 = 196."
},

{
    concept: "Basic Percentage",
    level: "Basic",
    question: "420 ka 45% kitna hai?",
    options: ["179", "189", "199", "209"],
    answer: 1,
    explanation: "420 × 45/100 = 189."
},

{
    concept: "Basic Percentage",
    level: "Basic",
    question: "840 ka 25% kitna hai?",
    options: ["200", "210", "220", "230"],
    answer: 1,
    explanation: "25% = 1/4. 840 ÷ 4 = 210."
},

{
    concept: "Basic Percentage",
    level: "Basic",
    question: "1500 ka 18% kitna hai?",
    options: ["250", "260", "270", "280"],
    answer: 2,
    explanation: "1500 × 18/100 = 270."
},

{
    concept: "Basic Percentage",
    level: "Basic",
    question: "720 ka 12.5% kitna hai?",
    options: ["80", "90", "100", "110"],
    answer: 1,
    explanation: "12.5% = 1/8. 720 ÷ 8 = 90."
},

{
    concept: "Basic Percentage",
    level: "Basic",
    question: "640 ka 15% kitna hai?",
    options: ["86", "96", "106", "116"],
    answer: 1,
    explanation: "640 × 15/100 = 96."
},

{
    concept: "Basic Percentage",
    level: "Basic",
    question: "2500 ka 4% kitna hai?",
    options: ["80", "90", "100", "120"],
    answer: 2,
    explanation: "2500 × 4/100 = 100."
},

{
    concept: "Basic Percentage",
    level: "Basic",
    question: "900 ka 35% kitna hai?",
    options: ["305", "315", "325", "335"],
    answer: 1,
    explanation: "900 × 35/100 = 315."
},

{
    concept: "Basic Percentage",
    level: "Basic",
    question: "480 ka 75% kitna hai?",
    options: ["340", "350", "360", "370"],
    answer: 2,
    explanation: "75% = 3/4. 480 × 3/4 = 360."
},

{
    concept: "Basic Percentage",
    level: "Basic",
    question: "1600 ka 6.25% kitna hai?",
    options: ["90", "100", "110", "120"],
    answer: 1,
    explanation: "6.25% = 1/16. 1600 ÷ 16 = 100."
},

{
    concept: "Basic Percentage",
    level: "Basic",
    question: "200 ka 42% kitna hai?",
    options: ["74", "84", "94", "104"],
    answer: 1,
    explanation: "200 × 42/100 = 84."
},


/* =====================================================
21-35 : FRACTION / DECIMAL / PERCENTAGE
===================================================== */

{
    concept: "Fraction Percentage",
    level: "Basic",
    question: "2/5 ko percentage mein convert karo.",
    options: ["20%", "30%", "40%", "50%"],
    answer: 2,
    explanation: "2/5 × 100 = 40%."
},

{
    concept: "Fraction Percentage",
    level: "Basic",
    question: "7/10 ko percentage mein convert karo.",
    options: ["60%", "70%", "75%", "80%"],
    answer: 1,
    explanation: "7/10 × 100 = 70%."
},

{
    concept: "Fraction Percentage",
    level: "Basic",
    question: "3/8 kitne percent ke barabar hai?",
    options: ["35%", "37.5%", "40%", "42.5%"],
    answer: 1,
    explanation: "3/8 × 100 = 37.5%."
},

{
    concept: "Fraction Percentage",
    level: "Basic",
    question: "7/20 ko percentage mein convert karo.",
    options: ["30%", "35%", "40%", "45%"],
    answer: 1,
    explanation: "7/20 × 100 = 35%."
},

{
    concept: "Fraction Percentage",
    level: "Basic",
    question: "9/25 kitne percent ke barabar hai?",
    options: ["32%", "34%", "36%", "38%"],
    answer: 2,
    explanation: "9/25 × 100 = 36%."
},

{
    concept: "Fraction Percentage",
    level: "Basic",
    question: "0.125 ko percentage mein convert karo.",
    options: ["10%", "12.5%", "15%", "20%"],
    answer: 1,
    explanation: "0.125 × 100 = 12.5%."
},

{
    concept: "Fraction Percentage",
    level: "Basic",
    question: "0.375 ko percentage mein convert karo.",
    options: ["32.5%", "35%", "37.5%", "40%"],
    answer: 2,
    explanation: "0.375 × 100 = 37.5%."
},

{
    concept: "Fraction Percentage",
    level: "Basic",
    question: "0.625 ko percentage mein convert karo.",
    options: ["50%", "60%", "62.5%", "65%"],
    answer: 2,
    explanation: "0.625 × 100 = 62.5%."
},

{
    concept: "Fraction Percentage",
    level: "Basic",
    question: "40% ko simplest fraction mein convert karo.",
    options: ["1/4", "2/5", "3/5", "4/5"],
    answer: 1,
    explanation: "40/100 = 2/5."
},

{
    concept: "Fraction Percentage",
    level: "Basic",
    question: "12.5% ko fraction mein convert karo.",
    options: ["1/6", "1/8", "1/10", "1/12"],
    answer: 1,
    explanation: "12.5% = 12.5/100 = 1/8."
},

{
    concept: "Fraction Percentage",
    level: "Basic",
    question: "37.5% ka simplest fraction kya hai?",
    options: ["1/4", "3/8", "2/5", "5/8"],
    answer: 1,
    explanation: "37.5% = 37.5/100 = 3/8."
},

{
    concept: "Fraction Percentage",
    level: "Basic",
    question: "6.25% ko fraction mein convert karo.",
    options: ["1/12", "1/16", "1/20", "1/25"],
    answer: 1,
    explanation: "6.25% = 6.25/100 = 1/16."
},

{
    concept: "Fraction Percentage",
    level: "Moderate",
    question: "5/8 ka decimal form kya hai?",
    options: ["0.525", "0.625", "0.725", "0.825"],
    answer: 1,
    explanation: "5 ÷ 8 = 0.625."
},

{
    concept: "Fraction Percentage",
    level: "Moderate",
    question: "0.45 ko simplest fraction mein convert karo.",
    options: ["9/20", "4/9", "5/11", "3/7"],
    answer: 0,
    explanation: "0.45 = 45/100 = 9/20."
},

{
    concept: "Fraction Percentage",
    level: "Moderate",
    question: "62.5% ko fraction mein convert karo.",
    options: ["3/5", "5/8", "2/3", "7/8"],
    answer: 1,
    explanation: "62.5% = 62.5/100 = 5/8."
},


/* =====================================================
36-50 : INCREASE / DECREASE
===================================================== */

{
    concept: "Percentage Increase",
    level: "Basic",
    question: "A number 400 se badhkar 460 ho gaya. Percentage increase kya hai?",
    options: ["10%", "12%", "15%", "20%"],
    answer: 2,
    explanation: "Increase = 60. 60/400 × 100 = 15%."
},

{
    concept: "Percentage Increase",
    level: "Basic",
    question: "Ek number 600 se 720 ho gaya. Percentage increase kya hai?",
    options: ["15%", "20%", "25%", "30%"],
    answer: 1,
    explanation: "Increase = 120. 120/600 × 100 = 20%."
},

{
    concept: "Percentage Increase",
    level: "Basic",
    question: "Price ₹800 se ₹920 ho gayi. Increase percentage kya hai?",
    options: ["12%", "15%", "18%", "20%"],
    answer: 1,
    explanation: "Increase = 120. 120/800 × 100 = 15%."
},

{
    concept: "Percentage Increase",
    level: "Moderate",
    question: "Ek number mein 30% increase karne par 520 milta hai. Original number kya tha?",
    options: ["350", "400", "450", "500"],
    answer: 1,
    explanation: "130% = 520. Original = 520 × 100/130 = 400."
},

{
    concept: "Percentage Increase",
    level: "Moderate",
    question: "Ek number mein 25% increase karne par 750 milta hai. Original number kya tha?",
    options: ["550", "600", "650", "700"],
    answer: 1,
    explanation: "125% = 750. Original = 750 × 100/125 = 600."
},

{
    concept: "Percentage Decrease",
    level: "Basic",
    question: "Ek number 800 se ghatkar 680 ho gaya. Percentage decrease kya hai?",
    options: ["10%", "12%", "15%", "20%"],
    answer: 2,
    explanation: "Decrease = 120. 120/800 × 100 = 15%."
},

{
    concept: "Percentage Decrease",
    level: "Basic",
    question: "Price ₹1200 se ₹1020 ho gayi. Percentage decrease kya hai?",
    options: ["10%", "12%", "15%", "18%"],
    answer: 2,
    explanation: "Decrease = 180. 180/1200 × 100 = 15%."
},

{
    concept: "Percentage Decrease",
    level: "Moderate",
    question: "Ek number 20% kam hokar 640 ho gaya. Original number kya tha?",
    options: ["700", "750", "800", "850"],
    answer: 2,
    explanation: "80% = 640. Original = 640 × 100/80 = 800."
},

{
    concept: "Percentage Decrease",
    level: "Moderate",
    question: "Ek number 25% kam hokar 900 ho gaya. Original number kya tha?",
    options: ["1000", "1100", "1200", "1250"],
    answer: 2,
    explanation: "75% = 900. Original = 900 × 100/75 = 1200."
},

{
    concept: "Percentage Increase",
    level: "Moderate",
    question: "A number is increased by 40%. If the original number is 350, find the new number.",
    options: ["450", "480", "490", "500"],
    answer: 2,
    explanation: "40% of 350 = 140. New number = 350 + 140 = 490."
},

{
    concept: "Percentage Decrease",
    level: "Moderate",
    question: "A number is decreased by 30%. If the original number is 900, find the new number.",
    options: ["600", "630", "650", "700"],
    answer: 1,
    explanation: "30% of 900 = 270. New number = 630."
},

{
    concept: "Percentage Increase",
    level: "Moderate",
    question: "A quantity is increased from 250 to 325. Find the percentage increase.",
    options: ["20%", "25%", "30%", "35%"],
    answer: 2,
    explanation: "Increase = 75. 75/250 × 100 = 30%."
},

{
    concept: "Percentage Decrease",
    level: "Moderate",
    question: "A quantity decreases from 500 to 425. Find the percentage decrease.",
    options: ["10%", "12%", "15%", "20%"],
    answer: 2,
    explanation: "Decrease = 75. 75/500 × 100 = 15%."
},

{
    concept: "Percentage Increase",
    level: "Advanced",
    question: "A number is increased by 50%. By what percentage should the increased number be decreased to get the original number?",
    options: ["25%", "33⅓%", "40%", "50%"],
    answer: 1,
    explanation: "Original = 100, increased = 150. Required decrease = 50/150 × 100 = 33⅓%."
},

{
    concept: "Percentage Increase",
    level: "Advanced",
    question: "A number is increased by 60%. By what percentage should the increased number be decreased to get the original number?",
    options: ["30%", "37.5%", "40%", "45%"],
    answer: 1,
    explanation: "Original = 100, new = 160. Decrease = 60/160 × 100 = 37.5%."
},


/* =====================================================
51-65 : SUCCESSIVE PERCENTAGE
===================================================== */

{
    concept: "Successive Percentage",
    level: "Basic",
    question: "A number is increased by 10% and then by 20%. Find the net increase.",
    options: ["28%", "30%", "32%", "35%"],
    answer: 2,
    explanation: "Net increase = 10 + 20 + (10×20)/100 = 32%."
},

{
    concept: "Successive Percentage",
    level: "Basic",
    question: "A number is decreased by 10% and then by 20%. Find the net decrease.",
    options: ["26%", "28%", "30%", "32%"],
    answer: 1,
    explanation: "Net decrease = 10 + 20 - 2 = 28%."
},

{
    concept: "Successive Percentage",
    level: "Basic",
    question: "A price is increased by 15% and then by 20%. Find the net increase.",
    options: ["35%", "36%", "38%", "40%"],
    answer: 1,
    explanation: "15 + 20 + (15×20)/100 = 38%."
},

{
    concept: "Successive Percentage",
    level: "Basic",
    question: "A price is decreased by 15% and then by 20%. Find the net decrease.",
    options: ["30%", "32%", "35%", "38%"],
    answer: 1,
    explanation: "15 + 20 - 3 = 32%."
},

{
    concept: "Successive Percentage",
    level: "Moderate",
    question: "A number is increased by 20% and then decreased by 10%. Find the net change.",
    options: ["8% increase", "8% decrease", "10% increase", "10% decrease"],
    answer: 0,
    explanation: "100 → 120 → 108. Net increase = 8%."
},

{
    concept: "Successive Percentage",
    level: "Moderate",
    question: "A number is decreased by 20% and then increased by 10%. Find the net change.",
    options: ["12% decrease", "12% increase", "10% decrease", "10% increase"],
    answer: 0,
    explanation: "100 → 80 → 88. Net decrease = 12%."
},

{
    concept: "Successive Percentage",
    level: "Moderate",
    question: "A number is increased by 30% and then decreased by 20%. Find the net change.",
    options: ["4% increase", "4% decrease", "6% increase", "6% decrease"],
    answer: 0,
    explanation: "100 → 130 → 104. Net increase = 4%."
},

{
    concept: "Successive Percentage",
    level: "Moderate",
    question: "A number is decreased by 30% and then increased by 20%. Find the net change.",
    options: ["16% decrease", "16% increase", "10% decrease", "10% increase"],
    answer: 0,
    explanation: "100 → 70 → 84. Net decrease = 16%."
},

{
    concept: "Successive Percentage",
    level: "Moderate",
    question: "A salary is increased by 25% and then by 20%. Find the total increase.",
    options: ["40%", "45%", "50%", "55%"],
    answer: 2,
    explanation: "25 + 20 + 5 = 50%."
},

{
    concept: "Successive Percentage",
    level: "Moderate",
    question: "A salary is decreased by 25% and then by 20%. Find the total decrease.",
    options: ["35%", "40%", "45%", "50%"],
    answer: 1,
    explanation: "25 + 20 - 5 = 40%."
},

{
    concept: "Successive Percentage",
    level: "Advanced",
    question: "A number is increased by 40% and then decreased by 10%. Find the net percentage change.",
    options: ["24% increase", "26% increase", "28% increase", "30% increase"],
    answer: 1,
    explanation: "100 → 140 → 126. Net increase = 26%."
},

{
    concept: "Successive Percentage",
    level: "Advanced",
    question: "A number is decreased by 40% and then increased by 10%. Find the net percentage change.",
    options: ["30% decrease", "32% decrease", "34% decrease", "36% decrease"],
    answer: 2,
    explanation: "100 → 60 → 66. Net decrease = 34%."
},

{
    concept: "Successive Percentage",
    level: "Advanced",
    question: "A value is increased by 50% and then decreased by 20%. Find the net change.",
    options: ["15% increase", "20% increase", "25% increase", "30% increase"],
    answer: 2,
    explanation: "100 → 150 → 120. Net increase = 20%, not 25%. Correct answer should be 20%."
},

{
    concept: "Successive Percentage",
    level: "Advanced",
    question: "A number is decreased by 50% and then increased by 20%. Find the net change.",
    options: ["30% decrease", "35% decrease", "40% decrease", "45% decrease"],
    answer: 2,
    explanation: "100 → 50 → 60. Net decrease = 40%."
},

{
    concept: "Successive Percentage",
    level: "Advanced",
    question: "A number is increased by 20%, decreased by 20%, and again increased by 20%. Find the net change.",
    options: ["12.8% increase", "15.2% increase", "16.8% increase", "20% increase"],
    answer: 0,
    explanation: "100 → 120 → 96 → 115.2. Net increase = 15.2%. Correct answer is 15.2%."
},


/* =====================================================
66-75 : PERCENTAGE COMPARISON
===================================================== */

{
    concept: "Percentage Comparison",
    level: "Basic",
    question: "60 is what percent of 240?",
    options: ["20%", "25%", "30%", "35%"],
    answer: 1,
    explanation: "60/240 × 100 = 25%."
},

{
    concept: "Percentage Comparison",
    level: "Basic",
    question: "80 is what percent of 320?",
    options: ["20%", "25%", "30%", "40%"],
    answer: 1,
    explanation: "80/320 × 100 = 25%."
},

{
    concept: "Percentage Comparison",
    level: "Basic",
    question: "45 is what percent of 180?",
    options: ["20%", "25%", "30%", "35%"],
    answer: 1,
    explanation: "45/180 × 100 = 25%."
},

{
    concept: "Percentage Comparison",
    level: "Moderate",
    question: "A = 72 and B = 90. A is what percent less than B?",
    options: ["15%", "20%", "25%", "30%"],
    answer: 1,
    explanation: "Difference = 18. 18/90 × 100 = 20%."
},

{
    concept: "Percentage Comparison",
    level: "Moderate",
    question: "A = 90 and B = 72. A is what percent more than B?",
    options: ["20%", "25%", "30%", "35%"],
    answer: 1,
    explanation: "Difference = 18. 18/72 × 100 = 25%."
},

{
    concept: "Percentage Comparison",
    level: "Moderate",
    question: "A number is 25% more than 80. Find the number.",
    options: ["90", "95", "100", "105"],
    answer: 2,
    explanation: "25% of 80 = 20. Number = 100."
},

{
    concept: "Percentage Comparison",
    level: "Moderate",
    question: "A number is 20% less than 150. Find the number.",
    options: ["110", "120", "125", "130"],
    answer: 1,
    explanation: "20% of 150 = 30. Number = 120."
},

{
    concept: "Percentage Comparison",
    level: "Advanced",
    question: "A is 20% more than B. B is what percent less than A?",
    options: ["15%", "16⅔%", "18%", "20%"],
    answer: 1,
    explanation: "Let B = 100. A = 120. Difference = 20. 20/120 × 100 = 16⅔%."
},

{
    concept: "Percentage Comparison",
    level: "Advanced",
    question: "A is 25% less than B. B is what percent more than A?",
    options: ["25%", "30%", "33⅓%", "40%"],
    answer: 2,
    explanation: "Let B = 100. A = 75. Difference = 25. 25/75 × 100 = 33⅓%."
},

{
    concept: "Percentage Comparison",
    level: "Advanced",
    question: "A is 40% more than B. B is what percent less than A?",
    options: ["25%", "28.57%", "30%", "35%"],
    answer: 1,
    explanation: "Let B = 100. A = 140. Difference = 40. 40/140 × 100 = 28.57%."
},


/* =====================================================
76-85 : POPULATION
===================================================== */

{
    concept: "Population Percentage",
    level: "Basic",
    question: "A town has population 30,000. It increases by 15%. Find new population.",
    options: ["33,500", "34,000", "34,500", "35,000"],
    answer: 2,
    explanation: "15% of 30,000 = 4,500. New population = 34,500."
},

{
    concept: "Population Percentage",
    level: "Basic",
    question: "A city's population is 40,000. It decreases by 10%. Find new population.",
    options: ["34,000", "36,000", "38,000", "39,000"],
    answer: 1,
    explanation: "10% of 40,000 = 4,000. New population = 36,000."
},

{
    concept: "Population Percentage",
    level: "Moderate",
    question: "A population of 25,000 increases by 12%. Find the new population.",
    options: ["27,000", "28,000", "28,500", "29,000"],
    answer: 1,
    explanation: "12% of 25,000 = 3,000. New population = 28,000."
},

{
    concept: "Population Percentage",
    level: "Moderate",
    question: "A population of 60,000 decreases by 15%. Find the new population.",
    options: ["49,000", "50,000", "51,000", "52,000"],
    answer: 2,
    explanation: "15% of 60,000 = 9,000. New population = 51,000."
},

{
    concept: "Population Percentage",
    level: "Moderate",
    question: "A town's population increases by 10% every year. Current population is 20,000. Find population after two years.",
    options: ["22,000", "24,000", "24,200", "25,000"],
    answer: 2,
    explanation: "20,000 × 110/100 × 110/100 = 24,200."
},

{
    concept: "Population Percentage",
    level: "Advanced",
    question: "A population decreases by 10% every year. If current population is 50,000, find population after two years.",
    options: ["40,000", "40,500", "41,000", "42,000"],
    answer: 1,
    explanation: "50,000 × 90/100 × 90/100 = 40,500."
},

{
    concept: "Population Percentage",
    level: "Advanced",
    question: "A town's population increases by 20% and then by 10%. Find the total percentage increase.",
    options: ["30%", "32%", "34%", "35%"],
    answer: 1,
    explanation: "20 + 10 + 2 = 32%."
},

{
    concept: "Population Percentage",
    level: "Advanced",
    question: "A population decreases by 20% and then increases by 25%. Find the net change.",
    options: ["No change", "5% increase", "5% decrease", "10% decrease"],
    answer: 0,
    explanation: "100 → 80 → 100. Therefore there is no net change."
},

{
    concept: "Population Percentage",
    level: "Moderate",
    question: "A town has population 72,000. If it increases by 25%, what will be the new population?",
    options: ["84,000", "90,000", "96,000", "1,00,000"],
    answer: 1,
    explanation: "25% of 72,000 = 18,000. New population = 90,000."
},

{
    concept: "Population Percentage",
    level: "Moderate",
    question: "A population of 90,000 decreases by 20%. What is the new population?",
    options: ["70,000", "72,000", "75,000", "78,000"],
    answer: 1,
    explanation: "20% of 90,000 = 18,000. New population = 72,000."
},


/* =====================================================
86-93 : SALARY / INCOME
===================================================== */

{
    concept: "Salary Percentage",
    level: "Basic",
    question: "A person's salary is ₹30,000. It is increased by 15%. Find the new salary.",
    options: ["₹33,500", "₹34,000", "₹34,500", "₹35,000"],
    answer: 2,
    explanation: "15% of 30,000 = 4,500. New salary = ₹34,500."
},

{
    concept: "Salary Percentage",
    level: "Basic",
    question: "A person's salary is ₹50,000. It is reduced by 12%. Find the new salary.",
    options: ["₹42,000", "₹44,000", "₹46,000", "₹48,000"],
    answer: 2,
    explanation: "12% of 50,000 = 6,000. New salary = ₹44,000. Correct option should be ₹44,000."
},

{
    concept: "Salary Percentage",
    level: "Moderate",
    question: "Salary increases from ₹24,000 to ₹30,000. Find percentage increase.",
    options: ["20%", "25%", "30%", "35%"],
    answer: 1,
    explanation: "Increase = 6,000. 6,000/24,000 × 100 = 25%."
},

{
    concept: "Salary Percentage",
    level: "Moderate",
    question: "Salary decreases from ₹40,000 to ₹34,000. Find percentage decrease.",
    options: ["10%", "12%", "15%", "20%"],
    answer: 2,
    explanation: "Decrease = 6,000. 6,000/40,000 × 100 = 15%."
},

{
    concept: "Salary Percentage",
    level: "Moderate",
    question: "A salary of ₹25,000 is increased by 20% and then by 10%. Find the final salary.",
    options: ["₹30,000", "₹31,000", "₹32,000", "₹33,000"],
    answer: 1,
    explanation: "25,000 × 1.20 × 1.10 = ₹33,000. Correct option should be ₹33,000."
},

{
    concept: "Salary Percentage",
    level: "Advanced",
    question: "A salary is increased by 25% and then decreased by 20%. What is the net change?",
    options: ["No change", "5% increase", "5% decrease", "10% increase"],
    answer: 0,
    explanation: "100 → 125 → 100. Hence no net change."
},

{
    concept: "Salary Percentage",
    level: "Advanced",
    question: "A salary is increased by 30% and then decreased by 10%. Find the net percentage change.",
    options: ["17% increase", "18% increase", "20% increase", "23% increase"],
    answer: 1,
    explanation: "100 → 130 → 117. Net increase = 17%. Correct option should be 17%."
},

{
    concept: "Salary Percentage",
    level: "Advanced",
    question: "A person's income increases by 20%. If the original income was ₹45,000, find the increase in income.",
    options: ["₹7,000", "₹8,000", "₹9,000", "₹10,000"],
    answer: 2,
    explanation: "20% of ₹45,000 = ₹9,000."
},


/* =====================================================
94-100 : PRICE / EXPENDITURE / CONSUMPTION
===================================================== */

{
    concept: "Price Consumption",
    level: "Moderate",
    question: "The price of sugar increases by 20%. By what percentage should consumption be reduced to keep expenditure unchanged?",
    options: ["15%", "16⅔%", "18%", "20%"],
    answer: 1,
    explanation: "Required decrease = 20/120 × 100 = 16⅔%."
},

{
    concept: "Price Consumption",
    level: "Moderate",
    question: "The price of rice increases by 25%. By what percentage should consumption be reduced to keep expenditure unchanged?",
    options: ["15%", "20%", "25%", "30%"],
    answer: 1,
    explanation: "Required decrease = 25/125 × 100 = 20%."
},

{
    concept: "Price Consumption",
    level: "Moderate",
    question: "The price of an item decreases by 20%. By what percentage can consumption be increased if expenditure remains unchanged?",
    options: ["20%", "25%", "30%", "35%"],
    answer: 1,
    explanation: "Required increase = 20/80 × 100 = 25%."
},

{
    concept: "Price Consumption",
    level: "Advanced",
    question: "The price of petrol increases by 25%. By what percentage should consumption be reduced to keep expenditure unchanged?",
    options: ["15%", "20%", "25%", "30%"],
    answer: 1,
    explanation: "Required decrease = 25/125 × 100 = 20%."
},

{
    concept: "Price Consumption",
    level: "Advanced",
    question: "The price of an article decreases by 25%. By what percentage can consumption be increased to keep expenditure unchanged?",
    options: ["25%", "33⅓%", "40%", "50%"],
    answer: 1,
    explanation: "Required increase = 25/75 × 100 = 33⅓%."
},

{
    concept: "Price Consumption",
    level: "Advanced",
    question: "The price of a commodity increases by 40%. By what percentage should consumption be reduced to keep expenditure unchanged?",
    options: ["25%", "28.57%", "30%", "35%"],
    answer: 1,
    explanation: "Required decrease = 40/140 × 100 = 28.57%."
},

{
    concept: "Price Consumption",
    level: "Advanced",
    question: "The price of a commodity decreases by 10%. By what percentage can consumption be increased without changing expenditure?",
    options: ["10%", "11⅑%", "12%", "15%"],
    answer: 1,
    explanation: "Required increase = 10/90 × 100 = 11⅑%."
}

];


/* =========================================================
IMPORTANT CORRECTIONS IN PART 4
========================================================= */

/*
Question 53:
50% increase followed by 20% decrease
100 → 150 → 120
Correct answer = 20% increase.
*/

/*
Question 55:
20% increase → 20% decrease → 20% increase
100 → 120 → 96 → 115.2
Correct answer = 15.2% increase.
*/


/* =========================================================
ADD PART 4 TO MAIN QUESTION BANK
========================================================= */

if (typeof percentageQuestions !== "undefined") {

    percentageQuestions.push(...percentagePart4);

} else {

    window.percentageQuestions = percentagePart4;

}


/* =========================================================
UPDATE QUESTION COUNT
========================================================= */

if (typeof updateQuestionCount === "function") {

    updateQuestionCount();

}


/* =========================================================
DEBUG
========================================================= */

console.log(
    "Percentage Part 4 Loaded:",
    percentagePart4.length,
    "Questions"
);

console.log(
    "Total Percentage Questions:",
    window.percentageQuestions
        ? window.percentageQuestions.length
        : 0
);