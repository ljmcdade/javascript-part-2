//question 6 tile Creator


//comment line

function tileCreator(x, y) {
    this.x = x;
    this.y = y;
    this.height = Math.random() * 3; //random number between 1-3
    var types = ["grass", "rocks", "water"];
    this.type = types[Math.floor(Math.random() * types.length)]; //grass, rocks, or water
    var conditions = ["burning", "normal", "frozen"];
    this.condition = conditions[Math.floor(Math.random() * conditions.length)];
}

//console.log(tile1)

tileCreator.prototype = {

    freeze: function() {
        if (this.condition === "burning") {
            this.condition = "normal";
        }
        if (this.condition === "normal") {
            this.condition = "frozen";
        }
        if (this.condition === "frozen") {
            this.height = this.height + 1;
        }
    },

    burn: function() {
        if (this.condition === "frozen") {
            this.condition = "normal";
        }
        if (this.condition === "normal") {
            this.condition = "burning";
        }
        if (this.condition === "burning") {
            this.height = this.height - 1;
        }
    }
}

var tile1 = new tileCreator("a", "b");
var tile2 = new tileCreator("c", "d");


console.log(tile1);
console.log(tile1.burn());
console.log(tile1);

console.log(tile2);
console.log(tile2.freeze());
console.log(tile2);
