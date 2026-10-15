// =========================================
// MOCK TEST DROPDOWN
// =========================================

const mockBtn = document.getElementById("mockBtn");
const mockMenu = document.getElementById("mockMenu");

if (mockBtn && mockMenu) {

    mockBtn.addEventListener("click", function(event) {

        event.stopPropagation();

        mockMenu.classList.toggle("show");

    });


    document.addEventListener("click", function(event) {

        if (!event.target.closest(".dropdown")) {

            mockMenu.classList.remove("show");

        }

    });

}


// =========================================
// AI ASK SYSTEM
// =========================================
// =========================================
// OPEN AI CHAT
// =========================================

const openAIChat =
    document.getElementById("openAIChat");

const closeAIChat =
    document.getElementById("closeAIChat");

const aiChatOverlay =
    document.getElementById("aiChatOverlay");


if (openAIChat && aiChatOverlay) {

    openAIChat.addEventListener("click", function () {

        aiChatOverlay.classList.add("active");

        document.body.style.overflow = "hidden";

        const input =
            document.getElementById("question");

        if (input) {
            input.focus();
        }

    });

}


// =========================================
// CLOSE AI CHAT
// =========================================

if (closeAIChat && aiChatOverlay) {

    closeAIChat.addEventListener("click", function () {

        aiChatOverlay.classList.remove("active");

        document.body.style.overflow = "";

    });

}


// =========================================
// CLOSE WHEN CLICK OUTSIDE
// =========================================

if (aiChatOverlay) {

    aiChatOverlay.addEventListener("click", function(event) {

        if (event.target === aiChatOverlay) {

            aiChatOverlay.classList.remove("active");

            document.body.style.overflow = "";

        }

    });

}


// =========================================
// ENTER KEY TO SEND
// =========================================

const aiQuestionInput =
    document.getElementById("question");


if (aiQuestionInput) {

    aiQuestionInput.addEventListener(
        "keydown",
        function(event) {

            if (event.key === "Enter") {

                event.preventDefault();

                askAI();

            }

        }
    );

}

// =========================================
// LOGIN / REGISTER SYSTEM
// =========================================


// OPEN LOGIN / REGISTER

function openAuth(type) {

    const modal =
        document.getElementById("authModal");

    const loginForm =
        document.getElementById("loginForm");

    const registerForm =
        document.getElementById("registerForm");

    const title =
        document.getElementById("authTitle");

    const subtitle =
        document.getElementById("authSubtitle");

    const icon =
        document.getElementById("authIcon");

    const bottomText =
        document.getElementById("authBottomText");

    const switchButton =
        document.getElementById("authSwitch");


    if (!modal) {
        return;
    }


    // =====================================
    // LOGIN
    // =====================================

    if (type === "login") {

        loginForm.style.display = "block";

        registerForm.style.display = "none";

        icon.innerHTML = "🔐";

        title.innerHTML =
            "Welcome Back";

        subtitle.innerHTML =
            "Login to continue your SSC preparation";

        bottomText.innerHTML =
            "Don't have an account?";

        switchButton.innerHTML =
            "Create Account";

    }


    // =====================================
    // REGISTER
    // =====================================

    else {

        loginForm.style.display = "none";

        registerForm.style.display = "block";

        icon.innerHTML = "🚀";

        title.innerHTML =
            "Create Account";

        subtitle.innerHTML =
            "Start your SSC preparation today";

        bottomText.innerHTML =
            "Already have an account?";

        switchButton.innerHTML =
            "Login";

    }


    // SHOW POPUP

    modal.classList.add("active");


    // STOP BACKGROUND SCROLL

    document.body.style.overflow = "hidden";

}


// =========================================
// CLOSE POPUP
// =========================================

function closeAuth() {

    const modal =
        document.getElementById("authModal");

    if (!modal) {
        return;
    }

    modal.classList.remove("active");

    document.body.style.overflow = "";

}


// =========================================
// SWITCH LOGIN / REGISTER
// =========================================

function switchAuth() {

    const loginForm =
        document.getElementById("loginForm");

    if (!loginForm) {
        return;
    }


    if (loginForm.style.display === "none") {

        openAuth("login");

    }

    else {

        openAuth("register");

    }

}


// =========================================
// ESC KEY
// =========================================

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {

            closeAuth();

        }

    }
);


// =========================================
// REGISTER SYSTEM
// =========================================

const registerForm =
    document.getElementById("registerForm");


if (registerForm) {

    registerForm.addEventListener(
        "submit",
        async function(event) {

            event.preventDefault();


            const inputs =
                this.querySelectorAll("input");


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

                                    name: name,

                                    email: email,

                                    password: password

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


                    // Open login after registration

                    openAuth("login");


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


// =========================================
// LOGIN SYSTEM
// =========================================

const loginForm =
    document.getElementById("loginForm");


if (loginForm) {

    loginForm.addEventListener(
        "submit",
        async function(event) {

            event.preventDefault();


            const inputs =
                this.querySelectorAll("input");


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

                                    email: email,

                                    password: password

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


                    // Update navbar

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


// =========================================
// CHECK LOGIN SESSION
// =========================================

async function checkLoginStatus() {

    try {

        const response =
            await fetch("/api/me");


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


// =========================================
// UPDATE NAVBAR AFTER LOGIN
// =========================================

function updateNavbar(user) {

    const navButtons =
        document.querySelector(".nav-buttons");


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


// =========================================
// LOGOUT
// =========================================

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


// =========================================
// CHECK SESSION WHEN PAGE LOADS
// =========================================

checkLoginStatus();
