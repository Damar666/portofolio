document.addEventListener("DOMContentLoaded", function () {

    // =========================================================
    // 1. SETUP TYPING EFFECT (EFEK MENGETIK)
    // =========================================================
    const typingElement = document.getElementById("typing");
    const cursor = document.querySelector(".cursor");
    const text = "Halo, Saya Damar Arif Ghifari"; // Teks yang mau diketik
    let index = 0;
    const typingSpeed = 100; // Kecepatan mengetik (ms)

    function startTyping() {
        if (typingElement && index < text.length) {
            typingElement.textContent += text.charAt(index);
            index++;
            setTimeout(startTyping, typingSpeed);
        } else {
            // Kalau sudah selesai ngetik, hilangkan kursor (opsional)
            if (cursor) cursor.style.display = "none"; 
        }
    }

    // =========================================================
    // 2. LOGIKA LOADING SCREEN & HOME ANIMATION
    // =========================================================
    const loadingScreen = document.getElementById('loading-screen');
    const progressText = document.getElementById('progress-text');
    const progressLine = document.getElementById('progress-line');

    // Kunci Scroll saat loading berjalan
    document.body.style.overflow = 'hidden';

    let count = 0;
    const loadingInterval = setInterval(() => {
        count++;
        
        // Update angka dan lebar garis
        if (progressText) progressText.innerText = count + "%";
        if (progressLine) progressLine.style.width = count + "%";

        // --- SAAT LOADING SELESAI (100%) ---
        if (count === 100) {
            clearInterval(loadingInterval); // Hentikan hitungan

            // Tunggu sebentar (500ms) lalu jalankan transisi masuk
            setTimeout(() => {
                
                // A. Hilangkan Layar Hitam Loading
                if (loadingScreen) {
                    loadingScreen.classList.add('finish');
                }
                
                // B. Kembalikan Scroll (User bisa scroll lagi)
                document.body.style.overflow = 'auto';

                // C. Panggil Animasi Home (Elemen turun dari atas)
                const homeElements = document.querySelectorAll('.home-anim');
                homeElements.forEach(el => {
                    el.classList.add('show');
                });

                // D. Jalankan TYPING EFFECT (Delay dikit biar pas teks "Halo" sudah turun)
                setTimeout(() => {
                    startTyping(); 
                }, 800); 

            }, 500);
        }
    }, 25); 

    // =========================================================
    // 3. REMOTE HOVER (LOGO -> FOTO)
    // =========================================================
    const myLogo = document.querySelector('.logo');     
    const myPhoto = document.querySelector('.home-image img'); 

    if (myLogo && myPhoto) {
        // Saat Mouse Masuk ke Logo -> Foto Nyala
        myLogo.addEventListener('mouseenter', () => {
            myPhoto.classList.add('active-glow'); 
        });

        // Saat Mouse Keluar dari Logo -> Foto Normal
        myLogo.addEventListener('mouseleave', () => {
            myPhoto.classList.remove('active-glow'); 
        });
    }

    // =========================================================
    // 4. MOBILE MENU (NAVBAR HP)
    // =========================================================
    const menuToggle = document.getElementById('mobile-menu');
    const navList = document.querySelector('.nav-list');

    // A. Fitur Buka/Tutup Menu saat tombol diklik
    if (menuToggle && navList) {
        menuToggle.addEventListener('click', () => {
            navList.classList.toggle('active');
        });
    } else {
        console.error("ERROR: Elemen Menu tidak ditemukan! Cek HTML ID/Class.");
    }

    // B. Fitur Auto-Close (Menu nutup sendiri pas Link diklik)
    const navLinks = document.querySelectorAll('.nav-list a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navList) navList.classList.remove('active');
        });
    });

    // =========================================================
    // 5. SCROLL REVEAL (ANIMASI SAAT DI-SCROLL)
    // =========================================================
    const observerOptions = {
        threshold: 0.15 
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active"); 
            } else {
                entry.target.classList.remove("active"); 
            }
        });
    }, observerOptions);

    const hiddenElements = document.querySelectorAll(".reveal");
    hiddenElements.forEach((el) => observer.observe(el));

});