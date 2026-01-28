console.log("1")
console.log("2")
console.log("3")
console.log("4")
console.log("5")
console.log("Write a program  to print numbers from 1 to 5 using the for loops.")
for (let i = 1 ; i<=5; i++){
    console.log(i);
}
console.log("Write a program to print numbers from 5 to 1 using the for  decrement loops")
for (let i=5;i>=1;i--){
    console.log(i);
}
console.log("Write a program to print odd numbers from 1 to 15")
for (let i = 1; i<=15;i=i+2){
    console.log(i);
}
console.log("Write a program to print odd numbers from 15 to 1")
for (let i = 15; i>=1;i=i-2){
    console.log(i);
}
console.log("Write a program to print even numbers from 0 to 10")
for (let i = 0; i<=10;i=i+2){
    console.log(i);
}
console.log("Write a program to print even numbers from 10 to 0")
for (let i = 10; i>=0;i=i-2){
    console.log(i);
}
console.log("Write a program to print multiplication table of 5")
for(let i=5;i<=50;i=i+5){
    console.log(i);
}
// second approach
console.log("Write a program to print multiplication table of 5")
for(let i=1;i<=10;i++){
    console.log(5*i);
}
console.log("Write any program inside the nested for loops")
for(let i=1;i<=3;i++){
    for (let j=1;j<=3;j++){
        console.log(j);
    }
}
// console.log("print the table of any number as entered by the user")
// let num = prompt("Enter the number for which you want to print table")
// num= parseInt
// for(let i=1;i<=10;i++){
//     console.log(num*i);
// }
console.log("Write any program inside the nested for loops");
for(let i=1;i<=3;i++){
    for (let j=1;j<=3;j++){
        console.log(j);
    }
}
console.log("Print numbers from 1 to 5 using the while loop");
let a = 1;
while(a<=5){
    console.log(a);
    a++;
}
console.log("Print numbers from 5 to 1 using the while loop");
let x=5;
while(x>=1){
    console.log(x);
    x--;
}
console.log("Use while loop to print numbers from 1 to 5 and skip 3 using break keyword.");
let y=1;
while(y<=5){
    if (y==3){
    break;
}
    console.log(y);
    y++;
}
console.log("We used break here.");
console.log("Here, We used the loops with the array by using the increment operator.");
let fruits = ["Mnago" , "Orange" , "Apple" , "guava" , "potato", "kiwi"];
fruits.push("pineapple");
for (let i=0;i<fruits.length;i++){
    console.log(i, fruits[i]);
}

console.log("Here, We used the loops with the array by using the decrement operator.");
let fruit = ["Mnago" , "Orange" , "Apple" , "guava" , "potato", "kiwi"];
fruit.push("pineapple");
for (let i=fruit.length;i>=0;i--){
    console.log(i, fruit[i]);
}
console.log("Here, Now we created the 2-D array");
let heroes = [
    ["ironman", "spiderman" , "thor"],
    ["superman" , "wonder women" , "flash"]
]
for (let i=0;i<heroes.length;i++){
    console.log(i,heroes[i],heroes[i].length);
    for(let j=0;j<heroes[i].length;j++){
        console.log(`j=${j} , ${heroes[i][j]}`);
    }
}
let student = [["aman ", 95], ["shradha", 94.4], ["karan" , 100]];
for (let i=0; i<student.length;i++){
    console.log(`info of student no. ${i+1}`);
    for (let j=0; j<student[i].length;j++){
        console.log(student[i][j]);
    }
}

console.log("Use of for of loops");
let fruit1=["mango", "apple", "banana", "litchi", "orange"];
for (fruit of fruit1){
    console.log(fruit);
}

for (char of "apna college"){
    console.log(char);
}
console.log("Use of nested for of loops");
let cartoon = [["ironman", "spiderman", "thor"],["superman", "wonderwoman", "flash"]];
for (cartoons of cartoon){
    for (character of cartoons){
        console.log(character);
    }
}
console.log(process.argv)
let args = process.argv
console.log(args);
for (let i=2;i,args.length;i++){
    console.log("Hello to ", args[i]);
}