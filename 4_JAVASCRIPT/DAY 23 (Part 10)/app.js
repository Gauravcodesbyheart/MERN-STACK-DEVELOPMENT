let button = document.querySelector('button');
console.dir(button);
button.onclick = function (){
    console.log('When button was clicked some function also get performed.');
    alert("Hey Dear what are you doing ");   // doing this wehenever we click on button console.log generate o/p and also the also give alert
}

function greeting (){
    alert('Hello Dear! Please greet me');  /// by creating functions we can also do tasks there.
}
button.onclick=greeting;
// button.onmouseenter=function(){
//     button.innerText="Hey don't touch me baby";
// }
function sona (){
  button.innerText="Hey Sona";  
}
button.addEventListener("click",function (){
  button.innerText="Hey Sona";  
  console.log(this);
  console.dir(this);
  console.log(this.innerText);
});
button.addEventListener("click", greeting);


let p = document.querySelector("p");
p.addEventListener("click",function (){
    console.log("Paragrapgh was clicked.");
});

let box = document.querySelector(".box");
box.addEventListener("mouseenter",function (){
    console.log("Mouse inside the box");
});

// form events

let form = document.querySelector("form");
form.addEventListener("submit",function (event){
    console.log("form Submitted.");
    alert("Form submitted");
    event.preventDefault();
    console.log()
});

// extract form data
form.addEventListener("submit", function (event){
let inp = document.querySelector("#inp");
console.log(inp.value);
let pass = document.querySelector("#pass");
console.log(pass.value);   
alert(`Hi! ${inp.value} you passowrd is ${pass.value}`)
});



