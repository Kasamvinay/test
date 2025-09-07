/*2. Indian Phone Number Validation
Regex: /^(\+91[\-\s]?)?[6-9]\d{9}$/

Explanation:

^ - Start of string

(\+91[\-\s]?)? - Optional country code (+91 with optional hyphen or space)

[6-9] - Must start with 6,7,8, or 9

\d{9} - Exactly 9 more digits

*/
const phoneRegex = /^(\+91[\-\s]?)?[6-9]\d{9}$/;
console.log(phoneRegex.test("9876543210"));    // true
console.log(phoneRegex.test("+91-9876543210")); // true
console.log(phoneRegex.test("2876543210"));    // false (starts with 2)
console.log(phoneRegex.test("987654321"));     // false (only 9 digits)