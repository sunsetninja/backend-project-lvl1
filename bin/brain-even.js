#!/usr/bin/env node

import pairs from '@hexlet/pairs';
import { getRandomIntFromInterval, isEven } from '../src/utils.js';
import startGameFlow from '../src/index.js';

function getQuestion() {
  return getRandomIntFromInterval(1, 100);
}

function getCorrectAnswer(question) {
  return isEven(question) ? 'yes' : 'no';
}

startGameFlow({
  rules: 'Answer "yes" if the number is even, otherwise answer "no".',
  questionAnswerPair: pairs.cons(getQuestion, getCorrectAnswer),
});
