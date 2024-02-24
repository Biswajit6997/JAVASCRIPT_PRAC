const promiseOne = new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log("Async task 1");
        resolve();

    }, 1000)

})
promiseOne.then(function () {
    console.log("Async task 1 completed");

})

// /////////////////

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async task 2");
        resolve();

    }, 1000)

}).then(() => {
    console.log('Async 2 resolved');

})
// ////////////

const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "chai", email: "chai@example.com" })

    }, 1000)

})

promiseThree.then(function (user) {
    console.log(user);

})
// ////////

const PromiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false;
        if (!error) {
            resolve({ username: "biswajit", pwd: "123" });
        }
        else {
            reject("ERROR:Something Went Wrong");
        }
    }, 1000)
})

PromiseFour
    .then((user) => {
        console.log(user);
        return user.username;

    }).then((username) => {
        console.log(username);

    }).catch(function (error) {
        console.log(error);

    }).finally(() => console.log("The Promises is either resolved or rejected"))



// /////

const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false
        if (!error) {
            resolve({ usename: "javascript", pwd: "1224" })
        }
        else {
            reject("Error:JS went wrong")
        }
    }, 1000)
});



async function consumeFive() {

    try {
        const responce = await promiseFive
        console.log(responce);

    }
    catch (error) {
        console.log(error);
    }
}
consumeFive()

console.log(".....................................................................");

async function getAlluser() {

    try {
        const responce = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await responce.json()
        // console.log(data);
    } catch (error) {
        console.log(error);
    }
}
getAlluser()

////////


fetch("https://api.github.com/users/Biswajit6997")
.then((responce)=>{
    return responce.json()
})
.then((data)=>{console.log(data);
})
.catch((error)=>console.log(error)
)

