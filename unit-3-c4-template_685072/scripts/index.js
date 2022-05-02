// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
//

import { navbar } from "../components/navbar.js"
import { api, appendNews } from "../scripts/fetch.js"
// import { searchNews } from "../scripts/search.js"

let n = document.getElementById("sidebar")
n.innerHTML = navbar();



let url = `https://masai-mock-api.herokuapp.com/news/top-headlines?country=in`;
let data = await api(url)
console.log(data)
let main = document.getElementById("results")
appendNews(data.articles, main)

// let search = document.getElementById("search_input")
// searchNews(search)


// let searchNews = (a) => {
//     if (a.key === "Enter") {
//         let value = document.getElementById("search_input").value;
//         localStorage.setItem("searchdata", value)
//         api(value).then((data) => {
//             console.log("data:", data)
//             let main = document.getElementById("results")
//             appendNews(data.articles, main)
//         })


//     }


// }