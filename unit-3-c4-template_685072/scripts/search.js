// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import { navbar } from "../components/navbar.js"
import { api, appendNews } from "../scripts/fetch.js"

let n = document.getElementById("sidebar")
n.innerHTML = navbar();

// let searchNews = (s) => {
//     s.addEventListener("keypress", (a) => {
//         if (a.key === "Enter") {
//             let value = document.getElementById("search_input").value;
//             localStorage.setItem("searchdata", value)
//             window.location.href = "search.html"
//             api(value).then((data) => {
//                 console.log("data:", data)
//                 let main = document.getElementById("results")
//                 appendNews(data.articles, main)
//             })

//         }
//     })

// }
// export { searchNews }
// div.addEventListener("click", () => {
//             arr.push(el)
//             localStorage.setItem("news", JSON.stringify(arr))
//             window.location.href = "news.html"
//                 // })


// let searchNews = (a) => {
//     if (a.key === "Enter") {
//         let value = document.getElementById("search_input").value;
//         localStorage.setItem("searchdata", value)
//         window.location.href = "search.html"
//         api(value).then((data) => {
//             console.log("data:", data)
//             let main = document.getElementById("results")
//             appendNews(data.articles, main)
//         })


//     }


// }