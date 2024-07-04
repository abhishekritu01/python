// 1. isFinite(): Determines whether the passed value is a finite number.
const numIsFinite = Number.isFinite(10);
console.log(numIsFinite); // true

// 2. isInteger(): Determines whether the passed value is an integer.
const numIsInteger = Number.isInteger(10);
console.log(numIsInteger); // true

// 3. isNaN(): Determines whether the passed value is NaN.
const numIsNaN = Number.isNaN(NaN);
console.log(numIsNaN); // true

// 4. isSafeInteger(): Determines whether the passed value is a safe integer.
const numIsSafeInteger = Number.isSafeInteger(10);
console.log(numIsSafeInteger); // true

// 5. parseFloat(): Parses a string argument and returns a floating point number.
const numParseFloat = Number.parseFloat('10.5');
console.log(numParseFloat); // 10.5

// 6. parseInt(): Parses a string argument and returns an integer.
const numParseInt = Number.parseInt('10.5');
console.log(numParseInt); // 10

// 7. toExponential(): Returns a string representing the number in exponential notation.
const numToExponential = (10).toExponential(2);
console.log(numToExponential); // "1.00e+1"

// 8. toFixed(): Returns a string representing the number in fixed-point notation.
const numToFixed = (10.5).toFixed(2);
console.log(numToFixed); // "10.50"

// 9. toLocaleString(): Returns a string with a language-sensitive representation of this number.
const numToLocaleString = (1234567.89).toLocaleString();
console.log(numToLocaleString); // "1,234,567.89"

// 10. toPrecision(): Returns a string representing the number to a specified precision.
const numToPrecision = (10.1234).toPrecision(3);
console.log(numToPrecision); // "10.1"

// 11. toString(): Returns a string representing the specified Number object.
const numToString = (10).toString();
console.log(numToString); // "10"

// 12. valueOf(): Returns the primitive value of the specified Number object.
const numValueOf = (10).valueOf();
console.log(numValueOf); // 10
