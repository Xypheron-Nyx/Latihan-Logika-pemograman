// inputElement
const barangEl = document.getElementById("namaBarangEl");
const jumlahEl = document.getElementById("jumlahEl");
const hargaEl = document.getElementById("hargaEl");
const kategoriEl = document.getElementById("kategoriEl");
const types = document.querySelectorAll(".types-item");
const submit = document.getElementById("submit");
const rowCard = document.getElementById("rowCard");
const message = document.getElementById("messageEl");
let typeProduct = "";
let cardEdit = null;

[jumlahEl, hargaEl].forEach((el) => {
  el.addEventListener("input", function () {
    this.value = this.value.replace(/\D/g, "");
  });
});

types.forEach((type) => {
  type.addEventListener("click", function () {
    kategoriEl.textContent = type.textContent;
    typeProduct = type.textContent;
  });
});

submit.addEventListener("click", function () {
  if (barangEl.value == "" || jumlahEl.value == "" || hargaEl.value == "") {
    message.classList.remove("hidden", "text-primary");
    message.classList.add("text-danger");
    message.textContent = "*Lengkapi Form";
    return;
  }
  message.classList.remove("hidden", "text-danger");
  message.classList.add("text-primary");
  message.textContent = "*Form Terkirim";
  if (cardEdit) {
    cardEdit.querySelector(".card-title span").textContent = barangEl.value;
    cardEdit.querySelector(".jumlahCard span").textContent = jumlahEl.value;
    cardEdit.querySelector(".hargaCard span").textContent = hargaEl.value;
    cardEdit.querySelector(".typeCard span").textContent = typeProduct || "Tidak dipilih";
    typeProduct = "";
    cardEdit = null;
  } else {
    const card = document.createElement("div");
    card.classList.add("col-sm-6", "mb-3", "col-md-4");
    card.innerHTML = `
            <div class="card">
              <div class="card-body">
              <h5 class="card-title">Nama Barang: <span class="fw-bold">${barangEl.value}</span></h5>
              <p class="card-text jumlahCard">Jumlah: <span class="fw-bold">${jumlahEl.value}</span></p>
              <p class="card-text hargaCard">Harga: <span class="fw-bold">${hargaEl.value}</span></p>
              <p class="card-text typeCard">Kategori: <span class="fw-bold">${typeProduct || "Tidak dipilih"}</span></p>
                <div class="d-flex gap-2">
                  <button id="editEl" type="button" class="btn btn-primary btn-sm w-50">Edit</button>
                  <button id="deleteEl" type="button" class="btn btn-danger btn-sm w-50">Hapus</button>
                </div>
              </div>
            </div>`;
    rowCard.appendChild(card);
  }

  barangEl.value = "";
  hargaEl.value = "";
  jumlahEl.value = "";
  kategoriEl.textContent = "kategori Barang";
  barangEl.focus();
});

document.addEventListener("click", function (e) {
  const card = e.target.closest(".card");
  if (e.target.id === "editEl") {
    cardEdit = card;
    barangEl.value = cardEdit.querySelector(".card-title span").textContent;
    jumlahEl.value = cardEdit.querySelector(".jumlahCard span").textContent;
    hargaEl.value = cardEdit.querySelector(".hargaCard span").textContent;
    kategoriEl.textContent = cardEdit.querySelector(".typeCard span").textContent;
    if (typeProduct == "") {
      kategoriEl.textContent = "kategori Barang";
    } else {
      typeProduct = cardEdit.querySelector(".typeCard span").textContent;
    }
  }
  if (e.target.id === "deleteEl") {
    card.remove();
  }
});
