'use strict';

// Wybieranie elementów
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const currentScore0 = document.querySelector('#current--0');
const currentScore1 = document.querySelector('#current--1');
const sectionPlayer0 = document.querySelector('.player--0');
const sectionPlayer1 = document.querySelector('.player--1');
const switchPlayer = function () {
  // Resetowanie wyniku do 0
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  // Zmiana gracza
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  sectionPlayer0.classList.toggle('player--active'); // toggle oznacza ze jesli posiada dana klasa ktora poddajemy to ja usuwa a jesli nie to ja dodaje
  sectionPlayer1.classList.toggle('player--active');
};

let scores, currentScore, activePlayer, playing; // deklaracja 

// Początkowe wartości

const start = function () {
  scores = [0, 0]; // nie mozemy deklarowac wartosci w const funcji poniewaz nie beda one nigdy czytane jesli bedziemy chcieli je wykazac musimy pierw stworzyc je pozajakkoliwke funkcja 
  currentScore = 0; // i dopiero wtedy dopisac do nich wartosći
  activePlayer = 0;
  playing = true;

  diceEl.classList.add('hidden');
  score0El.textContent = 0;
  score1El.textContent = 0;

  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');
  sectionPlayer0.classList.add('player--active');
  sectionPlayer1.classList.remove('player--active');
  document.getElementById(`current--0`).textContent = 0;
  document.getElementById(`current--1`).textContent = 0;
};
start();

// Dzialanie btnRoll

btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. Generowanie randomowej liczby od 1-6
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. Pokazanie tej liczby jako kostka
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`; // wyswietlanie zdjecia kostki danej liczby zaleznie od wylosowania

    // 3. Sprawdzamy czy wylosowano 1
    if (dice !== 1) {
      // Dodaj wynik do obecnego wyniki
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // jeśli tak zmien na kolejnego gracza
      if (dice === 1) {
        switchPlayer();
      }
    }
  }
});

// Dzialanie btnHold

btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. Dodaj obecny wynik do wyniku obecnego gracza
    scores[activePlayer] += currentScore;
    // scores[1] = scores[1] + currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // 2. Sprawdz czy wynik zawodnika jest wiekszy niz >=100
    if (scores[activePlayer] >= 10) {
      // Jesli tak skoncz gre
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      diceEl.classList.add('hidden');
    }
    // Jesli nie zamien gracza na kolejnego
    else switchPlayer();
  }
});

// Dzialania btnNew (resetowanie gry)
btnNew.addEventListener('click', function () {
  start();
});
