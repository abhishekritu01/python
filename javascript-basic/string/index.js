// let str = "Hello";

// console.log(str.length);
// console.log(typeof str);
// console.log(str[1])


// // string is immutable
// str[1] ="b"// but this will not work because string is immutable

// let str1 = `hello 
// all this string is single string`

// console.log(str1)


// ------part 2 -----------

// let str1 = "Hello";
// let str2 = "World";
// let con = str1+str2;
// console.log(con);

//subsrting

// let str = "Hello World";
// // let sub = str.substring(2,4);
// console.log(str.substring(1,4));


// //upper and lower case
// let str = "Hello World";
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());



//7. Find the index of a substring within a string using indexOf() method.
// let str = "Hello World";
// console.log(str.indexOf("World")); //6
// console.log(str.indexOf("z")); //-1  if not found then return -1




// 8. String Replace in JavaScript
// let str = "Hello World";
// console.log(str.replace("World","Javascript")); //Hello Javascript
// console.log(str.replace("H","Javascript")); //Hello World




//9. Trimming Whitespace from String

// let str = "   Hello World   ";
// console.log(str.length); //Hello World
// console.log(str.trim().length); //Hello World


// 10. Access Characters from String

// let str = "Hello World";
// console.log(str.charAt(2)); //e
// console.log(str.charCodeAt(2)); //101
// console.log(str[6]); //e


// // 11. String Comparison in JavaScript
// let str1 = "Hello";
// let str2 = "hello";
// console.log(str1 == str2); //false
// console.log(str1.localeCompare(str2)); //1  false


// 12. Passing JavaScript String as Objects
// let str = new String("Hello World");
// console.log(str); //Hello World
// console.log(str.valueOf()); //Hello World
// console.log(str.toString()); //Hello World
// console.log(typeof str); //object



// Are the strings created by the new keyword is same as normal strings?
// No, the string created by the new keyword is an object and is not the same as normal strings.

// 13. String Concatenation in JavaScript
// let str1 = "Hello";
// let str2 = "World";
// let str3 = "Javascript";
// let con = str1.concat(str2,str3);
// console.log(con); //HelloWorldJavascript


// 14. Splitting a String in JavaScript
// let weblink = "google.com";
// let parts = weblink.split(".");
// console.log(parts); //[ 'https://www', 'google', 'com' ]
// console.log(parts[1]); //google


