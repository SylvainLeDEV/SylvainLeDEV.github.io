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

// AOS animation library JS
AOS.init({
    duration: 1200,
});