/* ==========================================================
   SSC MOCK Typing Test Engine v2.0
========================================================== */

// -------------------- PASSAGES --------------------

const englishPassages = [
`The quick brown fox jumps over the lazy dog. Typing every day improves speed and accuracy. Consistency is the key to mastering keyboard skills and performing well in competitive examinations. Practice makes a person perfect.`,

`Technology has transformed education by making learning more accessible. Students can now practice online, track their progress, and improve their typing skills through regular practice and dedication.`,

`Success in competitive examinations depends upon consistency, discipline, and regular practice. Every correct keystroke brings you closer to your goal.`
];

const hindiPassages = [
`भारत एक विविधताओं से भरा देश है जहाँ अनेक भाषाएँ और संस्कृतियाँ मिलकर एकता का संदेश देती हैं। नियमित अभ्यास सफलता की कुंजी है।`,

`प्रतिदिन टाइपिंग का अभ्यास करने से गति और शुद्धता दोनों में सुधार होता है। निरंतर प्रयास से प्रतियोगी परीक्षाओं में बेहतर प्रदर्शन किया जा सकता है।`
];

// -------------------- ELEMENTS --------------------

const passage = document.getElementById("passage");
const typingInput = document.getElementById("typingInput");

const timerEl = document.getElementById("timer");
const wpmEl = document.getElementById("wpm");
const cpmEl = document.getElementById("cpm");
const accuracyEl = document.getElementById("accuracy");
const errorsEl = document.getElementById("errors");

const progressFill = document.getElementById("progressFill");
const progressPercent = document.getElementById("progressPercent");
const typedCount = document.getElementById("typedCount");
const totalCount = document.getElementById("totalCount");

const language = document.getElementById("language");
const duration = document.getElementById("duration");

// Buttons
const restartBtn = document.getElementById("restartBtn");
const newPassageBtn = document.getElementById("newPassageBtn");
const fullscreenBtn = document.getElementById("fullscreenBtn");
const quitBtn = document.getElementById("quitBtn");
const endBtn = document.getElementById("endBtn");

// -------------------- VARIABLES --------------------

let currentText = "";
let timerStarted = false;
let timerPaused = false;
let interval = null;

let totalSeconds = 600;
let timeLeft = totalSeconds;

let correctChars = 0;
let errors = 0;

// -------------------- LOAD PASSAGE --------------------

function getRandomPassage(){

const list = language.value === "Hindi"
? hindiPassages
: englishPassages;

return list[Math.floor(Math.random()*list.length)];

}

function loadPassage(){

currentText = getRandomPassage();

passage.innerHTML="";

currentText.split("").forEach(char=>{

const span=document.createElement("span");
span.textContent=char;
passage.appendChild(span);

});

typingInput.value="";
typingInput.disabled=false;

correctChars=0;
errors=0;

typedCount.textContent=0;
totalCount.textContent=currentText.length;

updateStats();
updateProgress();

}

// -------------------- TIMER --------------------

function startTimer(){

if(timerStarted) return;

timerStarted=true;

interval=setInterval(()=>{

if(timerPaused) return;

timeLeft--;

updateTimer();

if(timeLeft<=0){

finishTest();

}

},1000);

}

function updateTimer(){

const min=Math.floor(timeLeft/60);
const sec=timeLeft%60;

timerEl.textContent=
`${String(min).padStart(2,"0")}:${String(sec).padStart(2,"0")}`;

}

function resetTimer(){

clearInterval(interval);

timerStarted=false;
timerPaused=false;

totalSeconds=Number(duration.value)*60;
timeLeft=totalSeconds;

updateTimer();

}

// -------------------- STATS --------------------

function updateStats(){

const typed=typingInput.value.length;

const elapsed=(totalSeconds-timeLeft)/60 || 1/60;

const wpm=Math.max(0,Math.round((typed/5)/elapsed));

const cpm=Math.max(0,Math.round(typed/elapsed));

const accuracy=typed===0
?100
:Math.round((correctChars/typed)*100);

wpmEl.textContent=wpm;
cpmEl.textContent=cpm;
accuracyEl.textContent=accuracy+"%";
errorsEl.textContent=errors;

typedCount.textContent=typed;

}

// -------------------- PROGRESS --------------------

function updateProgress(){

const percent=Math.min(100,
Math.round((typingInput.value.length/currentText.length)*100));

progressFill.style.width=percent+"%";
progressPercent.textContent=percent+"%";

}

// -------------------- TYPING --------------------

typingInput.addEventListener("input",()=>{

if(!timerStarted) startTimer();

const typed=typingInput.value;
const chars=passage.querySelectorAll("span");

correctChars=0;
errors=0;

chars.forEach((span,index)=>{

span.classList.remove("correct","incorrect","current");

const char=typed[index];

if(char==null){

if(index===typed.length){

span.classList.add("current");

}

}

else if(char===span.textContent){

span.classList.add("correct");
correctChars++;

}

else{

span.classList.add("incorrect");
errors++;

}

});

updateStats();
updateProgress();

});

// -------------------- FINISH TEST --------------------

function finishTest(){

clearInterval(interval);

typingInput.disabled=true;

alert(`
SSC MOCK Result

WPM : ${wpmEl.textContent}
CPM : ${cpmEl.textContent}
Accuracy : ${accuracyEl.textContent}
Errors : ${errors}
`);

}

// -------------------- BUTTONS --------------------

restartBtn.addEventListener("click",()=>{

resetTimer();
loadPassage();

});

newPassageBtn.addEventListener("click",()=>{

resetTimer();
loadPassage();

});

endBtn.addEventListener("click",finishTest);

fullscreenBtn.addEventListener("click",()=>{

if(!document.fullscreenElement){

document.documentElement.requestFullscreen();

}else{

document.exitFullscreen();

}

});

quitBtn.addEventListener("click",()=>{

if(confirm("Quit current test?")){

resetTimer();
loadPassage();

}

});

// -------------------- SETTINGS --------------------

language.addEventListener("change",()=>{

resetTimer();
loadPassage();

});

duration.addEventListener("change",()=>{

resetTimer();

});

// -------------------- SHORTCUTS --------------------

document.addEventListener("keydown",e=>{

// Block Paste

if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==="v"){

e.preventDefault();

}

// Pause

if(e.altKey&&e.key.toLowerCase()==="p"){

e.preventDefault();
timerPaused=!timerPaused;

}

// Restart

if(e.altKey&&e.key.toLowerCase()==="r"){

e.preventDefault();

resetTimer();
loadPassage();

}

// New Passage

if(e.altKey&&e.key.toLowerCase()==="n"){

e.preventDefault();

resetTimer();
loadPassage();

}

// Exit Fullscreen

if(e.key==="Escape"&&document.fullscreenElement){

document.exitFullscreen();

}

});

// -------------------- SECURITY --------------------

// Right Click Block

document.addEventListener("contextmenu",e=>{

e.preventDefault();

});

// Tab Warning

document.addEventListener("visibilitychange",()=>{

if(document.hidden&&timerStarted){

alert("Warning: Tab switching detected.");

}

});

// -------------------- INIT --------------------

resetTimer();
loadPassage();