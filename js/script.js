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
    // 🏆 HERO SECTION ANIMATION 🏆
    // ============================

    let burger = document.getElementById("burger");
    let overlay = document.querySelector("#full-menu");
    let showMenu = false;

    if (burger && overlay) {
        overlay.style.display = "none";

        burger.addEventListener("click", () => {
            showMenu = !showMenu;
            if (showMenu) {
                burger.classList.add("active");
                overlay.style.display = "block";
                gsap.to(overlay, 1, {
                    clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
                    ease: "expo.in"
                });
            } else {
                burger.classList.remove("active");
                gsap.to(overlay, 1, {
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
                    ease: "expo.out",
                    onComplete: () => (overlay.style.display = "none")
                });
            }
        });
    }

    gsap.set(["#hero-1 h2, #hero-1 h1"], {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
    });

    gsap.set(
        [
            `#hero-2 h2, #hero-3 h2, #hero-4 h2, #hero-5 h2, #hero-6 h2,
             #hero-2 h1, #hero-3 h1, #hero-4 h1, #hero-5 h1, #hero-6 h1`
        ],
        {
            clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)"
        }
    );

    let i = 1;
    let tl = gsap.timeline({
        repeat: -1,
        yoyo: true,
        ease: "expo.out",
        defaults: { overwrite: false }
    });

    while (i < 6) {
        tl.to(`#hero-${i} h2`, 0.9, {
            clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)"
        })
            .to(`#hero-${i} h1`, 0.9, {
                clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)"
            }, "-=0.3")
            .to(`#hero-${i} .hi-${i}`, 0.7, {
                clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)"
            }, "-=1")
            .to(`#hero-${i + 1} h2`, 0.9, {
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
            })
            .to(`#hero-${i + 1} h1`, 0.9, {
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
            }, "-=0.3");

        i++;
    }

    // ============================
    // 🏆 BRAND SLIDER LOGIC 🏆
    // ============================

    setTimeout(() => {
        const brandSlider = document.querySelector(".brand-slide-track");
        const slides = Array.from(document.querySelectorAll(".brand-slide"));

        if (brandSlider && slides.length > 0) {
            gsap.set(".brand-slide-track", { clearProps: "all" });

            slides.forEach((slide) => {
                const clone = slide.cloneNode(true);
                brandSlider.appendChild(clone);
            });

            const slideWidth = 180; // Width of each slide
            const slideGap = 20; // Gap between slides
            const totalSlides = slides.length * 2;

            brandSlider.style.width = `${totalSlides * (slideWidth + slideGap)}px`;

            const styleSheet = document.styleSheets[0];
            styleSheet.insertRule(
                `@keyframes brandScroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(calc(-${(slideWidth + slideGap) * slides.length}px)); }
                }`,
                styleSheet.cssRules.length
            );
        }
    }, 500);

    // ============================
    // 🏆 TESTIMONIAL SLIDER 🏆
    // ============================

    const testimonials = document.querySelectorAll(".custom-testimonial-item");
    const prevButton = document.querySelector(".custom-testimonial-prev");
    const nextButton = document.querySelector(".custom-testimonial-next");

    let currentIndex = 0;

    function updateTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            testimonial.classList.remove("active");
            if (i === index) {
                testimonial.classList.add("active");
            }
        });
    }

    if (prevButton && nextButton) {
        prevButton.addEventListener("click", function () {
            currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
            updateTestimonial(currentIndex);
        });

        nextButton.addEventListener("click", function () {
            currentIndex = (currentIndex + 1) % testimonials.length;
            updateTestimonial(currentIndex);
        });

        setInterval(() => {
            currentIndex = (currentIndex + 1) % testimonials.length;
            updateTestimonial(currentIndex);
        }, 6000);

        updateTestimonial(currentIndex);
    }
});
