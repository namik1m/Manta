
const target = document.querySelector('body');
const videos = document.querySelector('.videos');
target.addEventListener('wheel', (evt) => {
  // evt.preventDefault();
  console.log(evt.deltaY);
  videos.scrollBy({
    left: evt.deltaY * 2
  });
});
