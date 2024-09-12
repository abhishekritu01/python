const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Async operation 1...");
    }, 5000);
})


const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Async operation 2...");
    }, 10000);
})

async function handlePromise() {
    console.log("Before calling promise");
    const value = await p1;
    console.log("After calling promise"); // wait for promise to resolve and then execute this line
    console.log(value)


    const value2 = await p2;
    console.log(value2)
    console.log("After calling promise 2");

    return "Done";    // automatically wrapped in a promise
}   

handlePromise()