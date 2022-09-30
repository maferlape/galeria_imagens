fetch("imagens.json")
.then(response => {
   return response.json();
})
.then(images => {
  images.forEach((image) => {
    createImg(image)
  })
});

const modalOverlay = document.querySelector('.modal-overlay')
function createImg(image){
  const img = document.createElement('img');
  const galeriaImage = document.querySelector('.galeria')
  img.src = image.url
  galeriaImage.append(img)
  img.addEventListener("click",function(){
    modalOverlay.classList.add('active');
    modalOverlay.querySelector("img").src = img.src;
  })
}

document.querySelector(".btn-close-modal")
  .addEventListener("click",function(){
    modalOverlay.classList.remove('active')
  })
