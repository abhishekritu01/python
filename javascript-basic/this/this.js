"use strict";
// console.log(this); //global object is window   || in node.js it is global

// function x() {
//   console.log(this); //global object is window   || in node.js it is global
// }

// x();    

// the value of this inside function is the global object in non-strict mode
// the value of this inside function is undefined in strict mode
// this substitution so the value equal to global object if will not use strict mode

//  the values of this key words depend how the function is called
// x();   // undefined       || function is called without referance is undefined

// window.x(); // window object


// this is in strict mode   -(this substitution)








// this keyword depends on how the value is called

// ************ function inside object called method

// let user = {
//   a: 2000,
//   age : 20,
//   x: function () {
//            console.log(this.a); // user object
//            console.log(this); // user object
//            console.log(this.age); // user object
//   },
// };

// user.x();









// ----------------------------- call apply bind ----------------------------


// const student = {
//     name:'abhishek',
//     printName: function(){
//         console.log(this.name);
//     }
// }

// student.printName(); // abhishek


// const student2 = {
//     name:'rahul',
// }   

// student.printName.call(student2); // rahul







//  how those this behave in arrow function

// arrow function does not have its own this


// const a = 10;

// const obj ={
//     a: 10,
//     x: ()=>{
//         // console.log(this); // global object || arrow function does not have its own "this" so it will take the value of global object
//         console.log(this); // undefined 
//     }
// }

// obj.x();


// arrow function k andar me jo this hai wo uske global object ko point karega
// arrow function does not have its own this so it will take the value of global object






// second example


// const obj2 ={
//     b: 100,
//     x: function(){
//         // basically  this behaves like   
//         //console.log(this); // obj2
//         //enclosing lexical context
//         const y = ()=>{
//             console.log(this); // 10       // arrow function does not have its own this so it will take the value of global object
//         }
//         y();
//     }
// }

// obj2.x();








// this inside  class and constructor
