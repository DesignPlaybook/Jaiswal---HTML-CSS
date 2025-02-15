document.addEventListener("DOMContentLoaded", function () {
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
        defaults: { overwrite: false } // ✅ Prevent GSAP from overriding brand slider
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
            // ✅ Prevent GSAP from affecting brand slider
            gsap.set(".brand-slide-track", { clearProps: "all" });

            // ✅ Clone slides to create infinite loop effect
            slides.forEach((slide) => {
                const clone = slide.cloneNode(true);
                brandSlider.appendChild(clone);
            });

            // ✅ Calculate correct total width including gaps
            const slideWidth = 180 ; // Width of each slide
            const slideGap = 20; // Gap between slides
            const totalSlides = slides.length * 2; // Original + Clones

            // ✅ Set width for smooth scrolling
            brandSlider.style.width = `${totalSlides * (slideWidth + slideGap)}px`;

            // ✅ Update CSS animation dynamically
            const styleSheet = document.styleSheets[0];
            styleSheet.insertRule(
                `@keyframes brandScroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(calc(-${(slideWidth + slideGap) * slides.length}px)); }
                }`,
                styleSheet.cssRules.length
            );
        }
    }, 500); // ✅ Delay ensures GSAP initializes first

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

        // Auto-scroll every 6 seconds
        setInterval(() => {
            currentIndex = (currentIndex + 1) % testimonials.length;
            updateTestimonial(currentIndex);
        }, 6000);

        // Initialize first testimonial
        updateTestimonial(currentIndex);
    }
});
