'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

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

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']

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
