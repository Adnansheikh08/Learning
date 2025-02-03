


// let FirstPromise = new Promise((resolve,reject)=>{
//     console.log('Adnan')
// })


let promise1 = new Promise((resolve,reject)=>{
    let success = false;
    if (success) {
        resolve("Resolved")
    } else {
        reject("Rejected")
    }
})

promise1.then((message)=>{
    console.log("Then ka message is " +message)
}).catch((err)=>{
    console.log(new Error("Masla"))
}).finally(()=>{
    console.log("finalll")
})

