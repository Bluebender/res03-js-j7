import { Mage } from './mage.js';
import { Warrior } from './warrior.js';

window.addEventListener("DOMContentLoaded", function(){
    
    let mage1 = new Mage("Mage Ique", 50, 50);
    let warrior1 = new Warrior("Warrior Izon", 60, 10);

    console.log(mage1);    
    console.log(warrior1);    
});

