import pairs from '@hexlet/pairs';
import utils from '../utils.js';
import startGameFlow from '../index.js';

function isEven(number) {
  return number % 2 === 0;
}

function generateQuestionAnswerPair() {
  const num = utils.getRandomInt(1, 100);

  const question = String(num);
  const answer = isEven(num) ? 'yes' : 'no';

  return pairs.cons(question, answer);
}

function startGame() {
  startGameFlow({
    rules: 'Answer "yes" if the number is even, otherwise answer "no".',
    generateQuestionAnswerPair,
  });
}

export default startGame;
