const yesButton = document.getElementById("yes-btn");
const noButton = document.getElementById("no-btn");
const mainContent = document.getElementById("main-content");
const thankYouSection = document.getElementById("thank-you-section");

// When "Yes" is clicked, hide the question and show the thank-you message
yesButton.addEventListener("click", () => {
    mainContent.classList.add("hidden");  // Hide the main content
    thankYouSection.classList.remove("hidden");  // Show thank-you section
});

// Move the "No" button randomly on click
noButton.addEventListener("click", () => {
    const randomTop = Math.random() * 80;
    const randomLeft = Math.random() * 80;

    noButton.style.position = "absolute";
    noButton.style.top = `${randomTop}vh`;
    noButton.style.left = `${randomLeft}vw`;
});
