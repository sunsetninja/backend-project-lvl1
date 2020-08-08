import pairs from '@hexlet/pairs';
import utils from '../utils.js';
import playGameFlow from '../index.js';

function generateQuestionAnswerPair() {
  const operators = ['+', '-', '*'];
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

  const question = `${utils.getRandomInt(1, 10)} ${operators[utils.getRandomInt(0, 2)]} ${utils.getRandomInt(1, 10)}`;
  const answer = String(getCorrectAnswer(question));

  return pairs.cons(question, answer);
}

function startGame() {
  playGameFlow({
    rules: 'What is the result of the expression?',
    generateQuestionAnswerPair,
  });
}

export default startGame;
