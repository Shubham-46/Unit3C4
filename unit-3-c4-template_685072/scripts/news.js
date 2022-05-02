// Ude Import export (MANDATORY)
import { navbar } from "../components/navbar.js"
import { api, appendNews } from "../scripts/fetch.js"

let n = document.getElementById("sidebar")
n.innerHTML = navbar();
let res = JSON.parse(localStorage.getItem("news")) || []
console.log("res", res)
let main = document.getElementById("results")
appendNews(res, main)