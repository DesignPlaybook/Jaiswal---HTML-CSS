$(document).ready(function () {
    /*** 3️⃣ Customer Counter Animation ***/
    let start = 1000;
    let end = 500000;
    let steps = 100;
    let increment = (end - start) / steps;
    let current = start;
    let counterElement = $('.customer-counter');

    function updateCounter() {
        if (current < end) {
            current += increment;
            counterElement.text(Math.floor(current).toLocaleString());
            requestAnimationFrame(updateCounter);
        } else {
            counterElement.text("5L+");
        }
    }

    // Function to trigger animation when in viewport
    function startCounter() {
        let waypoint = new Waypoint({
            element: counterElement[0],
            handler: function () {
                updateCounter();
                this.destroy(); // Ensures the animation runs only once
            },
            offset: '75%',
        });
    }

    startCounter();

    // Add animations
    counterElement.addClass('animated fadeInDownBig');
    $('.customer-count h3').addClass('animated fadeIn');
});