
// fuction statement  is also called function declaration
function a(){
    console.log('a called');
}
// a();

// function expression
// b(); // this will throw error as b is not defined
var b = function(){
    console.log('b called');
}
b();
console.log(b()); // this will return function b


// differece between function statement and function expression is hoisting in function 
// statement function can be called before the function is declared but in function expression function can be called only after the function is declared.



// Anonymous function
// function without name is called anonymous function

function(){

}



// // named function expression
// var c = function xyz(parapeters){
//     console.log('xyz called');
// }

// // xyz(); // this will throw error as xyz is not defined
// c(argument); // this will work as c is defined and c is pointing to xyz function



// first class function
// functions are treated as first class citizens

// 1. function can be stored in a variable


function a(){
    return function b(){
        console.log('b called');
    }
}

console.log(a()); // this will return function b


// ability to pass function as argument to another function and return function from another function is called first class function



