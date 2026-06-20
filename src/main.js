// src/main.js — Vanilla JS only, ~25 lines

// Dock scrollspy with IntersectionObserver
const sections = document.querySelectorAll('section[id]');
const dockItems = document.querySelectorAll('.dock-item');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      dockItems.forEach((item) => item.classList.remove('active'));
      const active = document.querySelector(
        `.dock-item[data-section="${entry.target.id}"]`
      );
      if (active) active.classList.add('active');
    }
  });
}, { threshold: 0.3 });

sections.forEach((section) => observer.observe(section));

// Dock click smooth scroll
dockItems.forEach((item) => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = item.getAttribute('href');
    if (targetId) {
      document.querySelector(targetId)?.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
