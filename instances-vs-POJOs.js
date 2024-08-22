// Class declaration
// - does not create any objects!
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHi() {
        return `Hi! I am ${this.name} and I am ${this.age} years old!`;
    }
}

// Create two instances (objects of a certain class) from Person
let anna = new Person('Anna', 37);
let bertil = new Person('Bertil', 20);

console.log(anna);
console.log(anna.sayHi());
console.log(bertil);
console.log(bertil.sayHi());

// But you can do the same using object literals / POJO:s
// yes, but then you have to teach every object to sayHi etc...
// Which is not so DRY: Don't Repeat Yourself and boring!
let cecilia = {
    name: 'Cecilia',
    age: 40,
    sayHi() {
        return `Hi! I am ${this.name} and I am ${this.age} years old!`;
    }
};

console.log(cecilia);
console.log(cecilia.sayHi());

let david = {
    name: 'David',
    age: 70,
    sayHi() {
        return `Hi! I am ${this.name} and I am ${this.age} years old!`;
    }
};

console.log(david);
console.log(david.sayHi());



