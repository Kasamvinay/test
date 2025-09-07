/*10. Credit Card Number (Basic)
Regex: /^\d{4}[\s-]?\d{4}[\s-]?\d{4}[\s-]?\d{4}$/

Explanation:

\d{4} - 4 digits

[\s-]? - Optional space or hyphen

Repeated 4 times for 16 digits
*/
const cardRegex = /^\d{4}[\s-]?\d{4}[\s-]?\d{4}[\s-]?\d{4}$/;
console.log(cardRegex.test("1234567812345678"));    // true
console.log(cardRegex.test("1234-5678-1234-5678")); // true
console.log(cardRegex.test("1234 5678 1234 5678")); // true
console.log(cardRegex.test("12345678"));            // false