

// ---------- curring ----------
// curring is a technique of evaluating a function with multiple arguments, into a sequence of functions with a single argument.
// curring is a process of converting a function that takes multiple arguments into a function that takes them one at a time.


// 1. bind method
// 2. closure



let multiply = function(x,y){
    console.log(x*y);
}


// let multiplyByTwo = function(y){
//     let x = 2;
//     console.log(x * y);
// }
// multiplyByTwo(3); // 6


// let multiplyByTwo = multiply.bind(this,2,5);
// multiplyByTwo(3); // 6         //y=3


// let multiplyByThree = multiply.bind(this,3);
// multiplyByThree(3); // 9         //y=3


// let multiplyByFour = multiply.bind();
// multiplyByFour(3,4); // 12         //y=4





// closure technique to achieve curring 
// closure
let multiply1 = function(x){
    return function(y){
        console.log(x*y);
    }
}

let multiplyByTwo1 = multiply1(2);
multiplyByTwo1(3); // 6         //y=3


let multiplyByThree1 = multiply1(3);
multiplyByThree1(3); // 9         //y=3