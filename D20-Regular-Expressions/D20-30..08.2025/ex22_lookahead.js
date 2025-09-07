/*
Positive Lookahead: (?=...)
The (?=...) syntax is called a positive lookahead assertion. It's a special regex construct that checks if a pattern exists ahead of the current position, but doesn't consume any characters.

What It Does:
Checks if the pattern inside (?=...) exists after the current position

Doesn't move the regex pointer forward

Doesn't include the lookahead pattern in the match result

Zero-width - doesn't consume any characters

Syntax: (?=pattern)
*/

const regex = /q(?=u)/; // Match 'q' only if it's followed by 'u'

console.log(regex.test("queen"));  // true - q followed by u
console.log(regex.test("qatar"));  // false - q NOT followed by u
console.log(regex.test("quit"));