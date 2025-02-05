const yesButton = document.getElementById("yes-btn");
const noButton = document.getElementById("no-btn");
const mainContent = document.getElementById("main-content");
const celebration = document.getElementById("celebration");
const heartsContainer = document.getElementById("hearts-container");

let yesButtonSize = 1.5;

// Handle "No" button click
noButton.addEventListener("click", () => {
    moveNoButton();
});

// Handle "Yes" button click
yesButton.addEventListener("click", () => {
    mainContent.classList.add("hidden");  // Hide the main content
    celebration.classList.remove("hidden");  // Show the celebration
    generateHearts();  // Start the floating hearts animation
});

// Function to create floating hearts
function generateHearts() {
    for (let i = 0; i < 30; i++) {
        const heart = document.createElement("div");
        heart.className = "heart";
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.animationDelay = `${Math.random() * 2}s`;
        heart.style.animationDuration = `${3 + Math.random() * 2}s`;
        heartsContainer.appendChild(heart);
    }
}

// Function to move the "No" button randomly
function moveNoButton() {
    const randomTop = Math.random() * 80;  // 80% max to keep it in view
    const randomLeft = Math.random() * 80;

    noButton.style.position = "absolute";
    noButton.style.top = `${randomTop}vh`;
    noButton.style.left = `${randomLeft}vw`;
}
