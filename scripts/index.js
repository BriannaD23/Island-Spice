// drop down menu for medium to smaller
document.getElementById('menu-icon').addEventListener('click', function(){
    document.querySelector('.nav-link-hidden').classList.toggle('active')
})


// ingredients scroll section
const containerBox = document.querySelector('.container-box');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

const scrollAmount = 200; 

function updateArrows() {
  const maxScrollLeft = containerBox.scrollWidth - containerBox.clientWidth;
  
  if (containerBox.scrollLeft <= 0) {
    leftArrow.disabled = true;
  } else {
    leftArrow.disabled = false;
  }

  if (containerBox.scrollLeft >= maxScrollLeft) {
    rightArrow.disabled = true;
  } else {
    rightArrow.disabled = false;
  }
}

function scrollLeft() {
  containerBox.scrollBy({
    left: -scrollAmount,
    behavior: 'smooth'
  });
  setTimeout(updateArrows, 300);
}

function scrollRight() {
  containerBox.scrollBy({
    left: scrollAmount,
    behavior: 'smooth'
  });
  setTimeout(updateArrows, 300);
}

leftArrow.addEventListener('click', scrollLeft);
rightArrow.addEventListener('click', scrollRight);
containerBox.addEventListener('scroll', updateArrows);

// Initial arrow state check
updateArrows();
