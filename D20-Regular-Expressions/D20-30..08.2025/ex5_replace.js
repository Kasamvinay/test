/*
4. replace() Method
Purpose: Search and replace patterns in a string
Syntax: string.replace(regex, replacement)

Replacement Patterns:
•	$& - Insert the matched substring
•	$1, $2, ... - Insert captured groups
•	$` - Insert portion before match
•	$' - Insert portion after match

*/

const text = "Hello world! Hello universe!";

// Simple replacement
console.log(text.replace(/hello/i, "Hi")); 
// "Hi world! Hello universe!" (first match only)

// Global replacement
console.log(text.replace(/hello/gi, "Hi")); 
// "Hi world! Hi universe!" (all matches)

// Using replacement patterns
console.log("123-456-7890".replace(/(\d{3})-(\d{3})-(\d{4})/, '($1) $2-$3'));
// "(123) 456-7890"

// Using function as replacement
console.log("a1 b2 c3".replace(/\d/g, match => match * 2));
// "a2 b4 c6"

/*
output:
Hi world! Hello universe!
Hi world! Hi universe!
(123) 456-7890
a2 b4 c6

*/