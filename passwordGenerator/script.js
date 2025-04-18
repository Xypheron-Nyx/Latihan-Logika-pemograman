// variabel tombol
const tombol = document.querySelector(".tombol");

// variabel
const opsi = Array.from(document.querySelectorAll(".opsi"));

// variabel hasil
const hasil = document.querySelector(".hasil");

// array password
let karakterPassword = {
  hurufKecil: "abcdefghijklmnopqrstuvwxyz".split(""),
  hurufBesar: "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
  angka: "0123456789".split(""),
  simbol: "!@#$%^&*()_+".split(""),
};
let karakterDipilih = [];

// array hasil
let hasilGenerate = [];

tombol.addEventListener("click", function () {
  hasilGenerate = [];
  hasil.classList.remove("hidden");
  hasil.textContent = "";
  karakterDipilih = [];

  if (karakterDipilih.length === 0) {
    hasil.textContent = "Pilih dulu opsi karakter!";
    return;
  }

  // ambil nilai checkBox
  for (let i = 0; i < opsi.length; i++) {
    if (opsi[i].checked) {
      karakterDipilih = karakterDipilih.concat(karakterPassword[opsi[i].id]);
    }
  }

  for (let i = 0; i < 12; i++) {
    let randomKarakter = Math.floor(Math.random() * karakterDipilih.length);
    hasilGenerate.push(karakterDipilih[randomKarakter]);
  }
  hasil.textContent = hasilGenerate.join("");
});
