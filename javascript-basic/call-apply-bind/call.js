

// call 

// let name1 = {
//     name : "abhishek",
//     last : "kumar",
//     printName : function(){
//         console.log(this.name + " " + this.last);

//     }
// }


// let name2 ={
//     name: "rahul",
//     last: "kumar"
// }


// name1.printName.call(name2); // rahul   




// second example

let printName = function(hometown, state){
    console.log(this.name + " " + this.last + " " + hometown + " " + state);
}

let name1 = {
    name : "abhishek",
    last : "kumar",

}


let name2 ={
    name: "rahul",
    last: "kumar"
}

// printName.call(name2,"sitamarhi","bihar"); // rahul   
printName.call(name1,"patna","Bihar"); // rahul   


// apply in apply method we pass the arguments in array list
printName.apply(name1,["sitamarhi","bihar"]); // rahul


// bind
let printMyName = printName.bind(name1,"sitamarhi","bihar");
console.log(printMyName); // [Function: bound printName]
printMyName(); // abhishek kumar sitamarhi bihar