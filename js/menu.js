const menusvg = document.querySelector('.menusvg');
const menu = document.querySelector('.menu-navbar');

console.log(menu)
console.log(menusvg)

menusvg,addEventListener('click', ()=>{
    menu.classList.toggle("spread")
})

window.classList.addEventListener ('click', e=>{
    if(menu.classList.contains('spread')
      ){

        menu.classList.toggle("spread")
    }
}) 