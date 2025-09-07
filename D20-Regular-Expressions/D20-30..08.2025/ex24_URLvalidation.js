/*9. URL Validation
Regex: /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/\S*)?$/

Explanation:

(https?:\/\/)? - Optional http:// or https://

([a-zA-Z0-9-]+\.)+ - One or more domain parts

[a-zA-Z]{2,} - TLD with 2+ letters

(\/\S*)? - Optional path
*/
const urlRegex = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/\S*)?$/;
console.log(urlRegex.test("https://www.example.com"));  // true
console.log(urlRegex.test("example.com/path"));         // true
console.log(urlRegex.test("invalid."));                 // false