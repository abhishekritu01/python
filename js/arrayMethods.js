// 1. concat(): Merges two or more arrays into a new array.
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arrConcat = arr1.concat(arr2);
console.log(arrConcat); // [1, 2, 3, 4, 5, 6]

// 2. copyWithin(): Copies part of an array to another location within the same array.
const arrCopy = [1, 2, 3, 4, 5];
arrCopy.copyWithin(0, 3);
console.log(arrCopy); // [4, 5, 3, 4, 5]

// 3. entries(): Returns a new Array Iterator object with key/value pairs for each index.
const arrEntries = [1, 2, 3].entries();
for (let entry of arrEntries) {
  console.log(entry);
}
// [0, 1], [1, 2], [2, 3]

// 4. every(): Checks if all elements in the array pass a test implemented by the provided function.
const arrEvery = [2, 4, 6].every((x) => x % 2 === 0);
console.log(arrEvery); // true

// 5. fill(): Fills elements of an array with a static value.
const arrFill = [1, 2, 3, 4];
arrFill.fill(0, 2);
console.log(arrFill); // [1, 2, 0, 0]

// 6. filter(): Creates a new array with all elements that pass the test implemented by the provided function.
const arrFilter = [1, 2, 3, 4].filter((x) => x > 2);
console.log(arrFilter); // [3, 4]

// 7. find(): Returns the value of the first element in the array that satisfies the provided testing function.
const arrFind = [1, 2, 3, 4].find((x) => x > 2);
console.log(arrFind); // 3

// 8. findIndex(): Returns the index of the first element in the array that satisfies the provided testing function.
const arrFindIndex = [1, 2, 3, 4].findIndex((x) => x > 2);
console.log(arrFindIndex); // 2

// 9. flat(): Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
const arrFlat = [1, [2, 3], [4, [5]]].flat(2);
console.log(arrFlat); // [1, 2, 3, 4, 5]

// 10. flatMap(): First maps each element using a mapping function, then flattens the result into a new array.
const arrFlatMap = [1, 2, 3].flatMap((x) => [x * 2]);
console.log(arrFlatMap); // [2, 4, 6]

// 11. forEach(): Executes a provided function once for each array element.
[1, 2, 3].forEach((x) => console.log(x * 2)); // 2, 4, 6

// 12. from(): Creates a new, shallow-copied Array instance from an array-like or iterable object.
const arrFrom = Array.from("hello");
console.log(arrFrom); // ['h', 'e', 'l', 'l', 'o']

// 13. includes(): Determines whether an array includes a certain value among its entries.
const arrIncludes = [1, 2, 3].includes(2);
console.log(arrIncludes); // true

// 14. indexOf(): Returns the first index at which a given element can be found in the array.
const arrIndexOf = [1, 2, 3].indexOf(2);
console.log(arrIndexOf); // 1

// 15. isArray(): Determines whether the passed value is an Array.
const isArray = Array.isArray([1, 2, 3]);
console.log(isArray); // true

// 16. join(): Joins all elements of an array into a string.
const arrJoin = [1, 2, 3].join("-");
console.log(arrJoin); // "1-2-3"

// 17. keys(): Returns a new Array Iterator object that contains the keys for each index in the array.
const arrKeys = [1, 2, 3].keys();
for (let key of arrKeys) {
  console.log(key);
}
// 0, 1, 2

// 18. lastIndexOf(): Returns the last index at which a given element can be found in the array.
const arrLastIndexOf = [1, 2, 3, 2].lastIndexOf(2);
console.log(arrLastIndexOf); // 3

// 19. map(): Creates a new array with the results of calling a provided function on every element in the calling array.
const arrMap = [1, 2, 3].map((x) => x * 2);
console.log(arrMap); // [2, 4, 6]

// 20. of(): Creates a new Array instance with a variable number of elements.
const arrOf = Array.of(1, 2, 3);
console.log(arrOf); // [1, 2, 3]

// 21. pop(): Removes the last element from an array and returns that element.
const arrPop = [1, 2, 3];
arrPop.pop();
console.log(arrPop); // [1, 2]

// 22. push(): Adds one or more elements to the end of an array and returns the new length of the array.
const arrPush = [1, 2];
arrPush.push(3);
console.log(arrPush); // [1, 2, 3]

// 23. reduce(): Executes a reducer function on each element of the array, resulting in a single output value.
const arrReduce = [1, 2, 3].reduce((acc, x) => acc + x, 0);
console.log(arrReduce); // 6

// 24. reduceRight(): Applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value.
const arrReduceRight = [
  [0, 1],
  [2, 3],
  [4, 5],
].reduceRight((acc, x) => acc.concat(x), []);
console.log(arrReduceRight); // [4, 5, 2, 3, 0, 1]

// 25. reverse(): Reverses an array in place.
const arrReverse = [1, 2, 3].reverse();
console.log(arrReverse); // [3, 2, 1]

// 26. shift(): Removes the first element from an array and returns that element.
const arrShift = [1, 2, 3];
arrShift.shift();
console.log(arrShift); // [2, 3]

// 27. slice(): Returns a shallow copy of a portion of an array into a new array object selected from start to end.
const arrSlice = [1, 2, 3, 4].slice(1, 3);
console.log(arrSlice); // [2, 3]

// 28. some(): Tests whether at least one element in the array passes the test implemented by the provided function.
const arrSome = [1, 2, 3].some((x) => x > 2);
console.log(arrSome); // true

// 29. sort(): Sorts the elements of an array in place and returns the sorted array.
const arrSort = [3, 1, 2];
arrSort.sort();
console.log(arrSort); // [1, 2, 3]

// 30. splice(): Changes the contents of an array by removing or replacing existing elements and/or adding new elements.
const arrSplice = [1, 2, 3];
arrSplice.splice(1, 1, 4);
console.log(arrSplice); // [1, 4, 3]

// 31. toLocaleString(): Returns a string representing the elements of the array.
const arrToLocaleString = [1, "a", new Date()].toLocaleString();
console.log(arrToLocaleString); // "1,a,6/28/2024, 11:35:24 AM"

// 32. toString(): Returns a string representing the specified array and its elements.
const arrToString = [1, 2, 3].toString();
console.log(arrToString); // "1,2,3"

// 33. unshift(): Adds one or more elements to the beginning of an array and returns the new length of the array.
const arrUnshift = [1, 2];
arrUnshift.unshift(0);
console.log(arrUnshift); // [0, 1, 2]

// 34. values(): Returns a new Array Iterator object that contains the values for each index in the array.
const arrValues = [1, 2, 3].values();
for (let value of arrValues) {
  console.log(value);
}
// 1, 2, 3
