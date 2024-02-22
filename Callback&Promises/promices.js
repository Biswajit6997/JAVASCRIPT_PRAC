console.log('This is promices');

let prom1=new Promise((resolve,reject)=>{
    let a=Math.random();
    console.log(a);
    
    if(a>.5){
        reject("No random number was suppporting you")
    }
    else{

        setTimeout(()=>{
            console.log('Yes I am done');
            resolve("Biswajit");
        },2000)
    }
})
prom1.then((a)=>{
    console.log(a); 
}).catch((err)=>{
    console.log(err);
    
})
