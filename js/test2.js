

// const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const result = num.filter( (num) =>{
//     return num > 5;
// })

// console.log(result);


// let st = "Hello World!";

// let strValue = st.split('').filter((char)=>{
//     return char !== 'l';
// })
// console.log(strValue);


// const str =[ 'Hello', 'World', 'Goodbye', 'World'];

// const result1 = str.filter((str)=>{
//     return str !== 'World';
// })

// console.log(result1);


const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const result = num.map((num)=>{
//     return num + num;
// })

// const result = num.reduce((acc, num)=>{
//     console.log(`acc: ${acc}, num: ${num}`);
//     return acc + num;
// }, 0)

// console.log(result);

const shoppingCart = [
    {
        product: 'phone',
        qty: 1,
        price: 699
    },
    {
        product: 'Screen Protector',
        qty: 1,
        price: 9.98
    },
    {
        product: 'Memory Card',
        qty: 2,
        price: 20.99
    }
]

const result = shoppingCart.reduce((acc, cartItem) => {
    console.log(`acc: ${acc}, cartItem.price: ${cartItem.price}, cartItem.qty: ${cartItem.qty}`);
    return acc + cartItem.price * cartItem.qty;
}, 0); // Added initial value of 0

console.log(result); // Output will be the total price



let c = "adsasdasdfas asdads";
let result1 = "";

for(let i = 0; i < c.length; i++){
    result1 += c.charAt(i);
}

console.log(result1);
