const loader = document.querySelector('.loader');
const navbar = document.querySelector('.navbar');
const image = document.querySelector('.image');
const subjects = document.querySelector('.subjects');
const interests = document.querySelector('.interests');

function init() {
  setTimeout(() => {
    loader.style.opacity = 0;
    loader.style.display = 'none';

    image.style.display = 'block';
    navbar.style.display = 'block';
    subjects.style.display = 'block';
    interests.style.display = 'block';
    setTimeout(() => (image.style.opacity = 1,navbar.style.opacity = 1, subjects.style.opacity = 1, interests.style.opacity = 1 ), 50);
  }, 4000);
}

init();


