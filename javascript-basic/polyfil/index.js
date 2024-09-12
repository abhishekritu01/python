console.log("Polyfilling");


let name ={
    firstname: "Abhishek",
    lastname: "Kumar"
}

let printName = function(){
    console.log(this.firstname + " " + this.lastname );
}

let printMynam = printName.bind(name);
// printMynam();


// implementing bind function
Function.prototype.mybind = function(...args){
    let obj = this;
    params = args.slice(1);
    return function(...args2){
        obj.apply(args[0], [...params, ...args2]);
    }
}

let printMyName2 = printName.mybind(name);
printMyName2();