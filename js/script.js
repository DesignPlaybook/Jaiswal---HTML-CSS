document.addEventListener("DOMContentLoaded", function () {
    // ============================
    // 🏆 DROPDOWN LOGIC 🏆
    // ============================

    const dropdowns = document.querySelectorAll('.dropdown');

    function closeAllDropdowns() {
        dropdowns.forEach(dropdown => {
            const content = dropdown.querySelector('.dropdown-content');
            if (content) {
                content.style.display = 'none';
                content.style.opacity = '0';
                content.style.transform = 'translateY(10px)';
            }
        });
    }

    dropdowns.forEach(dropdown => {
        const link = dropdown.querySelector('.dropbtn');

        if (!link) return;

        link.addEventListener('click', function (e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                const content = dropdown.querySelector('.dropdown-content');
                if (!content) return;

                if (content.style.display === 'block') {
                    // Close if open
                    content.style.display = 'none';
                    content.style.opacity = '0';
                    content.style.transform = 'translateY(10px)';
                } else {
                    // Close others first
                    closeAllDropdowns();
                    // Open this one
                    content.style.display = 'block';
                    setTimeout(() => {
                        content.style.opacity = '1';
                        content.style.transform = 'translateY(0)';
                    }, 10);
                }
            }
        });
    });

    // Close dropdowns when clicking outside (only for mobile)
    document.addEventListener('click', function (event) {
        if (window.innerWidth <= 768) {
            const isDropdown = event.target.closest('.dropdown');
            if (!isDropdown) {
                closeAllDropdowns();
            }
        }
    });

    // ============================
    // 🏆 FULL PAGE MENU ANIMATION �
    // ============================
  var burger = document.getElementById("burger");
var overlay = document.getElementById("full-menu");
var showMenu = false;
var scrollPos = 0;

burger.addEventListener("click", function () {
    showMenu = !showMenu;

    if (showMenu) {
        // Save scroll position and prevent background scroll
        scrollPos = window.scrollY;
        document.body.classList.add("no-scroll");
        document.body.style.top = `-${scrollPos}px`;

        burger.classList.add("active");
        overlay.style.display = "block";

        setTimeout(function () {
            overlay.classList.add("open");
        }, 10);
    } else {
        // Allow transition to finish before removing scroll lock
        burger.classList.remove("active");
        overlay.classList.remove("open");

        setTimeout(function () {
            overlay.style.display = "none";

            // Restore scroll
            document.body.classList.remove("no-scroll");
            document.body.style.top = "";
            window.scrollTo(0, scrollPos);
        }, 600); // Match your transition time
    }
});

    // ============================
    // 🏆 HERO ANIMATION �
    // ============================

    const heroArticles = document.querySelectorAll('main article');
    let currentHeroIndex = 0;
    const animationDuration = 500; // ms
    const displayDuration = 3000; // ms

    // Initial setup
    heroArticles.forEach((article, index) => {
        const h2 = article.querySelector('h2');
        const h1 = article.querySelector('h1');
        const hi = article.querySelector('.hero-image');

        article.style.position = 'absolute';
        article.style.top = 0;
        article.style.left = 0;
        article.style.width = '100%';
        article.style.transition = 'opacity 2s ease';
        article.style.opacity = '0';
        article.style.zIndex = 0;

        if (index === 0) {
            article.style.opacity = '1';
            article.style.zIndex = 1;
            h2.style.clipPath = 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)';
            h1.style.clipPath = 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)';
            if (hi) hi.style.clipPath = 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)';
        } else {
            h2.style.clipPath = 'polygon(0 0, 0 0, 0 100%, 0 100%)';
            h1.style.clipPath = 'polygon(0 0, 0 0, 0 100%, 0 100%)';
            if (hi) hi.style.clipPath = 'polygon(0 0, 0 0, 0 100%, 0 100%)';
        }
    });

    function animateHeroTransition() {
        const currentHero = heroArticles[currentHeroIndex];
        const nextHeroIndex = (currentHeroIndex + 1) % heroArticles.length;
        const nextHero = heroArticles[nextHeroIndex];

        const currentH2 = currentHero.querySelector('h2');
        const currentH1 = currentHero.querySelector('h1');
        const currentHi = currentHero.querySelector('.hero-image');

        const nextH2 = nextHero.querySelector('h2');
        const nextH1 = nextHero.querySelector('h1');
        const nextHi = nextHero.querySelector('.hero-image');

        // Prepare next hero
        nextHero.style.zIndex = 2;
        nextHero.style.opacity = '1';

        nextH2.style.transition = `clip-path ${animationDuration}ms ease-out`;
        nextH1.style.transition = `clip-path ${animationDuration}ms ease-out`;
        if (nextHi) nextHi.style.transition = `clip-path ${animationDuration}ms ease-out`;

        nextH2.style.clipPath = 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)';
        nextH1.style.clipPath = 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)';
        if (nextHi) nextHi.style.clipPath = 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)';

        // Animate current out
        currentH2.style.transition = `clip-path ${animationDuration}ms ease-out`;
        currentH1.style.transition = `clip-path ${animationDuration}ms ease-out`;
        if (currentHi) currentHi.style.transition = `clip-path ${animationDuration}ms ease-out`;

        currentH2.style.clipPath = 'polygon(0 0, 0 0, 0 100%, 0 100%)';
        currentH1.style.clipPath = 'polygon(0 0, 0 0, 0 100%, 0 100%)';
        if (currentHi) currentHi.style.clipPath = 'polygon(0 0, 0 0, 0 100%, 0 100%)';

        setTimeout(() => {
            currentHero.style.opacity = '0';
            currentHero.style.zIndex = 0;

            nextHero.style.zIndex = 1;

            currentHeroIndex = nextHeroIndex;
        }, animationDuration);
    }

    let heroInterval = setInterval(animateHeroTransition, displayDuration);

    document.addEventListener('visibilitychange', function () {
        if (document.hidden) {
            clearInterval(heroInterval);
        } else {
            heroInterval = setInterval(animateHeroTransition, displayDuration);
        }
    });
    // ============================
    // 🏆 BRAND SLIDER LOGIC 🏆
    // ============================

    // ============================
    // 🏆 VANILLA JS BRAND SLIDER 🏆
    // ============================

    setTimeout(() => {
        const brandSlider = document.querySelector(".brand-slide-track");
        const slides = Array.from(document.querySelectorAll(".brand-slide"));

        if (brandSlider && slides.length > 0) {
            // Remove GSAP dependency by using vanilla JS to reset styles
            brandSlider.style = ''; // Clear any inline styles

            // Clone slides for infinite loop effect
            slides.forEach((slide) => {
                const clone = slide.cloneNode(true);
                brandSlider.appendChild(clone);
            });

            const slideWidth = 180; // Width of each slide
            const slideGap = 20; // Gap between slides
            const totalSlides = slides.length * 2;

            brandSlider.style.width = `${totalSlides * (slideWidth + slideGap)}px`;

            // Create style element for keyframes
            const styleElement = document.createElement('style');
            document.head.appendChild(styleElement);

            // Add keyframes rule
            styleElement.sheet.insertRule(`
            @keyframes brandScroll {
                0% { transform: translateX(0); }
                100% { transform: translateX(calc(-${(slideWidth + slideGap) * slides.length}px)); }
            }
        `, 0);

            // Apply animation to slider
            brandSlider.style.animation = `brandScroll ${slides.length * 3}s linear infinite`;
        }
    }, 500);

    // ============================
    // 🏆 VANILLA JS TESTIMONIAL SLIDER 🏆
    // ============================

    const testimonials = document.querySelectorAll(".custom-testimonial-item");
    const prevButton = document.querySelector(".custom-testimonial-prev");
    const nextButton = document.querySelector(".custom-testimonial-next");
    let currentIndex = 0;
    let autoSlideInterval;

    // Function to show current testimonial
    function showTestimonial(index) {
        // Hide all testimonials
        testimonials.forEach(testimonial => {
            testimonial.classList.remove("active");
            testimonial.style.opacity = "0";
            testimonial.style.transform = "translateX(100%)";
            testimonial.style.transition = "none";
        });

        // Show current testimonial
        testimonials[index].classList.add("active");

        // Smooth fade-in animation
        setTimeout(() => {
            testimonials[index].style.transition = "opacity 0.5s ease, transform 0.5s ease";
            testimonials[index].style.opacity = "1";
            testimonials[index].style.transform = "translateX(0)";
        }, 10);
    }

    // Function for next slide
    function nextSlide() {
        currentIndex = (currentIndex + 1) % testimonials.length;
        showTestimonial(currentIndex);
    }

    // Function for previous slide
    function prevSlide() {
        currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
        showTestimonial(currentIndex);
    }

    // Auto-slide functionality
    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 2000);
    }

    // Initialize slider
    function initSlider() {
        if (testimonials.length > 0) {
            showTestimonial(currentIndex);
            startAutoSlide();

            // Pause auto-slide on hover
            const carousel = document.querySelector(".custom-testimonial-carousel");
            if (carousel) {
                carousel.addEventListener("mouseenter", () => {
                    clearInterval(autoSlideInterval);
                });
                carousel.addEventListener("mouseleave", startAutoSlide);
            }
        }
    }

    // Event listeners for buttons
    if (prevButton && nextButton) {
        prevButton.addEventListener("click", () => {
            clearInterval(autoSlideInterval);
            prevSlide();
            startAutoSlide();
        });

        nextButton.addEventListener("click", () => {
            clearInterval(autoSlideInterval);
            nextSlide();
            startAutoSlide();
        });
    }

    // Initialize the slider
    initSlider();

    // Clean up on window unload
    window.addEventListener("beforeunload", () => {
        clearInterval(autoSlideInterval);
    });
});
