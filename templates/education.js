let search = document.querySelector(".search")
let searchInput = document.querySelector(".searchInput")
let newsContainer = document.querySelector(".newsContainer")
let menu = document.querySelector(".menu")
let navBar = document.querySelector(".navBar")
let cancel = document.querySelector(".cancel")
let con = document.querySelector(".container .newsContainer")

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

async function print(){
    // let data = await fetch("https://newsapi.org/v2/everything?q=education in India&pageSize=40&apiKey=33a6b26cda9046009121cbc5c1b281c0")
    let data = await fetch("../sample.json")

    return data.json()
}
print().then((res)=>{
    res.articles.forEach((value, index, array)=>{
        if(res.articles[index].urlToImage == null || res.articles[index].content == null || res.articles[index].title == null || res.articles[index].publishedAt == null || res.articles[index].url == null){

        }
        else{
            let card = document.createElement("div")
            let cardImage = document.createElement("div")
            let img = document.createElement("img")
            let h2 = document.createElement("h2")
            let span = document.createElement("span")
            let p = document.createElement("p")
            let a = document.createElement("a")

            card.setAttribute("class", "card")
            cardImage.setAttribute("class", "cardImage")
            img.setAttribute("src", `${res.articles[index].urlToImage}`)
            // img.setAttribute("alt", "no image")
            h2.innerText = `${res.articles[index].title}`
            span.innerText = `${res.articles[index].publishedAt.slice(0, 10)}`
            p.innerText = `${res.articles[index].content.slice(0, 110)}` + "..."
            a.setAttribute("href", `${res.articles[index].url}`)
            a.setAttribute("target", "_blank")
            a.innerText = "Read more"

            cardImage.append(img)
            card.append(cardImage)
            card.append(h2)
            card.append(span)
            card.append(p)
            card.append(a)
            newsContainer.append(card)
        }
    })
})
print().catch((err)=>{
    console.log(err)
})
