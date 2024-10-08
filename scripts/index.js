// drop down menu for medium to smaller
document.getElementById('menu-icon').addEventListener('click', function(){
    document.querySelector('.nav-link-hidden').classList.toggle('active')
})


// ingredients scroll section
const containerBox = document.querySelector('.container-box');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

const scrollAmount = 100; 

function scrollLeft() {
  containerBox.scrollBy({
    left: -scrollAmount,
    behavior: 'smooth'
  });
}

function scrollRight() {
  containerBox.scrollBy({
    left: scrollAmount,
    behavior: 'smooth'
  });
}

leftArrow.addEventListener('click', scrollLeft);
rightArrow.addEventListener('click', scrollRight);