/*
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

// Thired Coding Challenge
const dolphinsAvarageScore = (97 + 112 + 101) / 3;
const koalasAvarageScore = (109 + 91 + 110) / 3;
if(dolphinsAvarageScore > koalasAvarageScore && dolphinsAvarageScore >= 100) {
    console.log("Dolphins has higher score than Koalas!");
} else if(koalasAvarageScore > dolphinsAvarageScore && koalasAvarageScore >= 100) {
    console.log("Koalas has higher score than Dolphins!");
}else if(koalasAvarageScore === dolphinsAvarageScore && dolphinsAvarageScore >= 100 && koalasAvarageScore >= 100){
    console.log("They are draw!");
} else {
    console.log("no one wins the game!");
}

// Fourth Coding Challenge
const bill = 430;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

// Fifth coding challenge
const calcAvarage = (score1, score2, score3) => (score1+score2+score3)/3;

const checkWinner = function(avgDolhins , avrKoalas) {
    if (avgDolhins >= 2 * avrKoalas) {
        console.log(`Dolhins win (${avgDolhins} vs. ${avrKoalas})`);
    } else if (avrKoalas >= 2 * avgDolhins) {
        onsole.log(`Koalas win (${avrKoalas} vs. ${avgDolhins})`);
    } else {
        console.log(`no team wins!`);
    }
}
checkWinner(calcAvarage(44,23,71),calcAvarage(65,54,49));
checkWinner(calcAvarage(85,54,41),calcAvarage(23,34,27));

// Sixth coding challenge
const calctip = function(bill) {
    let tip1 ;
    if (bill >= 50 && bill <= 300 ) {
        tip1 = bill * 0.15;
    } else {
        tip1 = bill * 0.2;
    }
    return tip1;
}
const bills = [125, 555, 44];
const tips = [calctip(bills[0]), calctip(bills[1]), calctip(bills[bills.length - 1])];
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[bills.length - 1] + tips[bills.length - 1]];
console.log(tips , total);

*/
// bonus challenge
const abrham = {
    firstName: "Abrham",
    lastName: "Desalegn",
    age: 23,
    friends: ["Henok" , "Dagi" , "dani"]
};

console.log(`${abrham.firstName} has ${abrham.friends.length} friends, and his best friend is called ${abrham.friends[0]}`);

// Seven Coding challenge
const mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

const john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function() {
        return this.mass / this.height ** 2;
    }
};
mark.calcBMI();
john.calcBMI();
console.log(mark.bmi);
console.log(john.bmi);

mark.calcBMI() > john.calcBMI() ? console.log(`${mark.fullName}'s BMI (${mark.calcBMI()}) is higher than ${john.fullName}'s (${john.calcBMI()})`) : console.log(`${john.fullName}'s BMI (${john.calcBMI()}) is higher than ${mark.fullName}'s (${mark.calcBMI()})`);

// Eighth coding challenge

const bills =  [22,295,176,440,37,185,18,1100,86,52];
const tips = [];
const totals = [];
const calctip = function(bill) {
    let tip1 ;
    if (bill >= 50 && bill <= 300 ) {
        tip1 = bill * 0.15;
    } else {
        tip1 = bill * 0.2;
    }
    return tip1;
}

for(let i = 0; i < bills.length; i++) {
    tips[i] = calctip(bills[i]);
    totals[i] = bills[i] + tips[i];
}

const calcAverage = function(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

console.log(totals);
console.log(calcAverage(totals));

// Nigneth coding challenge
const printForecast = function(arr) {
    let str = `...`;
    for (let i = 0; i < arr.length; i++) {      
      str += ` ${arr[i]}^C in ${i + 1} days ...`;
    }
    console.log(str);
}

printForecast([17,21,23]);
printForecast([12,5,-5,0,4]);

