import pairs from '@hexlet/pairs';
import { getRandomInt } from '../utils.js';
import playGameFlow from '../index.js';

function generateQuestionAnswerPair() {
  function findGcd(paramNumA, paramNumB) {
    let numA = paramNumA;
    let numB = paramNumB;

    while (numA !== 0 && numB !== 0) {
      if (numA > numB) {
        numA %= numB;
      } else {
        numB %= numA;
      }
    }

    return numA + numB;
  }

  const nums = [
    getRandomInt(1, 100),
    getRandomInt(1, 100),
  ];

  const question = nums.join(' ');
  const answer = String(findGcd(nums[0], nums[1]));

  return pairs.cons(question, answer);
}

function startGame() {
  playGameFlow(
    'Find the greatest common divisor of given numbers.',
    generateQuestionAnswerPair,
  );
}

export default startGame;
