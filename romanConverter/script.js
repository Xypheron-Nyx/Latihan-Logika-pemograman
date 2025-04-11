// element html
const submit = document.getElementById("submit");
const input = document.getElementById("num");
const converter = document.querySelector(".converter");
const resultEl = document.getElementById("resultEl");
const resetEl = document.getElementById("resetEl");
// regex
const regex = /^[0-9]{1,4}$/;

input.addEventListener("input", function () {
  this.value = this.value.replace(/\D/g, ""); // Hapus karakter selain angka
});

submit.addEventListener("click", function () {
  const num = parseInt(input.value); // ubah ke number

  if (input.value === "") {
    alert("Tidak boleh kosong");
    return;
  } else if (num < 1 || num > 3999) {
    alert("Angka harus antara 1 sampai 3999");
    return;
  } else {
    converter.classList.remove("hidden");
    resultEl.textContent = toRoman(num);
  }
});

resetEl.addEventListener("click", function () {
  input.value = "";
  converter.classList.add("hidden");
  resultEl.textContent = "";
});

function toRoman(num) {
  let romanNumerals = [
    { value: 1000, symbol: "M" },
    { value: 900, symbol: "CM" },
    { value: 500, symbol: "D" },
    { value: 400, symbol: "CD" },
    { value: 100, symbol: "C" },
    { value: 90, symbol: "XC" },
    { value: 50, symbol: "L" },
    { value: 40, symbol: "XL" },
    { value: 10, symbol: "X" },
    { value: 9, symbol: "IX" },
    { value: 5, symbol: "V" },
    { value: 4, symbol: "IV" },
    { value: 1, symbol: "I" },
  ];

  let result = "";

  for (let i = 0; i < romanNumerals.length; i++) {
    while (num >= romanNumerals[i].value) {
      result += romanNumerals[i].symbol;
      num -= romanNumerals[i].value;
    }
  }

  return result;
}

// Logika pemograman
// 1. Inisialisasi angka (num) yang diberikan oleh user.

// 2. Loop melalui daftar angka Romawi (romanNumerals) dari yang terbesar ke yang terkecil.
//     -Gunakan for untuk mengecek setiap angka dalam daftar.

// 3. Selama angka (num) masih lebih besar atau sama dengan nilai Romawi saat ini (while loop):
//     -Tambahkan simbol Romawi ke dalam hasil (result).
//     -Kurangi num dengan nilai Romawi yang digunakan.
//     -Ulangi langkah ini sampai angka tidak bisa dikurangi lagi.

// 4. Jika angka tidak bisa dikurangi dengan nilai Romawi saat ini, lanjut ke indeks berikutnya.

// 5. Proses berlanjut sampai angka habis (num = 0).

// 6. Tampilkan hasil konversi dalam format angka Romawi.
