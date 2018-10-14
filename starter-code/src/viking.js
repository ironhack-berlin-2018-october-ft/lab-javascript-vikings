// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack(){
    return this.strength}
    receiveDamage(damage) {
        this.health = this.health - damage
    }
  }
  
// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
     super(health,strength);
     this.name = name;
     }
     receiveDamage(damage) {
        this.health = this.health - damage
        if(this.health>0) {
            return this.name + " has received " + 
            damage + " points of damage"
        }
        else {
            return this.name + " has died in act of combat"
        }
        
    }
    battleCry(){
        return "Odin Owns You All!"
    }
        

  
}



// Saxon
class Saxon extends Soldier {
    constructor(health,strength) {
        super(health,strength);
    }
    receiveDamage(damage) {
        this.health = this.health - damage
        if(this.health>0) {
            return "A Saxon has received " + 
            damage + " points of damage"
        }
        else {
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
    addViking(Viking) {
        this.vikingArmy.push(Viking);
    }  
    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon);
    }  
    vikingAttack() {
        if ((this.saxonArmy.length != 0) && (this.vikingArmy.length != 0 )) {
       
         var indexSaxon = Math.floor(Math.random()*this.saxonArmy.length);
         var indexViking = Math.floor(Math.random()*this.vikingArmy.length)
          var saxon = this.saxonArmy[indexSaxon];
         var viking = this.vikingArmy[indexViking];
        var message = saxon.receiveDamage(viking.strength);
       this.removeDead();
       return message;
       }
      }
      saxonAttack() {
        if ((this.saxonArmy.length != 0) && (this.vikingArmy.length != 0 )) {
       
         var indexSaxon = Math.floor(Math.random()*this.saxonArmy.length);
         var indexViking = Math.floor(Math.random()*this.vikingArmy.length)
          var saxon = this.saxonArmy[indexSaxon];
         var viking = this.vikingArmy[indexViking];
        var message = viking.receiveDamage(saxon.strength);
       this.removeDead();
       return message;
       }
      }
      removeDead() {
       this.saxonArmy = this.saxonArmy.filter(function(saxon) {
         return saxon.alive;
       })
       this.vikingArmy = this.vikingArmy.filter(function(viking) {
         return viking.alive;
       })
     }
      showStatus() {
       if (this.saxonArmy.length < 1) {
         var message = "Vikings have won the war of the century!";
       }
       else if (this.vikingArmy.length < 1) {
         var message = "Saxons have fought for their lives and survive another day...";
       }
       else message = "Vikings and Saxons are still in the thick of battle."
        return message;
      }
    
}



