// Soldier
class Soldier {
    constructor (health, strength){
        this.strength = strength;
        this.health = health;
    }
    attack(){
        return this.strength;
    }
    receiveDamage(thedamage){
        this.health = Number(this.health)-Number(thedamage);
    }
    }


// Viking
class Viking extends Soldier{
    constructor(name, health, strength){
    super()
    this.name = name;
    this.strength = strength;
    this.health = health;}
    
    receiveDamage(thedamage){
        this.health = Number(this.health)-Number(thedamage);
        if (this.health <=0){
        return this.name + " has died in act of combat"}
        else {
            return this.name + " has received " +Number(thedamage) + " points of damage"}
    }
    battleCry(){
        return "Odin Owns You All!";
    } 
}

// Saxon
class Saxon extends Soldier{
    constructor (health, strength){
       super (health, strength)}

    receiveDamage(thedamage){
        this.health = Number(this.health)-Number(thedamage);
        if (this.health <=0){
        return "A Saxon has died in combat"}
        else {
            return "A Saxon has received " +Number(thedamage) + " points of damage"}
    }
}

// War
class War {
    constructor (){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking(vikingObject){
        this.vikingArmy.push(vikingObject);
    }
    addSaxon(saxonobject){
        this.saxonArmy.push(saxonobject);
    }
    vikingAttack(){
        var randomViking = Math.floor(Math.random()*this.vikingArmy.length)
        var randomSaxon = Math.floor(Math.random()*this.saxonArmy.length)
        var tag = this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].strength)
        if (this.saxonArmy[randomSaxon].health <= 0) {
            this.saxonArmy.splice(randomSaxon, 1);
          }
          console.log(tag)
          return tag
    }
    saxonAttack(){
        let randomViking = Math.floor(Math.random()*this.vikingArmy.length)
        let randomSaxon = Math.floor(Math.random()*this.saxonArmy.length)
        var rem = this.vikingArmy[randomViking].receiveDamage(this.saxonArmy[randomSaxon].strength)
        if (this.vikingArmy[randomViking].health <= 0) {
            this.vikingArmy.splice(randomViking, 1);
          }
        console.log(rem)
        return rem
    }
    showStatus(){
        if(this.saxonArmy.length===0){
            return "Vikings have won the war of the century!";
        } else if (this.vikingArmy.length===0) {
            return "Saxons have fought for their lives and survive another day...";
        } else {
            return "Vikings and Saxons are still in the thick of battle.";
        }
    }
}

//Armies Attack 

