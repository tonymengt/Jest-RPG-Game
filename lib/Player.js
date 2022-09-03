const Potion = require('./Potion')

function Player(name=''){
    this.name = name;

    this.health = Math.floor(Math.random() * 10 + 95);
    this.strength = Math.floor(Math.random() * 5 + 7);
    this.agility = Math.floor(Math.random() * 5 + 7);
    this.inventory = [new Potion('health'), new Potion()];
    
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

Player.prototype.getHealth = function () {
    return `${this.name}'s health is now ${this.health}!`;
};

Player.prototype.isAlive = function () {
    if (this.health > 0) {
        return true;
    }
    return false;
};

Player.prototype.reduceHealth = function (health) {
    this.health -= health;

    if(this.health < 0) {
        this.health = 0;
    }
};

Player.prototype.getAttackValue = function () {
    const min = this.strength - 5;
    const max = this.strength + 5;

    return Math.floor(Math.random() * (max - min) + min);
};

Player.prototype.addPotion = function (potion) {
    this.inventory.push(potion);
};

Player.prototype.usePotion = function (index) {
    const potion = this.getInventory().splice(index, 1)[0];

    switch(potion.name){
        case 'agility' :
            this.agility += potion.value;
            break;
        case 'strength':
            this.strength += potion.value;
            break;
        case 'health':
            this.Health =+ potion.value;
            break;
    }
}
// const player = new Player('Jane');

// player.getStats();
// player.getInventory();
module.exports = Player;