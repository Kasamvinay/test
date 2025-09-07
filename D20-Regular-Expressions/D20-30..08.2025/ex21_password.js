/*
6. Password Validation (Strong)
Regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

Explanation:

(?=.*[a-z]) - At least one lowercase letter

(?=.*[A-Z]) - At least one uppercase letter

(?=.*\d) - At least one digit

(?=.*[@$!%*?&]) - At least one special character

[A-Za-z\d@$!%*?&]{8,} - 8+ characters from allowed set
*/
const strongPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
console.log(strongPassword.test("Password123!"));    // true
console.log(strongPassword.test("weak"));            // false
console.log(strongPassword.test("nouppercase123!")); // false