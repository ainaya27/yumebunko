document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelector('.slides');
    const nextBtn = document.querySelector('.next');
    const prevBtn = document.querySelector('.prev');
    const dots = document.querySelectorAll('.dot');
    let counter = 0;
    const size = dots.length;
    let timer; // Untuk menyimpan interval autoplay

    function updateSlider() {
        slides.style.transform = `translateX(${-100 * counter}%)`;
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === counter);
        });
    }

    // FUNGSI CLICKS PADA DOTS
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            counter = index;
            updateSlider();
            resetTimer(); // Reset waktu kalau user klik manual
        });
    });

    // FUNGSI NEXT & PREV
    nextBtn.addEventListener('click', () => {
        counter = (counter + 1) % size; // Balik ke 0 kalau sudah habis
        updateSlider();
        resetTimer();
    });

    prevBtn.addEventListener('click', () => {
        counter = (counter - 1 + size) % size; // Balik ke akhir kalau di awal
        updateSlider();
        resetTimer();
    });

    // FUNGSI AUTOPLAY (Ganti 10000 untuk 10 detik)
    function startTimer() {
        timer = setInterval(() => {
            counter = (counter + 1) % size;
            updateSlider();
        }, 10000); // 10 detik
    }

    function resetTimer() {
        clearInterval(timer);
        startTimer();
    }

    startTimer(); // Jalankan pertama kali
});