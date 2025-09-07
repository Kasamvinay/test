/*
5. search() Method
Purpose: Find position of first match (like indexOf but with regex)
Syntax: string.search(regex)

*/
const text = "Hello world! Welcome to JavaScript.";

console.log(text.search(/world/));    // 6
console.log(text.search(/javascript/i)); // 24 (case-insensitive)
console.log(text.search(/python/));   // -1 (not found)

// Useful for checking if pattern exists
if (text.search(/\d/) !== -1) {
    console.log("Contains numbers!");
}

/*output:
6
24
-1

*/