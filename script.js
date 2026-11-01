
/* =========================================
   MAISHA LOUNGE — PREMIUM INTERACTIONS
========================================= */

document.addEventListener('DOMContentLoaded', () => {

  // 1. CINEMATIC WELCOME INTRO

  const intro = document.querySelector('.welcome-intro');

  if (intro) {
    const alreadyVisited = sessionStorage.getItem('maishaIntroShown');

    if (alreadyVisited) {
      intro.remove();
    } else {
      sessionStorage.setItem('maishaIntroShown', 'yes');

      document.body.classList.add('intro-active');

      setTimeout(() => {
        intro.classList.add('intro-opening');
      }, 1700);

      setTimeout(() => {
        intro.classList.add('intro-hidden');
        document.body.classList.remove('intro-active');
      }, 3600);

      setTimeout(() => {
        intro.remove();
      }, 4300);
    }
  }


  // 2. PRELOADER

  const preloader = document.querySelector('.preloader');

  window.addEventListener('load', () => {
    setTimeout(() => {
      preloader?.classList.add('loaded');
    }, 500);
  });

  setTimeout(() => {
    preloader?.classList.add('loaded');
  }, 3000);


  // 3. MOBILE NAVIGATION

  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');

  menuToggle?.addEventListener('click', () => {
    nav?.classList.toggle('open');
  });

  nav?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav?.classList.remove('open');
    });
  });


  // 4. SCROLL REVEAL ANIMATIONS

  const revealElements = document.querySelectorAll('.reveal');

  const reducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  if (reducedMotion || !('IntersectionObserver' in window)) {
    revealElements.forEach(element => {
      element.classList.add('visible');
    });
  } else {
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
  }


  // 5. WHATSAPP CONFIGURATION

  const WHATSAPP_NUMBER = '255000000000';

  document.querySelectorAll('.whatsapp-link').forEach(link => {
    const message =
      'Hello Maisha Lounge! I would like to make an enquiry or reservation.';

    link.href =
      'https://wa.me/' +
      WHATSAPP_NUMBER +
      '?text=' +
      encodeURIComponent(message);

    link.target = '_blank';
    link.rel = 'noopener noreferrer';
  });


  // 6. HEADER SCROLL EFFECT

  const header = document.querySelector('.header');

  window.addEventListener('scroll', () => {
    if (!header) return;

    header.classList.toggle('scrolled', window.scrollY > 80);
  }, { passive: true });


  // 7. SUBTLE HERO PARALLAX

  const heroImage = document.querySelector('.hero-image');

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
