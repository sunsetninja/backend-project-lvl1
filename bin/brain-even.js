#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { getUserName, greetUser } from '../src/cli.js';
import { getRandomIntFromInterval, isEven } from '../src/utils.js';

function getAnswersPair() {
  const randomNumber = getRandomIntFromInterval(1, 100);
  console.log(`Question: ${randomNumber}`);
  const answer = readlineSync.question('Your answer: ');
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';

  return [
    answer,
    correctAnswer,
  ];
}

console.log('Welcome to the Brain Games!');
const userName = getUserName();
greetUser(userName);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

const TOTAL_QUESTIONS_COUNT = 3;
let questionsAsked = 0;
let correctAnswersCount = 0;

while (questionsAsked < TOTAL_QUESTIONS_COUNT) {
  const [answer, correctAnswer] = getAnswersPair();
  questionsAsked += 1;

  if (answer === correctAnswer) {
    console.log('Correct!');
    correctAnswersCount += 1;
  } else {
    console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
    break;
  }
}

if (correctAnswersCount === TOTAL_QUESTIONS_COUNT) {
  console.log(`Congratulations, ${userName}!`);
} else {
  console.log(`Let's try again, ${userName}!`);
}
