/*
3.	toJSON() Method
•	The toJSON() method is a special function you can define inside an object.
•	When JSON.stringify() is called, JavaScript checks for toJSON() in the object.
•	If found, it uses the return value of toJSON() instead of the original object.

*/
let user = {
  name: "John",
  age: 25,
  password: "secret123",
    toJSON() 
  {
    // Hide password when converting to JSON
    return { name: this.name, age: this.age };
  }
};
console.log(JSON.stringify(user));
// Output: {"name":"John","age":25}

//Note: Here, the password field is excluded because toJSON() returned a custom object.
