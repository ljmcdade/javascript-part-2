//comment line

function Warrior (name, gender, level, weapon, power){
    this.name = name;
    this.gender = gender; //M or F
    this.level = level;
    this.weapon = weapon;
    this.power =  power //random # 1-100
}

Warrior.prototype = {
    fight: function(){
        console.log(this.name + "rushes to the arena with" + this.weapon)
    },
    
    faceoff: function(opponent){
        //opponent based on power
        if (this.power > opponent.power){
            console.log(this.name + " wins!!!");
        }
        if (this.power < opponent.power){
            console.log(opponent.name + " wins the battle!");
        }
        if (this.power === opponent.power) {
            console.log(this.name + " and " + opponent.name + " knock each other out!");
        }
    }
}
var w1 = new Warrior("Bob", "M", 80, "wooden sword", 56);
var w2 = new Warrior("Steve", "M", 30, "wooden sword", 89)

w1.fight()
w1.faceoff(w2)





