/*
13. Time Validation (HH:MM)
Regex: /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/

Explanation:

([01]?[0-9]|2[0-3]) - Hour: 00-23

: - Literal colon

[0-5][0-9] - Minute: 00-59
*/
const timeRegex = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;
console.log(timeRegex.test("23:59"));    // true
console.log(timeRegex.test("09:30"));    // true
console.log(timeRegex.test("24:00"));    // false
console.log(timeRegex.test("12:60"));    // false