/* Pierwsza lekcja

let js = 'amazing';
//if (js === 'amazing') alert('JavaScript is FUN!');
console.log(40+8+23-10);

console.log('Jonas');
console.log(23);


let firstName = "Jonas";

console.log(firstName);

let myFirstJob = 'Programmer';
let myCurrentJob = 'Teacher';
*/

//First task
/*
let country = Poland;
let continent = Europe;
let population = 38000000;

console.log(country);
console.log(continent);
console.log(population); 
*/


//Druga lekcja 
/*
let javascriptIsFUN = true;
console.log(javascriptIsFUN);


console.log(typeof true);
console.log(typeof javascriptIsFUN);
console.log(typeof 23);
console.log(typeof 'Jonas');

javascriptIsFUN = "YES!";
console.log(typeof javascriptIsFUN);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(year);
console.log(typeof year);

console.log(typeof null);
*/

/*Drugie zadanie
let isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof country);
console.log(typeof language);
console.log(typeof population);

*/

/* Trzecia Lekcja
let age = 30;
age = 31;


const birthYear = 1991;
// birthYear = 1990;
// const job;

var job = 'programmer';
job = 'teacher';
lastName = "Schmedtmann"
console.log(lastName);
*/

/* Trzecie Zadanie

language = "Polish";
const country = "Poland";
const continent = "Europe";
const isIsland = false;
isIsland = true;


*/
/* Czwarta lekcja

// Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 znaczy 2 do potegi 3


const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName)


// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10
x *= 4; // x = x * 4
x++; // x = x + 1
x--; // x = x - 1
console.log(x);


// Comparison operators

console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);
*/

/* Piąta lekcja
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25-10-5;
console.log(x, y);

const averageAge =  (ageJonas + ageSarah)/ 2
console.log(ageJonas, ageSarah, averageAge)

*/

/* Zadanie


// const massMark =  78;
// const heightMark = 1.69;

// const massJohn = 92;
// const heightJohn = 1.95;

const massMark =  95;
const heightMark = 1.88;

const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / (heightMark **2)
const BMIJohn = massJohn / (heightJohn **2)
const markHigherBMI = BMIMark > BMIJohn
console.log(BMIMark, '', BMIJohn, markHigherBMI);

*/

/* Szósta lekcja
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm" + firstName + ", a " + (year - birthYear) + " year old "  + job;
console.log(jonas);



const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`);

*/
/* Siódma lekcja
const age = 15;

if(age >=18){
    console.log('Sarah can start driving license 🚗');
}else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)))))))))`)
}

const birthYear = 1991;
let century;

if(birthYear <= 2000){
    century = 20;
} else {
    century = 21;
}
console.log(century);


if(BMIMark > BMIJohn){
    console.log(`Mark's BMI ${(BMIMark)} is higher than John's! ${(BMIJohn)}`)
}else{
    console.log(`John's BMI ${(BMIJohn)} is higher than Mark's ${(BMIMark)}!`)
}

*/




/* Ósma lekcja
// type conversion
const inputYear = '1991';
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);

console.log(String(23));

// type coercion

console.log('I am ' + 23 + ' years old')


let n = '1' + 1;
n = n - 1;
console.log(n);
*/
/* 9 lekcja

// 5 falsy values: 0, '', undefined, null, NaN

// chuja warte nie uzywa sie tego xd
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
//

const money  = 0;
if(money){
    console.log("Don't spend it all ;)");
}else {
    console.log("You should get a job!");
}

let height;

if(height){
    console.log("YAY! Height is defined");
}else{
    console.log("Height is UNDEFINED");
}
    */

/* 10 lekcja

const age = 18;
 if(age === 18) console.log('You just became an adult (strict)');

 if(age == 18) console.log('You just became an adult (loose)');


 const favourite = Number(prompt("What's your favourite number?"));

 console.log(favourite);

 if(favourite === 23){ 
    console.log("Zajebista liczba")
} else if(favourite === 7){
    console.log("Ale pedalska liczba")
} else{
    console.log("x d")
}


if(favourite != 23){
    console.log("x d d d d d d d d")
}

*/

/* 11 lekcja

const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);



const shouldDrive = hasDriversLicense && hasGoodVision;

// if(shouldDrive){
//     console.log("Sarah is able to drive!")
// } else {
//     console.log("Someone else should drive....");
// }

const isTired = false; // C
console.log(hasDriversLicense || hasGoodVision || isTired);


// || = lub, && = oraz, ! = przeciwstawność

if(hasDriversLicense && hasGoodVision && !isTired){
    console.log("Sarah is able to drive!")
} else {
    console.log("Someone else should drive....");
}
    */
/*
const scoreDolphins = (97 + 112 + 89 ) / 3;
const scoreKoalas = (109 + 95 +123) / 3;

if(scoreDolphins === scoreKoalass){
    console.log("Both win the trophy");
} else if(scoreDolphins > scoreKoalas){
    console.log("Dolphins win the trophy");
}else if(scoreKoalas > scoreDolphins){
    console.log("Koalas win the trophy");
}


console.log(averageScoreDolphin, averageScoreKoalas);
*/

/*
const day = '';

switch(day){
    case 'monday': // day === 'mondy'
        console.log("Plan course structure");
        console.log("Go to coding meetup");
        break;
    case 'tuesday':
        console.log("Prepare theory videos");
        break;
    case 'wednesday':
    case 'thursday':
            console.log("Write code examples");
            break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':    
        console.log('Enjoy');
        break;
    default:
     console.log("Not a valid day!");

}


if(day === 'monday'){
    console.log("Plan course structure");
    console.log("Go to coding meetup");
}else if(day === 'tuesday'){
    console.log("Prepare theory videos");
}else if(day === 'wednesday' || day === 'thursday'){
    console.log("Write code examples");
}else if(day === 'friday'){
    console.log('Record videos');
}else if(day === 'saturday' ||  day === 'sunday'){
    console.log('Enjoy');
}else{
    console.log("Not a valid day!");
}
    */


/*
if(23>10){
    const str = '23 is bigger';
}

const me = 'Jonas';
console.log(`I'm ${2037 - 1991} years old ${me}`)
*/

/*
const age = 23;
// age >= 18 ? console.log("I like to drink wine") : console.log("I like to drink water");

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

let drink2;
if(age >= 18){
    drink2 = "wine";
}else{
    drink2 = "water";
};

console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);
*/
/*
const bill = 430;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;

// bill >= 50 && bill <= 300 ? tip = bill * 0.15 : tip = bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

// if(bill >= 50 && bill <= 300){
//     tip = bill * 0.15;
//     console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
// }


*/