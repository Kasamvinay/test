/*2.	JSON.parse(text, reviver)
Converts a JSON string back to a JavaScript object.
*/

let str = '{"name":" John ","age":25}';
let obj = JSON.parse(str);
console.log(obj); 
console.log(obj.name); // John


/*
output:
{ name: ' John ', age: 25 }
 John 
 */
