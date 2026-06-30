
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("is-visible");
  });
}, { threshold: 0.12 });

document.querySelectorAll(".section, .card, .intro, .note, .page-hero, .split, .timeline-item, .program-card").forEach((el) => {
  el.classList.add("fade-in");
  observer.observe(el);
});

const menuButton = document.querySelector(".menu-button");
if (menuButton) {
  menuButton.addEventListener("click", () => {
    const isOpen = document.body.classList.toggle("menu-open");
    menuButton.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
}
