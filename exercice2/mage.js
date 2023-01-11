import { Character } from './character.js';

class Mage extends Character {
    #manaPoints;
    
    constructor(name, healthPoints, manaPoints)
    {
        super(name, healthPoints);
        this.#manaPoints = manaPoints;
    }

    get manaPoints (){
        return this.#manaPoints;
    }

    set manaPoints (manaPoints){
        this.#manaPoints = manaPoints;
    }
}

export { Mage };