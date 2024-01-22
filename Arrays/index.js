let numbers=[1,2,3,4,5]
let numbers2=[6,7,8,9,10]

console.log(numbers.length);

console.log(typeof numbers);// object

// Array methods 

// 1.toString
let n=[1,2,3,4,5,6]
console.log(n.toString());

// 2.join

console.log(n.join(numbers,numbers2));

// 3.pop
console.log(n.pop());
// 4.push
console.log(n.push(12));
console.log(n);

// 4.shift
console.log(n.shift());
// 5.delete
// console.log(delete n[2]);
console.log(n);

// 6.sort
let a=[1,3,4,5,7,8,910]

a.sort()
console.log(a);

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
console.log(fruits);

// Splice
let num=[1,2,3,4,5]
num.splice(2,2,23,24)//splice[position,no of elelment to remove,element to add,element to adda]
console.log(num);

// slice
let b1=[9,8,7,6,5,4,3]
b1.slice(1,3)
console.log(b1);

// reverse
let b2=[9,8,7,6,5,4,3]
b2.reverse()
console.log(b2);

