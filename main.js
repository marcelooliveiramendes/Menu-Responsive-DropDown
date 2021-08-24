const hamburguer = document.querySelector('#hamburguer');
const links = document.querySelector('.links');

hamburguer.addEventListener('click', ()=>{
    links.classList.toggle();
});