function register() {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            //  return reject("Error while registering");
            console.log('Register   1');
            resolve("Register success");
        }, 2000);
    })
}


function sendWelcomeEmail() {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log('Send welcome email  2');
            resolve();
            // reject("Error while sending welcome email");
        }, 1000);
    }
    )
}

function login() {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log('Login    3');
            resolve();
        })
    })
}

function getUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log('Get user data     4');
            resolve();
        }, 1000);
    })
}
function displayUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log('Display user data     5    ');
            resolve();
        }, 1000);
    })
}


//------------- callback hell ----------------
// register(function(){
//     sendWelcomeEmail(function(){
//         login(function(){
//             getUserData(function(){
//                 displayUserData(function(){
//                     console.log('End of script');
//                 });
//             });
//         });
//     });
// });
// console.log('other application logic');




// register()
// .then(sendWelcomeEmail)
// .then(login)
// .then(getUserData)
// .then(displayUserData)
// .then(() => {
//     console.log('End of script');
// }).catch((err) => {
//     console.log("Error: ", err);
// })





// ----------------------------- step 4 -----------------------------


// --------- method chaining -----------
// register()
// .then(sendWelcomeEmail)
// .then(login)
// .then(getUserData)
// .then(displayUserData)
// .then(() => {
//     console.log('End of script');
// }).catch((err) => {
//     console.log("Error: ", err);    
// });




// ----------------------------- step 5 -----------------------------
// using async await

// async fuction by default return promise
// async function authentication(){

//     await register();
//     await sendWelcomeEmail();
//     await login();
//     await getUserData();
//     await displayUserData();
// }


// authentication();
// authentication().then(() => {
//     console.log('End of script');
// }).catch((err) => {
//     console.log("Error: ", err);
// })


// function signinup(){
//     return new Promise((resolve ,reject)=>{
//         setTimeout(()=>{
//             console.log('Sign up');
//             resolve();
//         },2000)
//     })
// }






// ----------------------------- step 6 -----------------------------

async function authentication() {
    try {
        const message = await register();
        await sendWelcomeEmail();
        await login();
        await getUserData();
        await displayUserData();
        console.log('message: ', message);

    } catch (err) {
        console.log("Error: ", err);
        throw new Error("Error in authentication");
    }
}

authentication().then(() => {
    console.log('End of script');
}).catch((err) => {
    console.log("Error: ", err);
})








