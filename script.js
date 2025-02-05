const yesButton = document.getElementById("yes-btn");
const noButton = document.getElementById("no-btn");

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
    alert("YAYYYY THANK YOUUU BABYYY BE READYYYY 😘💖");
});
