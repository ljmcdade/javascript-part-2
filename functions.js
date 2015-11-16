//this will be about functions and objects

//question 1 create function that sorts array

//function compareNumbers(a, b){
//        return a - b;

function findLongerString(str1, str2) {
    var lengths = [str1, str2];
    function compareNumbers(a, b){
        if (a >= b) {
        return [a, b];
    }
        else {
            return [b, a];
        }
}
    lengths = compareNumbers(lengths[0].length, lengths[1].length);
    console.log(lengths);

    return lengths[0];
}
    //var stringArray = [str1, str2]
    //var lStr1 = str1.length;
    //var lStr2 = str2.length;
   // var lengths = [];
  //  lengths.push(lStr1);
//    lengths.push(lStr2);
   // console.log(typeof(lengths));
  //  lengths.sort(function(a,b){return a-b;});
  // console.log(lengths);
    // console.log('findLongerString:', findLongerString().join());
    // console.log('Sorted:', findLongerString().sort());
    //return lengths.sort()[]

//}

//function sortArray(array){
//   array.sort();
//   console.log(array[0].length);
//    return array.sort();
    
//}
console.log(findLongerString("hello world", "have a really nice day"));
//console.log(sortArray(["hello world", "have a really nice day"]));


//question 2 create array of name and email, sort by longest name then alphabetical by email address

var arrayName = [["Bob", "Robert@rcn.com"],["Larry", "larry@msn.com"], ["Sue", "greatgoddess@earthlink.com"], ["Katrina", "katherine@yahoo.com"]];
    

function findLongerName(arrayName) {
        function compare(a, b) {
            if /*(a is less than b by some ordering criterion)*/(a[0].length < b[0].length) {
            return -1;
         }
            if /*(a is greater than b by the ordering criterion)*/ (a[0].length> b[0].length) {
            return 1;
         }
  // a must be equal to b
    return 0;
}
    return arrayName.sort(compare);
}
console.log(findLongerName(arrayName));

function alphabeticalEmail(arrayName) {
    function compare(a, b){
        if (a[1].toUpperCase() < b[1].toUpperCase()) {
            return -1;
    }
    if (a[1].toUpperCase() > b[1].toUpperCase()) {
        return 1;
    }
    return 0;
}
    return arrayName.sort(compare);
}
console.log(alphabeticalEmail(arrayName));



//question 3 create function with array.prototype.map to take a number and return its square

//var numbers = [1, 4, 9];
//var roots = numbers.map(Math.sqrt);
// roots is now [1, 2, 3], numbers is still [1, 4, 9]

var numbers = [1, 4, 9];
var squares = numbers.map(square);
// roots is now [1, 2, 3], numbers is still [1, 4, 9]

function square(n){
    return n*n;
}
console.log(squares);

//used sqrt function to rewrite to create squaring function


//question 4 square a "num" property in array





   var obj1 = {
        name: "sofa",
        num: 32
};
    var obj2 = {
        name: "chair",
        num: 83
    };
    
   var obj3 = {
        name: "table",
        num: 16
    };
 var obj4 = {
        name: "floor",
        num: 102
    };
    
 var objectArray = [obj1, obj2, obj3, obj4];
    
//console.log(objectArray);


var arrayOfObject = [obj1, obj2, obj3, obj4];

function squareNum(currentObject) {
    return currentObject.num * currentObject.num;
 }

//function squareNum(currentObject) {
  //  currentObject.num = currentObject.num * currentObject.num;
    //return currentObject;
//}

var squares = arrayOfObject.map(squareNum);

console.log(squares);