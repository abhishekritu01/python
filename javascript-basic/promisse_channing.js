const cart = ["apple", "banana", "pear"];

createOrder(cart)
.then(function (orderId) {
    console.log("Order ID: " + orderId);
    return orderId;
})
.catch(function (err) {
    console.log("Error: " + err.message);
})
.then(function (orderId) {
    return proceedToPayment(orderId);
})
.then(function (paymentinfo) {
    console.log(paymentinfo);
})
.catch(function (err) {
    console.log("Error: " + err.message);
})
.then(function () {
    console.log("All done");
}); 

// producer

function createOrder(cart) {
    const pr = new Promise(function (resolve, reject) {
        if (!validateCart(cart)) {
            const err = new Error("Invalid cart");
            reject(err);
        }
        const orderId = "123456";
        if (orderId) {
            setTimeout(function () {
                resolve(orderId);
            }, 2000);
        }
    });
    return pr;
}

// consumer
function proceedToPayment(orderId) {
    console.log("Proceeding to payment for Order ID: " + orderId);
    return new Promise(function (resolve, reject) {
        resolve("Payment done");
    });
}

function validateCart(cart) {
    return true;
}
