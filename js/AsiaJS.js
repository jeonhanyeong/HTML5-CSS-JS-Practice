
 
 const base = '../images/asiaImage/';
const body = document.querySelector('body');
const btn = document.querySelector('.btn');

function viewBgImage(src) {  
  const img = new Image();
  img.src = src;
  img.onload = () => {      
    body.style.backgroundImage = `url(${src})`;
  }; 
}

function getImage(value) {
  const imageSrc = base + value;
  viewBgImage(imageSrc);
  i++;
  btn.disabled = true;
  setTimeout(function() { btn.disabled = false }, 1000);
} 
btn.addEventListener('click', getImage);