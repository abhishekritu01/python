
/**
 * what is async ?
 * what is await ?
 * how async and await works behind the scene ?
 * example of async and await
 * error handling in async and await
 * Interveiw questions
 * Async and await vs Promise.then/catch
 */


// 1 . what is async ?

console.log("1. what is async ?");


const p = new Promise((resolve,reject)=>{
   
    setTimeout(() => {
        // resolve("Async operation 1...");
        reject(new Error("Something went wrong"));
    }, 4000);
})

async function getData(){
    // return "Hello World";       // automatically wrapped in a promise
    return p;   
}


const dataPromise = getData();

console.log(dataPromise); // Promise {<fulfilled>: "Hello World"}

dataPromise
.then(res => console.log(res))   // Hello World
.catch(err => console.error(err));






// ---------------- 2 async and await ----------------

// const p  = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve("Async operation 1...");
//     }, 10000);
// })


// async function handlePromise (){
//     console.log("Before calling promise");
//     const value = await p;
//     console.log("After calling promise");       // wait for promise to resolve and then execute this line
//     console.log(value)


//     const value2 = await p;
//     console.log(value2)
//     console.log("After calling promise 2");
// }


// function getData(){
//     p.then(res => console.log(res))
//     .catch(err => console.error(err));
//     console.log("Before calling promise");
// }


// // getData()
// handlePromise()