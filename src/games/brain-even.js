import pairs from '@hexlet/pairs';
import { getRandomInt } from '../utils.js';
import playGameFlow from '../index.js';

function isEven(number) {
  return number % 2 === 0;
}

function generateQuestionAnswer() {
  const num = getRandomInt(1, 100);

  const question = String(num);
  const answer = isEven(num) ? 'yes' : 'no';

  return pairs.cons(question, answer);
}

function startGame() {
  playGameFlow(
    'Answer "yes" if the number is even, otherwise answer "no".',
    generateQuestionAnswer,
  );
}

export default startGame;
