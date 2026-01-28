let div = document.querySelector("div");
let ul = document.querySelector("ul");
let li = document.querySelector("li");

div.addEventListener("click", function(event){
    event.stopPropagation();
    console.log("Div was Clicked.");
})

ul.addEventListener("click", function(event){
    event.stopPropagation();
    console.log("ul was Clicked.");
})

li.addEventListener("click", function(event){
    event.stopPropagation();
    console.log("li was Clicked.");
})
