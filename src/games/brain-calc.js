import pairs from '@hexlet/pairs';
import utils from '../utils.js';
import playGameFlow from '../index.js';

const operators = ['+', '-', '*'];
function getCorrectAnswer(operandA, operator, operandB) {
  switch (operator) {
    case operators[0]:
      return operandA + operandB;
    case operators[1]:
      return operandA - operandB;
    case operators[2]:
      return operandA * operandB;
    default:
      return null;
  }
}

function generateQuestionAnswerPair() {
  const [operandA, operator, operandB] = [
    utils.getRandomInt(1, 10),
    operators[utils.getRandomInt(0, 2)],
    utils.getRandomInt(1, 10),
  ];
  const question = `${operandA} ${operator} ${operandB}`;
  const answer = String(getCorrectAnswer(operandA, operator, operandB));

  return pairs.cons(question, answer);
}

function startGame() {
  playGameFlow(
    'What is the result of the expression?',
    generateQuestionAnswerPair,
  );
}

export default startGame;
