const promiseOne=new Promise(function(resolve,reject){
    setTimeout(()=>{
        console.log("Async task 1");
        resolve();
        
    },1000)
    
})
promiseOne.then(function(){
      console.log("Async task 1 completed");
      
  })
new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Async task 2");
        resolve();
        
    },1000)

}).then(()=>{
    console.log('Async 2 resolved');
    
})


