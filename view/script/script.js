// Fungsi untuk Toggle Menu Hamburger
function toggleMenu() {
    const menu = document.getElementById('navbar-menu'); // Mengambil elemen dengan id 'navbar-menu'
    menu.classList.toggle('show'); // Menambah atau menghapus kelas 'show' untuk menampilkan atau menyembunyikan menu
}

// Menambahkan event listener saat konten dokumen selesai dimuat
document.addEventListener("DOMContentLoaded", function () {
    const openPopupBtns = document.querySelectorAll("#openPopupBtn"); // Mengambil semua elemen dengan id 'openPopupBtn' (dalam bentuk NodeList)
    const popup = document.getElementById("customPopup"); // Mengambil elemen popup dengan id 'customPopup'
    const closePopupBtn = document.getElementById("closePopupBtn"); // Mengambil elemen tombol tutup popup dengan id 'closePopupBtn'

    // Menambahkan event listener untuk membuka popup pada setiap tombol openPopupBtn
    openPopupBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            popup.style.display = "flex"; // Menampilkan popup dengan mengubah gaya display menjadi 'flex'
        });
    });

    // Menambahkan event listener untuk tombol tutup popup
    closePopupBtn.addEventListener("click", () => {
        popup.style.display = "none"; // Menyembunyikan popup dengan mengubah gaya display menjadi 'none'
    });

    // Menambahkan event listener untuk menutup popup ketika klik di luar area popup
    window.addEventListener("click", (event) => {
        if (event.target === popup) { // Mengecek apakah klik terjadi di luar area popup
            popup.style.display = "none"; // Menyembunyikan popup jika klik terjadi di luar popup
        }
    });
});
