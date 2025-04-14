'use strict';

/*
document.querySelector('.message').textContent; // jesli chcemy uzyc danej klasy/id z html  // Jesli dopiszemy .textContent to w tym momencie wyswietli nam sie zawartosc danej linijki ktora wyczytujemy z html

document.querySelector('.message').textContent = '🫡 Correct Number!'; // w taki sposob mozemy zmienic zawartosc danego tekstu

document.querySelector('.number').textContent = 13; // JESLI NIE NAPISZEMY .TEXTCONTENT NIE BEDZIEMY MOGLI ZMIENIC TEKSTU !!!!!!!!!!!



document.querySelector('.guess').value = 15;  // JESLI ZMIENIAMY WARTOSC A NIE TEKST TO MUSIMY UZYC .VALUE 

*/

let secretNumber = Math.trunc(Math.random() * 20) + 1; // losowanie liczb math.trunc polega na tym aby nie bylo liczby po przecinku a math.random losuje liczbe
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);
  // Kiedy nie podamy zadnej cyfyr
  if (!guess) {
    // document.querySelector('.message').textContent = '😒 No number!'; // jesli nie podamy liczby w guess (boxie) to mamy wartosc falszywom czyli 0 i wtedy wiadomosc zamienia sie na no number
    displayMessage('😒 No number!');
  } else if (guess === secretNumber) {
    // Kiedy wygrywamy
    // document.querySelector('.message').textContent = '💪 Correct Number';
    displayMessage('💪 Correct Number');
    document.querySelector('body').style.backgroundColor = '#60b347'; // JESLI CHCEMY ZMIENIC JAKIS STYL MUSIMY UZYC .STYLE I POTEM . I PODAC JAKIS STYL ZMIENIAMY NP .backgroundColor = 'color';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // Kiedy cyfra jest inna
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? 'Too high' : 'Too low'; // jesli uzywamy ? to oznacza ze odpowiedz to too high a jesli : to oznacza ze jesli wyniki jest < to ma byc too low

      displayMessage(guess > secretNumber ? 'Too high' : 'Too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost';
      document.querySelector('.score').textContent = 0;
    }
  }
  //    // Kiedy cyfra jest za wysoka
  //   else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too high';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost';
  //     document.querySelector('.score').textContent = 0;
  //   }

  //   // Kiedy cyfra jest zaniska
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too low';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = ''; // zmiana wartosci pola z liczba
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
