/* ============================================
   OZ SOUNDZ UNLEASHED — SHARED JS
   ============================================ */

(function () {
  'use strict';

  // ---- NAV HAMBURGER ----
  const hamburger = document.getElementById('nav-hamburger');
  const navLinks = document.getElementById('nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      hamburger.classList.toggle('open');
    });
  }

  // ---- ACTIVE NAV LINK ----
  const currentPath = window.location.pathname;
  document.querySelectorAll('#nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href && currentPath.includes(href.replace('.html', '').replace('/index', '')) && href !== '../index.html' && href !== 'index.html') {
      link.classList.add('active');
    }
    if ((currentPath === '/' || currentPath.endsWith('index.html')) && (href === 'index.html' || href === './')) {
      link.classList.add('active');
    }
  });

  // ---- TICKER (duplicate for seamless loop) ----
  const ticker = document.querySelector('.ticker');
  if (ticker) {
    const items = ticker.innerHTML;
    ticker.innerHTML = items + items;
  }

  // ---- STAGGERED FADE-INS ----
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, i * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.animate-on-scroll').forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = `opacity 0.5s ease ${i * 0.05}s, transform 0.5s ease ${i * 0.05}s`;
    observer.observe(el);
  });

  // ---- CONTACT FORM HANDLING ----
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const btn = this.querySelector('button[type="submit"]');
      const original = btn.textContent;
      btn.textContent = 'Sending...';
      btn.disabled = true;

      // Simulate (real implementation needs backend or FormSpree etc.)
      setTimeout(() => {
        btn.textContent = '✓ Message Sent';
        btn.style.background = 'var(--green)';
        setTimeout(() => {
          btn.textContent = original;
          btn.style.background = '';
          btn.disabled = false;
          contactForm.reset();
        }, 3000);
      }, 1200);
    });
  }

})();
