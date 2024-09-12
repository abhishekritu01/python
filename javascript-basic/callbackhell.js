
// console.log("hello world");

// setTimeout(() => {
//     console.log("hello world 2");
//     }, 1000);

// console.log("hello world 3");



// ---------------------------- callback hell ----------------------------

const cart = ["pants", "shoes", "shirt"];

// api.createOrder();
// api.processPayment();
// api.showSummary();
// api.updateWallet()

// if u want to execute this api in order, u can use callback function

// api.createOrder(() => {
//     api.processPayment(() => {
//         api.showSummary(() => {
//             console.log("done");
//         });
//     });
// })


// api.createOrder(cart,function(){
//     api.showSummary(function(){
//         api.processPayment(function(){
//             api.updateWallet()
//         }
//         )
//     });
// })

//callback
// function(){
//     api.updateWallet()
// }

// -------- inversion of control
function A(callback){
    console.log("A");
    callback();
}

function B(callback){
    console.log("B");
    callback();
}

function C(callback){
    setTimeout(() => {
        console.log("C");
        callback();
    }, 1000);
}

function D(callback){
    console.log("D");
    callback();
}

// D(() => {
//     C(() => {
//         B(() => {
//             A(() => {
//                 console.log("All callbacks executed.");
//             });
//         });
//     });
// });

A(()=>{
    B(()=>{
        C(()=>{
            D(()=>{
                console.log("All callbacks executed.");
        })
    })
})})


