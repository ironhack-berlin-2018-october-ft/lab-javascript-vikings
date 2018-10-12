// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    
    attack() {
        return this.strength;
    }

    receiveDamage(damage) {

    }
}
// var soldier = new Soldier(5, 10);
// console.log(soldier.health);

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }


    
    receiveDamage(damage) {
        this.health -= damage;
        if(this.health > 0) return (this.name + " has received " + damage + " points of damage");
        else return (this.name + " has died in act of combat");    
    }

    battleCry() {
        return "Odin Owns You All!"
    }

}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength);
    }

    recieveDamage(damage){
        console.log(this)
        console.log(this.health)
        this.health -= damage;
        console.log(this.health)
        if(this.health > 0) return ("A Saxon has received " + damage + " points of damage");
        else return ("A Saxon has died in act of combat");    
    }
}

var mister = new Saxon(5, 10);

console.log(mister.recieveDamage(50));

// War
class War {}