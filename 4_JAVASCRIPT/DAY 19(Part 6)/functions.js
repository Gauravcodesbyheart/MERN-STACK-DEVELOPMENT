console.log("We are going to use the function here");
function Hello(){
    console.log("Hello");
};
Hello();
Hello();
Hello();
Hello();
Hello();
console.log("We have here used the function to print the number from 0 to 4 ");
function Numberloop(){
    for (let i=0; i<5;i++){
        console.log(i);
    }
};
Numberloop();
Numberloop();
console.log("Create the functions to write a poem");
function poem(){
    console.log("Twinkle Twinkle");
    console.log("Little Star");
    console.log("How are wonder ");
    console.log("What you are");
    console.log("Up above the world so high");
    console.log("Like a diamond in the sky");
};
poem();
poem();
console.log("Write a program to print the any number on the dice.");
function Dice(){
    console.log(Math.floor(Math.random()*6+1));
}
Dice();
console.log("Function with arguments");
function userName(name){
    console.log(name);
};
userName("Gaurav");
// userName(prompt("Enter the name of user"));
console.log("Create a function to print the name and age of the person");
function printinfo(Name,age){
    console.log(`${Name}'s age is ${age}`);
}
printinfo("Gaurav",21);
console.log("Create a function to add two nubers");
function Add(a,b){
    console.log(a+b);
    
};
a=prompt("Enter the first number");
b=prompt("Enter the second number");
num1 = parseInt(a);
num2 = parseInt(b);
Add(num1,num2);

