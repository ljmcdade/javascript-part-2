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