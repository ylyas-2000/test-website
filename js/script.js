let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.nav');

menu.addEventListener('click', () =>{
    navbar.classList.toggle('nav-toggle');
});

window.onscroll = () =>{
    navbar.classList.remove('nav-toggle');
};