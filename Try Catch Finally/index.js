let a =prompt("Enter 1st number")
let b =prompt("Enter 2nd number")


// if(isNaN(a)||isNaN(b)){
//     throw SyntaxError("Sorry this is not allowed")
// }
let sum=a+b

// let sum=parseInt(a)+parseInt(b);


try {
    console.log('The sum is',sum);
    
} catch (error) {
    console.log("Some error occurs"+error)
    
}
