// =====================================================
// SSC WEBSITE + MOCK TEST SYSTEM
// =====================================================


// =====================================================
// MOCK TEST DROPDOWN
// =====================================================

const mockBtn = document.getElementById("mockBtn");
const mockMenu = document.getElementById("mockMenu");

if (mockBtn && mockMenu) {

    mockBtn.addEventListener("click", function (event) {

        event.stopPropagation();

        mockMenu.classList.toggle("show");

    });


    document.addEventListener("click", function (event) {

        if (!event.target.closest(".dropdown")) {

            mockMenu.classList.remove("show");

        }

    });

}


// =====================================================
// MOCK TEST SYSTEM
// =====================================================


// ================= ELEMENTS =================

const testGrid =
    document.getElementById("testGrid");

const testListSection =
    document.getElementById("testListSection");

const testListContainer =
    document.getElementById("testListContainer");

const selectedExam =
    document.getElementById("selectedExam");

const testCount =
    document.getElementById("testCount");

const backToTests =
    document.getElementById("backToTests");


// ================= EXAM TEST DATA =================

const examTests = {

    "cgl-tier1": [
        "SSC CGL Tier 1 Mock Test 1",
        "SSC CGL Tier 1 Mock Test 2",
        "SSC CGL Tier 1 Mock Test 3",
        "SSC CGL Tier 1 Mock Test 4",
        "SSC CGL Tier 1 Mock Test 5",
        "SSC CGL Tier 1 Mock Test 6",
        "SSC CGL Tier 1 Mock Test 7",
        "SSC CGL Tier 1 Mock Test 8",
        "SSC CGL Tier 1 Mock Test 9",
        "SSC CGL Tier 1 Mock Test 10"
    ],

    "cgl-tier2": [
        "SSC CGL Tier 2 Mock Test 1",
        "SSC CGL Tier 2 Mock Test 2",
        "SSC CGL Tier 2 Mock Test 3",
        "SSC CGL Tier 2 Mock Test 4",
        "SSC CGL Tier 2 Mock Test 5",
        "SSC CGL Tier 2 Mock Test 6",
        "SSC CGL Tier 2 Mock Test 7",
        "SSC CGL Tier 2 Mock Test 8",
        "SSC CGL Tier 2 Mock Test 9",
        "SSC CGL Tier 2 Mock Test 10"
    ],

    "cpo-paper1": [
        "SSC CPO Paper 1 Mock Test 1",
        "SSC CPO Paper 1 Mock Test 2",
        "SSC CPO Paper 1 Mock Test 3",
        "SSC CPO Paper 1 Mock Test 4",
        "SSC CPO Paper 1 Mock Test 5",
        "SSC CPO Paper 1 Mock Test 6",
        "SSC CPO Paper 1 Mock Test 7",
        "SSC CPO Paper 1 Mock Test 8",
        "SSC CPO Paper 1 Mock Test 9",
        "SSC CPO Paper 1 Mock Test 10"
    ],

    "cpo-paper2": [
        "SSC CPO Paper 2 Mock Test 1",
        "SSC CPO Paper 2 Mock Test 2",
        "SSC CPO Paper 2 Mock Test 3",
        "SSC CPO Paper 2 Mock Test 4",
        "SSC CPO Paper 2 Mock Test 5",
        "SSC CPO Paper 2 Mock Test 6",
        "SSC CPO Paper 2 Mock Test 7",
        "SSC CPO Paper 2 Mock Test 8",
        "SSC CPO Paper 2 Mock Test 9",
        "SSC CPO Paper 2 Mock Test 10"
    ],

    "chsl-tier1": [
        "SSC CHSL Tier 1 Mock Test 1",
        "SSC CHSL Tier 1 Mock Test 2",
        "SSC CHSL Tier 1 Mock Test 3",
        "SSC CHSL Tier 1 Mock Test 4",
        "SSC CHSL Tier 1 Mock Test 5",
        "SSC CHSL Tier 1 Mock Test 6",
        "SSC CHSL Tier 1 Mock Test 7",
        "SSC CHSL Tier 1 Mock Test 8",
        "SSC CHSL Tier 1 Mock Test 9",
        "SSC CHSL Tier 1 Mock Test 10"
    ],

    "chsl-tier2": [
        "SSC CHSL Tier 2 Mock Test 1",
        "SSC CHSL Tier 2 Mock Test 2",
        "SSC CHSL Tier 2 Mock Test 3",
        "SSC CHSL Tier 2 Mock Test 4",
        "SSC CHSL Tier 2 Mock Test 5",
        "SSC CHSL Tier 2 Mock Test 6",
        "SSC CHSL Tier 2 Mock Test 7",
        "SSC CHSL Tier 2 Mock Test 8",
        "SSC CHSL Tier 2 Mock Test 9",
        "SSC CHSL Tier 2 Mock Test 10"
    ],

    "mts": [
        "SSC MTS Mock Test 1",
        "SSC MTS Mock Test 2",
        "SSC MTS Mock Test 3",
        "SSC MTS Mock Test 4",
        "SSC MTS Mock Test 5",
        "SSC MTS Mock Test 6",
        "SSC MTS Mock Test 7",
        "SSC MTS Mock Test 8",
        "SSC MTS Mock Test 9",
        "SSC MTS Mock Test 10"
    ],

    "gd": [
        "SSC GD Mock Test 1",
        "SSC GD Mock Test 2",
        "SSC GD Mock Test 3",
        "SSC GD Mock Test 4",
        "SSC GD Mock Test 5",
        "SSC GD Mock Test 6",
        "SSC GD Mock Test 7",
        "SSC GD Mock Test 8",
        "SSC GD Mock Test 9",
        "SSC GD Mock Test 10"
    ],

    "selection-post": [
        "SSC Selection Post Mock Test 1",
        "SSC Selection Post Mock Test 2",
        "SSC Selection Post Mock Test 3",
        "SSC Selection Post Mock Test 4",
        "SSC Selection Post Mock Test 5",
        "SSC Selection Post Mock Test 6",
        "SSC Selection Post Mock Test 7",
        "SSC Selection Post Mock Test 8",
        "SSC Selection Post Mock Test 9",
        "SSC Selection Post Mock Test 10"
    ]

};


// =====================================================
// VIEW ALL TEST BUTTONS
// =====================================================

const viewButtons =
    document.querySelectorAll(".view-tests");

viewButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const exam =
            button.getAttribute("data-exam");

        const title =
            button.getAttribute("data-title");

        openExamTests(exam, title);

    });

});


// =====================================================
// OPEN SELECTED EXAM TESTS
// =====================================================

function openExamTests(exam, title) {

    // Safety check
    if (
        !testGrid ||
        !testListSection ||
        !testListContainer ||
        !selectedExam ||
        !testCount
    ) {
        return;
    }


    const tests =
        examTests[exam] || [];


    // Change heading

    selectedExam.textContent =
        title;


    // Change count

    testCount.textContent =
        tests.length;


    // Clear old tests

    testListContainer.innerHTML =
        "";


    // Create tests

    tests.forEach(function (testName, index) {

        const testCard =
            document.createElement("div");


        testCard.className =
            "single-test-card";


        const number =
            String(index + 1).padStart(2, "0");


        testCard.innerHTML = `

            <div class="test-number">
                ${number}
            </div>

            <div class="test-info">

                <h3>
                    ${testName}
                </h3>

                <div class="test-meta">

                    <span>📝 100 Questions</span>

                    <span>🎯 200 Marks</span>

                    <span>⏱ 60 Minutes</span>

                </div>

            </div>

            <button
                class="start-test-btn"
                data-test="${index + 1}">

                Start Test →

            </button>

        `;


        testListContainer.appendChild(
            testCard
        );

    });


    // Hide exam cards

    testGrid.style.display =
        "none";


    // Show test list

    testListSection.style.display =
        "block";


    // Scroll to test list

    testListSection.scrollIntoView({
        behavior: "smooth"
    });

}


// =====================================================
// BACK TO EXAM TESTS
// =====================================================

if (backToTests) {

    backToTests.addEventListener(
        "click",
        function () {

            if (testListSection) {

                testListSection.style.display =
                    "none";

            }


            if (testGrid) {

                testGrid.style.display =
                    "grid";

            }


            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );

}


// =====================================================
// START TEST BUTTON
// =====================================================

document.addEventListener(
    "click",
    function (event) {

        if (
            event.target.classList.contains(
                "start-test-btn"
            )
        ) {

            const testNumber =
                event.target.getAttribute(
                    "data-test"
                );


            const card =
                event.target.closest(
                    ".single-test-card"
                );


            if (!card) {
                return;
            }


            const heading =
                card.querySelector("h3");


            if (!heading) {
                return;
            }


            const testName =
                heading.textContent.trim();


            openMockTest(
                testNumber,
                testName
            );

        }

    }
);


// =====================================================
// OPEN PROPER MOCK TEST
// =====================================================

function openMockTest(
    testNumber,
    testName
) {

    window.location.href =
        "complete mock.html?mock=" +
        testNumber +
        "&name=" +
        encodeURIComponent(testName);

}


// =====================================================
// AI ASK SYSTEM
// =====================================================


// =====================================================
// OPEN AI CHAT
// =====================================================

const openAIChat =
    document.getElementById("openAIChat");

const closeAIChat =
    document.getElementById("closeAIChat");

const aiChatOverlay =
    document.getElementById("aiChatOverlay");


if (openAIChat && aiChatOverlay) {

    openAIChat.addEventListener(
        "click",
        function () {

            aiChatOverlay.classList.add(
                "active"
            );


            document.body.style.overflow =
                "hidden";


            const input =
                document.getElementById(
                    "question"
                );


            if (input) {

                input.focus();

            }

        }
    );

}


// =====================================================
// CLOSE AI CHAT
// =====================================================

if (closeAIChat && aiChatOverlay) {

    closeAIChat.addEventListener(
        "click",
        function () {

            aiChatOverlay.classList.remove(
                "active"
            );


            document.body.style.overflow =
                "";

        }
    );

}


// =====================================================
// CLOSE AI CHAT WHEN CLICKING OUTSIDE
// =====================================================

if (aiChatOverlay) {

    aiChatOverlay.addEventListener(
        "click",
        function (event) {

            if (
                event.target ===
                aiChatOverlay
            ) {

                aiChatOverlay.classList.remove(
                    "active"
                );


                document.body.style.overflow =
                    "";

            }

        }
    );

}


// =====================================================
// ENTER KEY TO SEND AI QUESTION
// =====================================================

const aiQuestionInput =
    document.getElementById("question");


if (aiQuestionInput) {

    aiQuestionInput.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Enter") {

                event.preventDefault();

                askAI();

            }

        }
    );

}


// =====================================================
// LOGIN / REGISTER SYSTEM
// =====================================================


// =====================================================
// OPEN LOGIN / REGISTER
// =====================================================

function openAuth(type) {

    const modal =
        document.getElementById(
            "authModal"
        );


    const loginForm =
        document.getElementById(
            "loginForm"
        );


    const registerForm =
        document.getElementById(
            "registerForm"
        );


    const title =
        document.getElementById(
            "authTitle"
        );


    const subtitle =
        document.getElementById(
            "authSubtitle"
        );


    const icon =
        document.getElementById(
            "authIcon"
        );


    const bottomText =
        document.getElementById(
            "authBottomText"
        );


    const switchButton =
        document.getElementById(
            "authSwitch"
        );


    if (
        !modal ||
        !loginForm ||
        !registerForm
    ) {
        return;
    }


    // =====================================
    // LOGIN
    // =====================================

    if (type === "login") {

        loginForm.style.display =
            "block";


        registerForm.style.display =
            "none";


        if (icon) {

            icon.innerHTML =
                "🔐";

        }


        if (title) {

            title.innerHTML =
                "Welcome Back";

        }


        if (subtitle) {

            subtitle.innerHTML =
                "Login to continue your SSC preparation";

        }


        if (bottomText) {

            bottomText.innerHTML =
                "Don't have an account?";

        }


        if (switchButton) {

            switchButton.innerHTML =
                "Create Account";

        }

    }


    // =====================================
    // REGISTER
    // =====================================

    else {

        loginForm.style.display =
            "none";


        registerForm.style.display =
            "block";


        if (icon) {

            icon.innerHTML =
                "🚀";

        }


        if (title) {

            title.innerHTML =
                "Create Account";

        }


        if (subtitle) {

            subtitle.innerHTML =
                "Start your SSC preparation today";

        }


        if (bottomText) {

            bottomText.innerHTML =
                "Already have an account?";

        }


        if (switchButton) {

            switchButton.innerHTML =
                "Login";

        }

    }


    // SHOW POPUP

    modal.classList.add(
        "active"
    );


    // STOP BACKGROUND SCROLL

    document.body.style.overflow =
        "hidden";

}


// =====================================================
// CLOSE LOGIN / REGISTER POPUP
// =====================================================

function closeAuth() {

    const modal =
        document.getElementById(
            "authModal"
        );


    if (!modal) {
        return;
    }


    modal.classList.remove(
        "active"
    );


    document.body.style.overflow =
        "";

}


// =====================================================
// SWITCH LOGIN / REGISTER
// =====================================================

function switchAuth() {

    const loginForm =
        document.getElementById(
            "loginForm"
        );


    if (!loginForm) {
        return;
    }


    if (
        loginForm.style.display ===
        "none"
    ) {

        openAuth("login");

    }

    else {

        openAuth("register");

    }

}


// =====================================================
// ESC KEY - CLOSE AUTH
// =====================================================

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            closeAuth();

        }

    }
);


// =====================================================
// REGISTER SYSTEM
// =====================================================

const registerForm =
    document.getElementById(
        "registerForm"
    );


if (registerForm) {

    registerForm.addEventListener(
        "submit",
        async function (event) {

            event.preventDefault();


            const inputs =
                this.querySelectorAll(
                    "input"
                );


            const name =
                inputs[0].value.trim();


            const email =
                inputs[1].value.trim();


            const password =
                inputs[2].value;


            try {

                const response =
                    await fetch(
                        "/api/register",
                        {

                            method: "POST",

                            headers: {
                                "Content-Type":
                                    "application/json"
                            },

                            body:
                                JSON.stringify({

                                    name:
                                        name,

                                    email:
                                        email,

                                    password:
                                        password

                                })

                        }
                    );


                const data =
                    await response.json();


                if (data.success) {

                    alert(
                        "Registration successful! 🎉"
                    );


                    this.reset();


                    openAuth(
                        "login"
                    );

                }

                else {

                    alert(
                        data.message
                    );

                }

            }

            catch (error) {

                console.error(
                    "Registration error:",
                    error
                );


                alert(
                    "Backend se connection nahi ho pa raha."
                );

            }

        }
    );

}


// =====================================================
// LOGIN SYSTEM
// =====================================================

const loginForm =
    document.getElementById(
        "loginForm"
    );


if (loginForm) {

    loginForm.addEventListener(
        "submit",
        async function (event) {

            event.preventDefault();


            const inputs =
                this.querySelectorAll(
                    "input"
                );


            const email =
                inputs[0].value.trim();


            const password =
                inputs[1].value;


            try {

                const response =
                    await fetch(
                        "/api/login",
                        {

                            method: "POST",

                            headers: {
                                "Content-Type":
                                    "application/json"
                            },

                            body:
                                JSON.stringify({

                                    email:
                                        email,

                                    password:
                                        password

                                })

                        }
                    );


                const data =
                    await response.json();


                if (data.success) {

                    alert(
                        "Login successful! 🎉"
                    );


                    this.reset();


                    closeAuth();


                    updateNavbar(
                        data.user
                    );

                }

                else {

                    alert(
                        data.message
                    );

                }

            }

            catch (error) {

                console.error(
                    "Login error:",
                    error
                );


                alert(
                    "Backend se connection nahi ho pa raha."
                );

            }

        }
    );

}


// =====================================================
// CHECK LOGIN SESSION
// =====================================================

async function checkLoginStatus() {

    try {

        const response =
            await fetch(
                "/api/me"
            );


        const data =
            await response.json();


        if (data.loggedIn) {

            console.log(
                "Logged in as:",
                data.user.name
            );


            updateNavbar(
                data.user
            );

        }

        else {

            console.log(
                "User is not logged in."
            );

        }

    }

    catch (error) {

        console.error(
            "Session check error:",
            error
        );

    }

}


// =====================================================
// UPDATE NAVBAR AFTER LOGIN
// =====================================================

function updateNavbar(user) {

    const navButtons =
        document.querySelector(
            ".nav-buttons"
        );


    if (!navButtons) {
        return;
    }


    navButtons.innerHTML = `

        <button class="search">
            🔍
        </button>

        <span class="user-name">
            👋 ${user.name}
        </span>

        <button
            class="logout"
            onclick="logoutUser()">

            Logout

        </button>

    `;

}


// =====================================================
// LOGOUT
// =====================================================

async function logoutUser() {

    try {

        const response =
            await fetch(
                "/api/logout",
                {
                    method: "POST"
                }
            );


        const data =
            await response.json();


        if (data.success) {

            alert(
                "Logout successful! 👋"
            );


            location.reload();

        }

        else {

            alert(
                data.message ||
                "Logout failed."
            );

        }

    }

    catch (error) {

        console.error(
            "Logout error:",
            error
        );


        alert(
            "Logout nahi ho pa raha."
        );

    }

}


// =====================================================
// AI ASK SYSTEM
// =====================================================

async function askAI() {

    const input =
        document.getElementById(
            "question"
        );


    const chatBox =
        document.getElementById(
            "chatBox"
        );


    if (!input || !chatBox) {

        console.error(
            "AI chat elements not found."
        );

        return;

    }


    const question =
        input.value.trim();


    if (question === "") {
        return;
    }


    // Student message

    chatBox.innerHTML += `

        <div class="user-message">
            ${question}
        </div>

    `;


    input.value = "";


    // Loading

    chatBox.innerHTML += `

        <div
            class="ai-message"
            id="aiLoading">

            🤔 Thinking...

        </div>

    `;


    try {

        const response =
            await fetch(
                "/api/ask-ai",
                {

                    method: "POST",

                    headers: {
                        "Content-Type":
                            "application/json"
                    },

                    body:
                        JSON.stringify({

                            question:
                                question

                        })

                }
            );


        const data =
            await response.json();


        const loading =
            document.getElementById(
                "aiLoading"
            );


        if (loading) {

            loading.remove();

        }


        if (data.success) {

            chatBox.innerHTML += `

                <div class="ai-message">

                    🤖 ${data.answer}

                </div>

            `;

        }

        else {

            chatBox.innerHTML += `

                <div class="ai-message">

                    ❌ ${
                        data.message ||
                        "AI answer nahi de pa raha."
                    }

                </div>

            `;

        }


        // Scroll to bottom

        chatBox.scrollTop =
            chatBox.scrollHeight;

    }

    catch (error) {

        console.error(
            "AI Error:",
            error
        );


        const loading =
            document.getElementById(
                "aiLoading"
            );


        if (loading) {

            loading.remove();

        }


        chatBox.innerHTML += `

            <div class="ai-message">

                ❌ Server se AI connection nahi ho pa raha.

            </div>

        `;

    }

}


// =====================================================
// CHECK SESSION WHEN PAGE LOADS
// =====================================================

checkLoginStatus();


// =====================================================
// FINAL MESSAGE
// =====================================================

console.log(
    "SSC Website JavaScript Loaded Successfully"
);