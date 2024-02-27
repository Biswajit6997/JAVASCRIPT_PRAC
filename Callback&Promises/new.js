// PW JavaScript



// console.log('Start');
// setTimeout(()=>{
//     console.log('Callback function');

// },0);
// console.log('ends');
// for(i=0;i<1000000000;i++){}




// console.log('Start');
// setTimeout(()=>{
//     console.log('SetTimer 1');

// },1100);
// setTimeout(()=>{
//     console.log('SetTimer 2');

// },0);
// console.log('End');
// for(i=0;i<1000000000;i++){}

// function createPromise() {
//     return new Promise(function exec(resolve, reject) {
//         setTimeout(() => {
//             console.log('Under setTime out');
//         //    resolve(200)
//         reject(200)

//         }, 1000)

//     });
// }


// console.log('Start');
// let x=createPromise()
// console.log('Got a new Promise');
// x.then((val)=>{
//     console.log("Promise done",val);

// }).catch((err)=>{
//     console.log('Somethiung went wrong',err);

// })
// console.log('end');
// for(i=0;i<1000000;i++){}


// async function a(){
//     console.log('hello');

// }
// console.log(a());

function createPromise() {
    return new Promise(function exec(resolve, reject) {
        setTimeout(() => {
            console.log('Under setTime out');
            //    resolve(200)
            resolve(200)

        }, 1000)

    });
}

async function ab() {
    console.log('inside function');
    const responce = await createPromise();
    console.log('responce is' + responce);
}
console.log('start');

ab()
console.log('ends');
