const Potion = require("./Potion");
const Character = require("./Character");

class Enemy extends Character {
  constructor(name, weapon) {

    super(name);

    this.weapon = weapon;
    this.potion = new Potion();


  }

  // Enemy.prototype.getHealth = function () {
  //     return `${this.name}'s health is now ${this.health}!`;
  // };

  // Enemy.prototype.isAlive = function () {
  //     if (this.health > 0) {
  //         return true;
  //     }
  //     return false;
  // };

  // Enemy.prototype.reduceHealth = function (health) {
  //     this.health -= health;

  //     if(this.health < 0) {
  //         this.health = 0;
  //     }
  // };

  // Enemy.prototype.getAttackValue = function () {
  //     const min = this.strength - 5;
  //     const max = this.strength + 5;

  //     return Math.floor(Math.random() * (max - min) + min);
  // };

  getDescription() {
    return `A ${this.name} holding a ${this.weapon} has appeared!`;
  }
}



module.exports = Enemy;
