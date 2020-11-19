// header
const navbar = document.querySelector('.navbar');
const mobileToggle = document.querySelector('.top-nav__mobile-toggle');
const navLinks = document.querySelectorAll('.top-nav__link');

mobileToggle.addEventListener('click', () => {
  navbar.classList.toggle('open');
});

// close mobile menu after clicking link
for (let navLink of navLinks) {
  navLink.addEventListener('click', () => {
    if (header.classList.contains('open')) {
      header.classList.toggle('open');
    }
  });
}
