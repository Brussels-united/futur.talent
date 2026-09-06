const header = document.getElementById('siteHeader');
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 40);
});

navToggle.addEventListener('click', () => {
  const isOpen = header.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen);
});

navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    header.classList.remove('open');
    navToggle.setAttribute('aria-expanded', false);
  });
});

// Onglets "Notre équipe" (présents uniquement sur equipe.html)
const eqTabs = document.querySelectorAll('.eq-tab');
if (eqTabs.length) {
  eqTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      eqTabs.forEach(t => { t.classList.remove('active'); t.setAttribute('aria-selected', 'false'); });
      document.querySelectorAll('.eq-panel').forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      document.getElementById('panel-' + tab.dataset.panel).classList.add('active');
    });
  });
}

// Formulaire de contact (présent uniquement sur contact.html)
const form = document.getElementById('contactForm');
if (form) {
  const success = document.getElementById('formSuccess');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    success.classList.add('show');
    form.reset();
  });
}
