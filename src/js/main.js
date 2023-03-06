// Curtain menu
function openNav() {
    document.getElementById("myOverlay").style.height = "100%";
}

const openCurtain = document.querySelector(".open-curtain")
openCurtain.addEventListener('click', openNav)

function closeNav() {
    document.getElementById("myOverlay").style.height = "0%";
}

const closeLinks = document.querySelectorAll('.close-curtain');
// Get all links with the class "close-curtain"
closeLinks.forEach(link => {
    // For each link, add an event listener for when it's clicked
    link.addEventListener('click', e => {
        // When the link is clicked, do the following:
        e.preventDefault(); // Prevent the default behavior of the browser
        closeNav(); // Close the menu
        const targetId = e.target.getAttribute('href');
        // Get the ID of the target element from the link's "href" attribute
        const targetElement = document.querySelector(targetId);
        // Find the element with that ID
        targetElement.scrollIntoView({behavior: 'smooth'});
        // Scroll the page to that element
    });
});
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

// ---- Description ---------//
import {DESCRIPTION} from "/SylvainLeDev.github.io/assets/data/description.js";

const descriptionBlock = document.querySelector(".block__text");
for (let i = 0; i < DESCRIPTION.length; i++) {
    const paragraph = document.createElement("p");
    paragraph.textContent = DESCRIPTION[i];
    descriptionBlock.appendChild(paragraph);
}
// ---- End Description -----//
import {LANGUAGE, TOOLS, SOFT_SKILLS} from "/SylvainLeDev.github.io/assets/data/skills.js"

const skillsContainer = document.querySelector(".skills__container-cards");
const generateSkills = (skillsArray, skillClass, title) => {
    const skillDiv = document.createElement("div");
    skillDiv.classList.add("skill", skillClass);
    const skillTitle = document.createElement("h4");
    skillTitle.textContent = title;
    skillDiv.appendChild(skillTitle);
    skillsArray.forEach((skill) => {
        const skillButton = document.createElement("button");
        skillButton.classList.add("pill", "hover");
        skillButton.textContent = skill;
        skillDiv.appendChild(skillButton);
    });
    skillsContainer.appendChild(skillDiv);
};
generateSkills(LANGUAGE, "skill-language", "Languages");
generateSkills(TOOLS, "skill-tools", "Tools");
generateSkills(SOFT_SKILLS, "skill-soft-skills", "Soft Skills");
// ---- Pill of Skills ------//

// ---- Experience --------- //
import {CHRONOLOGIE} from "/SylvainLeDev.github.io/assets/data/chronologie.js";

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
// import { PROJECTS } from "/SylvainLeDev.github.io/assets/data/project.js";
// document.body.onload = function carousel() {
//
//     const buttonRight = document.querySelector(".carousel__arrow-right");
//     const buttonLeft = document.querySelector(".carousel__arrow-left");
//     const slides = document.getElementById("carousel-items");
//
//     let slideIndex = 0;
//     let numSlides = PROJECTS.length;
//
//     // Check clientWidth;
//     let containerCarousel = document.querySelector(".portfolio__container-carousel").clientWidth;
//     window.onresize = function () {
//         containerCarousel = document.querySelector(".portfolio__container-carousel").clientWidth;
//         slides.style.transform = `translate(-${slideIndex * containerCarousel}px)`;
//     }
//     slides.style.width = (numSlides * 100) + "%";
//
//
//     const autoPlay = () => {
//         slideIndex++;
//         if (slideIndex > numSlides - 1) {
//             slideIndex = 0;
//         }
//         slides.style.transform = `translate(-${slideIndex * containerCarousel}px)`;
//         slides.style.transition = "all 0.6s ease-in-out";
//     }
//
//     const autoscrolling = setInterval(autoPlay, 3000)
//
//
//     for (let i = 0; i < numSlides; i++) {
//         // Create a new div'image' element for each slide
//         const image = document.createElement("div");
//         image.className = "carousel__image";
//         image.style.backgroundImage = `url(./assets/img/carousel/carousel${i + 1}.jpg)`;
//         slides.appendChild(image);
//
//         //For each image, create a link to the project
//         const anchor = document.createElement("a");
//         anchor.className = "carousel__anchor";
//         anchor.href = PROJECTS[i].URL;
//         anchor.target = "_blank";
//         image.appendChild(anchor);
//
//         //For each image indicate the project name if I need it
//         // const projectName = document.createElement("p");
//         // projectName.innerHTML = Object.keys(PROJECTS)[i];
//         // anchor.appendChild(projectName);
//
//     }
//     buttonLeft.onclick = function () {
//         slideIndex--;
//         if (slideIndex < 0) {
//             slideIndex = numSlides - 1;
//         }
//         slides.style.transform = `translate(-${slideIndex * containerCarousel}px)`;
//         slides.style.transition = "all 0.6s ease-in-out";
//         clearInterval(autoscrolling);
//
//     };
//
//     buttonRight.onclick = function click() {
//         slideIndex++;
//         if (slideIndex > numSlides - 1) {
//             slideIndex = 0;
//         }
//         slides.style.transform = `translate(-${slideIndex * containerCarousel}px)`;
//         slides.style.transition = "all 0.6s ease-in-out";
//         clearInterval(autoscrolling);
//     };
//
//
// };
import {PROJECTS} from "/SylvainLeDev.github.io/assets/data/project.js";

document.addEventListener("DOMContentLoaded", () => {

    const buttonRight = document.querySelector(".carousel__arrow-right");
    const buttonLeft = document.querySelector(".carousel__arrow-left");
    const slides = document.getElementById("carousel-items");

    let slideIndex = 0;
    const numSlides = PROJECTS.length;

    // Get the width of the carousel container
    let containerCarousel = document.querySelector(".portfolio__container-carousel").clientWidth;

    // Update the carousel container width on window resize
    window.addEventListener("resize", () => {
        containerCarousel = document.querySelector(".portfolio__container-carousel").clientWidth;
        slides.style.transform = `translate(-${slideIndex * containerCarousel}px)`;
    });

    // Set the width of the carousel to hold all slides
    slides.style.width = `${numSlides * 100}%`;

    // Create carousel slides and anchors dynamically
    PROJECTS.forEach((project, i) => {
        const image = document.createElement("div");
        image.className = "carousel__image";
        image.style.backgroundImage = `url(./assets/img/carousel/${project.IMG}.jpg)`;

        const anchor = document.createElement("a");
        anchor.className = "carousel__anchor";
        anchor.href = project.URL;
        anchor.target = "_blank";
        image.appendChild(anchor);

        // Uncomment below to add project name to the anchor
        // const projectName = document.createElement("p");
        // projectName.innerHTML = Object.keys(PROJECTS)[i];
        // anchor.appendChild(projectName);

        slides.appendChild(image);
    });

    // Function to play the carousel automatically
    const autoPlay = () => {
        slideIndex++;
        if (slideIndex > numSlides - 1) {
            slideIndex = 0;
        }
        slides.style.transform = `translate(-${slideIndex * containerCarousel}px)`;
        slides.style.transition = "all 0.6s ease-in-out";
    };

    let autoscrolling = setInterval(autoPlay, 3000);

    // Add click event listener to the left arrow button
    buttonLeft.addEventListener("click", () => {
        slideIndex--;
        if (slideIndex < 0) {
            slideIndex = numSlides - 1;
        }
        slides.style.transform = `translate(-${slideIndex * containerCarousel}px)`;
        slides.style.transition = "all 0.6s ease-in-out";
        clearInterval(autoscrolling);
    });

    // Add click event listener to the right arrow button
    buttonRight.addEventListener("click", () => {
        slideIndex++;
        if (slideIndex > numSlides - 1) {
            slideIndex = 0;
        }
        slides.style.transform = `translate(-${slideIndex * containerCarousel}px)`;
        slides.style.transition = "all 0.6s ease-in-out";
        clearInterval(autoscrolling);
    });

    // Restart autoplay when user clicks on any carousel slide
    function restartCarousel() {
        clearInterval(autoscrolling);
        autoscrolling = setInterval(autoPlay, 3000);
    }

    buttonRight.addEventListener("click", restartCarousel)
    buttonLeft.addEventListener("click", restartCarousel)


});

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

