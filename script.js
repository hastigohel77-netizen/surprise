/* =========================================
   HARSHUU SURPRISE WEBSITE
========================================= */


/* =========================================
   SECTION CONTROL
========================================= */

function showSection(sectionId) {

    const sections =
        document.querySelectorAll(
            "section:not(.hero)"
        );

    sections.forEach(section => {

        section.classList.add(
            "hidden-section"
        );

    });


    const selected =
        document.getElementById(sectionId);


    if (selected) {

        selected.classList.remove(
            "hidden-section"
        );


        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }


    createHeartBurst();
}


/* =========================================
   START SURPRISE
========================================= */

function startSurprise() {

    createHeartBurst();

    setTimeout(() => {

        showSection("intro");

    }, 500);

}


/* =========================================
   FLOATING HEARTS
========================================= */

const heartsContainer =
    document.querySelector(
        ".hearts-container"
    );


const heartSymbols = [
    "❤️",
    "💗",
    "💖",
    "💕",
    "💓",
    "💞",
    "💘",
    "✨"
];


function createFloatingHeart() {

    if (!heartsContainer) return;


    const heart =
        document.createElement("div");


    heart.classList.add(
        "floating-heart"
    );


    heart.innerText =
        heartSymbols[
            Math.floor(
                Math.random() *
                heartSymbols.length
            )
        ];


    heart.style.left =
        Math.random() * 100 + "%";


    heart.style.fontSize =
        (15 + Math.random() * 25) + "px";


    heart.style.animationDuration =
        (5 + Math.random() * 6) + "s";


    heart.style.animationDelay =
        Math.random() * 2 + "s";


    heartsContainer.appendChild(
        heart
    );


    setTimeout(() => {

        heart.remove();

    }, 13000);

}


setInterval(
    createFloatingHeart,
    700
);


/* =========================================
   HEART BURST
========================================= */

function createHeartBurst() {

    for (
        let i = 0;
        i < 20;
        i++
    ) {

        setTimeout(() => {

            createFloatingHeart();

        }, i * 60);

    }

}


/* =========================================
   SURPRISE DATA
========================================= */

const surprises = {

    1: {

        icon: "❤️",

        title: "One Little Truth",

        text:
            "Harshuuu, તું perfect છે એટલે નહીં, પણ તારી નાની નાની imperfections સાથે પણ તું જે છે એ જ બહુ special છે. તારી care, તારી મસ્તી અને તારી presence બધું જ દિલને ગમે છે. ❤️"

    },


    2: {

        icon: "🥹",

        title: "Dil Ni Vaat",

        text:
            "ક્યારેક કેટલીય વાતો કહી શકાતી નથી... બસ feel થતી હોય છે. તું મારા માટે એવી જ એક beautiful feeling છે, જેને શબ્દોમાં પૂરી રીતે સમજાવવી મુશ્કેલ છે. 🫶"

    },


    3: {

        icon: "🌹",

        title: "A Special Compliment",

        text:
            "તારી સૌથી સુંદર વાત માત્ર તારી personality નથી... પણ તું જે રીતે પોતાના માણસોની કાળજી રાખે છે, તેમની નાની નાની વાત યાદ રાખે છે અને તેમને મહત્વ આપે છે — એ ખરેખર rare છે. 🌹❤️"

    },


    4: {

        icon: "✨",

        title: "Read This Slowly",

        text:
            "જિંદગીમાં દરેક દિવસ perfect નહીં હોય. ક્યારેક મુશ્કેલ દિવસો પણ આવશે. બસ એટલું યાદ રાખજે કે તારી મહેનત, તારી value અને તારી સારી qualities ક્યારેય નાની નથી થતી. Keep smiling, Harshuuu. ✨❤️"

    }

};


/* =========================================
   OPEN SURPRISE
========================================= */

function openSurprise(number) {

    const data =
        surprises[number];


    const message =
        document.getElementById(
            "surpriseMessage"
        );


    if (message) {

        message.innerHTML = `
            <div style="font-size:45px;">
                ${data.icon}
            </div>

            <h2 style="
                font-family:'Dancing Script';
                font-size:38px;
                margin:10px 0;
            ">
                ${data.title}
            </h2>

            <p>
                ${data.text}
            </p>
        `;


        message.classList.remove(
            "show"
        );


        void message.offsetWidth;


        message.classList.add(
            "show"
        );

    }


    createHeartBurst();

}


/* =========================================
   POPUP
========================================= */

function showPopup(
    icon,
    title,
    text
) {

    const popup =
        document.getElementById(
            "popup"
        );


    document.getElementById(
        "popupIcon"
    ).innerText = icon;


    document.getElementById(
        "popupTitle"
    ).innerText = title;


    document.getElementById(
        "popupText"
    ).innerText = text;


    popup.classList.add(
        "show"
    );

}


function closePopup() {

    document
        .getElementById("popup")
        .classList.remove("show");

}


/* =========================================
   FINAL MAGIC
========================================= */

function finalMagic() {

    createMassiveHeartBurst();

    showPopup(

        "💖",

        "One Last Thing...",

        "Harshuuu, આ website પૂરી થઈ ગઈ... પણ આમાં લખાયેલી લાગણીઓ અહીં પૂરી થતી નથી. તું હંમેશા ખુશ રહે, હસતો રહે અને તારી દરેક સારી ઈચ્છા પૂરી થાય — બસ આ જ સુંદર wish છે. ❤️✨"

    );

}


/* =========================================
   MASSIVE HEART BURST
========================================= */

function createMassiveHeartBurst() {

    const symbols = [
        "❤️",
        "💗",
        "💖",
        "💕",
        "💓",
        "💞",
        "💘",
        "🌹",
        "✨",
        "🥹"
    ];


    for (
        let i = 0;
        i < 80;
        i++
    ) {

        setTimeout(() => {

            const heart =
                document.createElement(
                    "div"
                );


            heart.className =
                "floating-heart";


            heart.innerText =
                symbols[
                    Math.floor(
                        Math.random() *
                        symbols.length
                    )
                ];


            heart.style.left =
                Math.random() * 100 + "%";


            heart.style.fontSize =
                (15 + Math.random() * 35)
                + "px";


            heart.style.animationDuration =
                (3 + Math.random() * 5)
                + "s";


            heartsContainer.appendChild(
                heart
            );


            setTimeout(() => {

                heart.remove();

            }, 10000);


        }, i * 50);

    }

}


/* =========================================
   CLOSE POPUP WHEN CLICKING OUTSIDE
========================================= */

document
    .getElementById("popup")
    .addEventListener(
        "click",
        function(event) {

            if (
                event.target === this
            ) {

                closePopup();

            }

        }
    );


/* =========================================
   ESCAPE KEY
========================================= */

document.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key === "Escape"
        ) {

            closePopup();

        }

    }
);


/* =========================================
   MUSIC
========================================= */

const songPlayer =
    document.getElementById(
        "songPlayer"
    );


if (songPlayer) {

    songPlayer.addEventListener(
        "play",
        function() {

            createHeartBurst();

        }
    );

}


/* =========================================
   PHOTO ERROR HANDLER
========================================= */

document
    .querySelectorAll("img")
    .forEach(img => {

        img.addEventListener(
            "error",
            function() {

                this.style.display =
                    "none";

                this.parentElement.style
                    .background =
                    "linear-gradient(135deg,#481329,#1c0710)";

                this.parentElement
                    .innerHTML += `
                        <div style="
                            position:absolute;
                            inset:0;
                            display:flex;
                            align-items:center;
                            justify-content:center;
                            text-align:center;
                            padding:20px;
                        ">
                            📸<br>
                            Add your photo here
                        </div>
                    `;

            }
        );

    });


/* =========================================
   RANDOM HEART START
========================================= */

for (
    let i = 0;
    i < 8;
    i++
) {

    setTimeout(
        createFloatingHeart,
        i * 500
    );

}