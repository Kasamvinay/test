/*
Character Classes
*/
console.log("abc123".match(/\d+/)[0]);     // "123"
console.log("a!b@".match(/[^a-z]/g));      // ["!", "@"]


/*
Explanation:

[abc] → any of a, b, c

[a-z] → lowercase letters

[0-9] or \d → digits

[^...] → not inside set

\w → word characters (letters, digits, underscore)

\s → whitespace (space, tab, newline)

Uppercase = opposite (\D, \W, \S)

*/