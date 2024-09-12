/**
 * 1. Register
 * 2. send welcome email
 * 3. login
 * 4. Get user data
 * 5 . Display user data
 */


// // function waitforthreeSeconds(){
//     var ms = 3000 + new Date().getTime();
//     while(new Date() < ms){}
//     // console.log('Finished waiting');
// }


// function register(){
//     waitforthreeSeconds();
//     console.log('Register');
// }
// function sendWelcomeEmail(){
//     waitforthreeSeconds();
//     console.log('Send welcome email');
// }
// function login(){
//     waitforthreeSeconds();
//     console.log('Login');
// }
// function getUserData(){
//     waitforthreeSeconds();
//     console.log('Get user data');
// }
// function displayUserData(){
//     waitforthreeSeconds();
//     console.log('Display user data');
// }

// register();
// sendWelcomeEmail();
// login();
// getUserData();
// displayUserData();









// ----------------------------- step 2 -----------------------------



// function register(){
//     setTimeout(function(){
//         console.log('Register');
//     }, 2000);
// }

// function sendWelcomeEmail(){
//     setTimeout(function(){
//         console.log('Send welcome email');
//     }, 1000);
// }
// function login(){
//     setTimeout(function(){
//         console.log('Login');
//     }, 1000);
// }
// function getUserData(){
//     setTimeout(function(){
//         console.log('Get user data');
//     }, 1000);
// }
// function displayUserData(){
//     setTimeout(function(){
//         console.log('Display user data');
//     }, 1000);   
// }

// register();
// sendWelcomeEmail();
// login();
// getUserData();
// displayUserData();
// console.log('End of script');



// ----------------------------- step 3 -----------------------------


function register(callback){
    setTimeout(function(){
        console.log('Register');
        callback();
    }, 2000);
    
}
function sendWelcomeEmail(callback){
    setTimeout(function(){
        console.log('Send welcome email');
        callback();
    }, 1000);
}

function login(callback){
    setTimeout(function(){
        console.log('Login');
        callback();
    }, 1000);
}

function getUserData(callback){
    setTimeout(function(){
        console.log('Get user data');
        callback();
    }, 1000);
}
function displayUserData(callback){
    setTimeout(function(){
        console.log('Display user data');
        callback();
    }, 1000);   
}


//-------------callback hell
register(function(){
    sendWelcomeEmail(function(){
        login(function(){
            getUserData(function(){
                displayUserData(function(){
                    console.log('End of script');
                });
            });
        });
    });
});
console.log('other application logic');

// refister(function(){
//     sendWelcomeEmail(function(){
//         login(function(){
//             getUserData(function(){
//                 displayUserData((){
//                     console.log('End of script');
//                 })
//             })
//         })
//     })
// })