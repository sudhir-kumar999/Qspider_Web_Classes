
const toggler = document.getElementById('toggler');
const menu = document.getElementById('nav-link');

toggler.addEventListener('click' , ()=>{
    menu.classList.toggle('active')
})