console.log("Portfolio Loaded Successfully!");

const darkToggle = document.getElementById("darkToggle");
darkToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  darkToggle.textContent = document.body.classList.contains("dark") ? "☀" : "🌙";
});
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
document.querySelectorAll(".nav-links a").forEach(link =>
  link.addEventListener("click", () => navLinks.classList.remove("active"))
);