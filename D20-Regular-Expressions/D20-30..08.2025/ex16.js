/*
1. Basic Pattern: Lowercase to Uppercase Conversion
Regex: /[a-z]/g

Explanation: Matches all lowercase letters

[a-z] - Character class for lowercase letters a to z

g - Global flag (find all matches)
*/
const text = "Hello World 123";
const result = text.replace(/[a-z]/g, match => match.toUpperCase());
console.log(result); // "HELLO WORLD 123"

