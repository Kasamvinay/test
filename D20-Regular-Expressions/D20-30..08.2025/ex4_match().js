/*
3. match() Method
Purpose: Find matches in a string (called on string, not regex)
Syntax: string.match(regex)

*/
const text = "The rain in Spain stays mainly in the plain";

// Without global flag (first match only)
console.log(text.match(/ain/)); 
// ['ain', index: 5, input: 'The rain in Spain...']

// With global flag (all matches)
console.log(text.match(/ain/g)); 
// ['ain', 'ain', 'ain'] (just the matched text)

// With groups
const dateMatch = "2023-12-25".match(/(\d{4})-(\d{2})-(\d{2})/);
console.log(dateMatch[0]); // "2023-12-25"
console.log(dateMatch[1]); // "2023"
console.log(dateMatch[2]); // "12"
console.log(dateMatch[3]); // "25"

/*output:
[
  'ain',
  index: 5,
  input: 'The rain in Spain stays mainly in the plain',
  groups: undefined
]
[ 'ain', 'ain', 'ain', 'ain' ]
2023-12-25
2023
12
25
*/
