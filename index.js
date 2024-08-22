import Person from './classes/Person.js';
import Pet from './classes/Pet.js';

// create an array with some instances of the Person classes
const somePersons = [
    new Person('Gabriel', 28),
    new Person('Thomas', 51),
    new Person('Mikaela', 35),
    new Person()
];

for (let person of somePersons) {
    // console.log(person.sayHi());
}

let gabriel = somePersons[0];
let mikaela = somePersons[2];

console.log('mikaela: Calling sayHi');
console.log(mikaela.sayHi());
console.log('mikeala: Calling sayHiToAnotherPerson');
console.log(mikaela.sayHiToAnotherPerson(gabriel));

mikaela.addFriend(gabriel);
// mikaela makes friends easily
mikaela.addFriend(somePersons[1]);
mikaela.addFriend(somePersons[3]);

gabriel.addFriend(mikaela);

console.log("mikaela tellMeAboutYourFrinends",
    mikaela.tellMeAboutYourFriends());

console.log("gabriel tellMeAboutYourFrinends",
    gabriel.tellMeAboutYourFriends());

let garfield = new Pet('Garfield', 'cat');
let fido = new Pet('Fido', 'dog');
let sam = new Pet('Sam', 'snake');

mikaela.addPet(garfield);
mikaela.addPet(sam);
gabriel.addPet(fido);

let thePets = [garfield, fido, sam];
for (let pet of thePets) {
    console.log(pet.sayHi());
}

console.log(mikaela.tellMeAboutYourPets());
console.log(gabriel.tellMeAboutYourPets());