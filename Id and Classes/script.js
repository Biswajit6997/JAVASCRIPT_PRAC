console.log("hello");
// select by class

let boxes=document.getElementsByClassName("box");

// select by id
boxes[2].style.backgroundColor="red"
document.getElementById("green").style.backgroundColor="green"
// querySelector
document.querySelector(".box").style.backgroundColor="pink"

// querySelectorAll

document.querySelectorAll(".box").forEach(e=>{
    e.style.backgroundColor="yellow"
})