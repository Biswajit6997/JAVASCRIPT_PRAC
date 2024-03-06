async function sleep(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(45)
        },1000)
    })
}
// IIFE function 

(async function a(){
    let a=await sleep()
    // console.log(a);
    
    let b=await sleep()
    // console.log(b);
    

})()


//Destructring

let [x,y,...rest]=[1,5,7,56,67,7,74]
// console.log(x,y,rest);

let obj={
    a:1,
    b:2,
    c:3
}
let {a,b}=obj
console.log(a,b);

//Spreed Syntax

function sum(a,b,c){
    return a+b+c

}
let arr=[1,4,6,7,8]
console.log(sum(...arr));

//Hosting
console.log(a1);

var a1=6 // undefined

// let and const are do not prticipate in Hosting





