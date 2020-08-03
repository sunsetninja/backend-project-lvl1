export function getRandomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function isEven(number) {
  return number % 2 === 0;
}
