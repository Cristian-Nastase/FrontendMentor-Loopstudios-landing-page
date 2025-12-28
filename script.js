const mobileNav = document.querySelector(".header__nav");
const mobileButton = document.querySelector(".hero__top .hero__button");
const mobileClose = document.querySelector(".header__nav .nav__button");

mobileButton.addEventListener("click", toggleNav);

mobileClose.addEventListener("click", toggleNav);

function toggleNav()
{
    mobileButton.toggleAttribute("inert");
    mobileClose.toggleAttribute("inert");

    mobileNav.classList.toggle("hidden");
    document.body.classList.toggle("lock-scroll");
}