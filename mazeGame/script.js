window.onload = function () {
  let playerEl = document.querySelector(".player");
  let row = parseInt(playerEl.getAttribute("data-row"));
  let col = parseInt(playerEl.getAttribute("data-col"));
  const resetEl = document.getElementById("reset");

  window.addEventListener("keydown", karakterGerak);

  resetEl.addEventListener("click", function () {
    row = 0;
    col = 0;

    // Temukan elemen player yang sebelumnya (jika ada) dan hapus bg-blue-500
    const previousPlayerEl = document.querySelector(".bg-blue-500");
    if (previousPlayerEl) {
      previousPlayerEl.classList.remove("bg-blue-500"); // Hapus bg-blue-500 dari elemen sebelumnya
      previousPlayerEl.classList.add("bg-white"); // Kembalikan warna menjadi putih
    }

    // Update posisi di DOM
    playerEl = document.querySelector(`[data-row="${row}"][data-col="${col}"]`); // Ambil elemen berdasarkan data-row dan data-col

    // Update atribut data
    playerEl.setAttribute("data-row", row);
    playerEl.setAttribute("data-col", col);

    // Reset warna
    playerEl.classList.remove("bg-white"); // Pastikan menghapus bg-white jika ada
    playerEl.classList.add("bg-blue-500"); // Tambahkan bg-blue-500 ke posisi yang baru
    resetEl.classList.add("hidden");
  });

  function karakterGerak(e) {
    resetEl.classList.remove("hidden");
    // Simpan nilai awal untuk validasi
    const oldRow = row;
    const oldCol = col;

    if (e.key === "ArrowUp") row--;
    if (e.key === "ArrowDown") row++;
    if (e.key === "ArrowLeft") col--;
    if (e.key === "ArrowRight") col++;

    if (isValidMove(row, col)) {
      // Hapus class dari posisi lama
      playerEl.classList.remove("bg-blue-500");
      playerEl.classList.add("bg-white");

      // Update playerEl ke posisi baru
      playerEl = document.querySelector(`[data-row="${row}"][data-col="${col}"]`);
      playerEl.classList.remove("bg-white");
      playerEl.classList.add("bg-blue-500");

      cekKemenangan();
    } else {
      // Balikin posisi row & col
      row = oldRow;
      col = oldCol;
    }
  }

  function isValidMove(row, col) {
    if (row < 0 || col < 0 || row >= 5 || col >= 5) {
      alert("Kamu terkena dinding");
      return false;
    }

    const nextCell = document.querySelector(`[data-row="${row}"][data-col="${col}"]`);
    if (nextCell.classList.contains("bg-gray-400")) {
      alert("Kamu terkena dinding");
      return false;
    }

    return true;
  }

  function cekKemenangan() {
    if (row === 4 && col === 4) {
      playerEl.classList.remove("bg-blue-500");
      playerEl.classList.add("bg-green-500");
      alert("kamu menang");
    }
  }
};
