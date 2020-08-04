#!/usr/bin/env node

import pairs from '@hexlet/pairs';
import { getRandomIntFromInterval, isEven } from '../src/utils.js';
import startGameFlow from '../src/index.js';

function generateQuestion() {
  const num = getRandomIntFromInterval(1, 100);

  return pairs.cons(String(num), isEven(num) ? 'yes' : 'no');
}

startGameFlow({
  rules: 'Answer "yes" if the number is even, otherwise answer "no".',
  generateQuestion,
});
