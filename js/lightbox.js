const images = document.querySelectorAll('.img-gallary');
const imageslight = document.querySelector('.book1');
const containerlight = document.querySelector('.image-light');
const menusvg1 = document.querySelector('.menusvg');

images.forEach(image =>{
    image.addEventListener('click', ()=>{
       showimage(image.getAttribute('src'))
    })
})

containerlight.addEventListener('click', (e)=>{
    if(e.target !== imageslight){
        containerlight.classList.toggle('show')
        imageslight.classList.toggle('showImage')
        menusvg1.style.opacity = '1'
    }
})

const showimage = (image)=>{
    imageslight.src = image
    containerlight.classList.toggle('show')
    imageslight.classList.toggle('showImage')
}

