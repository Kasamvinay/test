/*
5. Email Validation
Regex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

Explanation:

^[a-zA-Z0-9._%+-]+ - Local part: letters, numbers, ._%+-

@ - Literal @ symbol

[a-zA-Z0-9.-]+ - Domain name: letters, numbers, .-

\. - Literal dot

.[a-zA-Z]{2,}$ - TLD: 2+ letters  
(TLD: Top-Level Domain) &  
{2,} - Quantifier that means "2 or more" of the preceding element

Explanation of this Regular Expression /^[a-zA-Z0-9._%+-]
----------------------------------------------------------
The ^ at the beginning suggests this is meant to be 
part of a larger regex pattern.

The Character Class: [a-zA-Z0-9._%+-]

1. Letters (Lowercase) - a-z
•	Matches: a, b, c, ..., z
•	Purpose: Allows all lowercase English letters
•	Example: "user", "name", "email"
2. Letters (Uppercase) - A-Z
•	Matches: A, B, C, ..., Z
•	Purpose: Allows all uppercase English letters
•	Example: "User", "NAME", "Email"
3. Digits - 0-9
•	Matches: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
•	Purpose: Allows numbers
•	Example: "user123", "test2023", "page1"
4. Dot - .
•	Matches: Literal dot character .
•	Purpose: Allows dots in usernames/emails
•	Example: "first.last", "john.doe"
5. Underscore - _
•	Matches: Literal underscore character _
•	Purpose: Commonly used in usernames and identifiers
•	Example: "user_name", "test_value"
6. Percent - %
•	Matches: Literal percent character %
•	Purpose: Used in encoded URLs and special formats
•	Example: "discount%", "value%20"
7. Plus - +
•	Matches: Literal plus character +
•	Purpose: Used in emails and special formats
•	Example: "user+tag", "value+add"
8. Hyphen/Minus - -
•	Matches: Literal hyphen/minus character -
•	Purpose: Used in compound words and identifiers
•	Example: "user-name", "test-value"

*/
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
console.log(emailRegex.test("user@example.com"));    // true
console.log(emailRegex.test("user.name@co.in"));     // true
console.log(emailRegex.test("user@.com"));           // false
console.log(emailRegex.test("user@com"));            // false