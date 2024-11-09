// Navigation menu toggle
const navButton = document.getElementById("nav-btn");
const links = document.getElementById("nav-list");

navButton.addEventListener("click", function () {
    links.classList.toggle("open");
    navButton.classList.toggle("toggled");
});
