// Soldier
class Soldier {
  constructor(health, strength){
      this.health = health;
      this.strength = strength;
  }
  attack() {
      return this.strength;
  }
  receiveDamage(damage) {
      this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
  super ();
  //super(health, strength); --> not accepted by Jasmine
  //this.name = name;
  this.name = name;
  this.health =health;
  this.strength =strength;
  }
  receiveDamage(damage) {
      this.health -= damage;
      if (this.health > 0) {
          return this.name + " has received " + damage + " points of damage"
      }
      else return this.name + " has died in act of combat"
  }
  battleCry() {return "Odin Owns You All!"}
}

// Saxon

class Saxon extends Soldier {
  constructor(health, strength) {
  super ();
  //super(health, strength); --> not accepted by Jasmine
  //this.name = name;
  this.health =health;
  this.strength =strength;
  }
  receiveDamage(damage) {
      this.health -= damage;
      if (this.health > 0) {
          return "A Saxon has received " + damage + " points of damage"
      }
      else return "A Saxon has died in combat"
  }
}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking(viking){
        this.vikingArmy.push(viking);
    }
    addSaxon(saxon){
        this.saxonArmy.push(saxon);
    }
    vikingAttack() {
        var randomSaxon = Math.floor(Math.random()*this.saxonArmy.length);
        var randomViking = Math.floor(Math.random()*this.vikingArmy.length)
        var output = this.saxonArmy[randomSaxon].receiveDamage(
            this.vikingArmy[randomViking].strength
        ); 
        if (this.saxonArmy[randomSaxon].health <= 0) this.saxonArmy.splice(randomSaxon,1)
        return output;
    }
    saxonAttack() {
        var randomSaxon = Math.floor(Math.random()*this.saxonArmy.length);
        var randomViking = Math.floor(Math.random()*this.vikingArmy.length)
        var output = this.vikingArmy[randomViking].receiveDamage(
            this.saxonArmy[randomSaxon].strength
        ); 
        if (this.vikingArmy[randomViking].health <= 0) this.vikingArmy.splice(randomViking,1)
        return output;
    }
    
    showStatus(){
        if ((this.saxonArmy.length > 0) && (this.vikingArmy.length > 0)) 
        return "Vikings and Saxons are still in the thick of battle."
        else if (this.saxonArmy.length <= 0) return "Vikings have won the war of the century!"
        else return "Saxons have fought for their lives and survive another day..."

    }
}