//Call Stack

// function hello(){
//     console.log("hello");
// }

// hello();

//---------------------------------------------------------------------------------

// function hello(){
//     console.log("hello");
// }

// function demo(){
//     hello();

//     console.log("again in the demo() after executing hello()");
// }

// demo();

// console.log("done, bye!");

//-----------------------------------------------------------------------------------

//Visualizing the call stack -- breakpoints

// function one(){
//     return 1;
// }

// function two(){
//     return one() + one();
// }

// function three(){
//     let ans = two() + one();
//     console.log(ans);
// }

// three();


// -------------------------------------------------------------------------

//JS is a Single Threaded JS ---- browser=== stack 

// Even JS is single threaded  but sometimes it acts as Asynchronous in Nature

// setTimeout(()=>{
//     console.log("kmit college");
// },2000);

// console.log("hello");

//------------------------------------------------------------------------

//Call Back Hell

// h1 = document.querySelector("h1");

// setTimeout(()=>{
//     h1.style.color = "red";
// },1000);

// setTimeout(()=>{
//     h1.style.color = "orange";
// },2000);

// setTimeout(()=>{
//     h1.style.color = "green";
// },3000);

//-------------------------------------------------------------------------------

// h1 = document.querySelector("h1");

// function changeColor(color,delay){
//     setTimeout(()=>{
//            h1.style.color=color;
//     },delay)
 
// }

// changeColor("red",1000);
// changeColor("orange",2000);
// changeColor("blue",3000);

//--------------------------------------------------------------------------------

//Call backs nesting --> Callback hell

// h1 = document.querySelector("h1");

// function changeColor(color,delay,nextColorChange){
//     setTimeout(()=>{
//            h1.style.color=color;
//            nextColorChange();
//     },delay)
 
// }

// changeColor("red",1000, ()=>{
//     changeColor("orange",1000, ()=>{
//         changeColor("blue",1000, ()=>{
//             changeColor("green",1000)
//         });
//     });
// });

// -------------------------------------------------------------------------------

// To Overcome Callback hell --- we use promises , await and async


//Setting up for Promises

// function savetoDb(data,success,failure){
//     let internetspeed =Math.floor(Math.random()*10)+1;
//     if(internetspeed > 4){
//         success();
//     } else {
//         failure();
//     }
// }
// savetoDb("kmit college", 
//     () => {
//         console.log("Success: Your data was saved");
//         savetoDb("CSM -A", 
//     () => {
//         console.log("Success2: Your data was saved")
//     },
//     () =>{
//         console.log("Failure2: Weak connection data not saved");
//     });
//     },
//     () =>{
//         console.log("Failure: Weak connection data not saved");
//     }
// );

//--------------------------------------------------------------------------------------------

//Promises -- The Promise object represents the eventual completion (or failure) 
// of an asynchronous operation and its resulting value === resolve & reject


// function savetoDb(data){
//     let internetspeed =Math.floor(Math.random()*10)+1;
//     return new Promise ((resolve,reject)=>{
//         console.log(internetspeed);
//         if(internetspeed > 4) {
//             resolve("success : data was saved");
//         } else {
//             reject("Failure : data was not saved");
//         }
//     })
// }

// As promise is object it has its own methods ---- then() & catch()

// function savetoDb(data){
//     let internetspeed =Math.floor(Math.random()*10)+1;
//     return new Promise ((resolve,reject)=>{
//         if(internetspeed > 4) {
//             resolve("success : data was saved");
//         } else {
//             reject("Failure : data was not saved");
//         }
//     })
// } 

// let result = savetoDb("Kmit College");  // result == promise object

// result
//  .then(()=> {
//     console.log("promise was resolved");
//      console.log(result);
//  })
//  .catch(()=> {
//     console.log("promise was rejected");
//      console.log(result);
//  })

//-----------------------------------------------------------------------

//Compact version

// function savetoDb(data){
//     let internetspeed =Math.floor(Math.random()*10)+1;
//     return new Promise ((resolve,reject)=>{
//         if(internetspeed > 4) {
//             resolve("success : data was saved");
//         } else {
//             reject("Failure : data was not saved");
//         }
//     })
// } 

// savetoDb("Kmit College")
//  .then(()=> {
//     console.log("promise was resolved");
//     // console.log(result);
//  })
//  .catch(()=> {
//     console.log("promise was rejected");
//     // console.log(result);
//  })

//---------------------------------------------------------------

//Promise Chaining -- Multiple then()

// function savetoDb(data){
//     let internetspeed =Math.floor(Math.random()*10)+1;
//     return new Promise ((resolve,reject)=>{
//         if(internetspeed > 4) {
//             resolve("success : data was saved");
//         } else {
//             reject("Failure : data was not saved");
//         }
//     })
// } 

// savetoDb("KMIT")
// .then(()=>{
//      console.log("data1 saved");
//      savetoDb("CSM")
//      .then(()=>{
//         console.log("data2 saved");
//      });
// })
// .catch(()=>{
//     console.log("Promise was rejected");
// });

//----------------------------------------------------------------------

//improvised Promise chaining

// function savetoDb(data){
//     let internetspeed =Math.floor(Math.random()*10)+1;
//     return new Promise ((resolve,reject)=>{
//         if(internetspeed > 4) {
//             resolve("success : data was saved");
//         } else {
//             reject("Failure : data was not saved");
//         }
//     })
// } 

// savetoDb("KMIT")
// .then(()=>{
//      console.log("data1 saved");
//      return savetoDb("CSM");
// })
// .then(()=>{
//         console.log("data2 saved");
//         return savetoDb("A-Section");
//      })
// .then(()=>{
//     console.log("data3 saved");
// })
// .catch(()=>{
//     console.log("Promise was rejected");
// });

//---------------------------------------------------------------------

//Results & Errors in Promises

// function savetoDb(data){
//     let internetspeed =Math.floor(Math.random()*10)+1;
//     return new Promise ((resolve,reject)=>{
//         if(internetspeed > 4) {
//             resolve("success : data was saved");
//         } else {
//             reject("Failure : data was not saved");
//         }
//     })
// } 

// savetoDb("KMIT")
// .then((result)=>{
//      console.log("data1 saved");
//      console.log("Result of Promise",result);
//      return savetoDb("CSM");
// })
// .then((result)=>{
//         console.log("data2 saved");
//         console.log("Result of Promise",result);
//         return savetoDb("A-Section");
//      })
// .then((result)=>{
//     console.log("data3 saved");
//     console.log("Result of Promise",result);
// })
// .catch((error)=>{
//     console.log("Promise was rejected");
//     console.log("Result of Promise",error);
// });


//---------------------------------------------------------------------


//Call backs nesting --> Callback hell

// h1 = document.querySelector("h1");

// function changeColor(color,delay,nextColorChange){
//     setTimeout(()=>{
//            h1.style.color=color;
//            if (nextColorChange) nextColorChange();
//     },delay)
 
// }

// changeColor("red",1000, ()=>{
//     changeColor("orange",1000, ()=>{
//         changeColor("blue",1000, ()=>{
//             changeColor("green",1000)
//         });
//     });
// });

//-----------------------------------------------------------------------

// h1 = document.querySelector("h1");

// function changeColor(color,delay){
//     return new Promise((resolve,reject)=>{
//          setTimeout(()=>{
//            h1.style.color=color;
//            resolve("color changed!");
//     },delay);
//     });
// }

// // //in console

// // changeColor("red",1000);

// // let result = changeColor("red",5000); 

// // result

// //result

// changeColor("red",1000)
// .then(()=>{
//     console.log("red color was completed");
//     return changeColor("orange",1000);
// })
// .then(()=>{
//     console.log("Orange color was changed");
//     return changeColor("blue",1000);
// })
// .then(()=>{
//     console.log("blue color was conpleted");
//     return changeColor("green",1000);
// })
// .then(()=>{
//     console.log("Green color got changed");
// })

//------------------------------------------------------------------------


//Async Functions

//async & await Keyword

//Async Keyword -- used to create Async Functions

// async function greet(){
//     // abc.abc();
//     //throw "some random error";
//     return "hello world"; // returns a Promise 
// }

// greet()
// .then((result)=>{
//     console.log("Promise was resolved");
//     console.log("result was:", result);
// })
// .catch((err)=>{
//     console.log("promise was rejected with err:",err);

// })

// let hello = async() => { return 5; }; // returns a Promise


// Await Keyword - await can only be used inside an async function
// - It pauses the execution of the function until the Promise is settled (either resolved or rejected)
// - After the Promise resolves, await returns the resolved value

function getNum(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let num = Math.floor(Math.random()*10)+1;
            console.log(num);
            resolve();
        },1000);

    });
}

async function demo(){
    // getNum();
    // getNum();
    // getNum();
    // getNum();
    // getNum();
    // getNum();

    await getNum();
    await getNum();
    await getNum();
    await getNum();
    await getNum();
    getNum();
}

//----------------------------------------------------

//Now try to change the color change code with Async and Await

// h1 = document.querySelector("h1");

// function changeColor(color,delay){
//     return new Promise((resolve,reject)=>{
//          setTimeout(()=>{
//            h1.style.color=color;
//             console.log(`color changed to ${color}`)
//            resolve("color changed!");
//     },delay);
//     });
// }

// async function demo(){
//      await changeColor("red",1000);
//      await changeColor("green",1000);
//      await changeColor("orange",1000);
//      await changeColor("blue",1000);
//      await changeColor("red",1000);

// }

// demo();

// Handling Rejections -- try-catch

// h1 = document.querySelector("h1");

// function changeColor(color,delay){
//     return new Promise((resolve,reject)=>{
//          setTimeout(()=>{


//             let num = Math.floor(Math.random()*5) + 1;
//             if(num > 3){
//                 reject("promise rejected");
//             }

//             h1.style.color=color;
//             console.log(`color changed to ${color}`)
//             resolve("color changed!");
//     },delay);
//     });
// }

// async function demo(){
//     try{
//         await changeColor("red",1000);
//         await changeColor("green",1000);
//         await changeColor("orange",1000);
//         await changeColor("blue",1000);
//         await changeColor("red",1000);
//     } catch(err){
//         console.log("error caught");
//         console.log(err);
//     }
    

//      let a = 5;
//      console.log(a);
//      console.log("new number = ", a+3);

// }

// demo();

//What is an API