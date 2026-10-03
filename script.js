// ===============================
// PREETI BIRTHDAY WEBSITE
// Main JavaScript
// ===============================


// ---------- PAGE NAVIGATION ----------

function goToPage(pageId) {
    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    const targetPage = document.getElementById(pageId);

    if (targetPage) {
        targetPage.classList.add("active");
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
}


// ---------- SAD SCREEN ----------

function showSad(sadPageId, nextPageId, delay = 2500) {
    goToPage(sadPageId);

    const sadPage = document.getElementById(sadPageId);

    if (!sadPage) return;

    const button = sadPage.querySelector(".buttons");

    if (button) {
        button.style.display = "none";

        setTimeout(() => {
            button.style.display = "flex";
        }, delay);
    }
}


// ---------- OPENING CURTAINS ----------

window.addEventListener("load", () => {

    const curtains = document.querySelectorAll(".curtain");

    setTimeout(() => {
        curtains.forEach(curtain => {
            curtain.classList.add("open");
        });
    }, 500);

    // Show opening buttons after the intro
    setTimeout(() => {
        const openingButtons = document.getElementById("openingButtons");

        if (openingButtons) {
            openingButtons.style.display = "flex";
        }
    }, 4500);

});


// ---------- OPENING: NOT INTERESTED ----------

function notInterested() {
    showSad("openingSad", "page1", 2500);
}


// ---------- BLESSING VIDEO ----------

const blessingVideo = document.getElementById("blessingVideo");

function startBlessingVideo() {

    goToPage("page3");

    if (blessingVideo) {
        blessingVideo.currentTime = 0;

        const playPromise = blessingVideo.play();

        if (playPromise !== undefined) {
            playPromise.catch(error => {
                console.log("Blessing video could not autoplay:", error);
            });
        }
    }
}


// When blessing video finishes
if (blessingVideo) {

    blessingVideo.addEventListener("ended", () => {
        goToPage("page4");
    });

}


// ---------- SKIP FRIEND ----------

function skipFriend() {
    showSad("friendSad", "page4", 2500);
}


// ---------- WISH VIDEO ----------

const wishVideo = document.getElementById("wishVideo");

function startWishVideo() {

    goToPage("page5");

    if (wishVideo) {
        wishVideo.currentTime = 0;

        const playPromise = wishVideo.play();

        if (playPromise !== undefined) {
            playPromise.catch(error => {
                console.log("Wish video could not autoplay:", error);
            });
        }
    }
}


// ---------- NEXT AFTER WISH ----------

function nextAfterWish() {

    if (wishVideo) {
        wishVideo.pause();
    }

    goToPage("page6");
}


// ---------- FEEDBACK ----------

function goodWebsite() {
    goToPage("page7");
}

function needsWork() {
    goToPage("page8");
}


// ---------- START CAKE CELEBRATION ----------

function goToCake() {
    goToPage("page9");
}


// ---------- CAKE VIDEO ----------

const cakeVideo = document.getElementById("cakeVideo");

function startCakeVideo() {

    goToPage("page10");

    if (cakeVideo) {
        cakeVideo.currentTime = 0;

        const playPromise = cakeVideo.play();

        if (playPromise !== undefined) {
            playPromise.catch(error => {
                console.log("Cake video could not autoplay:", error);
            });
        }
    }
}


// When cake video finishes
if (cakeVideo) {

    cakeVideo.addEventListener("ended", () => {

        const thankYouButton = document.getElementById("thankYouButton");

        if (thankYouButton) {
            thankYouButton.style.display = "flex";
        }

    });

}


// ---------- FINAL PAGE ----------

function showFinalPage() {
    goToPage("page11");
}
