const Max = prompt("Enter the maximum number");
console.log(`The maximum number as entered by the user is ${Max}`);

const random = Math.floor(Math.random()*Max+1);
let guess = prompt("Guess the number");
while (true){
    if (guess=="quit"){
        console.log("User quit.");
        break;
    }
    if (guess==random){
        console.log("Congratulations! You are Right.The random number was",random);
        break;
    }
    else if (guess<random){
        guess=prompt("Hints: Your Guess was Small. Please Try again:");
    }
    else {
        guess=prompt("Hints: Your guess was Big.Please Try again:");
    }
    

}