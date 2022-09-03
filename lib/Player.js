const Potion = require("./Potion");
const Character = require("./Character");

class Player extends Character{
  constructor(name = "") {

    super(name);

    this.inventory = [new Potion("health"), new Potion()];
  }

  getStats() {
    return {
      potions: this.inventory.length,
      health: this.health,
      strength: this.strength,
      agility: this.agility,
    };
  }

  getInventory() {
    if (this.inventory.length) {
      return this.inventory;
    } else {
      return false;
    }
  }

  // Player.prototype.getHealth = function () {
  //     return `${this.name}'s health is now ${this.health}!`;
  // };

  // Player.prototype.isAlive = function () {
  //     if (this.health > 0) {
  //         return true;
  //     }
  //     return false;
  // };

  // Player.prototype.reduceHealth = function (health) {
  //     this.health -= health;

  //     if(this.health < 0) {
  //         this.health = 0;
  //     }
  // };

  // Player.prototype.getAttackValue = function () {
  //     const min = this.strength - 5;
  //     const max = this.strength + 5;

  //     return Math.floor(Math.random() * (max - min) + min);
  // };

  addPotion(potion) {
    this.inventory.push(potion);
  }

  usePotion(index) {
    const potion = this.getInventory().splice(index, 1)[0];

    switch (potion.name) {
      case "agility":
        this.agility += potion.value;
        break;
      case "strength":
        this.strength += potion.value;
        break;
      case "health":
        this.Health = +potion.value;
        break;
    }
  }
}

// const player = new Player('Jane');

// player.getStats();
// player.getInventory();
module.exports = Player;
