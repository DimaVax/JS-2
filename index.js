"use strict";
// 1
// Створити змінні для зберігання температури за Цельсієм та Фаренгейтом. Перевести температуру з Цельсія у Фаренгейти за допомогою формули та вивести результат в консоль.
const celsius = 4;
const farengeit = 33.8;
const celsiusToFarengeit = (celsius * 9/5) + 32;
console.log(celsiusToFarengeit)
// 2
const monthDays = 31;
const monthHours = monthDays * 24;
const monthSeconds = monthHours * 60;
console.log("В місяці є", monthDays,"день,",monthHours, "годин і", monthSeconds,"секунд");
// 3
const health = 100;
const energy = 100;
const resultHealth = health - 20;
const resultEnergy = energy - 30;
console.log("Здоров'я =", resultHealth, ", Енергія =",resultEnergy);
// 4
const sum = 100;
const sale = sum * 0.9;
console.log("Спрацювала знижка в 10%! До заплати",Math.round(sale),"грн.");
// 5
let a = 1.93863542;
console.log(Math.floor(a));
// 6
let b = '9.03292';
console.log(Number.parseFloat(b));
// 7
let c = '111.9';
console.log(Number.parseInt(c));
// 8
let d = 64;
console.log(Math.sqrt(d));
// 9
const number = 6;
const notNumber = "7";
console.log(Number.parseInt(notNumber),"це був рядок");
console.log(number.toString(), "- це було число");
