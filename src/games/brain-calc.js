import pairs from '@hexlet/pairs';
import utils from '../utils.js';
import startGameFlow from '../index.js';

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

  const expression = `${utils.getRandomInt(1, 10)} ${operators[utils.getRandomInt(0, 2)]} ${utils.getRandomInt(1, 10)}`;

  return pairs.cons(expression, String(getCorrectAnswer(expression)));
}

function startGame() {
  startGameFlow({
    rules: 'What is the result of the expression?',
    generateQuestionAnswerPair,
  });
}

export default startGame;
