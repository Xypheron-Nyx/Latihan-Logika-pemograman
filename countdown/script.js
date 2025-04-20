// element input date
const dateEl = document.getElementById("inputEl");

// element submit
const submit = document.getElementById("submit");

// element pesan
const pesan = document.querySelector(".pesan");

// element ui
const displayUIEl = document.getElementById("countdown");

// variabel hari,jam,menit,detik
let timer;
let isRunning = false;
let hari, jam, menit, detik;

submit.addEventListener("click", function () {
  pesan.classList.add("hidden");

  // ambil waktu yang dipilih user dan waktu sekarang
  let timeSet = new Date(dateEl.value).getTime();
  let timeNow = new Date().getTime();

  // cek format
  pesan.innerHTML = cekFormat(timeSet, timeNow);

  hitungMundur(timeSet, timeNow);
});

const cekFormat = (timeSet, timeNow) => {
  if (isNaN(timeSet)) {
    pesan.classList.remove("hidden");
    return "Masukkan Tanggal";
  }
  if (timeNow >= timeSet) {
    pesan.classList.remove("hidden");
    return "Waktu yang anda pilih telah berlalu";
  }
};

const hitungMundur = (timeSet, timeNow) => {
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(function () {
      let sisa;
      // pengurangan waktu

      // update waktu
      timeNow = new Date().getTime();

      let sisaWaktu = timeSet - timeNow;

      // jadikan detik
      let totalDetik = Math.floor(sisaWaktu / 1000);

      // Menghitung hari, jam, menit, detik
      hari = Math.floor(totalDetik / (60 * 60 * 24)); // hari
      sisa = totalDetik % (60 * 60 * 24); // sisa hari

      jam = Math.floor(sisa / 3600); // jam
      sisa = sisa % 3600; // sisa jam

      menit = Math.floor(sisa / 60); // sisa menit
      sisa = sisa % 60; // sisa menit

      detik = sisa;

      // Jika waktu sudah habis
      if (sisaWaktu <= 0) {
        clearInterval(timer); // Stop interval
        isRunning = false; // Reset isRunning
        pesan.innerHTML = "Waktu telah habis!";
        pesan.classList.remove("hidden");
      }

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
