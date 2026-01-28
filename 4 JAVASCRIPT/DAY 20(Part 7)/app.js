const student =  {
    name : "Gaurav",
    age: 23,
    eng: 95,
    Math: 93,
    Phy: 97,
    getAvg(){
        let avg = (this.eng + this.Math + this.Phy) / 3;
        console.log(`${this.name} got avg marks = ${avg}`);
    }
};

student.getAvg();
console.log(student.name);
console.log(this.student);
function getAvg(){
    console.log(this);
}
getAvg();
try{
    console.log(a);
}
catch{
    console.log("caught an error... a is not defined.");
}
const sum = (a,b) => {  // arrow function , functions that are created directly without giving the name of the function. 
    console.log(a+b);
};
sum(2,5);
const cube = (n) =>{
console.log(n*n*n);
}

cube(5);
const power = (a,b) =>{
    let value = Math.pow(a,b);
    console.log(value);
};
power(5,2);
const mul = (a,b)=> (
    a * b 
);
mul(3,5);

const diff = (a,b) => a - b ;
diff(5,2);
console.log("Now we are going to use the Timeout function");
setTimeout ( () => {      //SYNTAX:-  outerfunction ( () => {//do some job} , time in milli seconds);
    console.log("Gaurav Singh");
} , 4000);

console.log("The CR of CSE B is ");
let id = setInterval( ()=>{
    console.log("gaurav Singh");
},4000);
let id2 = setInterval ( ()=>{
    console.log("Anurag Singh");
},3000);

const student1 = {
    name: "gaurav",
    marks: 95,
    prop: this,  //global scope
    getName: function (){
        console.log(this);
        return this.name;
    },
};
console.log((student1));
const a = 5;
console.log("Write an arrow function named arrayAverage that accepts an array of numbers and returns the average of hose numbers");
const arrayAverage = (array)=>{
    let sum = 0;
    for (let i=0;i<array.length;i++){
        sum = sum+array[i];
    }
    console.log(`The average of ${array.length} numbers are ${sum/array.length}`);
}
array = [23,34,56,78,90,1,2,3,4,5,];
arrayAverage(array);
console.log("Write an arrow function named isEven() that takes a single number as argument and return if it is even or not.");
const isEven = (n) => {
    if (n%2==0){
        console.log("Even Number");
    }
    else{
        console.log("Odd Number");
    }
}

isEven(55);