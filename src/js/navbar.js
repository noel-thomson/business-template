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
  if (window.scrollY === 0) {
    console.log('top');
  } else if (prevScrollPos > currentScrollPos) {
    navbar.classList.remove('hide');
  } else {
    if (!navbar.classList.contains('open')) {
      navbar.classList.add('hide');
    }
  }
  prevScrollPos = currentScrollPos;
};
