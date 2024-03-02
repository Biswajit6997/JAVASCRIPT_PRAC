fetch("https://api.github.com/users/Biswajit6997")
.then((responce)=>{
    return responce.json()
})
.then((data)=>{console.log(data);
})
.catch((error)=>console.log(error)
)
