//Arrow Functions with Implicit return

// const func = (arg1, arg2, .....) => (value)

/*

const mul = (a,b) => (a*b);

const add = (a,b,c) => a+b+c;

*/




/*
console.log(this);

console.log(this);

window.alert("hello");
this.alert("hi");
alert("hey");

function sayHi(){
  console.log(this);
}
sayHi();
*/
/*
const obj = { //odj
  
  daa : 60,
  se : 70,
  wt : 80,
  avgMarks(){
    console.log(this);
    let avg = (this.daa+this.se+this.wt) / 3;
    console.log(avg);
  },
  getMarks : ()=>{
    console.log(this); //parents scope //window
    return this.marks; //lexical scope
  }

}
obj.getMarks(); // this --> arrow function ---> parent scope of obj ---> global obj ---> window
obj.avgMarks();//70 //this ---> obj

*/
//This keyword

// this keyword on objects

/*
const student = {
    age : 23,
    name : "vishal",
    daa : 80,
    wt : 70,
    se : 60,
    avg(){
        console.log(this);
        //let marks = (daa+wt+se)/3;
        let marks = (this.daa+this.wt+this.se)/3;
        console.log(marks);
    }
}

//this keyword in regular functions

function avg(){
    console.log(this);
}

*/


// alert("hello");

// window.alert("hello");

// this.alert ("hello");

//this keyword on arrow functions

// arrow function --> Lexical scope -- it checks the scope of parent object
// function --> it checks the scope of calling object

/*
const student = {
  name:"aman",
  marks:95,
  prop:this, //global scope
  getName:function(){
    console.log(this); //objects scope
    return this.name;
  },
  getMarks : ()=>{
    console.log(this); //parents scope
    return this.marks;
  }
};
*/


//try and catch

/*

Try statement allows you to define a block of code
to be tested for errors while it is being executed

Catch statement allows you to define a block of code 
to be executed, if an error occurs in the try block

*/
/*
console.log("hello");
console.log("hello");
try{
console.log(a);
} catch(a){
  console.log("hi 'a' is not declared plz declare 'a' ");
  console.log(a);
}

// classname obj = new constructor();

console.log("hello");
console.log("hello");
console.log("hello");
console.log("hello");

*/

/*
  console.log("hello");
  console.log(a);
  console.log("hello");
  console.log("hello");
  console.log("hello");
  console.log("hello");

*/


/*
try{
  console.log("hello");
  console.log(a);
}
catch(a){
  console.log("variable 'a' doesnot defined");
  console.log(a);
}
console.log("hello");
console.log("hello");
console.log("hello");
console.log("hello");

*/

//SetTimeout and SetInterval



//setTimeout

/*

setTimeout() is a built-in asynchronous function 
in JavaScript used to delay code execution.


*/


//setTimeout(callbackFunction, delayInMilliseconds, arg1, arg2, ...);


//setTimeout with Regular Function


/*
let count =0;
const xyz = setInterval(function() {
  count++;
  console.log("Hello from regular function");
  if(count == 5){
    clearInterval(xyz);
  }
}, 1000,"name","sai");


xyz.clearInterval
*/
//setTimeout with Arrow Functions


/*

setTimeout( ()=> {
console.log("KMIT");
},4000);


*/

//setTimeout with this inside arrow vs regular function

/*
const student = { 
  getInfo1: function() { 
    setTimeout(() => {
      console.log(this); //window
    }, 2000);
  },

  getInfo2: function() {
    setTimeout(function() {
      console.log(this); //student
    }, 2000);
  }
};

*/


//setTimeout inside Loop with var vs let



for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0); // 3 3 3
}

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000); // 0 1 2
}


// Passing Arguments to setTimeout

/*

function greet(name) {
  console.log("Hello", name);
}

setTimeout(greet, 1000, "Vishal"); // Hello Vishal

*/

//Cancelling setTimeout with clearTimeout()

/*
let timeoutId = setTimeout(() => {
  console.log("This won't run");
}, 2000);

clearTimeout(timeoutId);
*/

//setInterval

//let intervalID = setInterval(callback, delayInMs, arg1, arg2, ...);


//setInterval(function,timeout,arg1,agr2)

/*
setInterval( () => {
  console.log("KMIT");
},2000);
*/


//setInterval with ClearInterval

/*

let count = 0;
let id = setInterval(()=>{
  count++;
  console.log("KMIT");

  if(count===5){
    clearInterval(id);
  }
},1000)

*/


//Passing Arguments to setInterval

/*
function greet(name, age) {
  console.log(`Hello ${name}, Age: ${age}`);
}

setInterval(greet, 2000, "Vishal", 25);

*/


// how var and let behave in loops with 
// asynchronous functions like setTimeout

/*

for (var i = 0; i < 5; i++) { //Function scope
  setTimeout(() => console.log(i), 1000);
}
for (let i = 0; i < 5; i++) { //block scope
  setTimeout(() => console.log(i), 1000);
}
*/

//IIFE (Immediately Invoked Function Expression)



/*
To create a private scope (like a temporary sandbox)

To avoid polluting global variables

To capture values immediately (like in loops)

REPL == read -- evaluating -- print -- loop
*/

/*

(function() {
  // code
})();

or

(() => {
  // code
})();

(()=>{
  })()

*/




//example 1:
/*
(function() {
  console.log("IIFE executed!");
})();
*/

/*
//example 2:

var username = "global_user";

(function() {
  var username = "local_user";
  console.log("Inside IIFE:", username);
})();

console.log("Outside IIFE:", username);

//example 3:

for (var i = 0; i < 5; i++) {
  (function(j) {
    setTimeout(() => console.log(j), 0);
  })(i);
}

*/

//solution 2: Use .bind() to bind i as this

/*
.bind() is a method available on functions that 
lets you permanently set the value of this, 
without calling the function immediately


const boundFunction = originalFunction.bind(thisArg, arg1, arg2, ...);


*/

//.bind on normal functions  --- Fixing this in a method

/*
const user = {
  name: "Vishal",
  greet: function() {
    console.log("Hello", this.name);
  }
};

const greetFn = user.greet;
greetFn(); // undefined or error (this is not bound to user)

const boundGreet = user.greet.bind(user);
boundGreet(); //  Hello Vishal

*/


// Using .bind() inside setTimeout

/*
const user = {
  name: "Vishal",
  greet: function () {
    setTimeout(function () {
      console.log("Hello", this.name);
    }.bind(this), 1000); // binds this to user
  }
};

user.greet(); // Output after 1s: Hello Vishal
*/

/*

for (var i = 0; i < 5; i++) {
  setTimeout(
    function() {
      console.log(this);
    }.bind(i),
    0
  );
}

*/

//solution 3: use an Helper function

/*
function logValue(x) {
  setTimeout(() => console.log(x), 0);
}

for (var i = 0; i < 5; i++) {
  logValue(i);
}
*/


//Date and Time Functions

/*

//current date and time

let now = new Date();
console.log(now);


//Specific date & time

let dt1 = new Date("2023-07-24T10:30:00");
let dt2 = new Date(2023, 6, 24, 10, 30); // Note: month is 0-based (6 = July)
console.log(dt2);

//Getting Date & Time Components

let today = new Date();

console.log(now.getFullYear());  // 2025
console.log(now.getMonth());     // 0 (Jan) to 11 (Dec)
console.log(now.getDate());      // 1 to 31
console.log(now.getDay());       // 0 (Sun) to 6 (Sat)
console.log(now.getHours());     // 0 to 23
console.log(now.getMinutes());   // 0 to 59
console.log(now.getSeconds());   // 0 to 59
console.log(now.getMilliseconds()); // 0 to 999


// Setting Date & Time Components

let da1 = new Date();

da1.setFullYear(2024);
da1.setMonth(11);         // December
da1.setDate(31);
da1.setHours(23);
da1.setMinutes(59);
da1.setSeconds(59);

console.log(da1);


// Getting date as string

let d = new Date();

console.log(d.toString());         // Full string format
console.log(d.toDateString());     // "Thu Jul 24 2025"
console.log(d.toTimeString());     // "10:45:12 GMT+0530 ..."
console.log(d.toISOString());      // "2025-07-24T05:15:12.000Z"
console.log(d.toLocaleString());   // "24/07/2025, 10:45:12 am"


//Comparing Dates

let d1 = new Date("2025-07-24");
let d2 = new Date("2025-08-01");

console.log(d1 > d2);  // false
console.log(d1 < d2);  // true


*/

