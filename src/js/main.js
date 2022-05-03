// Curtain menu
function openNav() {
    document.getElementById("myOverlay").style.height = "100%";
}

function closeNav() {
    document.getElementById("myOverlay").style.height = "0%";
}

// Navbar Scroll---------------------//
let lastScrollTop = 0;
navbar = document.getElementById("myNavbar");

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
//Navbar End---------------------//

//--------- Carousel ------//
document.body.onload = function carousel() {

    const buttonRight = document.querySelector(".carousel__arrow-right");
    const buttonLeft = document.querySelector(".carousel__arrow-left");
    const slides = document.getElementById("carousel-items");

    let slideIndex = 0;
    let numSlides = 4;

    // Check clientWidth;
    let clientWidth = slides.clientWidth;

    // AutoPlay
    const autoPlay = setInterval(() => {
        slideIndex++;
        if (slideIndex > numSlides - 1 ) {
            slideIndex = 0;
        }
        slides.style.transform = `translateX(-${slideIndex * clientWidth}px)`;
        slides.style.transition = "all 0.6s ease-in-out";
    }, 3500);

    slides.style.width = (numSlides * 100) + "%";

    const linkOfProject = {
        "1" : "https://sylvainledev.github.io/TessierSylvain_2_26072021/#cards_hebergements",
        "2" : "https://sylvainledev.github.io/SylvainTessier_3_20082021/",
        "3" : "https://github.com/SylvainLeDEV/TessierSylvain_7_16012022",
        '4' : "https://github.com/SylvainLeDEV/TESSIERSylvain_6_23112021"
    }

    for (let i = 0; i < numSlides; i++) {
        // Create a new div'image' element for each slide
        const image = document.createElement("div");
        image.className = "carousel__image";

        image.style.backgroundImage = `url(./assets/img/carousel/carousel${i + 1}.jpg)`;
        slides.appendChild(image);

        //For each image, create a link to the project
        const anchor = document.createElement("a");
        anchor.className = "carousel__anchor";
        anchor.href = Object.values(linkOfProject)[i];
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
        console.log('left', slideIndex);
        slides.style.transform = `translate(-${slideIndex * clientWidth}px)`;
        slides.style.transition = "all 0.6s ease-in-out";
        clearInterval(autoPlay);
    };

    buttonRight.onclick = function click() {
        slideIndex++;
        if (slideIndex > numSlides - 1) {
            slideIndex = 0;
        }
        console.log('right', slideIndex);
        slides.style.transform = `translate(-${slideIndex * clientWidth}px)`;
        slides.style.transition = "all 0.6s ease-in-out";
        clearInterval(autoPlay);
    };


    window.onresize = function () {
        return window.location.reload();
    }
};

//----- END CAROUSEL -----//


// AOS animation library JS
AOS.init({
    duration: 1200,
});

