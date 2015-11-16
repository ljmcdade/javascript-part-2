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
