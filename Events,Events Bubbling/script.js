let boxes=document.getElementById("btn")
boxes.addEventListener("click",()=>{
    document.querySelector(".box").innerHTML="Hello world";
})

// button.addEventListener("dblclick", ()=>{
//     document.querySelector(".box").innerHTML = "<b>Yayy you were clicked</b> Enjoy your click!"
// })

boxes.addEventListener("dblclick",()=>{
    alert("Dont click doubble click")
})
boxes.addEventListener("copy",()=>{
    alert("dont try to copy")
})

