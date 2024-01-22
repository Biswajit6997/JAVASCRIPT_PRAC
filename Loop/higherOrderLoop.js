//  for of

const arr=[1,2,3,4,5];
for (const i of arr) {//forof loop syntax
    // console.log(i);
    
}
const greetings="Hello World"
for(const i of greetings){
    if(i == " "){
       continue;
    }
    console.log(`Each charcter is ${i}`);
}

// Map function
//  Map function does repeat any value

const map=new Map()
map.set('In',"India")
map.set('USA',"United state of America")
map.set('Jp',"Japan")
console.log(map);