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

document.addEventListener('DOMContentLoaded', () => {
    // Disable right-click
    document.addEventListener('contextmenu', event => event.preventDefault());

    // Dissable Shortcut
    document.onkeydown = function(e) {
        if (
            e.keyCode == 123 ||  // F12
            (e.ctrlKey && e.shiftKey && e.keyCode == 73) ||  // Ctrl+Shift+I
            (e.ctrlKey && e.shiftKey && e.keyCode == 74) ||  // Ctrl+Shift+J
            (e.ctrlKey && e.keyCode == 85) ||  // Ctrl+U
            (e.ctrlKey && e.keyCode == 83) ||  // Ctrl+S
            (e.ctrlKey && e.shiftKey && e.keyCode == 67)  // Ctrl+Shift+C
        ) {
            e.preventDefault();
            alert('Devtools Terdeteksi, Harap Tutup Segera')
            return false;
        }
    };

    window.oncontextmenu = function(event) {
        event.preventDefault();
        alert('Halaman Ini Tidak Membolehkan Anda Untuk Melakukan Tindakan Klik Kanan Pada Mouse!!')
        return false;
    };

    window.addEventListener('resize', function() {
        if (window.outerWidth - window.innerWidth > 200 || window.outerHeight - window.innerHeight > 200) {
            window.close();
        }
    });

    const devtools = function() {
        let element = new Image();
        Object.defineProperty(element, 'id', {
            get: function() {
                throw 'DevTools is opened';
            }
        });

        setInterval(function() {
            console.profile();
            console.profileEnd();
            if (console.clear) {
                console.clear();
            }
        }, 1000);
    };

    try {
        devtools();
    } catch (err) {
        alert('DevTools is opened. Please close it!');
        window.close();
    }
});