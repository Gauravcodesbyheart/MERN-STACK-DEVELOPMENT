const favourite = "Raanjhana";
let guess = prompt("Guess the name of Favourite Movie");
while((guess!=favourite)&&(guess!="quit")){
    console.log("Oops! Wrong guess");
    let guess = prompt(" Please re-guess the Favourite Movie");
}
if (guess==favourite){
    console.log("Congratulations! You have guessed the right movie.");
    alert("Congratulations! You have guessed the right movie.");
}
else{
    console.log("You quit.");
}
