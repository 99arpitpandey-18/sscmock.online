/* =========================================================
   SSC CGL MOCK TEST
   RESULT MODULE
   ========================================================= */

(function () {
    "use strict";

    window.CGLResult = {

        calculate: function (questions, answers, marked, timeTaken) {

            let correct = 0;
            let wrong = 0;
            let skipped = 0;

            questions.forEach((question, index) => {

                const selected = answers[index];

                if (selected === undefined || selected === null) {
                    skipped++;
                    return;
                }

                if (selected === question.answer) {
                    correct++;
                } else {
                    wrong++;
                }
            });

            const total = questions.length;

            // SSC CGL Tier-I style scoring
            const marksPerCorrect = 2;
            const negativePerWrong = 0.50;

            const obtainedMarks =
                (correct * marksPerCorrect) -
                (wrong * negativePerWrong);

            const maximumMarks = total * marksPerCorrect;

            const percentage =
                maximumMarks > 0
                    ? ((obtainedMarks / maximumMarks) * 100)
                    : 0;

            return {
                totalQuestions: total,
                correct: correct,
                wrong: wrong,
                skipped: skipped,
                marks: obtainedMarks,
                maximumMarks: maximumMarks,
                percentage: percentage,
                timeTaken: timeTaken || 0
            };
        },

        saveResult: function (result, mockNumber, language) {

            const resultData = {
                mockNumber: mockNumber,
                language: language,
                result: result,
                date: new Date().toISOString()
            };

            localStorage.setItem(
                "cglMockResult_" + mockNumber,
                JSON.stringify(resultData)
            );
        },

        getResult: function (mockNumber) {

            const data = localStorage.getItem(
                "cglMockResult_" + mockNumber
            );

            if (!data) {
                return null;
            }

            try {
                return JSON.parse(data);
            } catch (error) {
                console.error("Result data error:", error);
                return null;
            }
        },

        formatTime: function (seconds) {

            seconds = Number(seconds) || 0;

            const hours = Math.floor(seconds / 3600);

            const minutes =
                Math.floor((seconds % 3600) / 60);

            const remainingSeconds =
                seconds % 60;

            return (
                String(hours).padStart(2, "0") +
                ":" +
                String(minutes).padStart(2, "0") +
                ":" +
                String(remainingSeconds).padStart(2, "0")
            );
        },

        getPerformanceMessage: function (percentage) {

            if (percentage >= 90) {
                return {
                    title: "Outstanding Performance",
                    hindi: "बहुत शानदार प्रदर्शन!"
                };
            }

            if (percentage >= 75) {
                return {
                    title: "Excellent Performance",
                    hindi: "बहुत अच्छा प्रदर्शन!"
                };
            }

            if (percentage >= 60) {
                return {
                    title: "Good Performance",
                    hindi: "अच्छा प्रदर्शन!"
                };
            }

            if (percentage >= 45) {
                return {
                    title: "Average Performance",
                    hindi: "औसत प्रदर्शन!"
                };
            }

            return {
                title: "Needs More Practice",
                hindi: "अधिक अभ्यास की आवश्यकता है!"
            };
        },

        render: function (result, container, language) {

            if (!container || !result) return;

            const performance =
                this.getPerformanceMessage(result.percentage);

            const lang = language || "english";

            const texts = {

                english: {
                    result: "Test Result",
                    correct: "Correct",
                    wrong: "Wrong",
                    skipped: "Not Attempted",
                    score: "Score",
                    percentage: "Percentage",
                    time: "Time Taken",
                    performance: performance.title
                },

                hindi: {
                    result: "परीक्षा परिणाम",
                    correct: "सही",
                    wrong: "गलत",
                    skipped: "प्रयास नहीं किया",
                    score: "स्कोर",
                    percentage: "प्रतिशत",
                    time: "समय",
                    performance: performance.hindi
                }
            };

            const t = texts[lang] || texts.english;

            container.innerHTML = `
                <div class="result-card">

                    <div class="result-header">
                        <h1>${t.result}</h1>
                        <p>${t.performance}</p>
                    </div>

                    <div class="score-box">

                        <div class="score-number">
                            ${result.marks.toFixed(2)}
                        </div>

                        <div class="score-total">
                            / ${result.maximumMarks}
                        </div>

                    </div>

                    <div class="result-grid">

                        <div class="result-item correct">
                            <span class="result-icon">✓</span>
                            <div>
                                <strong>${result.correct}</strong>
                                <small>${t.correct}</small>
                            </div>
                        </div>

                        <div class="result-item wrong">
                            <span class="result-icon">✕</span>
                            <div>
                                <strong>${result.wrong}</strong>
                                <small>${t.wrong}</small>
                            </div>
                        </div>

                        <div class="result-item skipped">
                            <span class="result-icon">—</span>
                            <div>
                                <strong>${result.skipped}</strong>
                                <small>${t.skipped}</small>
                            </div>
                        </div>

                        <div class="result-item percentage">
                            <span class="result-icon">%</span>
                            <div>
                                <strong>
                                    ${result.percentage.toFixed(2)}%
                                </strong>
                                <small>${t.percentage}</small>
                            </div>
                        </div>

                    </div>

                    <div class="time-result">

                        <span>${t.time}</span>

                        <strong>
                            ${this.formatTime(result.timeTaken)}
                        </strong>

                    </div>

                </div>
            `;
        }
    };

})();