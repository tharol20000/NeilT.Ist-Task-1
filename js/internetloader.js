const loader = document.querySelector('.loader');
const navbar = document.querySelector('.navbar');
const image = document.querySelector('.image');
const popout = document.querySelector('.popout');
const AAAAAAAAAAAAAAA = document.querySelector('.AAAAAAAAAAAAAAA');


function init() {
  setTimeout(() => {
    loader.style.opacity = 0;
    loader.style.display = 'none';

    image.style.display = 'block';
    navbar.style.display = 'block';
    popout.style.display = 'block';
    AAAAAAAAAAAAAAA.style.display = 'block';
    setTimeout(() => (image.style.opacity = 1,navbar.style.opacity = 1, popout.style.opacity = 1, AAAAAAAAAAAAAAA.style.opacity = 1), 50);
  }, 4000);
}

init();
