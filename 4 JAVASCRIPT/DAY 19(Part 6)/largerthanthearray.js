console.log("Create a javascript function that returns array elements larger than a number");
arr = [23,45,67,89,9,12,34,56];
function larger (arr){
    let num = 0;
    for (let i=1;i<=arr.length;i++){
        if (num<arr[i]){
            console.log(num = arr[i]);
        }
    } 
       
};
larger(arr);


console.log("write a javascript function to extract unique characters from the string");
function extractUniqueChars(str){
    let unique = "";
    for (let i =0;i<str.length;i++){
        if (!(unique.includes(str[i]))){
            unique+=str[i];
        }
    }
    console.log(unique);

}
extractUniqueChars("programming");


console.log("Write a Javascript function that accepts a list of country names as input and returns the longest country as output");

function countryNames(country){
    let ansIdx=0;
    for (let i=0;i<country.length;i++){
        let ansLen =country[ansIdx].length;
        let currLen = country[i].length;
        if (currLen>ansLen){
            ansIdx = i;
        }
    }
    return country[ansIdx];
}
let country=["Australia", "Germany", "United states of america"];
console.log(countryNames(country));


console.log("Write a program in javascript to count the number of vowels in the string");
function vowels (strs){
    let count = 0;
    for (let i=0;i<strs.length;i++){
        if (strs[i]=="a"||
            strs[i]=="e"||
            strs[i]=="i"||
            strs[i]=="o"||
            strs[i]=="u"
        ){
            count +=1;
        }
    }
    console.log(count);
}
let strs = "ant";
vowels(strs);

console.log("Write a Javascript function to generate a random number within a range ");
let start = 100;
let end = 200;
function generateRandom(start,end){
    let diff = end-start;
    return Math.floor(Math.random()*diff)+ start;
}


console.log(generateRandom(start,end));