import pairs from '@hexlet/pairs';
import utils from '../utils.js';
import playGameFlow from '../index.js';

function generateQuestionAnswerPair() {
  const startFrom = utils.getRandomInt(1, 100);
  const delta = utils.getRandomInt(2, 10);
  const length = utils.getRandomInt(8, 10);
  const secretIndex = utils.getRandomInt(0, length - 1);

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

function startGame() {
  playGameFlow(
    'What number is missing in the progression?',
    generateQuestionAnswerPair,
  );
}

export default startGame;
