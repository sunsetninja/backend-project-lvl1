#!/usr/bin/env node

import pairs from '@hexlet/pairs';
import { getRandomIntFromInterval } from '../src/utils.js';
import startGameFlow from '../src/index.js';

const operators = ['+', '-', '*'];

function getQuestion() {
  return `${getRandomIntFromInterval(1, 10)} ${operators[getRandomIntFromInterval(0, 2)]} ${getRandomIntFromInterval(1, 10)}`;
}

function getCorrectAnswer(question) {
  const [operandA, operator, operandB] = question.split(' ');

  switch (operator) {
    case operators[0]:
      return Number(operandA) + Number(operandB);
    case operators[1]:
      return Number(operandA) - Number(operandB);
    case operators[2]:
      return Number(operandA) * Number(operandB);
    default:
      return null;
  }
}

startGameFlow({
  rules: 'What is the result of the expression?',
  questionAnswerPair: pairs.cons(getQuestion, getCorrectAnswer),
});
