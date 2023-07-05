function toggleMenu(element) {
    var navbarMenu = document.getElementById("navbarMenu");
    navbarMenu.classList.toggle("active");
    document.body.classList.toggle("no-scroll");
    element.classList.toggle("open");
}