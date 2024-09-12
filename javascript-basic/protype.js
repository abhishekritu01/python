const name = ["abhishek", "rahul", "raj", "amit"];

let object1 = {
  name: "abhishek",
  printName: function () {
    console.log(this.name);
  },
};

let object2 = {
    name: "abhishek",
    printName: function () {
      console.log(this.name);
    },
  };


object2.__proto__ = object1;


// whenever create a javascript object it has a automatically attach prototype object


function fun() {}




// both are same 
// Array.prototype
// NamedNodeMap.__proto__
// Object.prototype

// name.__proto__.__proto__.__proto__    is null
