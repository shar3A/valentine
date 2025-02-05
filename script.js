const yesButton = document.getElementById("yes-btn");
const noButton = document.getElementById("no-btn");
const mainContent = document.getElementById("main-content");
const celebration = document.getElementById("celebration");
const heartsContainer = document.getElementById("hearts-container");

let yesButtonSize = 1.5;

// Handle "No" button click
noButton.addEventListener("click", () => {
    yesButtonSize += 0.5;
    yesButton.style.fontSize = `${yesButtonSize}rem`;

    if (yesButtonSize >= 10) {
        yesButton.style.fontSize = "100vh";
        yesButton.innerText = "Yes! 💞";
        noButton.style.display = "none";
    }
});

// Handle "Yes" button click
yesButton.addEventListener("click", () => {
    mainContent.classList.add("hidden");
    celebration.classList.remove("hidden");
    generateHearts();
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
