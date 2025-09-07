/*
3. Search and Replace
*/
const text = "Hello World! hello world!";

// Case-insensitive replacement
const result = text.replace(/hello/gi, 'Hi');
console.log(result); // "Hi World! Hi world!"

// Format phone numbers
const phone = "1234567890";
const formatted = phone.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
console.log(formatted); // "(123) 456-7890"