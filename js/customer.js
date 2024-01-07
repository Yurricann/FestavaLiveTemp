let hamburger = document.querySelector('.hamburger');
let navMenu = document.querySelector('.nav-menu')
let navbar = document.querySelector('nav');

hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle('active')
    navMenu.classList.toggle('show')
})

document.querySelectorAll('.navLink').forEach(e => e.addEventListener('click', ()=>{
    hamburger.classList.remove('active')
    navMenu.classList.remove('show')
}))


window.onscroll = () =>{
    if(window.scrollY >= 51){
        navbar.classList.add("moving")
    } else{
        navbar.classList.remove("moving")
    }
    
}

