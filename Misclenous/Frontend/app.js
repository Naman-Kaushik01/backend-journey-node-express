let arr1 =[1,2,3];
let arr2 =[1,2,3];

arr1.sayHello = () => {
    console.log("hello! , i am arr");
}
arr2.sayHello = () => {
    console.log("hello! , i am arr");
};

function personMaker(name , age){
    const person ={
        name:name,
        age:age,
        talk(){
            console.log(`Hii My name is ${this.name}`);
        }
    };
    return person;
}
let p1 = personMaker("adam",25);


//Constructors - doesn't return anything & start with capital .. this is recommended

function Person(name,age){
    this.name=name;
    this.age=age;
}

Person.prototype.talk = function (){
    console.log(`Hii my name is ${this.name}`);
}
let p3 = new Person("Naman",20);


// Creating classes

class Person{
    constructor(name , age){
        this.name = name;
        this.age = age;
    }
    talk(){
        console.log(`Hii my name is ${this.name}`);
    }
}
//creating object of class person

let person1 = new Person("Naman",20);

//Inheritence 

class Student extends Person{
    constructor(name , age , marks){
        super(name , age) // parent class constructor is being called
        this.marks = marks;
    }
}