// // Main Slider Logic
// const mainSlider = document.querySelector('.slider');
// const items = Array.from(document.querySelectorAll('.item'));
// let autoSlideInterval;

// // Function to move items to the right with smooth transitions
// function moveItemsToRight() {
//   // Add 'hidden' class to the first item and shift it
//   items[0].classList.add('hidden');
//   // Move the first item to the end of the slider
//   mainSlider.append(items[0]);

//   // Wait for the transition to finish before updating the array
//   setTimeout(() => {
//     items.push(items.shift()); // Update the array
//     items[items.length - 1].classList.remove('hidden');
//     items[items.length - 1].classList.add('show');
//   }, 750); // Match the duration of the transition

//   // Reset the auto-slide interval after the transition
//   resetAutoSlide();
// }

// // Function to move items to the left with smooth transitions
// function moveItemsToLeft() {
//   // Add 'hidden' class to the last item and shift it to the front
//   items[items.length - 1].classList.add('hidden');
//   mainSlider.prepend(items[items.length - 1]);

//   // Wait for the transition to finish before updating the array
//   setTimeout(() => {
//     items.unshift(items.pop()); // Update the array
//     items[0].classList.remove('hidden');
//     items[0].classList.add('show');
//   }, 750); // Match the duration of the transition

//   // Reset the auto-slide interval after the transition
//   resetAutoSlide();
// }

// // Arrow click event listener
// document.addEventListener('click', (e) => {
//   if (e.target.closest('.next')) {
//     moveItemsToRight();
//   }
//   if (e.target.closest('.prev')) {
//     moveItemsToLeft();
//   }
// }, false);

// // Auto-slide functionality (moves items automatically)
// function startAutoSlide() {
//   autoSlideInterval = setInterval(() => {
//     moveItemsToRight();  // Automatically move items to the right every 3 seconds
//   }, 3000); // Set the interval for auto-slide (adjust time as needed)
// }

// // Stop auto-slide when hovering over the slider
// mainSlider.addEventListener('mouseenter', () => {
//   clearInterval(autoSlideInterval);  // Stop auto-slide when the user hovers over the slider
// });

// // Restart auto-slide when mouse leaves the slider
// mainSlider.addEventListener('mouseleave', startAutoSlide);

// // Reset and restart the auto-slide interval whenever an item is moved
// function resetAutoSlide() {
//   clearInterval(autoSlideInterval);  // Clear the current auto-slide interval
//   startAutoSlide();  // Start the auto-slide again after clearing
// }

// // Start auto-slide when the page loads
// startAutoSlide();


// Brand Slider Logic
const brandSlider = document.querySelector('.brand-slide-track');
const slides = Array.from(document.querySelectorAll('.brand-slide'));

// Clone slides for seamless loop
slides.forEach((slide) => {
  const clone = slide.cloneNode(true);
  brandSlider.appendChild(clone);
});

// Calculate total slide width and configure animation
const totalSlides = slides.length * 2; // Original + clones
const slideWidth = 250; // Including gaps
brandSlider.style.width = `${totalSlides * slideWidth}px`;

const styleSheet = document.styleSheets[0];
styleSheet.insertRule(
  `@keyframes brandScroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-${slideWidth}px * ${totalSlides / 2}));
    }
  }`,
  styleSheet.cssRules.length
);

// Testimonials Slider Logic
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

  const { text, name, position } = testimonials[currentIndex];

  // Update DOM elements with testimonial data
  testimonial.textContent = text;
  username.textContent = name;
  role.textContent = position;

  // Move to the next testimonial
  currentIndex = (currentIndex + 1) % testimonials.length;
}

function startTestimonialSlider() {
  const progressBar = document.querySelector('.progress-bar');

  // Initial update and animation setup
  updateTestimonial();
  progressBar.style.animation = 'grow 10s linear infinite';

  // Synchronize updates with the progress bar
  setInterval(() => {
    progressBar.style.animation = 'none'; // Temporarily stop the animation
    updateTestimonial(); // Update testimonial content
    setTimeout(() => {
      progressBar.style.animation = 'grow 10s linear infinite'; // Restart the animation
    }, 50); // Delay for proper animation reset
  }, 10000); // Match the interval to the animation duration
}

// Initialize all sliders
startTestimonialSlider();
