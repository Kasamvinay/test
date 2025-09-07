/*
4. Accept Multiple Digits
Regex: /^\d+$/

Explanation:

^ - Start of string

\d+ - One or more digits

$ - End of string
*/
const multipleDigits = /^\d+$/;
console.log(multipleDigits.test("123"));     // true
console.log(multipleDigits.test("0"));       // true
console.log(multipleDigits.test("12a34"));   // false