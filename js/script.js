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
const isIsland = false;
let language;
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof countery);
console.log(typeof language);

// LECTURE: let, const and var
language = "Amharic";

// LECTURE: Basic Operators
let countery2 = population / 2;
console.log(countery2);
const description = `Ethiopia is in Africa, and its ${population} million people speak ${language}!`
console.log(description);

// First coding challenge
const markMass = 95;
const markHeight = 1.88;
const johnMass = 85;
const johnHeight = 1.76;
const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;
const markHigherBMI = markBMI > johnBMI;
console.log(markBMI, johnBMI, markHigherBMI);

// Second Coding Challenge
if (markHigherBMI) {
    console.log(`Mark's BMI ${markBMI} is higher than John's ${johnBMI}!`)
} else {
    console.log(`John's BMI ${johnBMI} is higher than Mark's! ${markBMI}`);
}