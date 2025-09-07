/*
.exec() Method
*/


const m = /a./g.exec("a1 a2 a3");
console.log(m[0]);     // "a1"
console.log(m.index);  // 0 (position found)


/*
Explanation:
.exec(string) finds the match details.

Returns an array-like object:

m[0] → full match

m.index → where it was found

m[1], m[2] ... → groups inside ()

With g (global), it remembers where it stopped and continues from there next time.
*/
