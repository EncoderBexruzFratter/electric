let hamburger = document.querySelector("#hamburger")
let close = document.querySelector("#close")
let res__nav = document.querySelector("#res__nav")

hamburger.addEventListener("click" , function(){
    res__nav.classList.add("left-0")
    res__nav.classList.remove("left-[-100%]")
})
close.addEventListener("click" , function(){
    res__nav.classList.remove("left-0")
    res__nav.classList.add("left-[-100%]")
})