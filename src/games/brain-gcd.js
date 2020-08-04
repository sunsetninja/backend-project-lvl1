import pairs from '@hexlet/pairs';
import utils from '../utils.js';
import startGameFlow from '../index.js';

function generateQuestion() {
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

  return pairs.cons(nums.join(' '), String(findGcd(nums)));
}

function startGame() {
  startGameFlow({
    rules: 'Find the greatest common divisor of given numbers.',
    generateQuestion,
  });
}

export default startGame;
