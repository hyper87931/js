// Remember, we're gonna use strict mode in all scripts now!
"use strict";
/*
const temperatures = [3, -2, -6, -1, "error", 9, 14, 17, 15, 14, 9, 5];

// const calcTempAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== "number") continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };
// const amplitude = calcTempAmplitude(temperatures);
// console.log(amplitude);


//
//
//                                          LACZENIE DWOCH TABLIC ORAZ WYSZUKIWANIE Z TABLICY MAX I MIN WARTOSCI
//
//
const calcTempAmplitudeNew = function (t1, t2) {
  // Połączenie dwóch tablic ze sobą za pomocą array
  const temps = t1.concat(t2);
  console.log(temps);
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue; // polega to na pominieciu danej rzeczy jesli nie jest ona liczba poniewaz !== oznacza jesli nie jest rowne

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 10, 11]);
console.log(amplitudeNew);
*/
/*
//
//
//                                                   NAPRAWIENIE BLEDOW
//
//
const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",
    // Napraw bledy polegajacy na tym ze mamy stringa ktory nie jest cyfra
    // value: prompt("Degrees celsius:"),

    // value: Number(prompt("Degrees celcius:")),
    value: 10,
  };

  console.log(measurement);

  //   console.log(measurement.value);

  const kelvin = measurement.value + 273;

  return kelvin;
};

console.log(measureKelvin());

//
//
//                                                  PRZYKLAD DRUGI
//
//
const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue; // polega to na pominieciu danej rzeczy jesli nie jest ona liczba poniewaz !== oznacza jesli nie jest rowne

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 11]);

// A) ZNALEZIENIE BLEDU
console.log(amplitudeBug);
*/
/*
//
//
//      zadanie
//
//

// - zrobienie funkcji o naziwe printforecast ktora pobierane dane o temperatury z tablicy
// - wyswietlanie ich za pmoca stringa
// - wyswietlenie w konsoli 

// zdefiniowanie temperatury
const temperatures = [17, 21, 23];

const printForecast = function (arr) {
  // zapisywanie wyniku jako string
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    // zapisywany wynik jest str do ktorego dodajmy ${arr[i]} czyli pierwsza wartosc z tablicy temperatury i tak w kolko az sie skonczy tablica i dodajemy jeszcze ${i + 1} czyli obecnia wartosc tablicy + 1
    str = str + ` ...${arr[i]}C in ${i + 1} days`;
  }
  console.log(str);
};
printForecast(temperatures);
*/