let search = document.querySelector(".search")
let searchInput = document.querySelector(".searchInput")
let newsContainer = document.querySelector(".newsContainer")
let menu = document.querySelector(".menu")
let navBar = document.querySelector(".navBar")
let cancel = document.querySelector(".cancel")
let links = document.querySelector(".journalist .links")

search.addEventListener('click', ()=>{
    searchInput.classList.toggle("active")
})

menu.addEventListener('click', ()=>{
    navBar.classList.toggle("active")
    menu.classList.toggle("ri-menu-line")
    menu.classList.toggle("ri-close-fill")
})
con.onscroll = () => {
    navBar.classList.remove("active")
    menu.classList.remove("ri-close-fill")
    menu.classList.add("ri-menu-line")
}

function display(){
    links.classList.toggle("active")
}
function leave(){
    links.classList.remove("active")
}