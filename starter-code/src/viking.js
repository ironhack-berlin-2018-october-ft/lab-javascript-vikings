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
        
    }
    saxonAttack(){}
    showStatus(){}
}