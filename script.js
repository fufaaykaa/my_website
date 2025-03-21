document.addEventListener("DOMContentLoaded", function () {
    function setupSlideshow(slideshowId) {
        let slideIndex = 0;
        const slideshow = document.getElementById(slideshowId);
        if (!slideshow) return;

        const slides = slideshow.querySelectorAll(".slide");
        const prevButton = slideshow.querySelector(".prev");
        const nextButton = slideshow.querySelector(".next");

        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.classList.remove("active");
                if (i === index) {
                    slide.classList.add("active");
                }
            });
        }

        function changeSlide(direction) {
            slideIndex += direction;
            if (slideIndex >= slides.length) slideIndex = 0;
            if (slideIndex < 0) slideIndex = slides.length - 1;
            showSlide(slideIndex);
        }

        if (prevButton && nextButton) {
            prevButton.addEventListener("click", () => changeSlide(-1));
            nextButton.addEventListener("click", () => changeSlide(1));
        }

        setInterval(() => changeSlide(1), 3000);
        showSlide(slideIndex);
    }

    setupSlideshow("slideshow-left");
    setupSlideshow("slideshow-right");

    // Collapsible Sections
    document.querySelectorAll(".collapsible").forEach(button => {
        button.addEventListener("click", function () {
            this.classList.toggle("active");
            let content = this.nextElementSibling;
            content.style.display = content.style.display === "block" ? "none" : "block";
        });
    });


    // --- Collapsible Feature Details ---
    const featureCircles = document.querySelectorAll(".feature-circle2");
    featureCircles.forEach(circle => {
        circle.addEventListener("click", function () {
            let details = this.nextElementSibling;
            details.classList.toggle("hidden");
        });
    });

    // --- Starfield Animation ---
    const canvas = document.getElementById('starfield');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        let stars = [];
        const STAR_COUNT = 150;

        function createStars() {
            stars = [];
            for (let i = 0; i < STAR_COUNT; i++) {
                const x = Math.random() * canvas.width;
                const y = Math.random() * canvas.height;
                const radius = Math.random() * 2;
                const alpha = Math.random() * 0.5 + 0.5;
                const flickerSpeed = Math.random() * 0.03 + 0.01;
                stars.push({ x, y, radius, alpha, flickerSpeed });
            }
        }

        createStars();

        function animate() {
            requestAnimationFrame(animate);
            ctx.fillStyle = 'black';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            stars.forEach(star => {
                star.alpha += star.flickerSpeed;
                if (star.alpha <= 0.3 || star.alpha >= 1) {
                    star.flickerSpeed = -star.flickerSpeed;
                }

                ctx.beginPath();
                ctx.arc(star.x, star.y, star.radius, 0, 2 * Math.PI);
                ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
                ctx.fill();
            });
        }

        animate();
    }
});
