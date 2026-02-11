                   // part 1
let input = document.createElement("input");
let button = document.createElement("button");
button.innerText= "Click Me";

document.querySelector("body").append(input);
document.querySelector("body").append(button);
                 

                  //Part2 

button.setAttribute("id","btn");
input.setAttribute("placeholder", "username");

                 //Part 3

let btn = document.querySelector("#btn");
btn.classList.add("btnstyle");
                 

                //Part 4

let h1 = document.createElement("h1");
h1.innerText="DOM PRACTISE";
h1.classList.add("heading");
document.querySelector("body").append(h1);


            //Part 5
let para = document.createElement("p");
para.innerHTML="Apna College <b>Delta</b> Practise";
document.querySelector("body").append(para);