#!/usr/bin/env node

import pairs from '@hexlet/pairs';
import { getRandomIntFromInterval } from '../src/utils.js';
import startGameFlow from '../src/index.js';

function generateQuestion() {
  const startFrom = getRandomIntFromInterval(1, 100);
  const delta = getRandomIntFromInterval(2, 10);
  const length = getRandomIntFromInterval(8, 10);
  const secretIndex = getRandomIntFromInterval(0, length - 1);

  const progression = [startFrom];

  for (let i = 1; i < length; i += 1) {
    progression.push(startFrom + (i * delta));
  }

  const secret = progression[secretIndex];

  progression[secretIndex] = '..';

  return pairs.cons(progression.join(' '), String(secret));
}

startGameFlow({
  rules: 'What number is missing in the progression?',
  generateQuestion,
});
