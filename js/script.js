// script.js

// Dark / Light mode toggle
document.getElementById("themeToggle").onclick = () => {
  document.body.classList.toggle("dark");
};

// Scroll animations
const sections = document.querySelectorAll(".fade");

window.addEventListener("scroll", () => {
  sections.forEach(sec => {
    if (sec.getBoundingClientRect().top < window.innerHeight - 100) {
      sec.classList.add("show");
    }
  });
});

// Skill bar animation on scroll
const skillSection = document.getElementById('skills');
const skillBars = document.querySelectorAll('.skill-bar-fill');

function animateSkills() {
  if(skillSection.getBoundingClientRect().top < window.innerHeight - 100){
    skillBars.forEach(bar => {
      const width = bar.getAttribute('data-width');
      bar.style.width = width;
    });
    window.removeEventListener('scroll', animateSkills);
  }
}

window.addEventListener('scroll', animateSkills);
