let openedGifts = [];


function openGift(number) {

    const gift =
        document.querySelector(
            ".gift" + number
        );


    // If already opened,
    // don't repeat everything

    if (
        gift.classList.contains("open")
    ) {
        return;
    }


    // Open selected gift

    gift.classList.add("open");


    // Save opened gift

    openedGifts.push(number);


    // Celebration

    createConfetti(gift);


    // Check if all gifts opened

    if (
        openedGifts.length === 3
    ) {

        setTimeout(() => {

            showFinalCelebration();

        }, 1200);

    }

}



/* =========================
   CREATE CONFETTI
========================= */

function createConfetti(gift) {

    const symbols = [

        "✨",
        "🌸",
        "⭐",
        "💖",
        "🎉"

    ];


    const rect =
        gift.getBoundingClientRect();


    // Only 18 particles
    // for smooth mobile performance

    for (
        let i = 0;
        i < 18;
        i++
    ) {

        const confetti =
            document.createElement("div");


        confetti.className =
            "confetti";


        confetti.innerHTML =
            symbols[
                Math.floor(
                    Math.random()
                    *
                    symbols.length
                )
            ];


        confetti.style.left =
            (
                rect.left
                +
                Math.random()
                *
                rect.width
            )
            +
            "px";


        confetti.style.top =
            (
                rect.top
                +
                Math.random()
                *
                80
            )
            +
            "px";


        confetti.style.fontSize =
            (
                Math.random()
                *
                15
                +
                15
            )
            +
            "px";


        confetti.style.animationDuration =
            (
                Math.random()
                *
                0.8
                +
                1.4
            )
            +
            "s";


        document.body.appendChild(
            confetti
        );


        setTimeout(() => {

            confetti.remove();

        }, 2500);

    }

}



/* =========================
   FINAL CELEBRATION
========================= */

function showFinalCelebration() {

    const finalMessage =
        document.querySelector(
            ".final-message"
        );


    // Scroll to final message

    finalMessage.scrollIntoView({

        behavior: "smooth",

        block: "center"

    });


    // Extra celebration

    setTimeout(() => {

        createFinalConfetti();

    }, 500);

}



/* =========================
   FINAL CONFETTI
========================= */

function createFinalConfetti() {

    const symbols = [

        "🎉",
        "✨",
        "🌸",
        "💖",
        "⭐"

    ];


    for (
        let i = 0;
        i < 30;
        i++
    ) {

        const confetti =
            document.createElement("div");


        confetti.className =
            "confetti";


        confetti.innerHTML =
            symbols[
                Math.floor(
                    Math.random()
                    *
                    symbols.length
                )
            ];


        confetti.style.left =
            Math.random()
            *
            window.innerWidth
            +
            "px";


        confetti.style.top =
            Math.random()
            *
            200
            +
            "px";


        confetti.style.fontSize =
            (
                Math.random()
                *
                20
                +
                15
            )
            +
            "px";


        confetti.style.animationDuration =
            (
                Math.random()
                *
                1
                +
                1.5
            )
            +
            "s";


        document.body.appendChild(
            confetti
        );


        setTimeout(() => {

            confetti.remove();

        }, 3000);

    }

}