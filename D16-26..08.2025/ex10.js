//Example: Round-trip conversion

let user = { name: "John Smith", age: 35 };
let jsonStr = JSON.stringify(user);
let user2 = JSON.parse(jsonStr);


console.log(user);
console.log(jsonStr);
console.log(user2);

/*
output:
{ name: 'John Smith', age: 35 }
{"name":"John Smith","age":35}
{ name: 'John Smith', age: 35 }
 */
