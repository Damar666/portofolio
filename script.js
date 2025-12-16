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

    const hiddenElements = document.querySelectorAll(".reveal");
    hiddenElements.forEach((el) => observer.observe(el));
});