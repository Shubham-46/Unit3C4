let api = async(u) => {
    let res = await fetch(u)
    let data = res.json()
    return data
}

let appendNews = (articles, main) => {
    articles.forEach((el) => {
        let div = document.createElement("div")
        div.setAttribute("class", "div1")
        let t = document.createElement("h2")
        t.textContent = el.title

        let image = document.createElement("img")
        image.setAttribute("class", "img1")
        image.src = el.urlToImage

        let dis = document.createElement("p")
        dis.textContent = el.description

        let arr = []
        div.addEventListener("click", () => {
            arr.push(el)
            localStorage.setItem("news", JSON.stringify(arr))
            window.location.href = "news.html"
        })

        div.append(t, image, dis)
        main.append(div)
    });
}

export { api, appendNews }