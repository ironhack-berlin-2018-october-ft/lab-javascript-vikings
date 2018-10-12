// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health;
        this.strength = strength;
    }
    attack(){
        return this.strength;
    }
    receiveDamage(damage){
        this.health -= damage;
    }


}


// Viking
class Viking extends Soldier {
    constructor(name, health, strength){
        super(health, strength);
        this.name = name;
    }

    receiveDamage(damage){
        super.receiveDamage(damage)
            if(this.health > 0){
                var message = (this.name + " has received " + damage + " points of damage");
            } else {
                var message = (this.name + " has died in act of combat");
            }
            return message;
    }    
    battleCry() {
        return "Odin Owns You All!";
    }

}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength){
        super(health, strength);

    }
    receiveDamage(damage){
        super.receiveDamage(damage)
            if(this.health > 0){
                var message = ("A Saxon has received " + damage + " points of damage");
            } else if( this.health <= 0){
                var message = ("A Saxon has died in combat");
            } else {
                var message = ("A Saxon has died in combat");
            }
            return message;
    }    
}

// War
class War {
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking(viking){
        this.vikingArmy.push(viking);
    }
    addSaxon(saxon){
        this.saxonArmy.push(saxon);
    }
    vikingAttack(){
        var vikingIndex = Math.floor(Math.random()*this.vikingArmy.length)
        var saxonIndex = Math.floor(Math.random()*this.saxonArmy.length)

        var viking = this.vikingArmy[vikingIndex]
        var saxon = this.saxonArmy[saxonIndex]

        var result = saxon.receiveDamage(viking.attack())

        if(saxon.health < 1) {
            this.saxonArmy.splice(saxonIndex, 1);            
        }
        return result;
    }

    saxonAttack(){
        var vikingIndex = Math.floor(Math.random()*this.vikingArmy.length)
        var saxonIndex = Math.floor(Math.random()*this.saxonArmy.length)

        var viking = this.vikingArmy[vikingIndex]
        var saxon = this.saxonArmy[saxonIndex]

        var result = viking.receiveDamage(saxon.attack())

        if(viking.health < 1) {
            this.vikingArmy.splice(vikingIndex, 1);            
        }
        return result;
    }

    showStatus(){
        if (this.saxonArmy.length === 0){
            return "Vikings have won the war of the century!"
        } else if (this.vikingArmy.length === 0){
            return "Saxons have fought for their lives and survive another day..."
        } else {
            return "Vikings and Saxons are still in the thick of battle."
        }
    }
}
