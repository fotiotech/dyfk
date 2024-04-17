const menu = document.querySelector("#menu");
const aside = document.querySelector("aside");
const closeMenu = document.querySelector("#close");
const aboutButton = document.querySelector("#aboutBtn");
const about = document.querySelector("#about");
const serviceButton = document.querySelector("#serviceBtn");
const service = document.querySelector("#service");
const projectButton = document.querySelector("#projectBtn");
const project = document.querySelector("#project");
const contactButton = document.querySelector("#contactBtn");
const contact = document.querySelector("#contact");

aboutButton.addEventListener("click", () => {
  about.scrollIntoView({ behavior: "smooth" });
});

serviceButton.addEventListener("click", () => {
  service.scrollIntoView({ behavior: "smooth" });
});

projectButton.addEventListener("click", () => {
  project.scrollIntoView({ behavior: "smooth" });
});

contactButton.addEventListener("click", () => {
  contact.scrollIntoView({ behavior: "smooth" });
});

menu.addEventListener("click", () => {
  aside.style.display = "block";
});

closeMenu.addEventListener("click", () => {
  aside.style.display = "none";
});
