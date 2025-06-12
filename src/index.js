import "./styles.css";
import loadHome from "./home/home.js";
import loadMenu from "./menu/menu.js";
import loadAbout from "./about Us/about.js";
import loadContact from "./contact/contact.js";
import { footer } from "./home/home.js";
const content = document.querySelector("#content");
const buttons = document.querySelectorAll(".button");

let currentPage = loadHome();
content.appendChild(currentPage);

document.body.appendChild(footer());

function switchPage() {
  document.body.addEventListener("click", (event) => {
    const button = event.target.closest(".button");
    if (!button) return;

    if (currentPage && content.contains(currentPage)) {
      content.removeChild(currentPage);
    }

    if (button.classList.contains("home-button")) {
      currentPage = loadHome();
    } else if (button.classList.contains("menu-button")) {
      currentPage = loadMenu();
    } else if (button.classList.contains("about-button")) {
      currentPage = loadAbout();
    } else if (button.classList.contains("contact-button")) {
      currentPage = loadContact();
    }

    content.appendChild(currentPage);
  });
}

switchPage();
