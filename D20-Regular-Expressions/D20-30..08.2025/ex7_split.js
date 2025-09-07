/*
6. split() Method
Purpose: Split string using regex pattern as delimiter

Syntax: string.split(regex)

*/
const text = "apple,banana;cherry.orange";

// Split by multiple delimiters
console.log(text.split(/[,;.]/)); //(/[,;.]/) - Without Capture Group
// ['apple', 'banana', 'cherry', 'orange']

// Split and include delimiters
console.log(text.split(/([,;.])/));//(/([,;.])/) - With Capture Group
// ['apple', ',', 'banana', ';', 'cherry', '.', 'orange']

// Split by whitespace
console.log("Hello   World\tTest".split(/\s+/));
// ['Hello', 'World', 'Test']

// Split by digits
console.log("a1b22c333d".split(/\d+/));
// ['a', 'b', 'c', 'd']


output:
[ 'apple', 'banana', 'cherry', 'orange' ]
[
  'apple',  ',',
  'banana', ';',
  'cherry', '.',
  'orange'
]
[ 'Hello', 'World', 'Test' ]
[ 'a', 'b', 'c', 'd' ]
