const hamburgerBtn = document.getElementById("hamburger-btn")
const menu = document.getElementById("nav-links-container")
const body = document.getElementById("body")
const navlinks = document.querySelectorAll(".navlink")

hamburgerBtn.addEventListener('click', ()=>{
    hamburgerBtn.classList.toggle("open")
    menu.classList.toggle("open")
    body.classList.toggle("noscroll")
})