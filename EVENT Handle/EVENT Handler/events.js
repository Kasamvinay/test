//DOM Events  --- Events are signals that something has occurred. (user inputs / actions)


//onclick -- when an element is called

/*
let btn =  document.querySelector("button");

// console.dir(btn);

// btn.onclick = function(){
//     console.log("button was clicked!!!");

//     alert("button was clicked!!!");
// }


/*
function sayHello(){
    alert("Hello !!!!");
}

btn.onclick = sayHello;
*/

/*
let btns = document.querySelectorAll("button");

for(btn of btns){
    btn.onclick = sayHello;
}

function sayHello(){
    alert("Hello!!!");
}
*/

//onmouseenter --- when mouse enters an element
/*
let btns = document.querySelectorAll("button");

for(btn of btns){
    btn.onclick = sayHello;
    btn.onmouseenter = function(){
        console.log("you entered a button");
    }
    btn.onmouseleave = function(){
        console.log("Mouse has left the button");
    }
}

function sayHello(){
    alert("Hello!!!");
}
*/

//Event Listeners --- Events are signals that something has occurred. (user inputs / actions)

// Onclick can execute only one function at a time 

// it cannot execute multiple functions at a time

// to make multiple functions at a time we use Event listeners
/*

let btns = document.querySelectorAll("button");
console.dir(btns);

for(btn of btns){
    btn.onclick=sayHello;
    btn.onclick=sayName;
}

function sayHello(){
    console.log("Hello!");
    

}

function sayName(){
    alert("kmit");
}
*/

//Event Listener -- element.addEventListener(event, callback)

/*
let btns = document.querySelectorAll("button");

for(btn of btns){
    // btn.onclick=sayHello;
    // btn.onclick=sayName;

    btn.addEventListener("click",sayHello);
    btn.addEventListener("click",sayName);
    btn.addEventListener("dblclick",sayName);
}

function sayHello(){
   console.log("Hello!");
}

function sayName(){
    console.log("kmit");
}

*/
//Activity Task for students

/*

let btncolor = document.getElementById("color");



btncolor.addEventListener("click",function(){

    let h3 = document.querySelector("h3");
    let randomColor = getRandomColor();
    h3.innerText = randomColor;
    console.log("generate random color");


    let div = document.querySelector("div");
    div.style.backgroundColor = randomColor;


});



function getRandomColor(){
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);

    let color = `rgb(${red}, ${green}, ${blue})`;
    return color;
}
    
*/

//Event Listeners for Elements

/*
let p = document.querySelector("p");

p.addEventListener("click",function(){
   p.innerText= "Para was Clicked";
})

let box = document.querySelector(".box");

box.addEventListener("mouseover", function(){
    box.style.backgroundColor="yellow";
})
    
box.addEventListener("mouseout", function(){
    box.style.backgroundColor="pink";
})

*/
//this in Event Listeners

//when 'this' is used in a callback of event handler of something, it refers to that something
/*
let btn = document.querySelector("button");
let originalColor=  btn.style.backgroundColor;
btn.addEventListener("click",function(){
    console.dir(this.innerText);
    if (this.style.backgroundColor==="blue"){
        this.style.backgroundColor=originalColor || "";
    }else {
        this.style.backgroundColor = "blue";
    }
});
*/

// let h1 = document.querySelector("h1");
// let h3 = document.querySelector("h3");
// let p = document.querySelector("p");
// let btn = document.querySelector("button");
// let div=document.querySelector("div");
// function changeColor(){
//     this.style.backgroundColor="yellow";
// }

// btn.addEventListener("click",changeColor);
// h1.addEventListener("click",changeColor);
// h3.addEventListener("click",changeColor);
// p.addEventListener("click",changeColor);
// div.addEventListener("click",changeColor);


//Keyboard Events

// let btn = document.querySelector("button");

// btn.addEventListener("click",function(event){
//     console.log(event);
//     console.log("button clicked");
// });

// btn.addEventListener("dblclick",function(event){
//     console.log(event);
//     console.log("button clicked");
// });

//let input = document.querySelector("input");

// input.addEventListener("keydown",function(event){
// console.log(event);
// console.log(event.key);
// console.log("key was pressed");
// });

// input.addEventListener("keyup",function(event){
// console.log(event);
// console.log(event.key);
// console.log("key was released");
// });


//Form Events

let form = document.querySelector("form");

form.addEventListener("submit",function(event){
   // event.preventDefault();
    alert("form submitted");
});

//Extracting from Data

let form = document.querySelector("form");

form.addEventListener("submit",function(event){
   event.preventDefault();
    
   let input=document.querySelector("input");
   console.dir(input);
   //console.log(input.innerText);
   console.log(input.value);

});


// More values

// let form = document.querySelector("form");

// form.addEventListener("submit",function(event){
//    event.preventDefault();
    
// //    let user=document.querySelector("#user");
// //    let pass=document.querySelector("#pass");
   

//     // console.dir(form);
//     // let user = this.elements[0]; //form.elements[0]
//     // let pass = this.elements[1]; //form.elements[1]

//    console.log(user.value);
//    console.log(pass.value);

// });

//Change Event --- initial and final state of an element  
//can be applied on textarea, input or select 

// let form = document.querySelector("form");

// form.addEventListener("submit",function(event){
//    event.preventDefault();
// });

// let user = document.querySelector("#user");

// user.addEventListener("change",function(){
//  console.log("change event");
//  console.log("final value= ", this.value);
// });

// user.addEventListener("input",function(){
//  console.log("input event");
//  console.log("final value= ", this.value);
// });



//Activity to print what ever is being typed
/*
let inp = document.querySelector("#text");
let p=document.querySelector("p");

inp.addEventListener("input",function(){
    console.log(inp.value);
    p.innerText = inp.value;
});
*/