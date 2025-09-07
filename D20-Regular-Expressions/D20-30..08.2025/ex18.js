/* 3. Accept Single Digit
Regex: /^\d$/

Explanation:
^ - Start of string
\d - Exactly one digit (0-9)
$ - End of string
*/
const singleDigit = /^\d$/;
console.log(singleDigit.test("5"));    // true
console.log(singleDigit.test("12"));   // false
console.log(singleDigit.test("a"));    // false