/* JavaScript Regex Methods
1. test() Method
Purpose: Check if a pattern exists in a string (returns boolean)

Syntax: regex.test(string)
*/

const regex = /hello/;

console.log(regex.test("hello world"));      // true
console.log(regex.test("world hello"));      // true                
console.log(regex.test("HELLO"));           // false (case-sensitive)
console.log(regex.test("goodbye"));         // false

// With flags
const caseInsensitive = /hello/i;
console.log(caseInsensitive.test("HELLO")); // true

/*
output:
true
true
false
false
true
*/
