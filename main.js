const body = document.querySelector("body")
const btn1 = document.querySelector("#btn1")
const btn2 = document.querySelector("#btn2")
const img = document.querySelector(".img")
const text = document.querySelector("#text")


btn1.onclick = () => {
    body.classList.toggle("bgc")
}

btn2.onclick = () => {
    img.classList.toggle("hiden-img")
}

btn3.onclick = () => {
    text.classList.toggle("hiden-text")
}

btn4.onclick = () => {
    text.classList.toggle("text")
}









