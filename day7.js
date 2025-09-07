//Spread -- Expands an iterable into multiple values

/*

function func(...arr){
//do something
}

> console.log(..."kmitcollege");
k m i t c o l l e g e
*/



// let arr = [1,2,3,4];

// Math.min(arr[0],arr[1],arr[2],arr[3])
/*
Math.min(...arr)

Math.max(...arr);

*/

// Spread with Array Literals

/* 

let arr = [1,2,3,4,5];
let newarr = [...arr];
console.log(newarr);

let chars = [..."hello"];
console.log(chars);

*/
/*
let odd = [1,3,5,7,9];
let even =[2,4,6,8];

let nums = [...odd, ...even];

let sortNums = nums.sort();

console.log(sortNums);
*/

/*
const [head, ...tail] = [1, 2, 3, 4];

console.log(head); // 1
console.log(tail); // [2, 3, 4]
*/

//Spread with Object Literals
/*

let data ={
    email:"abc@gmail.com",
    password:"abcd"
};

const dataCopy ={...data};

const dataCopy1= {...dataCopy, id:123,city:"hyd"};

console.log(dataCopy);
console.log(dataCopy1);

*/

//spread to convert an Array to Object

/*

let arr =[1,2,3,4,5]

const obj = {...arr};

console.log(obj);
*/


// Rest Vs Spread .... arguments .... function min(){console.log(arguments.length)}

//Destructuring -- storing values of array/ properties of objects into multiple variables

/*
let names = ["tony","bruce","steve","peter"];

let [winner, ,runnerup] = names;

console.log(winner, runnerup); // tony, bruce
*/


//Default Values
/*
const [x = 5, y = 10] = [1];

console.log(x); // 1
console.log(y); // 10
*/


//Rest Operator in Arrays

/*
const [head, ...tail] = [1, 2, 3, 4];

console.log(head); // 1
console.log(tail); // [2, 3, 4]
*/

//swapping variables 
/*
let a = 1, b = 2;
[a, b] = [b, a];

console.log(a); // 2
console.log(b); // 1
*/

//Destructuring Objects

/*
const person = { name: "Alice", age: 25 };

console.log(person.name);
console.log(person.age);


const {age:AGE}= person; 
console.log(AGE);
*/
const student ={
    name :"karan",
    age:14,
    class:9,
    subjects:["hindi","english","math","science"],
    username:"karan@gmail.com",
    password:"abcd",
    //city:"Pune"
};

/*
const { username, password } = student;

console.log(username); 
console.log(password);
*/

/*

const { username:user,password:secret}=student;

//console.log(username) //error

console.log(user)

*/
/*

let {username:user,city="Mumbai"}=student;
console.log(city);
*/
/*
let {username : user, city:place ="Mumbai"}=student;
//console.log(city); //error

console.log(place)
*/

// let arr123 = [1,2,3,4,5];

// function fun (...arr){
//     console.log(arr);
// }

// fun(arr123);  // spread

// fun(1,2,3,4,5); // rest



//small Taks

/*
Qs1. Square and sum the array elements using the arrow function and then find the
average of the array.
Qs2. Create a new array using the map function whose each element is equal to the
original element plus 5.
Qs3. Create a new array whose elements are in uppercase of words present in the
original array.
Qs4. Write a function called doubleAndReturnArgs which accepts an array and a
variable number of arguments. The function should return a new array with the original
array values and all of the additional arguments doubled.
Qs5. Write a function called mergeObjects that accepts two objects and returns a new
object which contains all the keys and values of the first object and second object.
*/

let arr=[1,2,3,4,5];
const sum=(arr)=>{
    let sum1=0;
    arr.forEach(element => {
        sum1 += element*element;
    });
    console.log(sum1);
}
sum(arr);