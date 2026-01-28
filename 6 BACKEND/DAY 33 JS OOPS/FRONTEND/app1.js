let arr = [1,2,3];
let arr2 = [5,6,7];
arr.SayHello = ()=>{
    console.log("Hello!, I'm arr");
};
  //prototype maker 
arr.__proto__.push = (n)=>{  // arrow defined the task done in push is changed 
    console.log("Pushing number: ", n);
}

arr.push(5);  // arrow called 

// function factory 

function PersonMaker(name,age){
    const person = {
        name: name,
        age: age,
        talk (){
        console.log(`Hi,My name is ${this.name}`);
    },
};
    return person;
}

let p1= PersonMaker("kavita",78);
console.log(p1);
p1.talk();

let p2= PersonMaker("Gaurav",45);
console.log(p2);
p2.talk();


// New operator -- constructor does n't anything and start with capital letter
function Man (name,age){  // blueprint -design 
    this.name=name;
    this.age=age;
}
// constructor function ke prototype me we added our own function
Man.prototype.talk = function(){
    console.log(`Hi, My name is ${this.name}`);
};

// new operator use to create instances for the constructors 
let man1 = new Man("adam", 25);  // here function created to these persons refers to same place meanwhile it is not like that in factory functions 
console.log(man1);
let man2 = new Man("sarita", 56);  // here function created to these persons refers to same place
console.log(man2);


// classes
class Human{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    talk(){
        console.log(`Hi, my name is ${this.name}`);
    }
}
let h1 = new Human("Gaurav",45);  // create objects classes
console.log(h1);
let h2 = new Human ("shrishti", 34); // create objects for classes
console.log(h2);


