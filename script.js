const yesButton = document.getElementById("yes-btn");
const noButton = document.getElementById("no-btn");
const mainContent = document.getElementById("main-content");
const thankYouSection = document.getElementById("thank-you-section");

// When "Yes" is clicked, show the thank-you section
yesButton.addEventListener("click", () => {
    mainContent.style.display = "none";  // Hide the question
    thankYouSection.style.display = "flex";  // Show the thank-you section
});

// Move the "No" button randomly
noButton.addEventListener("click", () => {
    const randomTop = Math.random() * 80;  // Random vertical position
    const randomLeft = Math.random() * 80;  // Random horizontal position

    noButton.style.position = "absolute";
    noButton.style.top = `${randomTop}vh`;
    noButton.style.left = `${randomLeft}vw`;
});
