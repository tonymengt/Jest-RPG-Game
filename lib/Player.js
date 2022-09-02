const Potion = require('./Potion')

function Player(name=''){
    this.name = name;

    this.health = Math.floor(Math.random() * 10 + 95);
    this.strength = Math.floor(Math.random() * 5 + 7);
    this.agility = Math.floor(Math.random() * 5 + 7);
    this.inventory = [new Potion('health'), new Potion()];
    
    // returns an object with various player properties
    // this.getStats = function () {
    //     return {
    //         potions: this.inventory.length,
    //         health: this.health,
    //         strength: this.strength,
    //         agility: this.agility
    //     };
    // };

    // // return the inventory array or false if empty
    // this.getInventory = function () {
    //     if (this.inventory.length){
    //         return this.inventory;
    //     } else {
    //         return false;
    //     };
    // };
}

Player.prototype.getStats = function () {
    return {
        potions: this.inventory.length,
        health: this.health,
        strength: this.strength,
        agility: this.agility
    };
};

Player.prototype.getInventory = function () {
    if (this.inventory.length){
        return this.inventory;
    } else {
        return false;
    };
}

// const player = new Player('Jane');

// player.getStats();
// player.getInventory();
module.exports = Player;