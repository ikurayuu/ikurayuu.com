
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("is-visible");
  });
}, { threshold: 0.12 });

document.querySelectorAll(".section, .card, .intro, .note").forEach((el) => {
  el.classList.add("fade-in");
  observer.observe(el);
});
