 'use strict';
/*
let hasDriversLicense = false;
const passTest = true;

if(passTest) hasDriversLiecense = true;
if(hasDriversLicense) console.log("I can drive");

// const interface = 'Audio';
// const privat = 534;
*/

/*
function logger() {
    console.log('My name is Jonas');
}

// calling / running / invoking function
logger();
logger();
logger();
logger();


function fruitProcessor(apples, oranges) {
    // console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
// console.log(fruitProcessor(5,0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

Number('23')
*/
/*

// function declaration
function calcAge1(birthYear){
    return 2037 - birthYear;
}

const age1 = calcAge1(2024);


// function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(1991);
console.log(age1, age2);
*/

/*
// arrow funciton
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstname) => {
    const age = 2037 - birthYear;
    const retirement = 65 - birthYear;
    // return retirement;
    return `${firstname} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Jonas'));

*/
/*
function cutFruitPieces(fruit){
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

     const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
}
console.log(fruitProcessor(2, 3));
*/


/*
const calcAge = function(birthYear){
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstname) {
    const age = calcAge(birthYear)
    const retirement = 65 - age;

    if(retirement > 0){
        console.log(`${firstname} retires in ${retirement} years`)
        return retirement;
    }else{
        console.log(`${firstname} has already retired`)
        return -1;
    }
}

console.log(yearsUntilRetirement(1991, 'Jonas'));

// arrow funciton
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);
*/
/*
const calcAverage = (a, b, c) => (a + b + c) / 3;
const scoreDolphins = calcAverage(85 + 54 + 41);
const scoreKoalas = calcAverage(85 + 44 + 41);


const checkWinner = function (avgDolphins, avgKoalas){
    if(avgDolphins >= 2 * avgKoalas){
        console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
    } else if(avgKoalas>= 2* avgDolphins){
        console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
    }else {
        console.log("No team wins...");
    }
}
checkWinner(scoreDolphins, scoreKoalas);
*/
/*
const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Micheal", "Steven", "Peter"];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

const year = 2036;
console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);

const jonas = ['Jonas', 'Schmedtmann', year - 1991, 'teacher', friends];

console.log(jonas);
// Cwiczenie
const calcAge = function(birthYear){
    return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010 ,2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1,age2,age3);

const ages = [calcAge(years[0]),calcAge(years[years.length - 1]),]
console.log(ages);
*/
/*
const friends = ["Micheal", "Steven", "Peter"];

// dodaje elementy
const newLength = friends.push('Jay');

console.log(friends);
console.log(newLength);

friends.unshift("John");
console.log(friends)

// usuwa elementy

friends.pop();
console.log(friends);

friends.shift();
console.log(friends);


console.log(friends.indexOf('Steven'));

console.log(friends.includes('Steven'));

if(friends.includes("Steven")){
    console.log('You have a friend called Petter');
}
    */

/*
const calcTip = function(Tip){
  if(Tip >= 50 && Tip <= 300){
    return  Tip * 0.15;
  }else{
    return  Tip * 0.2;
  }
};

const bills = [125, 555, 44];


const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[bills.length - 1])];

console.log(tips);

const totals = [calcTip(bills[0]) + bills[0], calcTip(bills[1]) + bills[1], calcTip(bills[bills.length - 1]) + bills[bills.length - 1],]

console.log(totals);
*/


/*
const jonas =  {
firstName: 'Jonas',
lastName: 'Schmedtmann',
age: 2037 - 1991,
job: 'teacher',
friends: ['Micheal', 'Peter', 'Steven']
};

*/
/*
const jonas =  {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Micheal', 'Peter', 'Steven']
    };
console.log(jonas);


console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

// console.log(jonas.last + nameKey);

// const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends');


// if(jonas[interestedIn]){
//     console.log(jonas[interestedIn]);
    
// }else{
//     console.log("Wrong request! Choose between firstName, lastName, age, job and friends")
// }

jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtman';
console.log(jonas);

// Wyzwanie

console.log(`${jonas.firstName} has ${jonas.friends.length} friends and his best friend is called ${jonas.friends[0]}`)
*/
/*
const jonas =  {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Micheal', 'Peter', 'Steven'],
    hasDriversLicense: true,

    // calcAge: function(birthYear){
    //     return 2037 - birthYear
    // }

    // calcAge: function(){
    //     return 2037 - this.birthYear;
    // }


    calcAge: function(){
        this.age = 2037 - this.birthYear
        return this.age;
    },

    getSummary: function(){
     return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} drivers license.`;
    }
};

console.log(jonas.getSummary());

// Wyzwanie
*/

/*
const mark = {
 fullName: "Mark Miller",
 mass: 78,
 height: 1.69,

 calcBmi: function(){
    this.bmi = this.mass / (this.height ** 2)
    return this.bmi;
 }
}

console.log(mark.calcBmi());

const john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,

    calcBmi: function(){
        this.bmi = this.mass / (this.height ** 2);
        return this.bmi;
     }
}
console.log(john.calcBmi());


if(mark.bmi > john.bmi){
    console.log(`${mark.fullName}'s Bmi (${mark.bmi}) is higher than ${john.fullName}'s ${john.bmi}`)
}else if(mark.bmi< john.bmi){
    console.log(`${john.fullName}'s ${john.bmi} is higher than ${mark.fullName}'s Bmi (${mark.bmi})`)
}
*/


// console.log('Lifting weights repetetion 1 💪');
// console.log('Lifting weights repetetion 1 💪');
// console.log('Lifting weights repetetion 1 💪');
// console.log('Lifting weights repetetion 1 💪');
// console.log('Lifting weights repetetion 1 💪');
// console.log('Lifting weights repetetion 1 💪');
// console.log('Lifting weights repetetion 1 💪');
// console.log('Lifting weights repetetion 1 💪');
// console.log('Lifting weights repetetion 1 💪');
// console.log('Lifting weights repetetion 1 💪');
// console.log('Lifting weights repetetion 1 💪');
// console.log('Lifting weights repetetion 1 💪');



// for(let rep = 1; rep <= 10; rep++){
//     console.log(`Lifting weights repetition ${rep} 💪`);
// }   


// const jonasArray =  [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Micheal', 'Peter', 'Steven'],
// ];

// const types = [];

// for(let i = 0; i < jonasArray.length; i++){
//     // Reading from jonas array
//     console.log(jonasArray[i], typeof jonasArray[i]);

//     // Filling types array
//     // types[i] = typeof jonasArray[i];
//     types.push(typeof jonasArray[i]);
// }


// console.log(types);


// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for(let i = 0; i < years.length; i++){
//     ages.push(2037 - years[i]);
// }

// console.log(ages)

// // continue and break

// for(let i = 0; i < jonasArray.length; i++){
//     if(typeof jonasArray[i] !== 'string') continue;

//     console.log(jonasArray[i], typeof jonasArray[i]);
// }


// for(let i = 0; i < jonasArray.length; i++){
//     if(typeof jonasArray[i] === 'number') break;

//     console.log(jonasArray[i], typeof jonasArray[i]);
// }



// const bills= [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// const tips = [];
// const totals = [];

// const calcTip = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
//   }


//   for(let i = 0; i < bills.length; i++){
//    const tip = calcTip(bills[i]);
//     tips.push(tip);
//     totals.push(tip + bills[i]);
//   }

// console.log(bills, tips, totals);

/*
const jonasArray =  [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Micheal', 'Peter', 'Steven'],
];


for(let i = jonasArray.length - 1; i >= 0; i--){
    console.log(jonasArray[i]);
}



for(let exercise = 1; exercise <= 3; exercise++){
    console.log(`--------- Starting exercise ${exercise}`);
    
    for(let rep = 1; rep <= 5; rep++){
        console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`)
    }
}
*/

// for(let rep = 1; rep <= 10; rep++){
//     console.log(`Lifting weights repetition ${rep} 💪`);
// }   


// let rep = 1;

// while(rep <= 10){
//     console.log(`Lifting weights repetition ${rep} 💪`);
//     rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;

// while(dice !== 6){
//     console.log(`You rolled a  ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
//     if(dice === 6) console.log("Loop is about to end...");
// }


const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];


const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  }

  for(let i = 0; i <= bills.length - 1; i++){
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
  }



  console.log(tips,totals,bills);