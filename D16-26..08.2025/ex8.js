//Example: replacer function filters properties

let user = { name: "Rakesh", age: 25, city: "Hyderabad" };

let json = JSON.stringify(user, (key, value) => {
  if (key === "age") return undefined; // remove age
  return value;
});

console.log(json);

// Output: {"name":"Rakesh","city":"Hyderabad"}
