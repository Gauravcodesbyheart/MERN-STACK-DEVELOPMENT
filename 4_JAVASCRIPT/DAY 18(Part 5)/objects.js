let delhi = {
    latitude: "28.7041 N",
    longitude: "77.1025 E"

};
console.log(delhi);
console.log("The values in the objects are as given below without updation are as follows");
const details = {
    name: "Gaurav Singh",
    age: 20,
    gender: "Male",
    school: "Delhi Public School",
    nationality: "Indian",
};
console.log(details);
details.age = "21"  // Here the age key is updated to 21
details.college = "Bengal college of Engineering and technology" // here the college is added to the details object
console.log("Here we are going to use the Add / Update property in the list");
console.log(details);
console.log("Here we are going to delete the age");
delete details.age;
console.log(details);
const items = {
    Pen: 25,
    Paper: 30,
    Bag: 40,
    GeometryBox: 50,
};
console.log(items);
const obj = {
    1: "a",
    2: "b",
    3: "c",
};
console.log(obj);
console.log(obj[1]);
console.log("Here we are ready to use the nested object loops");
const classInfo = {
    gaurav: {
        Math: 99,
        Physics: 90,
        Chemistry: 100,

    },
    saurav: {
        Math: 98,
        Physics: 89,
        Chemistry: 99,
    },
    Shrishti: {
        Math: 97,
        Physics: 88,
        Chemistry: 98,
    }
};
console.log(classInfo);
console.log(classInfo.gaurav);
console.log(classInfo.gaurav.Math);
console.log("We are here to use the arrays of object property.");
const classInformation = [
    {
        name: "sid",
        Branch: "CSE",
    },
    {
        name: "Kavya",
        Branch: "IT",
    },
    {
        name: "Saloni",
        Branch: "ECE",
    }
];
console.log(classInformation);
console.log(classInformation[1]);
console.log(classInformation[1].name);
classInformation[1].gender = "Female";
console.log(classInformation[1]);
console.log("Now we are ready to use the Math property and method");
console.log(Math.PI);
console.log(Math.E);
let num = -23
console.log(`The value of num using the Math absolute Function is ${Math.abs(num)}`);
console.log(`When 2 raised to 3 then the resultant value will be ${Math.pow(2, 3)} by using the Math.pow(base,index) Methods`);
console.log(Math.floor(5.5));
console.log(Math.floor(-5.5));
console.log(Math.ceil(8.9));
console.log(Math.ceil(-8.9));
console.log("Generate any number between 0 to 1 using Math.random()");
console.log(Math.random()); // returns any value between 0 to 1
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log("Generate the numbers between 0 to 1");
let number = Math.random(); //step 1
num = number*10;            // step 2
num = Math.floor(num);      // step 3
console.log(num);           // step 4
console.log("Print random numbers between 0 to 1 5 times using the for loops.");
for (let i =1;i<5;i++){
    console.log(Math.floor(Math.random()*10)+1);
}
console.log("Print any number between 1 and 100");
let random = Math.random();
random = Math.random()*100;
console.log(Math.floor(random+1));
console.log("Print any number between 1 to 5");
console.log(Math.floor(Math.random()*5+1));