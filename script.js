document.addEventListener("DOMContentLoaded", function () {
    
    // 1. TYPING EFFECT (TETAP SAMA)
    const typingElement = document.getElementById("typing");
    const cursor = document.querySelector(".cursor");

    if (typingElement) {
        const text = "Halo, Saya Damar Arif Ghifari";
        let index = 0;
        const speed = 100;

        function typing() {
            if (index < text.length) {
                typingElement.textContent += text.charAt(index);
                index++;
                setTimeout(typing, speed);
            } else {
                if (cursor) cursor.style.display = "none";
            }
        }
        typing();
    }

    // 2. SCROLL REVEAL (LOOPING & SMOOTH)
    const observerOptions = {
        // Threshold 0.15: Animasi baru jalan kalau 15% elemen masuk layar.
        // Ini mencegah animasi "kaget" kalau baru kena pixel ujung doang.
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            // Kalau elemen masuk layar:
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            } 
            // Kalau elemen KELUAR layar:
            else {
                // Kita cabut kelas 'active' SUPAYA animasi bisa ulang lagi nanti.
                // TAPI, karena CSS kamu sudah ada 'transition', hilangnya bakal pelan-pelan (fade out)
                // Jadi gak bakal glitch/error.
                entry.target.classList.remove("active");
            }
        });
    }, observerOptions);
    // 3. MENU TOGGLE (DIPERBAIKI)
    const menuToggle = document.getElementById('mobile-menu');
    const navList = document.querySelector('.nav-list');

    // Cek apakah elemennya ketemu?
    if (menuToggle && navList) {
        menuToggle.addEventListener('click', () => {
            console.log("Tombol berhasil diklik!"); // Cek di Console browser
            navList.classList.toggle('active');
        });
    } else {
        console.error("ERROR: ID 'mobile-menu' atau Class '.nav-list' tidak ditemukan di HTML!");
    }
    // ... kode menuToggle yang tadi ...

    // --- TAMBAHAN BARU: TUTUP MENU SAAT LINK DIKLIK ---
    
    // 1. Ambil semua link yang ada di dalam nav-list
    const navLinks = document.querySelectorAll('.nav-list a');

    // 2. Pasang kuping (event listener) di setiap link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Hapus class 'active' biar menunya nutup
            navList.classList.remove('active');
            
            // Opsional: Kalau kamu mau logikanya console log
            console.log("Menu ditutup karena link diklik");
        });
    });
    // ... sisa kode hiddenElements biarkan saja ...
    const hiddenElements = document.querySelectorAll(".reveal");
    hiddenElements.forEach((el) => observer.observe(el));
});