function isInView(elem) {
  const elemBottom = elem.getBoundingClientRect().bottom;

  return elemBottom > 0;
}

const banner = document.querySelector('.banner');
const menu = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (!isInView(banner)) {
    menu.classList.add('bg-dark');
  } else if (isInView(banner)) {
    menu.classList.remove('bg-dark');
  }
});
