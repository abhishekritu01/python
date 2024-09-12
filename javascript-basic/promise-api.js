
// ---------------------- 1. Promise API ----------------------promise.all
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // console.log('Async operation 1...');
        // resolve("p1 success");
        reject(new Error('p1 failed'));
    }, 1000);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // console.log('Async operation 2...');
        // resolve("p2 success");
        reject(new Error('p2 failed'));

    }, 3000);
})


const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // console.log('Async operation 3...');
        // resolve("p3 success"); 
        reject(new Error('p3 failed'));
    }, 3000);
})


// Promise.all([p1, p2, p3])
// .then(result => console.log(result))
// .catch(err => console.error('Error', err.message));




// Promise.allSettled([p1, p2, p3])
// .then(result => console.log(result))
// .catch(err => console.error('Error', err.message));




// Promise.race([p1, p2, p3])
// .then(result => console.log(result))
// .catch(err => console.error('Error', err.message));




// Promise.any([p1, p2, p3])
// .then(result => console.log(result))
// .catch((err) =>{
//     console.error('Error', err.message);
//     console.log('Error', err.errors);
// });