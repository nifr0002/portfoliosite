const burgerMenu = document.querySelector(".burger-menu");
const navLinks = document.querySelector(".nav-links");

burgerMenu.addEventListener("click", () => {
  console.log("Burgermenu blev klikket");
  navLinks.classList.toggle("active");
});
