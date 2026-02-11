let para1 = document.createElement("p");
para1.innerText = "Hey I'm red! ";
document.querySelector('body').append(para1);
para1.classList.add('red');

let heading = document.createElement("h3");
heading.innerText = "I'm blue in color";
document.querySelector("body").append(heading);
heading.classList.add("blue");

let div = document.createElement("div");    // creating 
let heading1 = document.createElement("h1");
let paragraph2 = document.createElement("p");

heading1.innerText = "I'm in a div.";      // proing the text inside the elements
paragraph2.innerText = "Me too!";

document.querySelector("body").append(div);
div.append(heading1);
div.append(paragraph2);
div.classList.add("box");






