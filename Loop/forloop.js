console.log("loop tutorial....");

// for(i=0;i<5;i++){
//     console.log(i);
// }

// console.log(null);
// console.log(0);
// console.log();
let array=[3,3124,3244325,5,435];
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    console.log(element);
    
}
// continue and break keyword
for (let i = 0; i < 10; i++) {
    if (i==5) {
        console.log(`Detcted 5`);
        // break;
        continue;
        
    }
    console.log(`Value of i is${i}`);
    
    
}