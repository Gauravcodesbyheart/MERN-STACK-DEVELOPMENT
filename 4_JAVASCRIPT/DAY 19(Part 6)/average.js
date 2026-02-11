function average (a,b,c){    
    console.log(`The average of three numbers ${num1} , ${num2} and ${num3} are: ${(a+b+c)/3}`);
}
let a = prompt("Enter the first number");
let b = prompt("Enter the second number");
let c = prompt("Enter the third number");
num1 = parseInt(a);
num2 = parseInt(b);
num3 = parseInt(c);
average(num1,num2,num3);