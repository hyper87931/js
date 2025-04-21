'use strict';
/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    const output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1971 && birthYear <= 1996) {
        const firstName = 'Steven';
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
      console.log(add(2, 3));
    }
  }
  printAge();
  return age;
}

const firstName = 'Jonas';
calcAge(1991);
*/

/*

// MARTWE PUNKTY

// Zmienne
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

// Funkcje
console.log(addDecl(1, 2));
// console.log(addExpr(2, 2));
// console.log(addArrow(4, 2));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;

// Przykłady

if (!numProducts) deleteShoppingCart();

// nigdy nie uzywaj var
var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}


var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);

*/

// This jak działa

// console.log(this);

/*
const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
//   console.log(this);
};
calcAge(1991);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
//   console.log(this);
};
calcAgeArrow(1990);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
jonas.calcAge();

const matilda = {
  year: 2017,
};


// kopiowanie metody z innej do innej
matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const f = jonas.calcAge;

f(); 
// console.log(f);
*/

/*

// nigdy nie uzywaj zmiennej var
// var firstName = 'Matilda';
// nigdy nie uzywaj this w funkcji strzalkowej
const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);

    // 1 przyklad - przestazaly
    // przyklad jak uzyc this w momencie kiedy uzywamy funkcji w funkcji, nie mozemy uzyc zywkle this w innej funkcji poniewaz nie bedzie ona zdefiniowana
    // const self = this; // self lub that
    // const isMillenial = function () {
    //   console.log(this.year >= 1981 && this.year <= 1996);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    // 2 przyklad - nowoczesny / uzywany obecnie uzycie funkcji strzalkowej
    const isMillenial = () => {
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },
  // nigdy nie uzywaj funkcji strzalkowej jako metody

  greet: () => console.log(`Hey ${this.firstName}`),
};
jonas.greet();
jonas.calcAge();

// arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 10, 20);

// nie zadziala to w przypadku funkcji strzalkowej

const addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 5, 6);


*/
// JAK KOPIOWAC TABLICE

// TAK NIE ROBIC
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

function marriedPerson(person, newLastName) {
  person.lastName = newLastName;
  return person;
}

console.log();
const marriedJessica = marriedPerson(jessica, 'Davis');

// const marriedJessica = jessica;
// marriedJessica.lastName = 'Davis';

console.log('Before:', jessica);
console.log('After:', marriedJessica);

// Shallow vs deep copy
// shallow kopiuje wszystko lecz nie kopiuje jako osobny obiekt tablic przez co w momencie kiedy zmieniamy tablice skopiowana to rowniez poczatkowa tablica sie zmieni
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  familiy: ['Alice', 'Bob'],
};

// Shallow copy
const jessicaCopy = { ...jessica2 };
jessicaCopy.lastName = 'Davis';

// console.log(jessica2, jessicaCopy);
jessicaCopy.familiy.push('Mary');
jessicaCopy.familiy.push('John');

console.log('Before:', jessica);
console.log('After:', jessicaCopy);

// Deep copy
const jessicaClone = structuredClone(jessica2); 
jessicaClone.familiy.push('Marek');

console.log('Before clone:', jessica2); 
console.log('After clone:', jessicaClone);
