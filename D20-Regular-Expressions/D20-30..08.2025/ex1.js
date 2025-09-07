/*

*/
const regex = /[^aeiou]/;

// ^ indicates negation when used inside square brackets

console.log(regex.test("a"));  // false - it's a vowel
console.log(regex.test("e"));  // false - it's a vowel  
console.log(regex.test("b"));  // true - not a vowel
console.log(regex.test("1"));  // true - not a vowel
console.log(regex.test("!"));  // true - not a vowel
console.log(regex.test(" "));  // true - space is not a vowel

/*output:
false
false
true
true
true
true

*/
