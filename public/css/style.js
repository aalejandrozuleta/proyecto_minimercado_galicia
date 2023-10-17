const sliderContainer = document.querySelector('.slider-container');
let sliderIndex = 0;
let sliderInterval;

function startSlider() {
  sliderContainer.style.width = `${sliderContainer.children.length * 100}%`;

  sliderInterval = setInterval(() => {
    sliderIndex++;
    if (sliderIndex >= sliderContainer.children.length) {
      sliderIndex = 0;
    }
    sliderContainer.style.transform = `translateX(-${sliderIndex * 100 / sliderContainer.children.length}%)`;
  }, 2000); 
}
startSlider();