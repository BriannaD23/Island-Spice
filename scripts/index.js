// drop down menu for medium to smaller
document.getElementById('menu-icon').addEventListener('click', function(){
    document.querySelector('.nav-link-hidden').classList.toggle('active')
})


//scroll arrows
document.addEventListener('DOMContentLoaded', () => {
    const containerBox = document.querySelector('.container-box');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
  
    leftArrow.addEventListener('click', () => {
      containerBox.scrollBy({
        left: -200, // Adjust this value to control the scroll amount
        behavior: 'smooth'
      });
    });
  
    rightArrow.addEventListener('click', () => {
      containerBox.scrollBy({
        left: 200, // Adjust this value to control the scroll amount
        behavior: 'smooth'
      });
    });
  });