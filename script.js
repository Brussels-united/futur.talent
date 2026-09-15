const header = document.getElementById('siteHeader');
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

if (header) {
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });
}

function closeMenu() {
  if (!header || !navToggle) return;
  header.classList.remove('open');
  document.body.classList.remove('menu-open');
  navToggle.setAttribute('aria-expanded', 'false');
}

if (header && navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = header.classList.toggle('open');
    document.body.classList.toggle('menu-open', isOpen);
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 860) closeMenu();
  });
}

// Onglets "Notre équipe"
const eqTabs = document.querySelectorAll('.eq-tab');
if (eqTabs.length) {
  eqTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      eqTabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      document.querySelectorAll('.eq-panel').forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      const panel = document.getElementById('panel-' + tab.dataset.panel);
      if (panel) panel.classList.add('active');
    });
  });
}

// Formulaire de contact
const form = document.getElementById('contactForm');
if (form) {
  const success = document.getElementById('formSuccess');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (success) success.classList.add('show');
    form.reset();
  });
}
