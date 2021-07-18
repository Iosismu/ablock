const links = document.querySelectorAll(".nav-link");

links.forEach((item) => {
  item.addEventListener("click", () => {
    let el = document.getElementById(item.getAttribute("data-link"));
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

const toggleBtn = document.querySelector('.navbar__toggleBtn');
const menu = document.querySelector('.navbar_menu');

toggleBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
})