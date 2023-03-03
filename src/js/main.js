// Curtain menu
function openNav() {
    document.getElementById("myOverlay").style.height = "100%";
}

function closeNav() {
    document.getElementById("myOverlay").style.height = "0%";
}

// ---- Navbar Scroll --------//
let lastScrollTop = 0;
const navbar = document.getElementById("myNavbar");

window.addEventListener("scroll", function (e) {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        navbar.style.opacity = "0";
        navbar.style.height = "0px";
    } else {
        navbar.style.opacity = "0.98";
        navbar.style.height = "57px";
    }
    lastScrollTop = scrollTop;
});
// ---- End Navbar ----------//

// ---- Experience --------- //
import { CHRONOLOGIE } from "/SylvainLeDev.github.io/assets/data/chronologie.js";
console.log(CHRONOLOGIE)
const timelineDiv = document.querySelector(".timeline");

// Loop to display each element of CHRONOLOGIE.
for (let i = 0; i < CHRONOLOGIE.length; i++) {
    const element = CHRONOLOGIE[i];

    // Creating a div element for each element of CHRONOLOGIE.
    const timelineExp = document.createElement("div");
    timelineExp.classList.add("timeline-exp");

    // add data-aos for animation
    const divContent = document.createElement("div");
    divContent.setAttribute("data-aos", i % 2 === 0 ? "zoom-in-left" : "zoom-in-right");
    timelineExp.appendChild(divContent);

    // add title
    const title = document.createElement("h4");
    title.textContent = element.title;
    divContent.appendChild(title);

    // add date
    const date = document.createElement("h6");
    date.textContent = element.date;
    divContent.appendChild(date);

    // Add content
    const content = document.createElement("p");
    content.textContent = element.content;
    divContent.appendChild(content);

    // Adding the div element to the timeline div.
    timelineDiv.appendChild(timelineExp);
}

// ---- Experience ---------//

//--------- Carousel ------//
document.body.onload = function carousel() {

    const buttonRight = document.querySelector(".carousel__arrow-right");
    const buttonLeft = document.querySelector(".carousel__arrow-left");
    const slides = document.getElementById("carousel-items");


    const linkOfProject = [
        {
            nom: "Reservia",
            URL: "https://sylvainledev.github.io/TessierSylvain_2_26072021/#cards_hebergements"
        },
        {
            nom: "OhMyFood",
            URL: "https://sylvainledev.github.io/SylvainTessier_3_20082021/"
        },
        {
            nom: "Groupomania",
            URL: "https://github.com/SylvainLeDEV/TessierSylvain_7_16012022"
        },
        {
            nom: "HotTakes",
            URL: "https://github.com/SylvainLeDEV/TESSIERSylvain_6_23112021"
        }
    ];

    let slideIndex = 0;
    let numSlides = linkOfProject.length;

    // Check clientWidth;
    let containerCarousel = document.querySelector(".portfolio__container-carousel").clientWidth;
    window.onresize = function () {
        containerCarousel = document.querySelector(".portfolio__container-carousel").clientWidth;
        slides.style.transform = `translate(-${slideIndex * containerCarousel}px)`;
    }
    slides.style.width = (numSlides * 100) + "%";


    const autoPlay = () => {
        slideIndex++;
        if (slideIndex > numSlides - 1) {
            slideIndex = 0;
        }
        slides.style.transform = `translate(-${slideIndex * containerCarousel}px)`;
        slides.style.transition = "all 0.6s ease-in-out";
    }

    const autoscrolling = setInterval(autoPlay, 3000)


    for (let i = 0; i < numSlides; i++) {
        // Create a new div'image' element for each slide
        const image = document.createElement("div");
        image.className = "carousel__image";
        image.style.backgroundImage = `url(./assets/img/carousel/carousel${i + 1}.jpg)`;
        slides.appendChild(image);

        //For each image, create a link to the project
        const anchor = document.createElement("a");
        anchor.className = "carousel__anchor";
        anchor.href = linkOfProject[i].URL;
        anchor.target = "_blank";
        image.appendChild(anchor);

        //For each image indicate the project name if I need it
        // const projectName = document.createElement("p");
        // projectName.innerHTML = Object.keys(linkOfProject)[i];
        // anchor.appendChild(projectName);

    }
    buttonLeft.onclick = function () {
        slideIndex--;
        if (slideIndex < 0) {
            slideIndex = numSlides - 1;
        }
        slides.style.transform = `translate(-${slideIndex * containerCarousel}px)`;
        slides.style.transition = "all 0.6s ease-in-out";
        clearInterval(autoscrolling);

    };

    buttonRight.onclick = function click() {
        slideIndex++;
        if (slideIndex > numSlides - 1) {
            slideIndex = 0;
        }
        slides.style.transform = `translate(-${slideIndex * containerCarousel}px)`;
        slides.style.transition = "all 0.6s ease-in-out";
        clearInterval(autoscrolling);
    };


};

//----- END CAROUSEL -----//


//----- TypedJS -----//

// import Typed from '/assets/typed.js/lib/typed.js';
let typed = new Typed('.typed', {
    strings: ["Java Script", "React JS", "Node JS", "HTML / CSS"],
    typeSpeed: 40,
    backSpeed: 100,
    fadeOut: true,
    loop: true
});
//----- END TypedJS -----//


// AOS animation library JS
AOS.init({
    startEvent: 'DOMContentLoaded',
    disable: 'mobile',
    duration: 1100,
});
// END AOS animation library JS--//


// Mouse ----------------------
if (!window.navigator.userAgentData.mobile) {
    const cursor = document.querySelector('.cursor');

    window.addEventListener('mousemove', e => {
        cursor.setAttribute('style', `top: ${e.pageY}px; left: ${e.pageX}px;`);
    });

    const hoverLink = document.querySelectorAll('.hover');

    hoverLink.forEach((link) => {
        link.addEventListener('mouseover', () => {
            cursor.classList.add('hovered');
        });
        link.addEventListener('mouseleave', () => {
            cursor.style.transition = '.3s ease-out';
            cursor.classList.remove('hovered');
        });
    });
}
// END Mouse ------------------


console.log("COUCOU :) ! Si tu est là, c'est que tu inspecte mon site, pas de problème a ça !  ");
console.log("Le code est en open source n'hésite pas à t'en servire si tu en as besoin ! ");

