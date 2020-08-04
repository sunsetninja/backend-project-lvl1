import pairs from '@hexlet/pairs';
import utils from '../utils.js';
import startGameFlow from '../index.js';

function isEven(number) {
  return number % 2 === 0;
}

function generateQuestion() {
  const num = utils.getRandomInt(1, 100);

  return pairs.cons(String(num), isEven(num) ? 'yes' : 'no');
}

function startGame() {
  startGameFlow({
    rules: 'Answer "yes" if the number is even, otherwise answer "no".',
    generateQuestion,
  });
}

export default startGame;
