// Curtain menu
function openNav() {
    document.getElementById("myOverlay").style.height = "100%";
}

function closeNav() {
    document.getElementById("myOverlay").style.height = "0%";
}

// Navbar
let lastScrollTop = 0;
let ticking = false;
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
    }, 5000);

    slides.style.width = (numSlides * 100) + "%";

    for (let i = 0; i < numSlides; i++) {
        const image = document.createElement("div");
        image.className = "carousel__image";
        image.style.backgroundImage = `url(./assets/img/carousel/carousel${i + 1}.jpg)`;
        slides.appendChild(image);
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

