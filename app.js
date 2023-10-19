const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector(".container")  //class olduğu için queryselector ile çağırırız

open.addEventListener("click", () =>{
    container.classList.add("show-nav");
})

close.addEventListener("click", () =>{
    container.classList.remove('show-nav')
})
