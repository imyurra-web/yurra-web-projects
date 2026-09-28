// ========================================
// YURRA PRODUCTION
// Main JavaScript
// ========================================

document.addEventListener("DOMContentLoaded", () => {

  // Smooth navigation
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach((link) => {

    link.addEventListener("click", (event) => {

      const targetId = link.getAttribute("href");

      if (targetId === "#") return;

      const target = document.querySelector(targetId);

      if (!target) return;

      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth"
      });

    });

  });


  // Simple reveal animation
  const sections = document.querySelectorAll(".section");

  const observer = new IntersectionObserver(
    (entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          entry.target.classList.add("visible");

        }

      });

    },
    {
      threshold: 0.12
    }
  );


  sections.forEach((section) => {
    observer.observe(section);
  });

});
