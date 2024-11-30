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
const platforms_div = document.querySelector(".platforms_div");
const platforms_close = document.querySelector("#platforms_close");
const share_btn = document.querySelector("#share_btn");
const favorite = document.querySelector("#favorite");

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
  aside.style.width = "200px";
  aside.style.height = "250px";
  aside.style.transition = "all 2s ease";
});

closeMenu.addEventListener("click", () => {
  aside.style.width = "0";
  aside.style.height = "0";
  aside.style.transition = "all 0.3ms ease";
  aside.style.display = "none";
});

share_btn.addEventListener("click", () => {
  platforms_div.style.display = "block";
});

platforms_close.addEventListener("click", () => {
  platforms_div.style.display = "none";
});

favorite.addEventListener("click", () => {
  favorite.style.background = "red";
});

function shareOnSelectedPlatform() {
  var platform = document.getElementById("platformSelect").value;
  var url = ""; // Default URL
  var text = "Check out this portfolio!"; // Default text

  switch (platform) {
    case "twitter":
      url =
        "https://twitter.com/intent/tweet?url=//https://fotiotech.github.io/dyfk&text=" +
        encodeURIComponent(text);
      break;
    case "facebook":
      url =
        "https://www.facebook.com/sharer/sharer.php?url=https://fotiotech.github.io/dyfk" +
        encodeURIComponent(text);
      break;
    case "linkedin":
      url =
        "https://www.linkedin.com/sharing/share-offsite/?url=https://fotiotech.github.io/dyfk" +
        encodeURIComponent(text);
      break;
    default:
      alert("Please select a platform.");
      return;
  }

  // Open the sharing URL in a new window
  window.open(url, "_blank");
}
