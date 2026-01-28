                // QUESTION 2 
let btn = document.createElement("button");
btn.innerText="Submit";
document.querySelector("body").append(btn);


btn.addEventListener("click",function(){
    btn.classList.add("green");
});


                // Question 3

let inp = document.createElement("input");
inp.setAttribute("placeholder","Enter your name");
document.querySelector("body").append(inp);

inp.addEventListener("input", function () {
    this.value = this.value.replace(/[^a-zA-Z]/g, "");
});

let heading = document.createElement("h2");
heading.innerText="You are viewing the heading of the HTML Page";
document.querySelector("body").append(heading);

inp.addEventListener("input",function(){
    heading.innerText=inp.value;
})
