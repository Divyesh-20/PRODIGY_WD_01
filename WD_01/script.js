document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
  
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
  });
  