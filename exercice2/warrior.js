import { Character } from './character.js';

class Warrior extends Character {
    #strength;
    
    constructor(name, healthPoints, strength)
    {
        super(name, healthPoints);
        this.#strength = strength;
    }

    get strength (){
        return this.#strength;
    }

    set strength (strength){
        this.#strength = strength;
    }
}

export { Warrior };