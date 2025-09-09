// Sticky Navbar + Highlight Active Section
const navLinks = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const top = window.scrollY;
    const offset = section.offsetTop - 150;
    const height = section.offsetHeight;
    if (top >= offset && top < offset + height) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// Smooth Scrolling
navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Dynamic Greeting
const greetings = [
  "Welcome to my interactive resume!",
  "Thanks for stopping by!",
  "Excited to share my journey with you!"
];
const greeting = document.getElementById('greeting');
if (greeting) {
  greeting.textContent = greetings[Math.floor(Math.random() * greetings.length)];
}

// Sort GPA
const sortBtn = document.getElementById('sort-gpa');
if (sortBtn) {
  sortBtn.addEventListener('click', () => {
    const tbody = document.getElementById('education-body');
    const rows = Array.from(tbody.querySelectorAll('tr'));
    rows.sort((a, b) => {
      const gpaA = parseFloat(a.children[3].textContent);
      const gpaB = parseFloat(b.children[3].textContent);
      return gpaB - gpaA;
    });
    rows.forEach(row => tbody.appendChild(row));
  });
}

// Skill Toggle
const buttons = document.querySelectorAll('#skill-toggle button');
const groups = document.querySelectorAll('.skill-group');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    groups.forEach(group => {
      group.classList.remove('active');
      if (group.dataset.level === btn.dataset.level) {
        group.classList.add('active');
      }
    });
  });
});

// Back to Top
const backToTop = document.getElementById('back-to-top');
if (backToTop) {
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});