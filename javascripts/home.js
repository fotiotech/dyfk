const menu = document.querySelector("#menu");
const aside = document.querySelector("aside");
const closeMenu = document.querySelector("#close");

menu.addEventListener("click", () => {
  aside.style.display = 'block';
});

closeMenu.addEventListener("click", () => {
  aside.style.display = 'none';
});
