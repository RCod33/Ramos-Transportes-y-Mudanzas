import { loadComponent } from "./loadComponent.js";
let isMenuOpen = false;

export function toggleMenu() {
  const menu = document.getElementById("burgerMenu");
  if (isMenuOpen) {
    menu.innerHTML = "☰";
  } else {
    loadComponent("burgerMenu", "/src/Components/burgermenu.html");
  }
  isMenuOpen = !isMenuOpen;
}
