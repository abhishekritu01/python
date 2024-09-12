
// callback function is a function that is passed as an argument to another function

// function greet(name, callback) {
//     console.log('Hi ' + name);
//     callback();
// }

// function callMe() {
//     console.log('I am callback function');
// }   

// greet('Namaste JS', callMe);    



{/* <button id="clickMe">Click Me</button> */}

function attachEventListener(){
    let count = 0 ;
    document.getElementById('clickMe').addEventListener('click', function(){
        console.log('Button Clicked', ++count);
    });
}

attachEventListener();