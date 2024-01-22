// this is string practics
let a="Biswajit"
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
console.log(a[5]);
console.log(a[6]);
console.log(a.length);
let real_name="Biswajit"
let fri_name="Arup"
console.log("His name is "+real_name +" and His friend name is "+fri_name);
console.log(`my name is ${real_name} and his friend name is ${fri_name}`);
// Uppercase and lowerCase
console.log(a.toUpperCase());
console.log(a.toLowerCase());
// splice function
console.log(a.slice(1,5));
console.log(a.slice(4));
// console.log(a.prototype);

// Replace with
let name="Biswajit Dey";
let newName=real_name.replace("Biswa","Bisu");
console.log(newName);
console.log(real_name);

// Concat 
let name1="bisu"
let name2="partha"
let name3="sourav"
let name4=name1.concat(name2,name3,"❤️(●'◡'●)(❁´◡`❁):-Susmita")
console.log(name4);

// Trim function :-- to replace white space
let name23="     biswajit";
console.log(name23);
console.log(name23.trim());

// Starts With
let username="abcdefghijklmnopqrstuvwxyz"
console.log(username.startsWith("ab"))
// Ends With
console.log(username.endsWith("xyz"))


