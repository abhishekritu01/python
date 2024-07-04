// 1. charAt(): Returns the character at the specified index.
const strCharAt = 'hello'.charAt(1);
console.log(strCharAt); // "e"

// 2. charCodeAt(): Returns the Unicode value of the character at the specified index.
const strCharCodeAt = 'hello'.charCodeAt(1);
console.log(strCharCodeAt); // 101

// 3. codePointAt(): Returns a non-negative integer that is the Unicode code point value at the given position.
const strCodePointAt = 'hello'.codePointAt(1);
console.log(strCodePointAt); // 101

// 4. concat(): Combines the text of two or more strings and returns a new string.
const strConcat = 'hello'.concat(' ', 'world');
console.log(strConcat); // "hello world"

// 5. endsWith(): Determines whether a string ends with the characters of another string.
const strEndsWith = 'hello'.endsWith('o');
console.log(strEndsWith); // true

// 6. fromCharCode(): Returns a string created by using the specified sequence of Unicode values.
const strFromCharCode = String.fromCharCode(104, 101, 108, 108, 111);
console.log(strFromCharCode); // "hello"

// 7. includes(): Determines whether one string may be found within another string.
const strIncludes = 'hello'.includes('ell');
console.log(strIncludes); // true

// 8. indexOf(): Returns the index within the calling String object of the first occurrence of the specified value.
const strIndexOf = 'hello'.indexOf('e');
console.log(strIndexOf); // 1

// 9. lastIndexOf(): Returns the index within the calling String object of the last occurrence of the specified value.
const strLastIndexOf = 'hello'.lastIndexOf('l');
console.log(strLastIndexOf); // 3

// 10. localeCompare(): Returns a number indicating whether a reference string comes before or after or is the same as the given string in sort order.
const strLocaleCompare = 'hello'.localeCompare('world');
console.log(strLocaleCompare); // -1

// 11. match(): Retrieves the result of matching a string against a regular expression.
const strMatch = 'hello'.match(/l/g);
console.log(strMatch); // ["l", "l"]

// 12. matchAll(): Returns an iterator of all results matching a string against a regular expression.
const strMatchAll = 'hello'.matchAll(/l/g);
for (let match of strMatchAll) {
    console.log(match);
}
// ["l"], ["l"]

// 13. normalize(): Returns the Unicode Normalization Form of the calling string value.
const strNormalize = '\u1E9B\u0323'.normalize('NFC');
console.log(strNormalize); // "ṳ"

– // 14. padEnd(): Pads the current string with another string (repeated, if needed) so that the resulting string reaches the given length.
const strPadEnd = 'hello'.padEnd(10, '!');
console.log(strPadEnd); // "hello!!!!!"

// 15. padStart(): Pads the current string with another string (repeated, if needed) so that the resulting string reaches the given length.
const strPadStart = 'hello'.padStart(10, '!');
console.log(strPadStart); // "!!!!!hello"

// 16. repeat(): Returns a new string which contains the specified number of copies of the string on which it was called.
const strRepeat = 'hello'.repeat(2);
console.log(strRepeat); // "hellohello"

// 17. replace(): Returns a new string with some or all matches of a pattern replaced by a replacement.
const strReplace = 'hello'.replace('l', 'x');
console.log(strReplace); // "hexlo"

// 18. replaceAll(): Returns a new string with all matches of a pattern replaced by a replacement.
const strReplaceAll = 'hello'.replaceAll('l', 'x');
console.log(strReplaceAll); // "hexxo"

// 19. search(): Executes a search for a match between a regular expression and this String object.
const strSearch = 'hello'.search(/l/);
console.log(strSearch); // 2

// 20. slice(): Extracts a section of a string and returns it as a new string.
const strSlice = 'hello'.slice(1, 4);
console.log(strSlice); // "ell"

// 21. split(): Splits a String object into an array of strings by separating the string into substrings.
const strSplit = 'hello'.split('');
console.log(strSplit); // ["h", "e", "l", "l", "o"]

// 22. startsWith(): Determines whether a string begins with the characters of another string.
const strStartsWith = 'hello'.startsWith('h');
console.log(strStartsWith); // true

// 23. substring(): Returns the part of the string between the start and end indexes, or to the end of the string.
const strSubstring = 'hello'.substring(1, 4);
console.log(strSubstring); // "ell"

// 24. toLocaleLowerCase(): The characters within a string are converted to lower case while respecting the current locale.
const strToLocaleLowerCase = 'HELLO'.toLocaleLowerCase();
console.log(strToLocaleLowerCase); // "hello"

// 25. toLocaleUpperCase(): The characters within a string are converted to upper case while respecting the current locale.
const strToLocaleUpperCase = 'hello'.toLocaleUpperCase();
console.log(strToLocaleUpperCase); // "HELLO"

// 26. toLowerCase(): Returns the calling string value converted to lower case.
const strToLowerCase = 'HELLO'.toLowerCase();
console.log(strToLowerCase); // "hello"

// 27. toString(): Returns a string representing the specified object.
const strToString = 'hello'.toString();
console.log(strToString); // "hello"

// 28. toUpperCase(): Returns the calling string value converted to upper case.
const strToUpperCase = 'hello'.toUpperCase();
console.log(strToUpperCase); // "HELLO"

// 29. trim(): Trims whitespace from the beginning and end of the string.
const strTrim = '  hello  '.trim();
console.log(strTrim); // "hello"

// 30. trimEnd(): Trims whitespace from the end of the string.
const strTrimEnd = '  hello  '.trimEnd();
console.log(strTrimEnd); // "  hello"

// 31. trimStart(): Trims whitespace from the beginning of the string.
const strTrimStart = '  hello  '.trimStart();
console.log(strTrimStart); // "hello  "

// 32. valueOf(): Returns the primitive value of a String object.
const strValueOf = 'hello'.valueOf();
console.log(strValueOf); // "hello"
