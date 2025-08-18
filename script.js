// Smooth scroll for nav buttons
document.querySelectorAll("nav button").forEach(btn => {
  btn.addEventListener("click", () => {
    const target = document.getElementById(btn.dataset.target);
    target.scrollIntoView({ behavior: "smooth" });
  });
});

// Highlight active section while scrolling
const sections = document.querySelectorAll("section");
const navButtons = document.querySelectorAll("nav button");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navButtons.forEach(btn => {
    btn.classList.remove("active");
    if (btn.dataset.target === current) {
      btn.classList.add("active");
    }
  });
});

// Typing effect for header subline
const text = "Passionate Web Developer focusing on Frontend Technologies.";
let i = 0;
function typeEffect() {
  if (i < text.length) {
    document.querySelector("header p:nth-of-type(2)").textContent += text.charAt(i);
    i++;
    setTimeout(typeEffect, 50);
  }
}
document.querySelector("header p:nth-of-type(2)").textContent = "";
typeEffect();
