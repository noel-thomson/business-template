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
  console.log(currentScrollPos);
  let currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    // scroll up
    navbar.classList.remove('hide');
  } else if (prevScrollPos < currentScrollPos && currentScrollPos >= 80) {
    // scrolling down
    if (!navbar.classList.contains('open')) {
      navbar.classList.add('hide');
    }
  }
  prevScrollPos = currentScrollPos;
};

// if (window.scrollY === 0) {
//   navbar.classList.remove('hide');
// }
