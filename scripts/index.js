// drop down menu for medium to smaller
document.getElementById('menu-icon').addEventListener('click', function(){
    document.querySelector('.nav-link-hidden').classList.toggle('active')
})


// ingredients scroll section
const containerBox = document.querySelector('.container-box');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

function updateArrows() {
  // Disable left arrow if at the start
  if (containerBox.scrollLeft === 0) {
    leftArrow.style.display = 'none';
  } else {
    leftArrow.style.display = 'block';
  }

  // Disable right arrow if at the end
  if (containerBox.scrollWidth - containerBox.clientWidth === containerBox.scrollLeft) {
    rightArrow.style.display = 'none';
  } else {
    rightArrow.style.display = 'block';
  }
}

function scrollLeft() {
  containerBox.scrollBy({ left: -200, behavior: 'smooth' });
  setTimeout(updateArrows, 300); // Update after scrolling
}

function scrollRight() {
  containerBox.scrollBy({ left: 200, behavior: 'smooth' });
  setTimeout(updateArrows, 300); // Update after scrolling
}

// Initial check to disable arrows if needed
updateArrows();

// Add event listener to update arrows when scrolling
containerBox.addEventListener('scroll', updateArrows);