const tourData = [
    { title: "Kerala ", description: "Starting at ₹12,500 ", image: "../images/kerala.jpg" },
    { title: "Kashmir ", description: "Starting at ₹11,500 ", image: "../images/kashmir.jpg" },
    { title: "Sikkim ", description: "Starting at ₹17,000 ", image: "../images/sikkim.jpg" },
    { title: "Andaman-Nicobar", description: "Starting at ₹22,000 ", image: "../images/andaman.jpg" },
    { title: "Goa ", description: "Starting at ₹8,000 ", image: "../images/goa.jpg" },
    { title: "Ooty-Coorg", description: "Starting at ₹15,500 ", image: "../images/ooty-coorg.jpg" },
    { title: "Himachal Pradesh ", description: "Starting at ₹30,000 ", image: "../images/himachal-pradesh.jpg" },
    { title: "Shimla-Manali ", description: "Starting at ₹11,500 ", image: "../images/himachal.jpg" },
    { title: "Rajasthan ", description: "Starting at ₹15,000 ", image: "../images/rajasthan.jpg" },
    { title: "Uttarakhand", description: "Starting at ₹14,500 ", image: "../images/utknd.jpg" },
    { title: "Golden Triangle", description: "Starting at ₹16,000 ", image: "../images/golden-triangle.png" },
    { title: "Chardham", description: "Starting at ₹28,000 ", image: "../images/chardham.jpg" },
    { title: "Mahabaleshwar", description: "Starting at ₹5,000 ", image: "../images/mahabaleshwar.jpg" },
    { title: "Bhubaneshwar-Puri", description: "Starting at ₹11,000 ", image: "../images/bhubhaneshvar.jpg" },
    { title: "Nepal", description: "Starting at ₹19,000 ", image: "../images/nepal.jpg" },
    { title: "Lakshadweep", description: "Starting at ₹20,000 ", image: "../images/lakshadweep.jpg" },
    { title: "Rameshwaram", description: "Starting at ₹12,000 ", image: "../images/rameshwaram.jpg" },
    { title: "Gujarat", description: "Starting at ₹13,000 ", image: "../images/gujarat.jpg" },
    { title: "Hyderabad", description: "Starting at ₹10,000 ", image: "../images/charminar.jpg" },
    { title: "Jammu-Amritsar", description: "Starting at ₹11,500 ", image: "../images/jammu-amrit.jpg" },
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
            <a href="https://forms.gle/Hc6kEZvhkK8tifD78" target="_blank" class="card-button">Book Now</a>
        </div>
    `;

    tourPackagesContainer.appendChild(card);
});


// Select all buttons with the class 'card-button'
const cardButtons = document.querySelectorAll(".card-button");

// Function to change background and hover color
function changeButtonColors(backgroundColor, hoverColor) {
    cardButtons.forEach((button) => {
        // Set the background color directly
        button.style.backgroundColor = backgroundColor;

        // Set hover effect using CSS variables or custom style
        button.addEventListener("mouseover", () => {
            button.style.backgroundColor = hoverColor;
        });

        button.addEventListener("mouseout", () => {
            button.style.backgroundColor = backgroundColor;
        });
    });
}

// Example usage:
changeButtonColors("var(--logo-blue6)", "var(--logo-green1)");  // Change button color to orange and hover to dark red


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
