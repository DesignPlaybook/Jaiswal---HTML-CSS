const tourData = [
    { title: "Cambodia", description: "Starting at ₹70,000 ", image: "../images/cambodia.jpg" },
    { title: "Baku", description: "Starting at ₹45,000 ", image: "../images/baku.png" },
    { title: "South Africa", description: "Starting at ₹90,000 ", image: "../images/safrica.jpg" },
    { title: "Thailand", description: "Starting at ₹20,000 ", image: "../images/thailand.jpg" },
    { title: "Europe", description: "Starting at ₹2,00,000 ", image: "../images/eiffel.jpg" },
    { title: "Dubai", description: "Starting at ₹30,000 ", image: "../images/dubai.jpg" },
    { title: "Bali", description: "Starting at ₹35,000 ", image: "../images/bali.jpg" },
    { title: "Vietnam", description: "Starting at ₹30,000 ", image: "../images/vietnam.jpg" },
    { title: "Maldives", description: "Starting at ₹1,00,000 ", image: "../images/maldives.jpg" },
    { title: "Singapore-Malaysia", description: "Starting at ₹45,000 ", image: "../images/singapore.jpg" },
    { title: "London", description: "Starting at ₹80,000 ", image: "../images/london.jpg" },
    { title: "Turkey", description: "Starting at ₹1,00,000 ", image: "../images/turkey.jpg" },
    { title: "Australia", description: "Starting at ₹75,000 ", image: "../images/australia.jpg" },
    { title: "Japan", description: "Starting at ₹1,50,000 ", image: "../images/japan.jpg" },
];

const tourPackagesContainer = document.getElementById("tourPackages");

// Generate cards dynamically
tourData.forEach((tour, index) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.id = tour.title.toLowerCase().replace(/\s+/g, "-"); // Convert title to lowercase and replace spaces with '-'
    card.style.animationDelay = `${index * 0.2}s`;

    const costMatch = tour.description.match(/₹[\d,]+/);
    const cost = costMatch ? costMatch[0] : "";
    const descriptionText = tour.description.replace(cost, "").trim();
    card.innerHTML = `
        <img src="${tour.image}" alt="${tour.title}">
        <div class="card-content">
            <h3 class="card-title">${tour.title}</h3>
            <p class="card-description">
                ${descriptionText}<br><b class="cost">${cost}<br></b>
                <span class="star">*</span>T&C apply
            </p>
            <a href="contact.html" target="_blank" class="card-button">Book Now</a>
        </div>
    `;

    tourPackagesContainer.appendChild(card);
});

// Select all buttons with the class 'card-button'
// const cardButtons = document.querySelectorAll(".card-button");

// // Function to change background and hover color
// function changeButtonColors(backgroundColor, hoverColor) {
//     cardButtons.forEach((button) => {
//         // Set the background color directly
//         button.style.backgroundColor = backgroundColor;

//         // Set hover effect using CSS variables or custom style
//         button.addEventListener("mouseover", () => {
//             button.style.backgroundColor = hoverColor;
//         });

//         button.addEventListener("mouseout", () => {
//             button.style.backgroundColor = backgroundColor;
//         });
//     });
// }

// // Example usage:
// changeButtonColors("var(--logo-blue6)", "var(--logo-green1)");  // Change button color to blue and hover to green

// Scroll animation logic
const observeCards = () => {
    const cards = document.querySelectorAll(".card");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible"); // Add visible class when in view
                    observer.unobserve(entry.target); // Stop observing once visible
                }
            });
        },
        { threshold: 0.1 }
    );

    cards.forEach((card) => observer.observe(card));
};

// Add scroll event listener
window.addEventListener("load", observeCards);
