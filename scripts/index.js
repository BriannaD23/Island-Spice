// drop down menu for medium to smaller
document.getElementById('menu-icon').addEventListener('click', function(){
    document.querySelector('.nav-link-hidden').classList.toggle('active')
})


JavaScript
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const containerBox = document.querySelector('.container-box');

leftArrow.addEventListener('click', () => {
  const currentScrollPosition = containerBox.scrollLeft;
  if (currentScrollPosition > 0) {
    containerBox.scrollBy({ left: -200, behavior: 'smooth' }); 
  }
});

rightArrow.addEventListener('click', () => {
  const maxScrollPosition = containerBox.scrollWidth - containerBox.clientWidth;
  const currentScrollPosition = containerBox.scrollLeft;
  if (currentScrollPosition < maxScrollPosition) {
    containerBox.scrollBy({ left: 200, behavior: 'smooth' });
  }
});