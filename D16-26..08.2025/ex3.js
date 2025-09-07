const readline = require("readline");

// Create readline interface

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Ask for name
rl.question("Enter your name: ", function(name)
{
  // Ask for age
  rl.question("Enter your age: ", function(age) 
  {
    // Create object from input
    let user = {
      name: name,
      age: Number(age)   // convert string to number
    };

    // Convert to JSON
    let jsonString = JSON.stringify(user);

    // Print result
    console.log("JSON Output:", jsonString);

    // Close input
    rl.close();
  });
});
/*output=
for run : node ex3.js
Enter your name: john
Enter your age: 28
JSON Output: {"name":"john","age":28}

*/