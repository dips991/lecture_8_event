//event handing in js
// let btn1 = document.querySelector("#btn1");
// btn1.onclick = () =>{
//     console.log("btn1 was clicked");
//     let a =25;
//     a++;
//     console.log(a); //20
// };

// let div = document.querySelector("div");
// div.onmouseover =()=>{
// console.log("you are inside div");
// };

//Event Object
// let div = document.querySelector("div");
// div.onmouseover =(evt)=>{
// console.log(evt);
// console.log(evt.type);
// console.log(evt.target);
// console.log(evt.clientX,evt.clientY);
// };

//event listeners

// let btn1 = document.querySelector("#btn1");

// btn1.addEventListener("click",(evt)=>{
//     console.log("button1 was clicked - hander1");
   // console.log(evt);
    //console.log(evt.type);
//});

// btn1.addEventListener("click",()=>{
//     console.log("button1 was clicked - hander2");
// });
// const hander3 = () =>{
//     console.log("button1 was clicked - handler3");
// };

// btn1.addEventListener("click",hander3);

// btn1.addEventListener("click",()=>{
//     console.log("button1 was clicked - hander4");
// });

// btn1.removeEventListener("click",hander3);
let modeBtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currMode = "light"; //dark
modeBtn.addEventListener("click",() =>{
    if(currMode==="light"){
        currMode="dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }else{
        currMode="light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(currMode);
});
