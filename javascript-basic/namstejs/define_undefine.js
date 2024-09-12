// console.log(a)

// var a = 10;

// console.log(a);



// ============== scope chain ==============


function a(){
    b()
  function b(){
    console.log(x);
  }
}

let x =10;


a()