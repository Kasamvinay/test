/*JSON.parse
To decode a JSON-string, we need another method named JSON.parse.

The syntax:let value = JSON.parse(str[, reviver]);


*/
// stringified array
let numbers = "[0, 1, 2, 4]";

numbers = JSON.parse(numbers);

console.log( numbers[3] ); // 4


let userData = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';

let user = JSON.parse(userData);
console.log( user)
console.log( user.friends[1] ); // 1