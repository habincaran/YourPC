//toggle class active
const navbarNav = document.querySelector('.navbar-nav');
//ketika keyboard menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
  navbarNav.classList.toggle('active');
};
//klik di luar saibar untuk menghilangkan nav nya
const hamburger = document.querySelector('#hamburger-menu');
document.addEventListener('click', function (e) {
  if (! keyboard.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
});
