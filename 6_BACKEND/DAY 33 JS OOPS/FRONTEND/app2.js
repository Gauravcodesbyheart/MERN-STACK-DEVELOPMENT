class Person {
    constructor(name,age){
        console.log("Person class constructor");
        this.name=name;
        this.age=age;
    }
    talk(){
        console.log(`Hi, I am ${this.name}`);
    }
}

class Student extends Person {
    constructor(name,age,marks){
        console.log("student class constructor");
    super(name,age);   // parent class constructor is being called
        this.marks=marks;
    }

}

class Teacher extends Person {
    constructor(name,age,subject){
    super(name,age);  // parent class constructor is being called
        this.subject=subject;
    }

}

let stud1 = new Student("adna", 25,78);

// here mammal is the parent class while dog and cat is the child class properties are here created like type,eat,bark for dog and meow for cat
class Mammals {
    constructor (name){
        this.type = "Warm-bloded";
    }

    eat(){
        console.log("I'm eating");
    }
}

class Dog extends Mammals{
    constructor(name){
        super(name);
    }
    bark(){
        console.log("Woof...");
    }
}

let dog1 = new Dog("truffie");
console.log(dog1);

class Cat extends Mammals{
    constructor(name){
        super(name);
    }
    meow(){
        console.log("Meow...");
    }
}
let cat1 = new Cat("Kitten");
console.log(cat1);
