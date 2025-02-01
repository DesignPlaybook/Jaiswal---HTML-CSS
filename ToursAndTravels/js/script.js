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
          const slideWidth = 250; // Width of each slide
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

  const testimonials = [
      {
          name: 'Sunita Agarwal',
          position: 'Client',
          text: "The team at Jaiswal Holidays truly knows how to create magical experiences! Our family trip to Kerala was seamless, with affordable pricing and luxurious hotels. From houseboat stays to backwater cruises, everything was perfectly planned. I highly recommend them for stress-free travel!",
      },
      {
          name: 'Arjun Mehta',
          position: 'Client',
          text: "I booked an international tour to Singapore with Jaiswal Holidays, and it exceeded my expectations. The itinerary was well-organized, the hotels were premium, and the team ensured we had everything we needed. They truly make travel affordable and unforgettable. Kudos to the team!",
      },
      {
          name: 'Pooja Verma',
          position: 'Client',
          text: "As someone who travels frequently, I was amazed at how Jaiswal Holidays catered to every detail of our Rajasthan tour. From luxurious heritage stays to excellent customer service, everything was spot-on. The affordability of their packages is just the cherry on top!",
      },
      {
          name: 'Rajesh Kumar',
          position: 'Client',
          text: "My wife and I wanted a peaceful vacation in the Andaman Islands, and Jaiswal Holidays delivered exactly that. The staff was polite, and the itinerary included all the major attractions. The branded hotels added a touch of luxury to our trip. Highly recommended!",
      },
      {
          name: 'Priya Sharma',
          position: 'Client',
          text: "Traveling with Jaiswal Holidays is like experiencing a blend of comfort and adventure. Our trip to Manali was unforgettable, with cozy hotels and affordable pricing. The team ensured every moment was special, and I can’t wait to book my next trip with them!",
      },
  ];
  

  let currentIndex = 0;

  function updateTestimonial() {
      const testimonial = document.querySelector('.testimonial');
      const username = document.querySelector('.username');
      const role = document.querySelector('.role');

      if (testimonial && username && role) {
          const { text, name, position } = testimonials[currentIndex];
          testimonial.textContent = text;
          username.textContent = name;
          role.textContent = position;

          // ✅ Move to the next testimonial
          currentIndex = (currentIndex + 1) % testimonials.length;
      }
  }

  function startTestimonialSlider() {
      const progressBar = document.querySelector('.progress-bar');

      if (progressBar) {
          updateTestimonial();
          progressBar.style.animation = 'grow 10s linear infinite';

          setInterval(() => {
              progressBar.style.animation = 'none';
              updateTestimonial();
              setTimeout(() => {
                  progressBar.style.animation = 'grow 10s linear infinite';
              }, 50);
          }, 10000);
      }
  }

  startTestimonialSlider();
});
