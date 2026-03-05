console.log('hello');
setTimeout(()=>{
    console.log("will log after 2 seconds")
},2000)
Promise.resolve("Promise").then(res=>console.log(res))
console.log('end')
