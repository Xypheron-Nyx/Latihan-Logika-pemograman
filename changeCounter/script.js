// element input
const hargaEl = document.getElementById("hargaBarang");
const bayarEl = document.getElementById("uangBayar");

// element kembalian
const kembalianEl = document.querySelector(".kembalian");

// element btnInput
const btnInput = document.querySelector(".btnHitung");

// element pesan
const pesanEl = document.querySelector(".pesan");

// element hasil
const hasilEl = document.querySelector(".hasil");

// element pecahan Uang
const pecahanUangEl = document.getElementById("pecahanUang");

// variabel kembalian
let hasilKembalian = 0;
let hasilPecahanUang;

// timpa selain angka
[hargaEl, bayarEl].forEach((el) => {
  el.addEventListener("input", function () {
    this.value = this.value.replace(/\D/g, "");
  });
});

btnInput.addEventListener("click", function () {
  pesanEl.classList.add("hidden");
  hasilEl.classList.add("hidden");

  let harga = Number(hargaEl.value);
  let bayar = Number(bayarEl.value);

  hasilKembalian = 0;
  hasilPecahanUang = 0;

  if (cekFormat(harga, bayar)) {
    kembalian(harga, bayar);
    hasilEl.classList.remove("hidden");
    kembalianEl.innerHTML = `Rp.${hasilKembalian}`;
    pecahanUangEl.innerHTML = pecahanUang();
  }
});

function cekFormat(valueHarga, valueBayar) {
  if (valueHarga == 0 || valueBayar == 0) {
    pesanEl.classList.remove("hidden");
    pesanEl.innerHTML = "Masukkan harga!";
    return false;
  } else if (valueHarga > valueBayar) {
    pesanEl.classList.remove("hidden");
    pesanEl.innerHTML = "Uang anda kurang!";
    return false;
  } else if (valueHarga < 50 || valueBayar < 50) {
    pesanEl.classList.remove("hidden");
    pesanEl.innerHTML = "Nggk ada barang harga segitu kocak!";
    return false;
  }
  return true;
}

function kembalian(valueHarga, valueBayar) {
  hasilKembalian = valueBayar - valueHarga;
}

function pecahanUang() {
  hasilPecahanUang = hasilKembalian;

  let greedy = [100000, 50000, 20000, 10000, 5000, 2000, 1000, 500, 200, 100, 50, 1];

  let result = {};

  for (let i = 0; i < greedy.length; i++) {
    while (hasilPecahanUang >= greedy[i]) {
      if (result[greedy[i]]) {
        result[greedy[i]] += 1;
      } else {
        result[greedy[i]] = 1;
      }
      hasilPecahanUang -= greedy[i];
    }
  }
  let resultString = "";
  for (let key in result) {
    resultString += `Rp.${key} x ${result[key]}<br>`;
  }

  return resultString;
}
