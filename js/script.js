// The sum of a Range
let range = function(start,end){
    let listOfNumber = [];
    for (let i = start; i <= end; i++) {
        listOfNumber.push(i);
    }
    return listOfNumber;
};

let sum = function(list){
    let sum = 0;
    for (let index = 0; index < list.length; index++) { 
        sum += list[index];
    }
    return sum;
};
console.log(sum(range(1,10)));

// Reversing an Array
const reverseArray = function(arrayOfNumbers) {
    const reverseArray = [];
    for (let i = arrayOfNumbers.length - 1; i >= 0; i--) {
        reverseArray.push(arrayOfNumbers[i]);
    }
    return reverseArray;
}
console.log(reverseArray([1,2,3,4,5]));

// LECTURE: Values and Variables
const countery = "Ethiopia";
const continent = "Africa";
const population = 120;
console.log(countery, continent, population);

// LECTURE: Data Types
