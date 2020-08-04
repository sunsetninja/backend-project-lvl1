import pairs from '@hexlet/pairs';
import utils from '../utils.js';
import startGameFlow from '../index.js';

function isPrime(number) {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return number > 1;
}

function generateQuestion() {
  const num = utils.getRandomInt(1, 100);

  return pairs.cons(String(num), isPrime(num) ? 'yes' : 'no');
}

function startGame() {
  startGameFlow({
    rules: 'Answer "yes" if given number is prime. Otherwise answer "no".',
    generateQuestion,
  });
}

export default startGame;
