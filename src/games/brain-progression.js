import pairs from '@hexlet/pairs';
import { getRandomInt } from '../utils.js';
import playGame from '../index.js';

function generateQuestionAnswer() {
  const startFrom = getRandomInt(1, 100);
  const delta = getRandomInt(2, 10);
  const length = getRandomInt(8, 10);
  const secretIndex = getRandomInt(0, length - 1);

  const progression = [];

  for (let i = 0; i < length; i += 1) {
    progression.push(startFrom + (i * delta));
  }

  const secret = progression[secretIndex];

  progression[secretIndex] = '..';

  const question = progression.join(' ');
  const answer = String(secret);

  return pairs.cons(question, answer);
}

const gameRule = 'What number is missing in the progression?';

function startGame() {
  playGame(
    gameRule,
    generateQuestionAnswer,
  );
}

export default startGame;
