// let fruits = ["apple", "banana", "mango"];
// for (let fruit of fruits) {
//   console.log(`Fruit: ${fruit}`);
// }
// //for of 
// for(let fruit of fruits)
// {
//     if(fruit==="mango")
//     {
//         continue;
//     }
//     else{
//         console.log(`${fruit}`);
//     }
// }
// //for 
// for(let i=0;i<fruits.length;i++)
// {
//     console.log(`${fruits[i]}`);
// }

// //for in
// for(let i in fruits)   
// {
//     console.log(`${fruits[i]}`);
// }   

//while
// let i=0;
// while(i<3)
// {
//     console.log(`${i}`);
//     i++;
// }

//do while
// let j=0;
// do{
//     console.log(`${j}`);
//     j++;
// }while(j<3)


// let fruits = ["apple", "banana", "mango"];
// fruits.forEach((fruit,i)=>{
//     console.log(`${i+1} : ${fruit}`);
// })



const user={
    name:"John",
    age:30,
    city:"New York",

    toJSON()
    {
        return{
            name:this.name,
            age:this.age
        }
    }
};

let json=JSON.stringify(user,(key,value)=>{
    if(key==="age");
    {
        return value+"years";
    }
    return value;
});
console.log(json);