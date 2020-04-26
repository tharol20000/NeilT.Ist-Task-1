const loader = document.querySelector('.loader');
const main = document.querySelector('.main');
const more = document.querySelector('.more');

function init() {
  setTimeout(() => {
    loader.style.opacity = 0;
    loader.style.display = 'none';

    main.style.display = 'block';
    more.style.display = 'block';
    setTimeout(() => (main.style.opacity = 1,more.style.opacity = 1), 50);
  }, 4000);
}

init();


