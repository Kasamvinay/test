/*
4. Splitting Strings

*/
const csv = "apple,banana,cherry,date";
const fruits = csv.split(/,/);
console.log(fruits); // ['apple', 'banana', 'cherry', 'date']

const complexText = "Hello123World456Test";
const parts = complexText.split(/\d+/);
console.log(parts); // ['Hello', 'World', 'Test']