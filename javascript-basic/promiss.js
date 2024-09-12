
// const cart = ["shoes", "pants", "shirt"];

// // callback hell
// api.createOrder(cart, function(){
//     api.showSummary(function(){
//         api.processPayment(function(){
//             api.updateWallet();
//         });
//     });
// });


// // promise  
// const promise = createOrder(cart);     // createOrder(cart) return promise object

// // {data : {orderID: 1234}}

// // attach a callback function to the promise object
// promise.then(function(){
//     processedToPayment(orderId)
// })



// // promise



// -------------
const GITHUB_API = "https://api.github.com/users/";

const user = fetch(GITHUB_API) // fetch return promise object

console.log(user);

user.then(function(response){
    console.log(response);
})





// ---------- promise channing ------------

const createOrders = createOrder(cart);   

createOrders 
.then(function(orderId){
    return processPayment(orderId);
})
.then(function(){
    return showSummary();
})
.then(function(){
    return updateWallet();
})
.then(function(){
    console.log("done");
})


//second way to write promise channing
createOrder(cart)
.then((orderId) => processPayment(orderId))
.then(() => showSummary())
.then(() => updateWallet())
.then(() => console.log("done"));