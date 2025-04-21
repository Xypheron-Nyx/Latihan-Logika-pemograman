// element input date
const dateEl = document.getElementById("inputEl");

// element submit
const submit = document.getElementById("submit");

// element pesan
const pesan = document.querySelector(".pesan");

// element ui
const displayUIEl = document.getElementById("countdown");

// resultContainer
const resultContainer = document.querySelector(".resultContainer");

// reset
const reset = document.getElementById("reset");

// variabel hari,jam,menit,detik
let timer;
let isRunning = false;
let hari = 0,
  jam = 0,
  menit = 0,
  detik = 0;

submit.addEventListener("click", function () {
  pesan.classList.add("hidden");

  // ambil waktu yang dipilih user dan waktu sekarang
  let timeNow = new Date().getTime();
  let timeSet = new Date(dateEl.value).getTime();

  // cek format
  if (cekFormat(timeSet, timeNow)) {
    resultContainer.classList.remove("hidden");
    hitungMundur(timeSet, timeNow);
  }
});

reset.addEventListener("click", function () {
  resultContainer.classList.add("hidden");
  pesan.classList.add("hidden");
  pesan.innerHTML = "";
  clearInterval(timer);
  dateEl.value = "";
  isRunning = false;
  hari = 0;
  jam = 0;
  menit = 0;
  detik = 0;
});

const cekFormat = (timeSet, timeNow) => {
  if (!dateEl.value) {
    // Cek jika input kosong
    pesan.classList.remove("hidden");
    pesan.innerHTML = "Masukkan Tanggal";
    return false;
  }
  if (timeNow >= timeSet) {
    pesan.classList.remove("hidden");
    pesan.innerHTML = "Waktu yang anda pilih telah berlalu";
    return false;
  }

  return true;
};

const hitungMundur = (timeSet, timeNow) => {
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(function () {
      // update waktu
      timeNow = new Date().getTime();
      let sisa;

      // pengurangan waktu
      let sisaWaktu = timeSet - timeNow;

      // Jika waktu sudah habis
      if (sisaWaktu < 0) {
        clearInterval(timer); // Stop interval
        isRunning = false; // Reset isRunning
        pesan.innerHTML = "Waktu telah habis!";
        pesan.classList.remove("hidden");
        return;
      }

      // jadikan detik
      let totalDetik = Math.floor(sisaWaktu / 1000);

      // Menghitung hari, jam, menit, detik
      hari = Math.floor(totalDetik / 86400); // hari
      sisa = totalDetik % 86400; // sisa hari

      jam = Math.floor(sisa / 3600); // jam
      sisa = sisa % 3600; // sisa jam

      menit = Math.floor(sisa / 60); // sisa menit
      sisa = sisa % 60; // sisa menit

      detik = sisa; // sisa detik

      displayUI();
    }, 1000);
  }
};

const displayUI = () => {
  let formattedTime = `<td>${(hari < 10 ? "0" : "") + hari}</td>
            <td>${(jam < 10 ? "0" : "") + jam}</td>
            <td>${(menit < 10 ? "0" : "") + menit}</td>
            <td>${(detik < 10 ? "0" : "") + detik}</td> `;
  displayUIEl.innerHTML = formattedTime;
};
