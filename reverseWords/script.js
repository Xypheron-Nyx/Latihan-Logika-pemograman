//input value element
const inputEl = document.getElementById("text");

// submit element
const submitEl = document.getElementById("submitEl");

// container result
const conResult = document.querySelector(".results");

// result element
const resultEl = document.getElementById("resultEl");

// reset element
const resetEl = document.getElementById("resetEl");

// array
let reverseArray;
submitEl.addEventListener("click", function () {
  if (inputEl.value.trim() === "") {
    alert("Masukkan Kata");
    inputEl.value = "";
    return;
  } else {
    reverseArray = inputEl.value.split("").reverse().join("");
    conResult.classList.remove("hidden");
    resultEl.textContent = reverseArray;
    submitEl.classList.add("hidden");
  }
});

resetEl.addEventListener("click", function () {
  conResult.classList.add("hidden");
  resultEl.textContent = "";
  submitEl.classList.remove("hidden");
  inputEl.value = "";
});
