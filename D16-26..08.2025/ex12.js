/*
JSON is data-only language-independent specification, 
so some JavaScript-specific object properties are skipped by JSON.stringify.

Namely:
Function properties (methods).
Symbolic keys and values.
Properties that store undefined.
*/


let user = {
  sayHi() { // ignored
    console.log("Hello");
  },
  [Symbol("id")]: 123, // ignored
  something: undefined // ignored
};

console.log( JSON.stringify(user) ); // {} (empty object)