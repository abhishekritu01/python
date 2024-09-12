{
    // block scope
    // compound statement
    //group of multiple statements are used together where js expects a single statement  -- is called block
}


// let x = 100

// {
//     // x and y hoisted to the top of the block
//     let x = 10;
//     const y = 20;
//     var a = 30;
// }



// shadowing 

// var a = 100;
// let b = 200;

// {
//     var a = 10;
//     let b =1000
//     console.log(a); // 10
//     console.log(b); // 1000

// }

// console.log(a); // 10
// console.log(b); // 200




// ---------------------illegal shadowing
// let a = 100;
// {
//     var a = 10;   //identifier 'a' has already been declared 
// }




// shadowing with let and const
// var a = 100;
// var b = 200;
// {
//     let a = 10;
//     const b = 20;
//     console.log(a); // 10
//     console.log(a); // 10
// }



// let a = 100;

// function x(){
//     var a = 100;
    
//     console.log(a); // 100
// }



