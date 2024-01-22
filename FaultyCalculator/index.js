/*Create a faluty calculator using javascript
This fau;ty valculator does following:
1.It takes input from the user
2.It performs wrong opertaion as follows
+ ---> -
* --> +
- --> /
/ --> **
It performs wrong operation 10% of the times



*/ 



let random=Math.random()
let a=prompt("Enter first Number:")
let c=prompt("Enter operation:")
let b=prompt("Enter Secound Number:")

let obj={
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**",
}
// It performs wrong operation 10% of the times

if(random<0.1){
    // perform the calculation
    console.log(`${a} ${c} ${b}`);
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}
else{
    c=obj[c]
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)

}