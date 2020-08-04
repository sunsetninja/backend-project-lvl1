#!/usr/bin/env node

import pairs from '@hexlet/pairs';
import { getRandomIntFromInterval } from '../src/utils.js';
import startGameFlow from '../src/index.js';

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

  const nums = [getRandomIntFromInterval(1, 100), getRandomIntFromInterval(1, 100)];

  return pairs.cons(nums.join(' '), String(findGcd(nums)));
}

startGameFlow({
  rules: 'Find the greatest common divisor of given numbers.',
  generateQuestion,
});
