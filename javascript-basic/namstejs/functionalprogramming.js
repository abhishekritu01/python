// const radius = [3, 1, 2, 4];

// const area = function (radius) {
//     return Math.PI * radius * radius;
// };

// const circumference = function (radius) {
//     return 2 * Math.PI * radius;
// };

// const diameter = function (radius) {
//     return 2 * radius;
// };

// // const calculate = function (radiusArray, operation) {
// //     const output = [];

// //     for (let i = 0; i < radiusArray.length; i++) {
// //         output.push(operation(radiusArray[i]));
// //     }

// //     return output;
// // };

// const calculate = function (radiusArray, operation) {
//     return radiusArray.map(operation);
// };


// console.log(calculate(radius, area));
// console.log(calculate(radius, circumference));
// console.log(calculate(radius, diameter));






//  map function
 
// const arr = [1, 2, 3, 4, 5];

// const double = function (value) {
//     return value * value;
// }

// const triple = function (value) {
//     return value * value * value;
// }


// const binary = function (value) {
//     return value.toString(2);
// }

// // const output = arr.map(double)
// // const output = arr.map(triple)
// const output = arr.map(binary)

// console.log(output);



// ====================filter function


// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const even = function (value) {
//     return value % 2 === 0;
// }

// const odd = function (value) {
//     return value % 2 !== 0;
// }

// // const output = arr.filter(even);
// const output = arr.filter(odd);

// console.log(output);




// reduce function
// const arr = [5,1,8,9,2,3,7,6,4];

// const output = arr.reduce(function (accumulator, currentValue) {
//     console.log("accumulator = ", accumulator, "currentValue = ", currentValue);
//     return accumulator + currentValue;
// },2)

// console.log(output);

// const max = function (accumulator, currentValue) {
//     if (accumulator > currentValue) {
//         return accumulator;
//     } else {
//         return currentValue;
//     }
// }   

// const min = function (accumulator, currentValue) {
//     if (accumulator < currentValue) {
//         return accumulator;
//     } else {
//         return currentValue;
//     }
// }



// const output = arr.reduce(min);
// const output1 = arr.reduce(max);

// console.log(output);
// console.log(output1);





// 

const user =[
    {firstName: 'Rahul', lastName: 'Kumar', age: 30},
    {firstName: 'Rohit', lastName: 'Sharma', age: 35},
    {firstName: 'Virat', lastName: 'Kohli', age: 40},
    {firstName: 'Sachin', lastName: 'Tendulkar', age: 30},
];


const fullname = user.map(x=> x.firstName + ' ' + x.lastName);
console.log(fullname);



// FINDING SAME AGE PEOPLE
const age = user.reduce(function (accumulator, currentValue) {
    if (accumulator[currentValue.age]) {
        accumulator[currentValue.age]++;
    } else {
        accumulator[currentValue.age] = 1;
    }
    return accumulator;
}
, {});

console.log(age);



// const output3 = user.filter(x=> x.age === 30).map(x=> x.firstName);

const output3 = user.reduce(function (accumulator, currentValue) {
    console.log("accumulator = ", accumulator, "currentValue = ", currentValue);
    if (currentValue.age === 30) {
        accumulator.push(currentValue.firstName);
    }
    return accumulator;
},[]);

console.log(output3);