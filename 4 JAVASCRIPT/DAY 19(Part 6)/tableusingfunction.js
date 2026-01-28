// console.log("Create a function to print the multiplication table of the number as entered by the user.");
// function Table (a){
//     for (let i=1; i<=10;i++){
//         console.log(a*i);
//     }
// }
// a=prompt("Enter the number for which you want to print the multiplication table:");
// Table(a);
// console.log("Print the sum of two numbers using the return keyword in the function");
function Sum(a,b){
    return a+b;
}
console.log(Sum(5,6));
console.log(Sum(Sum(5,6),6));
function isAdult(age){
    if (age>18){
        return "adult";
    }
    else{
        return "Not adult";
    }
    console.log("Hello User.");
}
console.log(isAdult(17));
