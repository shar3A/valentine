const yesButton = document.getElementById("yes-btn");
const noButton = document.getElementById("no-btn");
const mainContent = document.getElementById("main-content");
const celebration = document.getElementById("celebration");

// Handle "No" button click
noButton.addEventListener("click", () => {
    moveNoButton();
});

// Handle "Yes" button click
yesButton.addEventListener("click", () => {
    mainContent.style.display = "none";  // Hide the main content
    celebration.style.display = "flex";  // Show the thank-you section
});

// Function to move the "No" button randomly
function moveNoButton() {
    const randomTop = Math.random() * 80;  // Keep it within the screen view
    const randomLeft = Math.random() * 80;

    noButton.style.position = "absolute";
    noButton.style.top = `${randomTop}vh`;
    noButton.style.left = `${randomLeft}vw`;
}
