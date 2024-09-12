// let person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 30,
//     address: {
//         street: "123 Main St",
//         city: "Anytown",
//         state: "CA",
//         postalCode: "12345"
//     },
//     hobbies: ["Reading", "Traveling", "Cooking"],
//     isStudent: false
// };

// Accessing object properties
// console.log(person.address.street); // John

// console.log(person.hobbies[1]); // Traveling

// const value = person.hobbies.forEach((hobby, index) => {
//     console.log( hobby);
// })


// console.log(person.hobbies[0]); // Reading   



// ------------------------- Object Methods  -------------------------

// const person = [
//     {name: "John", age: 30},
//     {name: "Jane", age: 25},
//     {name: "Jim", age: 20},
//     {name: "Jack", age: 35},
//     {name:"Arjun", age: 25},
//     {name:"Rahul", age: 30},
//     {name:"Raj", age: 25},
//     {name:"Ravi", age: 30},
// ]

// console.log(person);
// console.log(person.length);
// console.log(person[0].name);


// console.log(Object.values(person));
// console.log(Object.keys(person));
// console.log(Object.entries(person));


// ----------- iterating over an object ------------

// 1 - for loop
// for(let i =0; i < person.length; i++){
//     // console.log(person[i])
//     console.log(person[i].name,"-",person[i].age);
// }

// 2 - forEach        
// person.forEach((person,index)=>{
//     console.log(index ,person.name,"-",person.age);
// })


// 3 - for of loop
// for (let p of person){
//     console.log(p.name,"-",p.age);
// }



const person = [
    {name: "John", age: 30},
    {name: "Jane", age: 25},
    {name: "Jim", age: 20},
    {name: "Jack", age: 35},
    {name:"Arjun", age: 25},
    {name:"Rahul", age: 30},
    {name:"Raj", age: 25},
    {name:"Ravi", age: 30},
]


//map
// let personData = person.map((item,index)=>{
//     return {
//         name: item.name,
//         age: item.age
//     }

//     // return item.name
// })

// console.log(personData)



// //filter

// let filterdata = person.filter((item)=>item.age < 25)
// console.log(filterdata)


// //find

// let findData = person.find((item)=>item.name === "Rahul")   
// console.log(findData)


// reducer

// let arr = [1,2,3,4,5,6,7,8,9,10]

// let sum = arr.reduce((acc,curr)=>{
//     return acc + curr
// })

// console.log(sum)


