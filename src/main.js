// src/main.js
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// 1. Initialize Lenis smooth scroll
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel: true
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// Sync ScrollTrigger with Lenis scroll updates
lenis.on('scroll', ScrollTrigger.update);

// 2. Add GSAP ScrollTrigger reveal animations for sections
const sections = document.querySelectorAll('.section');
sections.forEach(section => {
  gsap.fromTo(section,
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: section,
        start: 'top 80%', // Triggers when top of section is 80% from top of viewport
        toggleActions: 'play none none none'
      }
    }
  );
});

// 3. Pointer/cursor event tracking for Projects cards (Spotlight effect)
const cards = document.querySelectorAll('.project-card');
cards.forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  });
});

// 4. Floating bottom navigation Dock click and scroll spy logic
const dockItems = document.querySelectorAll('.dock-item');

dockItems.forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = item.getAttribute('href');
    if (targetId) {
      lenis.scrollTo(targetId);
    }
  });
});

// Scrollspy logic to update active dock item based on viewport scroll position
sections.forEach(section => {
  const sectionId = section.getAttribute('id');
  const dockItem = document.querySelector(`.dock-item[data-section="${sectionId}"]`);
  
  if (dockItem) {
    ScrollTrigger.create({
      trigger: section,
      start: 'top 50%',
      end: 'bottom 50%',
      onToggle: (self) => {
        if (self.isActive) {
          dockItems.forEach(item => item.classList.remove('active'));
          dockItem.classList.add('active');
        }
      }
    });
  }
});
