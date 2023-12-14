const menu = document.querySelector(".menu");
const aside = document.querySelector("aside");
const closeMenu = document.querySelector("#close");

menu.addEventListener("click", () => {
  aside.classList.toggle("max-sm:visible");
});

closeMenu.addEventListener("click", () => {
  aside.classList.toggle("max-sm:visible");
});
