//Example: toJSON() + replacer together

let user = {
  name: "Rakesh",
  age: 25,
  password: "secret123",

  toJSON() {
    // Step 1: custom serialization (password removed here)
    return { name: this.name, age: this.age };
  }
};

// Step 2: replacer function runs on the result of toJSON()

let json = JSON.stringify(user, (key, value) => {
  if (key === "age") {
    return value + " years"; // modify age format
  }
  return value;
});

console.log(json);
// Output: {"name":"Rakesh","age":"25 years"}


/*
Above How it works internally
1.	When JSON.stringify() is called, it first checks if the object has toJSON().
2.	If yes → toJSON() is executed, and the returned object is used.
3.	Then, the replacer function runs on that result to filter/transform values.

Step-by-step Explanation
1. JSON.stringify(object, replacer)
•	The second argument in JSON.stringify() is called the replacer.
•	If the replacer is a function, it will be called for every key-value pair in the object.
•	Whatever the replacer returns becomes the value in the final JSON.
•	If it returns undefined, that key is excluded.



*/
