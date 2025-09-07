/*
12. IPv4 Address Validation
Regex: /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/

Explanation:

(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?) - Number 0-255

\. - Literal dot

Repeated 3 times, then one final number

*/
const ipRegex = /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
console.log(ipRegex.test("192.168.1.1"));    // true
console.log(ipRegex.test("256.168.1.1"));    // false (256 > 255)
console.log(ipRegex.test("192.168.1"));      // false (only 3 parts)