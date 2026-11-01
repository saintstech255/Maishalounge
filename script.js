
/* =========================================
   MAISHA LOUNGE — INTERACTIONS
========================================= */

document.addEventListener('DOMContentLoaded', () => {

  // 1. PRELOADER
  const preloader = document.querySelector('.preloader');

  window.addEventListener('load', () => {
    setTimeout(() => {
      preloader?.classList.add('loaded');
    }, 500);
  });

  // Fallback: remove preloader even if loading takes too long
  setTimeout(() => {
    preloader?.classList.add('loaded');
  }, 3000);


  // 2. MOBILE NAVIGATION
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');

  menuToggle?.addEventListener('click', () => {
    nav?.classList.toggle('open');
  });

  // Close menu after selecting a link
  nav?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav?.classList.remove('open');
    });
  });


  // 3. SCROLL REVEAL ANIMATIONS
  const revealElements = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(element => {
      observer.observe(element);
    });
  } else {
    revealElements.forEach(element => {
      element.classList.add('visible');
    });
  }


  // 4. WHATSAPP CONFIGURATION
  // Replace this placeholder with the real lounge number.
  // Format: country code + number, digits only.
  const WHATSAPP_NUMBER = '255000000000';

  document.querySelectorAll('.whatsapp-link').forEach(link => {
    const message = 'Hello Maisha Lounge! I would like to make an enquiry or reservation.';

    link.href =
      'https://wa.me/' +
      WHATSAPP_NUMBER +
      '?text=' +
      encodeURIComponent(message);

    link.target = '_blank';
    link.rel = 'noopener noreferrer';
  });


  // 5. HEADER SCROLL EFFECT
  const header = document.querySelector('.header');

  window.addEventListener('scroll', () => {
    if (!header) return;

    if (window.scrollY > 80) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });


  // 6. SUBTLE PARALLAX EFFECT
  const heroImage = document.querySelector('.hero-image');

  const reducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  if (heroImage && !reducedMotion) {
    window.addEventListener('scroll', () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition < window.innerHeight) {
        heroImage.style.transform =
          `translateY(${scrollPosition * 0.22}px) scale(1)`;
      }
    }, { passive: true });
  }

});
