// Soldier
class Soldier {
  constructor(health, strength){
    this.health = health
    this.strength = strength

  }

  attack(){return this.strength}
  receiveDamage(damage){this.health -= damage}
}

// Viking
class Viking extends Soldier{
  constructor(name,health,strength){
    super(health,strength)
    this.name = name
  }

  attack(){
    super.attack()
    return this.strength
  }
  
  battleCry(){return "Odin Owns You All!"}
  //"Odin Owns You All!"

  receiveDamage(damage){
  super.receiveDamage(damage)
   if(this.health > 0){return this.name + " has received " + damage + " points of damage"}
   else {return this.name + " has died in act of combat"}
  }
}
console.log(Viking.name)

// Saxon
class Saxon extends Soldier{
constructor(health,strength){
super(health,strength)
}

attack(){
  super.attack()
  return this.strength
}
receiveDamage(damage){
  super.receiveDamage(damage)
  if(this.health > 0){return "A Saxon has received " + damage + " points of damage"}
   else {return "A Saxon has died in combat"}
}
}

// War
class War {
  constructor() {
  this.vikingArmy = []
  this.saxonArmy = []
  }

addViking(Viking){this.vikingArmy.push(Viking)}
addSaxon(Saxon){this.saxonArmy.push(Saxon)}

/*

 */
vikingAttack(){
  
  
  var randVikNr = Math.floor(Math.random()*this.vikingArmy.length);
  var randSaxNr = Math.floor(Math.random()*this.saxonArmy.length);//ZAhl
  
  var randVik = this.vikingArmy[randVikNr]
  var randSax = this.saxonArmy[randSaxNr]

  var recDam =  randSax.receiveDamage(randVik.strength)
  
  if(randSax.health <= 0){this.saxonArmy.splice(randSaxNr,1)}//splice da nur ein Viking betroffen ist
  return recDam
}

saxonAttack(){
  var randVikNr = Math.floor(Math.random()*this.vikingArmy.length);
  var randSaxNr = Math.floor(Math.random()*this.saxonArmy.length);//ZAhl
  
  var randVik = this.vikingArmy[randVikNr]
  var randSax = this.saxonArmy[randSaxNr]

  var recDam =  randVik.receiveDamage(randSax.strength)
  
  if(randVik.health <= 0){this.vikingArmy.splice(randVikNr,1)}//splice da nur ein Viking betroffen ist
  return recDam
}

showStatus(){
  if(this.saxonArmy.length === 0) return "Vikings have won the war of the century!"
  else if(this.vikingArmy.length === 0) return "Saxons have fought for their lives and survive another day..."
  else if(this.saxonArmy.length && this.vikingArmy.length > 0) return "Vikings and Saxons are still in the thick of battle."
}
}