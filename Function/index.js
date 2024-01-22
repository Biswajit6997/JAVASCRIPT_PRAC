console.log("Biswajit is a good programmer");
console.log("bisajit likes food");

function f1(name) {
    console.log("My name is" +name);
    
}
f1("biswajit")

function add(a,b,c=3){
    // console.log(a+b);
    return a+b;
}
sum=add(2,3)
sum1=add(2,8)
sum2=add(25,3)
console.log("sum of two number is :"+sum);
console.log("sum of two number is :"+sum1);
console.log("sum of two number is :"+sum2);

// arrow function

const a =(num)=>{
    console.log("I am an arrow function",num);

}
a(5);
a(53);
a(512);