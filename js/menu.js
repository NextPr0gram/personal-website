let openMenuIcon = document.getElementById("open-menu");
let closeMenuIcon = document.getElementById("close-menu");
let menu = document.getElementById("nav");
let body = document.getElementsByTagName("body");

openMenuIcon.onclick = function openMenu() {
  menu.style.clipPath = "circle(100% at center)";
};

closeMenuIcon.onclick = function closeMenu() {
  menu.style.clipPath = "circle(0 at 100% 0)";
};


