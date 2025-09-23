tailwind.config = { darkMode: 'class' }
AOS.init();

const html = document.documentElement;
const btn = document.getElementById("themeToggle");
btn.addEventListener("click", () => {
    if (html.classList.contains("dark")) {
        html.classList.remove("dark");
        btn.innerHTML = "🌙 Modo Escuro";
    } else {
        html.classList.add("dark");
        btn.innerHTML = "☀️ Modo Claro";
    }
});

const swiper = new Swiper(".swiper", {
    loop: false,
    centeredSlides: true,
    grabCursor: true,
    effect: "coverflow",
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        320: { slidesPerView: 1 },
        768: { slidesPerView: 1.5, spaceBetween: 30 },
        1024: { slidesPerView: 2.5, spaceBetween: 40 },
    },
});

const checkbox = document.getElementById('abrir-modal');
const audio = document.getElementById('modalAudio');

checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
        audio.volume = 0.05;
        audio.play();
    } else {
        audio.pause();
        audio.currentTime = 0;
    }
});
