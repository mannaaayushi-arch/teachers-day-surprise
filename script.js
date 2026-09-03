/* =====================================================
   TEACHER'S DAY GIFT BOX SCRIPT
===================================================== */


/* =====================================================
   OPEN / CLOSE GIFT
===================================================== */

function openGift(number) {

    const gift = document.querySelector(".gift" + number);

    if (!gift) {
        return;
    }

    /*
       If another box is already open,
       close it first.
    */

    document.querySelectorAll(".gift.open").forEach(function (otherGift) {

        if (otherGift !== gift) {
            otherGift.classList.remove("open");
        }

    });


    /*
       Open / close the selected gift.
    */

    gift.classList.toggle("open");


    /*
       When opening a gift, create little
       floating hearts and flowers.
    */

    if (gift.classList.contains("open")) {

        createCelebration(gift);

    }

}


/* =====================================================
   KEYBOARD SUPPORT
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const gifts = document.querySelectorAll(".gift");

    gifts.forEach(function (gift) {

        gift.addEventListener("keydown", function (event) {

            if (event.key === "Enter" || event.key === " ") {

                event.preventDefault();

                const number = getGiftNumber(gift);

                if (number) {
                    openGift(number);
                }

            }

        });

    });

});


/* =====================================================
   GET GIFT NUMBER
===================================================== */

function getGiftNumber(gift) {

    const numberElement =
        gift.querySelector(".gift-number");

    if (!numberElement) {
        return null;
    }

    return parseInt(
        numberElement.textContent.trim()
    );

}


/* =====================================================
   FLOATING CELEBRATION
===================================================== */

function createCelebration(gift) {

    const symbols = [
        "❤️",
        "💖",
        "💕",
        "🌸",
        "✨",
        "🌷",
        "💗",
        "⭐"
    ];


    for (let i = 0; i < 8; i++) {

        const item = document.createElement("span");

        item.textContent =
            symbols[
                Math.floor(
                    Math.random() * symbols.length
                )
            ];


        item.style.position = "fixed";

        item.style.left =
            (window.innerWidth / 2 +
            (Math.random() * 180 - 90)) + "px";

        item.style.top =
            (window.innerHeight / 2 +
            (Math.random() * 100 - 50)) + "px";


        item.style.fontSize =
            (14 + Math.random() * 15) + "px";

        item.style.pointerEvents = "none";

        item.style.zIndex = "9999";


        item.style.transition =
            "transform 1.5s ease, opacity 1.5s ease";


        document.body.appendChild(item);


        /*
           Start animation on next frame.
        */

        requestAnimationFrame(function () {

            const x =
                Math.random() * 200 - 100;

            const y =
                -80 - Math.random() * 180;

            item.style.transform =
                `translate(${x}px, ${y}px) rotate(${Math.random() * 180 - 90}deg)`;

            item.style.opacity = "0";

        });


        /*
           Remove after animation.
        */

        setTimeout(function () {

            item.remove();

        }, 1600);

    }

}


/* =====================================================
   CLOSE OPEN GIFT WHEN CLICKING OUTSIDE
===================================================== */

document.addEventListener("click", function (event) {

    const clickedGift =
        event.target.closest(".gift");

    if (clickedGift) {
        return;
    }


    /*
       Don't close when clicking inside
       the wish card itself.
    */

    const clickedCard =
        event.target.closest(".wish-card");

    if (clickedCard) {
        return;
    }


    document.querySelectorAll(".gift.open")
        .forEach(function (gift) {

            gift.classList.remove("open");

        });

});


/* =====================================================
   ESC KEY CLOSES GIFT
===================================================== */

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        document.querySelectorAll(".gift.open")
            .forEach(function (gift) {

                gift.classList.remove("open");

            });

    }

});
