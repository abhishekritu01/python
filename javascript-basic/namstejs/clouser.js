// console.log('Clouser Example');

// function x(){
//     var a = 10;
//     function y(){
//         console.log(a);
//     }
//     y();
// }

// // x();

// var z = x()
// console.log(z); // undefined

// // z(); // 10





// ==============

// function x() {
//     var a = 10;
//     function y() {
//         console.log(a);
//     }
//     a = 100
//     return y();
// }

// // x();

// var z = x()
// console.log(z); // undefined

// z(); // 10






// ==============

// function z() {
//     var b = 900;
//     function x() {
//         var a = 10;
//         function y() {
//             console.log(a, b);
//         }
//         y();
//     }
//     return x();
// }

// z();



// =================


// function x(){
    
//     for(let i=0;i<=5;i++){
//         setTimeout(function(){
//             console.log(i);
//         },i * 1000);
//     }
// }
// x()
// --------------------------------

// function x(){
//     for(var i=0;i<=5;i++){
//         function close(x){
//             setTimeout(function(){
//                 console.log(x);
//             },x * 1000);
//         }
//         close(i);
//     }
// }
// x()


// =================

// function outer (){
//     var a = 10;
//     function inner(){
//         console.log(a);
//     }
//     return inner;
// }

// outer()(); // 10

// var close = outer();
// console.log(close); // [Function: inner]

// close(); // 10