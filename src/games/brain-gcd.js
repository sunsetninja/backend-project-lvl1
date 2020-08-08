import pairs from '@hexlet/pairs';
import utils from '../utils.js';
import playGameFlow from '../index.js';

function generateQuestionAnswerPair() {
  function findGcd(nums) {
    let numA = Number(nums[0]);
    let numB = Number(nums[1]);

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
    utils.getRandomInt(1, 100),
    utils.getRandomInt(1, 100),
  ];

  const question = nums.join(' ');
  const answer = String(findGcd(nums));

  return pairs.cons(question, answer);
}

function startGame() {
  playGameFlow(
    'Find the greatest common divisor of given numbers.',
    generateQuestionAnswerPair,
  );
}

export default startGame;
