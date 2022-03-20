let time  = 5000,
currentImageIndex = 0,
images = document.querySelectorAll ("#slyder img")
max = images.length;


function nextImage() {
  images[currentImageIndex]
       .classList.remove("selected")
 
    currentImageIndex++

  if(currentImageIndex >= max)
  currentImageIndex = 0

    images[currentImageIndex]
       .classList.add("selected")
} 

function start() {
  setInterval(() => {
    nextImage()
  }, time)
}
 
window.addEventListener("load", start);


function toggleMenu(){
  const menuToggle = document.querySelector('.menuToggle');
  const menu = document.querySelector('.menu');
  const navigation = document.querySelector('.navigation');
  menuToggle.classList.toggle('active');
  navigation.classList.toggle('active');
  menu.classList.toggle('active');
}




