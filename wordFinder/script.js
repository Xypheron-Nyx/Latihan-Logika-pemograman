// input kata
const inputEl = document.getElementById("findEl");

// teks element
const teksEl = document.getElementById("teksEl");

// teks original
const teksOriginal = teksEl.innerHTML;

inputEl.addEventListener("input", function () {
  filterKata(inputEl.value.trim());
});

function filterKata(value) {
  if (value) {
    let regex = new RegExp(value, "gi");
    teksEl.innerHTML = teksOriginal.replace(regex, `<span class='text-cyan-500'>$&</span>`);
  } else {
    teksEl.innerHTML = teksOriginal;
  }
}
