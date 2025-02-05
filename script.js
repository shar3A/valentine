const yesButton = document.getElementById("yes-btn");
const noButton = document.getElementById("no-btn");
const mainContent = document.getElementById("main-content");
const celebration = document.getElementById("celebration");
const flowersContainer = document.getElementById("flowers-container");

// Handle "No" button click
noButton.addEventListener("click", () => {
    moveNoButton();
});

// Handle "Yes" button click
yesButton.addEventListener("click", () => {
    mainContent.classList.add("hidden");  // Hide the main content
    celebration.classList.remove("hidden");  // Show the celebration
    generateFlowers();  // Start the floating bouquets animation
});

// Function to create floating bouquets
function generateFlowers() {
    for (let i = 0; i < 30; i++) {
        const flower = document.createElement("div");
        flower.className = "flower";
        flower.style.left = `${Math.random() * 100}vw`;
        flower.style.animationDelay = `${Math.random() * 2}s`;
        flower.style.animationDuration = `${4 + Math.random() * 2}s`;
        flowersContainer.appendChild(flower);
    }
}

// Function to move the "No" button randomly
function moveNoButton() {
    const randomTop = Math.random() * 80;  // Keep it within the screen view
    const randomLeft = Math.random() * 80;

    noButton.style.position = "absolute";
    noButton.style.top = `${randomTop}vh`;
    noButton.style.left = `${randomLeft}vw`;
}
