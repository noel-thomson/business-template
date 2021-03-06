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
    if (navbar.classList.contains('open')) {
      navbar.classList.toggle('open');
    }
  });
}

// hide navbar on scroll
let prevScrollPos = window.pageYOffset;
window.onscroll = () => {
  let currentScrollPos = window.pageYOffset;
  if (currentScrollPos <= 0) {
    // mobile overscroll
    return;
  }
  if (prevScrollPos > currentScrollPos) {
    // scroll up
    navbar.classList.remove('hide');
  } else if (prevScrollPos < currentScrollPos) {
    // scroll down
    if (!navbar.classList.contains('open')) {
      navbar.classList.add('hide');
    }
  }
  prevScrollPos = currentScrollPos;
};
