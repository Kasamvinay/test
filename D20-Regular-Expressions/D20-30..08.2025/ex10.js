/*
Anchors ^ and $
*/

/^hello/.test("hello world");  // true (starts with hello)
/world$/.test("hello world");  // true (ends with world)

/*
✅ Explanation:

^ = beginning of string (or line, if multiline m)

$ = end of string (or line, if m)

So ^hello$ means → string is exactly “hello”
*/