// inputElement
const barangEl = document.getElementById("namaBarangEl");
const jumlahEl = document.getElementById("jumlahEl");
const hargaEl = document.getElementById("hargaEl");
const kategoriEl = document.getElementById("kategoriEl");
const types = document.querySelectorAll("#types");

types.forEach((type) => {
  type.addEventListener("click", function () {
    kategoriEl.textContent = type.textContent;
  });
});
