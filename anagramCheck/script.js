const input1El = document.getElementById("input1El");
const input2El = document.getElementById("input2El");
const submitEl = document.getElementById("submitEl");
const resultEl = document.getElementById("result");
let huruf1 = {};
let huruf2 = {};
// dengan sorting
// submitEl.addEventListener("click", function (e) {
//   e.preventDefault();
//   let input1 = input1El.value;
//   let input2 = input2El.value;

//   if (input1 === "" || input2 === "") {
//     alert("Lengkap form");
//     return;
//   } else if (typeof input1 !== "string" || typeof input2 !== "string") {
//     alert("Input harus berupa kata");
//     return;
//   }

//   if (input1.split("").sort().join("") === input2.split("").sort().join("")) {
//     resultEl.classList.remove("d-none");
//     resultEl.textContent = "Ini adalah Anagram";
//     resultEl.classList.add("text-success");
//   } else {
//     resultEl.classList.remove("d-none");
//     resultEl.classList.remove("d-none");
//     resultEl.textContent = "Ini bukan Anagram";
//     resultEl.classList.add("text-danger");
//   }
// });

// dengan looping
submitEl.addEventListener("click", function (e) {
  e.preventDefault();
  let input1 = input1El.value.split("");
  let input2 = input2El.value.split("");

  if (input1.length === 0 || input2.length === 0) {
    alert("Lengkap Form !");
    return;
  }

  if (input1.length !== input2.length) {
    resultEl.classList.remove("d-none");
    resultEl.textContent = "Ini bukan Anagram";
    resultEl.classList.add("text-danger");
    return;
  }
  huruf1 = {};
  huruf2 = {};

  loopKata(input1, huruf1);
  loopKata(input2, huruf2);

  bandingObject(huruf1, huruf2);
});

function loopKata(input, object) {
  for (let i = 0; i < input.length; i++) {
    let currentChar = input[i];
    if (!object[currentChar]) {
      object[currentChar] = 1;
    } else {
      object[currentChar] += 1;
    }
  }
  return object;
}

function bandingObject(value1, value2) {
  resultEl.classList.remove("text-danger", "text-success"); // hapus kelas sebelumnya
  resultEl.classList.remove("d-none"); // pastikan elemen tamp
  for (let huruf in value1) {
    if (value1[huruf] !== value2[huruf]) {
      resultEl.textContent = "Ini bukan Anagram";
      resultEl.classList.add("text-danger");
      return;
    }
  }
  // Jika semua huruf cocok, itu adalah anagram
  resultEl.textContent = "Ini adalah Anagram";
  resultEl.classList.add("text-success");
}
