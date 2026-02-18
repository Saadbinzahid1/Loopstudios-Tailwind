const hamButton = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

hamButton.addEventListener("click", function (e) {
  e.preventDefault();
  hamButton.classList.toggle("open");
  menu.classList.toggle("hidden");
  menu.classList.toggle("flex");
});
