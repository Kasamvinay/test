/*
7. Username Validation
Regex: /^[a-zA-Z0-9_]{3,20}$/

Explanation:

^[a-zA-Z0-9_] - Start with letter, number, or underscore

{3,20} - 3 to 20 characters long

$ - End of string
*/
const usernameRegex = /^[a-zA-Z0-9._,]{3,20}$/;
console.log(usernameRegex.test("john_doe123"));  // true
console.log(usernameRegex.test("john.doe123"));  // true
console.log(usernameRegex.test("ab"));           // false (too short)
console.log(usernameRegex.test("john@doe"));     // false (special char)