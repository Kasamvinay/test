/*
2. exec() Method
Purpose: Get detailed match information with capturing groups
Syntax: regex.exec(string)
Returns: Array with match details or null

*/
const regex = /(\w+)\s(\w+)/;
const result = regex.exec("John Doe");

console.log(result[0]);    // "John Doe" (full match)
console.log(result[1]);    // "John" (first group)
console.log(result[2]);    // "Doe" (second group)
console.log(result.index); // 0 (position where match found)
console.log(result.input); // "John Doe" (original string)

/*
output:
John Doe
John
Doe
0
John Doe
*/

/*
In above Example  what is this regurla expression /(\w+)\s(\w+)/ 

1. First Capturing Group: (\w+)
•	\w - Matches any word character (equivalent to [a-zA-Z0-9_])
o	Letters (a-z, A-Z)
o	Digits (0-9)
o	Underscore (_)
•	+ - One or more of the preceding character
•	( ) - Capturing group that stores the matched text
2. Whitespace: \s
•	\s - Matches any whitespace character:
o	Space
o	Tab
o	Newline
o	Other space characters
3. Second Capturing Group: (\w+)
•	Same as the first group
•	Captures the second word


*/
