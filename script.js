const yesButton = document.getElementById("yes-btn");
const noButton = document.getElementById("no-btn");
const mainContent = document.getElementById("main-content");
const celebration = document.getElementById("celebration");

// Move the "No" button around the screen randomly
noButton.addEventListener("click", () => {
    moveNoButton();
});

// When "Yes" is clicked, hide the question and show thank-you message
yesButton.addEventListener("click", () => {
    mainContent.style.display = "none";  // Hide the question section
    celebration.style.display = "flex";  // Show the thank-you section
});

// Function to move "No" button randomly
function moveNoButton() {
    const randomTop = Math.random() * 80;
    const randomLeft = Math.random() * 80;

    noButton.style.position = "absolute";
    noButton.style.top = `${randomTop}vh`;
    noButton.style.left = `${randomLeft}vw`;
}

