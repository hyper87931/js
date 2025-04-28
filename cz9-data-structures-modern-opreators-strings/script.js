'use strict';

// Data needed for a later exercise

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhaned objects literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery(starterIndex = 1, mainIndex = 0, time = '20:00', address) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

// Challange 5

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '😒' : ''}${type.replaceAll(
    '_',
    ' '
  )} from ${getCode(from)} to ${getCode(to)} (${time.replace(':', 'h')})`.padStart(37);
  console.log(output);
}

////////////////////////////////////////////////////////////////////////////////
/*
// Challange 4

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');
  console.log(rows);
  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${'🫡'.repeat(i + 1)}`);
  }
});

////////////////////////////////////////////////////////////////////////////

/*
// Split and join
console.log('a+very+nice+string'.split('+'));
console.log('Jonas Schmedtmann'.split(' '));

const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join('');
console.log(newName);
const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];
  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};
capitalizeName('jessica ann smith davis');
capitalizeName('jonas schmedtmann');


// Padding
const message = 'Go to gate 23!'
console.log(message.padStart(25, '+').padEnd(35, '+'));  // dodaje dana rzecz na poczatku lub na koncu podajemy jaka dlugos ma miec string i w tym przypadku uzupelni plusami zeby mialo 25 lub 35 znakow

const maskCreditCard = function(number){
  const str = number + ''; // lub String(number); 
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
}
console.log(maskCreditCard('984037409753097843098'));
console.log(maskCreditCard('9867703416278023'));

// Repeat
const message2 = 'Bad weather... All Departues Delayed...';

console.log(message2.repeat(5));

const planesInLine = function(n){
  console.log(`There are ${n} planes in line ${'🪐'.repeat(n)}`)
}
planesInLine(5);
planesInLine(3);
planesInLine(10);


////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
const airline = 'TAP Air Portugal';

console.log(airline.toLocaleLowerCase());
console.log(airline.toUpperCase());

// Fix capitalization in name
const passanger = 'jOnAS'; // Jonas
const passengerLower = passanger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1); // zamienia tylko pierwsza litere na wieksza
console.log(passengerCorrect);

const correct = function (name) {
  const passengerLower = name.toLowerCase();
  const passengerCorrect =
    passengerLower[0].toUpperCase() + passengerLower.slice(1);
  console.log(passengerCorrect);
};
correct('aDam');

// Comparing emails

const email = 'hello@jonas.io';
const loginEmail = '   Hello@Jonas.Io \n';

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim(); // usunie pusta przestrzen
console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

const sameEmail = function (email1) {
  const email = 'hello@jonas.io';
  const myemail = email1.toLowerCase().trim();
  if (myemail === email) {
    console.log('Emails are the same');
  } else {
    console.log('Emails arent the same');
  }
};
sameEmail('          hello@jonas.io');

// replacing
const priceGB = '288,97^';
const priceUS = priceGB.replace('^', '$').replace(',', '.');
console.log(priceUS);

const ValutChangeFromGBtoUS = function (money) {
  const change = money * 1.33;
  console.log(change);
};
ValutChangeFromGBtoUS(231.34);

const announcment = 'All passengers come to bording door 23. Boarding door 23!';

console.log(announcment.replace('door', 'gate')); // zmienia tylko pierwsza wartosc
console.log(announcment.replaceAll('door', 'gate')); // zmienia tylko wszystkie wartosc

console.log(announcment.replace(/door/g, 'gate')); // inny przyklad na zmanienie wszystkich wartosci

// Booleans

const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Air'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the NEW Airbus family');
}

// Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are not allowed on boeard');
  } else {
    console.log('Welcome aboard!');
  }
};
checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Soceks and Camera');
checkBaggage('Get some snacks and a gun for protection');

///////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log(plane[3]);
console.log('B737'[0]);
console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r')); // indeof pokaze nam miejsce gdzie jest dana rzecz ktora chcemy w stringu
console.log(airline.lastIndexOf('r')); // pokaze ostatnia w tym przypadku r znajdujace sie w stringu
console.log(airline.indexOf('Portugal'));

console.log(airline.slice(4)); // slice jak podamy wartosc to z tamtego momentu slice zacznie dzialac
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2)); // pokazuje od konca
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat');
  else console.log('You got lucky');
};
checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('joans'))
console.log(typeof new String('joans').slice(1))
//////////////////////////////////////////////////////////////////////////////////////////////
/*
// Challange 3

const gameEvents = new Map([
  [17, 'GOAL'],
  [36, 'SUBSTITUTION'],
  [47, 'GOAL'],
  [61, 'SUBSTITUTION'],
  [64, 'YELLOW CARD'],
  [69, 'RED CARD'],
  [70, 'SUBSTITUTION'],
  [72, 'SUBSTITUTION'],
  [76, 'GOAL'],
  [90, 'GOAL'],
  [92, 'YELLOW CARD'],
]);

//1
const events = [...new Set(gameEvents.values())];
console.log(events);

//2
gameEvents.delete(64);
console.log(gameEvents);

//3
console.log(
  `An event happend, on average, every ${90 / gameEvents.size} minutes`
);

//4
for (const [key, value] of gameEvents) {
  if (key <= 45) {
    console.log(`[First half] ${key}: ${value}`);
  } else if (key > 45) console.log(`[Second half] ${key}: ${value}`);
}

for (const [key, value] of gameEvents) {
  const half = key <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} [Half] ${key}: ${value}`);
}
///////////////////////////////////////////////////////////////////////////////////////////
/*
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Incorrect, try again'],
]);
console.log(question);

// Convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

//  Quiz app
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
const answer = 3;
console.log(answer);

console.log(question.get(question.get('correct') === answer));

// Convert map to array
console.log([...question]);
console.log([...question.entries()]);
console.log([...question.keys()]);
console.log([...question.values()]);


/*
////////////////////////////////////////////////////////////////////////////////////////
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open')
  .set(false, 'We are closed');

console.log(rest.get('name'));
console.log(rest.get(true));

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
console.log(rest);
const arr = [1, 2];
rest.set(arr, 'Test');
console.log(rest.size);
// rest.clear();
console.log(rest);

console.log(rest.get(arr));

/*
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const commonFoods = italianFoods.intersection(mexicanFoods); // linijka pokaze tylko rzeczy ktore sa w obu tablicach
console.log(commonFoods);
console.log([...commonFoods]);

// polaczenie obu set w jednego ale bez powtarzania slow
const italianMexicanFusion = italianFoods.union(mexicanFoods);
console.log(italianMexicanFusion);
console.log([...italianMexicanFusion]);

console.log(new Set([...mexicanFoods, ...italianFoods]));

// pokazuje tylko rzeczy ktora nie znajduja sie w drugiej tablicy a znajduja w pierszej
const uniqueItalianFoods = italianFoods.difference(mexicanFoods);
console.log(uniqueItalianFoods);

const uniqueMexicanFoods = mexicanFoods.difference(italianFoods);
console.log(uniqueMexicanFoods);

// pokazuje tylko rzeczy ktore sa w obu tablicach ale nie sa wspolne tzn z jesli w obu jest jablko to nie wyswietli jablka
const uniqueItalianAndMexicanFoods =
  italianFoods.symmetricDifference(mexicanFoods);
console.log(uniqueItalianAndMexicanFoods);

console.log(italianFoods.isDisjointFrom(mexicanFoods)); // sprawdzi czy calkowiecie sa inne jesli maja cos wspolnego to napisze false

////////////////////////////////////////////////////////
/*
// set can't have any of duplicates
const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(ordersSet);

console.log(new Set('Jonas'));
// zwraca
// Set(5) {'J', 'o', 'n', 'a', 's'}

console.log(ordersSet.size);
console.log(ordersSet.has('Pizza')); // mozna sprawdzic czy dana wartosc wystepuje (has)
console.log(ordersSet.has('Bread'));
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
ordersSet.delete('Pizza');
// ordersSet.clear(); // usuwa wszystko
console.log(ordersSet);

for (const order of ordersSet) console.log(order);

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)]; // tworzy tablice nowa zamiast bycia size
console.log(staffUnique);
// pokazae nam ilosc 
console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);
// oblicza ile jest liczb w slowie
console.log(new Set('pedalgejchuj123545').size);

//////////////////////////////////////////////////////////////////////////////////
/*
// Challenge #2

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnabry',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnabry', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1
const goals = Object.entries(game.scored);
console.log(goals);

for (const [number, player] of goals) {
  console.log(`Goal ${Number(number) + 1} scored by ${player}`);
}

// 2

const odd = Object.values(game.odds);
let average = 0;
for (const averageOdds of odd) {
  average += averageOdds;
}
average /= odd.length;
console.log(average);

// 3
const odds = Object.entries(game.odds);
console.log(odds);
for (const [team, odd] of odds) {
  console.log(
    `Odd of ${team === 'x' ? 'draw' : `victory ${game[team]}`} is ${odd}`
  );
}

//////////////////////////////////////////////////////////////////////////////////////////////////////
/*
// PROPERTY NAMES
// Object to struktura danych która przechowuje dane w formie par klucz-wartość (key-value)
// Object.keys() zwraca tablicę zawierającą nazwy właściwości (klucze) obiektu
const properties = Object.keys(openingHours); // ['thu', 'fri', 'sat']
console.log(properties);

let openStr = `We are open on ${properties.length} days:`;

for (const day of properties) {
  openStr += `${day},`;
  openStr;
}
console.log();

// PROPERTY VALUES
// Object.values() zwraca tablicę zawierającą wartości właściwości obiektu
// W tym przypadku zwraca obiekty z godzinami otwarcia/zamknięcia
const values = Object.values(openingHours); // [{open: 12, close: 22}, {open: 11, close: 23}, ...]
console.log(values);

// Przykład różnicy:
// openingHours = {
//   thu: {open: 12, close: 22} <- thu to klucz (key), a {open,close} to wartość (value)
//   fri: {open: 11, close: 23} <- fri to klucz (key), a {open,close} to wartość (value)
// }


// Entire object
const entries = Object.entries(openingHours);
// console.log(entries);


// [key, value]
for(const [key, {open, close}] of entries){
  console.log(`On ${key} we open at ${open} and close at ${close}`);
  
}

///////////////////////////////////////////////////////////////////////////////////////
/*
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

// WITH OPTIONAL CHAINING (TAK POWINNO SIE ROBIC)
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

// Przykład:
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  // console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(
    `On ${day}, we ${open === 'closed' ? 'are closed' : `open at ${open}`}`
  );
}

// Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// Arrays

const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];

console.log(users[0]?.name ?? 'User array empty');


// if (restaurant.openingHours.fri) console.log(restaurant.openingHours.fri.open);

////////////////////////////////////////////////////////////////////////////////////
/*
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// prostszy sposob na zrobienei loop za pomoca for i of
for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}
// zwraca
// 1: Focaccia
// 2: Bruschetta
// 3: Garlic Bread
// 4: Caprese Salad
// 5: Pizza
// 6: Pasta
// 7: Risotto

console.log([...menu.entries()]);

///////////////////////////////////////////////////////////////////////////////////
/*
// CHALLENGE #1

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnabry',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnabry', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1.
const players1 = game.players[0];
const players2 = game.players[1];

console.log(players1, players2);


// 2.
const [gk, ...fieldPlayers] = players1;

console.log(gk, fieldPlayers);


// 3.
const allPlayers = [...players1, ...players2];

console.log(allPlayers);


// 4.
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

console.log(players1Final);

// 5.
const { team1, x: draw, team2 } = game.odds;

console.log(team1, draw, team2);

// 6.
const printGoals = function (...players) {
  console.log(`${players.length} goals were scored`);
  
};

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

// 7.
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 1 is more likely to win');

///////////////////////////////////////////////////////////////////////////////
/*
const rest1 = {
  name: 'Capri',
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

// OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// to samo to co u gory
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// nullish assignment operator (null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// rest2.owner = rest2.owner && '<anonymous>';
// rest1.owner = rest1.owner && '<anonymous>';
// dziala tak samo jak to u gory
rest2.owner &&= '<anonymous>';
rest1.owner &&= '<anonymous>';

console.log(rest2);
console.log(rest1);

/*
///////////////////////////////////////////////////////////////////////////////
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);


// Nullish: null and undefined (NOT 0 or '')
const guestCorrect = restaurant.numGuests ?? 10; // ?? polega to na tym ze nawet jesli wartosc wynosi 0 czyli null to i tak bedzie zwracana poniewaz jest wartoscia 
console.log(guestCorrect);


/*
/////////////////////////////////////////////////////////////////////////////
// Use ANY data type, return ANY data type, short-circuiting
// OR, AND
console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null); // zwarac wartosc prawdziwa w tym przypadku pierwsza jest hello

// restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10; // ? sprawdza czy podana wartosc istnieje a : zwraca podana wartosc przez nas jesli wartosc nieistnieje podana przez nas wczesniej
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('----AND----'); // odwrotnosc ,,or'' jesli wartosc bedzie falszywa zwraca ja odrazu
console.log(0 && 'jonas');
console.log(10 && 'jonas');

console.log('Hello' && 23 && null & 'jonas'); // zwracana jest null poniewaz jest to pierwsza falszywa wartosc

// Pracitcal example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

/*
//////////////////////////////////////////////////////////
// 1) Destructuring
// Spread, beacuse on RIGHT side of =
const arr = [1, 2, ...[3, 4]];

// Rest, beacuse on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// Objects

const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2) Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(5, 3, 6, 7, 8, 2, 1, 23, 34);

// przeniesienie wartosci z tablicy do funkcji
const x = [23, 5, 10];
add(...x);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');
////////////////////////////////////////////////////////////////////////////////
/*
const arr = [7, 8, 9];
const NewArr = [1, 2, ...arr];
console.log(NewArr);

console.log(...NewArr);

// dodawanie wartosci do nowej tablicy lecz pobieranie wartosci z innej
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

// Iterables: arrays, strings, maps, sets. NOT OBJECTS

// Real-world example
const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters);
console.log(...str);

const ingredients = [
  // prompt("Let's make pasta! Ingredient 1?"),
  // prompt('Ingredient 2?'),
  // prompt('Ingredient 3?'),
];
console.log(ingredients);

restaurant.orderPasta(...ingredients);


// Objects 
const newRestaurant = {foundedIn: 1998, ...restaurant, founder: 'Guiseppe'}
console.log(newRestaurant);


const restaurantCopry = {...restaurant};
restaurantCopry.name = 'Ristorante Roma';
console.log(restaurantCopry, restaurant);

/////////////////////////////////////////////////////////////////////////////////////
/*
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del sole, 21',
  starterIndex: 1,
});
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurant, hours, tags);

// Default values
const { menu = [], starterMenu: starters = [] } = restaurant;

console.log(menu, starters);

// Mutating variables
let a = 11;
let b = 99;
const obj = { a: 23, b: 7, c: 14 };

// tak mozna zamieniac wartosci
({ a, b } = obj);
console.log(a, b);

// nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);
//////////////////////////////////////////////////////////////////////////////////////////////////
/*
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);
// jak chcemy wyciagnac np 1 i 3 rzecz z tablicy pozostawiamy puste miejsce na miejscu 2
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// // jak zamienic je miejscami
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// jak zrobic to prosciej
[main, secondary] = [secondary, main];

// Otrzymywanie 2 wartosci z funkcji
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;

const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);




/////////////////////////////////////////////////////////////////////////////////////


// Powtorka

// 1) Destructure the books array into a variable called thirdBook. You must skip the first two books.

const [ , ,thirdBook] = books;

// 2) Below is the nested ratings array that contains two other arrays. Destructure the nested ratings arrays into two variables called rating and ratingsCount. In the result of your destructuring, the ratings variable should store a number 4.19, and the ratingsCount variable should store a number 144584.

const ratings = [['rating', 4.19], ['ratingsCount', 144584]];
const [[, rating], [, ratingsCount]]= ratings;

// 3) Below is the ratingStars array. Destructure it into three variables called fiveStarRatings, oneStarRatings and threeStarRatings. Assign the threeStarRatings variable with a default value of 0.

const ratingStars = [63405, 1808];

const [fiveStarRatings, oneStarRatings, threeStarRatings = 0] = ratingStars;
 
// 4) Destructure the first book object from the books array into variables called title, author and ISBN.

const {title, author, ISBN} = books[0];
 
// 5) Each book object has the keywords property. Destructure the first book object from the books array into a variable called tags. The tags variable should be assigned with the value of the keywords property.

// W tym przypadku używamy składni {keywords: tags}, gdzie:
// - keywords to nazwa właściwości w obiekcie books[0]
// - tags to nowa nazwa zmiennej, do której chcemy przypisać wartość tej właściwości
// Jest to przydatne gdy chcemy przypisać wartość właściwości do zmiennej o innej nazwie
const {keywords: tags} = books[0];

// 6)  The seventh book from the books array is missing the programmingLanguage property. Destructure the seventh book object (books[6]) into variables called language and programmingLanguage. Assign the programmingLanguage variable with a default value of 'unknown'.

const {language, programingLanguage = 'unknown'} = books[6];

// 7) Below are two variables called bookTitle and bookAuthor. Reassign them with the values of the title and author properties of the first book object from the books array.
let bookTitle = 'unknown';
let bookAuthor = 'unknown';

({bookTitle, bookAuthor} = books[0]);

// 8)  Write a function called printBookInfo that has three parameters called title, author and year. This function should work for a single object passed as an argument, and it should log to the console information about the book in this format: "${title} by ${author}, ${year}".

If year is undefined (was not passed), it should be assigned with a default value of 'year unknown'.

const printBookInfo = function (title, author, year= 'year unknown') {
  console.log(`${title} by ${author}, ${year}`);
};

printBookInfo({
  title: 'Algorithms',
  author: 'Robert Sedgewick',
  year: '2011'
});

// 9) Write a function called spellWord that accepts a single string as an argument. This function should log to the console each letter of the argument separated by a space.

const spellWord = function(word){
 console.log(...word);
 
};
spellWord('JavaScript')


*/
