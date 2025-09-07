/*

JSON.stringify can be applied to primitives as well.
JSON supports following data types:	
•	Objects { ... }
•	Arrays [ ... ]
•	Primitives:
o	strings,
o	numbers,
o	boolean values true/false,
o	null.

*/

console.log( JSON.stringify(1) ) // 1

// a string in JSON is still a string, but double-quoted
console.log( JSON.stringify('test') ) // "test"

console.log( JSON.stringify(true) ); // true

console.log( JSON.stringify([1, 2, 3]) ); // [1,2,3]
