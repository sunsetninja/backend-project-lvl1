import pairs from '@hexlet/pairs';
import { getRandomInt } from '../utils.js';
import playGame from '../index.js';

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

function generateQuestionAnswer() {
  const numA = getRandomInt(1, 100);
  const numB = getRandomInt(1, 100);

  const question = `${numA} ${numB}`;
  const answer = String(findGcd(numA, numB));

  return pairs.cons(question, answer);
}

const gameRule = 'Find the greatest common divisor of given numbers.';

function startGame() {
  playGame(
    gameRule,
    generateQuestionAnswer,
  );
}

export default startGame;
