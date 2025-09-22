// Hamburger toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');   // show/hide menu
  hamburger.classList.toggle('active');  // animate hamburger
});

// Klinker hover slider (example for one cell)
const klinkerCell = document.querySelector('.col.klinker');
const slider = klinkerCell.querySelector('.slider');

klinkerCell.addEventListener('mouseenter', () => slider.style.display = 'block');
klinkerCell.addEventListener('mouseleave', () => slider.style.display = 'none');
