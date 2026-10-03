/* =========================================================
   PREETI BIRTHDAY WEBSITE
   MAIN INTERACTION SCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       ELEMENTS
    ====================================================== */

    const curtainContainer = document.getElementById("curtain-container");
    const leftCurtain = document.getElementById("left-curtain");
    const rightCurtain = document.getElementById("right-curtain");

    const openingMessage = document.getElementById("opening-message");
    const startButton = document.getElementById("start-button");

    const candleMessage = document.getElementById("candle-message");
    const blowButton = document.getElementById("blow-button");

    const nextScene = document.getElementById("next-scene");
    const continueButton = document.getElementById("continue-button");

    const birthdayGirl = document.querySelector(".birthday-girl");

    const flames = document.querySelectorAll(".flame");

    const confettiContainer =
        document.getElementById("confetti-container");


    /* =====================================================
       INITIAL STATE
    ====================================================== */

    let curtainsOpened = false;
    let candlesBlown = false;

    // Prevent scrolling during the cinematic opening.
    document.body.classList.add("opening-active");


    /* =====================================================
       OPEN CURTAINS
    ====================================================== */

    function openCurtains() {

        if (curtainsOpened) return;

        curtainsOpened = true;

        // Hide opening button.
        openingMessage.classList.add("fade-out");

        // Small delay before curtain movement.
        setTimeout(() => {

            curtainContainer.classList.add("curtains-opening");

            leftCurtain.classList.add("curtain-open-left");
            rightCurtain.classList.add("curtain-open-right");

        }, 300);


        // Reveal birthday scene.
        setTimeout(() => {

            document.body.classList.remove("opening-active");

            document.body.classList.add("birthday-revealed");

            revealBirthdayCharacters();

        }, 2200);


        // Show candle instruction.
        setTimeout(() => {

            candleMessage.classList.remove("hidden");
            candleMessage.classList.add("message-show");

        }, 3500);
    }


    /* =====================================================
       CHARACTER REVEAL
    ====================================================== */

    function revealBirthdayCharacters() {

        const characters =
            document.querySelectorAll(".character");

        characters.forEach((character, index) => {

            setTimeout(() => {

                character.classList.add("character-visible");

            }, index * 180);

        });

    }


    /* =====================================================
       BLOW CANDLES
    ====================================================== */

    function blowCandles() {

        if (candlesBlown) return;

        candlesBlown = true;

        // Extinguish every flame.
        flames.forEach((flame, index) => {

            setTimeout(() => {

                flame.classList.add("flame-out");

            }, index * 180);

        });


        // Hide candle instruction.
        candleMessage.classList.add("fade-out");


        // Birthday girl reacts.
        if (birthdayGirl) {

            birthdayGirl.classList.add("birthday-reaction");

        }


        // Confetti celebration.
        setTimeout(() => {

            createConfetti();

        }, 700);


        // Move to next stage.
        setTimeout(() => {

            nextScene.classList.remove("hidden");

            nextScene.classList.add("scene-show");

        }, 1800);

    }


    /* =====================================================
       CONFETTI
    ====================================================== */

    function createConfetti() {

        if (!confettiContainer) return;

        const pieces = 45;

        for (let i = 0; i < pieces; i++) {

            const confetti =
                document.createElement("span");

            confetti.classList.add("confetti-piece");

            // Random horizontal position.
            confetti.style.left =
                Math.random() * 100 + "%";

            // Random animation delay.
            confetti.style.animationDelay =
                Math.random() * 0.8 + "s";

            // Random falling duration.
            confetti.style.animationDuration =
                2.5 + Math.random() * 2.5 + "s";

            // Random size.
            confetti.style.width =
                5 + Math.random() * 6 + "px";

            confetti.style.height =
                8 + Math.random() * 10 + "px";

            // Random rotation.
            confetti.style.transform =
                `rotate(${Math.random() * 360}deg)`;

            confettiContainer.appendChild(confetti);

        }

        // Remove confetti after animation.
        setTimeout(() => {

            confettiContainer.innerHTML = "";

        }, 6000);

    }


    /* =====================================================
       CONTINUE TO NEXT SCENE
    ====================================================== */

    function continueToNextScene() {

        /*
           Scene 2 will be connected here later.

           For now we simply give a small visual
           transition. The actual next scene will be
           added after Scene 1 is finished.
        */

        nextScene.classList.add("scene-exit");

        setTimeout(() => {

            alert(
                "Scene 2 coming next! 🎉"
            );

            nextScene.classList.remove("scene-exit");

        }, 700);

    }


    /* =====================================================
       BUTTON EVENTS
    ====================================================== */

    if (startButton) {

        startButton.addEventListener(
            "click",
            openCurtains
        );

    }


    if (blowButton) {

        blowButton.addEventListener(
            "click",
            blowCandles
        );

    }


    if (continueButton) {

        continueButton.addEventListener(
            "click",
            continueToNextScene
        );

    }


    /* =====================================================
       OPTIONAL: KEYBOARD CONTROL
    ====================================================== */

    document.addEventListener("keydown", (event) => {

        // Space / Enter opens curtains.
        if (
            !curtainsOpened &&
            (
                event.code === "Space" ||
                event.code === "Enter"
            )
        ) {

            event.preventDefault();

            openCurtains();

        }

    });

});
