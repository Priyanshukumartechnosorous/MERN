

//  <-------call stack------------>
// function hello() {
//     console.log("inside hello func");
//     console.log("hello");
// }

// function demo() {
//     console.log("calling hello func");
//     hello();
// }
// console.log("calling demo func");
// demo();
// console.log("done");


// function one() {
//     return 1;
// }
// function two() {
//     return one() + one();
// }
// function three() {
//     let ans = two() + one();
//     console.log(ans);
    
// }
// three();

// <--------set timeout--------->
// setTimeout(()=> {
//     console.log("kuamr");
// },2000);
// console.log("priyanshu");





//<-------callback hell--------->
// h1= document.querySelector("h1");

// function changeColor(color,delay,nextColorChange) {
    // setTimeout(()=> {
    //     h1.style.color = color;
    //     nextColorChange();
    // },delay);
//}
// changeColor("red",1000, ()=> {
//     changeColor("orange",1000, () =>{
//         changeColor("green",1000, () => {
//             changeColor("yellow",1000)
//         });
//     });
// });




// changeColor("red",1000);
// changeColor("black",1000);
// changeColor("blue",1000);
// setTimeout(()=> {
//     h1.style.color = 'red';
// }, 1000);

// setTimeout(()=> {
//     h1.style.color = 'black';
// }, 2000);

// setTimeout(()=> {
//     h1.style.color = 'orange';
// }, 3000);



// function savetoDb(data,success, failure) {
//     let internetspeed= Math.floor(Math.random()*10) +1;
//     if(internetspeed > 4) {
//         success();
       
        
//     }
//     else{
//         failure();
        
        
//     }

    
// }
// savetoDb("priyanshu", ()=> {
//     console.log("success:your data was saved");
//     savetoDb("hello world", () => {
//         console.log("success2: saved");
//         savetoDb("Manasvi", ()=> {
//             console.log("success3: saved data");
//         },() => {
//             console.log("failure3: not saved");
            
//         });
        
//     }, ()=> {
//         console.log("failure2: not saved");
        
//     });
    
// }, () => {
//     console.log("failure: not saved");
// });

/// ------promises---------------->
// function savetoDb(data) {
        
//         return new Promise((resolve,reject)=> {
//             let internetspeed= Math.floor(Math.random()*10) +1;
        
//         if(internetspeed > 4) {
//             resolve("success : data was saved");
           
            
//         }
//         else{
//             reject("failure : weak connection");
            
        
//         }
//     });
//     } 

//     let request=  savetoDb("priyanshu");// promise object
//     request
//     .then(()=> {
//         console.log("promise was resolved");
//     })
//     .catch(()=> {
//         console.log("promise was rejected");
        
//     })
//// another compact way to write promises
    // savetoDb("priyanshu")// promise object
    
    // .then(()=> {
    //     console.log("promise was resolved");
    // })
    // .catch(()=> {
    //     console.log("promise was rejected");
        
    // })
///<--------promises chaining------->

// savetoDb("priyanshu")// promise object
    
// .then(()=> {
//     console.log("data 1 saved");
//     return savetoDb("hello");})
//     .then(() => {
//         console.log("data2 saved");
//         return savetoDb("manasvi")
//     })
//     .then(()=> {
//         console.log("data3 saved");
        
//     })

// .catch(()=> {
//     console.log("promise was rejected");
    
// });



/// <------result------->
// savetoDb("priyanshu")// promise object
    
// .then((result)=> {
//     console.log("data 1 saved");
//     console.log("result of promises :",result);
//     return savetoDb("hello");})
//     .then((result) => {
//         console.log("data2 saved");
//         console.log("result of promises :",result);
        
//         return savetoDb("manasvi")
//     })
//     .then((result)=> {
//         console.log("data3 saved");
//         console.log("result of promises :",result);
        
        
//     })

// .catch((error)=> {
//     console.log("promise was rejected");
//     console.log("error of promises :",error);
    
// });






//<------- heading color activity------------------>
h1 = document.querySelector("h1");
function changeColor(color,delay) {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            h1.style.color = color;
            nextColorChange();
        },delay);
    });
}
changeColor("red", 1000)
.then(()=>{
    console.log("red color");
    return changeColor("orange", 1000);
    
})
.then(()=> {
    console.log("orange color");
    return changeColor("green", 1000)
})