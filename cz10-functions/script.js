'use strict';

// Challange 3

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();

/////////////////////////////////////////////////////////////////////////////
/*
// Examples of closures

// Example 1
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 888;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
console.dir(f);

// Re-assigning f function
h();
f();
console.dir(f);

// Example 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(() => {
    console.log(`We are now boarding all ${n} passangers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

const perGroup = 1000;
boardPassengers(180, 3);

////////////////////////////////////////////////////////////////////////////////////////
/*
// Closures
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passangers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);

////////////////////////////////////////////////////////////////////////////////////////
/*
// USUWANIE FUNKCJI PO JEJ WYKONANIU
const runOnce = function () {
  console.log('This will never run again');
};
runOnce();

// IIFE
(function () {
  console.log('This will never run again');
  const isPrivate = 23;
})();

// console.log(isPrivate);

// przyklad z funckja strzalkowa
(() => console.log('this will also never run again'))();

{
  const isPrivate = 23;
  var notPrivate = 23;
}

// console.log(isPrivate);
console.log(notPrivate);


//////////////////////////////////////////////////////////////////////////////////////
/*
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // this generates [0, 0, 0, 0]. More in the next section
  answers: new Array(4).fill(0),

  registerNewAnswer() {
    // get answer
    const answer = prompt(
      `${this.question}\n${this.options.join('\n')}\n(Wrtie option number)`
    );
    // Register answer
    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;

    this.displayResults();
    this.displayResults('string');
  },
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are: ${this.answers.join(', ')}`);
    }
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] });

////////////////////////////////////////////////////////////////////////////////////
/*
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book: function() {}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ fligh: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Jonas');
lufthansa.book(2309, 'Johnas');

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// Does not work
// book(23, 'Sarah');

// Will work: Call method
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
  airline: 'Swis Air Lines',
  iataCode: 'LX',
  bookings: [],
};
book.call(swiss, 233, 'Mary Cooper');
console.log(swiss);

// Apply method
const flightData = [583, 'Geroge Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

// LEPSZY PRZYKLAD ZAMIAST APPLY
book.call(swiss, ...flightData);

// Bind methodd
// book.call(eurowings, 23, 'Sarah Williams');

const bookEW = book.bind(eurowings);
const bookLX = book.bind(swiss);
const bookLH = book.bind(lufthansa);
bookEW(32, 'Stevem Williams');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Jonas');
bookEW23('Martha');

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  // console.log(this);
  this.planes++;
  console.log(this.planes);
};
// lufthansa.buyPlane();

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23;
console.log(addVAT(100));
console.log(addVAT(23));

const calculateVAT = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVAT2 = calculateVAT(0.1);
console.log(addVAT2(100));
/////////////////////////////////////////////////////////////////////////////////////////////////////
/*
// zwracanie funkcji z funckji
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Steven');

greet('Hello')('Jonas');

// Challange 1
const greetArr = greeting => name => console.log(`${greeting} ${name}`);
greetArr('Hi')('Jonas');


/////////////////////////////////////////////////////////////////////////////////////////////////////
/*
// łączenie funkcji 
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best', upperFirstWord);

transformer('Java script is the best', oneWord);


// dodawanie funkcji do eventlistenera
const high5 = function(){

    console.log('🫡');
}
document.body.addEventListener('click', high5)

['Jonas', 'Martha'].forEach(high5);



////////////////////////////////////////////////////////////////////////////////////////////////
/*
const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 23243985097340,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr.' + passenger.name;

  if (passenger.passport === 23243985097340) {
    alert('Check in');
  } else {
    alert('Wrong passport!');
  }
};
checkIn(flight, jonas);
console.log(flight);
console.log(jonas);

const newPassport = function(person){
    person.passport = Math.trunc(Math.random() * 10000000000000);
}

newPassport(jonas);
checkIn(flight,jonas);



///////////////////////////////////////////////////////////////////////////////////////////
/*
const bookings = [];

const createBooking = function (flightNum, numPassangers = 1, price = 199) {
  // ES5
  //   numPassangers = numPassangers || 1;
  //   price = price || 199;

  const booking = {
    flightNum,
    numPassangers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};
createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH1222', undefined, 1000) // zeby pominac dany paramet piszemy undefined

*/
