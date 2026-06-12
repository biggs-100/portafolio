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

// 5. Custom Cursor (quickTo Tracking & Interactive Hover Scale)
const cursor = document.querySelector('.custom-cursor');
if (cursor) {
  // Center cursor on pointer using GSAP transform coordinates
  gsap.set(cursor, { xPercent: -50, yPercent: -50 });

  const cursorX = gsap.quickTo(cursor, "x", { duration: 0.15, ease: "power3.out" });
  const cursorY = gsap.quickTo(cursor, "y", { duration: 0.15, ease: "power3.out" });

  let mouseX = 0;
  let mouseY = 0;
  let cursorHasMoved = false;

  window.addEventListener('mousemove', (e) => {
    if (!cursorHasMoved) {
      gsap.set(cursor, { opacity: 1 });
      cursorHasMoved = true;
    }
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  // RequestAnimationFrame loop for high-performance cursor update
  function cursorRaf() {
    if (cursorHasMoved) {
      cursorX(mouseX);
      cursorY(mouseY);
    }
    requestAnimationFrame(cursorRaf);
  }
  requestAnimationFrame(cursorRaf);

  // Hover states using event delegation (links, buttons, dock items, project cards)
  const hoverSelector = 'a, button, .btn, .dock-item, .bento-social-link, .social-link, .project-card, [role="button"]';

  window.addEventListener('mouseover', (e) => {
    const target = e.target.closest(hoverSelector);
    if (target) {
      cursor.classList.add('hovering');
    }
  });

  window.addEventListener('mouseout', (e) => {
    const target = e.target.closest(hoverSelector);
    const relatedTarget = e.relatedTarget;
    if (target && (!relatedTarget || !relatedTarget.closest(hoverSelector))) {
      cursor.classList.remove('hovering');
    }
  });
}

// 6. GSAP Hero Title Staggered Character Reveal
function splitTextIntoChars(element) {
  const childNodes = Array.from(element.childNodes);
  element.innerHTML = ''; // Clear original HTML structure to inject spans

  childNodes.forEach(node => {
    if (node.nodeType === Node.TEXT_NODE) {
      const text = node.textContent;
      const fragment = document.createDocumentFragment();
      for (let char of text) {
        const span = document.createElement('span');
        span.classList.add('char');
        if (char === ' ') {
          span.innerHTML = '&nbsp;';
        } else {
          span.textContent = char;
        }
        fragment.appendChild(span);
      }
      element.appendChild(fragment);
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      const tagName = node.tagName;
      const className = node.className;
      const text = node.textContent;
      const wrapper = document.createElement(tagName);
      if (className) {
        wrapper.className = className;
      }
      
      const fragment = document.createDocumentFragment();
      for (let char of text) {
        const span = document.createElement('span');
        span.classList.add('char');
        if (char === ' ') {
          span.innerHTML = '&nbsp;';
        } else {
          span.textContent = char;
        }
        fragment.appendChild(span);
      }
      wrapper.appendChild(fragment);
      element.appendChild(wrapper);
    }
  });
}

const heroTitle = document.querySelector('.hero-title');
if (heroTitle) {
  splitTextIntoChars(heroTitle);
  const chars = heroTitle.querySelectorAll('.char');
  
  gsap.fromTo(chars,
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.05,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: heroTitle,
        start: 'top 90%',
        toggleActions: 'play none none none'
      }
    }
  );
}
