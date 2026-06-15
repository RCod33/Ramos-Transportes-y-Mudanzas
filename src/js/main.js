import { loadComponent } from "./loadComponent.js";
import { initContactForms } from "./contactForm.js";

loadComponent("navbar", "/src/Components/navbar.html", () => {
  const btn = document.getElementById("burgerBtn");
  const menu = document.getElementById("mobileMenu");
  const iconOpen = document.getElementById("iconOpen");
  const iconClose = document.getElementById("iconClose");

  btn?.addEventListener("click", () => {
    const isHidden = menu.classList.toggle("hidden");
    iconOpen.classList.toggle("hidden", !isHidden);
    iconClose.classList.toggle("hidden", isHidden);
  });
});

loadComponent("site-footer", "/src/Components/footer.html");
loadComponent("site-whatsapp", "/src/Components/whatsapp.html");

initContactForms();
