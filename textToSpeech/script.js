// variabel dom inputSlider dan progressSlider
const inputSlider = document.querySelector(".slider");
const progressSlider = document.querySelector(".progressSlider");

// variabel dom input
const inputTxt = document.querySelector("#inputTeks");

// variabel dom play,pause,resume
const buttonAction = document.querySelector("#buttonAction");
const Stop = document.querySelector(".stop");

// speechSynthesis
let syth = window.speechSynthesis;

// display progress
progressSlider.innerHTML = `${inputSlider.value}x`;
inputSlider.addEventListener("input", function () {
  progressSlider.innerHTML = `${inputSlider.value}x`;
});

buttonAction.addEventListener("click", function () {
  Stop.classList.remove("hidden");

  if (syth.speaking && !syth.paused) {
    // lagi ngomong → pause
    syth.pause();
    buttonAction.innerHTML = "Resume";
    buttonAction.className = "resume bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600";
  } else if (syth.paused) {
    // lagi di-pause → resume
    syth.resume();
    buttonAction.innerHTML = "Pause";
    buttonAction.className = "pause bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600";
  } else {
    // belum ngomong sama sekali → mulai baru
    playSpeech();
    buttonAction.innerHTML = "Pause";
    buttonAction.className = "pause bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600";
  }
});

Stop.addEventListener("click", function () {
  Stop.classList.add("hidden");
  buttonAction.innerHTML = "Play";
  buttonAction.classList.remove("resume", "bg-green-500", "text-white", "px-4", "py-2", "rounded", "hover:bg-green-600");
  buttonAction.classList.remove("pause", "bg-yellow-500", "text-white", "px-4", "py-2", "rounded", "hover:bg-yellow-600");
  buttonAction.classList.add("play", "bg-blue-500", "text-white", "px-4", "py-2", "rounded", "hover:bg-blue-600");
  stopSpeech();
});

function playSpeech() {
  let u = new SpeechSynthesisUtterance(inputTxt.value);
  u.rate = inputSlider.value;
  if (syth.speaking) syth.cancel();
  syth.speak(u);
}

function pauseSpeech() {
  syth.pause();
}

function resumeSpeech() {
  syth.resume();
}

function stopSpeech() {
  syth.cancel();
}
