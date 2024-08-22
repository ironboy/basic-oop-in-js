export default class Pet {

    constructor(name, species) {
        this.name = name;
        this.species = species;
    }

    addOwner(owner) {
        this.owner = owner;
    }

    sayHi() {
        return `I'm ${this.name} and I'm a ${this.species}! ` +
            (this.owner ? `My owner is ${this.owner.name}.` : '');
    }

}