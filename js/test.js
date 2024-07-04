
const fs = require('fs');
const os = require('os');

// console.log('Hello World!');
// block operation
// const data = fs.readFileSync('test.txt', 'utf8');
// console.log(data);

// console.log('Goodbye World!');







// console.log('Hello World!');
// fs.readFile('test.txt', 'utf8', (err, data) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log(data);
// });

// console.log('Goodbye World!');


//default thread pool size is 4
//max thread    -8 core cpu 4*2=8

console.log(os.cpus().length);
