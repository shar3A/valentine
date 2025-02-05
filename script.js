body {
    background-color: #ffe4e1;
    font-family: 'Comic Sans MS', cursive, sans-serif;
    text-align: center;
    height: 100vh;
    margin: 0;
    overflow: hidden;
}

.container {
    text-align: center;
}

h1 {
    font-size: 3rem;
    color: #ff69b4;
    animation: fadeIn 2s ease-in;
}

.button-container {
    margin-top: 20px;
}

button {
    padding: 15px 30px;
    font-size: 1.5rem;
    border: none;
    border-radius: 12px;
    cursor: pointer;
    background-color: #ff6a6a;
    color: white;
    transition: transform 0.3s;
}

#yes-btn {
    background-color: #ff1493;
}

button:hover {
    transform: scale(1.1);
}

/* The thank-you section is hidden by default */
#celebration {
    display: none;
    height: 100vh;
    background-color: #ffccf9;
    display: flex;
    justify-content: center;
    align-items: center;
}

h2 {
    font-size: 3rem;
    color: #ff69b4;
    animation: fadeIn 1.5s ease-in;
}

/* Animations */
@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}


