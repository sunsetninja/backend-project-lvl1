import pairs from '@hexlet/pairs';
import { getRandomInt } from '../utils.js';
import playGameFlow from '../index.js';

function isPrime(number) {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i < number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

function generateQuestionAnswerPair() {
  const num = getRandomInt(1, 100);

  const question = String(num);
  const answer = isPrime(num) ? 'yes' : 'no';

  return pairs.cons(question, answer);
}

function startGame() {
  playGameFlow(
    'Answer "yes" if given number is prime. Otherwise answer "no".',
    generateQuestionAnswerPair,
  );
}

export default startGame;
