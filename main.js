const button = document.getElementById("button");
const footer = document.getElementById("footer");
const toggle1 = document.getElementById("toggle-1");
const toggle2 = document.getElementById("toggle-2");

button.addEventListener("click", () => {
  footer.classList.toggle("footer-background");
  toggle1.classList.toggle("to-hide");
  toggle2.classList.toggle("to-hide");
});
