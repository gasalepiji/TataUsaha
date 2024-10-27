// Hamburger
function toggleMenu() {
    const menu = document.getElementById('navbar-menu');
    menu.classList.toggle('show');
}

// Popup
document.addEventListener("DOMContentLoaded", function () {
    const openPopupBtns = document.querySelectorAll("#openPopupBtn");
    const popup = document.getElementById("customPopup");
    const closePopupBtn = document.getElementById("closePopupBtn");

    openPopupBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            popup.style.display = "flex";
        });
    });

    closePopupBtn.addEventListener("click", () => {
        popup.style.display = "none";
    });

    window.addEventListener("click", (event) => {
        if (event.target === popup) {
            popup.style.display = "none";
        }
    });
});
