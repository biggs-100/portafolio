// src/main.js — Vanilla JS only, ~40 lines

// 1. Section reveal on scroll
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal, .reveal-stagger').forEach((el) => {
  revealObserver.observe(el);
});

// 2. Dock scrollspy with IntersectionObserver
const sections = document.querySelectorAll('section[id]');
const dockItems = document.querySelectorAll('.dock-item');

const spyObserver = new IntersectionObserver((entries) => {
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

sections.forEach((section) => spyObserver.observe(section));

// 3. Dock click smooth scroll
dockItems.forEach((item) => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = item.getAttribute('href');
    if (targetId) {
      document.querySelector(targetId)?.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
