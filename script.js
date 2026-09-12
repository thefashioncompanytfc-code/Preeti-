const button = document.getElementById("celebrateBtn");
const confettiContainer = document.getElementById("confetti-container");

button.addEventListener("click", function () {

    for (let i = 0; i < 60; i++) {

        const confetti = document.createElement("span");

        confetti.classList.add("confetti");

        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.animationDelay = Math.random() * 0.5 + "s";

        confettiContainer.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 4000);
    }
});
