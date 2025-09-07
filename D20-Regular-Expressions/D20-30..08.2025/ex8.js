

console.log(/cat/.test("concatenate")); // true
console.log(/dog/.test("concatenate")); // false
/*
✅ Explanation:

.test(string) checks if the pattern exists in the string.

Returns true or false.

Example: /cat/ looks for “cat” inside the text.
*/
