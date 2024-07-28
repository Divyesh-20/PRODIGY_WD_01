document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.getElementById('navbar');
  const hamburger = document.querySelector('.hamburger-menu');
  const navMenu = document.querySelector('.nav-menu');

  // Sticky navbar background color change on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Dropdown menu
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      const dropdown = item.querySelector('.dropdown-menu');
      if (dropdown) {
        dropdown.style.display = 'block';
      }
    });
    item.addEventListener('mouseleave', () => {
      const dropdown = item.querySelector('.dropdown-menu');
      if (dropdown) {
        dropdown.style.display = 'none';
      }
    });
  });

  // Hamburger menu toggle
  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
});
