let arr = [1,2,3,4,5];
function print(el){
    console.log(el);
}
arr.forEach(print);
arr.forEach(function(el){
    console.log(el);
});
let student = [
    { 
        name: "Gaurav",
        marks: 95,
    },
    {
        name: "Saurav",
        marks: 98,
    },
    {
        name: "King",
        marks: 100,
    }
];
student.forEach((student)=>{  // here array is passed inside the arr.forEach() function  as an arrow function. 
    console.log(student);
});

let num = [1,2,3,4,5];
let double = num.map(function(el){   
    return el*2;
});
console.log(double);

let gpa = student.map((el)=>{
    return el.marks / 10;
});
console.log(`The marks of students after converting to the GPA are ${gpa}`);
let number = [1,2,3,4,5,6,7,8,9,0];
let even = number.filter ( (number)=>(number % 2 == 0));
console.log(even);
console.log([1,2,3,4].every( (el)=>(el%2==0) ));
console.log([2,4].every( (el) => (el%2==0)));  //every method

console.log([1,2,3,4,5].some((el)=> (el%2==0)));  // some method
console.log([1,2,3,4].reduce( (res,el)=>(res+el)));  // reduce method
let digits = [1,2,3,4,5]
let finalVal = digits.reduce((res,el)=>(res,el));
console.log(finalVal);

let arrayofnumbers = [23,24,25,26,76,89,100,234];
let reduce = arrayofnumbers.reduce ( (max,el)=>{
    if (el>max){
        return el;
    }
    else {
        return max;
    }
});
console.log(reduce);


let comboarray = [12,13,10,20,89,50,70,80,90];
console.log(comboarray.every((el)=>(el%10==0)));


let arrayofnumbers1 = [23,3,24,25,26,76,89,100,234];
let reduce1 = arrayofnumbers1.reduce ( (min,el)=>{
    if (el<min){
        return el;
    }
    else {
        return min;
    }
    return min;
});
console.log(reduce1);
console.group("Now we are set to use the spread and spread literals");
console.log(... "apna college");
let gaurav = [1,2,3,4,5,6,7,8,9,0];  // spread function
console.log(Math.min(... arr));

let arrra = [1,2,3,4,5]
let newarr = [ ...arrra];  // spread literals
console.log(newarr);   

let data =  {
    email : "gauravbthsingh890@gmail.com",
    password : "gaurav@786"
};
let datacopy = {...data,id:123};

console.log(datacopy);

let arrays = [1,2,3,4,50];
let obj1 = {... arrays};
console.log(obj1);
function sum (...args){    //rest property
    for (let i=0;i<args.length;i++){
        console.log("You gave me ", args[i]);
    }
}
// sum(1,2,3,4,5,6,7,8,9,0);
// function min (){
//     console.log(arguments);
// }
// min();
// console.log(arguments);
function sums (...args){
    return args.reduce((sum,el)=>sum+el);
}
console.log(sums(12,12,12,12,14));
function min (msg, ...args){
    console.log(msg);
    return args.reduce((min,el)=>{
        if (min>el){
            return el;
        }
        else{
            return min;
        }
    });
}
console.log(min("Hello",12,45,67,89,67));
console.log("Now we are ready to use the destructuring methods");
let names = ["Tony", "Bruce", "steve", "Poster"];
let [winner,runnerup]= names;
console.log(winner,runnerup);
const students = {
    name: "Gaurav singh",
    class:9,
    age:14,
    subject: ["Hindi", "Ensligh", "Math", "Science", "Social science"],
    usename: "rajput_gaurav",
    password: 1234,
};
let {username:user,password:pass} = students;
console.log(user,pass);