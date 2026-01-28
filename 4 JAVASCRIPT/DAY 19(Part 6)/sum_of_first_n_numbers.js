function sumoffirstnnumbers(n){
    let sum = 0;
    for (let i=1; i<=n;i++){
        sum=sum+i;
    }
    console.log(`The sum of first ${n} numbers is ${sum}`);
}
number = prompt("Enter the number upto which you want to print the sum");
console.log(`The number entered by the user is ${number} upto which user wants to find sum.`);
sumoffirstnnumbers(number);