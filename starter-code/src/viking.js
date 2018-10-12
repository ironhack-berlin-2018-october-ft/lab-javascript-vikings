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
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) { 
            return this.name + " has received " + damage + " points of damage" 
        } else {
            return this.name + " has died in act of combat"
        }
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
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return "A Saxon has received " + damage + " points of damage"
        } else {
            return "A Saxon has died in combat"
        }
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking(viking) {
        this.vikingArmy.push(viking);
    }
    addSaxon(saxon) {
        this.saxonArmy.push(saxon);
    }
    vikingAttack() {
        var randomIndexSaxon = Math.floor(Math.random()*this.saxonArmy.length);
        var randomSaxon = this.saxonArmy[randomIndexSaxon];
        var randomIndexViking = Math.floor(Math.random()*this.vikingArmy.length);
        var randomViking = this.vikingArmy[randomIndexViking];
        if (randomSaxon.health-randomViking.strength<=0) {      //checks if Saxon is alive
            this.saxonArmy.splice(this.saxonArmy.indexOf(randomSaxon),1);
        }
        return randomSaxon.receiveDamage(randomViking.attack());
    }

    saxonAttack() {
        var randomIndexSaxon = Math.floor(Math.random()*this.saxonArmy.length);
        var randomSaxon = this.saxonArmy[randomIndexSaxon];
        var randomIndexViking = Math.floor(Math.random()*this.vikingArmy.length);
        var randomViking = this.vikingArmy[randomIndexViking];
        if (randomViking.health-randomSaxon.strength<=0) {
            this.vikingArmy.splice(this.vikingArmy.indexOf(randomViking),1);
        }
        return randomViking.receiveDamage(randomSaxon.attack());
    }

    showStatus() {
        if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!"
        } else if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survive another day..."
        } else {
            return "Vikings and Saxons are still in the thick of battle."
        }
    }
}