const scrollContainer = document.querySelector('.container');

scrollContainer.addEventListener('wheel', (evt) => {
  evt.preventDefault();
  scrollContainer.scrollLeft += evt.deltaY;
});

// scrollContainer.addEventListener('wheel', event => {
//   event.target.scrollIntoView({
//     left: 'snap-first',
//     top: 'snap-first',
//     behavior: 'smooth',
//   })
// })