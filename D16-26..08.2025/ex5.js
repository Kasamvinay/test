/*Example 2: Date.toJSON()
JavaScript’s Date object already has a built-in toJSON() method.
When stringified, it converts the date to ISO format.


*/

let today = new Date("2025-08-26T06:30:00Z");
console.log(JSON.stringify(today));
// Output: "2025-08-26T06:30:00.000Z"


/*
Internally, it works like:
Date.prototype.toJSON = function() {
  return this.toISOString();
};
*/
