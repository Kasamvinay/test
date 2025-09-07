/*variables == var, let, const (keywords)
===========================================


var a =1;
let _a=3; //case sensitivity
const $b=5;
//let 1a=6;//error
var Const=5 // error reserved keyword

operators
==========================
assignment = +=
logical && || !  (a>5) && (b<7)
comparison // boolean (T or F)
ternary (exp)? True : false
unary a++, a--

DataTypes
=====================================
Number  == int,float
String == "abc " 'abc' `abc`
Boolean == T or F
undefined == declaring a variable let a ="xyz"; typeof a
Null == let a = Null;

Strings  and String Methods
======================================

conditional Statements
=====================================
if
if else
else if
switch
ternary


let a = Number(prompt("enter your age"));
if(a>18){
  alert("you are eligible for voting")
} else if(a == 18){
  alert("you are just eligible for voting");
} else if("false"){
  alert("you are not eligible for voting");
}/*else if(1){
  alert("you are just eligible for voting");
}else if(0){
  alert("you are just eligible for voting");
}

Looping
=============================
for(let i=10; i>=1; i=i-2){
  for(let j=0;j<2;j++){
    console.log(i);
  }
  console.log(i);
}
let i=0
while(i<=5){
console.log(`the value of i is ${i}`);
i++;
}
let i=0
do{
console.log("the value of i is "+i);
i++
}while(i<=5);
*/

/*
Arrays
Objects

collections 
both can handle diff types of data

array == 
object == key value
*/



//array methods

//splice  add/remove/replace == change in the existing array
//slice return a copy of the existing array

//slice === [startindex, endindex] endindex is excluded
//splice == [startIndex,deletecount, No.of elements]

/*
let stud = [
  //array of objects
    stud1={
      name:"snithesh",
      age:20,
      city:"hyd"
  },stud2={
      name:"sni",
      age:25,
      city:"wl"
  }
   
];


let person = {
  name: "Vishal",
  age: 25,
  city: "Hyderabad"
};

delete person.city;

console.log(person.rakesh); 
*/




//Functions


// console.log()
// arr.push("");
// arr.pop();



/*
//function definition
function functionName(parameter1, parameter2, ... parameterN) {
 // body
}

//function calling

functionName(parameters);


//Example 1


function myfun(){
    alert("This is my first function!!!");
}
myfun()
//tasks
//write a function to print 1 to 5
//write a function to check age of person isAdult()
/*
create a function to roll a dice & always displays
the value of the dice 1 to 6
*/
//Math.floor (Math.random()* 5 + 1) 


// scope == function, block and lexical
/*
let sum=54; //global scope
function display(){
  let total = 0; //function scope
  for(var i=0;i<5;i++){
    total = sum+i;
    console.log(total); 
  }
}

display()

console.log(sum);
console.log(total);//error
*/


/*
//Outer Variable

let userName = 'John';

function showMessage() {
    //let userName = "hi";
  let message = 'Hello, ' + userName;
  alert(message);
}

showMessage(); // Hello, John
*/

/*

let userName = 'John';

function showMessage() {
  userName = "Bob"; 

  let message = 'Hello, ' + userName;
  alert(message);
}

alert( userName ); 

showMessage();

alert( userName ); 

*/



/*
//Example 2

function showMessage() {
  let message = "Hello, I'm JavaScript!"; // local variable

  alert( message );
}

showMessage(); // Hello, I'm JavaScript!

alert( message ); // <-- Error! The variable is local to the function

*/

//block scope
/*
{
  let a=25; //block scope
  console.log(a);
 // var a =25;

}

console.log(a);
*/

//example
/*
let age =25;
if(age>=18){
  let str = "adult"
  console.log(str);
}
*/


// let a = 25; //global scope

// function test(){
//   let a = 5; // local scope/variable
//   console.log(a); // 5 
// }

// console.log(a); //25

// if (a>25){
//   let a = 5
// }

//Lexical scope -- nested functions

/*
a variable defined outside a function can be 
accessible inside another function defined
after the variable declaration
*/
/*
function outerFunc(){
  let x=5,y=6;
 

  function innerFunc(){
    console.log(x);
    console.log(y);
  }

  //innerFunc();
  globalInner = innerFunc; // Expose it to global scope
  
}

outerFunc();
globalInner();

*/


//Functions with arguments

/*

function functionName(arg1, arg2 ......){
//do something
}

*/

/*
function showAll() {

  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}

showAll("apple", "banana", "cherry"); 
*/

/*
function showAll(x) {
  //console.log(x);
  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}

showAll("apple", "banana", "cherry");
*/

// Using Rest parameters ---- (...args)

/*
function showAll(...args) {
  for (let item of args) {
    console.log(item);
  }
}

showAll("a", "b", "c", "d");  // works!

*/

/*
function showAll(...a) {
  for (let item of a) {
    console.log(item);
  }
}

showAll("a", "b", "c", "d");  // works!
*/

/*

function greet(greeting, ...names) {
  for (let i=0;i < names.length;i++) {
    console.log(`${greeting}, ${names[i]}`);
  }
}

greet("Hello", "Alice", "Bob", "Charlie");
*/

/*
function greet(...names,greeting) {
  for (let i=0;i < names.length;i++) {
    console.log(`${greeting}, ${names[i]}`);
  }
}

greet("Hello", "Alice", "Bob", "Charlie");
*/
/*
function sum(...kmit){
let sum=0;
  for(let x of kmit){
    return sum+=x;
    }
  console.log(sum);
}

let x = sum(1,2,3,4);

console.log(x);
/*
function sum(a, b) {
  console.log(a, b);
}

sum(1, 2, 3, 4, 5); 
*/

//task 1: create a function that gives us the avg of 3 numbers



//return keyword in functions

/*
let arr =[1,2,3,4,5]

console.log(arr)

console.log(arr.slice(2,4))
*/

//sum of two numbers

/*

function sum(a,b,c){
  return a+b,c;
  //return c;
}

let s = sum(2,3,5);
console.log(s);

*/

/*
function sum(a,b){
  return a+b;
}

console.log(sum(sum(1,2),4))

*/

/*
function isAdult(age){
  if(age>17){
    return "Adult";
  } else {
    return "notAdult";
  }
  console.log("function execution is ended")
}

console.log(isAdult(17));

*/

//write a function to return sum of n numbers









/*
function sum(...n){
  let total = 0;
  for(let x of n){
    total+=x;
  }
  return total;
}
let x = sum(1,2,3);
console.log(x);
*/


//create a function that returns the concatenation of all strings

//let str = ["hi","hello","bye","!"]









/*

let str = ["hi","hello","bye","!"];

function concat(str){
  let result ="";
  for(let s of str){
      result+=s + "  ";
  }
  return result;
}

console.log(concat(str));
*/


//Function Expressions -- Anonymous Functions
/*

//normal function
const y = 5;

const x = function(){
console.log("hello");
}

const a = function greet(){
  console.log("hello");
}

const z = () => {
console.log("hello");
}

*/





/*
declaring and saving in a variable

function expressions is a nameless function but stored in a variable

const variable = function(arg1,arg2 ...){

}

*/

/*
const sum = function(a,b){
  return a+b;
}

console.log(sum(2,3));
*/

/*
const greet = function kmit() {
  console.log("Hello from named function expression!");
};
greet(); // works
//kmit(); //error

*/


//Function Expression vs Declaration Example

// Because function declarations are hoisted to the top of the scope, but expressions are not.

/*
sayHello(); // hello  ---> Hoisting ===>  can be invoked before initialization

function sayHello() {
  console.log("Hello!");
}

sayHi(); // undified 

const sayHi = function() {
  console.log("Hi!");
};
*/





// Higher order functions
// takes one or multiple functions as arguments 
// returns a function

/*
let sai = function(){
  console.log("hello");
}
let greet = function(){
  console.log("hello");
}
//greet();
//greet();

function multipleGreet(func1,func2,n){  // func = sai
  for(let i=1;i<=n;i++){
    func1(); // sai()
    func2(); 
  }
}
multipleGreet(sai,sai1,2);

multipleGreet(function(){console.log("namaste")},1000);

*/
/*
let odd = function(n){
  console.log(!(n%2==0));
}

let even = function(n){
  console.log((n%2==0));
}
*/

// Higher order functions with return

//Returns a function




/*
function oddEvenTest(request){ // even
        if (request == "odd"){   // even == odd // false
          let odd = function(n){
        console.log(!(n%2==0));   //x  // x(5)  // 5 % 2 == 1  // F // !(F)
          }
          return odd;
        }else if (request == "even"){ //even == even 
          let even = function(n){
          console.log((n%2==0));
          }
          return even;
        } else{
          console.log("wrong request");
        }
}
//let output = oddEvenTest("even");
//output(5);
*/

/*

function display (){
let a =5, b= 6, c = 65;
  return a+b; // a+b evaluated but return only c
}

console.log(display());

*/






/*
function oddEvenTest(request){

        if (request == "odd"){
          return function(n){
            console.log(!(n%2==0));
          }
        }else if (request == "even"){
          return function(n){
          console.log((n%2==0));
          }
        } else{
          console.log("wrong request");
        }
}
let output = oddEvenTest("even");
output(5);
*/








//methods - Actions that can be performed on objects

// methods which will be assigned within an object

/*
const calculator = {
  //key   :   value

  name:"sai",
  age:"20",
  gender:"male",
  add (a,b){
    return a+b;
  },
  sub : function(a,b){
    return a-b;
  },
  mul : function(a,b){
    return a*b;
  }
};
*/

/*
//calculator
//calculator.add

//Math.PI
//Math.random
//Math.random()

//[1,2,3].push(4);
//[1,2,3].pop();

// calculator.add(1,2);

// calculator.sub(3,1);

//calculator.mul(4,3);

*/

//shorthand notation for the above methods

/*
const calculator = {
  //key   :   value
  add(a,b){
    return a+b;
  },
  sub(a,b){
    return a-b;
  },
  mul(a,b){
    return a*b;
  }
};
*/



//Arrow Functions

// const func = (arg1, arg2 ....) => {function definition}

/*

const sum = (a,b) => {
  console.log(a+b);
};

sum(5,6);
*/


/*
const cube = n =>{
  return n*n*n;
};

console.log(cube(5));
*/


//Arrow Functions with Implicit return

// const func = (arg1, arg2, .....) => (value)

/*

const mul = (a,b) => (a*b);

const add = (a,b,c) => a+b+c;
*/


//this keyword

//this keyword refers to an object that is executing the current piece of code

//this keyword has different meaning according to the context where we use 

/*
| Context         | this refers to                                    |
| --------------- | ------------------------------------------------- |
| Global          | window (or global object)                         |
| Function        | window (or undefined in strict)                   |
| Object method   | the object itself                                 |
| Arrow function  | inherits from outer scope                         |                                  |
| Event listener  | the element (regular fn), or inherited (arrow fn) |

*/

/*
'use strict';
console.log(this);

function disp(){
  console.log(this);
}
*/
/*
let sai = {
  name :"sai",
  print(){
    console.log(this.name);
  }
}
*/
//Global

/*

console.log(this); // window

var x = 5;
console.log(this.x); // 5
*/

// Function

/*

function show() {
console.log(this);
}
show(); // window (in browser)

*/

/*
'use strict';
function show() {
console.log(this);
}
show(); // undefined

*/

//Object Method



//Example 1:

/*

const person = {
name: 'Alice',
greet: function() {
console.log("Hi, I'm " + this.name);
}
};

person.greet();
*/

//Example 2:

/*
const studnet={
  name:"vishal",
  age:35,
  eng:95,
  math:93,
  phy:89,

  getAvg(){
    let avg=(this.eng+this.math+this.phy)/3;
    console.log(avg);
  }
}


studnet.getAvg();
*/


//this with Arrow functions

//Arrow -->Lexical scope == the parent scope of the calling object on a function

//Function --> the scope of the calling object on a function


/*
const student = {
  name:"aman",
  marks:95,
  prop:this, //global scope
  getName:function(){
    console.log(this);
    return this.name;
  },
  getMarks : ()=>{
    console.log(this); //parents scope
    return this.marks;
  }
};
*/



//try & catch




/*

Try statement allows you to define a block of code
to be tested for errors while it is being executed

Catch statement allows you to define a block of code 
to be executed, if an error occurs in the try block

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

//setTimeout(function,timeout,arg1,arg2 .....)

/*
setTimeout( ()=> {
console.log("KMIT");
},4000);

*/


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



/*
for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 0);
}
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}

*/